# DON'T DIE COSMETIC ART — PRODUCTION WORKFLOW v6

1. Read the current `DONT_DIE_COSMETIC_ART_SPEC.md`.
2. Review `STYLE_LOCK_APPROVED_ART.png` and the relevant category references.
3. Identify the correct MAIN HERO attachment point and relative scale.
4. Use `SPATIAL_TEMPLATE_MAIN_HERO_4X4_NEUTRAL_GRAY.png` for spatial registration.
5. Perform the mandatory STYLE / POSITION / SCALE compliance check.
6. Generate the exploration sheet with the faint registration character still present.
7. Reject the generation if the cosmetic does not match the approved flat-fill, 5 px true-black-outline art style, even if positioning is correct.
8. Select preferred variation(s).
9. Remove the registration character separately without regenerating or altering the cosmetic.
10. Image Trace / clean / recolor in Illustrator as needed.


## v6.1 Slot enforcement

Treat the sheet as 16 fixed 480×640 slots.

- Slots 1–4: first brief
- Slots 5–8: second brief
- Slots 9–12: third brief
- Slots 13–16: fourth brief

Every populated logical row must generate four distinct variations.

Blank rows are fully empty white and contain no registration character.


## v6.2 HAT workflow

For HATS, use the coordinate-only HAT anchor template instead of the full-character registration template.

The anchor exists only to communicate canonical head position. Do not generate a character underneath the hat.

Use:
- `HAT_ANCHOR_TEMPLATE_4X4.png` for full sheets
- `HAT_ANCHOR_TEMPLATE_ROW1_ONLY.png` for the one-row calibration test


## v6.3 HAT production

Use the single-dot HAT anchor, not the old arc anchor.

Canonical dot: X=220, Y=190 in each 480×640 slot.
Typical ordinary-hat envelope: X=105–335, Y=35–205.

For partial sheets, the source template must contain dots only in populated slots.


## v6.4 Full HAT sheet

For four populated HAT briefs, use `HAT_DOT_ANCHOR_4X4.png` and map four variations of each brief to positions 1–4, 5–8, 9–12, and 13–16 respectively. Treat the layout as 16 predetermined coordinates on one production canvas, not as a presentation grid.
