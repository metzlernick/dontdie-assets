# Don't Die — Armor / Outfit Production Workflow

**Status:** VALIDATED AND LOCKED — 4×1 Stage A clean-room production + explicit cape-state metadata + optional Stage A.5 + Stage B destructive isolation + deterministic registration restoration

## 1. Validated architecture

Armor/outfit production uses:

**One cosmetic brief + cape-state decision → Stage A 4×1 (four variants) → optional Stage A.5 cape correction → Stage B 4×1 destructive isolation → deterministic per-cell registration restoration → Illustrator**

Moving from historical 4×4 batching to 4×1 changes batching only. It does not change the validated canonical geometry, hand, viewer-left arm-chain, Stage-B isolation, or deterministic-registration architecture.

Do not create a generative Stage B.5.

## 2. Mandatory cape preflight

Before building or running Armor Stage A, determine cape state from the user's cosmetic brief.

- If the brief explicitly requests a cape/cloak/mantle/rear garment, use `KEEP`.
- If the brief explicitly requests no cape, use `NONE`.
- If cape state is **not stated or unambiguously inferable from the prompt, ASK THE USER whether the outfit should have a cape before generating Stage A. Do not silently default.**
- If the user wants a cape, the cape is part of the outfit design. Stage A must intentionally style it to match that specific outfit's palette, materials, silhouette, trim/detail language, and theme. Do not merely retain the generic canonical dark cape unless that is explicitly desired.
- If an otherwise approved Stage A has the wrong cape styling, classify it as a Stage-A `BRIEF FAIL` and use localized Stage A.5 `RESTYLE` when appropriate.
- Stage B never restyles a cape. It preserves the approved Stage-A cape for KEEP or removes cape/context material for NONE.

Cape state is production metadata established from the initial brief/preflight and carried forward automatically. The user should not need to restate cape ownership at Stage B.

## 3. Stage A — locked production behavior

Stage A owns outfit identity, four useful variants, near-canonical hero-relative geometry, outfit-specific hand treatment, any intended cape design, and the flat Don't Die visual language.

### Geometry authority
Use clean-room canonical-derived authorities:
1. literal canonical hero substrate
2. canonical-derived proportion controller
3. canonical hand-anatomy reference
4. canonical viewer-left arm-chain reference
5. current text brief

Preserve overall proportions, shoulders, torso, hips, leg lengths/spacing, feet, both arm chains, wrist endpoints, and hand scale. Do not normalize into a generic chibi body.

### Hand lock
Don't Die hands use **THREE FINGERS + ONE THUMB = FOUR TOTAL DIGITS**. Never complete them into natural five-digit hands or add rogue lower knuckles/fingers. Both outfit-specific hand/glove/wrap treatments are generated as part of the outfit while preserving canonical silhouette and scale.

### Viewer-left arm lock
The canonical viewer-left lowered shoulder→upper arm→elbow→forearm→wrist→hand chain is highest-risk anatomy. Preserve it literally. Downstream isolation problems must never trigger a redesign of this passing Stage-A architecture.

### Clean-room / inspiration discipline
Normal Stage A geometry comes only from canonical-derived references. Prior generated dressed-character sheets are not geometry/anatomy authorities. When the user explicitly wants an approved prior design as inspiration, it may be DESIGN-ONLY and cannot control anatomy, registration, hands, scale, or body proportions.

### Simplicity target
Default armor/outfit art uses large flat shapes, hard-edged solid colors, bold black outer contour, restrained interior lines, low color count, and minimal micro-detail.

### Rejected Stage-A regression
Do **not** replace the validated clean-room Armor Stage-A controls with a faint-substrate/direct-isolation generation architecture. That experiment caused missing outfit-specific hands and viewer-left arm regression and is permanently rejected.

## 4. Cape-state metadata

Allowed states:
- **KEEP** — intended cape exists and is designed as part of Stage A; Stage B preserves it.
- **NONE** — intended outfit is capeless; Stage B removes canonical/context rear cape-like mass.
- **RESTYLE** — intended cape needs localized Stage A.5 redesign before Stage B.

