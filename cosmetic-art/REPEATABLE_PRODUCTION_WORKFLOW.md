# Don't Die Cosmetic Artwork — Repeatable Production Workflow

## Purpose

General repeatable workflow for Don't Die cosmetic art.

**LEFT ARM override:** `LEFT_ARM_ZERO_CONTACT_WORKFLOW.md` plus `LEFT_ARM_4X4_PRODUCTION_CONTROLLER.md` are the category-specific authority. LEFT ARM V3 is validated, passing, locked, and closed for calibration.

**ARMOR / OUTFIT override:** `ARMOR_OUTFIT_PRODUCTION_WORKFLOW.md` plus `ARMOR_STAGE_B_DETERMINISTIC_REGISTRATION.md` are the category-specific authority. The armor pipeline is validated, complete, and locked.

**FACE ACCESSORY override:** `ACCESSORY_FACE_PRODUCTION_WORKFLOW.md` is the category/location-specific authority. The face-accessory pipeline is validated and locked.

## 1. Source of truth

Before every generation freshly review current canonical sources: master spec, MAIN HERO, Character Master Template, relevant reference-pack files, relevant approved-art category, and category-specific workflow/controller.

For LEFT ARM, also use:
- `reference-sheets/LEFT_ARM_FINISHED_COSMETIC_EXEMPLAR_REFERENCE_4X4_V3.png`
- `LEFT_ARM_PRODUCTION_PROMPT_TEMPLATE.txt`

For ARMOR / OUTFITS, also use:
- `ARMOR_OUTFIT_PRODUCTION_WORKFLOW.md`
- `ARMOR_STAGE_B_DETERMINISTIC_REGISTRATION.md`
- canonical-derived hero geometry controller/substrate
- canonical hand reference
- canonical viewer-left arm-chain reference

For FACE ACCESSORIES, also use:
- `ACCESSORY_FACE_PRODUCTION_WORKFLOW.md`
- faint literal canonical hero substrate (~6% opacity)
- literal face/location registration controller
- closest approved face-accessory scale/style precedent when relevant

Do not feed old generated calibration sheets into normal production as geometry authority. A previous approved concept is DESIGN_ONLY only when the user explicitly asks to reuse that design.

## 2. General art requirements

- flat 2D vector-style construction
- true-black primary outer outline, approximately 5 px at canonical scale
- low detail and clean silhouette
- hard-edged flat color regions
- pure white background
- no cosmetic cast shadow, texture/noise, or presentation enlargement to fill space
- Image-Trace friendly

## 3. LEFT ARM — validated locked V3 architecture

Logical production composition:
- 2400×2560 controller / 4×4 logical grid / 600×640 logical cells
- one brief per populated row; four variations per row
- visible hero/context screen-right
- complete cosmetic source art screen-left
- zero contact
- no generated grip or hidden geometry
- **no AI Stage B/isolation/reconstruction**
- final extraction, placement, rotation, optional modest enlargement, and canonical hand overlay occur in Illustrator

### LEFT ARM scale authority

Use `reference-sheets/LEFT_ARM_FINISHED_COSMETIC_EXEMPLAR_REFERENCE_4X4_V3.png` as the scale/location/contact authority.

The exemplar defines the validated **tiny LEFT ARM source-art scale class**, not a literal maximum bounding box. The current approved Regression A scale is valid. Broad or hanging items may vary modestly in footprint while remaining clearly tiny/body-relative. Do not inflate an object to normal standalone prop/icon scale because of semantic real-world size or empty composition.

The current approved baseline is:
1. golden ceremonial shield matching Gold Armor + Gold Sword with broad Mirror Shield vocabulary;
2. tan money bag with dollar sign and visibly left-leaning neck/top in all four variations;
3. silver spatula with black handle, head toward top-left; slots only when explicitly requested;
4. black hanging lantern with green flame.

### LEFT ARM brief preservation

Explicit direction, tilt, rotation, pose, visible surface, count, color, symbol, attachment, and relative-position instructions are hard brief constraints and must remain visible in all four variations unless the user explicitly allows variation.

### LEFT ARM acceptance

PASS requires correct row identities, four useful variations, hard brief constraints, validated tiny scale class, visible hero/context as expected, clean zero-contact separation, complete geometry, and no AI reconstruction requirement.

Generated export raster dimensions are **not** a failure by themselves when the logical 4×4 composition, body-relative placement, scale class, and zero-contact behavior remain correct. The exact 2400×2560 requirement applies to the canonical V3 input controller/logical composition.

Before changing anything, classify a miss as `SYSTEM FAIL` or `BRIEF FAIL`. A local pose/detail miss is a BRIEF FAIL and does not reopen the LEFT ARM architecture.

## 4. RIGHT ARM

