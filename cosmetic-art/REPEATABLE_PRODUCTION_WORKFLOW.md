# Don't Die Cosmetic Artwork — Repeatable Production Workflow v7.54

## Purpose

This document defines the general repeatable workflow for generating Don't Die cosmetic art.

**Important category override:** LEFT ARM held items now use `LEFT_ARM_ZERO_CONTACT_WORKFLOW.md`. That validated v7.54 workflow supersedes older held-object overlap/reconstruction instructions for LEFT ARM.

---

## 1. Source of Truth

Before every new generation, freshly review the current canonical sources in the `cosmetic-art/` repository.

At minimum:
- `DONT_DIE_COSMETIC_ART_SPEC.md`
- `templates/MAIN HERO.svg`
- `templates/Character Master Template.svg`
- relevant `reference-pack/` files
- relevant `approved-art/<category>/`
- especially similar approved cosmetics

For LEFT ARM also read `LEFT_ARM_ZERO_CONTACT_WORKFLOW.md` and treat it as the category-specific authority wherever older general guidance conflicts.

Approved art defines style, relative scale, complexity, and category conventions.

---

## 2. General Art Requirements

- flat 2D vector-style construction
- true-black primary outer outline, approximately 5 px at canonical scale
- large readable forms
- low detail
- clean silhouette
- hard-edged flat color regions
- pure white background
- no cast shadow on isolated production artwork
- no texture/noise
- no presentation enlargement merely to fill space
- Image-Trace-friendly construction

---

## 3. LEFT ARM — Validated v7.54 Zero-Contact Architecture

Do **not** use the older Stage A hero-overlap → Stage B reconstruction architecture for LEFT ARM.

Generate each LEFT ARM concept with:

- complete cosmetic on screen-left
- canonical MAIN HERO on screen-right as body-relative scale reference
- clear white separation between them
- zero overlap/contact
- no generated hand gripping or covering the cosmetic
- complete object geometry visible in the first generation

Stage A is the geometry authority. Missing object geometry is a generation failure.

Do not solve missing geometry later by:

- image-generation reconstruction
- hero erasure that damages object pixels
- rebuilding handles/necks/rings/outlines in Illustrator

Normal Image Trace/vector cleanup is expected; reconstruction is not.

### LEFT ARM scale calibration

Validated v7.54 results establish:

- spatula: pass
- money bag: pass
- lantern: pass
- shield: pass construction, but target approximately 20–25% larger than the v7.54 shield result

Small LEFT ARM items must remain compact relative to MAIN HERO. Empty white space is acceptable.

### LEFT ARM acceptance

PASS only when the first generation has:

- correct object identity
- complete geometry
- screen-left placement
- zero contact with hero
- correct body-relative scale
- correct broad orientation/physics
- continuous clean black outline
- no hero contamination
- suitable Don't Die style/detail level
- no reconstruction requirement before Image Trace

See `LEFT_ARM_ZERO_CONTACT_WORKFLOW.md` for full rules.

---

## 4. RIGHT ARM

Continue using the current validated RIGHT ARM production approach and approved references.

Optimize for:
- correct category
- correct body-relative scale
- broad orientation
- continuous usable grip geometry
- clean low-detail construction

Do not enlarge weapons merely to fill the canvas.

---

## 5. HATS

Continue using the validated HAT registration/isolation approach and current canonical references.

Prioritize:
- canonical head-relative scale
- correct facing/orientation
- attachment position
- clean silhouette
- consistent 5 px visual stroke system

---

## 6. OUTFITS / ARMOR

Body geometry matters directly. Use the canonical body template and current armor-specific rules. Do not apply the LEFT ARM zero-contact method to body silhouette alignment.

---

## 7. ACCESSORIES

Use MAIN HERO to establish body-relative location and scale. Small accessories should remain small even when that creates substantial empty space.

---

## 8. Scale Authority

Scale comes from:

1. especially similar approved cosmetics
2. validated category calibration
3. category references
4. MAIN HERO body proportions
5. prompt description

Never enlarge an object because the composition looks empty.

For unusual objects, identify the closest approved or validated scale reference before generation.

---

## 9. Complexity Authority

Default toward fewer, larger forms.

At canonical scale:
- prioritize silhouette
- one strong focal detail is better than many small details
- avoid micro-engraving, tiny rivets, dense filigree, repeated decorative marks, and texture-like linework

If a requested object repeatedly becomes too detailed, specify a hard major-form ceiling.

---

## 10. Core Principle

**Generate complete, clean production geometry as early as the category allows. Do not create avoidable downstream reconstruction work.**

For LEFT ARM specifically, v7.54 establishes that the reliable method is to generate the complete item separately on screen-left while the canonical hero remains visible on screen-right only as a scale reference.