Do not infer cape ownership from image appearance at Stage B.

## 5. Optional Stage A.5 — cape correction only

Use Stage A.5 only when an otherwise approved Stage-A outfit has a cape-state or cape-style BRIEF FAIL.

Modes:
- KEEP — leave approved cape unchanged
- REMOVE — remove cape while preserving all non-cape hero/outfit geometry
- RESTYLE — redesign only the cape to match the outfit

Stage A.5 is not an outfit redesign or registration-correction pass. Preserve body proportions, pose, arm chains, hands, feet, pedestal, X/Y, and all non-cape semantics.

## 6. Stage B — destructive 4×1 isolation

Stage B is **destructive isolation, not redesign and not reconstruction**.

Inputs:
1. approved Stage A 4×1, or approved Stage A.5 when used
2. known cape state from preflight

Remove:
- head / face / hair / ears / exposed hero skin not belonging to outfit treatment
- underlying hero anatomy/context
- entire wooden pedestal/platform, including top, rim, outline, highlight, shadow, and fragments
- canonical/context rear cape-like mass when `CAPE_STATE = NONE`
- headwear when deliverable is body outfit only

Keep:
- only visibly existing approved outfit artwork
- both approved outfit-specific hands/gloves/wrap treatments
- exact visible viewer-left and viewer-right arm treatment
- sleeves, torso garments, belts, aprons, trousers, footwear, armor, fur, leather, tunics, wraps, etc.
- intentional approved cape artwork when `KEEP`
- legitimate local trailing outfit elements that are not capes

### Absolute no-reconstruction rule
Erase only what was visible. Never complete what was hidden. Newly exposed regions remain white. Do not complete collars, invent neck openings, extend shoulder cloth behind hair, reconstruct cape behind anatomy, extend garments behind removed body, complete hidden boots, invent hidden wraps, close white gaps, or repair occlusion boundaries.

### Stage-B registration
Do not deliberately resize/recenter/enlarge/shrink/rotate/normalize. Generative isolation may nevertheless introduce presentation scale/X/Y drift. Do not regenerate merely to chase otherwise clean registration drift; deterministic restoration owns the correction.

### Stage-B acceptance
PASS when:
- four isolated variants remain faithful to approved upstream art
- head/headwear/context removed as required
- pedestal completely absent
- cape state matches preflight
- intended cape preserved when KEEP
- both outfit-specific hands and arm treatments remain intact
- no hidden reconstruction
- no cross-variant contamination

Raw scale/X/Y drift alone does not fail isolation if artwork is faithful.

## 7. Deterministic registration restoration

After Stage B passes isolation, Stage A/A.5 is coordinate authority and Stage B is isolated-art authority. Restore each 4×1 cell with deterministic uniform scale + X/Y translation only.

Canonical logical target for one 4×1 strip: **1920×640, four 480×640 cells**. Downloaded generation dimensions may differ; logical cell correspondence remains authoritative.

No rotation, warping, stretching, redrawing, regeneration, or semantic changes.

## 8. Historical 4×4 compatibility

Historical approved 4×4 Armor sources remain valid. They do not need regeneration merely because production now uses 4×1. Before new generative Stage-B work, split historical sheets into independent 4×1 rows whenever practical.

## 9. Failure classification

- Anatomy/hand/viewer-left-arm regression = `SYSTEM FAIL`.
- Missing/wrongly styled cape while Stage-A architecture passes = `BRIEF FAIL`, corrected at Stage A/A.5.
- Clean Stage-B isolation with presentation scale/X/Y drift = isolation PASS; correct deterministically.
- Generic backend generation error without evidence of bad inputs is a tool failure, not artwork SYSTEM FAIL.

## 10. Core rule

**Ask about cape state when the brief does not specify it. Stage A creates the complete outfit and intentionally designs any requested cape; Stage B destructively isolates without redesign; deterministic processing restores Stage-A registration. 4×1 changes batching, not the validated Armor anatomy architecture.**