Use the current validated RIGHT ARM approach and approved references. Optimize body-relative scale, broad orientation, continuous usable grip geometry, and low-detail construction. `RIGHT_ARM_PLACEMENT_REFERENCE.png` remains the spatial authority. Final exact canonical hand overlay/registration remains Illustrator work.

## 5. HATS

Use the current validated HAT registration/isolation approach and canonical references. Prioritize head-relative scale, facing/orientation, attachment position, silhouette, and stroke language. `HATS_PLACEMENT_REFERENCE.png` is the primary placement authority; `HAT_HEAD_ORIENTATION_REFERENCE.png` controls orientation when needed.

## 6. OUTFITS / ARMOR — completed locked pipeline

Use `ARMOR_OUTFIT_PRODUCTION_WORKFLOW.md` and `ARMOR_STAGE_B_DETERMINISTIC_REGISTRATION.md`.

Locked architecture:

**Initial briefs + cape manifest → Stage A → optional Stage A.5 → Stage B destructive isolation using the same manifest → deterministic per-cell registration restoration → Illustrator.**

### Stage A

Stage A owns outfit design, near-canonical body/arm registration, four-digit hand treatment, and registered character/outfit structure. Use canonical-derived geometry/hand/arm references plus the current brief. Default toward simple flat canonical-hero-like rendering.

A previous approved dressed-character sheet may be used only when the user explicitly requests reuse and then only as DESIGN_ONLY.

### Cape manifest

Carry explicit per-row cape metadata from the initial brief:
- KEEP
- NONE
- RESTYLE

The same manifest accompanies Stage B.

### Optional Stage A.5

Use only when Stage A visually disagrees with cape metadata or RESTYLE was requested. A.5 changes cape state only.

### Stage B

Stage B is destructive erase-only isolation. Remove head/face/hair/ears/exposed non-outfit hero anatomy, context, headwear when body outfit only is requested, the entire wooden pedestal/platform, and rear cape/context mass in rows marked NONE.

Keep only visibly existing approved outfit artwork and intended structural features. Never reconstruct hidden boots, feet, peg legs, collars, necklines, sleeves, capes, wraps, or garments into newly exposed regions. Treat cells independently.

Raw Stage-B scale/X/Y drift does not itself fail isolation.

### Deterministic registration

After isolation:
- Stage A/A.5 = coordinate and scale authority
- Stage B = artwork/isolation authority
- process cells independently
- uniform scale + X/Y translation only
- no rotation, non-uniform stretch, warp, redraw, inpainting, or semantic change
- rebuild exactly 1920×2560 with 480×640 cells
- do not trust raw Stage-B dimensions as canonical
- do not use whole-sheet resize instead of per-cell restoration

The Leather / Shimmering / Pirate / 8-bit validation established deterministic restoration as mandatory.

## 7. ACCESSORIES

Accessories are location-aware. Use MAIN HERO plus a literal controller for the accessory's actual body location. Small accessories remain small despite empty canvas.

### FACE ACCESSORIES — validated locked pipeline

Use `ACCESSORY_FACE_PRODUCTION_WORKFLOW.md`.

Locked architecture:

**Current briefs → Stage A on ~6% faint literal canonical hero substrate → deterministic faint-substrate extraction → Illustrator.**

There is no generative Stage B for face accessories. Stage A generates only the full-opacity accessory while the canonical hero remains a faint registration substrate. Use literal eye/mouth anchors and approved similar face art as scale/style evidence when needed.

After Stage A passes, isolate deterministically using the contrast separation between faint substrate and full-opacity accessory. Retained pixels come from approved Stage A; do not reconstruct hidden geometry or regenerate artwork.

Do not use full-color canonical-hero subtraction or generative face-accessory isolation.

Accessories elsewhere on the body are not automatically governed by face-specific extraction. Reuse or validate a literal location-specific controller for that location.

## 8. Scale authority

Scale authority order:
1. validated category production reference/controller
2. especially similar approved cosmetics
3. category references
4. MAIN HERO proportions
5. prompt description

Never enlarge solely because composition looks empty.

## 9. Complexity authority

Default toward fewer, larger forms. At tiny display scale, delete detail that cannot survive rather than enlarging the asset. Prioritize silhouette and essential identity cues over micro-decoration.

## 10. Failure classification / change control

For every category, classify an imperfect result before modifying reusable production infrastructure:

- **SYSTEM FAIL** — validated controller/reference/stage/scale/contact/registration behavior is structurally wrong.
- **BRIEF FAIL** — system behavior passes but an explicit row-specific requirement is missed.

A BRIEF FAIL does not justify architecture redesign. Compare every category only to its own validated control; do not transfer LEFT ARM behavior to HATS, RIGHT ARM, ARMOR/OUTFITS, or ACCESSORIES.
