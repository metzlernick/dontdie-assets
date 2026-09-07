# Don't Die Cosmetic Artwork — Master Production Specification

**Version:** 1.6  
**Purpose:** Canonical visual and category specification for generating Illustrator-friendly cosmetic artwork for *Don't Die*.

## 0. Mandatory fresh pre-flight

Before every generation, freshly review:

1. this file
2. `REPEATABLE_PRODUCTION_WORKFLOW.md`
3. `templates/MAIN HERO.svg`
4. `templates/Character Master Template.svg`
5. relevant `reference-pack/` files
6. relevant `approved-art/<category>/`
7. any category-specific production controller/workflow
8. any especially similar approved cosmetic

Do not rely on memory or an earlier reading. If a required source cannot be verified, stop before generation.

For LEFT ARM, `LEFT_ARM_ZERO_CONTACT_WORKFLOW.md` and `LEFT_ARM_4X4_PRODUCTION_CONTROLLER.md` are the category-specific authority and override any general held-object rule.

For ARMOR / OUTFITS, `ARMOR_OUTFIT_PRODUCTION_WORKFLOW.md` and `ARMOR_STAGE_B_DETERMINISTIC_REGISTRATION.md` are the category-specific authority. The armor pipeline is validated, complete, and locked.

## 1. Authority order

1. user's explicit current cosmetic brief
2. category-specific workflow/controller
3. this master specification
4. canonical templates
5. approved production artwork
6. general artistic judgment

Approved production art defines the visual language. Do not "improve" it into a different style.

## 2. Core art style

Default production art:

- flat 2D vector-style cartoon construction
- hard-edged solid color regions
- clean readable silhouette
- low detail
- pure white `#FFFFFF` background
- no cast shadow on isolated cosmetic art
- no texture, noise, grain, painterly rendering, blur, or feathering
- no gradients unless explicitly requested
- no presentation enlargement merely to fill empty space
- Illustrator/Image-Trace friendly

### Stroke system

At canonical 480×640 art scale:

- primary outer contour: visually about **5 px**
- true black `#000000`
- round joins/caps
- sparse interior linework, usually about 3–4 px when genuinely needed

Stroke width is an absolute visual production property, not proportional to object size. Tiny cosmetics should still read with a bold outline.

Soft effects such as flame, smoke, vapor, clouds, or explicitly unoutlined energy may use an intentional outline exception.

## 3. Standard sheet format

Unless a category-specific controller overrides it:

- 1920×2560 logical sheet
- 4 columns × 4 rows
- 480×640 logical cells
- no gutters
- no visible grid, labels, numbers, separators, or registration marks
- pure white background
- one user brief per populated row
- four moderately different variations per populated row
- unused rows remain blank white

Cosmetics are positioned relative to the canonical MAIN HERO coordinate system, never presentation-centered.

### LEFT ARM sheet override

LEFT ARM uses the validated wide zero-contact architecture:

- **2400×2560** logical sheet
- **600×640** logical cells
- 4×4
- hero context screen-right
- complete cosmetic screen-left

See the two LEFT ARM authority files for the full rules.

## 4. Variation logic

For each populated row:

- preserve exact requested object identity
- create four useful but moderately different executions
- vary silhouette, modest proportions, major shape treatment, or major decoration/color placement
- do not change object identity merely to increase variation
- do not add unnecessary detail just to make variants different

Required per-object features must appear on every applicable variation unless the user explicitly requests otherwise.

## 5. Scale and complexity

Production-relative scale outranks visual balance.

Never enlarge an object because:

- there is empty white space
- it is semantically important
- it has many possible details
- real-world proportions suggest a larger object
- a standalone icon would normally be larger

Default toward fewer, larger forms and only identity-critical detail.

For LEFT ARM specifically, small scale is a forcing function for simplicity: establish scale first, then remove detail that does not survive at that scale.

For ARMOR / OUTFITS, default toward canonical-hero-like simplicity: large flat color regions, low color count, restrained interior linework, and minimal micro-detail. When simplifying an already-approved armor design, preserve the approved concept and remove secondary detail/colors before changing core identity.

