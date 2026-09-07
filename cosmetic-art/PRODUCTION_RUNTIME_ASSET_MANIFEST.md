# Don't Die Cosmetic Art — Production Runtime Asset Manifest

## Purpose

This file solves fresh-session asset portability.

For normal production, the user supplies only:

- category
- up to four row briefs
- this repo/handoff context

The agent owns retrieval of canonical visual references and creation of a **single complete ZIP** for any generation step that requires uploads.

## Critical distinction: portable files are not active references

This manifest names files that may need to be available in a session. **Presence in the permanent reference kit does not mean a file should be supplied to image generation.**

The applicable validated category/stage workflow determines the active generation visual set and order. `GENERATION_EXECUTION_CONTRACT.md` and `PRODUCTION_PACKAGE_REGRESSION_GATES.md` verify that fresh-agent packaging preserves that setup.

Do not convert a portability dependency into an active image merely because it is listed here. Do not add duplicate hero/context, category-reference, style, or approved-art images unless the validated workflow for the current stage requires them.

## Hard rule — never make the user hunt for canonical files

If a required PNG/SVG already exists in `metzlernick/dontdie-assets`, **do not ask the user to find, download, or re-upload it individually**.

This repository is public. Binary repository assets can be retrieved from the raw GitHub endpoint:

`https://raw.githubusercontent.com/metzlernick/dontdie-assets/main/<repo-path>`

For paths containing spaces or other URL-sensitive characters, URL-encode the path. After retrieval, verify that the local file exists and is non-empty.

For exact/locked controllers, also verify canonical basename, dimensions, and SHA-256 before packaging. Do not resize, re-encode, screenshot, duplicate-rename, or round-trip an exact controller through chat/UI merely to make it uploadable.

## Package contract

Whenever a generation step requires transfer, provide **one ZIP** containing:

1. the exact production prompt;
2. manifest/metadata required by that category/stage;
3. every fixed canonical dependency needed for portability/audit;
4. every batch-specific approved-art reference selected by the agent;
5. `GENERATION_INPUT/` containing **only** the active generation files required by the validated category/stage setup;
6. `00_REFERENCE_ROLES.txt` and `00_INPUT_ORDER.txt` when applicable;
7. an integrity record for exact controller basename/dimensions/SHA-256;
8. a short README naming the intended generation stage and expected output.

Files outside `GENERATION_INPUT/` are not active generation references.

## Retrieval order

1. Inspect the live repo and applicable category/stage workflow.
2. Determine the validated active visual set and order.
3. Resolve exact canonical paths.
4. Resolve only batch-specific approved-art references actually needed by the brief.
5. Retrieve binary assets from raw GitHub or the permanent fallback ZIP.
6. Verify exact controller bytes/dimensions where locked.
7. Build `GENERATION_INPUT/` without expanding the validated active set.
8. Build one complete ZIP.
9. Run package regression gates.

If a mandatory asset genuinely does not exist in the repository, stop and identify that missing repository asset. Do not phrase this as a request for the user to hunt for it locally.

---

# Portable runtime assets by category

These are **availability dependencies**, not automatic active-generation lists. The live category workflow always decides what is active.

## Shared canonical visual assets

Preferred raster hero reference:

- `cosmetic-art/reference-sheets/MASTER_CHARACTER_REFERENCE.png`

Additional registration/context assets when required by a validated stage:

- `cosmetic-art/reference-sheets/SPATIAL_TEMPLATE_MAIN_HERO_4X4.png`
- `cosmetic-art/registration/MAIN_HERO_REGISTRATION.png`
- `cosmetic-art/registration/MAIN_HERO_REGISTRATION_4X4.png`
- `cosmetic-art/registration/CANONICAL_ANCHOR_REFERENCE.png`
- `cosmetic-art/reference-sheets/STYLE_LOCK_APPROVED_ART.png`

Canonical SVG sources:

- `cosmetic-art/templates/MAIN HERO.svg`
- `cosmetic-art/templates/Character Master Template.svg`

## HATS

Portable dependencies may include:

- `cosmetic-art/reference-sheets/MASTER_CHARACTER_REFERENCE.png`
- `cosmetic-art/reference-sheets/HATS_REFERENCE.png`
- `cosmetic-art/reference-sheets/HATS_PLACEMENT_REFERENCE.png`
- `cosmetic-art/reference-sheets/HAT_HEAD_ORIENTATION_REFERENCE.png`
- especially similar files from `cosmetic-art/approved-art/hats/`

Activate only the subset/order required by the current validated hat workflow.

## RIGHT ARM

Portable dependencies may include:

- `cosmetic-art/reference-sheets/MASTER_CHARACTER_REFERENCE.png`
- `cosmetic-art/reference-sheets/RIGHT_ARM_REFERENCE.png`
- `cosmetic-art/reference-sheets/RIGHT_ARM_PLACEMENT_REFERENCE.png`
- especially similar files from `cosmetic-art/approved-art/right-arm/`

