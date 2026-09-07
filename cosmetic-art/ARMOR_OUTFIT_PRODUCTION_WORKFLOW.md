# Don't Die — Armor / Outfit Production Workflow

**Status:** VALIDATED, COMPLETE, AND LOCKED — Stage A clean-room production + explicit cape-state metadata + optional Stage A.5 + Stage B destructive isolation + deterministic registration restoration

## 1. Validated architecture

Armor/outfit production uses:

**Initial row briefs + cape-state manifest → Stage A → optional Stage A.5 cape correction → Stage B destructive isolation using the same manifest → deterministic per-cell registration restoration → Illustrator**

Cape state is production metadata. It is established from the user's initial row briefs and carried forward automatically. The user should not need to restate cape ownership at Stage B.

Do not create a generative Stage B.5.

## 2. Stage A — locked production behavior

Stage A owns outfit identity, four useful variants per row, near-canonical hero-relative geometry, outfit-specific hand treatment, and the flat Don't Die visual language.

### Geometry authority

Use clean-room canonical-derived authorities:

1. literal canonical hero substrate
2. canonical-derived proportion controller
3. canonical hand-anatomy reference
4. canonical viewer-left arm-chain reference
5. current text briefs

Preserve overall proportions, shoulders, torso, hips, leg lengths/spacing, feet, both arm chains, wrist endpoints, and hand scale. Do not normalize into a generic chibi body.

### Hand lock

Don't Die hands use **THREE FINGERS + ONE THUMB = FOUR TOTAL DIGITS**. Never complete them into natural five-digit hands or add rogue lower knuckles/fingers. Outfit treatment may recolor/redress the hand surface while preserving the canonical silhouette.

### Clean-room / inspiration discipline

Normal Stage A geometry must come only from canonical-derived references. Prior generated dressed-character sheets are not geometry/anatomy authorities.

When the user explicitly wants an earlier approved outfit used as design inspiration, it may be included only as a clearly labeled **DESIGN-ONLY** reference. It may guide broad identity, palette/material distribution, silhouette ideas, or the exact approved concept family, but never anatomy, registration, hand geometry, scale, or body proportions.

A DESIGN-ONLY reference may also be used for a simplification pass. In that case, preserve the approved idea while reducing rendering complexity: fewer colors, larger flat regions, fewer seams/straps/buckles/highlights, and less micro-detail. Do not reinterpret the design simply because it is being simplified.

### Simplicity target

Default armor/outfit art should match the canonical hero's simple visual language: large flat shapes, hard-edged solid colors, bold black outer contour, restrained interior lines, low color count, and minimal micro-detail. If detail conflicts with readability or canonical simplicity, delete detail rather than enlarging or complicating the outfit.

### Row-isolation / contamination discipline

Order rows from most canonical/anatomically conventional to most visually transformative whenever possible. Pixel-art / 8-bit / voxel-like / heavily geometric styles belong in the last available row. Extreme style logic applies to the outfit only unless explicitly required otherwise.

The validated leather → shimmering → pirate → 8-bit batch established this rule.

## 3. Cape-state manifest — mandatory batch metadata

Every Stage A armor batch must carry explicit per-row cape metadata derived from the initial briefs.

Allowed states:

- **KEEP** — the row is intended to have a cape; preserve the approved cape through Stage B
- **NONE** — the row is intended to be capeless; Stage B must remove canonical/context rear cape-like mass rather than guessing from pixels
- **RESTYLE** — the intended cape needs a localized Stage A.5 redesign before Stage B

The manifest is semantic authority for cape ownership. **Do not infer cape state from image appearance.**

A typical manifest is:

```text
ROW 1 = <identity>
CAPE_STATE = KEEP

ROW 2 = <identity>
CAPE_STATE = NONE
```

The same manifest must accompany Stage B. If Stage A visually contains a black rear shape in a row marked NONE, Stage B treats that rear cape/cloak-shaped mass as removable canonical/context material.

Local non-cape trailing geometry remains valid when explicitly part of the outfit, such as small mummy bandage tails.

## 4. Optional Stage A.5 — cape correction only

Use Stage A.5 only when the approved Stage-A visual cape state does not match the manifest or when RESTYLE was requested.

Modes:

- KEEP — leave approved cape unchanged
- REMOVE — remove cape while preserving non-cape hero/outfit geometry
- RESTYLE — redesign only the cape

Stage A.5 is not an outfit redesign or registration-correction pass. Preserve body proportions, pose, arm chains, hands, feet, pedestal, X/Y, and all non-cape semantics.

If Stage A already satisfies the manifest, skip A.5.

## 5. Stage B — destructive isolation + manifest authority

Stage B is **destructive isolation, not redesign and not reconstruction**.

Inputs:

1. approved Stage A, or approved Stage A.5 when used
2. the batch cape-state manifest

The image is literal artwork authority. The manifest is cape-ownership authority.

Remove:

- head / face / hair / ears / exposed hero skin not belonging to outfit treatment
- underlying hero anatomy/context
- **the entire wooden pedestal/platform, including top, rim, outline, highlight, shadow, and fragments**
- canonical/context rear cape-like mass for every row marked `CAPE_STATE = NONE`
- headwear when the requested deliverable is body outfit only

Keep:

