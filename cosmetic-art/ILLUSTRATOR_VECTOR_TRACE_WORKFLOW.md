# Don't Die Cosmetic Art — Illustrator Vector Trace Workflow

**Status: VALIDATED / LOCKED for normal flat cosmetic raster-to-vector handoff.**

## Scope
This workflow applies after the applicable category generation/isolation/registration stage has produced an approved raster ready for Illustrator.

It applies to normal flat outlined cosmetics. Neon/glow/soft-effect cosmetics are excluded and require separate treatment because flat Image Trace cannot faithfully preserve raster glow behavior.

## Validated downstream architecture

**Approved raster → deterministic TRACE PREP V3 → Illustrator Image Trace baseline → Expand → manual vector cleanup/placement.**

The two new downstream operations are treated as one production handoff:

1. **TRACE PREP V3 — agent-owned, batchable.** The agent runs all eligible approved rasters through the deterministic preprocessing script in one batch whenever tools permit. The user should not manually preprocess files.
2. **ILLUSTRATOR TRACE — user-owned, batchable.** The user selects all trace-ready placed/raster images and runs `DONT_DIE_IMAGE_TRACE.jsx` once.

Thus the normal user experience is: receive trace-ready files → place/select all in Illustrator → one script invocation.

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
- Ignore White: **On**

Then **Expand**.

This baseline was validated against the fishing-rod stress test: long thin outer contours remained smooth while small reel/fish/bobber details survived to a production-usable degree.

## Illustrator automation
Authority implementation: `scripts/DONT_DIE_IMAGE_TRACE.jsx`.

The script:
- operates on all selected `PlacedItem` / `RasterItem` objects;
- applies the validated trace settings in batch;
- uses color tracing, 30 max colors, fills only, ignore white;
- maps the validated UI Paths/Corners/Noise values to Illustrator scripting values;
- expands the result by default;
- leaves all resulting vector groups selected.

If a future Illustrator version changes internal trace behavior, validate against the same long-thin fishing-rod contour stress test before changing this authority.

## Acceptance gate
PASS when:
- outer black contours are smooth rather than scalloped/blobby;
- apparent outline thickness remains faithful to source;
- major interior color regions remain recognizable and correctly separated;
- small useful details survive without exploding into raster-edge fragments;
- white background is removed after trace/expand;
- no global muddy palette shift is introduced.

Minor vector cleanup after Expand is expected. Do not re-open upstream generation architecture for trace-only artifacts.

## Failure classification
- `SYSTEM FAIL` at this downstream stage: TRACE PREP V3 or the validated trace baseline structurally produces scalloped/blobby contours across representative normal assets.
- local missing/merged tiny detail after otherwise clean tracing: downstream cleanup issue, not evidence to redesign a validated category generation architecture.

## Core rule
**Normal approved rasters are batch-prepared by the agent with TRACE PREP V3, then all trace-ready images can be selected and vectorized in Illustrator with one script invocation. Preserve the validated generation architecture; solve raster-to-vector artifacts downstream.**
