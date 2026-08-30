# Don't Die Cosmetic Artwork — Master Production Specification

**Version:** 1.0  
**Purpose:** Canonical reference for generating new 2D vector-style cosmetic artwork for *Don't Die*.  
**Primary goal:** Produce consistent, Illustrator-friendly exploration sheets that align to the existing MAIN HERO coordinate system and require minimal cleanup or repositioning.

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

1. Use `reference-sheets/SPATIAL_TEMPLATE_MAIN_HERO_4X4_FAINT.png` as the **actual image-editing base**. Do not recreate it from scratch.
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

## 15. Canonical Repository Structure

Recommended repository organization:

```text
dontdie-assets/
└── cosmetic-art/
    ├── COSMETIC_ART_SPEC.md
    │
    ├── templates/
    │   ├── MAIN HERO.svg
    │   └── Character Master Template.svg
    │
    ├── reference-pack/
    │   ├── Bucket Hat.svg
    │   ├── Arena Helmet.svg
    │   ├── Wraithwrap.svg
    │   ├── Gold Sword.svg
    │   ├── IceSickle.svg
    │   ├── Volcannon.svg
    │   ├── Glints Shield.svg
    │   ├── Potion of Death.svg
    │   ├── Black Armor.svg
    │   ├── Toxic Armor.svg
    │   └── Meme Glass.svg
    │
    └── approved-art/
        ├── hats/
        ├── right-arm/
        ├── left-arm/
        ├── armor/
        └── accessories/
```

GitHub is the canonical archive. A new generation session should still be given the master specification plus the minimum reference pack whenever practical.

---

## 15A. Canonical GitHub Source

The persistent canonical source for this cosmetic artwork system is:

`https://github.com/metzlernick/dontdie-assets/tree/main/cosmetic-art`

Repository roles:

- `DONT_DIE_COSMETIC_ART_SPEC.md` — canonical production specification
- `templates/` — canonical vector character and hand geometry
- `reference-pack/svg/` — canonical vector copies of the minimum reference pack
- `reference-pack/png/` — exact 480×640 white-background raster renders for web/session inspection
- `reference-sheets/` — category contact sheets, placement sheets, and mandatory 4×4 spatial templates designed for visual inspection/composition
- `approved-art/` — complete approved in-game SVG cosmetic library

### Cross-session visual verification rule

**Do not require direct SVG rendering/inspection in order to begin generation.**

Some ChatGPT/web environments can retrieve SVG files but cannot visually inspect `image/svg+xml`. That limitation must not block the workflow when the corresponding PNG references are accessible.

Use this verification hierarchy:

1. Read this MD.
2. Visually inspect the appropriate PNG reference sheet(s).
3. Visually inspect `MASTER_CHARACTER_REFERENCE.png`.
4. For placement-sensitive categories, inspect the corresponding `*_PLACEMENT_REFERENCE.png`.
5. Use individual 480×640 PNGs from `reference-pack/png/` when a closer look is needed.
6. Treat the SVG files as the canonical vector originals, but **direct visual SVG inspection is optional** if the corresponding approved PNG render has been reviewed.

A session may truthfully proceed when the required MD and PNG visual references have been successfully reviewed, even if its web reader cannot render SVG.

### Direct raw PNG locations

These raw GitHub URLs are intended for cross-session visual access:

