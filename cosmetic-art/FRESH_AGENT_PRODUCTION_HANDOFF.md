# Don't Die Cosmetic Art — Fresh Agent Production Handoff

## User contract

Normal input from the user is only:

- CATEGORY: HATS | RIGHT ARM | LEFT ARM | ARMOR / OUTFITS | ACCESSORIES
- ROW 1–4 cosmetic briefs

For ACCESSORIES, resolve body location; ask only if genuinely ambiguous.

Canonical repo: `metzlernick/dontdie-assets/cosmetic-art`.

# THREE HARD CONTRACTS

## 1. Portability
The user does not hunt for canonical files. Read `PRODUCTION_RUNTIME_ASSET_MANIFEST.md`. Retrieve repo binaries automatically; if runtime transfer fails, use the session-level `DONT_DIE_COSMETIC_PRODUCTION_REFERENCES.zip`. If neither is available, ask for that ONE permanent ZIP only, never individual canonical PNG/SVG files.

## 2. Validated-setup preservation
Fresh-agent packaging must reproduce the applicable validated category/stage generation setup. It may package and role-label that setup; it may not silently add references, remove references, change reference order, resize/re-encode controllers, duplicate hero/context images, or rewrite locked prompt templates.

**The permanent reference ZIP is a portability library, not an instruction to activate every contained image.** A file becomes an active generation reference only because the applicable category/stage workflow requires it for the current task.

## 3. Generation execution
Read `GENERATION_EXECUTION_CONTRACT.md` and run `PRODUCTION_PACKAGE_REGRESSION_GATES.md` before every image-generation stage.

Every active image must be role-labeled as PRIMARY_CANVAS_AUTHORITY, ANATOMY_AUTHORITY, DESIGN_ONLY, or STYLE_ONLY. No unlabeled image may be supplied to generation, but role-labeling never authorizes an otherwise unnecessary image.

A batch ZIP may contain larger portability/audit material outside `GENERATION_INPUT/`. The actual generation stage uses only the exact validated active visual set plus `00_GENERATION_PROMPT.txt`, `00_REFERENCE_ROLES.txt`, and `00_INPUT_ORDER.txt` when multiple visuals are active.

If the PRIMARY controller is missing/misnamed/substituted/transformed, if its bytes/dimensions changed, if reference order changed, if a locked prompt was rewritten, or if a subordinate design reference could control pose/scale/context/contact, STOP before generation.

# Mandatory failure classification — BEFORE modifying anything

Every failed or imperfect output must first be classified as exactly one of these:

## SYSTEM FAIL
Use this only when the validated production system itself was not obeyed or failed structurally. Examples: wrong/missing controller, wrong active-reference set/order, broken scale class, wrong hero/contact behavior, overlap where zero-contact is required, architecture/stage violation, wrong isolation behavior, corrupted registration, or a repeatable failure that persists despite the brief being correctly preserved and executed.

A SYSTEM FAIL may justify changing reusable workflow/controller/package infrastructure, but only after the concrete system-level cause is identified.

## BRIEF FAIL
Use this when the validated system behavior is otherwise correct and the miss is local to one cosmetic brief: wrong direction/tilt, omitted required feature, wrong count, color, symbol, surface orientation, row identity detail, or another explicit user constraint.

A BRIEF FAIL does **not** justify reopening or redesigning category architecture. Fix the smallest brief-preservation, sanitization, or prompt-adherence issue needed for that constraint.

If uncertain, default to **no architecture change** until evidence establishes a SYSTEM FAIL. Do not convert a local cosmetic-detail miss into a system redesign proposal.

This classification rule is an evaluation/change-control gate only. It does not alter the validated workflows of HATS, RIGHT ARM, LEFT ARM, ARMOR / OUTFITS, or ACCESSORIES.

# Mandatory fresh read

Before packaging/generation read current:

