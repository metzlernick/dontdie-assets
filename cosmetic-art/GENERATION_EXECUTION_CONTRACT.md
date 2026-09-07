# Don't Die Cosmetic Art — Generation Execution Contract

**Status: mandatory cross-category execution authority.**

This file solves a different problem from asset portability. A complete ZIP is not sufficient: the generation model must receive the correct visual authority hierarchy. Repository assets are not coequal references.

## Core rule — preserve the validated category setup

The live category workflow is the control. This cross-category contract may label, verify, and package that setup; it must **not** silently change its active visual-input topology, prompt body, controller bytes, controller construction, or reference order.

A generic role map is metadata, not permission to add references. Do not add `MASTER_CHARACTER_REFERENCE.png`, generic category sheets, approved art, anatomy crops, style sheets, or any other image merely because a role exists for it. An image is active only when the applicable validated category/stage workflow calls for that image for the current task.

Every generation stage must designate the controller(s) required by its validated category workflow. A `PRIMARY_CANVAS_AUTHORITY` controls the properties assigned to it by that workflow: canvas/cell geometry, body-relative placement, registration, scale class, and contact/occlusion behavior.

All other active visuals are explicitly subordinate and role-labeled. Never dump a collection of reference images into generation and expect prose to resolve conflicts.

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

## Validated-input topology lock

Before building `GENERATION_INPUT/`, write down the active visual set and order required by the applicable category/stage workflow. Packaging must reproduce that set rather than deriving a new one from the permanent portability kit.

Hard rules:

- PRIMARY/controller image(s) appear first in generation-reference order.
- Preserve the exact canonical controller basename, dimensions, and file bytes whenever the workflow identifies an exact controller file.
- Never resize, downsample, re-encode, screenshot, flatten, rename with duplicate suffixes such as `(1)`/`(2)`, or round-trip an exact controller through chat before generation.
- If the exact controller cannot be supplied to the generation stage as the same bytes, STOP rather than declaring preflight PASS.
- Do not duplicate context already embedded in a composite PRIMARY controller by adding a separate full-color hero/context image unless the category workflow explicitly requires that second image.
- Add approved/design references only when the current brief actually needs them; keep them after controller/context references.
- Role labels do not compensate for wrong reference order or an expanded active visual set.

The package may retain additional files outside `GENERATION_INPUT/` for portability/audit. They are not active generation references.

## Prompt execution lock

If a category/stage has a locked production prompt template, generate `00_GENERATION_PROMPT.txt` by substituting only the fields that template explicitly permits. Do not summarize, shorten, paraphrase, sanitize the invariant body, reorder sections, or replace the template with a new prompt.

Brief sanitization may remove genuine conflicts or normalize formatting only inside permitted brief slots. It may not rewrite the locked production instructions.

At invocation time, the exact `00_GENERATION_PROMPT.txt` must be the generation instruction. Merely including that file in a ZIP or preflight report is insufficient. Do not replace it with a generic synthesized description such as “sprite sheet,” “inventory grid,” or a summary inferred from the images.

## Package structure

A complete ZIP may contain the permanent reference library for portability, but a batch generation stage uses a small `GENERATION_INPUT/` selection containing only the visuals required by the validated category/stage setup, plus:

- `00_GENERATION_PROMPT.txt`
- `00_REFERENCE_ROLES.txt`
- `00_INPUT_ORDER.txt` when more than one active visual is supplied
- the exact PRIMARY controller/substrate
- only category-required anatomy/design/style references
- stage manifest/metadata when applicable

`00_REFERENCE_ROLES.txt` must explicitly name every active image and its role, plus the properties it is forbidden to control. `00_INPUT_ORDER.txt` must list active visual files in the exact order they are to be supplied to generation.

## Conflict rule

When text and a subordinate reference conflict with the PRIMARY controller on a property owned by PRIMARY, PRIMARY wins. When a user brief uses semantic size words such as large/big/full-size but the category controller owns production scale, the semantic word describes identity/proportions only and cannot enlarge the production footprint.

## Category execution maps

### HATS
Use the active visual set defined by the validated hat workflow. Do not add references beyond that set just to satisfy this generic role taxonomy.

- PRIMARY spatial authority: `reference-sheets/HATS_PLACEMENT_REFERENCE.png` together with the current validated hat orientation controller where required.
- ANATOMY/context: `MASTER_CHARACTER_REFERENCE.png` only when called for by the validated hat generation setup.
- `HAT_HEAD_ORIENTATION_REFERENCE.png`: orientation authority only.
- approved hats: DESIGN_ONLY only when needed by the brief.
- `HATS_REFERENCE.png` / `STYLE_LOCK_APPROVED_ART.png`: STYLE_ONLY or design-family reference only when the validated setup calls for them.

Generation target remains canonical head-relative placement. Never independently center/enlarge hats to make a product sheet.

