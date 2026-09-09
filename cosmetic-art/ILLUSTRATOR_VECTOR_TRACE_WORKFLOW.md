# Don't Die Cosmetic Art — Illustrator Vector Trace Workflow

**Status: VALIDATED / LOCKED for normal flat cosmetic raster-to-vector handoff.**

## Scope
This is the Illustrator production step after an approved normal flat outlined cosmetic raster has completed deterministic trace preparation. Neon/glow/soft-effect cosmetics remain excluded and require separate treatment.

## Validated downstream architecture

**Approved raster → deterministic trace prep → Illustrator one-sheet trace → Expand → scripted Pathfinder Divide → Expand Appearance → Ungroup → manual cleanup/placement.**

The agent owns deterministic trace preparation. The user owns Illustrator execution and selects exactly one trace-ready placed/raster image at a time.

## Validated trace-prep correction
The production trace-prep output must have a clean pure-white exterior and must not contain a dark-gray antialias fringe outside/along the black outline. Earlier V3/V4/V5 experiments exposed this failure mode. The validated correction is to collapse dark neutral fringe pixels in the exterior edge zone into the true black outline while keeping the exterior pure white and preserving interior color regions.

Do not add a second black rim. Do not globally quantize the artwork. Inspect the prepared raster before Image Trace when changing preprocessing.

## Validated Illustrator settings
Authority implementation: `scripts/DONT_DIE_IMAGE_TRACE.jsx`.

The locked scripting values are:
- Mode: **Color**
- Max Colors: **30**
- `pathFitting = 1.5`
- `cornerAngle = 35`
- `minArea = 2`
- `preprocessBlur = 0`
- Fills: **ON**
- Strokes: **OFF**
- Ignore Color White: **OFF / unchecked** (`ignoreWhite = false`)

These values were validated on representative character + lantern + spatula sheets. They preserve smooth large contours and substantially improve small-detail fidelity without making the final cleanup structure live/recalculating.

Small raster features intended to be perfect geometry—especially tiny circles such as spatula holes—may still require minor manual Illustrator cleanup. Do not tighten the global trace merely to perfect a tiny circle if the rest of the sheet passes.

## Required Illustrator script sequence
Select exactly one `PlacedItem` or `RasterItem`, then run `scripts/DONT_DIE_IMAGE_TRACE.jsx`.

The script performs:
1. Image Trace with the locked settings above.
2. Expand Image Trace.
3. `Live Pathfinder Divide`.
4. `expandStyle` / Expand Appearance to bake the scripted live Pathfinder result.
5. Ungroup.

Important distinction: manually clicking the Pathfinder-panel **Divide** button is destructive immediately. ExtendScript uses the live Pathfinder Divide command, so the scripted workflow requires Expand Appearance before Ungroup. This leaves ordinary vector paths afterward and avoids live Pathfinder recalculation during later deletion/cleanup.

## Why one image at a time
One-at-a-time execution is intentional. Illustrator tracing is asynchronous and computationally heavy. Per-sheet execution provides immediate QC and avoids burying a bad trace inside a batch. Each sheet already contains multiple variants.

## Acceptance gate
PASS when:
- prepared raster has no dark-gray exterior fringe;
- outer black contours remain smooth and faithful;
- major interior color regions survive correctly;
- small useful details survive to production-usable quality;
- white regions are preserved where required;
- final script output is ordinary editable vector artwork after Divide/Expand Appearance/Ungroup;
- deleting unwanted final pieces does not require live-effect recalculation;
- minor imperfect tiny circles are treated as local manual cleanup rather than a reason to destabilize global settings.

## Failure classification
- **SYSTEM FAIL:** representative normal assets structurally produce gray outline fringe, scalloped/blobby contours, broken script flattening, or live/recalculating final artwork.
- **Local cleanup issue:** an isolated tiny circle/detail is imperfect after otherwise passing tracing. Do not redesign upstream category architecture or global trace settings for this.

## Core rule
**For normal approved flat rasters: use the validated clean-edge trace preparation, then select one sheet in Illustrator and run `scripts/DONT_DIE_IMAGE_TRACE.jsx`. The locked Illustrator sequence is Trace → Expand → scripted Divide → Expand Appearance → Ungroup. Preserve passing upstream architecture and handle isolated tiny geometric imperfections locally.**
