# Don't Die Cosmetic Art

This folder contains the canonical production system for Don't Die cosmetic artwork.

## Current production authority

Use: `DONT_DIE_COSMETIC_ART_SPEC.md`, `REPEATABLE_PRODUCTION_WORKFLOW.md`, `PRODUCTION_SESSION_STARTER.txt`, `CANONICAL_REGISTRATION_SYSTEM.md`, category-specific workflows/controllers, and current canonical reference assets.

## ARMOR / OUTFITS — Stage A V44 + optional Stage A.5 V1 + Stage B + deterministic registration locked

`ARMOR_OUTFIT_PRODUCTION_WORKFLOW.md` is the category authority. `ARMOR_STAGE_B_DETERMINISTIC_REGISTRATION.md` is the companion authority for the validated post-isolation registration step.

Validated architecture:

**Stage A registered outfit design on canonical hero → optional Stage A.5 cape control → Stage B faithful erase-only outfit isolation → deterministic per-cell registration restoration → Illustrator.**

Stage A is the design and registration authority. Stage B is the isolation authority, but small Stage-B scale/X/Y drift must not be treated as final registration truth. Restore the approved upstream registration deterministically after Stage B rather than counter-biasing Stage A or repeatedly tuning prompt offsets.

Stage B must not invent hidden garment geometry behind the removed head/neck. Preserve the visible upstream neckline boundary only; the final outfit layer must not occlude the canonical head art with newly completed collar/neck material.

Stage A V44 solved the recurring structure failures closely enough for production: near-canonical body proportions, strong viewer-left lowered arm chain, stable raised arm, and usable stylized hands.

Armor hand rule: **three fingers + one thumb = four total digits.** Never naturalize to five digits or add a rogue lower knuckle/finger.

Normal Stage A production must not include old generated armor calibration sheets as visual references. Use canonical-derived geometry/hand references plus the current outfit briefs. Old generated references were found to contaminate pose, stumpiness, hand anatomy, and semantics.

### Optional Stage A.5 cape control

Use Stage A.5 only when cape state must change after Stage A.

Supported validated modes:

- **KEEP** — leave cape unchanged
- **REMOVE** — remove cape while preserving non-cape geometry
- **RESTYLE** — redesign only cape to fit the outfit

Validated end-to-end cape test:

- animal/fur armor: RESTYLE passed
- chef: REMOVE passed
- green heroic-fantasy tunic: REMOVE passed
- mummy: REMOVE passed

The approved A.5 result then passed Stage B isolation while preserving row identities, arm chains, four-digit hands, proportions, and cape state.

### Stage B

Stage B is faithful erase-only isolation, not redesign. It uses the approved upstream sheet — Stage A directly, or Stage A.5 when used — as design/cape-state authority and removes the hero/head/pedestal/context while preserving outfit geometry, hands, arm chains, and exact approved cape state.

After Stage B, restore registration deterministically per 480×640 cell using the approved upstream cell as scale/X/Y authority. Do not warp or redraw the outfit. Rebuild the final 4×4 at exactly 1920×2560.

Do **not** use post-isolation generative cape removal. It was tested and caused global redraw drift. Do **not** use approximate spatial/color masking of flattened Stage-B PNGs as a general cape-removal method; the validation damaged non-cape artwork.

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