- `DONT_DIE_COSMETIC_ART_SPEC.md`
- `REPEATABLE_PRODUCTION_WORKFLOW.md`
- `PRODUCTION_SESSION_STARTER.txt`
- `CANONICAL_REGISTRATION_SYSTEM.md`
- `PRODUCTION_RUNTIME_ASSET_MANIFEST.md`
- `GENERATION_EXECUTION_CONTRACT.md`
- `PRODUCTION_PACKAGE_REGRESSION_GATES.md`
- applicable category/location workflow/controller
- relevant canonical reference sheets
- especially similar approved art when actually required by the brief

Live repo wins for rules. Permanent reference ZIP is primarily a binary portability layer.

# Global art invariants

Unless category workflow overrides: 1920×2560; 4×4; 480×640 cells; one brief/row; four moderate variations; pure white; no visible grid/gutters/labels; body-relative rather than presentation-centered; flat vector-like Don't Die art; true-black ~5 px primary contour at canonical scale; hard fills; low detail; no texture/painterly rendering/cast shadow. Never enlarge merely to fill empty space. Simplify detail before increasing scale.

# Category execution

## HATS
Preserve the currently validated hat input topology and order. PRIMARY spatial authority = `reference-sheets/HATS_PLACEMENT_REFERENCE.png` plus current validated orientation controller when required. MAIN HERO, orientation, approved hats, and style sheets are active only when the validated hat workflow calls for them. Approved hats remain DESIGN_ONLY. Never let standalone approved hats become independently centered/presentation-sized.

## RIGHT ARM
Preserve the currently validated right-arm input topology and order. PRIMARY spatial authority = `reference-sheets/RIGHT_ARM_PLACEMENT_REFERENCE.png`. Other hero/category/approved references are active only when the validated right-arm workflow calls for them. Approved weapons/props remain DESIGN_ONLY. Generation owns identity, body-relative scale, broad orientation, silhouette, style, and usable continuous grip geometry; final exact canonical hand overlay/registration remains Illustrator work.

## LEFT ARM — LOCKED V3
Mandatory workflow files: `LEFT_ARM_ZERO_CONTACT_WORKFLOW.md`, `LEFT_ARM_4X4_PRODUCTION_CONTROLLER.md`, `LEFT_ARM_PRODUCTION_PROMPT_TEMPLATE.txt`.

**PRIMARY_CANVAS_AUTHORITY = `reference-sheets/LEFT_ARM_FINISHED_COSMETIC_EXEMPLAR_REFERENCE_4X4_V3.png` exactly.** It is a 2400×2560 composite V3 controller and must be active visual input #1 under that exact basename and with exact canonical bytes.

Locked: 2400×2560; 4×4; 600×640; hero context screen-right; extremely tiny complete cosmetic screen-left; clean white zero-contact; no generated grip; no overlap; no hidden geometry; no AI reconstruction. Priority = V3 exemplar scale/location → simplify detail → exact identity → pose/design → variation.

**Normal V3 generation does not add `MASTER_CHARACTER_REFERENCE.png` as a separate active visual.** The V3 composite controller already supplies the validated hero/context relationship. MASTER HERO may remain outside `GENERATION_INPUT/` for portability/audit.

Approved art—including Gold Armor, Gold Sword, Mirror Shield—is DESIGN_ONLY and active only when a current brief explicitly needs that design family. Supply those references after V3; they may never control hero clothing, hand pose, grip/contact, object scale, canvas composition, or registration.

Normal `00_GENERATION_PROMPT.txt` is the canonical `LEFT_ARM_PRODUCTION_PROMPT_TEMPLATE.txt` with only the four row slots substituted. Do not summarize, shorten, or freshly rewrite its invariant body.

LEFT ARM row sanitization must preserve explicit hard brief constraints: direction, rotation, visible surface, pose, exact count, color, required symbol/feature, attachment, and relative position. A word such as `slightly` does not make the constraint optional. Unless the user explicitly allows variation, every hard constraint must remain visibly present in all four row variations.

## ARMOR / OUTFITS — LOCKED
Read `ARMOR_OUTFIT_PRODUCTION_WORKFLOW.md` and `ARMOR_STAGE_B_DETERMINISTIC_REGISTRATION.md` and reproduce each stage's validated input set exactly.