### RIGHT ARM
Use the active visual set defined by the validated right-arm workflow. Do not add references beyond that set merely because they exist in the fallback kit.

- PRIMARY spatial authority: `reference-sheets/RIGHT_ARM_PLACEMENT_REFERENCE.png`.
- ANATOMY/context: `MASTER_CHARACTER_REFERENCE.png` when required by the validated right-arm setup.
- approved right-arm art: DESIGN_ONLY only when needed by the brief.
- `RIGHT_ARM_REFERENCE.png` / style sheets: STYLE_ONLY/design-family only when the validated setup calls for them.

Approved standalone weapon art must never become canvas-scale authority. Body-relative held-object geometry wins. Final exact canonical hand overlay/registration remains Illustrator work.

### LEFT ARM — LOCKED V3
The validated V3 one-pass zero-contact setup is the control. Do not redesign it.

- **PRIMARY_CANVAS_AUTHORITY: `reference-sheets/LEFT_ARM_FINISHED_COSMETIC_EXEMPLAR_REFERENCE_4X4_V3.png`.**
- This exact **2400×2560** V3 composite controller is active visual input #1 and supplies the hero/context relationship, cosmetic location, tiny visual-mass cue, and zero-contact composition.
- Do **not** add a separate `MASTER_CHARACTER_REFERENCE.png` as an active generation reference for normal V3 production. The composite V3 controller already contains the validated hero context. MASTER HERO may remain in the package outside `GENERATION_INPUT/` for audit/portability.
- approved left/right-arm/armor references are DESIGN_ONLY and are active only when the current row brief explicitly requires their design family.

For LEFT ARM, design references are especially dangerous because standalone approved art is much larger than the V3 exemplar. They may control palette/material/theme/silhouette vocabulary only. They may not control object scale, hero clothing, hand pose, grip/contact, canvas composition, or location.

**The hero must not be generated holding the object.** Cosmetic remains extremely tiny, complete, screen-left, with clean white separation. If the model shows a hand gripping the object or a normal readable-prop scale, that is a controller failure.

Gold-shield Regression A: Gold Armor + Gold Sword + Mirror Shield may be supplied after the V3 controller as DESIGN_ONLY because the brief explicitly requests that design family. They do not authorize a separate MASTER HERO image or any change to the V3 scale/context setup.

Normal LEFT ARM `00_GENERATION_PROMPT.txt` must be the canonical `LEFT_ARM_PRODUCTION_PROMPT_TEMPLATE.txt` with only `ROW_1`–`ROW_4` substituted. No fresh-agent rewrite of the invariant template is permitted.

### ARMOR / OUTFITS
Do not alter the validated stage architecture or active authority stack.

Stage A uses its current clean-room authority stack:
- PRIMARY geometry/canvas: current literal canonical hero substrate + canonical-derived proportion controller.
- ANATOMY: canonical hand-anatomy reference + canonical viewer-left arm-chain reference.
- DESIGN_ONLY: approved outfit/armor references only when required.
- generic `ARMOR_REFERENCE.png` or style sheets are not geometry authority and must not be injected by generic packaging.

Stage B uses approved Stage A/A.5 image as literal artwork authority plus cape manifest as semantic authority. Do not feed unrelated approved art or generic reference sheets into Stage B.

### ACCESSORIES — FACE
Do not alter the validated faint-substrate architecture.

- PRIMARY_CANVAS_AUTHORITY: current ~6% faint literal canonical hero substrate.
- spatial/anchor authority: face registration controller.
- approved Meme Glass or other face art: DESIGN_ONLY / compact scale-class precedent only when needed.
- full-color MAIN HERO is **not** an active Stage-A generation reference unless the face workflow explicitly says otherwise; it must not be injected by generic packaging or displace the faint substrate.

Only the accessory is full-opacity generated art. Deterministic extraction follows; no generative Stage B.

### ACCESSORIES — NON-FACE
General reference sheets do not constitute a validated spatial controller. Before production, designate or deterministically construct the literal location-specific PRIMARY controller required by that location workflow. Do not infer a new architecture from this generic contract.

## Pre-generation hard gate

Immediately before image generation, run `PRODUCTION_PACKAGE_REGRESSION_GATES.md`.

Do not generate unless:
- the category/stage active visual set matches the validated workflow;
- PRIMARY controller exists under the exact expected filename and, where specified, exact dimensions/bytes;
- PRIMARY is first in reference order;
- every active visual has a role;
- no generic packaging step added a duplicate or unnecessary context/reference image;
- no subordinate visual is allowed to override PRIMARY-owned properties;
- locked prompt templates are unchanged outside permitted slots;
- expected scale/contact/registration behavior is stated;
- the actual invocation will use the exact packaged prompt and ordered active visual set.

## Post-generation first check

Before judging aesthetics, verify controller obedience: sheet geometry/relationship, body/context placement, scale class, contact/occlusion, and registration behavior. If these fail, reject the sheet immediately and debug controller execution rather than polishing row designs.
