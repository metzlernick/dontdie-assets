# Don't Die Cosmetic Art — Validated Production Workflow

## Stage 1 — Generate with registration template

1. Retrieve the current master MD and category PNG references from GitHub.
2. Use `SPATIAL_TEMPLATE_MAIN_HERO_4X4_FAINT.png`.
3. Keep MAIN HERO at exact canonical scale and approximately 5–8% opacity.
4. Generate each cosmetic directly on its correct character attachment point.
5. Generate at final intended production size.
6. Preserve large intentional white space.
7. Do not center, enlarge, normalize, or rebalance cosmetics.
8. Keep the faint MAIN HERO visible in the generated calibration/production sheet.
9. Do not add grid lines, cell borders, labels, guides, or gutters.

## Stage 2 — Select

Select the preferred cosmetic variation(s). Do not change registration yet.

## Stage 3 — Remove registration layer

Remove the faint MAIN HERO as a separate cleanup operation.

This cleanup must be non-generative with respect to the cosmetic:
- no redesign
- no repositioning
- no rescaling
- no recomposition
- no silhouette changes
- no color changes

The goal is only to replace/remove the known faint registration artwork with pure white.

## Stage 4 — Illustrator

Use the master MD's Image Trace settings as the starting point, Expand, clean tiny trace artifacts, and recolor flat fills as desired.

## Why this workflow exists

Testing established:
- Invisible-character instructions caused cosmetics to be centered/enlarged as icons.
- A visibly present MAIN HERO caused the generator to correctly understand character-relative position and scale.
- A very faint MAIN HERO retained that positioning behavior while minimizing registration contamination.

Therefore the visible faint registration layer is part of the generation process, while removal is a separate cleanup process.


## Stage 1A — Exact input-image requirement

The spatial template must be used as the actual image being edited.

Do not ask the model to recreate a new sheet "based on" the template.

Required instruction:
- edit `SPATIAL_TEMPLATE_MAIN_HERO_4X4_FAINT.png`
- preserve existing pixels
- add only cosmetic artwork

This prevents character drift that was observed when the template was merely supplied as a visual reference.
