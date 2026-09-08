# DON'T DIE — CANONICAL COSMETIC REGISTRATION SYSTEM

## Canonical artboard
Final production registration remains based on the 480×640 MAIN HERO artboard.

Canonical anchors:
- LEFT_GRIP: (123,382)
- RIGHT_GRIP: (360,344)
- HEAD_ANCHOR: (218,144)
- FACE_CENTER: (218,249)
- TORSO_CENTER: (218,365)

Image-coordinate axes: 0° right, 90° down.
- LEFT_GRIP default axis: 45°
- RIGHT_GRIP default axis: 75°

These are final registration targets; generation does not need pixel-perfect anchor intersection unless a category workflow explicitly requires it.

## Current generation batching
New production uses one brief → four variants → 4×1. Historical 4×4 sheets remain valid source/evidence material.

## LEFT ARM
Authority: `LEFT_ARM_ZERO_CONTACT_WORKFLOW.md`.

Generation uses a 2400×640 4×1 workspace with four 600×640 cells. A row crop of the historical V3 exemplar sheet supplies hero/context screen-right, tiny cosmetic placeholder screen-left, and zero-contact composition.

No AI Stage B. Final selected cosmetic is moved/rotated onto LEFT_GRIP in Illustrator and canonical hand geometry overlays it.

## RIGHT ARM
Use `RIGHT_ARM_PRODUCTION_WORKFLOW.md`.

Stage A produces held-object art on canonical hero. Stage B isolates and minimally reconstructs hidden grip geometry. Deterministic scale/X/Y restoration returns isolated art to Stage-A registration. Illustrator performs final canonical hand overlay.

## HATS
Use `HATS_PRODUCTION_WORKFLOW.md`.

Stage A owns head-relative registration. Stage B owns foreground-only isolated hat geometry. Deterministic restoration returns Stage-B art to Stage-A scale/X/Y.

## FACE ACCESSORIES
Use `ACCESSORY_FACE_PRODUCTION_WORKFLOW.md`.

Stage A uses faint literal substrate. Deterministic extraction removes substrate while preserving Stage-A registration.

## ARMOR / OUTFITS
Use `ARMOR_OUTFIT_PRODUCTION_WORKFLOW.md` and `ARMOR_STAGE_B_DETERMINISTIC_REGISTRATION.md`.

Stage A/A.5 owns coordinate + scale. Stage B owns isolated visible artwork. After Stage B passes, restore each 480×640 logical cell with uniform scale + X/Y translation only.

Current 4×1 final logical target is 1920×640. Historical 4×4 restoration remains 1920×2560.

Never use registration to reconstruct hidden collar/boot/peg/cape/wrap geometry.

## Core principle
**Generation creates usable category-specific geometry; deterministic processing restores validated upstream registration where required; Illustrator owns exact final vector registration and layering.**
