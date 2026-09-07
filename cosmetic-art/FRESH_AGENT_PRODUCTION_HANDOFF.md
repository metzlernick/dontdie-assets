# Don't Die Cosmetic Art — Fresh Agent Production Handoff

## Purpose

Use this file to start a fresh agent session for a normal cosmetic-art production batch.

The user should only need to provide:

1. the **category**
2. up to **four cosmetic briefs**, in row order

Canonical repository: `metzlernick/dontdie-assets/cosmetic-art`.

## User input

**CATEGORY:** HATS | RIGHT ARM | LEFT ARM | ARMOR / OUTFITS | ACCESSORIES

**ROW 1:** brief  
**ROW 2:** brief  
**ROW 3:** brief  
**ROW 4:** brief

For ACCESSORIES, determine the body location. If it is not obvious from the briefs, ask for the location before packaging the batch.

# NON-NEGOTIABLE PORTABILITY CONTRACT

**The user does not hunt for canonical PNG/SVG/reference files.**

For normal production, the user supplies the category and briefs. The agent retrieves every repository-resident canonical dependency and produces a **single complete ZIP** whenever the next generation step requires file uploads.

Mandatory runtime authority:

- `PRODUCTION_RUNTIME_ASSET_MANIFEST.md`

Read it before packaging any batch.

If the GitHub connector can inspect a binary file but cannot export its bytes to the working environment, that is **not** a reason to ask the user to upload the file manually. This is a public repository. Retrieve the binary through raw GitHub using:

`https://raw.githubusercontent.com/metzlernick/dontdie-assets/main/<repo-path>`

or use the `download_url` returned by the GitHub contents API. URL-encode spaces/special characters as needed.

Use the available HTTP/container download mechanism to save the asset locally, verify it exists and is non-empty, then include it in the ZIP.

A normal generation ZIP must contain:

- exact production prompt
- required manifest/metadata
- all fixed canonical visual dependencies
- all batch-specific approved-art references selected for the briefs
- README with stage/output expectations

**Never respond with a shopping list of canonical files for the user to locate.**

Only request a new user-supplied visual when the brief genuinely depends on a new/external reference that does not exist in the repo and cannot be faithfully resolved from approved art.

## Fresh-agent rule

The repository is the source of truth. Before creating any production package, freshly read:

- `DONT_DIE_COSMETIC_ART_SPEC.md`
- `REPEATABLE_PRODUCTION_WORKFLOW.md`
- `PRODUCTION_SESSION_STARTER.txt`
- `CANONICAL_REGISTRATION_SYSTEM.md`
- `PRODUCTION_RUNTIME_ASSET_MANIFEST.md`
- `templates/MAIN HERO.svg`
- `templates/Character Master Template.svg`
- relevant category references
- relevant `approved-art/<category>/`
- especially similar approved cosmetics
- every applicable category-specific workflow/controller

Do not rely on memory or old calibration files. If a mandatory canonical source genuinely does not exist in the repository, stop before generation and identify the missing repository dependency. Do not ask the user to search their computer for canonical files.

## Global invariants

Unless a category-specific workflow overrides them: 1920×2560 sheet; 4×4; 480×640 cells; one brief per row; four moderate variations; white background; no grid/labels/gutters; body-relative rather than presentation-centered placement; flat vector-like art; true-black ~5 px primary contour at canonical scale; hard fills; low detail; no texture/painterly rendering/cast shadow; Image-Trace friendly. Never enlarge merely to fill empty space. Simplify detail before increasing scale.

## HATS

Use the master spec plus `reference-sheets/MASTER_CHARACTER_REFERENCE.png`, `reference-sheets/HATS_REFERENCE.png`, `reference-sheets/HATS_PLACEMENT_REFERENCE.png`, `reference-sheets/HAT_HEAD_ORIENTATION_REFERENCE.png`, relevant approved hats, and canonical templates. Prioritize canonical head-relative placement, facing/orientation, attachment baseline, production scale, identity, style, then variation. Do not presentation-center. Follow the current validated hat registration/isolation approach in the live repository.

