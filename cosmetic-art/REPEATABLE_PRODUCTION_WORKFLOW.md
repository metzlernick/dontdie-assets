# Don't Die Cosmetic Artwork — Repeatable Production Workflow v7.19

## Purpose

This document defines the repeatable workflow for generating large quantities of Don't Die cosmetic art.

The image generator is responsible for:
- design exploration
- Don't Die art style
- approximate body-relative scale
- approximate body-relative position
- approximate orientation
- usable object geometry

Adobe Illustrator is responsible for:
- exact production X/Y registration
- exact final scale and small rotation corrections
- exact canonical hand/finger occlusion
- exact grip alignment
- final cleanup and layering

**Do not require image generation to solve pixel-perfect hand registration.**

That distinction is intentional and permanent.

---

## 1. Source of Truth

Before every new generation, freshly review the current canonical sources in:

https://github.com/metzlernick/dontdie-assets/tree/main/cosmetic-art

At minimum:
- `DONT_DIE_COSMETIC_ART_SPEC.md`
- `templates/MAIN HERO.svg`
- `templates/Character Master Template.svg`
- relevant `reference-pack/` files
- relevant `approved-art/<category>/`
- especially similar approved cosmetics

Approved art defines style, relative scale, complexity, and category conventions.

---

## 2. Canonical Sheet

- Logical sheet: 1920×2560
- 4 columns × 4 rows
- Each cell: 480×640
- No gutters
- Pure white background
- Four variants per populated row
- No visible grid, labels, guides, anchors, proxies, or registration marks in final isolated artwork

For registration/exploration passes, use the full MAIN HERO registration sheet when that improves body-relative scale and placement.

---

## 3. Fundamental Production Split

### AI Stage A — Design + Approximate Registration

Use MAIN HERO as visual context.

Stage A must optimize for:
1. correct category
2. correct side/body region
3. correct approximate scale relative to MAIN HERO
4. correct approximate position
5. correct broad orientation
6. correct silhouette
7. correct style/detail level
8. sufficient geometry for later Illustrator registration

Stage A does **NOT** need:
- exact hand pixels
- exact finger placement
- exact grip X/Y
- exact final rotation
- exact final production occlusion

Generated hands/fingers are contextual and disposable.

### AI Stage B — Isolation

Remove:
- MAIN HERO
- hands
- body
- pedestal
- registration context

Retain:
- cosmetic design
- silhouette
- colors
- approximate scale
- approximate orientation
- complete usable geometry

Stage B should reconstruct/retain geometry that was hidden by a generated hand whenever practical.

### Illustrator Stage C — Production Registration

The human production pass:
- selects the chosen isolated cosmetic
- Image Traces / cleans it
- moves it to the exact canonical location
- applies small scale/rotation corrections
- layers the exact canonical hand over the object
- trims/adjusts hidden geometry as needed
- performs final production cleanup

**Stage C is the authority for exact grip registration.**

---

## 4. Held-Object Geometry Rule

For RIGHT ARM and LEFT ARM items, do not demand exact grip registration from image generation.

Instead, require a **registration-safe grip region**.

A registration-safe grip region means:
- enough continuous object geometry exists where the canonical hand will eventually cover it
- the grip/handle/neck/ring is long or broad enough to permit a modest Illustrator translation/rotation
- no hand-shaped hole is baked into the object
- no fake transparent grip cutout exists
- no design-critical detail is placed exactly where the hand must cover it
- the object remains visually coherent after a small registration adjustment

### Rigid held objects

Examples:
- sword
- spatula
- pan
- staff
- gun
- shield handle

Require:
- a clean continuous handle/grip segment
- enough extra usable length around the approximate grip area for Illustrator adjustment
- correct broad direction
- correct overall body-relative scale

Do NOT make the entire object longer merely to create grip tolerance.

### Hanging / flexible objects

Examples:
- money bag
- lantern
- pouch
- charm

Separate **grip geometry** from **gravity geometry**.

Require:
- a sufficiently long/usable attachment segment near the hand
- approximate intended grip angle where useful
- a natural bend/transition after the grip
- the main hanging body obeys gravity and hangs approximately vertical

The entire object must NOT be forced onto the grip angle.