- only visibly existing approved outfit artwork
- approved outfit-specific hand/glove/wrap treatment
- sleeves, torso garments, belts, aprons, trousers, footwear, armor, fur, leather, tunics, wraps, etc.
- intentional cape artwork for rows marked `CAPE_STATE = KEEP`
- legitimate local trailing outfit elements that are not capes
- structural outfit features such as a requested peg leg

### Pedestal hard lock

**Any visible pedestal in any Stage-B cell is a FAIL.**

After pedestal erasure, the former pedestal region is pure white except for outfit/foot/peg pixels that were already visibly present above it. Do not complete boots, feet, peg legs, or garments into areas that were hidden by the pedestal.

### Absolute no-reconstruction rule

**Erase only what was visible. Never complete what was hidden.**

When head/body/pedestal/context is erased, newly exposed regions remain white. Do not complete collars, invent neck openings, sharpen necklines, extend shoulder cloth behind hair, reconstruct cape behind anatomy, extend garments behind removed body, complete hidden boots, extend hidden peg geometry, invent hidden wraps, close white gaps, or repair occlusion boundaries.

The exact upstream visible occlusion boundary is final.

### Cell independence

Treat every cell independently. Do not borrow semantic features between rows or columns. The manifest controls cape ownership only; it does not authorize other semantic inference.

### Stage B registration

Do not deliberately resize, recenter, enlarge, shrink, rotate, or normalize cells. Stage B may nevertheless introduce significant generative scale/X/Y drift. Do not chase that drift with prompt calibration; deterministic registration restoration owns the correction.

The raw downloaded Stage-B image may also differ by a few pixels in total width/height from the approved Stage-A download. This does not change the canonical target. Registration must process corresponding logical cells independently and rebuild the final sheet exactly at canonical dimensions.

### Stage B acceptance

PASS only if:

- all 16 isolated designs remain faithful to approved upstream art
- head/headwear/context are removed as required
- **pedestal is completely absent in all 16 cells**
- cape state exactly matches the manifest
- capeless rows contain no canonical/context cape mass
- intended capes remain
- local non-cape trailing elements remain where appropriate
- no hidden garment/foot/peg geometry is reconstructed
- hands and row identities remain intact
- no cross-row contamination occurs

Raw scale/X/Y drift does **not** by itself fail isolation if the artwork is otherwise faithful; it is corrected by the deterministic registration stage.

## 6. Deterministic registration restoration

After Stage B passes isolation, use `ARMOR_STAGE_B_DETERMINISTIC_REGISTRATION.md`.

Stage A / A.5 is coordinate authority. Stage B is artwork/isolation authority. Restore each cell with deterministic uniform scale + X/Y translation only, then rebuild exactly 1920×2560 with 480×640 cells.

No rotation, warping, stretching, redrawing, regeneration, or semantic changes.

Do not trust the raw Stage-B sheet dimensions or apparent in-cell scale as final registration truth.

## 7. Rejected architecture — do not use

Do not use:

- generative Stage B.5 cape removal
- visual guessing of cape ownership at Stage B
- approximate flattened color/spatial cape masks as a general solution
- hidden garment/foot/peg reconstruction after hero or pedestal removal
- counter-biased Stage A geometry
- repeated prompt tuning to chase Stage-B registration drift
- whole-sheet resizing as a substitute for per-cell registration

## 8. Output

Standard final armor sheet after deterministic registration:

- exactly 1920×2560
- 4×4
- exactly 480×640 cells
- no gutters/grid/labels
- pure white isolated background

## 9. Validation evidence

### Cape-manifest validation — Animal / Chef / Green Heroic Tunic / Mummy

Manifest:

- Animal = KEEP
- Chef = NONE
- Green Heroic Tunic = NONE
- Mummy = NONE

Fresh Stage B from the approved Stage-A sheet correctly retained the animal cape, removed the black rear cape/context mass from Chef/Tunic/Mummy, preserved local mummy bandage tails, preserved outfit identity/hands, and avoided problematic hidden-geometry reconstruction.

This validated explicit cape metadata as the scalable solution. Cape ownership must be carried from the initial brief rather than rediscovered visually downstream.

### Simplification + pedestal + registration validation — Leather / Shimmering / Pirate / 8-bit

A second production pass reused the already-approved leather, shimmering, pirate, and 8-bit concepts as a clearly labeled DESIGN-ONLY reference and simplified them without redesigning the idea. The resulting Stage A passed with fewer colors, flatter regions, reduced detail, retained shimmering scales, retained the pirate peg leg, and kept 8-bit last.

Stage B initially isolated the outfits correctly but retained the wooden pedestal; that result was rejected. A fresh Stage B with pedestal erasure hard-locked removed the platform completely while retaining the correct capes, pirate peg leg, neck boundaries, and row identities.

The accepted raw Stage B then showed large per-cell scale/X/Y drift. Deterministic registration restored the isolated art against the exact approved Stage-A cells using uniform scale + X/Y only and rebuilt the final 1920×2560 sheet. The result was visually accepted.

This confirms:

- DESIGN-ONLY simplification is valid when geometry authority remains canonical
- pedestal removal is a mandatory Stage-B acceptance gate
- raw Stage-B registration is not trusted
- per-cell deterministic restoration is required before Illustrator

## 10. Core rule

**Canonical clean-room geometry + simple flat outfit design. Carry cape ownership explicitly from the initial brief. Stage A creates; optional A.5 corrects cape state; Stage B destructively isolates and completely removes pedestal/context using the manifest; deterministic processing restores canonical registration; Illustrator finishes.**