Retrieve/package all of those repo assets yourself. Do not ask the user to upload them individually.

## RIGHT ARM

Viewer-right / screen-right raised-hand side. Use `reference-sheets/MASTER_CHARACTER_REFERENCE.png`, `reference-sheets/RIGHT_ARM_REFERENCE.png`, `reference-sheets/RIGHT_ARM_PLACEMENT_REFERENCE.png`, relevant approved art, and canonical templates. Generation owns identity, body-relative scale, broad orientation, silhouette, style, and continuous usable grip geometry. Do not create a hand-shaped hole/fake grip cutout. Final canonical hand overlays the object in Illustrator. Exact final grip registration is an Illustrator responsibility. Do not enlarge props/weapons to fill the canvas.

Retrieve/package all repo assets yourself. Do not ask the user to upload them individually.

## LEFT ARM — LOCKED V3

Mandatory: `LEFT_ARM_ZERO_CONTACT_WORKFLOW.md`, `LEFT_ARM_4X4_PRODUCTION_CONTROLLER.md`, `LEFT_ARM_PRODUCTION_PROMPT_TEMPLATE.txt`, `reference-sheets/LEFT_ARM_FINISHED_COSMETIC_EXEMPLAR_REFERENCE_4X4_V3.png`, `reference-sheets/MASTER_CHARACTER_REFERENCE.png`, relevant approved art, canonical templates.

Locked: one pass; 2400×2560; 4×4; 600×640 cells; hero screen-right; complete cosmetic screen-left; white zero-contact separation; no generated grip/hidden geometry/AI reconstruction. Illustrator later moves/rotates/scales under canonical hand.

Priority: extremely tiny finished-exemplar scale/location → simplify detail → exact identity → pose/design → variation. Semantic/real-world size never authorizes enlargement. When uncertain, smaller. Normal production uses the prompt template unchanged except ROW_1–ROW_4 brief slots.

Before packaging, run the mandatory LEFT ARM conflict gate. If a brief conflicts with locked scale, zero-contact, hero placement, sheet geometry, detail hierarchy, grip, or reconstruction rules: stop, explain the conflict, offer safe wording, and wait for resolution.

### LEFT ARM portability regression rule

For the gold shield / money bag / spatula / lantern regression batch, or any analogous batch, the agent must retrieve the V3 exemplar, MAIN HERO, and all requested/matching approved-art references itself. If the brief calls for Gold Armor, Gold Sword, and Mirror Shield as design/scale precedents, locate those in `approved-art/`, download their repo files, and include them in the complete ZIP.

**Do not ask the user to upload V3 exemplar, MAIN HERO, Gold Armor, Gold Sword, Mirror Shield, or any other repository-resident canonical reference.**

## ARMOR / OUTFITS — LOCKED COMPLETE PIPELINE

Mandatory: `ARMOR_OUTFIT_PRODUCTION_WORKFLOW.md`, `ARMOR_STAGE_B_DETERMINISTIC_REGISTRATION.md`, current canonical-derived geometry/substrate, canonical hand reference, viewer-left arm-chain reference, approved armor, canonical templates.

Architecture: **initial briefs + cape manifest → Stage A → optional Stage A.5 → Stage B destructive isolation using same manifest → deterministic per-cell registration → Illustrator.**

Cape metadata: KEEP / NONE / RESTYLE. Carry it automatically from initial briefs; never infer ownership from pixels downstream.

Stage A preserves near-canonical proportions/pose/arm chains/feet/hands. Hands = 3 fingers + 1 thumb = 4 total digits. Default simple flat rendering. Put 8-bit/heavily geometric rows last when practical. Old generated calibration sheets are not geometry authority. Previously approved outfit art may be DESIGN-ONLY when explicitly requested, never anatomy/registration/scale authority.

