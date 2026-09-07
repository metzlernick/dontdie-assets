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

## HATS — VALIDATED v6.7/v6.8

Active authority: `HATS_PRODUCTION_WORKFLOW.md`.

Historical recovery confirms the validated sequence:

1. **Stage A — v6.7 exact MAIN HERO edit**
   - exact canonical MAIN HERO 4×4 base is the edit base
   - add hat pixels only
   - hero remains registration context except where naturally occluded by hats
   - evaluate identity, head-relative scale, facing/orientation, attachment, style, and four useful variants
   - Stage A PASS = `CATEGORY: IN PROGRESS`
2. **Stage B — v6.8 HAT extraction/cleanup**
   - this is not new cosmetic generation
   - input = approved Stage-A composite
   - controller = `archive-calibration/HAT_EXTRACTION_MASK_4X4.png`
   - canonical mask geometry per cell: X=45–355, Y=25–325
   - preserve existing hats; remove MAIN HERO/body/face/hair/clothing/pedestal/context; restore pure white
   - no redesign, redraw, move, resize, rotate, recenter, recolor, simplification, or new details
3. **Final HATS gate**
   - 16 isolated hat/head cosmetics only
   - pure white background
   - no hero/body/cape/pedestal/context
   - Stage-A identity/scale/orientation/registration preserved
   - only after this gate passes may HATS be called COMPLETE

If an image-model export arrives at a noncanonical raster size while preserving the logical 4×4 composition, normalize the whole sheet proportionally to 1920×2560 before Stage B; do not alter cells independently.

## RIGHT ARM

Validated documented responsibilities:
- generation owns object identity, body-relative scale, broad orientation, silhouette/style, and continuous usable grip geometry
- exact canonical hand overlay/final registration belongs to Illustrator

Before calling RIGHT ARM complete, verify the current validated workflow's required generated stages have all been run and that the deliverable entering Illustrator is the intended object artwork rather than merely an unevaluated intermediate character sheet. Do not infer or invent an AI isolation stage from HATS or LEFT ARM. If the historical RIGHT ARM stage sequence is not explicitly available, recover it before declaring a category regression complete.

Final category gate: generated object artwork has passed all required validated generation stages and is ready for the documented Illustrator hand-overlay/registration step.

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

Neither classification changes orchestration: an intermediate PASS remains `CATEGORY: IN PROGRESS` when another required stage remains.

## Required response format after every returned production image

1. `CATEGORY:`
2. `CURRENT STAGE:`
3. `CURRENT STAGE STATUS: PASS | BRIEF FAIL | SYSTEM FAIL`
4. `CATEGORY STATUS: IN PROGRESS | COMPLETE`
5. concise acceptance/failure evidence
6. `NEXT REQUIRED STAGE:`
7. if another user-run generation is required, provide one complete ZIP for that stage; do not make the user reconstruct the package

## Core rule

**Never confuse a good intermediate result with a finished category. Follow the validated stage graph to its final deliverable gate.**