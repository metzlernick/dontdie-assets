# Don't Die Cosmetic Artwork — Repeatable Production Workflow v7.65

## Purpose

This document defines the general repeatable workflow for generating Don't Die cosmetic art.

**LEFT ARM override:** use `LEFT_ARM_ZERO_CONTACT_WORKFLOW.md` plus `LEFT_ARM_4X4_PRODUCTION_CONTROLLER.md`. These supersede older LEFT ARM overlap/reconstruction guidance.

## 1. Source of truth

Before every generation, freshly review the current canonical sources in `cosmetic-art/`.

At minimum:
- `DONT_DIE_COSMETIC_ART_SPEC.md`
- `templates/MAIN HERO.svg`
- `templates/Character Master Template.svg`
- relevant `reference-pack/` files
- relevant `approved-art/<category>/`

For LEFT ARM also read:
- `LEFT_ARM_ZERO_CONTACT_WORKFLOW.md`
- `LEFT_ARM_4X4_PRODUCTION_CONTROLLER.md`

## 2. General art requirements

- flat 2D vector-style construction
- true-black primary outer outline, approximately 5 px at canonical scale
- large readable forms
- low detail
- clean silhouette
- hard-edged flat color regions
- pure white background
- no cast shadow
- no texture/noise
- no presentation enlargement to fill space
- Image-Trace-friendly construction

## 3. LEFT ARM — validated v7.65 one-pass 4×4 architecture

Generate up to four unrelated LEFT ARM briefs in one pass:

- 2400 × 2560 logical sheet
- 4 columns × 4 rows
- 600 × 640 logical cells
- one brief per populated row
- four variations per populated row
- canonical hero context on the right
- complete cosmetic on screen-left
- clear white zero-contact separation
- no generated grip
- no hidden geometry
- no AI Stage B isolation/reconstruction

Use the active LEFT ARM wide visual-scale reference. Its very small neutral marker establishes the universal initial scale prior.

Apply priorities in this order:

1. **Scale/location** — first match the small production-scale prior.
2. **Identity** — create the exact requested object.
3. **Pose/design** — apply orientation and variation without increasing scale.

**Pose may change shape. Pose may not increase scale.**

Every required per-object feature must appear on every applicable variation unless the user explicitly requests a variation-dependent feature.

Keep normal production briefs clean: do not mention old calibration objects or previous failures.

### LEFT ARM acceptance

PASS only when the first generation has:

- correct row identities
- four useful variations per populated row
- correct required features
- compact marker-derived scale
- screen-left placement
- zero contact with hero
- complete geometry
- usable broad orientation/physics
- continuous bold black outline
- suitable Don't Die style/detail level
- no reconstruction requirement before Image Trace

See the two LEFT ARM authority files for full rules.

## 4. RIGHT ARM

Continue using the current validated RIGHT ARM production approach and approved references.

Optimize for correct body-relative scale, broad orientation, continuous usable grip geometry, and clean low-detail construction. Do not enlarge weapons merely to fill the canvas.

## 5. HATS

Continue using the validated HAT registration/isolation approach and current canonical references. Prioritize canonical head-relative scale, facing/orientation, attachment position, clean silhouette, and consistent stroke language.

## 6. OUTFITS / ARMOR

Body geometry matters directly. Use the canonical body template and current armor-specific rules. Do not apply the LEFT ARM zero-contact method to body silhouette alignment.

## 7. ACCESSORIES

Use MAIN HERO to establish body-relative location and scale. Small accessories should remain small even when substantial empty space remains.

## 8. Scale authority

Scale comes from:

1. validated category production reference/controller
2. especially similar approved cosmetics
3. category references
4. MAIN HERO body proportions
5. prompt description

For LEFT ARM specifically, the active universal visual-scale marker is the initial scale authority for new briefs.

Never enlarge an object because the composition looks empty.

## 9. Complexity authority

Default toward fewer, larger forms. Prioritize silhouette and one or two readable focal details over micro-engraving, dense filigree, tiny rivets, repeated decorative marks, or texture-like linework.

## 10. Core principle

**Generate complete, clean production geometry as early as the category allows. Do not create avoidable downstream reconstruction work.**

For LEFT ARM, v7.65 validates one-pass 4×4 generation using a wide zero-contact sheet and a small universal visual-scale prior.
