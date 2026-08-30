# DON'T DIE COSMETIC ART — MASTER PRODUCTION SPECIFICATION v6

This document is the canonical production specification for Don't Die cosmetic exploration artwork.

Repository:
https://github.com/metzlernick/dontdie-assets/tree/main/cosmetic-art

The repository is the ONLY source of truth. In a new session, retrieve the current files rather than relying on memory or prior conversations.

---

## 1. Production Priorities

Every generated cosmetic must satisfy these requirements in this order:

1. **APPROVED DON'T DIE ART STYLE**
2. **Correct MAIN HERO-relative position**
3. **Correct MAIN HERO-relative scale**
4. **Prompt-specific design details and variation**

A result that is correctly positioned but does not match the approved art style is a FAILED production result.

A visually attractive sheet is not a goal. Production usability is the goal.

---

## 2. Canonical Canvas and Grid

- Exploration sheet: **1920×2560 px**
- Logical layout: **4 columns × 4 rows**
- Each logical cell: **480×640 px**
- No gutters
- No visible grid
- No cell borders
- No labels
- No guides
- No registration marks
- Background: **pure white**
- Each row corresponds to one user design description.
- Each populated row contains four moderately different interpretations of that same description.
- Unused rows remain completely blank pure white.

Each 480×640 cell is the exact canonical MAIN HERO coordinate system. It is NOT an icon canvas.

---

## 3. Mandatory Style Authority

Before generating, visually review:

1. `reference-sheets/STYLE_LOCK_APPROVED_ART.png`
2. the relevant category reference sheet
3. individual approved PNG references when useful

Approved artwork is the authority for visual style.

### Required style

- flat 2D vector-style artwork
- hard-edged solid color fills
- primary outer stroke: **5 px at canonical 480×640 scale**
- outer stroke: **true black #000000**
- outer stroke width must remain consistent regardless of cosmetic size
- round caps and round joins
- clean/simple silhouettes
- minimal interior linework
- interior lines may be thinner than the 5 px outer stroke
- low detail density
- generally 6–10 colors maximum unless explicitly overridden
- straight-on presentation consistent with approved references
- isolated cosmetic artwork

### Forbidden by default

- gradients
- soft shading
- airbrushed shading
- painterly rendering
- glossy/3D modeling
- soft highlights
- ambient occlusion
- cast shadows
- drop shadows
- texture/noise
- sketch lines
- feathered edges
- excessive tiny decorative details
- generic polished “AI vector” rendering

If shading/highlight is needed, represent it as a **separate flat hard-edged color shape**.

### Style rejection test

Immediately before generation ask:

> Would this cosmetic plausibly sit directly beside the approved in-game SVG artwork without looking like it came from another game or art pipeline?

If no, do not generate until the rendering plan is corrected.

---

## 4. Mandatory Spatial Registration

Use:

`reference-sheets/SPATIAL_TEMPLATE_MAIN_HERO_4X4_NEUTRAL_GRAY.png`

as the spatial registration base.

The MAIN HERO registration figure exists only to establish body-relative coordinates and scale.

### During generation

- MAIN HERO remains faint and neutral.
- Every character occupies the canonical 480×640 coordinate system.
- Generate the cosmetic directly at its final attachment location.
- Generate the cosmetic at its final production size.
- Large amounts of empty white space are correct.

### Never

- center a cosmetic inside its cell
- enlarge it to fill available white space
- normalize sizes between rows
- make cosmetics similar in bounding-box size for presentation
- reposition after fitting to MAIN HERO
- resize after fitting to MAIN HERO
- optimize individual-cell composition

The registration character is disposable. Correct cosmetic coordinates are what matter.

---

## 5. Registration Character Integrity

When possible, use the neutral-gray spatial template as the actual image-editing base rather than recreating it.

Do not intentionally redesign the registration character.

However, **registration-character pixel fidelity is not a production requirement**. The character will be removed later. Do not sacrifice cosmetic style, position, or scale trying to make the disposable registration character perfect.

The cosmetic itself is the production asset.

---

## 6. Category Rules

### HAT

- Fit directly to the canonical head.
- Normal hats remain near the head region toward the top of the 480×640 cell.
- The majority of the cell may remain white.
- Hat size is determined by how it fits MAIN HERO, not by available canvas space.
- Hair/head may be visually occluded by the cosmetic.
- Do not vertically center hats.

