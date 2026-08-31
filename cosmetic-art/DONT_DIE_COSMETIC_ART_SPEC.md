# DON'T DIE COSMETIC ART — MASTER PRODUCTION SPEC v6.9

Canonical source:
https://github.com/metzlernick/dontdie-assets/tree/main/cosmetic-art

## 1. Core production architecture

Every cosmetic sheet uses a canonical 4×4 logical layout:
- Canvas: 1920×2560
- Cell: 480×640
- 4 columns × 4 rows
- No gutters, visible grid, labels, numbers, guides, or registration marks
- Pure white #FFFFFF final background
- One user brief per row
- Four moderately different interpretations across that row
- Unused rows remain completely blank white

Every 480×640 cell corresponds to the exact MAIN HERO coordinate system.

The cosmetic is NOT an icon centered in a cell. It is a production layer attached to MAIN HERO at its real in-game position and relative scale.

## 2. Two-stage generation architecture — REQUIRED

The validated workflow is now:

### STAGE A — REGISTRATION GENERATION
Generate the cosmetics while the FULL MAIN HERO is visibly present in every cell.

Purpose:
- force correct scale
- force correct X/Y placement
- force correct orientation
- force correct grip/attachment geometry
- give the model spatial context

The character is a registration mannequin during this stage.

It is acceptable if the image model redraws/reinterprets the character during Stage A. Exact preservation of hero pixels is NOT required. The hero is temporary and will be removed.

The cosmetic must be designed at its FINAL production scale and FINAL production location during Stage A.

Do NOT:
- center cosmetics for presentation
- enlarge them to fill empty space
- move them away from their true attachment point

### STAGE B — COSMETIC ISOLATION
After Stage A is approved spatially, perform a separate image-edit/isolation pass.

Input:
Stage A sheet containing MAIN HERO + cosmetics.

Output:
same 1920×2560 coordinate system containing ONLY the cosmetics on pure white.

The isolation pass must preserve:
- approximate Stage A X/Y position
- approximate Stage A scale
- design identity
- silhouette
- stroke language
- colors

Remove:
- hero
- hair
- face
- body
- pedestal
- unrelated clothing
- unrelated weapons
- all registration artwork

IMPORTANT:
This is a visual production-isolation workflow. Pixel-identical preservation is not required if the image model necessarily regenerates the isolated cosmetic. The requirement is that the isolated result remains production-equivalent and spatially registered.

## 3. Art style lock

Default production style:
- flat 2D vector-style artwork
- true-black primary outer stroke
- primary cosmetic stroke: approximately 5 px at canonical 480×640 scale
- consistent stroke width across cosmetics regardless of object size
- round caps and joins
- minimal interior linework
- interior lines may be thinner when necessary
- approximately 6–10 colors per design
- hard-edged solid-color highlights/shading allowed
- no gradients unless explicitly requested
- no texture/noise unless explicitly requested
- no cast/drop shadows
- no feathered glow into background
- no unnecessary tiny decoration
- pure white final background
- straight-on orientation consistent with MAIN HERO and approved references

Approved production art is the visual authority. Do not modernize, painterly-render, or otherwise “improve” it into another style.

## 4. Category rules

### HAT
Stage A:
- Fit to exact MAIN HERO head location.
- Preserve real head-relative scale.
- Foreground overlap over hair is allowed and expected.
- Follow MAIN HERO's facing/orientation.
- Do not center in cell.

Stage B:
- Remove hero and retain only head cosmetic.
- Use the HAT extraction region/mask when available.

### RIGHT ARM
Stage A:
- Use exact canonical right-hand grip position.
- Grip position is sacred.
- Object orientation at hand must follow approved right-arm references.
- Object may extend substantially away from hand when design requires.
- Do not scale object to fill cell.
- Registration hero/hand may be visible during Stage A.

Stage B:
- Final output is OBJECT ONLY.
- Remove hero and hand.
- Do NOT create a fake empty/transparent grip cutout.
- Preserve the object artwork through the grip region; the production hand will later layer over it.

