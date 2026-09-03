# DON'T DIE — CANONICAL COSMETIC REGISTRATION SYSTEM v7.65

This file defines final production registration independently from incidental character redraws made by image generation.

## Coordinate system

Canonical production assets remain based on the 480×640 MAIN HERO artboard:

- Width: 480 px
- Height: 640 px
- Origin: top-left `(0,0)`
- X increases rightward
- Y increases downward

Canonical anchors:

| Anchor | X | Y | Purpose |
|---|---:|---:|---|
| LEFT_GRIP | 123 | 382 | Viewer-left lowered fist beside cape |
| RIGHT_GRIP | 360 | 344 | Viewer-right raised fist |
| HEAD_ANCHOR | 218 | 144 | Hat/head registration reference |
| FACE_CENTER | 218 | 249 | Face accessory reference |
| TORSO_CENTER | 218 | 365 | Body/outfit reference |

See `registration/CANONICAL_ANCHOR_REFERENCE.png` for visual metadata only.

## Grip axes

Image-coordinate convention:
- 0° = right
- 90° = down
- 180° = left
- 270° = up

### LEFT_GRIP
Canonical final grip axis: **45°**.

### RIGHT_GRIP
Canonical final grip axis: **75°**.

These are Illustrator registration targets. Image generation does not need pixel-perfect anchor intersection.

## Critical LEFT ARM override

LEFT ARM generation no longer uses the older visible-grip → Stage B reconstruction model.

For LEFT ARM, the active production authority is:

- `LEFT_ARM_ZERO_CONTACT_WORKFLOW.md`
- `LEFT_ARM_4X4_PRODUCTION_CONTROLLER.md`

During LEFT ARM generation:

- cosmetic is complete and separate on screen-left
- hero context remains on screen-right
- there is clean white zero-contact separation
- no generated grip is required
- no object geometry is hidden behind the generated hand
- no AI Stage B isolation/reconstruction is used

Final registration still uses `LEFT_GRIP (123,382)` and the intended item-specific orientation in Illustrator after Image Trace.

The validated LEFT ARM generation sheet is wider than the canonical production artboard: 600×640 logical generation cells within a 2400×2560 4×4 sheet. This added width is temporary generation workspace only. Final assets still register back onto the canonical 480×640 production artboard.

## RIGHT ARM held-object production rule

For RIGHT ARM, use the current validated category workflow. The generated object must contain continuous usable local grip geometry and tolerate modest Illustrator translation/rotation plus canonical hand overlay.

Do not create:
- hand-shaped holes
- fake transparent grip cutouts
- design-critical detail only in future hand occlusion
- excessive grip-tolerance length

## Stage C — Illustrator is final registration truth

For held items:

1. place the selected isolated cosmetic on the canonical 480×640 artboard
2. move it to the appropriate final anchor
3. apply modest rotation and scale correction when necessary
4. layer the canonical hand/body over the cosmetic
5. never reshape the canonical hand to fit generated art
6. perform final vector cleanup

### LEFT ARM
- screen-space side: viewer-left
- final anchor: LEFT_GRIP `(123,382)`
- default registration axis: 45° unless the object deliberately uses another pose
- canonical hand overlays object in final production

### RIGHT ARM
- screen-space side: viewer-right
- final anchor: RIGHT_GRIP `(360,344)`
- default grip axis: 75° unless an approved reference establishes another orientation
- canonical hand overlays object in production

### HAT
- anchor: HEAD_ANCHOR `(218,144)`
- follow current HAT workflow and approved references

### FACE ACCESSORY
- reference anchor: FACE_CENTER `(218,249)`

### OUTFIT / ARMOR
- reference anchor: TORSO_CENTER `(218,365)`
- registration is primarily full-body silhouette matching

## Scale rule

Anchor correctness never authorizes presentation scaling.

For LEFT ARM, the active v7.65 universal visual-scale marker establishes the initial generation scale prior. For other categories, use current category references and approved art.

## Core principle

**Image generation creates complete production-ready geometry with registration tolerance. Illustrator creates exact final registration.**

For LEFT ARM specifically, complete geometry is generated with zero contact first; the canonical grip is applied only afterward in Illustrator.
