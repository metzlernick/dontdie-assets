# Don't Die Cosmetic Art — Production Stage Orchestration

**Purpose:** Control stage progression and the primary 4×1 production architecture.

## Universal production unit

**One cosmetic brief → four variants → one 4×1 horizontal strip.**

This supersedes 4×4 multi-brief generation as the normal production architecture across HATS, RIGHT ARM, LEFT ARM, ARMOR/OUTFITS, and ACCESSORIES unless a category has an explicit technical exception.

Historical 4×4 assets remain valid references/sources. Do not regenerate them merely to conform to 4×1. New generative work and new generative isolation should prefer 4×1.

If the user supplies fewer than four approved 4×1 strips for a downstream operation, use only those strips. Either reduce total canvas height to the number of supplied rows or leave unused lower rows completely blank. Never invent or duplicate filler rows.

Before evaluating any returned image, state:
`CATEGORY → CURRENT STAGE → CURRENT-STAGE ACCEPTANCE → NEXT REQUIRED STAGE → FINAL DELIVERABLE GATE`.

Every evaluation reports:
- `CURRENT STAGE: PASS | BRIEF FAIL | SYSTEM FAIL`
- `CATEGORY: IN PROGRESS | COMPLETE`

## HATS

1. Stage A — registered hat generation, one brief/four variants/4×1.
2. Stage B — foreground-only destructive isolation of that same 4×1; retain only geometry belonging in front of/on top of the in-game HEAD layer; do not reconstruct behind-head geometry.
3. Deterministic per-cell registration restoration: Stage A owns scale/X/Y; Stage B owns isolated foreground artwork/occlusion.
4. Final gate: four isolated foreground-only hats at approved Stage-A registration.

## RIGHT ARM

1. Stage A — registered held-object generation, one brief/four variants/4×1. Full hero remains visible as registration context. Object is in viewer-right raised hand. Approximate canonical grip center remains X=360,Y=344 per 480×640 cell; principal handle axis ~75° where applicable.
2. Stage B — isolate the four objects; remove hero/head/hair/body/hands/cape/pedestal/context; reconstruct only minimum handle/grip geometry hidden by fist; no hand-shaped holes or surviving skin/glove pixels.
3. Deterministic registration restoration: Stage A owns scale/X/Y; Stage B owns isolated art and completed hidden grip. Raw presentation enlargement is acceptable Stage-B drift and is corrected deterministically.
4. Final gate: four standalone objects, correct Stage-A production registration, continuous usable grip geometry.

Validated reliability note: 4×1 fishing-rod Stage-B isolation succeeded after repeated generic 4×4 backend failures. This helped motivate making 4×1 the primary architecture rather than merely a fallback.

## LEFT ARM

1. Stage A only — one brief/four variants/4×1, visible hero/context screen-right + complete cosmetic screen-left + zero contact.
2. No AI Stage B/isolation/reconstruction under the locked V3 architecture.
3. Illustrator handles extraction/final placement/rotation/optional modest enlargement/canonical hand overlay.

## ARMOR / OUTFITS

1. Stage A registered outfit generation — one brief/four variants/4×1.
2. Optional Stage A.5 only for cape correction/RESTYLE when required.
3. Stage B / isolation architecture remains subject to the validated Armor workflow and any later explicitly validated deterministic replacement.
4. Deterministic per-cell registration restoration.
5. Illustrator.

### ARMOR STAGE-A FREEZE — HARD RULE

The move from 4×4 to 4×1 changes **batch layout only**. It does NOT authorize changing the validated Armor Stage-A generation method.

Normal Armor Stage A must preserve the already-validated clean-room authority stack and behavior from `ARMOR_OUTFIT_PRODUCTION_WORKFLOW.md`: literal canonical hero substrate, canonical-derived proportion control, canonical hand anatomy, viewer-left arm-chain authority, canonical pose/proportions, and outfit-specific four-digit hands.

Do **not** replace the validated full-strength canonical Stage-A substrate with a faint-substrate/extraction experiment, and do not weaken/remove the hand or viewer-left-arm authorities in order to make downstream isolation easier.

A downstream isolation problem must never be fixed by changing an already-passing Stage A. This is the universal freeze-passing-controls rule applied to stage architecture.

A faint-substrate Armor Stage-A experiment was explicitly rejected because it regressed outfit-specific hands and the validated viewer-left arm chain. It is not production authority and must not be reused.

Armor cape semantics remain local to the single 4×1 cosmetic: KEEP/NONE/RESTYLE remains authoritative; no-hidden-geometry-reconstruction remains authoritative.

Historical 4×4 Armor sheets should normally be split into 4×1 rows before any new downstream generative operation, but their approved Stage-A artwork itself remains the source of truth.

## ACCESSORIES

### FACE
1. Stage A — one brief/four variants/4×1 on the validated faint literal canonical substrate.
2. Deterministic faint-substrate extraction.
3. Illustrator.

No generative Stage B for validated FACE accessories.

### NON-FACE
Use only an already validated location-specific stage sequence, but use one brief/four variants/4×1 as the default canvas unit unless the location workflow requires otherwise.

## Multi-strip downstream operations

When multiple approved 4×1 strips need common downstream processing:
- process strips independently whenever possible;
- if combined, preserve strict row independence;
- accept 1–4 supplied strips;
- canvas may be 1920×640, 1920×1280, 1920×1920, or 1920×2560 for 1–4 canonical-height rows respectively;
- alternatively a taller canonical canvas may leave unused lower rows pure blank white;
- never populate missing rows with generated filler;
- deterministic final assembly is performed by the agent, not the user.

## Failure classification

- `SYSTEM FAIL` — validated controller/reference/stage/registration behavior structurally violated.
- `BRIEF FAIL` — architecture/stage behavior correct but an explicit cosmetic requirement missed.
- Generic backend/tool failure without an input-specific cause is not itself an artwork SYSTEM FAIL.

Because each brief is now its own 4×1, a failure should normally affect only that cosmetic. Do not regenerate unrelated passing strips.

## Required response after returned production image

1. CATEGORY
2. CURRENT STAGE
3. CURRENT STAGE STATUS
4. CATEGORY STATUS
5. concise evidence
6. NEXT REQUIRED STAGE
7. if another user-run generation is required, provide one flat minimal upload ZIP

## Core rule

**The scalable production architecture is one brief → four variants → 4×1, but validated category-specific stage controls remain frozen. Never solve a downstream failure by regressing an already-passing upstream stage.**