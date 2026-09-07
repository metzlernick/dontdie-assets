# Don't Die Cosmetic Art — Generation Execution Contract

**Status: mandatory cross-category execution authority.**

This file solves a different problem from asset portability. A complete ZIP is not sufficient: the generation model must receive the correct visual authority hierarchy. Repository assets are not coequal references.

## Core rule — one visual hierarchy

Every generation stage must designate a `PRIMARY_CANVAS_AUTHORITY` before generation. That image/controller controls the properties assigned to it by the category workflow: canvas/cell geometry, body-relative placement, registration, scale class, and contact/occlusion behavior.

All other visuals are explicitly subordinate and role-labeled. Never dump a collection of reference images into generation and expect prose to resolve conflicts.

### Reference roles

`PRIMARY_CANVAS_AUTHORITY`
: Literal spatial/compositional controller for the generation stage. Highest visual authority for geometry/placement/scale/contact properties assigned by the category workflow.

`ANATOMY_AUTHORITY`
: Canonical body/hand anatomy only. Cannot change design, prop scale, canvas composition, or contact behavior.

`DESIGN_ONLY`
: Palette, material, theme, silhouette vocabulary, identity-specific details, and non-scale proportions only. Cannot control canvas, hero pose/clothing, anatomy, registration, contact/grip, object scale, or presentation size unless the category workflow explicitly grants a property.

`STYLE_ONLY`
: Rendering language only. Cannot control geometry, pose, registration, contact, or scale.

**No unlabeled visual reference may be supplied to image generation.**

## Package structure

A complete ZIP may contain the permanent reference library for portability, but a batch generation stage must create a small `GENERATION_INPUT/` selection containing only the visuals actually intended for that stage, plus:

- `00_GENERATION_PROMPT.txt`
- `00_REFERENCE_ROLES.txt`
- the PRIMARY controller/substrate
- only necessary anatomy/design/style references
- stage manifest/metadata when applicable

Do not treat every image elsewhere in the ZIP as an active generation reference.

`00_REFERENCE_ROLES.txt` must explicitly name every active image and its role, plus the properties it is forbidden to control.

## Conflict rule

When text and a subordinate reference conflict with the PRIMARY controller on a property owned by PRIMARY, PRIMARY wins. When a user brief uses semantic size words such as large/big/full-size but the category controller owns production scale, the semantic word describes identity/proportions only and cannot enlarge the production footprint.

## Category execution maps

### HATS
- PRIMARY spatial authority: `reference-sheets/HATS_PLACEMENT_REFERENCE.png` together with the current validated hat orientation controller where required.
- ANATOMY/context: `MASTER_CHARACTER_REFERENCE.png`.
- `HAT_HEAD_ORIENTATION_REFERENCE.png`: orientation authority only.
- approved hats: DESIGN_ONLY unless a live hat workflow grants a narrower property.
- `HATS_REFERENCE.png` / `STYLE_LOCK_APPROVED_ART.png`: STYLE_ONLY or design-family reference; never placement/scale authority.

Generation target remains canonical head-relative placement. Never independently center/enlarge hats to make a product sheet.

### RIGHT ARM
- PRIMARY spatial authority: `reference-sheets/RIGHT_ARM_PLACEMENT_REFERENCE.png`.
- ANATOMY/context: `MASTER_CHARACTER_REFERENCE.png`.
- approved right-arm art: DESIGN_ONLY unless a live workflow explicitly grants a property.
- `RIGHT_ARM_REFERENCE.png` / style sheets: STYLE_ONLY/design-family only.

Approved standalone weapon art must never become canvas-scale authority. Body-relative held-object geometry wins. Final exact canonical hand overlay/registration remains Illustrator work.

### LEFT ARM — LOCKED V3
- **PRIMARY_CANVAS_AUTHORITY: `reference-sheets/LEFT_ARM_FINISHED_COSMETIC_EXEMPLAR_REFERENCE_4X4_V3.png`.**
- This exact V3 file is the absolute scale/location/contact authority.
- `MASTER_CHARACTER_REFERENCE.png`: ANATOMY/context only; it must not replace the V3 canvas composition.
- approved left/right-arm/armor references: DESIGN_ONLY.

For LEFT ARM, design references are especially dangerous because standalone approved art is often much larger than the V3 exemplar. They may control palette/material/theme/silhouette vocabulary only. They may not control object scale, hero clothing, hand pose, grip/contact, canvas composition, or location.

**The hero must not be generated holding the object.** Cosmetic remains extremely tiny, complete, screen-left, with clean white separation. If the model shows a hand gripping the object, that is not a near miss; it is a controller failure.

Gold-shield regression: Gold Armor + Gold Sword + Mirror Shield are DESIGN_ONLY. They must not cause armor/gauntlet generation or normal shield scale. V3 exemplar remains scale authority.

### ARMOR / OUTFITS
Stage A uses a clean-room authority stack, not generic reference soup:
- PRIMARY geometry/canvas: current literal canonical hero substrate + canonical-derived proportion controller.
- ANATOMY: canonical hand-anatomy reference + canonical viewer-left arm-chain reference.
- DESIGN_ONLY: approved outfit/armor references only when required.
- generic `ARMOR_REFERENCE.png` or style sheets are not geometry authority and should not be active if they add no necessary design information.

Stage B uses approved Stage A/A.5 image as literal artwork authority plus cape manifest as semantic authority. Do not feed unrelated approved art into Stage B.

### ACCESSORIES — FACE
- PRIMARY_CANVAS_AUTHORITY: current ~6% faint literal canonical hero substrate.
- spatial/anchor authority: face registration controller.
- approved Meme Glass or other face art: DESIGN_ONLY / compact scale-class precedent only.
- full-color MAIN HERO is not the Stage-A canvas and must not displace the faint substrate.

Only the accessory is full-opacity generated art. Deterministic extraction follows; no generative Stage B.

### ACCESSORIES — NON-FACE
General reference sheets do not constitute a validated spatial controller. Before production, designate or deterministically construct a literal location-specific PRIMARY controller. Until that exists, the location is not reusable/locked.

## Pre-generation hard gate

Immediately before image generation, run `PRODUCTION_PACKAGE_REGRESSION_GATES.md`.

Do not generate unless:
- PRIMARY controller exists and exact filename is resolved;
- every active visual has a role;
- no subordinate visual is allowed to override PRIMARY-owned properties;
- expected scale/contact/registration behavior is stated;
- the active image set is minimal rather than the whole reference library.

## Post-generation first check

Before judging aesthetics, verify controller obedience: sheet geometry, body/context placement, scale class, contact/occlusion, and registration behavior. If these fail, reject the sheet immediately and debug controller execution rather than polishing row designs.
