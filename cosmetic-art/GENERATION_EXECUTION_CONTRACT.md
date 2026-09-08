# Don't Die Cosmetic Art — Generation Execution Contract

**Status: mandatory cross-category execution authority.**

## Core production unit
**One cosmetic brief → four variants → one 4×1 horizontal strip.**

Historical 4×4 assets may be used as sources/controllers, but new generative work should not combine unrelated briefs into one 4×4 generation.

## Authority roles
Every active visual must have one of these roles:
- `PRIMARY_CANVAS_AUTHORITY` — scale/placement/composition/contact authority assigned by category workflow
- `ANATOMY_AUTHORITY` — anatomy only
- `DESIGN_ONLY` — palette/material/theme/silhouette vocabulary only; never scale/pose/contact unless explicitly granted
- `STYLE_ONLY` — rendering language only

Do not add reference soup. A file is active only because the current category/stage requires it.

## Packaging
Read `00_GENERATION_UPLOAD_ZIP_STANDARD.md`.

User-facing generation ZIPs are flat and contain exactly what should be uploaded. No `GENERATION_INPUT/` folder. No README/package check/checksum/audit material. Include role/order files only when genuinely required.

## Prompt execution
Use the current category workflow/template. Do not replace a locked prompt with a generic summary. Preserve explicit brief constraints.

## Category maps

### HATS
4×1 Stage A registered hat generation → foreground-only Stage B isolation → deterministic registration restoration → Illustrator.

### RIGHT ARM
4×1 Stage A held-object generation on canonical hero → 4×1 Stage B isolation + minimal hidden-grip reconstruction → deterministic scale/X/Y restoration → Illustrator.

Stage A owns scale/X/Y. Stage B owns isolated art and minimal completed grip geometry. Presentation enlargement during Stage B is corrected deterministically, not regenerated solely for scale drift.

### LEFT ARM
4×1 Stage A only. Use the V3 zero-contact controller crop. Hero/context screen-right; complete cosmetic screen-left; zero contact. The tiny exemplar footprint is a literal spatial placeholder. If detail conflicts with footprint, remove detail; never enlarge. No AI Stage B.

### ARMOR / OUTFITS
4×1 Stage A with validated clean-room geometry/anatomy controls → optional A.5 cape correction → 4×1 Stage B destructive isolation → deterministic registration → Illustrator.

Do not change passing Stage-A anatomy to solve isolation. Cape state must be explicit before Stage A; if not specified, ask the user.

### FACE ACCESSORIES
4×1 Stage A on ~6% faint literal substrate → deterministic extraction → Illustrator. No generative Stage B.

### NON-FACE ACCESSORIES
Use only a validated location-specific workflow/controller.

## Failure control
Classify first:
- `SYSTEM FAIL` = validated architecture/controller/stage behavior structurally failed
- `BRIEF FAIL` = local cosmetic requirement missed while system passes

Do not redesign architecture for a BRIEF FAIL. Freeze passing controls.

## Core rule
**Preserve validated category architecture, use one brief per 4×1, keep user ZIPs flat/minimal, and never let subordinate references override primary scale/placement/contact authority.**