- Master character: `https://raw.githubusercontent.com/metzlernick/dontdie-assets/main/cosmetic-art/reference-sheets/MASTER_CHARACTER_REFERENCE.png`
- 4×4 spatial template: `https://raw.githubusercontent.com/metzlernick/dontdie-assets/main/cosmetic-art/reference-sheets/SPATIAL_TEMPLATE_MAIN_HERO_4X4.png`
- 4×4 faint spatial template: `https://raw.githubusercontent.com/metzlernick/dontdie-assets/main/cosmetic-art/reference-sheets/SPATIAL_TEMPLATE_MAIN_HERO_4X4_FAINT.png`
- Hats: `https://raw.githubusercontent.com/metzlernick/dontdie-assets/main/cosmetic-art/reference-sheets/HATS_REFERENCE.png`
- Hat placement: `https://raw.githubusercontent.com/metzlernick/dontdie-assets/main/cosmetic-art/reference-sheets/HATS_PLACEMENT_REFERENCE.png`
- Right arm: `https://raw.githubusercontent.com/metzlernick/dontdie-assets/main/cosmetic-art/reference-sheets/RIGHT_ARM_REFERENCE.png`
- Right-arm placement: `https://raw.githubusercontent.com/metzlernick/dontdie-assets/main/cosmetic-art/reference-sheets/RIGHT_ARM_PLACEMENT_REFERENCE.png`
- Left arm: `https://raw.githubusercontent.com/metzlernick/dontdie-assets/main/cosmetic-art/reference-sheets/LEFT_ARM_REFERENCE.png`
- Left-arm placement: `https://raw.githubusercontent.com/metzlernick/dontdie-assets/main/cosmetic-art/reference-sheets/LEFT_ARM_PLACEMENT_REFERENCE.png`
- Armor: `https://raw.githubusercontent.com/metzlernick/dontdie-assets/main/cosmetic-art/reference-sheets/ARMOR_REFERENCE.png`
- Accessories: `https://raw.githubusercontent.com/metzlernick/dontdie-assets/main/cosmetic-art/reference-sheets/ACCESSORIES_REFERENCE.png`
- Accessory placement: `https://raw.githubusercontent.com/metzlernick/dontdie-assets/main/cosmetic-art/reference-sheets/ACCESSORIES_PLACEMENT_REFERENCE.png`

If GitHub access itself fails, ask the user to provide the current MD and relevant reference sheet(s). Do not demand re-upload of the complete SVG library unless exact vector inspection is specifically required.

---

## 16. Minimum Reference Pack for New Sessions

Always provide:

### Geometry
1. `MAIN HERO.svg`
2. `Character Master Template.svg`

### Hats
3. `Bucket Hat.svg`
4. `Arena Helmet.svg`
5. `Wraithwrap.svg`

### Right arm
6. `Gold Sword.svg`
7. `IceSickle.svg`
8. `Volcannon.svg`

### Left arm
9. `Glints Shield.svg`
10. `Potion of Death.svg`

### Armor
11. `Black Armor.svg`
12. `Toxic Armor.svg`

### Accessories
13. `Meme Glass.svg` — especially when creating accessories

For a new asset that closely resembles an existing production cosmetic, also provide that specific approved SVG.

The complete approved-art library should remain in GitHub even when only the smaller pack is uploaded to an image-generation session.

---

## 17. Starting a New ChatGPT Session

In a new session, first provide the GitHub `cosmetic-art` URL. The session should read the MD and inspect the PNG reference sheets directly from GitHub.

Manual re-upload is a fallback, not the normal workflow.

If GitHub visual access fails, provide only:

1. `DONT_DIE_COSMETIC_ART_SPEC.md`
2. `MASTER_CHARACTER_REFERENCE.png`
3. The relevant category reference sheet
4. The relevant placement reference sheet, when applicable
5. Any individual PNG especially relevant to the new design

The complete SVG library does **not** need to be re-uploaded merely because the session cannot render SVG.

Then give instructions in this format:

```text
Use COSMETIC_ART_SPEC.md as the master production rules.

Category: RIGHT ARM

Row 1:
[Detailed design brief]

Row 2:
[Detailed design brief]

Row 3:
[Detailed design brief]

Row 4:
[Detailed design brief]
```

If fewer than four rows are needed:

```text
Row 3: BLANK
Row 4: BLANK
```

The blank rows must remain pure white.

---

## 18. Generation Checklist

Before generation, verify:

