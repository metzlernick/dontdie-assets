# Don't Die LEFT ARM — Zero-Contact Production Workflow

## Status
**VALIDATED / LOCKED — 4×1 production.**

## Architecture
**One brief → four variants → one 4×1 zero-contact strip → Illustrator.**

There is no AI Stage B for LEFT ARM.

## Canvas / composition
- logical canvas: 2400×640
- four 600×640 cells
- hero/context screen-right
- complete standalone cosmetic screen-left
- clean white gap between cosmetic and hero
- no grip, overlap, hidden geometry, or AI reconstruction

The historical V3 composite controller remains the source of truth. For normal 4×1 production, use the corresponding 4×1 row cropped from `reference-sheets/LEFT_ARM_FINISHED_COSMETIC_EXEMPLAR_REFERENCE_4X4_V3.png` as PRIMARY canvas/scale/contact authority.

## Absolute footprint lock
The tiny screen-left exemplar in the controller is a literal spatial placeholder. The requested cosmetic must fit approximately inside the same width × height footprint. Do not enlarge for recognizability, real-world scale, object type, detail, orientation, or empty canvas.

If detail conflicts with the footprint: delete/simplify detail. Never enlarge.

Any output substantially larger than the placeholder is a SYSTEM FAIL of the scale controller.

## Design references
Approved art is DESIGN_ONLY unless explicitly granted a narrower property. It may guide palette/material/theme/silhouette vocabulary, but never scale, hero pose/clothing, grip/contact, canvas composition, or placement.

## Brief constraints
Direction, tilt, visible surface, count, color, symbol, attachment, and relative-position instructions are hard constraints and should appear in all four variants unless the user explicitly allows variation.

If a local brief detail repeatedly fails while architecture/scale/zero-contact remain correct, do not escalate prompt wording until it causes scale regression. Keep the best passing-scale result and defer tiny geometry cleanup to Illustrator when appropriate.

## Acceptance
PASS requires:
- four variants of one requested cosmetic
- tiny placeholder footprint respected
- hero/context screen-right
- cosmetic screen-left
- clean zero contact
- complete standalone geometry
- correct brief identity/details to a usable degree

## Illustrator handoff
Image Trace / cleanup; move/rotate into canonical viewer-left hand; modest enlargement if useful; layer canonical hand over cosmetic; final vector cleanup.
