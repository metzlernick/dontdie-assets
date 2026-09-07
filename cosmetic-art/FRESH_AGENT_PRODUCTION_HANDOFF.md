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

## Permanent fallback reference ZIP

Official fallback file name:

`DONT_DIE_COSMETIC_PRODUCTION_REFERENCES.zip`

This ZIP is a reusable session-level fallback containing the canonical visual/reference assets, approved art, templates, registration assets, and production authorities needed across HATS, RIGHT ARM, LEFT ARM, ARMOR / OUTFITS, and ACCESSORIES.

The repository contains an automated builder at:

`.github/workflows/build-cosmetic-production-reference-kit.yml`

The builder assembles the fallback ZIP directly from the current repository so binary files are copied without passing through a chat connector.

### Retrieval hierarchy

Use this order:

1. **Preferred:** retrieve required repo assets automatically into the working environment.
2. **Fallback:** if the runtime cannot materialize complete repo binaries because of connector truncation, blocked raw downloads, or equivalent platform restrictions, use the user-supplied `DONT_DIE_COSMETIC_PRODUCTION_REFERENCES.zip` for the session.
3. Select the needed files from that ZIP yourself and build the batch-specific package.
4. **Never fall back to asking the user for individual canonical files.**

If the fallback ZIP is already attached in the current session, reuse it for subsequent batches. Do not ask for it again.

If neither automatic repo retrieval nor the fallback ZIP is available, ask for **the one permanent fallback ZIP only**, never a list of individual PNG/SVG files.

If the live repository contains newer text/workflow rules than the fallback ZIP, the live repository wins for rules. The fallback ZIP is primarily a binary portability layer.

If the GitHub connector can inspect a binary file but cannot export its bytes to the working environment, that is **not** a reason to ask the user to upload the file manually. This is a public repository. First attempt raw GitHub or the contents API `download_url`. If the runtime blocks that path, use the permanent fallback ZIP.

A normal generation ZIP must contain:

- exact production prompt
- required manifest/metadata
- all fixed canonical visual dependencies
- all batch-specific approved-art references selected for the briefs
- README with stage/output expectations

**Never respond with a shopping list of canonical files for the user to locate.**

Only request a new user-supplied visual when the brief genuinely depends on a new/external reference that does not exist in the repo or fallback kit and cannot be faithfully resolved from approved art.

## Fresh-agent rule

The repository is the source of truth for current rules. Before creating any production package, freshly read:

- `DONT_DIE_COSMETIC_ART_SPEC.md`
- `REPEATABLE_PRODUCTION_WORKFLOW.md`
- `PRODUCTION_SESSION_STARTER.txt`
- `CANONICAL_REGISTRATION_SYSTEM.md`
- `PRODUCTION_RUNTIME_ASSET_MANIFEST.md`
- relevant category references
- relevant `approved-art/<category>/`
- especially similar approved cosmetics
- every applicable category-specific workflow/controller

Use the permanent fallback ZIP as the binary source when direct repository binary transfer is unavailable. Do not rely on memory or old calibration files.

## Global invariants

Unless a category-specific workflow overrides them: 1920×2560 sheet; 4×4; 480×640 cells; one brief per row; four moderate variations; white background; no grid/labels/gutters; body-relative rather than presentation-centered placement; flat vector-like art; true-black ~5 px primary contour at canonical scale; hard fills; low detail; no texture/painterly rendering/cast shadow; Image-Trace friendly. Never enlarge merely to fill empty space. Simplify detail before increasing scale.

## HATS

Use the master spec plus `reference-sheets/MASTER_CHARACTER_REFERENCE.png`, `reference-sheets/HATS_REFERENCE.png`, `reference-sheets/HATS_PLACEMENT_REFERENCE.png`, `reference-sheets/HAT_HEAD_ORIENTATION_REFERENCE.png`, relevant approved hats, and canonical templates. Prioritize canonical head-relative placement, facing/orientation, attachment baseline, production scale, identity, style, then variation. Do not presentation-center. Retrieve/package these yourself from the repo or fallback ZIP.

## RIGHT ARM

Viewer-right / screen-right raised-hand side. Use `reference-sheets/MASTER_CHARACTER_REFERENCE.png`, `reference-sheets/RIGHT_ARM_REFERENCE.png`, `reference-sheets/RIGHT_ARM_PLACEMENT_REFERENCE.png`, relevant approved art, and canonical templates. Generation owns identity, body-relative scale, broad orientation, silhouette, style, and continuous usable grip geometry. Do not create a hand-shaped hole/fake grip cutout. Final canonical hand overlays the object in Illustrator. Exact final grip registration is an Illustrator responsibility. Do not enlarge props/weapons to fill the canvas. Retrieve/package these yourself from the repo or fallback ZIP.

## LEFT ARM — LOCKED V3

Mandatory: `LEFT_ARM_ZERO_CONTACT_WORKFLOW.md`, `LEFT_ARM_4X4_PRODUCTION_CONTROLLER.md`, `LEFT_ARM_PRODUCTION_PROMPT_TEMPLATE.txt`, `reference-sheets/LEFT_ARM_FINISHED_COSMETIC_EXEMPLAR_REFERENCE_4X4_V3.png`, `reference-sheets/MASTER_CHARACTER_REFERENCE.png`, relevant approved art, canonical templates.

Locked: one pass; 2400×2560; 4×4; 600×640 cells; hero screen-right; complete cosmetic screen-left; white zero-contact separation; no generated grip/hidden geometry/AI reconstruction. Illustrator later moves/rotates/scales under canonical hand.