- [ ] Correct category
- [ ] Maximum four prompts
- [ ] One prompt per row
- [ ] Four variations per populated row
- [ ] Blank rows remain white
- [ ] 4×4 logical grid
- [ ] 480×640 logical cell
- [ ] 1920×2560 logical sheet
- [ ] No gutters
- [ ] No visible grid
- [ ] Pure white background
- [ ] MAIN HERO positioning used
- [ ] 4×4 MAIN HERO spatial template used during composition
- [ ] MAIN HERO held at exactly 100% canonical scale
- [ ] MAIN HERO registration layer visible at ~5–8% during generation
- [ ] Cosmetic was not recentered/enlarged after fitting to template
- [ ] Template removal reserved for separate non-generative cleanup
- [ ] Large intentional white space preserved
- [ ] Object not presentation-centered
- [ ] Correct left/right grip geometry
- [ ] Straight-on perspective
- [ ] Flat colors
- [ ] Approximately 6–10 colors per design
- [ ] No gradient unless requested
- [ ] No texture unless requested
- [ ] No cast shadow
- [ ] 5 px true-black outer stroke
- [ ] Round caps / joins
- [ ] Minimal interior linework
- [ ] No clipping
- [ ] No neighboring-cell spill
- [ ] Explicit user instructions override defaults

For armor additionally:

- [ ] Canonical body pose
- [ ] Hands included in exploration
- [ ] Selected armor receives separate hands-only pass
- [ ] Hands match Character Master Template
- [ ] Hands use 4.38 px stroke
- [ ] Intentional left-hand missing outline is preserved

---

## 19. Core Principle

**The cosmetic is not an icon floating in a 480×640 box. It is a production layer attached to an invisible 480×640 MAIN HERO.**

Position, relative scale, grip, silhouette, stroke consistency, and layering are more important than filling the canvas or creating a visually balanced exploration sheet.

**Validated production method:** generate against the visible 5–8% MAIN HERO registration layer first; remove that registration layer only afterward as a non-generative cleanup step.


## 20. Mandatory Image-Editing Base Workflow

Testing established that asking an image generator to merely *reference* the MAIN HERO spatial template can still cause the character itself to be regenerated or reinterpreted.

Therefore, for production positioning, the spatial template must be treated as the **actual image-editing base**, not as a visual suggestion.

### Required method

1. Open/use `reference-sheets/SPATIAL_TEMPLATE_MAIN_HERO_4X4_FAINT.png` as the actual input image.
2. Perform an **image edit/addition** on that exact image.
3. Add cosmetics onto the existing image without recreating the sheet from scratch.
4. Preserve every existing MAIN HERO registration pixel, position, pose, proportion, and scale.
5. Do **not** redraw, regenerate, reinterpret, restyle, replace, or alter MAIN HERO.
6. Cosmetics may visually cover/occlude parts of the faint template where correct, but they must not cause the underlying template to change.
7. Each cosmetic must be added at its FINAL production position and FINAL production size.
8. Do not recenter, enlarge, normalize, or rebalance cosmetics after placement.
9. Keep the faint MAIN HERO registration layer visible in the edited output.
10. Remove the registration layer only afterward in a separate non-generative cleanup stage.

### Critical distinction

Incorrect:
- "Create a new 4×4 image inspired by this template."
- "Use MAIN HERO as a reference."
- "Reproduce the character faintly and add cosmetics."

Correct:
- "Edit this exact spatial-template PNG."
- "Keep the existing pixels unchanged."
- "Add only the requested cosmetic artwork."

### Character integrity rule

If the character's:
- face
- hair
- outfit
- pose
- proportions
- position
- scale
- silhouette

changes between cells or rows, the generation is noncompliant.

The cosmetic may cover the character visually, but the character itself must remain the exact supplied registration image underneath.

### Category interaction

For hats/headwear:
- hats may cover hair/head areas
- headphones may overlap ears/hair
- masks may cover face areas

However, this must occur by **drawing the cosmetic over the unchanged template**, not by regenerating the character to accommodate the cosmetic.

For right-arm/left-arm items:
- items may overlap the hand/body visually
- underlying template geometry remains unchanged

For accessories:
- accessory overlays the specified body region
- underlying template remains unchanged

For armor:
- armor is the special category where body/hand appearance is intentionally part of the cosmetic workflow, but the canonical pose and proportions still remain fixed.

