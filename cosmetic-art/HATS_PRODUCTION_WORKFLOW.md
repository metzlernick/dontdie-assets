# Don't Die Cosmetic Art — HATS Production Workflow

**Status: VALIDATED / LOCKED**

This active workflow incorporates the validated HATS production result and the final game-layering correction.

## Final architecture

**Stage A registered hat generation at approved equipped-hat scale → Stage B foreground-only destructive isolation → deterministic per-cell registration restoration → Illustrator**

A Stage-A or Stage-B pass alone is not a completed HATS deliverable.

## Stage A — registered hat generation

- logical sheet: 1920×2560
- 4×4
- 480×640 logical cells
- four concepts × four moderate variations
- canonical MAIN HERO remains visible as registration context
- hat is generated at final head-relative production scale/position
- hats may naturally overlap/cover hair
- no grid, labels, borders, texture, painterly shading, cast shadow, or presentation centering

### Stage-A scale authority

The equipped approved HAT art and `reference-sheets/HATS_PLACEMENT_REFERENCE.png` define the production scale regime relative to the canonical hero head.

Do not infer scale from real-world object size or empty canvas space. Broad/tall/chunky concepts may differ naturally in silhouette, but remain plausible beside existing equipped approved hats. Simplify detail before increasing visual mass outside that regime.

Stage-A acceptance:
- correct row identities and hard brief constraints
- useful four-variation spread
- correct head-relative scale/orientation/attachment
- no presentation-sized cosmetics
- hero/context remains usable registration authority

## Stage B — foreground-only destructive isolation

This is an isolation/removal operation, not new cosmetic generation.

Input:
- approved Stage-A composite

### Critical game-layering rule

The final HAT cosmetic is rendered **above the character HEAD layer in-game**.

Therefore Stage B keeps only cosmetic geometry that should be visible **in front of/on top of the hero head or hair** in Stage A.

Any cosmetic geometry whose correct visual layer is behind the hero head/hair is omitted from the final isolated asset and must NOT be reconstructed.

Examples:
- cat headphones: a far/rear ear cup or rear headband segment hidden behind the head stays absent
- rear brim/band/strap/petal surfaces hidden behind the head stay absent
- removing the hero may create white gaps; those gaps are correct

Do not turn a partially occluded worn cosmetic into a complete freestanding object.

Stage B removes:
- hero head/face/hair/ears
- body/cape/hands/clothing/boots
- pedestal
- all other character/context artwork

Final background is pure white.

Stage B must not intentionally redesign, improve, recenter, or presentation-size the hats. However, generative isolation has been empirically observed to drift scale/X/Y, so Stage B is treated as **artwork + foreground-occlusion authority**, not final coordinate authority.

Stage-B acceptance:
- correct foreground-only layering behavior
- no behind-head reconstruction
- hero/context removed
- cosmetic identity/silhouette/colors remain usable

Scale/X/Y drift by itself is corrected downstream rather than accepted as final registration.

## Deterministic per-cell registration restoration — mandatory

Authority split:
- **Stage A = coordinate + scale + broad rotation authority**
- **Stage B = isolated foreground cosmetic artwork + occlusion authority**

For every logical cell, restore the Stage-B foreground cosmetic to the approved Stage-A production position using deterministic transforms only:
- uniform scale
- X translation
- Y translation

Do NOT:
- rotate unless the validated Stage-A/Stage-B comparison explicitly requires preservation of an existing rotation and the transform is deterministic
- warp/stretch non-uniformly
- redraw/regenerate
- reconstruct hidden behind-head geometry
- alter colors/details
- make the cosmetic more complete

Rebuild the final sheet at exactly 1920×2560 with exact 480×640 logical cells.

A raw model export dimension is not registration authority. Normalize whole-sheet raster dimensions when necessary before solving cells; preserve logical geometry.

## Final HATS gate

HATS is COMPLETE only when:
- 16 foreground-only hat/head-layer cosmetics remain
- pure white background
- no hero/body/cape/pedestal/context remains
- no behind-head geometry has been reconstructed
- approved Stage-A head-relative scale and registration have been restored
- Stage-B visible cosmetic identity/occlusion has been preserved

Then proceed to Illustrator / Image Trace cleanup.

## Locked regression lesson

A clean isolated sheet can still fail if Stage B enlarges/recenters the hats. Isolation cleanliness and registration are separate gates. Deterministic registration restoration is mandatory after generative Stage B.

The validated control established that Stage A can achieve approved equipped-hat scale, Stage B can achieve foreground-only layering, and deterministic restoration can return the isolated foreground cosmetics to correct Stage-A scale/location.