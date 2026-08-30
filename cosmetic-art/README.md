# Don't Die Cosmetic Art — GitHub Reference Package

Upload the CONTENTS of this package into:

https://github.com/metzlernick/dontdie-assets/tree/main/cosmetic-art

This package is designed so future ChatGPT sessions can use GitHub as the persistent reference source without requiring the full SVG library to be re-uploaded.

## Important

SVG files remain the canonical production/vector originals.

PNG files and reference sheets are exact raster reference renders created specifically because some web readers cannot visually inspect `image/svg+xml`.

A future session should:
1. Read `DONT_DIE_COSMETIC_ART_SPEC.md`.
2. Inspect `reference-sheets/MASTER_CHARACTER_REFERENCE.png`.
3. Inspect the relevant category sheet.
4. Inspect the relevant placement sheet when applicable.
5. Proceed without demanding direct SVG inspection if the PNG references were successfully reviewed.

## Folders

- `templates/` — master SVG geometry.
- `reference-pack/svg/` — compact SVG reference set.
- `reference-pack/png/` — 480×640 PNG renders of every uploaded production asset and template.
- `reference-sheets/` — visual category/contact sheets.
- `approved-art/` — complete approved SVG library by category.

## Repository

https://github.com/metzlernick/dontdie-assets/tree/main/cosmetic-art


## Mandatory spatial templates

`reference-sheets/SPATIAL_TEMPLATE_MAIN_HERO_4X4.png` and
`reference-sheets/SPATIAL_TEMPLATE_MAIN_HERO_4X4_FAINT.png`
exist specifically to prevent image generators from centering/enlarging cosmetics.

Use the faint template as the composition reference, fit the cosmetics to the characters at 100% scale, then remove the character layer for the final white-background output.


## Validated workflow

See `PRODUCTION_WORKFLOW.md`. The current required method is **faint visible MAIN HERO during generation → separate non-generative template removal → Illustrator**.


## v4 image-editing requirement

The faint 4×4 MAIN HERO spatial template is now the **actual image-editing base**. Future sessions should edit that exact PNG and add cosmetics; they should not regenerate a new template from visual reference.
