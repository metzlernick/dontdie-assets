# Don't Die Cosmetic Artwork — Repeatable Production Workflow

## Purpose

General repeatable workflow for Don't Die cosmetic art.

**LEFT ARM override:** `LEFT_ARM_ZERO_CONTACT_WORKFLOW.md` plus `LEFT_ARM_4X4_PRODUCTION_CONTROLLER.md` are the category-specific authority.

**ARMOR / OUTFIT override:** `ARMOR_OUTFIT_PRODUCTION_WORKFLOW.md` is the category-specific authority. V44 Stage A + Stage B are validated and locked.

## 1. Source of truth

Before every generation freshly review current canonical sources: master spec, MAIN HERO, Character Master Template, relevant reference-pack files, relevant approved-art category, and category-specific workflow/controller.

For LEFT ARM, also use:

- `reference-sheets/LEFT_ARM_FINISHED_COSMETIC_EXEMPLAR_REFERENCE_4X4.png`
- `LEFT_ARM_PRODUCTION_PROMPT_TEMPLATE.txt`

For ARMOR / OUTFITS, also use:

- `ARMOR_OUTFIT_PRODUCTION_WORKFLOW.md`
- canonical hero geometry controller/substrate
- canonical hand reference

Do not feed old generated armor calibration sheets into normal Stage A production; they can bias anatomy, proportions, hand count, and pose.

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

Conflict examples include requests to change or bypass:

- generation scale / visual mass
- exemplar authority
- hero placement
- zero-contact architecture
- sheet/cell geometry
- detail hierarchy
- generated hand/grip behavior
- hidden geometry / reconstruction workflow
- presentation enlargement during generation

Also treat comparison-scale language such as `same size as`, `similar scale to`, or `make it large like` as a conflict if it would override canonical generation scale.

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

Do not add object-specific rules to the invariant section. Do not rewrite scale behavior for one row. Do not create a special-case controller.

Before delivering the prompt, verify that the invariant body still matches the canonical template.

If the invariant section genuinely needs modification, stop normal production and handle that as a separate calibration/change-control task.

### LEFT ARM acceptance

PASS requires exact row identities, four useful variations, required features, visual mass approximately at or below the finished exemplar, detail appropriate to tiny display, screen-left zero-contact placement, complete geometry, usable broad pose, bold outer stroke, and no reconstruction requirement.

FAIL if a row brief caused a controller exception or if a reference asset overrode generation scale.

Normal production briefs contain only current requested items. Never inject calibration history or old failures.

## 4. RIGHT ARM

Use current validated RIGHT ARM approach and approved references. Optimize body-relative scale, broad orientation, continuous usable grip geometry, and low-detail construction.

## 5. HATS

Use current HAT registration/isolation approach and canonical references. Prioritize head-relative scale, facing/orientation, attachment position, silhouette, and stroke language.

## 6. OUTFITS / ARMOR — V44 validated

Use `ARMOR_OUTFIT_PRODUCTION_WORKFLOW.md`.

Locked architecture:

**Stage A registered design on canonical hero → Stage B faithful isolation → optional Stage B.5 cape operation → Illustrator.**

Stage A owns design, near-canonical body/arm registration, four-digit hand treatment, and requested cape semantics. Stage B removes the hero while preserving the approved outfit, both hands, pose, proportions, scale, X/Y, and existing cape exactly.

Do not use old generated armor calibration sheets as visual inputs during normal Stage A production. The canonical geometry controller plus current brief are the primary visual/semantic authorities.

Do not ask Stage A or Stage B to solve universal cape removal. Cape KEEP / REMOVE / RESTYLE is a modular downstream Stage B.5 operation.

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

## 10. Core principle

Generate complete clean production geometry as early as the category allows and avoid downstream reconstruction. For LEFT ARM specifically: **finished-exemplar scale first, simplify second, identity third, pose/design fourth — with a mandatory conflict gate and immutable production template.**

For ARMOR / OUTFITS: **canonical registration + spectacular four-digit hands first; design second; faithful Stage B isolation third; cape manipulation downstream.**
