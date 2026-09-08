# Don't Die Cosmetic Art — Fresh Agent Production Handoff

## User contract
Normal input is:

- `CATEGORY: HATS | RIGHT ARM | LEFT ARM | ARMOR / OUTFITS | ACCESSORIES`
- `BRIEF: <one cosmetic brief>`

One brief produces four variants in one horizontal 4×1 strip.

For ARMOR / OUTFITS: if cape state is not stated or unambiguous, ask **cape or no cape?** before Stage A.
For ACCESSORIES: resolve body location; ask only when genuinely ambiguous.

Canonical repo: `metzlernick/dontdie-assets/cosmetic-art`.

## Mandatory fresh read
Before packaging or evaluating, read current:
- `00_GENERATION_UPLOAD_ZIP_STANDARD.md`
- `DONT_DIE_COSMETIC_ART_SPEC.md`
- `REPEATABLE_PRODUCTION_WORKFLOW.md`
- `PRODUCTION_STAGE_ORCHESTRATION.md`
- `PRODUCTION_RUNTIME_ASSET_MANIFEST.md`
- `GENERATION_EXECUTION_CONTRACT.md`
- `PRODUCTION_PACKAGE_REGRESSION_GATES.md`
- applicable category workflow

Live repo wins over memory or historical calibration files.

## Portability
The user does not hunt for canonical files. Retrieve repo assets automatically. If runtime binary retrieval fails, use the session-level `DONT_DIE_COSMETIC_PRODUCTION_REFERENCES.zip`. Ask for that one fallback ZIP only if needed; never ask for individual canonical assets already in the repo.

## Upload ZIP contract
Every generation ZIP given to the user is:
- flat; no subfolders
- directly Ctrl+A uploadable
- contains exactly and only the files required by that generation invocation
- no README, package check, checksums, audit logs, workflow docs, or unused references

## Universal production unit
**One brief → four variants → one 4×1 strip.**

Historical 4×4 sources remain valid references. Do not batch unrelated new briefs into 4×4 generation.

## Stage orchestration
The agent owns stage tracking and reports:
- `CURRENT STAGE: PASS | BRIEF FAIL | SYSTEM FAIL`
- `CATEGORY: IN PROGRESS | COMPLETE`

If another generation stage is required, automatically build the next flat ZIP. If deterministic processing is required and tools permit it, perform it directly.

### HATS
4×1 registered Stage A → 4×1 foreground-only Stage B isolation → deterministic registration restoration → Illustrator.

Stage B keeps only hat geometry that belongs in front of/on top of the in-game head layer. Never reconstruct behind-head geometry.

### RIGHT ARM
4×1 Stage A held-object generation on canonical hero → 4×1 Stage B isolation + minimal hidden-grip reconstruction → deterministic scale/X/Y restoration → Illustrator.

Stage A owns scale/X/Y. Stage B owns isolated art + minimum completed grip. Presentation enlargement during Stage B is corrected deterministically rather than regenerated solely for scale drift.

### LEFT ARM
4×1 Stage A only → Illustrator. No AI Stage B.

Use the V3 controller as historical source and crop one logical 2400×640 row for the active 4×1 controller. Hero/context screen-right; complete cosmetic screen-left; zero contact.

**Hard scale rule:** the tiny screen-left exemplar is a literal spatial placeholder. Fit the whole requested cosmetic approximately inside that footprint. If detail conflicts, remove detail. Never enlarge.

### ARMOR / OUTFITS
Mandatory cape preflight. If cape state is absent/ambiguous, ask the user.

4×1 Stage A using the validated clean-room geometry/anatomy controls → optional A.5 cape correction/RESTYLE → 4×1 Stage B destructive isolation → deterministic registration → Illustrator.

Do not change the passing Stage-A hand/viewer-left-arm architecture to make isolation easier. Faint-substrate Armor Stage A is rejected.

If KEEP, Stage A intentionally designs the cape to match the outfit. Stage B preserves/removes; it does not restyle.

### FACE ACCESSORIES
4×1 Stage A on ~6% faint literal canonical substrate → deterministic faint-substrate extraction → Illustrator. No generative Stage B.

### NON-FACE ACCESSORIES
Use only an already validated location-specific workflow/controller.

## Failure classification
### SYSTEM FAIL
Validated controller/stage/scale/contact/registration architecture failed structurally.

### BRIEF FAIL
Architecture passes but one explicit cosmetic constraint was missed.

Do not redesign category architecture for a BRIEF FAIL. Freeze passing controls. If repeated local prompt escalation starts causing scale or architecture regression, retain the best passing-scale result and defer tiny cleanup to Illustrator when appropriate.

## Backend failures
A generic image-generation backend error is not proof that the package or workflow is wrong. Because 4×1 is already the normal production unit, retry the same valid 4×1 once before changing anything. Do not redesign validated architecture because of a generic tool error.

## Normal fresh-session workflow
1. User sends category + one brief.
2. Agent reads repo authorities and retrieves required assets.
3. Agent asks only genuinely required preflight question (e.g. Armor cape state).
4. Agent returns one flat upload ZIP for the current stage.
5. User uploads everything in that ZIP to an image-generation chat and says `go`.
6. User returns the result.
7. Agent evaluates it and automatically continues through required stages/deterministic processing.
8. Repeat with the next cosmetic.

The user should never manually edit prompts/manifests, select files from inside a ZIP, hunt repo assets, remember stage sequences, or composite rows.
