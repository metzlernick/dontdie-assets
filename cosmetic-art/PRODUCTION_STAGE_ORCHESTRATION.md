# Don't Die Cosmetic Art — Production Stage Orchestration

**Purpose:** Prevent a fresh agent from confusing an intermediate generation with a completed category deliverable.

This file controls orchestration/evaluation only. It does not redesign validated art workflows.

## Universal rule

Before evaluating any returned image, determine and state:

`CATEGORY → CURRENT STAGE → CURRENT-STAGE ACCEPTANCE → NEXT REQUIRED STAGE → FINAL DELIVERABLE GATE`

An intermediate stage may PASS while the category remains IN PROGRESS.

Never use `CATEGORY PASS`, `LOCKED PASSING BASELINE`, `stop calibrating`, or move to another category until the applicable FINAL DELIVERABLE GATE has been satisfied.

Every evaluation must report two separate statuses:
- `CURRENT STAGE: PASS | BRIEF FAIL | SYSTEM FAIL`
- `CATEGORY: IN PROGRESS | COMPLETE`

A generic image-generation backend/tool error with no input-specific reason is not automatically a SYSTEM FAIL or BRIEF FAIL. If a valid 4×4 edit/isolation request repeatedly fails generically, use the documented 4×1 row fallback while preserving the same category stage semantics.

## HATS — VALIDATED / LOCKED

Active authority: `HATS_PRODUCTION_WORKFLOW.md`.

Validated sequence:

1. **Stage A — registered hat generation**
   - canonical hero registration context
   - approved equipped-hat scale regime relative to hero head
   - evaluate identity, head-relative scale, facing/orientation, attachment, style, and four useful variants
   - Stage A PASS = `CATEGORY: IN PROGRESS`
2. **Stage B — foreground-only destructive isolation**
   - input = approved Stage-A composite
   - retain only cosmetic geometry that belongs in front of/on top of the in-game HEAD layer
   - omit all cosmetic geometry that would be behind the head/hair; do not reconstruct it
   - remove hero/body/face/hair/clothing/pedestal/context; restore pure white
   - Stage B artwork/occlusion PASS = `CATEGORY: IN PROGRESS`
3. **Deterministic per-cell registration restoration**
   - Stage A = scale/X/Y authority
   - Stage B = isolated foreground artwork/occlusion authority
   - uniform scale + X/Y only; no redraw/regeneration/hidden reconstruction
   - rebuild exact 1920×2560 / 480×640 cells
4. **Final HATS gate**
   - 16 foreground-only hat-layer cosmetics on pure white
   - no hero/body/cape/pedestal/context
   - no behind-head geometry reconstructed
   - approved Stage-A scale/registration restored
   - only after this gate passes may HATS be called COMPLETE

A clean Stage-B isolation that enlarges/recenters hats is not final registration. Isolation cleanliness and registration are separate gates; deterministic restoration must still be applied.

## RIGHT ARM — VALIDATED / ACTIVE

Active authority: `RIGHT_ARM_PRODUCTION_WORKFLOW.md`.

Validated sequence:

1. **Stage A — registered held-object generation**
   - PRIMARY base = `registration/MAIN_HERO_REGISTRATION_4X4.png`
   - full hero remains visible as registration context
   - generate exactly one viewer-right held object per hero
   - Stage A owns identity, body-relative scale, broad orientation, grip placement, silhouette/style, and visible held-object geometry
   - approximate grip center X=360, Y=344 per 480×640 cell; principal handle axis ~75° from horizontal
   - Stage A PASS = `CATEGORY: IN PROGRESS`
2. **Stage B — isolation + minimal hidden-grip reconstruction**
   - input = approved Stage-A artwork
   - remove hero/head/hair/body/hands/cape/pedestal/context
   - preserve the visible item identity/design/colors/orientation and legitimate attached parts
   - reconstruct only the minimum handle/grip segment hidden by the fist
   - require continuous grip geometry, no hand-shaped holes, no surviving skin/glove pixels, and no redesign outside the former hand overlap
   - raw presentation enlargement/X/Y drift does not by itself fail faithful isolation
   - Stage B PASS = `CATEGORY: IN PROGRESS`
