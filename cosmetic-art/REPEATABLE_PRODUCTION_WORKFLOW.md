# Don't Die Cosmetic Artwork — Repeatable Production Workflow

## Purpose

General repeatable workflow for Don't Die cosmetic art.

**LEFT ARM override:** `LEFT_ARM_ZERO_CONTACT_WORKFLOW.md` plus `LEFT_ARM_4X4_PRODUCTION_CONTROLLER.md` are the category-specific authority.

**ARMOR / OUTFIT override:** `ARMOR_OUTFIT_PRODUCTION_WORKFLOW.md` plus `ARMOR_STAGE_B_DETERMINISTIC_REGISTRATION.md` are the category-specific authority. The armor pipeline is validated, complete, and locked.

## 1. Source of truth

Before every generation freshly review current canonical sources: master spec, MAIN HERO, Character Master Template, relevant reference-pack files, relevant approved-art category, and category-specific workflow/controller.

For LEFT ARM, also use:

- `reference-sheets/LEFT_ARM_FINISHED_COSMETIC_EXEMPLAR_REFERENCE_4X4.png`
- `LEFT_ARM_PRODUCTION_PROMPT_TEMPLATE.txt`

For ARMOR / OUTFITS, also use:

- `ARMOR_OUTFIT_PRODUCTION_WORKFLOW.md`
- `ARMOR_STAGE_B_DETERMINISTIC_REGISTRATION.md`
- canonical-derived hero geometry controller/substrate
- canonical hand reference
- canonical viewer-left arm-chain reference

Do not feed old generated armor calibration sheets into normal Stage A production as geometry authority. If the user explicitly requests reuse of an already-approved outfit concept, it may appear only as a clearly labeled DESIGN-ONLY reference.

## 2. General art requirements

- flat 2D vector-style construction
- true-black primary outer outline, approximately 5 px at canonical scale
- large readable forms appropriate to final display size
- low detail
- clean silhouette
- hard-edged flat color regions
- pure white background
- no cast shadow on cosmetic
- no texture/noise
- no presentation enlargement to fill space
- Image-Trace friendly

## 3. LEFT ARM — validated one-pass 4×4 architecture

Generate up to four unrelated current briefs in one pass:

- 2400×2560
- 4×4
- 600×640 logical cells
- one brief per populated row
- four variations per populated row
- hero context right
- complete cosmetic left
- zero contact
- no generated grip or hidden geometry
- no AI isolation/reconstruction

### LEFT ARM visual controller

The active scale controller is a tiny neutral outlined finished-cosmetic exemplar, not an abstract marker.

The requested cosmetic should read like a replacement finished asset at approximately the same or smaller total visual mass.

The exemplar communicates production scale, finished-art status, bold outline behavior, low-detail construction, and relationship to MAIN HERO.

Do not reinterpret it as merely a positional anchor.

### LEFT ARM production priority

1. **Finished-exemplar scale/location**
2. **Simplify detail to survive that scale**
3. **Exact identity**
4. **Pose/design/variation**

Slightly undersized is preferred. When uncertain, choose smaller.

Small size is a forcing function for simplicity. Never enlarge an object so optional detail remains visible. Remove/simplify the detail instead.

Generic object-shape behavior:

- compact/simple → at or below exemplar visual mass
- long/thin/hanging → extra length allowed only with narrow, low total visual mass
- creatures/character-like → strong miniature bias and extremely simple anatomy/face
- bottles/containers/multi-part handheld → strong miniature bias and minimal secondary construction/detail
- broad → wider silhouette allowed while remaining tiny relative to hero

Real-world size is irrelevant to production scale.

### LEFT ARM mandatory conflict gate

Before constructing the production prompt, compare the user's row descriptions against the locked LEFT ARM invariants.

If a conflict is detected:

1. stop before creating files
2. state the conflicting instruction and likely failure mode
3. provide a safe rewording
4. wait for a non-conflicting brief

Do not silently reinterpret or create a one-off exception.

Approved references may control palette, thematic family, silhouette vocabulary, material treatment, and design language. They do not control LEFT ARM generation scale.

### LEFT ARM prompt-construction lock

Normal production uses `LEFT_ARM_PRODUCTION_PROMPT_TEMPLATE.txt` as the immutable invariant body.

Only `ROW_1`, `ROW_2`, `ROW_3`, and `ROW_4` brief content may change.

### LEFT ARM acceptance

PASS requires exact row identities, four useful variations, required features, visual mass approximately at or below the finished exemplar, detail appropriate to tiny display, screen-left zero-contact placement, complete geometry, usable broad pose, bold outer stroke, and no reconstruction requirement.

