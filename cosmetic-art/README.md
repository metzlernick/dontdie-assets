# Don't Die Cosmetic Art

This folder contains the canonical production system for generating and finishing Don't Die cosmetic artwork.

## Current production authority

Use these files for all new work:

1. `DONT_DIE_COSMETIC_ART_SPEC.md` — master visual and category specification
2. `REPEATABLE_PRODUCTION_WORKFLOW.md` — general repeatable production workflow
3. `PRODUCTION_SESSION_STARTER.txt` — new-session starter
4. `CANONICAL_REGISTRATION_SYSTEM.md` — canonical anchors and registration metadata
5. `LEFT_ARM_ZERO_CONTACT_WORKFLOW.md` — **validated LEFT ARM category override (v7.54)**

Supporting production assets live in:

- `templates/` — canonical MAIN HERO and character geometry
- `registration/` — current registration references
- `reference-pack/` — approved source artwork in PNG/SVG form
- `reference-sheets/` — active category, placement, style, and spatial references
- `approved-art/` — approved production cosmetics by category

## LEFT ARM production model — v7.54 validated

LEFT ARM held items use the zero-contact architecture in `LEFT_ARM_ZERO_CONTACT_WORKFLOW.md`.

The first generation must produce the complete cosmetic **beside** the canonical hero rather than overlapping it:

- cosmetic on screen-left
- canonical hero on screen-right as body-relative scale reference
- clear white separation
- no hero hand covering the item
- no missing/occluded object geometry
- no image-generation reconstruction pass
- no Illustrator reconstruction of geometry lost during generation

The isolated cosmetic must already have a clean continuous outline, complete grip/attachment geometry, appropriate LEFT ARM scale, and Image-Trace-friendly flat construction.

Validated v7.54 scale behavior:

- spatula: pass
- money bag: pass
- lantern: pass
- shield: construction pass, but increase target scale approximately 20–25% relative to the v7.54 shield result

This LEFT ARM category workflow supersedes older general held-object guidance wherever the older guidance calls for generated hero/object overlap, Stage B reconstruction, or Illustrator reconstruction/registration correction of missing geometry.

## Other categories

HAT and RIGHT ARM calibration history remains useful and preserved. Continue to use the current applicable category workflow unless/until a newer validated category-specific override replaces it.

## Calibration archive

`archive-calibration/` preserves superseded prompts, tests, workflows, and registration experiments. These files document how the current system was reached and should not be treated as active production authority.

Do not delete calibration history merely because it is superseded. Move obsolete production instructions into the archive so future sessions do not confuse them with current authority.