### RIGHT ARM

- Align to the canonical right-arm/right-hand grip position shown by approved references.
- Generate the cosmetic object only.
- Do not intentionally leave an empty grip gap; the hand/layering workflow is handled separately.
- Long weapons may extend substantially through the cell while preserving their canonical grip.

### LEFT ARM

- Align to the canonical left-arm/left-hand grip position shown by approved references.
- Generate the cosmetic object only.
- Do not intentionally leave an empty grip gap.
- Preserve approved left-arm orientation and layering behavior.

### ARMOR

Armor uses a two-pass workflow.

**Pass 1:** armor/outfit with the required hands/body treatment at the canonical character pose.

**Pass 2:** hands-only artwork for layering/cutout use.

- Canonical pose and proportions remain fixed.
- Hand size/stroke must remain consistent with approved armor references.
- Follow the supplied hand reference geometry, including intentionally absent outline areas required for layering.

### ACCESSORY

- User specifies the intended body location.
- Align to that location on MAIN HERO.
- If attachment location is genuinely ambiguous, ask before generating.
- Scale is determined by the character/body relationship, not by cell size.

---

## 7. Variation Rules

For each user description:

- create four moderately different design interpretations across the row
- preserve the core requested object/concept
- vary silhouette, proportion, shape language, secondary details, or flat color arrangement
- do not vary so aggressively that the four results become different cosmetic concepts
- do not introduce extra decorative elements merely to make variations feel different

User instructions explicitly overriding this specification take precedence only for the specific rule they override.

If an override is unclear or conflicts with another production requirement, ask before generating.

---

## 8. Mandatory Pre-Generation Compliance Check

Before every generation explicitly verify:

### STYLE
- [ ] STYLE_LOCK_APPROVED_ART.png reviewed
- [ ] relevant category references reviewed
- [ ] 5 px true-black outer stroke planned
- [ ] flat hard-edged fills only
- [ ] no gradients/soft shading/glossy modeling
- [ ] minimal interior detail
- [ ] complexity matches approved Don't Die art

### POSITION
- [ ] correct category attachment point identified
- [ ] cosmetic will be generated directly at that point
- [ ] cosmetic will not be centered in the cell

### SCALE
- [ ] size is based on MAIN HERO relationship
- [ ] cosmetic will not be enlarged to fill white space
- [ ] size will not be normalized against other rows

### SHEET
- [ ] 1920×2560
- [ ] 4×4 logical layout
- [ ] 480×640 coordinate system per cell
- [ ] no gutters/grid/borders/labels/guides
- [ ] unused rows pure white

If any mandatory item cannot be satisfied, stop before generation.

---

## 9. Generation Pass

The generation pass outputs:

- pure white background
- faint neutral registration characters in populated spatial cells
- full-opacity cosmetics
- correct approved art style
- correct position
- correct scale

Do NOT ask the image generator to remove MAIN HERO during this same pass.

Testing established that simultaneous character removal can cause the model to recenter/enlarge the cosmetics.

---

## 10. Selection and Cleanup

After selecting preferred variations:

1. Preserve cosmetic artwork exactly.
2. Remove the faint registration character in a separate cleanup operation.
3. Cleanup must not redesign, regenerate, move, resize, recolor, or recompose the cosmetic.
4. Final cleaned asset contains only the cosmetic on pure white.

Use `REGISTRATION_CLEANUP.md` for cleanup guidance.

---

## 11. Reference Hierarchy

For cross-session use:

1. this current MD
2. `STYLE_LOCK_APPROVED_ART.png`
3. relevant category reference sheet
4. relevant placement reference sheet
5. individual approved PNG references
6. canonical SVG originals when direct SVG inspection is available

SVG files remain the canonical vector originals.

Direct SVG visual inspection is NOT required when the corresponding approved PNG render has been successfully reviewed.

Do not stop merely because a web reader cannot render `image/svg+xml`.

---

## 12. GitHub Structure

