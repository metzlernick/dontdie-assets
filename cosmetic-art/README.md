# Don't Die Cosmetic Art

This folder contains the canonical production system for Don't Die cosmetic artwork.

## Current production authority

Use: `DONT_DIE_COSMETIC_ART_SPEC.md`, `REPEATABLE_PRODUCTION_WORKFLOW.md`, `PRODUCTION_SESSION_STARTER.txt`, `CANONICAL_REGISTRATION_SYSTEM.md`, category-specific workflows/controllers, and current canonical reference assets.

## ARMOR / OUTFITS — V44 Stage A + Stage B locked

`ARMOR_OUTFIT_PRODUCTION_WORKFLOW.md` is the category authority.

Validated architecture:

**Stage A registered outfit design on canonical hero → Stage B faithful outfit isolation → optional Stage B.5 cape operation → Illustrator.**

V44 solved the recurring Stage-A structure failures closely enough for production: near-canonical body proportions, strong viewer-left lowered arm chain, stable raised arm, and usable stylized hands. Stage B then cleanly isolated the same 16 outfits without reintroducing stumpiness or redesigning the variants.

Armor hand rule: **three fingers + one thumb = four total digits.** Never naturalize to five digits or add a rogue lower knuckle/finger.

Normal Stage A production must not include old generated armor calibration sheets as visual references. Use the canonical geometry controller/substrate plus the current outfit briefs. Old generated references were found to contaminate pose, stumpiness, hand anatomy, and semantics.

Cape behavior is intentionally modular. Stage A/B registration must not be destabilized to force universal cape removal. A downstream Stage B.5 will support KEEP / REMOVE / RESTYLE modes; validate REMOVE before locking B.5.

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
