# Don't Die Cosmetic Art — Production Runtime Asset Manifest

## Purpose
For normal production the user supplies:
- category
- one cosmetic brief at a time
- repo/handoff context

The agent retrieves canonical assets and builds the generation package.

## Universal generation unit
**One brief → four variants → one 4×1 strip.**

Historical 4×4 assets remain valid source/reference material, but new generation and generative isolation should be 4×1 by default.

## User-facing ZIP contract
Read `00_GENERATION_UPLOAD_ZIP_STANDARD.md`.

Every generation ZIP is:
- flat; no subfolders
- directly Ctrl+A uploadable
- contains only files actually required by that exact generation invocation
- no README, checksums, package checks, audit logs, workflow docs, or unused references

Typical one-source package:
- `00_GENERATION_PROMPT.txt`
- `01_<SOURCE>.png`

Add `00_REFERENCE_ROLES.txt`, `00_INPUT_ORDER.txt`, manifests, or design references only when genuinely required by the current validated stage.

## Portability vs active references
Repo/fallback-kit availability does not make a file an active generation reference. Activate only the files required by the applicable category workflow.

Never make the user hunt for canonical files already in the repo. Retrieve them automatically. Use `DONT_DIE_COSMETIC_PRODUCTION_REFERENCES.zip` only as the session-level binary fallback.

## Category dependencies

### HATS
Use `HATS_PRODUCTION_WORKFLOW.md`, canonical head/placement/orientation assets, and only necessary approved DESIGN_ONLY references.

### RIGHT ARM
Use `RIGHT_ARM_PRODUCTION_WORKFLOW.md`, canonical hero/held-object placement authority, and only necessary approved DESIGN_ONLY references.

### LEFT ARM
Mandatory text authorities:
- `LEFT_ARM_ZERO_CONTACT_WORKFLOW.md`
- `LEFT_ARM_PRODUCTION_PROMPT_TEMPLATE.txt`

Primary visual source is the historical V3 exemplar sheet:
- `reference-sheets/LEFT_ARM_FINISHED_COSMETIC_EXEMPLAR_REFERENCE_4X4_V3.png`

For a new 4×1 job, crop one logical 2400×640 row from that historical controller and use the crop as `01_LEFT_ARM_V3_CONTROLLER_4X1.png`. Do not add a separate full-color MAIN HERO; the composite controller already contains hero/context.

Approved references such as Gold Armor, Gold Sword, or Mirror Shield are active only when the brief explicitly requires that design family, and remain DESIGN_ONLY.

### ARMOR / OUTFITS
Mandatory authorities:
- `ARMOR_OUTFIT_PRODUCTION_WORKFLOW.md`
- `ARMOR_STAGE_B_DETERMINISTIC_REGISTRATION.md`

Stage A requires the validated clean-room canonical geometry/anatomy authority stack. Stage B uses only the approved Stage A/A.5 artwork plus the known cape state; do not carry unrelated Stage-A design references into isolation.

### FACE ACCESSORIES
Mandatory authority:
- `ACCESSORY_FACE_PRODUCTION_WORKFLOW.md`

Use the validated ~6% faint literal canonical substrate/location controller. Do not add a full-color MAIN HERO through generic packaging.

### NON-FACE ACCESSORIES
Use only an already validated location-specific controller/workflow.

## Core principle
**Repo retrieval is agent work. Active-reference selection is stage-specific. User-facing generation ZIPs are flat, minimal, and 4×1-first.**