- `DONT_DIE_COSMETIC_ART_SPEC.md` — canonical specification
- `PRODUCTION_WORKFLOW.md` — concise workflow
- `REGISTRATION_CLEANUP.md` — cleanup guidance
- `EXACT_TEMPLATE_EDIT_STARTER.txt` — standard new-session starter
- `templates/` — canonical vector character/hand geometry
- `reference-pack/svg/` — vector reference copies
- `reference-pack/png/` — web-readable raster references
- `reference-sheets/STYLE_LOCK_APPROVED_ART.png` — mandatory style authority
- `reference-sheets/SPATIAL_TEMPLATE_MAIN_HERO_4X4_NEUTRAL_GRAY.png` — preferred spatial base
- `reference-sheets/*_REFERENCE.png` — category reference sheets
- `reference-sheets/*_PLACEMENT_REFERENCE.png` — category placement references
- `approved-art/` — complete approved SVG cosmetic library

---

## 1. Authority and Reference Hierarchy

Use the following order of authority:

1. **The user's explicit cosmetic prompt**
2. **This master specification**
3. **MAIN HERO.svg and Character Master Template.svg**
4. **Approved in-game cosmetic SVG references**
5. General artistic judgment

If an explicit prompt intentionally conflicts with this document, the prompt overrides the master style. **Before generating, resolve any meaningful ambiguity or conflict with the user.**

All supplied approved cosmetics are already production-approved and in the game. They define the visual language; do not "improve" them into a different style.

---

## 2. Canonical Coordinate System

Every approved source SVG uses:

- **ViewBox:** `0 0 480 640`
- **Logical character artboard:** `480 × 640`
- **Orientation:** straight-on
- **MAIN HERO.svg** defines the canonical character position and proportions.

Every exploration-sheet cell represents one complete invisible MAIN HERO artboard.

### Critical positioning rule

**Never compose the cosmetic for the visual center of its cell. Compose it for the invisible MAIN HERO occupying that cell.**

Examples:

- Glasses sit at the face coordinates even though most of the cell remains empty.
- A mustache sits at the mouth coordinates.
- A hat sits at the canonical head location.
- A right-arm weapon begins at the canonical right-hand grip.
- A left-arm item begins at the canonical left-hand grip.
- Armor follows the canonical body silhouette.

Do not enlarge, recenter, or reposition an item merely to make the exploration sheet look more balanced.

---

## 3. Exploration Sheet Format

### Default sheet

- **Canvas:** `1920 × 2560 px`
- **Grid:** 4 columns × 4 rows
- **Cell:** exactly `480 × 640 px`
- **Gutters:** none
- **Visible grid:** none
- **Background:** pure white `#FFFFFF`
- **Separators / labels / numbers:** none

Logical cell coordinates:

| Cell | X Range | Y Range |
|---|---:|---:|
| Row 1, Col 1 | 0–480 | 0–640 |
| Row 1, Col 2 | 480–960 | 0–640 |
| Row 1, Col 3 | 960–1440 | 0–640 |
| Row 1, Col 4 | 1440–1920 | 0–640 |
| Row 2 | same X ranges | 640–1280 |
| Row 3 | same X ranges | 1280–1920 |
| Row 4 | same X ranges | 1920–2560 |

Each row is one user-supplied design brief.

### Row behavior

The user may supply up to four different cosmetic briefs in one generation.

Example:

- Row 1: Flaming scythe
- Row 2: Pirate cutlass
- Row 3: Whip
- Row 4: Garden rake

For **each row**, create **four moderately different interpretations of that exact brief**.

Thus:

- 4 prompts × 4 variations = 16 designs maximum.
- If only 2 prompts are supplied, Rows 3 and 4 remain **completely blank pure white**.
- Do not fill unused rows with extra concepts.

### Variation strength

Variations should be **moderately different executions**, not tiny recolors and not fundamentally different concepts.

Allowed variation can include:

- silhouette refinements
- proportions
- decorative shape placement
- modest color variation
- grip/guard/blade treatment
- shape language consistent with the prompt

Do not change the identity of the requested cosmetic merely to make the four options more different.

---

## 4. Output Scaling

The logical output is always based on the `1920 × 2560` sheet and `480 × 640` cells.

If the image generator produces a different physical raster resolution:

1. Treat the generated sheet as a proportional representation of `1920 × 2560`.
2. Scale the entire completed sheet proportionally afterward.
3. Never independently resize cells or cosmetics.
4. Preserve the relationship between stroke width, character coordinates, and item size.

---

## 5. Core Art Style

### General

- 2D vector-style artwork
- Straight-on perspective
- Large, readable shapes
- Flat colors
- Minimal detail
- Cartoon/game-icon visual language
- Clean silhouette
- Isolated artwork on white
- No cast shadows

