# Don't Die Cosmetic Artwork — Repeatable Production Workflow

## Purpose

General repeatable workflow for Don't Die cosmetic art.

**LEFT ARM override:** `LEFT_ARM_ZERO_CONTACT_WORKFLOW.md` plus `LEFT_ARM_4X4_PRODUCTION_CONTROLLER.md` are the category-specific authority.

## 1. Source of truth

Before every generation freshly review current canonical sources: master spec, MAIN HERO, Character Master Template, relevant reference-pack files, relevant approved-art category, and category-specific workflow/controller.

## 2. General art requirements

- flat 2D vector-style construction
- true-black primary outer outline, approximately 5 px at canonical scale
- large readable forms
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

Use the active final LEFT ARM production-scale reference.

### LEFT ARM production priority

1. **Small scale/location**
2. **Simplify detail to survive scale**
3. **Exact identity**
4. **Pose/design/variation**

The neutral marker is an approximate maximum default visual-mass guide. Slightly undersized is preferred. When uncertain, choose smaller.

Small size is a forcing function for simplicity. Never enlarge an object so optional detail remains visible. Remove/simplify the detail instead.

Generic semantic-class behavior:

- compact/simple → at or below baseline
- long/thin/hanging → extra length allowed only with narrow, low visual mass
- creatures/character-like → strong miniature bias and extremely simple anatomy/face
- bottles/containers/multi-part handheld → strong miniature bias and minimal secondary construction/detail
- broad → wider silhouette allowed while remaining compact relative to hero fist

Real-world size is irrelevant to production scale.

### LEFT ARM acceptance

PASS requires exact row identities, four useful variations, required features, small-side-biased scale, detail appropriate to tiny display, screen-left zero-contact placement, complete geometry, usable broad pose, bold outer stroke, and no reconstruction requirement.

Normal production briefs contain only current requested items. Never inject calibration history or old failures.

## 4. RIGHT ARM

Use current validated RIGHT ARM approach and approved references. Optimize body-relative scale, broad orientation, continuous usable grip geometry, and low-detail construction.

## 5. HATS

Use current HAT registration/isolation approach and canonical references. Prioritize head-relative scale, facing/orientation, attachment position, silhouette, and stroke language.

## 6. OUTFITS / ARMOR

Use canonical body template and armor-specific rules. Do not apply LEFT ARM zero-contact architecture to body silhouette alignment.

## 7. ACCESSORIES

Use MAIN HERO for body-relative location and scale. Small accessories remain small despite empty canvas space.

## 8. Scale authority

Scale authority order:

1. validated category production reference/controller
2. especially similar approved cosmetics
3. category references
4. MAIN HERO proportions
5. prompt description

Never enlarge because composition looks empty.

## 9. Complexity authority

Default toward fewer, larger forms. At tiny display scale, delete detail that cannot survive rather than enlarging the asset. Prioritize silhouette and essential identity cues over micro-decoration.

## 10. Core principle

Generate complete clean production geometry as early as the category allows and avoid downstream reconstruction. For LEFT ARM specifically: **small first, simplify second, identity third, pose/design fourth.**