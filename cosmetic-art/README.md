# Don't Die Cosmetic Art

This folder contains the canonical production system for generating and finishing Don't Die cosmetic artwork.

## Current production authority

Use these files for all new work:

1. `DONT_DIE_COSMETIC_ART_SPEC.md` — master visual and category specification
2. `REPEATABLE_PRODUCTION_WORKFLOW.md` — general repeatable production workflow
3. `PRODUCTION_SESSION_STARTER.txt` — new-session starter
4. `CANONICAL_REGISTRATION_SYSTEM.md` — canonical anchors and final registration metadata
5. `LEFT_ARM_ZERO_CONTACT_WORKFLOW.md` — validated LEFT ARM category override
6. `LEFT_ARM_4X4_PRODUCTION_CONTROLLER.md` — validated and locked LEFT ARM 4×4 controller
7. `LEFT_ARM_PRODUCTION_PROMPT_TEMPLATE.txt` — immutable production-prompt body; only row briefs may change
8. `reference-sheets/LEFT_ARM_FINISHED_COSMETIC_EXEMPLAR_REFERENCE_4X4.png` — active V2.1 LEFT ARM visual scale/detail controller

## LEFT ARM production model — V2.1 validated and locked

LEFT ARM uses one-pass zero-contact generation with **one tiny contiguous finished-cosmetic exemplar per cell** as the visual scale authority.

Format: 2400×2560, logical 4×4, 600×640 cells, up to four unrelated briefs, four variations per row, hero screen-right, complete cosmetic screen-left, clean zero-contact separation, no generated grip, no hidden geometry, no AI reconstruction pass.

Production hierarchy:
1. tiny finished-exemplar scale/location
2. simplify detail to survive scale
3. exact identity
4. pose/design/variation

If size and detail conflict, keep the small size and remove detail. When uncertain, smaller and simpler wins.

### Why V2.1

An earlier single finished exemplar improved unseen-object transfer but a later shield/money-bag/spatula/lantern regression still produced oversized normal-icon assets. A multi-example V2 visual controller successfully forced all four classes into the small production neighborhood, proving that stronger visual scale authority—not additional object-specific prompt exceptions—was the correct direction. V2 also introduced detached connector-dot artifacts.

V2.1 retained that successful tiny-scale behavior while using one contiguous exemplar with no detached elements. Fresh-instance regression testing on golden shield, money bag, diagonal spatula, and hanging green-flame lantern passed scale, identity, four-variation, detail, zero-contact, cross-row stability, and artifact-removal checks.

V2.1 is therefore canonical. Stop calibration unless a genuinely new production class exposes a repeatable failure.

## Mandatory conflict gate

Before any LEFT ARM production package is created, every user instruction must be checked against the locked controller. If a brief attempts to change generation scale, exemplar authority, hero placement, zero-contact behavior, sheet geometry, detail hierarchy, generated grip behavior, or reconstruction workflow, production stops. Identify the conflict, explain the failure risk, offer safe wording, and proceed only when the brief no longer conflicts.

Approved assets may control palette, design language, material treatment, thematic family, silhouette vocabulary, and non-scale proportion cues only. They cannot override canonical LEFT ARM generation scale.

## Prompt-construction lock

Normal LEFT ARM production uses `LEFT_ARM_PRODUCTION_PROMPT_TEMPLATE.txt` as the invariant production body. Only the four row brief slots may change. Any invariant-body modification is a separate calibration/change-control task.

## Supporting assets

- `templates/` — canonical MAIN HERO and character geometry
- `registration/` — current registration references
- `reference-pack/` — approved source artwork in PNG/SVG form
- `reference-sheets/` — active category, placement, style, and spatial references
- `approved-art/` — approved production cosmetics by category
- `archive-calibration/` — historical evidence; not active production authority

HAT and RIGHT ARM calibration history remains useful and preserved. Continue using the current applicable category workflow unless a newer validated category-specific override replaces it.