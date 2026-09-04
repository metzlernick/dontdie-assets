# Don't Die Cosmetic Artwork — Master Production Specification

**Version:** 1.4  
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

For ARMOR / OUTFITS, `ARMOR_OUTFIT_PRODUCTION_WORKFLOW.md` is the category-specific authority. V44 Stage A + Stage B are validated and locked.

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

### Armor / outfits — V44 locked

Armor is tied directly to canonical body geometry. Use `ARMOR_OUTFIT_PRODUCTION_WORKFLOW.md`.

Validated architecture:

**Stage A registered outfit design → Stage B faithful isolation → optional Stage B.5 cape operation → Illustrator.**

Stage A must preserve near-canonical hero proportions and pose, with particular attention to both arm chains and hands. Do not normalize the hero into a generic/stumpy chibi body.

Armor hands are production-critical. Don't Die hand anatomy is **three fingers + one thumb = four total digits**. Never add a fifth digit or rogue lower knuckle/finger. Preserve canonical hand pose, scale, wrist attachment, and silhouette.

Normal Stage A production should use the canonical geometry controller/substrate plus the current brief. Do not include old generated armor calibration sheets as visual references; they can contaminate anatomy, pose, hand count, and proportions.

Stage B is isolation, not redesign. Preserve the approved Stage-A outfit, both hands, arm chains, scale, X/Y, silhouette, and cape exactly while removing the underlying hero/head/pedestal/context.

Cape handling is modular. Do not destabilize Stage A/B to force universal cape behavior. A later Stage B.5 may KEEP, REMOVE, or RESTYLE cape according to the current brief while leaving all non-cape registration untouched.

### Accessories

- user should state intended body location when not obvious
- position according to MAIN HERO, not cell center
- preserve true body-relative scale
- significant empty white space is acceptable

## 7. Registration

Final production registration is deterministic in Illustrator.

`CANONICAL_REGISTRATION_SYSTEM.md` owns anchor metadata and final placement conventions.

Image generation should not be asked to solve pixel-perfect final hand registration when the category workflow assigns that responsibility to Illustrator.

For ARMOR / OUTFITS, however, Stage A and Stage B must remain extremely close to canonical body and hand geometry because the outfit itself overlays the hero in game.

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

**CANONICAL REGISTRATION + FOUR-DIGIT HAND FIDELITY → OUTFIT DESIGN → FAITHFUL ISOLATION → OPTIONAL CAPE OPERATION.**
