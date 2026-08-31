# DON'T DIE COSMETIC ART — MASTER PRODUCTION SPEC v7.5

Canonical repository:
https://github.com/metzlernick/dontdie-assets/tree/main/cosmetic-art

This document defines the repeatable production workflow for ALL cosmetic categories.

## CANONICAL SHEET GEOMETRY
- Canvas: 1920×2560
- Logical layout: 4 columns × 4 rows
- Cell: 480×640
- No gutters
- No visible grid
- No labels/guides
- Pure white background
- One cosmetic brief per row
- Four moderately different interpretations across that row

Each cell uses the exact canonical MAIN HERO coordinate system.

## UNIVERSAL TWO-STAGE WORKFLOW

### STAGE A — REGISTRATION
Use `registration/MAIN_HERO_REGISTRATION_4X4.png` as the starting image whenever possible.

The 4×4 registration image already contains the character in all 16 canonical cell positions.

EDIT THE EXISTING 1920×2560 SHEET.
Do not ask the image model to construct or duplicate the hero grid.

Preserve the character's:
- position
- scale
- pose
- proportions
- orientation
- overall appearance

Minor incidental redraw differences from image editing are acceptable.
Pixel-identical character preservation is NOT the acceptance criterion.

The acceptance criterion is cosmetic registration:
- correct attachment/grip point
- final production-relative X/Y
- final scale
- final angle/orientation
- correct body-relative fit

Generate only the requested cosmetic additions.

Do not:
- center cosmetics in cells
- enlarge them for presentation
- move the character to fit a cosmetic
- mirror category geometry
- invent a new attachment point

Natural character occlusion is desirable during Stage A where the final body/hand will overlap the cosmetic.

### STAGE B — ISOLATION
Input: approved Stage A registration sheet.

Remove:
- character
- hair/face/body/clothing
- hands/gloves
- pedestal/base
- all registration artwork

Keep:
- exact cosmetic-relative X/Y
- scale
- angle/orientation
- overall silhouette
- colors
- design identity
- stroke language

Final background: pure white.

IMPORTANT OCCLUSION RECONSTRUCTION:
Where the character covered part of the cosmetic in Stage A, reconstruct only the small logically continuous hidden portion.

For held objects:
- do not leave hand-shaped gaps
- do not shorten grips
- do not reposition the object
- complete the handle/grip continuously
- production hands will later layer on top

Stage B is cleanup/isolation, not redesign.

## UNIVERSAL ART STYLE
Unless explicitly overridden by the current brief:
- flat 2D vector/cartoon art
- approximately 5 px true-black primary outer stroke at canonical scale
- absolute stroke width, not proportional to object size
- round caps/joins
- hard-edged solid-color regions
- minimal interior black linework
- low detail
- no texture/noise
- no painterly rendering
- no cast shadows
- no gradients
- no glow

Explicit row-level instructions may override a rule only for that row.

Amorphous effects such as flame/smoke/vapor may omit a complete thick black perimeter when appropriate.

## COMPLEX-OBJECT DETAIL LIMIT
Mechanically complex cosmetics must remain readable at gameplay scale.

Prefer:
- strong silhouette
- approximately 3–5 major physical forms
- large readable color blocks
- minimal secondary details

Avoid:
- clusters of vents
- repeated holes
- excessive bolts
- tiny warning decals
- dense exposed mechanisms
- multiple unnecessary tanks
- excessive hoses/tubing
- mechanical greebles
- micro-panels

This is especially important for weapons such as flamethrowers, guns, machinery, and sci-fi devices.

## CATEGORY RULES

### HAT
- Fit exact head/hair geometry.
- Preserve character-relative scale.
- Follow canonical head orientation.
- Hair overlap is allowed.
- Do not center in cell.
Stage B: remove hero and retain hat at registered coordinates.

### RIGHT ARM
- Exact canonical RIGHT-HAND grip is sacred.
- Object conforms to hand, never hand to object.
- Generate through/behind hand as needed.
- Hand overlap over grip is desirable in Stage A.
- Preserve true relative scale and orientation.
Stage B:
- remove character/hand
- reconstruct continuous grip
- leave object only

Reference examples:
- `reference-pack/svg/Gold Sword.svg`
- `reference-pack/svg/IceSickle.svg`
- `reference-pack/svg/Volcannon.svg`
- `approved-art/right-arm/`

### LEFT ARM
- Exact canonical LEFT-HAND grip/attachment point is sacred.
- Preserve left-arm orientation.
- Object conforms to existing hand geometry.
Stage B:
- remove character/hand
- reconstruct continuous hidden object region
- leave object only

Reference examples:
- `reference-pack/svg/Glints Shield.svg`
- `reference-pack/svg/Potion of Death.svg`
- `approved-art/left-arm/`

### ARMOR / OUTFIT
- Conform to exact canonical body geometry.
- Preserve body pose/proportions.
- Include hands during exploration if required by the current armor workflow.
- Do not enlarge costume elements simply to fill space.
Selected production hands may require a separate hands-only pass using Character Master Template geometry.

Reference examples:
- `reference-pack/svg/Black Armor.svg`
- `reference-pack/svg/Toxic Armor.svg`
- `approved-art/armor/`

### ACCESSORY
- Use user-specified body location.
- If placement is genuinely ambiguous, ask before generation.
- Preserve true body-relative scale.
- Large empty white areas are normal.
Stage B: remove hero and retain accessory only at registered coordinates.

Reference example:
- `reference-pack/svg/Meme Glass.svg`
- `approved-art/accessories/`

## REFERENCE REVIEW
Before generation:
- retrieve current master spec
- review templates
- review relevant approved-art category
- review especially similar approved cosmetics
- review relevant SVG/PNG references when available

Reference retrieval should inform style and geometry.

The mandatory generation substrate for Stage A is:
`registration/MAIN_HERO_REGISTRATION_4X4.png`

## STAGE A ACCEPTANCE
Approve only if:
- registration geometry is consistent
- cosmetic attachment/grip is correct
- relative scale is correct
- orientation is correct
- style is correct
- four meaningful variations per populated row
- no grid/labels/guides

## STAGE B ACCEPTANCE
Approve only if:
- hero/registration art is gone
- cosmetics remain isolated
- pure white background
- production-relative coordinates are preserved
- scale/orientation remain correct
- hidden grip/attachment regions are reconstructed continuously
- no redesign
- no guides/grid/labels

## CORE RULE
START FROM THE PREBUILT 4×4 MAIN HERO REGISTRATION SHEET.

GENERATE COSMETICS ON THE CHARACTER.

REMOVE THE CHARACTER ONLY IN STAGE B.
