# Don't Die Cosmetic Art — Production Stage Orchestration

**Purpose:** Prevent a fresh agent from confusing an intermediate generation with a completed category deliverable.

This file controls orchestration/evaluation only. It does not redesign any validated art workflow.

## Universal rule

Before evaluating any returned image, determine and state:

`CATEGORY → CURRENT STAGE → CURRENT-STAGE ACCEPTANCE → NEXT REQUIRED STAGE → FINAL DELIVERABLE GATE`

An intermediate stage may PASS while the category remains IN PROGRESS.

Never use `CATEGORY PASS`, `LOCKED PASSING BASELINE`, `stop calibrating`, or move to another category until the applicable FINAL DELIVERABLE GATE has been satisfied.

Every evaluation must report two separate statuses:

- `CURRENT STAGE: PASS | BRIEF FAIL | SYSTEM FAIL`
- `CATEGORY: IN PROGRESS | COMPLETE`

A PASS at Stage A is not automatically a completed-category PASS.

## HATS

Validated workflow documentation describes the HATS process as a **registration/isolation approach**. A full-character sheet with hats worn on the canonical hero is registration-stage artwork, not the final isolated hat deliverable.

Orchestration:

1. **Stage A — registered hat generation**
   - hero/context may be visible as required by the validated registration setup
   - evaluate hat identity, head-relative scale, facing/orientation, attachment/baseline, style, and four useful variants
   - if Stage A passes, do NOT declare HATS complete
2. **Required downstream HATS isolation step**
   - continue using the existing validated HATS registration/isolation process
   - preserve the approved Stage-A hat artwork, scale, orientation, and registration behavior
   - final hat/head cosmetic deliverable must be object-only unless a specific validated workflow says otherwise
3. **Final HATS gate**
   - isolated hat artwork only
   - no hero/body/cape/pedestal/context in the final isolated deliverable
   - approved Stage-A identity/scale/orientation preserved
   - only after this gate passes may HATS be called COMPLETE

Do not invent a new isolation architecture merely because this orchestration file requires the downstream step. If exact historical isolation mechanics are not available in the active package/repo, report that evidence gap and recover the validated HATS isolation package/history before changing architecture.

## RIGHT ARM

Validated documented responsibilities:

- generation owns object identity, body-relative scale, broad orientation, silhouette/style, and continuous usable grip geometry
- exact canonical hand overlay/final registration belongs to Illustrator

Before calling RIGHT ARM complete, verify the current validated workflow's required generated stages have all been run and that the deliverable entering Illustrator is the intended object artwork rather than merely an unevaluated intermediate character sheet. Do not infer or invent an AI isolation stage from HATS or LEFT ARM. If the historical RIGHT ARM stage sequence is not explicitly available, recover it before declaring a category regression complete.

Final category gate: generated object artwork has passed all required validated generation stages and is ready for the documented Illustrator hand-overlay/registration step.

## LEFT ARM — LOCKED V3

Orchestration:

1. **Single generation stage** — visible hero/context screen-right + complete cosmetic screen-left + zero contact
2. **No AI Stage B/isolation/reconstruction**
3. **Illustrator** — extraction, final placement/rotation, optional modest enlargement, canonical hand overlay

A passing zero-contact generation is the completed AI-generation deliverable. Do not require hero removal by an AI Stage B.

## ARMOR / OUTFITS — LOCKED

Orchestration:

1. Stage A registered outfit generation
2. optional Stage A.5 only for cape correction/RESTYLE when required
3. Stage B destructive isolation using the same cape manifest
4. deterministic per-cell registration restoration
5. Illustrator

Stage A PASS means `CATEGORY: IN PROGRESS`.
Stage B PASS means `CATEGORY: IN PROGRESS`.
Only after deterministic registration restoration passes its exact final-sheet gate is the AI/deterministic production deliverable ready for Illustrator.

## ACCESSORIES — LOCATION AWARE

### FACE — LOCKED

Orchestration:

1. Stage A on ~6% faint literal canonical substrate
2. deterministic faint-substrate extraction
3. Illustrator

Stage A PASS means `CATEGORY: IN PROGRESS`.
There is no generative Stage B.
Only after deterministic extraction passes may the face-accessory production deliverable be considered ready for Illustrator.

### NON-FACE

Use only an already validated location-specific stage sequence. Do not infer a stage sequence from FACE, HATS, LEFT ARM, RIGHT ARM, or ARMOR. If no validated location workflow exists, stop before declaring completion.

## Failure classification remains separate

For the current stage, classify misses as:

- `SYSTEM FAIL` — validated controller/reference/stage/registration behavior was structurally violated
- `BRIEF FAIL` — architecture/stage behavior is correct but an explicit cosmetic requirement was missed

Neither classification changes the orchestration rule: an intermediate PASS is still `CATEGORY: IN PROGRESS` when another required stage remains.

## Required response format after every returned production image

State, in this order:

1. `CATEGORY:`
2. `CURRENT STAGE:`
3. `CURRENT STAGE STATUS: PASS | BRIEF FAIL | SYSTEM FAIL`
4. `CATEGORY STATUS: IN PROGRESS | COMPLETE`
5. concise acceptance/failure evidence
6. `NEXT REQUIRED STAGE:`
7. if another user-run generation is required, provide one complete ZIP for that stage; do not make the user reconstruct the package

## Core rule

**Never confuse "this image is a good intermediate result" with "this category is finished." Follow the validated stage graph to its final deliverable gate.**