# Don't Die Cosmetic Art — Fresh Agent Production Handoff

## User contract

Normal input from the user is only:

- CATEGORY: HATS | RIGHT ARM | LEFT ARM | ARMOR / OUTFITS | ACCESSORIES
- ROW 1–4 cosmetic briefs

For ACCESSORIES, resolve body location; ask only if genuinely ambiguous.

Canonical repo: `metzlernick/dontdie-assets/cosmetic-art`.

# TWO SEPARATE HARD CONTRACTS

## 1. Portability
The user does not hunt for canonical files. Read `PRODUCTION_RUNTIME_ASSET_MANIFEST.md`. Retrieve repo binaries automatically; if runtime transfer fails, use the session-level `DONT_DIE_COSMETIC_PRODUCTION_REFERENCES.zip`. If neither is available, ask for that ONE permanent ZIP only, never individual canonical PNG/SVG files.

## 2. Generation execution
A complete ZIP is not enough. Read `GENERATION_EXECUTION_CONTRACT.md` and run `PRODUCTION_PACKAGE_REGRESSION_GATES.md` before every image-generation stage.

**Repository visuals are not coequal references.** Every active image must be role-labeled as PRIMARY_CANVAS_AUTHORITY, ANATOMY_AUTHORITY, DESIGN_ONLY, or STYLE_ONLY. No unlabeled images may be supplied to generation.

A batch ZIP may contain a larger portability library, but the actual generation stage must use a small `GENERATION_INPUT/` selection containing only active visuals plus `00_GENERATION_PROMPT.txt` and `00_REFERENCE_ROLES.txt`. Do not feed the whole reference library to the image model.

If the PRIMARY controller is missing/misnamed/substituted, or a subordinate design reference could control pose/scale/context/contact, STOP before generation.

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
- especially similar approved art

Live repo wins for rules. Permanent reference ZIP is primarily a binary portability layer.

# Global art invariants

Unless category workflow overrides: 1920×2560; 4×4; 480×640 cells; one brief/row; four moderate variations; pure white; no visible grid/gutters/labels; body-relative rather than presentation-centered; flat vector-like Don't Die art; true-black ~5 px primary contour at canonical scale; hard fills; low detail; no texture/painterly rendering/cast shadow. Never enlarge merely to fill empty space. Simplify detail before increasing scale.

# Category execution

## HATS
PRIMARY spatial authority = `reference-sheets/HATS_PLACEMENT_REFERENCE.png` plus current validated orientation controller when required. MAIN HERO = anatomy/context. `HAT_HEAD_ORIENTATION_REFERENCE.png` = orientation only. Approved hats = DESIGN_ONLY. `HATS_REFERENCE.png`/style sheets = STYLE_ONLY/design family. Never let standalone approved hats become independently centered/presentation-sized.

## RIGHT ARM
PRIMARY spatial authority = `reference-sheets/RIGHT_ARM_PLACEMENT_REFERENCE.png`. MAIN HERO = anatomy/context. Approved weapons/props = DESIGN_ONLY. `RIGHT_ARM_REFERENCE.png`/style sheets = STYLE_ONLY/design family. Generation owns identity, body-relative scale, broad orientation, silhouette, style, and usable continuous grip geometry; final exact canonical hand overlay/registration remains Illustrator work. Never let approved standalone weapon art become canvas-scale authority.

## LEFT ARM — LOCKED V3
Mandatory workflow files: `LEFT_ARM_ZERO_CONTACT_WORKFLOW.md`, `LEFT_ARM_4X4_PRODUCTION_CONTROLLER.md`, `LEFT_ARM_PRODUCTION_PROMPT_TEMPLATE.txt`.

**PRIMARY_CANVAS_AUTHORITY = `reference-sheets/LEFT_ARM_FINISHED_COSMETIC_EXEMPLAR_REFERENCE_4X4_V3.png` exactly.** No alias/older filename.

Locked: 2400×2560; 4×4; 600×640; hero context screen-right; extremely tiny complete cosmetic screen-left; clean white zero-contact; no generated grip; no overlap; no hidden geometry; no AI reconstruction. Priority = V3 exemplar scale/location → simplify detail → exact identity → pose/design → variation.

