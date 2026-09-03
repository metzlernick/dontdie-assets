# Don't Die Cosmetic Art

This folder contains the canonical production system for generating and finishing Don't Die cosmetic artwork.

## Current production authority

Use these files for all new work:

1. `DONT_DIE_COSMETIC_ART_SPEC.md` — master visual and category specification
2. `REPEATABLE_PRODUCTION_WORKFLOW.md` — general repeatable production workflow
3. `PRODUCTION_SESSION_STARTER.txt` — new-session starter
4. `CANONICAL_REGISTRATION_SYSTEM.md` — canonical anchors and final registration metadata
5. `LEFT_ARM_ZERO_CONTACT_WORKFLOW.md` — validated LEFT ARM category override
6. `LEFT_ARM_4X4_PRODUCTION_CONTROLLER.md` — validated v7.65 one-pass LEFT ARM 4×4 controller

Supporting production assets live in:

- `templates/` — canonical MAIN HERO and character geometry
- `registration/` — current registration references
- `reference-pack/` — approved source artwork in PNG/SVG form
- `reference-sheets/` — active category, placement, style, and spatial references
- `approved-art/` — approved production cosmetics by category

## LEFT ARM production model — v7.65 validated

LEFT ARM uses the zero-contact architecture plus the v7.65 one-pass 4×4 controller.

Validated production format:

- 2400 × 2560 logical sheet
- 4 columns × 4 rows
- 600 × 640 logical cells
- up to four unrelated current briefs in one generation
- four variations per populated row
- hero context on screen-right
- complete cosmetic on screen-left
- clean white zero-contact separation
- no generated grip
- no hidden cosmetic geometry
- no AI isolation/reconstruction pass

The active wide visual-scale reference contains a very small neutral screen-left marker. That marker establishes the universal initial LEFT ARM scale prior.

The v7.65 instruction hierarchy is:

1. **scale/location**
2. **object identity**
3. **pose/design**

**Pose may change shape. Pose may not increase scale.**

This hierarchy allowed the one-pass sheet to preserve small production scale while still generating four unrelated concepts, four variations per concept, unusual orientation requirements, and connected/hanging geometry.

Normal production briefs should mention only the current requested cosmetics. Do not include calibration-object names, previous failures, or negative examples from old sheets.

## Other categories

HAT and RIGHT ARM calibration history remains useful and preserved. Continue to use the current applicable category workflow unless/until a newer validated category-specific override replaces it.

## Calibration archive

`archive-calibration/` preserves superseded prompts, tests, workflows, masks, registration templates, and validation documents. These files document how the current system was reached and are not active production authority.

Do not delete calibration history merely because it is superseded. Move obsolete production instructions into the archive so future sessions do not confuse them with current authority.
