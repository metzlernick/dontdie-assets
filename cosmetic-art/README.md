# Don't Die Cosmetic Art

This folder contains the canonical production system for generating and finishing Don't Die cosmetic artwork.

## Current production authority

Use these files for all new work:

1. `DONT_DIE_COSMETIC_ART_SPEC.md` — master visual and category specification
2. `REPEATABLE_PRODUCTION_WORKFLOW.md` — repeatable Stage A / Stage B / Illustrator Stage C workflow
3. `PRODUCTION_SESSION_STARTER.txt` — new-session starter
4. `CANONICAL_REGISTRATION_SYSTEM.md` — canonical anchors and registration metadata

Supporting production assets live in:

- `templates/` — canonical MAIN HERO and character geometry
- `registration/` — current registration references
- `reference-pack/` — approved source artwork in PNG/SVG form
- `reference-sheets/` — active category, placement, style, and spatial references
- `approved-art/` — approved production cosmetics by category

## Production model

AI generation is responsible for design, Don't Die style, approximate body-relative scale and placement, broad orientation, and usable object geometry.

For held LEFT ARM and RIGHT ARM cosmetics, exact final hand registration is completed in Adobe Illustrator. Generated hand/finger geometry is contextual rather than production truth. Stage B isolates the selected cosmetic; Illustrator Stage C performs exact X/Y, final scale/rotation, canonical hand occlusion, and final vector cleanup.

## Calibration archive

`archive-calibration/` preserves superseded prompts, tests, workflows, and registration experiments. These files document how the current system was reached and should not be treated as active production authority.

Important progress is intentionally retained there, including:

- HAT calibration that established visible MAIN HERO registration followed by a separate cosmetic-only extraction/isolation pass.
- RIGHT ARM calibration that validated the same Stage A → Stage B pattern, continuous grip geometry, body-relative scale, and low-complexity weapon construction.

Do not delete calibration history merely because it is superseded. Move obsolete production instructions into the archive so future sessions do not confuse them with current authority.