### Color

- Default maximum: approximately **6–10 colors per design**
- Existing Don't Die colors should be reused when appropriate.
- New colors and neighboring hues are allowed.
- Current game palette is a reference palette, **not a restriction**.
- Flat regions must remain easy to select and recolor in Adobe Illustrator.
- **No gradients unless explicitly requested.**
- **No texture/noise unless explicitly requested.**
- Highlights and shadows may exist as separate flat-color shapes but should be sparse.

### Background

Always:

- `#FFFFFF`
- completely flat
- no off-white
- no texture
- no shadow
- no glow bleeding into the white
- no feathering

There must be a crisp boundary between the artwork and the white background for clean Image Trace results.

---

## 6. Stroke System

### Primary cosmetic stroke

Approved production references most commonly use a **5 px primary outer stroke** at the canonical `480 × 640` scale.

Use:

- **Outer stroke:** `5 px`
- **Color:** true black `#000000`
- **Line caps:** round
- **Line joins:** round

### Absolute stroke rule

Stroke width is **absolute across cosmetics**, not proportional to the size of the object.

Example:

- A tiny cigarette may look heavily outlined because its stroke is still 5 px.
- A giant sickle may appear relatively lightly outlined because its stroke is also 5 px.
- When placed beside each other, their outer strokes should visually match.

**Never reduce the outer stroke simply because an object is small.**

### Interior lines

- Use sparingly.
- Avoid unnecessary internal contouring.
- Interior lines may be thinner than 5 px when genuinely needed.
- Approximate acceptable secondary range: **3–4 px**, based on approved references.
- Prefer flat color boundaries over extra black linework.
- Keep the overall design non-detailed.

### Exceptions to full black outlines

Some soft/non-solid effects do not require a complete black perimeter, including:

- flame
- smoke
- clouds
- vapor
- similar amorphous effects

Use existing approved art as the authority for how these exceptions are handled.

---

## 7. Bounding and Cropping Rules

- Default: every cosmetic must fit inside its own `480 × 640` cell.
- Items may approach or touch one cell edge if the design requires it.
- Do not clip artwork.
- Avoid a design touching multiple cell boundaries.
- Never allow artwork to spill into a neighboring cell.
- If the correct in-game scale genuinely cannot fit, flag the issue before generation rather than silently shrinking the asset unnaturally.
- The user may explicitly override the normal bounding rule.

---

## 7A. Mandatory Spatial-Template Generation Procedure

Correct character-relative **position and scale take priority over attractive sheet composition**.

Image generators tend to center and enlarge isolated objects inside blank cells. That behavior is explicitly incorrect for this production workflow.

### Required procedure — validated two-stage workflow

For every exploration sheet:

1. Use `reference-sheets/SPATIAL_TEMPLATE_MAIN_HERO_4X4_NEUTRAL_GRAY.png` as the **actual image-editing base**. Do not recreate it from scratch.
2. Treat it as sixteen identical MAIN HERO characters at **exactly 100% canonical scale**, one character per 480×640 cell.
3. The existing MAIN HERO registration layer must remain visibly present at approximately **5–8% opacity during the image-editing pass**, with its original pixels/geometry preserved.
4. Design each cosmetic **directly on top of the appropriate location on that unchanged character** at its FINAL production position and FINAL production size.
5. Do not move, scale, enlarge, normalize, or recenter the cosmetic after fitting it to the character.
6. The generation pass should output the full-opacity cosmetics **with the faint MAIN HERO still visible**.
7. Removing the MAIN HERO is a **separate post-generation cleanup operation**. Do not ask image generation to remove the character while simultaneously creating/redesigning the cosmetics.
8. During cleanup, preserve the cosmetic pixels/shapes, position, scale, silhouette, and colors. Template removal must not invoke generative redesign, repositioning, rescaling, or recomposition.
9. Final cleaned production output contains only the cosmetics on pure white.

This two-stage method is mandatory because testing showed that asking the generator to imagine an invisible character or remove the character during the generation pass can cause the model to recenter and enlarge the cosmetics.

### Empty-space rule

**Large amounts of empty white space are intentional and mandatory.**

A cosmetic should occupy only the amount of the 480×640 cell that it would occupy when worn/held by MAIN HERO.

Examples:

