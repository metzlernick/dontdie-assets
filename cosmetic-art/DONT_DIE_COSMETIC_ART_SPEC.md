# DON'T DIE COSMETIC ART — MASTER PRODUCTION SPEC v7.0

Canonical source:
https://github.com/metzlernick/dontdie-assets/tree/main/cosmetic-art

This document defines the repeatable production workflow for ALL cosmetic categories.

---

## 1. Canonical sheet geometry

Every exploration sheet uses:

- Canvas: 1920×2560 px
- Logical layout: 4 columns × 4 rows
- Logical cell: 480×640 px
- Gutters: none
- Visible grid: none
- Labels/numbers/guides: none
- Final background: pure white #FFFFFF
- One user brief per logical row
- Four moderately different interpretations across that row
- Unused rows remain completely blank white

Each 480×640 cell represents the exact canonical MAIN HERO coordinate system.

The cosmetic is NOT an icon centered in a box. It is a production layer attached to the canonical character.

---

## 2. Universal two-stage workflow — applies to ALL categories

### STAGE A — REGISTRATION GENERATION

Stage A exists to solve:
- final in-game X/Y position
- final relative scale
- final orientation
- grip/attachment geometry
- body-relative fit
- layering relationship

The FULL MAIN HERO must be visibly present in every populated cell during Stage A.

### Exact MAIN HERO preservation rule

MAIN HERO is supplied source artwork and must be treated as a protected registration layer.

Do NOT:
- redraw MAIN HERO
- regenerate MAIN HERO
- reinterpret MAIN HERO
- restyle MAIN HERO
- simplify MAIN HERO
- recolor MAIN HERO
- alter face/hair/body/clothing/base
- resize MAIN HERO
- reposition MAIN HERO
- rotate MAIN HERO
- mirror MAIN HERO
- crop MAIN HERO
- substitute a similar character
- invent a new pose

Only ADD the requested cosmetic artwork on top of the supplied MAIN HERO registration image.

If the image-generation system cannot actually use the supplied registration image as an edit/base image and preserve it, it must STOP rather than silently create a substitute character.

### Stage A cosmetic rule

Generate the cosmetic directly at its FINAL:
- production position
- production scale
- angle/orientation
- attachment/grip point

Do not center, enlarge, normalize, or rebalance the cosmetic for presentation.

It is acceptable and expected for MAIN HERO to visually cover parts of the cosmetic during Stage A where the final production hand/body will later layer over the object.

---

## 3. STAGE B — COSMETIC ISOLATION

After Stage A is approved, perform a separate isolation/edit pass.

Input:
- approved Stage A composite containing MAIN HERO + cosmetics

Output:
- same 1920×2560 canvas
- cosmetics only
- pure white background
- no MAIN HERO
- no pedestal/base
- no registration artwork
- no guides, dots, masks, labels, or borders

Preserve the cosmetic's:
- X/Y location
- scale
- orientation
- design identity
- silhouette
- stroke language
- colors

The isolation pass is NOT an opportunity to redesign, recenter, resize, or “improve” the cosmetic.

If the image model necessarily regenerates small details during isolation, the output must remain production-equivalent and spatially registered.

---

## 4. Universal art style

Unless explicitly overridden by the current cosmetic brief:

- flat 2D vector-style artwork
- true black #000000 primary outer stroke
- primary cosmetic stroke: 5 px at canonical 480×640 scale
- stroke width is absolute across cosmetics, not proportional to object size
- round caps and joins
- minimal interior black linework
- interior lines may be approximately 3–4 px when genuinely needed
- prefer flat color boundaries over extra black detail
- generally 6–10 colors maximum
- hard-edged solid-color highlight/shadow shapes allowed
- no gradients
- no soft shading
- no painterly rendering
- no texture/noise
- no cast/drop shadows
- no feathered glow into the white background
- Illustrator/Image-Trace friendly edges

### Explicit override rule

A user brief may intentionally override a master style rule for that row only.

Examples:
- gradient energy blade
- luminous glow
- special material treatment

The exception applies ONLY to that specific row/design and does not change the global master style.

### Amorphous effect exception

Effects such as:
- flame
- smoke
- vapor
- clouds

do not require a complete thick black perimeter when the approved art language supports an outline-free effect.

The physical object producing the effect still follows the normal stroke rule unless explicitly overridden.

---

## 5. Category geometry rules

### HAT

Stage A:
- Fit to exact canonical head/hair position.
- Preserve character-relative scale.
- Follow MAIN HERO orientation.
- Foreground overlap over hair is allowed.
- Do not center in the cell.

Stage B:
- Remove MAIN HERO.
- Retain only head cosmetic.
- Use category extraction references/masks when available.

