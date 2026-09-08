# Don't Die Cosmetic Artwork — Repeatable Production Workflow

## Universal production unit
**One cosmetic brief → four variants → one horizontal 4×1 strip.**

Historical 4×4 assets remain valid sources/references. New production should not combine unrelated briefs into one generation.

## Shared art rules
- pure white background
- flat vector-like cartoon construction
- true-black ~5 px primary contour at canonical 480×640 scale
- hard-edged fills, low detail, sparse interior lines
- no cast shadow, texture, noise, or painterly rendering
- body-relative production scale; never enlarge to fill empty space
- simplify detail before increasing scale

## Packaging
User-facing generation ZIPs are flat and minimal. Read `00_GENERATION_UPLOAD_ZIP_STANDARD.md`.

## HATS
4×1 Stage A registered on canonical hero → foreground-only Stage B isolation → deterministic registration restoration → Illustrator.

Stage B omits geometry that belongs behind the in-game head/hair layer. Do not reconstruct it.

## RIGHT ARM
4×1 Stage A held-object generation → 4×1 Stage B isolation + minimal hidden-grip reconstruction → deterministic registration restoration → Illustrator.

Stage A owns body-relative scale/X/Y. Stage B owns isolated artwork and minimum completed grip geometry. Raw Stage-B scale drift is corrected deterministically.

## LEFT ARM
Authority: `LEFT_ARM_ZERO_CONTACT_WORKFLOW.md` + `LEFT_ARM_PRODUCTION_PROMPT_TEMPLATE.txt`.

- 2400×640 logical 4×1
- four 600×640 cells
- hero/context screen-right
- complete cosmetic screen-left
- zero contact
- no generated grip or hidden geometry
- no AI Stage B

Use a 4×1 row crop from historical `LEFT_ARM_FINISHED_COSMETIC_EXEMPLAR_REFERENCE_4X4_V3.png` as PRIMARY controller.

The tiny exemplar is a literal footprint constraint. If identity/detail cannot fit, simplify/delete detail. Never enlarge for recognizability or real-world size.

## ARMOR / OUTFITS
Authority: `ARMOR_OUTFIT_PRODUCTION_WORKFLOW.md` + `ARMOR_STAGE_B_DETERMINISTIC_REGISTRATION.md`.

Architecture:
**cape preflight → 4×1 validated clean-room Stage A → optional A.5 cape correction → 4×1 destructive Stage B → deterministic registration → Illustrator.**

If cape state is absent/ambiguous, ask the user before Stage A. KEEP capes are intentionally designed by Stage A to match the outfit. Stage B preserves/removes only.

Never replace the validated Armor Stage-A geometry/anatomy stack with faint-substrate generation; that experiment regressed hands and the viewer-left arm chain.

Armor hands: exactly three fingers + one thumb = four total digits.

## FACE ACCESSORIES
Authority: `ACCESSORY_FACE_PRODUCTION_WORKFLOW.md`.

Architecture:
**4×1 Stage A on ~6% faint literal canonical substrate → deterministic extraction → Illustrator.**

No generative Stage B. Only accessory artwork is full opacity; substrate stays faint/literal.

## NON-FACE ACCESSORIES
Use only a validated location-specific controller/workflow.

## Illustrator vectorization handoff
Authority: `ILLUSTRATOR_VECTOR_TRACE_WORKFLOW.md`.

For approved normal flat outlined rasters, the downstream architecture is:

**approved raster → TRACE PREP V3 → Illustrator Image Trace + Expand → manual vector cleanup/placement.**

Treat TRACE PREP V3 and Image Trace as one operational handoff:
- agent batch-processes all eligible rasters through `scripts/DONT_DIE_TRACE_PREP_V3.py` whenever tools permit;
- user places/selects all trace-ready images in Illustrator and invokes `scripts/DONT_DIE_IMAGE_TRACE.jsx` once.

Validated normal Image Trace baseline:
- Color / 30 colors
- Paths 25%
- Corners 70%
- Noise 4 px
- Abutting
- Fills only
- Ignore White
- Expand

Neon/glow/soft-effect assets are excluded from this flat trace baseline.

## Multi-strip handling
When 1–4 approved 4×1 strips need assembly, use only supplied strips. Shorten canvas height or leave unused lower rows blank. Never invent filler. Agent performs deterministic assembly.

## Failure/change control
- SYSTEM FAIL: validated controller/stage/scale/contact/registration architecture structurally failed.
- BRIEF FAIL: architecture works but explicit cosmetic detail is missed.

Freeze passing controls. Do not regenerate unrelated passing cosmetics. Do not redesign architecture for a BRIEF FAIL.

For repeated local brief failures that begin causing scale/architecture regression, retain the best passing-scale result and defer tiny Illustrator cleanup when appropriate.

Trace-only contour artifacts are downstream vectorization problems and do not justify reopening a passing generation architecture.
