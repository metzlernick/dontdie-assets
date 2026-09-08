# Don't Die Cosmetic Art — Illustrator Vector Trace Workflow

**Status: VALIDATED / LOCKED for normal flat cosmetic raster-to-vector handoff.**

## Scope
This workflow applies after the applicable category generation/isolation/registration stage has produced an approved raster ready for Illustrator.

It applies to normal flat outlined cosmetics. Neon/glow/soft-effect cosmetics are excluded and require separate treatment because flat Image Trace cannot faithfully preserve raster glow behavior.

## Validated downstream architecture

**Approved raster → deterministic TRACE PREP V3 → Illustrator Image Trace baseline → Expand → manual vector cleanup/placement.**

The two downstream operations are treated as one production handoff:

1. **TRACE PREP V3 — agent-owned, batchable.** The agent runs all eligible approved rasters through the deterministic preprocessing script in one batch whenever tools permit. The user should not manually preprocess files.
2. **ILLUSTRATOR TRACE — user-owned, one image at a time.** The user selects exactly one trace-ready placed/raster image and runs `DONT_DIE_IMAGE_TRACE.jsx`.

Normal user experience: receive trace-ready files → place all in Illustrator → select one image → invoke trace script → inspect → repeat for next image.

One-at-a-time tracing is intentionally preferred because Illustrator tracing is asynchronous and can be computationally heavy. This gives more reliable execution, immediate QC, and prevents a failed trace from being buried inside a multi-image batch. Each source sheet already contains multiple variants, so per-sheet tracing is still efficient.

## TRACE PREP V3
Authority implementation: `scripts/DONT_DIE_TRACE_PREP_V3.py`.

Purpose: eliminate scalloped/blobby outer contours caused by tracing low-resolution antialiased raster boundaries while preserving interior colors.

Algorithm:
- detect non-white artwork conservatively;
- reconstruct the outer artwork silhouette separately from interior colors;
- supersample silhouette 4× with Lanczos;
- smooth the silhouette mask at high resolution;
- threshold to a crisp outer boundary;
- enlarge original interior colors 4× with Lanczos;
- composite preserved interior colors through the reconstructed mask onto pure white;
- apply only a very light final high-resolution smoothing pass;
- do **not** globally quantize the palette.

The V1/V2 experiments that only enlarged/smoothed the original antialiasing or globally quantized colors are rejected for normal production because they either preserved contour chatter or damaged color fidelity.

## Validated Illustrator Image Trace baseline
For TRACE PREP V3 normal assets:

- Mode: **Color**
- Palette: **Limited / automatic**
- Colors: **30**
- Paths: **25%**
- Corners: **70%**
- Noise: **4 px**
- Method: **Abutting**
- Create: **Fills only**
- Strokes: **Off**
- Snap Curves to Lines: **Off**
- Ignore Color White: **Off / unchecked**

Then **Expand**.

This baseline was validated against the fishing-rod stress test: long thin outer contours remained smooth while small reel/fish/bobber details survived to a production-usable degree.

## Illustrator automation
Authority implementation: `scripts/DONT_DIE_IMAGE_TRACE.jsx`.

The script:
- requires exactly one selected `PlacedItem` / `RasterItem`;
- applies the validated trace settings;
- uses color tracing, 30 max colors, fills only, and keeps white (`ignoreWhite = false`);
- maps the validated UI Paths/Corners/Noise values to Illustrator scripting values;
- expands the result by default;
- leaves the resulting vector group selected;
- rejects multi-selection intentionally.

If a future Illustrator version changes internal trace behavior, validate against the same long-thin fishing-rod contour stress test before changing this authority.

## Acceptance gate
PASS when:
- outer black contours are smooth rather than scalloped/blobby;
- apparent outline thickness remains faithful to source;
- major interior color regions remain recognizable and correctly separated;
- small useful details survive without exploding into raster-edge fragments;
- white regions are preserved through tracing when required;
- no global muddy palette shift is introduced.

Minor vector cleanup after Expand is expected. Do not re-open upstream generation architecture for trace-only artifacts.

## Failure classification
- `SYSTEM FAIL` at this downstream stage: TRACE PREP V3 or the validated trace baseline structurally produces scalloped/blobby contours across representative normal assets.
- local missing/merged tiny detail after otherwise clean tracing: downstream cleanup issue, not evidence to redesign a validated category generation architecture.

## Core rule
**Normal approved rasters are batch-prepared by the agent with TRACE PREP V3, then vectorized in Illustrator one sheet at a time with the locked trace script. Preserve white, inspect each trace immediately, and keep validated generation architecture unchanged.**