---

### RIGHT ARM

Stage A:
- Exact canonical RIGHT-HAND grip position is sacred.
- Object must conform to the hand; never move the hand toward the object.
- Orientation at the grip follows approved RIGHT ARM references.
- Generate the object through/behind the hand as needed.
- The hand may cover the grip region during Stage A.
- Scale is determined by how the object actually sits on MAIN HERO.
- Long/large weapons may extend substantially through the cell if correct.

Stage B:
- Final output is OBJECT ONLY.
- Remove MAIN HERO and the hand.
- Do NOT create a hand-shaped empty gap.
- Preserve/reconstruct continuous object artwork through the grip region.
- The production hand will later layer on top.

Canonical minimum references:
- Gold Sword.svg
- IceSickle.svg
- Volcannon.svg

---

### LEFT ARM

Stage A:
- Exact canonical LEFT-HAND grip/attachment position is sacred.
- Object must conform to the canonical left-hand geometry.
- Preserve distinction between left-arm and right-arm orientation.
- Small objects remain small.
- The hand may cover the grip/attachment region during Stage A.

Stage B:
- Final output is OBJECT ONLY.
- Remove MAIN HERO and hand.
- Do NOT create an empty grip cutout.
- Preserve/reconstruct continuous object artwork behind the eventual hand layer.

Canonical minimum references:
- Glints Shield.svg
- Potion of Death.svg

---

### ARMOR / OUTFIT

Armor uses the universal Stage A/Stage B workflow plus a separate hands production pass.

Stage A:
- Use exact MAIN HERO pose and body proportions.
- Outfit conforms to canonical body silhouette.
- Include hands in exploration.
- Hands remain canonical size/position.
- Decorative outfit elements may extend modestly outside the body silhouette.

Stage B:
- Remove unrelated registration artwork.
- Retain the armor/outfit and required exploration hands.

After a design is selected:
- Create a separate HANDS-ONLY production layer.
- Character Master Template.svg is the exact geometry authority.
- Hand stroke: 4.38 px.
- Round caps/joins.
- Preserve canonical hand positions.
- Preserve the intentional missing outline on the specified left-hand finger region.
- Do not repair that missing outline.

Canonical minimum references:
- Black Armor.svg
- Toxic Armor.svg

---

### ACCESSORY

Stage A:
- User specifies intended body location.
- Infer only if obvious.
- Ask before generation if placement is ambiguous.
- Fit to MAIN HERO at true body-relative scale.
- Do not center accessory in the cell.
- Large empty white areas are normal.

Stage B:
- Remove MAIN HERO.
- Retain accessory only at its registered body-relative coordinates.

Canonical minimum reference:
- Meme Glass.svg
- plus any approved accessory especially similar to the requested design

---

## 6. Reference hierarchy

1. User's explicit current brief
2. Current master specification
3. MAIN HERO.svg / Character Master Template.svg
4. Approved category artwork
5. General artistic judgment

Approved in-game art defines the visual language. Do not “improve” it into another style.

---

## 7. Mandatory fresh pre-flight before EVERY generation

Freshly retrieve and review:

- current DONT_DIE_COSMETIC_ART_SPEC.md
- templates/
- reference-pack/
- relevant approved-art category/
- especially similar approved cosmetics
- applicable registration/extraction references

Do not rely on memory or a previous reading.

Before generating, explicitly report:

- 1920×2560 sheet / 480×640 cells
- Stage A exact MAIN HERO edit-base requirement
- final production-relative positioning method
- 5 px primary stroke
- flat/hard-edged style rules
- allowed row-specific overrides
- no grid/labels/guides
- category-specific geometry
- references actually reviewed
- Stage B isolation requirement

If required sources cannot be verified, STOP.

---

## 8. Stage A acceptance criteria

Approve Stage A only if:

- correct MAIN HERO source artwork is preserved
- correct category attachment/grip
- correct relative scale
- correct orientation
- correct position
- correct style
- four meaningful variations per populated row
- no grid/labels/guides

A beautiful cosmetic with the wrong attachment geometry is a failure.

---

## 9. Stage B acceptance criteria

Approve Stage B only if:

- hero/registration artwork is gone
- intended cosmetics remain
- pure white background
- correct production-relative coordinates
- correct scale/orientation
- correct stroke/style
- no extraction marks/guides
- grip regions reconstructed continuously where required

---

## 10. Core rule

USE THE EXACT MAIN HERO AS A PROTECTED EDIT-BASE FOR STAGE A.

GENERATE THE COSMETIC ON THE CHARACTER.

REMOVE THE CHARACTER ONLY IN STAGE B.

Never substitute a newly generated character.