MAIN HERO is subordinate anatomy/context. Approved art—including Gold Armor, Gold Sword, Mirror Shield—is DESIGN_ONLY and may NEVER control hero clothing, hand pose, grip/contact, object scale, canvas composition, or registration.

Regression A shield/money-bag/spatula/lantern expected behavior: extremely tiny standalone cosmetics screen-left. If hero/gauntlet grips them, or they become normal readable-prop size, immediate FAIL regardless of design quality.

## ARMOR / OUTFITS — LOCKED
Read `ARMOR_OUTFIT_PRODUCTION_WORKFLOW.md` and `ARMOR_STAGE_B_DETERMINISTIC_REGISTRATION.md`.

Architecture: briefs + cape manifest → Stage A → optional A.5 → Stage B destructive isolation → deterministic per-cell registration → Illustrator.

Stage A authority stack: literal canonical hero substrate + canonical-derived proportion controller = PRIMARY geometry/canvas; canonical hand + viewer-left arm-chain = ANATOMY; approved/prior outfit refs = DESIGN_ONLY only when needed. Do not use generic armor reference soup as geometry authority. Hands = 3 fingers + 1 thumb.

Cape metadata KEEP/NONE/RESTYLE is carried automatically. Stage B receives approved Stage A/A.5 as literal artwork authority + cape manifest as semantic authority; do not feed unrelated approved art into Stage B. Stage B erase-only; pedestal zero pixels; no hidden reconstruction. Then deterministic uniform scale + X/Y restoration only; exact 1920×2560 / 480×640.

## ACCESSORIES — LOCATION AWARE
General accessory references do not by themselves validate every body location.

### FACE — LOCKED
Read `ACCESSORY_FACE_PRODUCTION_WORKFLOW.md`.

PRIMARY_CANVAS_AUTHORITY = current ~6% faint literal canonical hero substrate. Face registration controller = spatial/anchor authority. Meme Glass/approved face art = DESIGN_ONLY / compact scale-class precedent. Full-color MAIN HERO must not displace the faint substrate.

Architecture: Stage A on faint literal substrate → deterministic faint-substrate extraction → Illustrator. Accessory is only full-opacity generated art. No generative Stage B; no full-color hero subtraction.

### NON-FACE
Before reusable production, designate or deterministically construct a literal location-specific PRIMARY controller. Do not silently reuse the face controller. Until location-specific controller is validated, do not call that location locked.

# Required package behavior

For every generation stage:

1. run category conflict gate;
2. sanitize briefs without changing identity;
3. select only necessary approved references;
4. resolve binaries from repo or permanent fallback ZIP;
5. create `GENERATION_INPUT/`;
6. designate exactly one PRIMARY canvas authority (plus narrowly scoped subordinate authorities as allowed);
7. create `00_REFERENCE_ROLES.txt` naming every active visual and forbidden properties;
8. create exact `00_GENERATION_PROMPT.txt`/manifest/controller files;
9. run `PRODUCTION_PACKAGE_REGRESSION_GATES.md`;
10. generate only if preflight passes;
11. post-generation, check controller obedience BEFORE aesthetics: sheet geometry, body/context placement, scale, contact/occlusion, registration;
12. hard-fail controller violations rather than polishing them;
13. provide one complete ZIP whenever user transfer is required;
14. perform deterministic/file/repo edits yourself when tools permit.

Never ask user to manually edit prompts/manifests/metadata/transforms/workflow text or rediscover canonical files.

# Permanent fallback kit

Official filename: `DONT_DIE_COSMETIC_PRODUCTION_REFERENCES.zip`.
Builder: `.github/workflows/build-cosmetic-production-reference-kit.yml`.
If attached in a session, reuse it. Do not ask again.

# Core principle

**Portability gets the right bytes into the session. Execution hierarchy makes the model obey the right bytes. Both are mandatory.**

The live repository supersedes this handoff when later validated work changes a workflow.