Activate only the subset/order required by the current validated right-arm workflow.

## LEFT ARM — LOCKED V3

Portable dependencies include:

- `cosmetic-art/reference-sheets/MASTER_CHARACTER_REFERENCE.png` — portability/audit only for normal V3; **not a separate active generation reference** unless a future validated LEFT ARM workflow explicitly changes that rule.
- `cosmetic-art/reference-sheets/LEFT_ARM_FINISHED_COSMETIC_EXEMPLAR_REFERENCE_4X4_V3.png` — exact active PRIMARY for normal V3 generation.

Mandatory text authorities:

- `cosmetic-art/LEFT_ARM_ZERO_CONTACT_WORKFLOW.md`
- `cosmetic-art/LEFT_ARM_4X4_PRODUCTION_CONTROLLER.md`
- `cosmetic-art/LEFT_ARM_PRODUCTION_PROMPT_TEMPLATE.txt`

Normal LEFT ARM V3 active-input rule:

1. `reference-sheets/LEFT_ARM_FINISHED_COSMETIC_EXEMPLAR_REFERENCE_4X4_V3.png` first, exact basename/bytes, **2400×2560**;
2. only approved DESIGN_ONLY references explicitly required by the current briefs, after V3;
3. no separate full-color `MASTER_CHARACTER_REFERENCE.png` active image because the composite V3 controller already supplies the validated hero/context relationship.

Example Regression A: gold shield / money bag / spatula / lantern. Because the shield explicitly matches Gold Armor + Gold Sword and borrows Mirror Shield silhouette language, those three approved references may be active after V3 as DESIGN_ONLY. They must not alter scale/context/contact.

## ARMOR / OUTFITS

Mandatory text authorities:

- `cosmetic-art/ARMOR_OUTFIT_PRODUCTION_WORKFLOW.md`
- `cosmetic-art/ARMOR_STAGE_B_DETERMINISTIC_REGISTRATION.md`

Portable dependencies include the current canonical-derived hero geometry/substrate, canonical hand, viewer-left arm-chain, master hero references, and relevant approved armor/design references.

**Do not activate all of them generically.** Reproduce the exact stage-specific active input set named by the locked armor workflow/package. Stage B must not inherit unrelated Stage-A/design reference soup.

## ACCESSORIES — GENERAL

Portable baseline assets may include:

- `cosmetic-art/reference-sheets/MASTER_CHARACTER_REFERENCE.png`
- `cosmetic-art/reference-sheets/ACCESSORIES_REFERENCE.png`
- `cosmetic-art/reference-sheets/ACCESSORIES_PLACEMENT_REFERENCE.png`
- relevant files from `cosmetic-art/approved-art/accessories/`
- validated location-specific controllers

Activate only a validated location-specific set. General accessory availability does not validate a body location.

## FACE ACCESSORIES — LOCKED

Mandatory text authority:

- `cosmetic-art/ACCESSORY_FACE_PRODUCTION_WORKFLOW.md`

Portable kit/session should contain the current faint literal canonical hero substrate/controller, face registration controller, master hero source assets, and especially similar approved face-accessory references required for future batches.

Normal face Stage-A active input must reproduce the locked face workflow. **Do not add full-color MAIN HERO as an active generation image through generic packaging.** The faint substrate remains PRIMARY; face controller and only required DESIGN_ONLY art follow according to the validated workflow.

If controllers are generated deterministically from canonical repo assets as part of packaging, the agent performs that operation itself, records the derivation, and includes the generated controllers in the ZIP.

---

# Batch-specific approved-art selection

A fixed production kit cannot predict which approved design references a future brief will invoke. Therefore the fresh agent selects them automatically **only when the brief actually requires them**.

When a brief says things such as:

- "match the gold armor/sword"
- "same style as X"
- "closest to Meme Glass"

search the relevant `approved-art/` directories, resolve the best matching canonical file(s), retrieve them, and include them in the package. Whether they are active generation references is controlled by the validated category workflow.

Do not require exact filename spelling from the user when the intended approved asset can be resolved from the repository.

Approved art controls only the properties assigned by the category workflow. It never silently overrides locked scale, registration, anatomy, zero-contact, or isolation rules.

# Failure handling

A fresh agent may ask the user for an additional visual file only when **all** of the following are true:

1. the requested design depends on a user-specific/new visual reference not already in the repo;
2. repository search confirms no suitable canonical asset exists;
3. the current brief cannot be executed faithfully without that external visual.

Canonical production files are never treated as user-supplied dependencies.

# Core portability principle

**Repo asset retrieval is agent work. Portability availability and active generation input are different concepts.**

The normal user-facing contract is:

**handoff + category + four briefs → agent-built complete ZIP preserving validated input topology → generation → review.**
