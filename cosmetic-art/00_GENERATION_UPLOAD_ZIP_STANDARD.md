# Don't Die Cosmetic Art — Generation Upload ZIP Standard

**Status: MANDATORY cross-category packaging authority.**

This rule applies whenever the agent creates a ZIP that the user will upload into a fresh image-generation chat.

## User-facing ZIP contract

The user uploads **everything in the ZIP** with Ctrl+A / drag-and-drop. Therefore every file inside the ZIP must be genuinely required by that exact generation invocation.

### Hard rules

1. **FLAT ZIP ONLY.** Never put files in subfolders. No `GENERATION_INPUT/`, reference-pack folder, audit folder, nested package, or other directory inside a user-upload generation ZIP.
2. **MINIMAL CONTENTS ONLY.** Include exactly the files that must be uploaded for the current generation stage. Do not include files merely because they are useful for audit, portability, provenance, or pipeline bookkeeping.
3. `00_GENERATION_PROMPT.txt` is required for a generation ZIP unless the validated stage explicitly uses another instruction mechanism.
4. Include only the active visual input(s) required by the validated category/stage workflow.
5. `00_REFERENCE_ROLES.txt` is included only when the generation model genuinely needs role disambiguation among multiple active visuals. If there is one unambiguous visual input, omit it unless the validated workflow explicitly requires it.
6. `00_INPUT_ORDER.txt` is included only when multiple active visuals must be supplied in a specific order and the file is genuinely needed by the generation chat. Do not include it as generic metadata.
7. Include manifests only when they are active semantic input required by that generation stage (for example, a required cape manifest). Do not include generic manifests/checks.
8. **NEVER include** `PACKAGE_CHECK.json`, SHA/integrity reports, README files, regression reports, transform logs, source-history copies, workflow documentation, portability libraries, or other audit-only material in a generation-upload ZIP.
9. Audit/provenance/integrity information may be retained by the agent separately, committed to the repo when appropriate, or included in a separate final/archive package only if the user asks. It does not belong in the upload ZIP.
10. If a reference is not supposed to be an active image-generation input, it must not be in the upload ZIP.
11. The ZIP root is the upload set. There is no distinction between 'files in the ZIP' and 'files the user should upload.'

## Default package shapes

### One active visual
Normally exactly:
- `00_GENERATION_PROMPT.txt`
- `01_<DESCRIPTIVE_SOURCE>.png`

### Multiple active visuals
Normally:
- `00_GENERATION_PROMPT.txt`
- required active visual files in explicit numeric order
- `00_REFERENCE_ROLES.txt` only when needed to prevent authority ambiguity
- `00_INPUT_ORDER.txt` only when needed to preserve non-obvious ordering
- any stage-specific semantic manifest only if generation actually consumes it

All files remain at ZIP root.

## Generic image-generation backend failure fallback

A generic backend/tool failure after a valid package was successfully submitted is not evidence that the ZIP contents or category architecture are wrong.

For multi-row 4×4 **edit/isolation** stages:

1. Retry the same valid flat 4×4 package once.
2. If the same generic backend failure repeats with no input-specific reason, reduce execution complexity only: split the source into independent **4×1 row jobs**.
3. Each 4×1 ZIP remains flat and minimal, normally only the row-specific `00_GENERATION_PROMPT.txt` plus that row source image.
4. Preserve the same stage semantics; do not simplify or redesign the category workflow merely to fit the fallback.
5. After all row jobs pass, the agent recombines them and performs any normal downstream deterministic scale/registration restoration itself.
6. The user must not manually composite the rows.

This fallback is an execution-reliability workaround, not a new category architecture. It has been validated on RIGHT ARM Stage-B isolation: a 4×1 fishing-rod isolation succeeded after repeated generic 4×4 backend failures. Raw presentation enlargement was accepted as normal Stage-B drift and is corrected deterministically from Stage A.

## Relationship to portability/reference kits

`DONT_DIE_COSMETIC_PRODUCTION_REFERENCES.zip` is a session-level portability library and is **not** a normal per-generation upload ZIP. The agent may use it to obtain canonical dependencies, but must extract/select only the exact active files required for the current generation stage when creating the user's batch ZIP.

Older documentation that describes putting portability/audit material outside `GENERATION_INPUT/` inside the same user ZIP is superseded for user-facing generation packages by this standard.

## Agent responsibility

The agent decides what the generation invocation actually requires, creates the finished flat ZIP, and gives the user that single ZIP. The user must not be asked to open the ZIP, choose a subset, navigate subfolders, remove metadata, rename files, or manually reconstruct the upload set.

Before presenting any generation ZIP, perform this gate:

> If the user Ctrl+A uploads every file at ZIP root, will the generation chat receive exactly and only the intended active inputs?

If NO, rebuild the ZIP before giving it to the user.

## Core rule

**Every user-facing generation ZIP is flat, minimal, and directly uploadable in full. Generic 4×4 backend failures are handled by a 4×1 execution fallback without changing validated category architecture.**