A.5 is cape-only correction/restyle.

Stage B is destructive erase-only. Remove head/context/headwear when body-only, entire pedestal, and cape/context mass for NONE rows. Any pedestal survives = FAIL. Never reconstruct hidden garment/foot/peg/cape geometry. New exposure stays white. Raw X/Y/scale drift alone is not isolation failure.

After isolation, deterministic registration is mandatory: Stage A/A.5 = coordinate/scale authority; Stage B = artwork authority; per-cell uniform scale + X/Y translation only; no rotation/stretch/warp/redraw/inpainting; rebuild exact 1920×2560 and 480×640 cells. No generative Stage B.5.

Retrieve/package repository-resident controllers and references for every stage yourself.

## ACCESSORIES — LOCATION AWARE

Use `reference-sheets/MASTER_CHARACTER_REFERENCE.png`, `reference-sheets/ACCESSORIES_REFERENCE.png`, `reference-sheets/ACCESSORIES_PLACEMENT_REFERENCE.png`, relevant approved accessories, canonical templates, and any validated location-specific workflow. Determine body location first.

### FACE ACCESSORIES — LOCKED

Mandatory: `ACCESSORY_FACE_PRODUCTION_WORKFLOW.md`, current faint literal canonical hero substrate/controller, face registration controller, and closest similar approved face accessory such as Meme Glass when relevant.

Architecture: **briefs → Stage A on ~6% faint literal canonical hero substrate → deterministic faint-substrate extraction → Illustrator.** There is no generative Stage B.

Stage A: faint hero remains literal/faint; accessory is the only full-opacity generated art; generate at final face-relative scale/position using literal eye/mouth/location anchors. Small assets stay small.

Then deterministic extraction: normalize 480×640 cells; use location/row-specific ROIs and thresholds; retain Stage-A accessory pixels; preserve needed low-saturation effects such as smoke; whiten faint substrate; no reconstruction; rebuild 1920×2560.

Do not use generative face isolation or full-color generated-hero subtraction; both were calibrated and rejected.

Retrieve repository-resident source assets yourself. If a controller/substrate is deterministically constructed from canonical repo assets during packaging, construct it yourself and include it in the ZIP. Do not ask the user to upload Meme Glass, MAIN HERO, or a canonical controller that can be retrieved or constructed.

For non-face accessories, do not blindly reuse face extraction. Use a literal controller for the actual location and validate a reusable location workflow when needed.

## Fresh-agent behavior

After repository review:

1. run the category conflict/compliance gate
2. sanitize briefs without changing identity
3. choose especially similar approved references
4. resolve exact repo paths for all fixed + batch-specific visual dependencies
5. retrieve their binary bytes into the working environment using raw GitHub/download URLs
6. verify every required file exists and is non-empty
7. create the exact category prompt/manifest/controller files
8. provide **one complete ZIP** containing everything the next generation step needs
9. explicitly PASS/FAIL returned sheets against the locked workflow
10. correct the smallest actual failure rather than reopening validated architecture
11. perform deterministic/file operations yourself when tools permit
12. keep calibration artifacts out of canonical production folders unless validated
13. leave final Illustrator work where the category workflow assigns it

The user should not be asked to manually edit prompts, manifests, metadata, registration transforms, repository workflow text, or to rediscover canonical PNG/SVG references when the agent can retrieve them.

## Current completion state

Established production paths exist for all five top-level categories: HATS, RIGHT ARM, LEFT ARM, ARMOR / OUTFITS, ACCESSORIES.

LEFT ARM, ARMOR / OUTFITS, and FACE ACCESSORIES have explicit locked category/location workflows. HATS and RIGHT ARM are governed by the master spec, repeatable workflow, canonical placement/reference sheets, approved art, and Illustrator final-registration rules. Non-face accessory locations remain location-aware and should receive a validated controller/workflow when first encountered.

The live repository always supersedes this handoff if later work changes a workflow.