Example — money bag:
- gathered fabric neck should provide extra usable neck material
- neck may angle approximately through the intended grip area
- below that, fabric bends
- main bag body hangs vertically
- no suspension rope unless explicitly requested

---

## 5. Hand Rule

The generator may redraw or slightly reposition a contextual hand during Stage A.

This is **not a production failure by itself**.

Do not judge Stage A by generated finger accuracy.

Judge whether the cosmetic:
- is on the correct side
- has sensible approximate registration
- has enough hidden/extra grip geometry
- can plausibly be moved a small amount underneath the canonical Illustrator hand

Reject only when the object geometry itself cannot be made compatible without substantial redesign.

---

## 6. Registration Tolerance

Stage A should intentionally leave modest adjustment tolerance.

The selected cosmetic should tolerate:
- a small X/Y move
- a small rotation
- a modest scale correction

without breaking its design.

This does NOT mean:
- oversized objects
- excessively long handles
- giant rings
- giant bag necks
- presentation-scale artwork

Tolerance must be local to the attachment/grip region.

---

## 7. Scale Authority

Scale comes from:
1. especially similar approved cosmetics
2. category references
3. MAIN HERO body proportions
4. prompt description

Never enlarge an object because:
- the cell looks empty
- the object is small
- a grip is difficult
- the model wants a more balanced composition

Small cosmetics should remain small.

For unusual objects, explicitly identify the closest approved scale reference before generation.

---

## 8. Complexity Authority

Default toward fewer, larger forms.

At canonical 480×640 scale:
- prioritize silhouette
- one strong focal detail is better than many small details
- avoid micro-engraving, tiny rivets, dense filigree, repeated decorative marks, texture-like linework

When matching an approved set:
- match palette/material/shape language
- do NOT automatically inherit every ornamental detail

If a requested object repeatedly becomes too detailed, specify a hard major-form ceiling.

---

## 9. Stage A Acceptance Checklist

PASS when:
- correct category
- correct viewer-side/body region
- approximately correct body-relative scale
- approximately correct position
- correct broad orientation
- readable Don't Die silhouette/style
- acceptable detail level
- usable registration-safe grip/attachment geometry
- object can be corrected with a modest Illustrator move/rotation/scale adjustment

DO NOT fail solely because:
- generated fingers changed
- hand pose changed slightly
- exact grip point is a few pixels off
- final occlusion is not production-perfect

FAIL when:
- wrong hand/side changes the object's basic geometry
- object is presentation-centered or badly oversized
- orientation is fundamentally wrong
- grip/attachment geometry is too short or malformed to register later
- hanging physics are wrong in the object itself
- object requires substantial redrawing rather than modest Illustrator adjustment
- style/detail level is materially wrong

---

## 10. Stage B Acceptance Checklist

PASS when the isolated object:
- preserves the approved design
- has no character/body/pedestal
- has continuous usable grip geometry
- has no hand-shaped hole
- retains enough attachment tolerance for Illustrator
- retains approximate Stage A scale/orientation
- remains on pure white
- is clean enough for Image Trace

---

## 11. Category Notes

### RIGHT ARM
Use full hero registration for approximate placement/scale.
Generate a registration-safe handle/grip.
Final exact right-hand registration happens in Illustrator.

### LEFT ARM
Use full hero registration for approximate placement/scale.
Do not fight the generator for exact canonical fingers.
Generate extra usable local attachment geometry.
Final exact viewer-left grip and canonical hand overlay happen in Illustrator.

### HATS
Continue using hero registration for head-relative scale/position when useful.
Exact final cleanup/isolation follows the established Stage A → Stage B workflow.

### OUTFITS / ARMOR
Body geometry matters more directly.
Use the canonical body template and existing armor-specific workflow.
Do not apply the relaxed held-object grip rule to body silhouette alignment.

### ACCESSORIES
Use MAIN HERO for body-relative position/scale.
Exact Illustrator registration may be used for small face/body accessories where a few pixels matter.

---

## 12. Core Principle

**Generation creates a production-ready design layer with enough geometric tolerance to register correctly. Illustrator creates the exact final registration.**

Do not spend repeated generations trying to force the image model to preserve exact hand/finger geometry that will be replaced during production anyway.