## 4. RIGHT ARM

Use current validated RIGHT ARM approach and approved references. Optimize body-relative scale, broad orientation, continuous usable grip geometry, and low-detail construction.

## 5. HATS

Use current HAT registration/isolation approach and canonical references. Prioritize head-relative scale, facing/orientation, attachment position, silhouette, and stroke language.

## 6. OUTFITS / ARMOR — completed locked pipeline

Use `ARMOR_OUTFIT_PRODUCTION_WORKFLOW.md` and `ARMOR_STAGE_B_DETERMINISTIC_REGISTRATION.md`.

Locked architecture:

**Initial briefs + cape manifest → Stage A → optional Stage A.5 → Stage B destructive isolation using the same manifest → deterministic per-cell registration restoration → Illustrator.**

### Stage A

Stage A owns outfit design, near-canonical body/arm registration, four-digit hand treatment, and the registered character/outfit structure.

Use canonical-derived geometry/hand/arm references plus the current brief. Pixel/8-bit/heavily geometric rows should be placed last when practical.

Default toward simple flat canonical-hero-like rendering: few colors, large hard-edged regions, bold black contour, restrained interior lines, minimal micro-detail.

A previous approved dressed-character sheet may be used only when the user explicitly asks to reuse that design, and then only as a clearly labeled DESIGN-ONLY reference. Preserve the approved concept while simplifying secondary detail rather than regenerating a new idea.

### Cape manifest — mandatory

Carry explicit per-row cape metadata from the initial brief:

- KEEP
- NONE
- RESTYLE

Cape ownership is semantic metadata, not a visual inference. The same manifest must accompany Stage B.

### Optional Stage A.5

Use only when Stage A visually disagrees with cape metadata or RESTYLE was requested. A.5 changes cape state only and must not become a general outfit redesign or registration pass.

### Stage B

Stage B is destructive erase-only isolation.

Remove:

- head/face/hair/ears/exposed non-outfit hero anatomy
- context
- headwear when body outfit only is requested
- **the entire wooden pedestal/platform in all cells**
- rear cape/context mass in rows marked NONE

Keep only visibly existing approved outfit artwork and intended structural features.

**Any surviving pedestal is a Stage-B failure.** Former pedestal regions remain white. Never reconstruct hidden boots, feet, peg legs, collars, necklines, sleeves, capes, wraps, or garments into newly exposed regions.

Treat cells independently. Do not borrow semantics across rows or columns.

Raw Stage-B scale/X/Y drift does not by itself fail isolation. Do not regenerate Stage B simply to chase registration drift.

### Deterministic registration

After isolation passes:

- Stage A / A.5 = coordinate and scale authority
- Stage B = artwork/isolation authority
- process each logical cell independently
- uniform scale + X/Y translation only
- no rotation, non-uniform stretch, warp, redraw, inpainting, or semantic change
- rebuild exactly 1920×2560 with exactly 480×640 cells
- do not trust raw downloaded Stage-B dimensions as canonical
- do not use whole-sheet resize as a substitute for per-cell restoration

The Leather / Shimmering / Pirate / 8-bit validation showed substantial cell-level Stage-B drift, confirming deterministic restoration is mandatory and prompt counter-bias is not scalable.

Do not use a post-isolation generative Stage B.5 cape operation or approximate flattened cape masks as the general solution.

## 7. ACCESSORIES

Use MAIN HERO for body-relative location and scale. Small accessories remain small despite empty canvas space.

## 8. Scale authority

Scale authority order:

1. validated category production reference/controller
2. especially similar approved cosmetics
3. category references
4. MAIN HERO proportions
5. prompt description

For LEFT ARM specifically, approved cosmetics below the controller may inform design but may not override the finished-exemplar generation scale.

Never enlarge because composition looks empty.

## 9. Complexity authority

Default toward fewer, larger forms. At tiny display scale, delete detail that cannot survive rather than enlarging the asset. Prioritize silhouette and essential identity cues over micro-decoration.

For ARMOR simplification passes, preserve the approved idea while deleting secondary rendering/detail before changing core identity.

## 10. Core principle

Generate complete clean production geometry as early as the category allows and avoid downstream reconstruction.

For LEFT ARM specifically: **finished-exemplar scale first, simplify second, identity third, pose/design fourth — with a mandatory conflict gate and immutable production template.**

For ARMOR / OUTFITS: **canonical geometry + explicit cape metadata → simple flat Stage A design → destructive no-reconstruction Stage B with total pedestal removal → deterministic per-cell registration → Illustrator.**