## 6. Category rules

### Hats

- use canonical MAIN HERO head geometry for position, scale, and facing
- preserve canonical head attachment/baseline
- do not presentation-center
- use current HAT references and approved hats
- final isolated hat/head cosmetic is object-only unless the category workflow explicitly calls for visible hero context during registration
- keep the primary ~5 px stroke language

### Right-arm items

- viewer-right raised-hand side
- exact final registration is completed in Illustrator
- use current RIGHT ARM references and approved art
- image generation owns identity, body-relative scale, broad orientation, silhouette, style, and continuous usable grip geometry
- do not create a hand-shaped hole or fake empty grip cutout
- final canonical hand overlays the object in Illustrator
- do not enlarge weapons merely to fill the canvas

### Left-arm items

LEFT ARM means viewer-left / screen-left lowered-hand side.

**Do not use the old generated-grip / Stage B reconstruction architecture.**

Use:

- `LEFT_ARM_ZERO_CONTACT_WORKFLOW.md`
- `LEFT_ARM_4X4_PRODUCTION_CONTROLLER.md`
- the active finished-cosmetic exemplar reference

The generated item stays complete, standalone, screen-left, and separated from MAIN HERO by white space. No geometry is hidden by a generated hand. Final hand placement/occlusion happens in Illustrator.

### Armor / outfits — completed locked pipeline

Armor is tied directly to canonical body geometry. Use `ARMOR_OUTFIT_PRODUCTION_WORKFLOW.md` and `ARMOR_STAGE_B_DETERMINISTIC_REGISTRATION.md`.

Validated architecture:

**Initial briefs + cape manifest → Stage A registered outfit generation → optional Stage A.5 cape correction → Stage B destructive isolation using the same manifest → deterministic per-cell registration restoration → Illustrator.**

#### Stage A

Stage A must preserve near-canonical hero proportions and pose, with particular attention to both arm chains and hands. Do not normalize the hero into a generic/stumpy chibi body.

Armor hands are production-critical. Don't Die hand anatomy is **three fingers + one thumb = four total digits**. Never add a fifth digit or rogue lower knuckle/finger. Preserve canonical hand pose, scale, wrist attachment, and silhouette.

Normal Stage A production uses canonical-derived geometry/hand/arm references plus the current brief. Old generated armor calibration sheets are not geometry authorities.

If the user explicitly requests reuse of an already-approved outfit concept, a previous approved sheet may be included only as a clearly labeled **DESIGN-ONLY** reference. It may guide identity, palette/material distribution, silhouette vocabulary, and broad design family, but not anatomy, registration, hand geometry, scale, or body proportions.

Pixel-art / 8-bit / heavily geometric rows should be placed last when practical to reduce cross-row style contamination.

#### Cape-state manifest — mandatory

Every armor batch carries explicit per-row cape metadata derived from the initial brief:

- **KEEP** — intended cape remains
- **NONE** — Stage B removes rear cape/context mass rather than guessing visually
- **RESTYLE** — localized Stage A.5 cape redesign before Stage B

Cape ownership is semantic metadata and must not be inferred from image appearance. The same manifest travels to Stage B. The user should not need to restate cape state downstream.

#### Optional Stage A.5 cape correction

Use Stage A.5 only when Stage A visually disagrees with the manifest or RESTYLE was requested.

Stage A.5 changes cape state only. It must preserve all non-cape outfit/body geometry, hands, arm chains, footwear, X/Y, pedestal, and row semantics as closely as possible.

#### Stage B — destructive isolation only

Stage B uses the approved upstream sheet — Stage A directly, or Stage A.5 when used — as literal artwork authority and the manifest as cape-ownership authority.

Remove:

- head / face / hair / ears / exposed non-outfit hero anatomy
- context
- headwear when body outfit only is requested
- **the entire wooden pedestal/platform in every cell, including top, rim, outline, highlights, shadows, and fragments**
- rear cape/context mass in rows marked NONE