3. **Deterministic per-cell registration restoration**
   - Stage A = scale/X/Y authority
   - Stage B = isolated-art + completed-hidden-grip authority
   - restore with uniform scale + translation only
   - long/thin items such as fishing rods retain legitimate Stage-A extent rather than being normalized to compact weapon sizes
   - rebuild exact 1920×2560 / 480×640 for a full batch
4. **Final RIGHT ARM gate**
   - isolated standalone items exist in all 16 cells
   - hero/hand/context absent
   - Stage-A production scale/X/Y restored
   - handle/grip continuity usable
   - only after this gate passes may RIGHT ARM be marked `CATEGORY: COMPLETE`
5. **Illustrator downstream**
   - final vector tracing/cleanup
   - canonical right-hand/finger overlay in the final game asset

### RIGHT ARM backend-failure fallback

If a valid 4×4 Stage-B isolation request fails twice with the same generic backend error and no input-specific cause:
- split into four independent 4×1 row isolation jobs;
- preserve the exact Stage-B semantics;
- after rows pass, recombine and deterministically restore each cell against Stage A;
- do not redesign the RIGHT ARM architecture.

This fallback is validated by a successful 4×1 fishing-rod isolation after repeated generic 4×4 failures. The isolated rods were presentation-enlarged; isolation remained usable and scale/X/Y is restored deterministically from Stage A.

## LEFT ARM — LOCKED V3

1. Single generation stage — visible hero/context screen-right + complete cosmetic screen-left + zero contact
2. No AI Stage B/isolation/reconstruction
3. Illustrator — extraction, final placement/rotation, optional modest enlargement, canonical hand overlay

A passing zero-contact generation is the completed AI-generation deliverable. Do not require hero removal by an AI Stage B.

## ARMOR / OUTFITS — LOCKED

1. Stage A registered outfit generation
2. optional Stage A.5 only for cape correction/RESTYLE when required
3. Stage B destructive isolation using the same cape manifest
4. deterministic per-cell registration restoration
5. Illustrator

Stage A PASS = `CATEGORY: IN PROGRESS`.
Stage B PASS = `CATEGORY: IN PROGRESS`.
Only after deterministic registration restoration passes its exact final-sheet gate is the production deliverable ready for Illustrator.

If an Armor 4×4 edit/isolation stage hits repeated generic backend failures, the cross-category 4×1 execution fallback may be used only as a transport/execution workaround. Cape ownership, cell independence, no-reconstruction, and deterministic-registration rules remain unchanged.

## ACCESSORIES — LOCATION AWARE

### FACE — LOCKED
1. Stage A on ~6% faint literal canonical substrate
2. deterministic faint-substrate extraction
3. Illustrator

Stage A PASS = `CATEGORY: IN PROGRESS`.
There is no generative Stage B.
Only after deterministic extraction passes may the face-accessory production deliverable be ready for Illustrator.

### NON-FACE
Use only an already validated location-specific stage sequence. Do not infer a stage sequence from FACE, HATS, LEFT ARM, RIGHT ARM, or ARMOR. If no validated location workflow exists, stop before declaring completion.

## Failure classification remains separate

- `SYSTEM FAIL` — validated controller/reference/stage/registration behavior was structurally violated
- `BRIEF FAIL` — architecture/stage behavior is correct but an explicit cosmetic requirement was missed

A generic backend/tool failure without an input-specific cause is not enough by itself to classify the artwork workflow as SYSTEM FAIL.

Neither classification changes orchestration: an intermediate PASS remains `CATEGORY: IN PROGRESS` when another required stage remains.

## Required response format after every returned production image

1. `CATEGORY:`
2. `CURRENT STAGE:`
3. `CURRENT STAGE STATUS: PASS | BRIEF FAIL | SYSTEM FAIL`
4. `CATEGORY STATUS: IN PROGRESS | COMPLETE`
5. concise acceptance/failure evidence
6. `NEXT REQUIRED STAGE:`
7. if another user-run generation is required, provide one flat minimal upload ZIP for that stage; do not make the user reconstruct the package

## Core rule

**Never confuse a good intermediate result with a finished category. Follow the validated category-specific stage graph to its final deliverable gate. Backend reliability workarounds may reduce execution complexity, but they do not rewrite category architecture.**