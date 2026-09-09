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
- `ILLUSTRATOR_VECTOR_TRACE_WORKFLOW.md`
- applicable category workflow

Live repo wins over memory or historical calibration files.

## Portability
The user does not hunt for canonical files. Retrieve repo assets automatically. If runtime binary retrieval fails, use the session-level `DONT_DIE_COSMETIC_PRODUCTION_REFERENCES.zip`. Ask for that one fallback ZIP only if needed; never ask for individual canonical assets already in the repo.

## Upload ZIP contract
Every generation ZIP given to the user is flat, directly Ctrl+A uploadable, and contains exactly the files required by that generation invocation. No README, package check, checksums, audit logs, workflow docs, or unused references.

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

### RIGHT ARM
4×1 Stage A held-object generation on canonical hero → 4×1 Stage B isolation + minimal hidden-grip reconstruction → deterministic scale/X/Y restoration → Illustrator.

### LEFT ARM
4×1 Stage A only → Illustrator. No AI Stage B. Use the V3 controller as historical source and crop one logical 2400×640 row for the active 4×1 controller. Hero/context screen-right; complete cosmetic screen-left; zero contact. The tiny screen-left exemplar is a literal spatial placeholder; fit the whole requested cosmetic approximately inside that footprint.

### ARMOR / OUTFITS
Mandatory cape preflight. 4×1 Stage A using validated clean-room controls → optional A.5 cape correction/RESTYLE → 4×1 Stage B destructive isolation → deterministic registration → Illustrator.

### FACE ACCESSORIES
4×1 Stage A on ~6% faint literal canonical substrate → deterministic faint-substrate extraction → Illustrator. No generative Stage B.

### NON-FACE ACCESSORIES
Use only an already validated location-specific workflow/controller.

## Illustrator vector handoff
For normal flat outlined approved rasters, `ILLUSTRATOR_VECTOR_TRACE_WORKFLOW.md` is the authority.

The validated Illustrator production step is one sheet at a time using `scripts/DONT_DIE_IMAGE_TRACE.jsx`.

Locked script settings:
- Color / 30 max colors
- `pathFitting = 1.5`
- `cornerAngle = 35`
- `minArea = 2`
- fills on / strokes off
- Ignore Color White OFF (`ignoreWhite = false`)

Locked script sequence:
**Image Trace → Expand Trace → scripted Live Pathfinder Divide → Expand Appearance → Ungroup.**

The Expand Appearance step is required in the script because ExtendScript invokes the live Pathfinder Divide command; it bakes the result so final cleanup/deletion operates on ordinary vector paths.

Trace-prep output must have a pure-white exterior and no dark-gray antialias fringe around the black outline. Do not add a second rim or globally quantize colors. Tiny imperfect circles after otherwise passing tracing are local manual cleanup, not a reason to change the global trace settings.

Neon/glow/soft-effect cosmetics are excluded from this flat trace baseline.

## Failure classification
### SYSTEM FAIL
Validated controller/stage/scale/contact/registration architecture or downstream trace architecture failed structurally.

### BRIEF FAIL
Architecture passes but one explicit cosmetic constraint was missed.

Do not redesign category architecture for a BRIEF FAIL. Freeze passing controls.

## Backend failures
A generic image-generation backend error is not proof that the package or workflow is wrong. Retry the same valid 4×1 once before changing anything.

## Normal fresh-session workflow
1. User sends category + one brief.
2. Agent reads repo authorities and retrieves required assets.
3. Agent asks only genuinely required preflight questions.
4. Agent returns one flat upload ZIP for the current stage.
5. User uploads everything in that ZIP to an image-generation chat and says `go`.
6. User returns the result.
7. Agent evaluates it and automatically continues through required stages/deterministic processing.
8. For approved normal flat rasters headed to Illustrator, agent performs the validated deterministic clean-edge trace preparation.
9. User places trace-ready files in Illustrator, selects exactly one sheet, and invokes `DONT_DIE_IMAGE_TRACE.jsx`.
10. Script returns expanded/divided/flattened/ungrouped ordinary vector artwork for manual deletion/cleanup.
11. Repeat with the next cosmetic.

The user should never manually edit prompts/manifests, select files from inside a ZIP, hunt repo assets, remember stage sequences, composite rows, or manually preprocess trace rasters.