- A normal hat occupies the head region near the top of the cell; it must not be vertically centered in the cell.
- Small glasses remain small around the eye coordinates.
- A mustache remains small around the mouth coordinates.
- A small handheld object remains small at its canonical grip.
- A large weapon may occupy much more of the cell because its true character-relative size is larger.

### Forbidden normalization

Never:

- center each cosmetic inside its cell
- enlarge cosmetics to fill available white space
- make all four rows approximately equal in visual size
- make all four variations occupy similar bounding boxes merely for presentation
- shift objects away from their canonical body location to improve balance

**If a sheet looks visually unbalanced because the production assets occupy different amounts of space, that is acceptable and often correct.**

### Spatial compliance test

Immediately before generation, mentally overlay MAIN HERO at 100% scale in every populated cell and verify:

- Would the hat actually sit on the head?
- Would the right-arm item actually meet the right-hand grip?
- Would the left-arm item actually meet the left-hand grip?
- Would the accessory actually align to its specified body location?
- Does the cosmetic have the same approximate physical scale relative to MAIN HERO as intended?

If the answer is no, correct the layout before generating.


## 8. Category Rules

Only cosmetics from the **same category** should be generated on one 4×4 sheet.

The user will identify the category before generation.

### 8.1 Hats

Canonical references include helmets, crowns, hoods, hats, masks, halos, and related head cosmetics.

Rules:

- Position relative to the exact MAIN HERO head.
- Preserve canonical head attachment/baseline.
- Straight-on.
- The attachment point is fixed; silhouette above/around the head is flexible.
- A large hat may extend substantially above or beside the head if it remains inside the cell.
- Do not center the hat in the 480×640 cell.
- **A normal hat should visibly occupy the canonical head region near the top of the 480×640 cell, leaving the majority of the cell white.**
- Fit the hat while MAIN HERO is present at 100% scale, then hide MAIN HERO without moving or resizing the hat.
- Follow approved references for when the cosmetic covers the face/head versus sitting above it.
- Keep the 5 px primary cosmetic stroke.

### 8.2 Right-Arm Items

Examples include swords, sickles, spears, cannons, rods, flamethrowers, maces, and hybrid weapons.

Rules:

- Use the exact canonical **right-hand grip position**.
- Grip position is sacred.
- Orientation at the hand should align with approved right-arm references.
- Everything extending outward from the grip may vary according to the design.
- Generate the **object only**.
- Do **not** include the character hand.
- Do **not** leave a fake transparent/empty grip cutout.
- The user will create/color/layer the hand separately where needed.
- Scale is determined by how the object would actually sit on MAIN HERO, not by filling the cell.

### 8.3 Left-Arm Items

Examples include shields, bottles, dice, blades, small handheld items, and unusual props.

Rules:

- Use the exact canonical **left-hand grip/attachment position**.
- Grip position is sacred.
- Generate the **object only**.
- Do not include the hand.
- Do not create an empty grip area.
- Preserve the distinction between left-arm and right-arm geometry.
- Small items should remain small if that is their correct size on the character.
- Do not enlarge an item just to occupy more of the cell.

### 8.4 Armor / Outfits

Armor is tied directly to the canonical MAIN HERO body.

#### Pass 1 — Armor exploration

- Use the exact MAIN HERO pose and body silhouette.
- Preserve body proportions.
- Do not redesign the pose.
- Create armor/clothing only where the cosmetic replaces or covers the body.
- Head, legs, and unrelated body areas remain absent unless the established asset structure requires otherwise.
- Decorative armor elements may extend modestly outside the base body silhouette if appropriate.
- Include the hands during the first armor exploration so the complete outfit reads correctly.
- Hands must remain the canonical size and position.

#### Pass 2 — Hands-only layer

After the armor direction is selected/approved, create the hands as a separate layer/output.

Hand rules:

- Use **Character Master Template.svg** as the exact geometry authority.
- Preserve hand size and position.
- Preserve layering conventions.
- **Hand stroke:** `4.38 px`, not the normal 5 px cosmetic stroke.
- Round caps and joins.
- Recolor skin/glove/hand areas as appropriate to the approved outfit.
- The left hand includes an intentional section of fingers without outline because that region layers directly onto existing artwork beneath it.
- Do not "repair" that missing outline.

Armor is therefore a **two-pass workflow**:
1. Armor + hands exploration
2. Selected design → hands-only production layer

