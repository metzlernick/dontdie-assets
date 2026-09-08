# Don't Die Cosmetic Artwork — Master Production Specification

**Version: 2.0 — 4×1 production architecture**

## Mandatory fresh preflight
Before generation, read current:
- `FRESH_AGENT_PRODUCTION_HANDOFF.md`
- `REPEATABLE_PRODUCTION_WORKFLOW.md`
- `PRODUCTION_STAGE_ORCHESTRATION.md`
- applicable category workflow
- relevant canonical templates/references/approved art

Live category workflow overrides general rules.

## Universal production unit
Unless a category explicitly overrides:
- 1920×640 logical canvas
- 4 columns × 1 row
- four 480×640 logical cells
- one cosmetic brief
- four moderate variants
- pure white background
- no gutters/grid/labels

Historical 4×4 sheets remain valid reference/source material.

LEFT ARM override:
- 2400×640
- four 600×640 cells
- hero/context screen-right
- complete cosmetic screen-left
- zero contact

## Core art style
- flat 2D vector-like cartoon construction
- true-black primary outer contour, visually ~5 px at canonical 480×640 scale
- rounded joins/caps
- hard-edged solid fills
- low detail / sparse interior linework
- pure white background
- no cast shadow, texture, noise, painterly rendering
- no gradients unless explicitly requested
- Image-Trace friendly

Soft effects may use explicit local outline/gradient exceptions.

## Scale / complexity
Production-relative scale outranks presentation balance. Never enlarge because canvas is empty, real-world object is large, semantics are important, or detail needs room.

Simplify/delete detail before increasing scale.

## HATS
Use `HATS_PRODUCTION_WORKFLOW.md`.

4×1 Stage A registered on canonical hero → foreground-only Stage B isolation → deterministic registration → Illustrator.

## RIGHT ARM
Use `RIGHT_ARM_PRODUCTION_WORKFLOW.md`.

4×1 held-object Stage A → Stage B isolation/minimal hidden-grip reconstruction → deterministic scale/X/Y restoration → Illustrator.

Viewer-right raised hand. Stage A is scale/X/Y authority. Stage B is isolated-art authority.

## LEFT ARM
Use `LEFT_ARM_ZERO_CONTACT_WORKFLOW.md` + `LEFT_ARM_PRODUCTION_PROMPT_TEMPLATE.txt`.

4×1 Stage A only. No AI Stage B.

The tiny V3 exemplar in the active controller is a literal footprint constraint. Whole requested cosmetic should fit approximately inside that footprint. If detail conflicts: remove detail; never enlarge.

Approved design references cannot override footprint, hero relationship, or zero-contact behavior.

## ARMOR / OUTFITS
Use `ARMOR_OUTFIT_PRODUCTION_WORKFLOW.md` + `ARMOR_STAGE_B_DETERMINISTIC_REGISTRATION.md`.

Architecture:
**cape preflight → 4×1 validated clean-room Stage A → optional A.5 cape correction → 4×1 destructive Stage B → deterministic registration → Illustrator.**

If cape state is absent/ambiguous, ask the user before Stage A. KEEP capes are intentionally styled by Stage A to match the outfit.

Armor hands: exactly three fingers + one thumb = four total digits.

Do not use faint-substrate Armor Stage A. Preserve canonical proportions, both arm chains, hand scale, and especially viewer-left lowered arm chain.

Stage B removes head/context/pedestal and unwanted cape/context, preserves approved outfit-specific hands/arms, and never reconstructs hidden garment geometry.

Raw Stage-B scale/X/Y drift is corrected deterministically.

## FACE ACCESSORIES
Use `ACCESSORY_FACE_PRODUCTION_WORKFLOW.md`.

4×1 Stage A on ~6% faint literal canonical substrate → deterministic extraction → Illustrator. No generative Stage B.

## NON-FACE ACCESSORIES
Use only an already validated location-specific controller/workflow.

## Registration
Deterministic registration/extraction belongs to the applicable category workflow. Do not ask image generation for pixel-perfect registration when deterministic processing or Illustrator owns it.

## Failure control
Classify before changing infrastructure:
- SYSTEM FAIL = category architecture/controller/stage behavior structurally failed
- BRIEF FAIL = local cosmetic requirement missed

Freeze passing controls. Do not redesign architecture for a BRIEF FAIL.

## Core principle
**One brief → four variants → 4×1. Production scale, registration, complete usable geometry, silhouette, stroke consistency, and downstream vectorization outrank presentation balance.**
