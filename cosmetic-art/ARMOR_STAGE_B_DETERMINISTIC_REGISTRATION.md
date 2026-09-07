# Don't Die — Armor Stage B Deterministic Registration

**Status: VALIDATED AND LOCKED**

This file is a companion authority to `ARMOR_OUTFIT_PRODUCTION_WORKFLOW.md` for the final registration step after Stage B isolation.

## Validated architecture

**Stage A → optional Stage A.5 → Stage B erase-only isolation → deterministic per-cell registration restoration → Illustrator**

Stage A / Stage A.5 is the coordinate and scale authority. Stage B is allowed to perform faithful generative isolation, but its output must **not** be trusted as final registration truth.

## Why this exists

Stage B isolation can preserve the approved outfit design while still introducing small whole-cell drift in scale and X/Y. Prompting harder for exact registration is not a scalable solution across hundreds of outfits.

The validated solution is to restore registration deterministically after isolation rather than corrupting Stage A with counter-bias or repeatedly approximating prompt offsets.

## Stage B responsibilities

Stage B remains an erase/isolation operation:

- remove head, face, hair, ears, exposed hero skin not belonging to the outfit
- remove pedestal and context
- preserve the approved outfit, hands, sleeves, footwear, cape state, peg legs or other intentional structural outfit features
- preserve row/column identity
- do not redesign
- do not invent hidden geometry behind the removed head/neck
- preserve the original visible neckline boundary instead of completing unseen collar/neck material

Stage B may drift slightly in scale or X/Y. That drift is corrected downstream.

## Deterministic registration restoration

After Stage B, process each 480×640 logical cell independently.

For each cell:

1. use the approved upstream Stage A / A.5 cell as registration authority
2. measure the Stage B isolated foreground bounds against the corresponding approved upstream geometry
3. apply one deterministic uniform transform to the isolated Stage B foreground: scale plus X/Y translation
4. do not warp, stretch, redraw, regenerate, or alter internal design geometry
5. place the corrected foreground back into the original 480×640 canonical cell
6. rebuild the 4×4 sheet at exactly 1920×2560

The transform exists only to restore the approved upstream registration. It is not an artistic adjustment.

## Registration invariants

Final registered Stage B output must preserve:

- 1920×2560 sheet
- 4×4 layout
- exactly 480×640 per cell
- original row/column mapping
- upstream body-relative scale
- upstream X/Y placement
- upstream stance width and leg spacing
- upstream shoulder and arm-chain placement
- upstream hand placement
- upstream footwear / peg-leg endpoints
- upstream cape extent and state
- no presentation centering
- no presentation enlargement

## Neck / hidden-geometry rule

**Erase only what was visible. Never complete what was hidden.**

When the head is removed, the resulting opening must follow the visible Stage A / A.5 garment boundary. Do not generate a new high collar, rear neckline, scarf bridge, neck ring, shoulder bridge, or any other material that was previously hidden by the head.

This is required because the final sprite layers the outfit above the canonical head/body art; invented hidden neck geometry would occlude the head layer.

## Validation evidence

The leather / shimmering / pirate / 8-bit production batch validated the full approach:

- Stage A produced the approved registered designs
- Stage B V3 erase-only preserved the four row identities without cross-row peg-leg contamination
- neckline openings remained usable without invented hidden neck fill
- the downloaded Stage B sheet was then deterministically restored to the canonical 4×4 registration
- the registered 1920×2560 result was visually checked and accepted

This establishes deterministic post-Stage-B registration as the production solution for small isolation drift.

## Rejected alternatives

Do not:

- counter-bias Stage A smaller or off-center to compensate for expected Stage B drift
- repeatedly tune prompt offsets for each batch
- use Stage B as final registration authority
- regenerate Stage B solely to chase a few pixels of scale/X/Y drift
- use non-uniform stretching to force bounds
- reconstruct hidden neck geometry

## Core rule

**Stage A owns design and registration. Stage B owns faithful erasure/isolation. Deterministic post-processing restores Stage A registration exactly enough for production. Illustrator owns final vector cleanup and layering.**