Architecture remains: briefs + cape manifest → Stage A → optional A.5 → Stage B destructive isolation → deterministic per-cell registration → Illustrator.

Stage A authority stack: literal canonical hero substrate + canonical-derived proportion controller = PRIMARY geometry/canvas; canonical hand + viewer-left arm-chain = ANATOMY; approved/prior outfit refs = DESIGN_ONLY only when actually needed. Do not let generic packaging add generic armor reference soup.

Cape metadata KEEP/NONE/RESTYLE is carried automatically. Stage B receives approved Stage A/A.5 as literal artwork authority + cape manifest as semantic authority; do not feed unrelated approved art into Stage B. Stage B erase-only; pedestal zero pixels; no hidden reconstruction. Then deterministic uniform scale + X/Y restoration only; exact 1920×2560 / 480×640.

## ACCESSORIES — LOCATION AWARE
General accessory references do not by themselves validate every body location.

### FACE — LOCKED
Read `ACCESSORY_FACE_PRODUCTION_WORKFLOW.md` and reproduce its validated Stage-A input set exactly.

PRIMARY_CANVAS_AUTHORITY = current ~6% faint literal canonical hero substrate. Face registration controller = spatial/anchor authority. Meme Glass/approved face art = DESIGN_ONLY / compact scale-class precedent only when needed. **Do not add full-color MAIN HERO as an active Stage-A visual through generic packaging.**

Architecture remains: Stage A on faint literal substrate → deterministic faint-substrate extraction → Illustrator. Accessory is only full-opacity generated art. No generative Stage B; no full-color hero subtraction.

### NON-FACE
Before reusable production, use an already validated location-specific controller/setup or stop. Do not silently reuse the face controller or invent a new architecture from generic packaging rules.

# Required package behavior

For every generation stage:

1. identify the applicable validated category/stage workflow;
2. run category conflict gate;
3. sanitize only permitted user-brief fields without changing identity or weakening explicit hard constraints;
4. resolve exact binaries from repo or permanent fallback ZIP;
5. write down the validated active visual set and order before adding files;
6. create `GENERATION_INPUT/` containing only that active set;
7. put PRIMARY/controller image(s) first and preserve exact canonical bytes/basename/dimensions where locked;
8. create `00_REFERENCE_ROLES.txt` naming every active visual and forbidden properties;
9. create `00_INPUT_ORDER.txt` whenever more than one active visual is supplied;
10. create exact `00_GENERATION_PROMPT.txt` from the category's locked template/manifest rules; never rewrite invariant template text;
11. record controller SHA-256 + dimensions for exact controllers;
12. run `PRODUCTION_PACKAGE_REGRESSION_GATES.md`;
13. immediately before generation verify transferred controller bytes/dimensions still match; duplicate-suffixed/downsampled UI copies are not acceptable substitutes;
14. invoke generation with the exact packaged prompt and the exact ordered active visual set—do not replace either with a synthesized summary;
15. post-generation classify any miss as SYSTEM FAIL or BRIEF FAIL before proposing or applying a fix;
16. for SYSTEM FAIL, debug controller/workflow execution before aesthetics; for BRIEF FAIL, preserve architecture and fix only the smallest local brief-adherence cause;
17. provide one complete ZIP whenever user transfer is required;
18. perform deterministic/file/repo edits yourself when tools permit.

Never ask user to manually edit prompts/manifests/metadata/transforms/workflow text or rediscover canonical files.

# Permanent fallback kit

Official filename: `DONT_DIE_COSMETIC_PRODUCTION_REFERENCES.zip`.
Builder: `.github/workflows/build-cosmetic-production-reference-kit.yml`.
If attached in a session, reuse it. Do not ask again.

# Core principle

**Portability gets the right bytes into the session. Fresh-agent packaging must preserve the validated category setup. Execution hierarchy must not mutate that setup. Classify SYSTEM FAIL versus BRIEF FAIL before changing anything.**

The live repository supersedes this handoff when later validated work changes a workflow.