Priority: extremely tiny finished-exemplar scale/location → simplify detail → exact identity → pose/design → variation. Semantic/real-world size never authorizes enlargement. When uncertain, smaller. Normal production uses the prompt template unchanged except ROW_1–ROW_4 brief slots.

Before packaging, run the mandatory LEFT ARM conflict gate. If a brief conflicts with locked scale, zero-contact, hero placement, sheet geometry, detail hierarchy, grip, or reconstruction rules: stop, explain the conflict, offer safe wording, and wait for resolution.

For the gold shield / money bag / spatula / lantern regression batch, retrieve the V3 exemplar, MAIN HERO, Gold Armor, Gold Sword, Mirror Shield, and any other selected approved references from the repo or fallback ZIP. **Never ask the user for those individual files.**

## ARMOR / OUTFITS — LOCKED COMPLETE PIPELINE

Mandatory: `ARMOR_OUTFIT_PRODUCTION_WORKFLOW.md`, `ARMOR_STAGE_B_DETERMINISTIC_REGISTRATION.md`, current canonical-derived geometry/substrate, canonical hand reference, viewer-left arm-chain reference, approved armor, canonical templates.

Architecture: **initial briefs + cape manifest → Stage A → optional Stage A.5 → Stage B destructive isolation using same manifest → deterministic per-cell registration → Illustrator.**

Cape metadata: KEEP / NONE / RESTYLE. Carry it automatically from initial briefs; never infer ownership from pixels downstream.

Stage A preserves near-canonical proportions/pose/arm chains/feet/hands. Hands = 3 fingers + 1 thumb = 4 total digits. Default simple flat rendering. Put 8-bit/heavily geometric rows last when practical. Old generated calibration sheets are not geometry authority. Previously approved outfit art may be DESIGN-ONLY when explicitly requested, never anatomy/registration/scale authority.

A.5 is cape-only correction/restyle.

Stage B is destructive erase-only. Remove head/context/headwear when body-only, entire pedestal, and cape/context mass for NONE rows. Any pedestal survives = FAIL. Never reconstruct hidden garment/foot/peg/cape geometry. New exposure stays white. Raw X/Y/scale drift alone is not isolation failure.

After isolation, deterministic registration is mandatory: Stage A/A.5 = coordinate/scale authority; Stage B = artwork authority; per-cell uniform scale + X/Y translation only; no rotation/stretch/warp/redraw/inpainting; rebuild exact 1920×2560 and 480×640 cells. No generative Stage B.5.

Retrieve/package repository-resident controllers and references for every stage yourself, using the fallback ZIP when direct binary transfer is unavailable.

## ACCESSORIES — LOCATION AWARE

Use `reference-sheets/MASTER_CHARACTER_REFERENCE.png`, `reference-sheets/ACCESSORIES_REFERENCE.png`, `reference-sheets/ACCESSORIES_PLACEMENT_REFERENCE.png`, relevant approved accessories, canonical templates, and any validated location-specific workflow. Determine body location first.

### FACE ACCESSORIES — LOCKED

Mandatory: `ACCESSORY_FACE_PRODUCTION_WORKFLOW.md`, current faint literal canonical hero substrate/controller, face registration controller, and closest similar approved face accessory such as Meme Glass when relevant.

Architecture: **briefs → Stage A on ~6% faint literal canonical hero substrate → deterministic faint-substrate extraction → Illustrator.** There is no generative Stage B.

Stage A: faint hero remains literal/faint; accessory is the only full-opacity generated art; generate at final face-relative scale/position using literal eye/mouth/location anchors. Small assets stay small.

Then deterministic extraction: normalize 480×640 cells; use location/row-specific ROIs and thresholds; retain Stage-A accessory pixels; preserve needed low-saturation effects such as smoke; whiten faint substrate; no reconstruction; rebuild 1920×2560.

Do not use generative face isolation or full-color generated-hero subtraction; both were calibrated and rejected.

Retrieve repository-resident source assets yourself or use the fallback ZIP. If a controller/substrate is deterministically constructed from canonical assets during packaging, construct it yourself and include it in the batch ZIP.

For non-face accessories, do not blindly reuse face extraction. Use a literal controller for the actual location and validate a reusable location workflow when needed.

## Fresh-agent behavior

After repository review:

1. run the category conflict/compliance gate
2. sanitize briefs without changing identity
3. choose especially similar approved references
4. resolve exact fixed + batch-specific dependencies
5. attempt automatic repo binary retrieval
6. if binary transfer fails, use `DONT_DIE_COSMETIC_PRODUCTION_REFERENCES.zip`
7. verify every required file exists and is non-empty
8. create the exact category prompt/manifest/controller files
9. provide **one complete batch ZIP** containing everything the next generation step needs
10. explicitly PASS/FAIL returned sheets against the locked workflow
11. correct the smallest actual failure rather than reopening validated architecture
12. perform deterministic/file operations yourself when tools permit
13. keep calibration artifacts out of canonical production folders unless validated
14. leave final Illustrator work where the category workflow assigns it

The user should not be asked to manually edit prompts, manifests, metadata, registration transforms, repository workflow text, or rediscover canonical PNG/SVG references.

## Current completion state

Established production paths exist for all five top-level categories: HATS, RIGHT ARM, LEFT ARM, ARMOR / OUTFITS, ACCESSORIES.

LEFT ARM, ARMOR / OUTFITS, and FACE ACCESSORIES have explicit locked category/location workflows. HATS and RIGHT ARM are governed by the master spec, repeatable workflow, canonical placement/reference sheets, approved art, and Illustrator final-registration rules. Non-face accessory locations remain location-aware and should receive a validated controller/workflow when first encountered.

The live repository always supersedes this handoff if later work changes a workflow.