### 8.5 Accessories

Accessories may occur anywhere on the body.

Examples include:

- glasses
- mustaches
- eye patches
- badges
- face pieces
- chest pieces
- other small attachments

Rules:

- User should state intended body location.
- Infer obvious placement when safe.
- Ask before generation if placement is ambiguous.
- Position according to the invisible MAIN HERO, not the center of the cell.
- Preserve true relative scale.
- Accessories may have significant empty white space around them because their body position is the priority.

---

## 9. Character Underlay Method

For design reasoning, treat MAIN HERO as a temporary invisible alignment template beneath each cell.

This underlay is used to determine:

- head location
- face location
- body outline
- right-hand grip
- left-hand grip
- armor coverage
- accessory placement
- true relative scale

### Generation-pass vs final-cleaned-output rule

During the **generation pass**, the exact MAIN HERO registration template remains visible at approximately **5–8% opacity**. This is intentional and required for reliable spatial registration.

During the **post-generation cleanup pass**, remove the faint MAIN HERO without regenerating, moving, scaling, or redesigning the cosmetics.

The **final cleaned production sheet** must contain zero visible trace of:

- MAIN HERO registration layer
- grid
- cell borders
- guides
- registration marks
- bounding boxes
- crosshairs

Exception: armor may contain body/hand artwork that is itself part of the requested cosmetic workflow.

---

## 10. Prompt Intake Workflow

Before generating:

1. Identify the category supplied by the user.
2. Confirm that every populated row belongs to that category.
3. Parse each row as its own independent cosmetic brief.
4. Check for conflicts with:
   - canonical position
   - scale
   - bounding box
   - stroke/style rules
   - accessory placement
   - special layering
5. If the prompt is materially unclear or intentionally conflicts with the master spec, ask a focused question before generation.
6. Otherwise generate directly.

### Important

Do not ask unnecessary questions when the prompt is already clear.

The user may give extensive direction for each row. Preserve that direction. Do not replace a very specific requested design with unrelated concept exploration.

---

## 11. Four-Variation Logic

For each populated row:

- Create four design variations.
- Keep requested concept intact.
- Keep canonical attachment geometry intact.
- Explore execution rather than changing the object identity.
- Colors may vary because recoloring in Illustrator is straightforward.
- Shape variation is generally more valuable than mere color variation.
- Do not intentionally carry Row 1's design language into Row 2 unless the user says the cosmetics are a coordinated set.

---

## 12. Prohibited Defaults

Unless explicitly requested, do **not** use:

- gradients
- raster textures
- noise
- grain
- painterly rendering
- photorealism
- 3D rendering
- perspective tilt
- cast shadows
- glow outside the asset
- feathering
- blur
- tiny ornamental detail
- inconsistent outline thickness
- sharp/mitered outer joins
- visual cell borders
- labels
- numbers
- presentation-driven centering
- redesigned character anatomy

---

## 13. Approved SVG Findings

Quantitative inspection of the supplied production library:

- **62 SVG files inspected**
- **All 62:** `viewBox="0 0 480 640"`
- Dominant primary production stroke: **5 px**
- Explicit approved files commonly use **round line caps**
- Explicit approved files commonly use **round line joins**
- Character Master Template hand stroke: **4.38 px**
- Approved files contain some secondary/detail stroke values around 3–5 px and occasional special-case heavier strokes.
- Existing art uses flat color regions and a broad game palette rather than a tiny restricted master palette.

Therefore:

- `5 px` is the default cosmetic outer-stroke target.
- `4.38 px` is reserved for canonical armor-hand geometry.
- Exact approved reference art overrides statistical averages where a special construction is clearly intentional.

---

## 14. Adobe Illustrator — Recommended Image Trace

The generated sheet is raster exploration artwork intended to become editable vector shapes.

### Recommended starting preset

Open **Window → Image Trace** and use:

- **Mode:** Color
- **Palette:** Limited
- **Colors:** `10–16`
- **Paths:** approximately `90%`
- **Corners:** approximately `70%`
- **Noise:** `1 px`
- **Method:** Abutting
- **Create:** Fills
- **Strokes:** Off
- **Snap Curves to Lines:** Off
- **Ignore White:** On

Then click **Expand**.

### Why Strokes should be OFF

