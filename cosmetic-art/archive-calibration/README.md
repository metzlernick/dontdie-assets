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

The current v7.19 workflow intentionally relaxes pixel-perfect generated hand/grip registration: Illustrator Stage C is now the authority for exact X/Y, rotation, scale, and canonical hand occlusion. The archived right-arm validation files remain valuable evidence for the design, scale, simplification, and isolation behavior that worked.

## Registration experiments

Historical anchor-aware starters, registration cleanup notes, alternate hero visibility treatments, and category-specific visual-anchor experiments belong here when superseded.

The active canonical registration metadata lives in `../CANONICAL_REGISTRATION_SYSTEM.md` and `../registration/`.
