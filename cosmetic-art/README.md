# Don't Die Cosmetic Art

This folder contains the canonical production system for Don't Die cosmetic artwork.

## Current production authority

Use: `DONT_DIE_COSMETIC_ART_SPEC.md`, `REPEATABLE_PRODUCTION_WORKFLOW.md`, `PRODUCTION_SESSION_STARTER.txt`, `CANONICAL_REGISTRATION_SYSTEM.md`, category-specific workflows/controllers, and current canonical reference assets.

## ARMOR / OUTFITS — COMPLETE AND LOCKED

`ARMOR_OUTFIT_PRODUCTION_WORKFLOW.md` is the category authority. `ARMOR_STAGE_B_DETERMINISTIC_REGISTRATION.md` is the companion authority for the required post-isolation registration step.

Validated architecture:

**Initial briefs + cape manifest → Stage A registered outfit generation on canonical hero → optional Stage A.5 cape correction → Stage B destructive erase-only isolation using the same manifest → deterministic per-cell registration restoration → Illustrator.**

### Stage A

Stage A owns design identity and near-canonical hero-relative geometry. Use canonical-derived geometry/hand/arm references plus the current briefs.

Armor hand rule: **three fingers + one thumb = four total digits.** Never naturalize to five digits or add a rogue lower knuckle/finger.

Default style is simple and flat: large hard-edged color regions, low color count, bold black contour, restrained interior linework, and minimal micro-detail.

Old generated dressed-character calibration sheets are not geometry authorities. If the user explicitly wants an already-approved outfit reused, a prior approved sheet may be included only as a clearly labeled **DESIGN-ONLY** reference. It may guide identity, palette/material distribution, or silhouette family, but never anatomy, registration, hand geometry, scale, or body proportions. Simplification passes should preserve the approved idea while removing secondary detail/colors rather than reinventing it.

### Cape manifest

Cape ownership is explicit row metadata derived from the initial brief and carried automatically through the batch:

- **KEEP** — intended cape remains
- **NONE** — Stage B removes cape/context rear mass rather than guessing from pixels
- **RESTYLE** — localized Stage A.5 cape redesign before Stage B

The user should not need to restate cape state at Stage B.

### Optional Stage A.5

Use Stage A.5 only when the approved Stage-A visual cape state disagrees with the manifest or RESTYLE is requested. It changes cape state only and is not a general outfit redesign or registration pass.

### Stage B

Stage B is destructive erase-only isolation, not redesign and not reconstruction.

It removes:

- head/face/hair/ears/exposed non-outfit hero anatomy
- body context
- headwear when the requested deliverable is body outfit only
- **the entire wooden pedestal/platform in every cell**
- cape/context rear mass for rows marked NONE

Any surviving pedestal is a Stage-B failure. The former pedestal region remains white; do not reconstruct hidden boots, feet, peg legs, or garments into it.

Preserve only visibly existing approved outfit artwork, intended capes for KEEP rows, outfit-specific hands, footwear, and structural outfit features such as peg legs. Never invent hidden collar/neckline/cape/sleeve/boot/wrap/peg geometry.

Raw Stage-B scale/X/Y drift does not by itself fail isolation if the artwork is otherwise faithful. Do not repeatedly regenerate Stage B to chase registration.

### Deterministic registration

Stage A / A.5 is the coordinate and scale authority. Stage B is the artwork/isolation authority.

After Stage B passes isolation, restore each logical cell independently using **uniform scale + X/Y translation only**, then rebuild exactly **1920×2560** with **480×640** cells.

Do not rotate, warp, stretch, redraw, inpaint, or semantically modify the isolated art. Do not use whole-sheet resize as a substitute for per-cell restoration. Raw downloaded Stage-A/Stage-B dimensions may differ slightly; the canonical final dimensions remain exact.

### Validation

The final armor system was validated across two major production families:

- Animal / Chef / Green Heroic Tunic / Mummy validated explicit cape-manifest ownership and capeless-row removal without semantic guessing.
- Leather / Shimmering / Pirate / 8-bit validated DESIGN-ONLY simplification, mandatory pedestal erasure, preservation of scales/peg leg/pixel identity, and substantial raw Stage-B registration drift corrected deterministically per cell.

The final registered armor sheet was visually accepted. Armor calibration is complete; normal production should use the locked workflow rather than reopening prompt calibration for known failure modes.

## LEFT ARM — V3 canonical

V3 is the validated LEFT ARM visual scale controller. Each 600×640 logical cell uses one extremely tiny contiguous neutral finished-cosmetic exemplar (approximately 14×19 px in the validated reference) as the absolute visual-mass authority.

Production hierarchy:
1. extremely tiny finished-exemplar scale/location
2. remove/simplify detail
3. exact identity
4. pose/design
5. variation

Semantic identity never authorizes enlargement. Generate conservatively small; Illustrator can enlarge selected art later.

V3 supersedes V2.1. V2.1 passed the shield/bag/spatula/lantern regression but failed a later gauntlet/throwing-star/purse/nunchuks batch by reverting toward hero-sized readable props. V3 materially reduced the universal exemplar; the same difficult batch then passed scale across all four rows, while the gauntlet also achieved the requested palm/underside presentation.

The controller should now be judged against both regression families. Do not add object-specific scale exceptions. Reopen calibration only for a repeatable new V3 failure.

## Mandatory conflict gate

Before any LEFT ARM package is created, check every instruction against locked scale, exemplar authority, hero placement, zero-contact, sheet geometry, detail hierarchy, generated grip, and reconstruction rules. If a conflict exists, stop, explain it, offer safe wording, and proceed only after resolution. Approved assets may guide design but cannot override generation scale.

## Prompt lock

Normal LEFT ARM production uses `LEFT_ARM_PRODUCTION_PROMPT_TEMPLATE.txt`; only the four row brief slots change. Invariant modifications are separate calibration work.

## Supporting assets

`templates/`, `registration/`, `reference-pack/`, `reference-sheets/`, `approved-art/`, and `archive-calibration/`. Archive material is historical evidence, not production authority.