The black outlines should generally be traced as **filled black vector shapes**, rather than asking Illustrator to infer them as actual Illustrator stroke objects.

This better preserves:

- rounded contour geometry
- apparent stroke width
- irregular cartoon shapes
- transitions between outer outlines and interior shapes

It also avoids variable-width or blobbed reconstructed strokes.

### If tracing becomes blobby

Adjust in this order:

1. Keep **Noise at 1 px**.
2. Reduce **Paths** slightly from 90 toward 85.
3. Reduce **Corners** if small angular artifacts appear.
4. Increase the Colors value if two intentionally separate flat fills are being merged.
5. Do not add blur to the raster before tracing.
6. Do not use antialiased shadows or glow in the generated source.

After Expand:

- Ungroup as needed.
- Use **Select → Same → Fill Color** or Magic Wand to select color regions.
- Recolor flat fills.
- Remove any accidental tiny shapes introduced by tracing.
- Verify black silhouette edges remain smooth.

Settings are a production starting point, not a prohibition against small adjustments for an individual sheet.

---

---

## 14. Final Rule

**Do not trade art-style compliance for positioning, and do not trade positioning for attractive composition.**

The target is an asset that looks like existing Don't Die production art and already exists at the correct character-relative coordinates and scale.


## 15. v6.1 Fixed 16-Slot Geometry Clarification

The exploration sheet must always be interpreted as **16 fixed slots**, not four presentation panels.

### Slot map

There are exactly 16 logical slots arranged as:

- Slots 1–4 = logical Row 1
- Slots 5–8 = logical Row 2
- Slots 9–12 = logical Row 3
- Slots 13–16 = logical Row 4

Each slot is exactly 480×640 px.

The word "ROW" is a logical grouping instruction only. It must NEVER appear visually in the output.

### For every populated logical row

All four slots in that row must contain four separate moderately different interpretations of the same design brief.

Example:

- Row 1 Banana Peel
  - Slot 1 = Banana Peel variation A
  - Slot 2 = Banana Peel variation B
  - Slot 3 = Banana Peel variation C
  - Slot 4 = Banana Peel variation D

### Blank behavior

If a logical row is BLANK:

- every slot in that row must be completely pure white
- do not show MAIN HERO
- do not show a registration character
- do not show placeholder art
- do not show labels
- do not show guides
- do not show borders
- do not show anything at all

Blank means visually empty.

### Forbidden layout interpretations

Never produce:
- a 2×2 quadrant layout
- four labeled panels
- visible "ROW 1", "ROW 2", etc.
- one design per row
- one design per quadrant
- any layout where a populated row contains fewer than four distinct cosmetic variations

The required structure is always four columns across and four logical rows down.


## 16. v6.2 HAT Coordinate-Anchor Workflow

For HAT generation, do **not** use a visible full MAIN HERO character as the generation registration layer.

Testing showed that a visible character encourages the image model to redraw/reinterpret the character and can also pull the output toward the wrong illustration style.

Use a minimal coordinate-only anchor instead:

- Full-sheet hat anchor: `reference-sheets/HAT_ANCHOR_TEMPLATE_4X4.png`
- Row-1-only test anchor: `reference-sheets/HAT_ANCHOR_TEMPLATE_ROW1_ONLY.png`

These templates contain only a faint neutral head-attachment arc/tick at the canonical hat location. They contain no face, hair, body, clothing, weapons, or character artwork.

### Hat generation rule

1. Use the appropriate HAT anchor template as the actual composition base.
2. Treat each faint anchor as the canonical head attachment location.
3. Build the hat around that anchor at the character-relative size established by approved HAT references.
4. Do not center the hat within the 480×640 slot.
5. Do not enlarge the hat to fill white space.
6. Do not generate any character, face, hair, head, body, clothing, hands, weapons, or other registration artwork.
7. The only generated full-opacity content is the cosmetic itself.
8. Blank slots remain completely pure white and contain no anchors in the source template used for that test.

### Style remains higher priority

The coordinate anchor controls **position only**. It must never be interpreted as style reference.

Style comes exclusively from:
- `STYLE_LOCK_APPROVED_ART.png`
- `HATS_REFERENCE.png`
- relevant individual approved HAT PNGs

The output must still use:
- flat hard-edged fills
- 5 px true-black outer stroke
- round joins/caps
- minimal detail
- no gradients
- no soft shading
- no glossy/painterly modeling