Canonical references:
- Gold Sword.svg
- IceSickle.svg
- Volcannon.svg

### LEFT ARM
Stage A:
- Use exact canonical left-hand grip/attachment position.
- Grip/attachment position is sacred.
- Preserve distinct left-arm geometry.
- Small objects remain small.
- Registration hero/hand may be visible during Stage A.

Stage B:
- Final output is OBJECT ONLY.
- Remove hero and hand.
- Do NOT create an empty grip cutout.
- Preserve object artwork behind the eventual hand layer.

Canonical references:
- Glints Shield.svg
- Potion of Death.svg

### ARMOR / OUTFIT
Armor remains a two-pass production category.

Stage A exploration:
- Use exact MAIN HERO pose/body silhouette.
- Preserve body proportions.
- Outfit follows canonical body.
- Include hands in exploration.
- Hands remain canonical size/position.
- Decorative outfit parts may extend modestly beyond body silhouette.

Stage B isolation:
- Remove unrelated registration character artwork.
- Retain the armor/outfit plus the hands required for the exploration asset.

After a design is selected:
- Create a separate HANDS-ONLY production layer.
- Character Master Template.svg is exact hand geometry authority.
- Hand stroke = 4.38 px.
- Round caps/joins.
- Preserve canonical hand positions.
- Preserve the intentional missing outline on the specified left-hand finger region. Do not repair it.

Canonical references:
- Black Armor.svg
- Toxic Armor.svg

### ACCESSORY
Stage A:
- User states intended body location.
- Infer only when placement is obvious; ask if ambiguous.
- Fit to MAIN HERO at true relative scale.
- Do not center accessory in cell.
- Accessories may naturally leave large amounts of empty space.

Stage B:
- Remove registration hero.
- Retain only accessory at its registered body-relative location.

Canonical reference:
- Meme Glass.svg
- Also review any approved accessory close to the requested design.

## 5. Reference hierarchy

1. User's explicit current cosmetic brief
2. Current master specification
3. MAIN HERO.svg / Character Master Template.svg
4. Approved in-game category references
5. General artistic judgment

Explicit user overrides take precedence when intentional.

## 6. Mandatory pre-generation review

Before EVERY new generation request, freshly retrieve:
- current DONT_DIE_COSMETIC_ART_SPEC.md
- templates/
- reference-pack/
- relevant approved-art category/
- especially similar approved cosmetics when applicable
- applicable category registration/extraction references

Do not rely on a previous reading.

Before generating, report:
- 1920×2560 sheet / 480×640 cells
- MAIN HERO visible during Stage A registration
- production-relative positioning, never presentation centering
- 5 px primary cosmetic stroke
- flat vector-style / hard-edged fills
- no visible grid/labels/guides
- applicable category rules
- references actually reviewed
- Stage B isolation requirement

If a required source cannot be verified, stop before generation.

## 7. Stage A acceptance criteria

Approve Stage A based primarily on:
1. correct relative position
2. correct relative scale
3. correct orientation
4. correct attachment/grip
5. correct art style
6. useful four-variation exploration

Do NOT reject Stage A merely because MAIN HERO itself was regenerated differently. The registration hero is disposable.

## 8. Stage B acceptance criteria

Approve final isolated sheet when:
- exactly the intended cosmetics remain
- hero/registration artwork is gone
- background is pure white
- cosmetics remain at correct production-relative coordinates
- scale remains correct
- orientation remains correct
- stroke/style remains consistent
- no extraction guides/masks/dots/labels remain

## 9. Illustrator handoff

Final isolated output is intended for Image Trace and cleanup in Adobe Illustrator.

Prioritize:
- clean hard edges
- true black outlines
- discrete solid fills
- minimal micro-detail
- no soft transparency at edges
- no background shadows
- clean white separation around assets

## 10. Core principle

GENERATE WITH THE CHARACTER FOR SPATIAL ACCURACY.
REMOVE THE CHARACTER AFTERWARD FOR PRODUCTION.

Never sacrifice production position/scale merely to create a balanced-looking sheet.