Preserve only visibly existing approved outfit artwork, intended KEEP capes, outfit-specific hand treatment, footwear, and intentional structural features such as peg legs.

**Any visible pedestal in any cell is a Stage-B failure.**

When head/body/pedestal/context is erased, newly exposed regions remain white. Never complete hidden collars, necklines, shoulder cloth, capes, sleeves, boots, feet, peg legs, wraps, or garments. Preserve the exact upstream visible occlusion boundary.

Treat cells independently. Do not borrow semantics across rows or columns.

Raw Stage-B scale/X/Y drift does not by itself fail isolation if the artwork is otherwise faithful; deterministic registration owns that correction.

Do **not** use a post-isolation generative Stage B.5 cape-removal pass. Do **not** use approximate spatial/color masking of a flattened Stage-B PNG as the general cape-removal solution.

#### Deterministic registration restoration

After Stage B passes isolation:

- Stage A / A.5 is coordinate and scale authority
- Stage B is artwork/isolation authority
- process each logical cell independently
- apply uniform scale + X/Y translation only
- no rotation, non-uniform stretch, warp, redraw, inpainting, or semantic modification
- rebuild exactly **1920×2560** with exactly **480×640** cells
- do not trust raw downloaded Stage-A/Stage-B dimensions as canonical
- do not substitute whole-sheet resize for per-cell restoration

### Accessories

- user should state intended body location when not obvious
- position according to MAIN HERO, not cell center
- preserve true body-relative scale
- significant empty white space is acceptable

## 7. Registration

Final production registration is deterministic in Illustrator for categories whose workflow assigns final placement there.

`CANONICAL_REGISTRATION_SYSTEM.md` owns anchor metadata and final placement conventions.

Image generation should not be asked to solve pixel-perfect final hand registration when the category workflow assigns that responsibility to Illustrator.

For ARMOR / OUTFITS, deterministic registration restoration occurs before Illustrator because Stage B may introduce scale/X/Y drift. The restored raster sheet must return to canonical 1920×2560 / 480×640-cell registration before vector cleanup and layering.

## 8. Background and output hygiene

Do not add unless explicitly requested:

- decorative backgrounds
- visible grids
- labels
- row names
- numbers
- framing devices
- shadows beneath isolated cosmetics
- substitute characters/mannequins
- registration dots/crosshairs

The output is a production asset sheet, not a presentation board.

## 9. Illustrator Image Trace starting point

Recommended starting setup:

- Mode: Color
- Palette: Limited
- Colors: roughly 10–16
- Paths: roughly 90%
- Corners: roughly 70%
- Noise: 1 px
- Method: Abutting
- Create: Fills
- Strokes: Off
- Snap Curves to Lines: Off
- Ignore White: On

After Expand, clean small accidental shapes and verify silhouette edges remain smooth.

## 10. Mandatory pre-generation compliance summary

Before generation, report the applicable:

- sheet and cell dimensions
- category-specific hero visibility/context rule
- positioning method
- scale authority
- stroke/style rule
- background/guides rule
- category-specific workflow
- references actually reviewed

If any planned output conflicts with the applicable category authority, correct it before generation.

## 11. Core principle

**Production position, production-relative scale, complete geometry, silhouette, stroke consistency, and clean downstream vectorization outrank presentation balance.**

For LEFT ARM specifically:

**FINISHED-EXEMPLAR SCALE → SIMPLIFY DETAIL TO SURVIVE SCALE → EXACT IDENTITY → POSE/DESIGN/VARIATION.**

**WHEN UNCERTAIN, SMALLER AND SIMPLER WINS.**

For ARMOR / OUTFITS:

**CANONICAL GEOMETRY + FOUR-DIGIT HAND FIDELITY → EXPLICIT CAPE METADATA → SIMPLE FLAT STAGE A DESIGN → DESTRUCTIVE NO-RECONSTRUCTION STAGE B WITH TOTAL PEDESTAL REMOVAL → DETERMINISTIC PER-CELL REGISTRATION → ILLUSTRATOR.**