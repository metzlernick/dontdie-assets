# DON'T DIE COSMETIC ART — v6.7 EXACT MAIN HERO PRESERVATION

This version changes ONE variable from v6.6: the MAIN HERO must be the literal supplied artwork, not a generated approximation.

## Locked from v6.6

Do NOT change:
- cosmetic scale
- cosmetic positioning behavior
- cosmetics layering in front of hair
- stroke weight
- hard-edged solid-color shading
- 16-design architecture
- variation strength

## Exact source-image rule

Use:
`reference-sheets/HAT_EXACT_MAIN_HERO_4X4.png`

This image is the production edit base.

It contains the canonical MAIN HERO repeated 16 times at the exact canonical 480×640 size and coordinates.

The task is IMAGE EDITING, not character generation.

Every pre-existing pixel belonging to MAIN HERO must remain unchanged.

DO NOT:
- redraw MAIN HERO
- regenerate MAIN HERO
- reinterpret MAIN HERO
- restyle MAIN HERO
- simplify MAIN HERO
- recolor MAIN HERO
- alter the face
- alter hair
- alter clothing
- alter pose
- alter proportions
- alter linework
- alter lighting
- substitute a similar character
- use MAIN HERO merely as visual inspiration

ONLY ADD COSMETIC ART ON TOP OF THE EXISTING BASE IMAGE.

Occlusion is allowed: cosmetic pixels may cover MAIN HERO pixels where the equipped cosmetic naturally overlaps them. This is normal foreground layering. Outside areas covered by the cosmetic, the source image must remain visually identical.

## Acceptance test

The character visible in all 16 positions must be the exact same supplied MAIN HERO artwork.

If the character is redrawn, substituted, stylized, simplified, or otherwise changed, the generation fails even if the cosmetics are good.

For this calibration test, keep the complete MAIN HERO fully visible except where naturally covered by cosmetics.
