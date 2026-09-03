# Calibration Archive

This folder preserves superseded cosmetic-art experiments, prompts, workflows, masks, registration templates, and validation documents.

Nothing in this folder is current production authority. Current production authority lives in the `cosmetic-art/` root and active production subfolders.

## Why this archive exists

The cosmetic pipeline was built through repeated calibration. Failed and superseded experiments are intentionally preserved because they contain useful debugging evidence and explain why the current workflow behaves the way it does.

Do not delete archived material simply because a newer workflow replaced it.

## Hat progress preserved here

Hat calibration established that coordinate-only anchors were not reliable enough by themselves, while visible MAIN HERO context materially improved body-relative position, scale, and orientation. Historical hat anchor, registration, and extraction references remain here as calibration evidence.

## Right-arm progress preserved here

RIGHT ARM calibration preserved useful findings about body-relative scale, broad orientation, low-detail construction, usable grip geometry, and the limits of isolation/reconstruction. Historical right-arm validation files remain evidence, not LEFT ARM authority.

## Left-arm progress preserved here

Two reports now cover the LEFT ARM pipeline chronology:

- `LEFT_ARM_PIPELINE_CALIBRATION_REPORT_V7_20_V7_54.md` — grip/occlusion, reconstruction, deterministic extraction, and the breakthrough to zero-contact geometry
- `LEFT_ARM_4X4_SCALE_CALIBRATION_REPORT_V7_55_V7_65.md` — one-pass 4×4 throughput, wide cells, visual scale proxies, pose/scale interaction, and the validated v7.65 production controller

The first sequence established that generated hand/object contact was the root cause of repeated occlusion and reconstruction failures.

The second sequence established that scalable production can remain a **single 4×4 generation** when LEFT ARM uses:

- 600×640 logical generation cells / 2400×2560 sheet
- complete zero-contact cosmetics on screen-left
- a very small universal visual-scale marker
- clean current-only row briefs
- instruction priority: **scale/location → identity → pose/design**

V7.65 is the calibration endpoint. Active production authority is now:

- `../LEFT_ARM_ZERO_CONTACT_WORKFLOW.md`
- `../LEFT_ARM_4X4_PRODUCTION_CONTROLLER.md`

## Registration experiments

Historical anchor-aware starters, registration cleanup notes, alternate hero visibility treatments, and category-specific visual-anchor experiments belong here when superseded.

The active canonical registration metadata lives in `../CANONICAL_REGISTRATION_SYSTEM.md` and `../registration/`.
