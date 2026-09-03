# Calibration Archive

This folder preserves superseded cosmetic-art experiments, prompts, workflows, masks, registration templates, and validation documents.

Nothing in this folder is current production authority. Current production authority lives in the `cosmetic-art/` root and active production subfolders.

## Why this archive exists

The cosmetic pipeline was built through repeated calibration. Failed and superseded experiments are intentionally preserved because they contain useful debugging evidence and explain why the current workflow behaves the way it does.

Do not delete archived material simply because a newer workflow replaced it.

## Hat progress preserved here

The hat sequence established several important lessons:

- coordinate-only arc/dot/directional anchors were not reliable enough as the sole positioning system;
- visible MAIN HERO context produced substantially better body-relative hat position, scale, and orientation;
- the successful workflow became a two-stage process: Stage A uses hero context for registration/exploration, then Stage B removes the character while preserving the chosen cosmetic's scale, position, silhouette, colors, and style;
- extraction masks/guides were developed to test that isolation step;
- old hat anchor templates remain here as calibration evidence, not production inputs.

Notable historical files include the V6.2–V6.8 hat tests/workflows plus the archived HAT anchor, directional, registration, and extraction reference images.

## Right-arm progress preserved here

RIGHT ARM calibration validated the same broad Stage A → Stage B architecture:

- use MAIN HERO context to establish body-relative scale, side, position, and broad orientation;
- preserve simple, readable Don't Die styling;
- complex mechanical weapons should generally use a small number of major forms rather than dense greebles;
- Stage B removes character/pedestal context and restores continuous object geometry through the grip region;
- no hand-shaped holes should remain in isolated held objects.

The archived right-arm validation files remain valuable evidence for the design, scale, simplification, and isolation behavior that worked.

## Left-arm progress preserved here

See `LEFT_ARM_PIPELINE_CALIBRATION_REPORT_V7_20_V7_54.md` for the full V7.20–V7.54 test chronology, failed approaches, findings, scale/stroke conclusions, and the reasoning that led to the active zero-contact LEFT ARM workflow.

The key historical conclusion is that generated hand/object interaction was the source of repeated occlusion, reconstruction, masking, and scale/stroke failures. The active LEFT ARM workflow therefore generates complete cosmetics separately on screen-left beside MAIN HERO with zero contact, using the hero only as a body-relative scale reference.

## Registration experiments

Historical anchor-aware starters, registration cleanup notes, alternate hero visibility treatments, and category-specific visual-anchor experiments belong here when superseded.

The active canonical registration metadata lives in `../CANONICAL_REGISTRATION_SYSTEM.md` and `../registration/`.
