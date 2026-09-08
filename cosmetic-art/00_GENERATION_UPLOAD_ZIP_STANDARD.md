# Don't Die Cosmetic Art — Generation Upload ZIP Standard

**Status: MANDATORY cross-category packaging and generation-unit authority.**

## Primary production unit: 4×1

All new cosmetic image-generation jobs default to **one cosmetic brief → four variants → one 4×1 horizontal strip**.

The former 4×4 multi-brief generation format is retired as the default production unit. Do not combine four unrelated cosmetic briefs into one generation merely to fill a 4×4 sheet.

Reasons:
- lower generation/edit complexity;
- reduced cross-row semantic contamination;
- fewer generic backend failures;
- easier BRIEF FAIL correction without regenerating passing cosmetics;
- cleaner Stage-B isolation/reconstruction;
- one brief remains the sole semantic target of each generation.

A category workflow may still have Stage A, Stage B, deterministic registration, extraction, or other validated stages. Changing the canvas unit to 4×1 does **not** remove those category-specific stages.

## Variable batch counts

The user may produce fewer than four cosmetics before a downstream isolation/reconstruction pass.

- One cosmetic = one 4×1 strip.
- Multiple approved strips may be processed independently or assembled for a downstream operation when useful.
- Never invent filler cosmetics merely to reach four rows.
- If a combined downstream sheet contains fewer than four strips, either crop the page height to the used rows or leave unused lower rows completely blank. Choose whichever is technically cleaner for that stage.
- Never duplicate a passing row as filler.
- Final deterministic assembly may use only the number of rows actually supplied.

## User-facing ZIP contract

The user uploads **everything in the ZIP** with Ctrl+A / drag-and-drop. Therefore every file inside the ZIP must be genuinely required by that exact generation invocation.

### Hard rules

1. **FLAT ZIP ONLY.** Never put files in subfolders.
2. **MINIMAL CONTENTS ONLY.** Include exactly the files required by the current generation stage.
3. `00_GENERATION_PROMPT.txt` is required unless the validated stage explicitly uses another instruction mechanism.
4. Include only active visual inputs required by the validated category/stage workflow.
5. `00_REFERENCE_ROLES.txt` only when multiple active visuals genuinely need role disambiguation.
6. `00_INPUT_ORDER.txt` only when multiple active visuals require non-obvious ordering.
7. Include manifests only when they are active semantic inputs required by that generation stage.
8. **NEVER include** package checks, SHA reports, README files, regression reports, transform logs, source-history copies, workflow documentation, portability libraries, or audit-only material.
9. If a reference is not supposed to be an active generation input, it must not be in the ZIP.
10. The ZIP root is the complete upload set.

## Default package shape

For a normal one-brief 4×1 job with one active visual:
- `00_GENERATION_PROMPT.txt`
- `01_<DESCRIPTIVE_SOURCE>.png`

Add other files only when genuinely required by the validated stage.

## Stage-B / reconstruction rule

Stage B also defaults to 4×1. Process each approved Stage-A cosmetic strip independently whenever possible. This prevents one cosmetic's semantics from contaminating another.

If several 4×1 strips are intentionally combined for one downstream pass:
- each strip remains semantically independent;
- use only supplied rows;
- unused lower space is blank or omitted by reducing canvas height;
- deterministic registration/reassembly remains the agent's responsibility after generative isolation where applicable.

## Historical 4×4 compatibility

Existing validated 4×4 assets remain usable as historical sources and controls. They do not need to be regenerated solely because production has moved to 4×1.

When a historical 4×4 source must undergo a new generative edit/isolation, prefer splitting it into four 4×1 jobs first rather than sending the full 4×4 edit.

## Relationship to portability/reference kits

`DONT_DIE_COSMETIC_PRODUCTION_REFERENCES.zip` is a session-level portability library, not a normal generation upload ZIP. Select only the exact active files required for the current 4×1 generation stage.

## Agent responsibility

The agent creates the finished flat upload ZIP. The user must not be asked to open the ZIP, choose a subset, navigate subfolders, remove metadata, rename files, or manually reconstruct the upload set.

Before presenting any generation ZIP, verify:

> If the user Ctrl+A uploads every file at ZIP root, will generation receive exactly and only the intended active inputs?

If NO, rebuild it.

## Core rule

**One brief → four variants → one 4×1 strip. User-facing ZIPs are flat, minimal, and directly uploadable in full. Fewer-than-four-strip downstream batches use only the supplied rows; no filler is invented.**