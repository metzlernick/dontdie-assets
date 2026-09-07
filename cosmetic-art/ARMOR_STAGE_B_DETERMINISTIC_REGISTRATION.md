# Don't Die — Armor Stage B Deterministic Registration

**Status: VALIDATED, COMPLETE, AND LOCKED**

This file is a companion authority to `ARMOR_OUTFIT_PRODUCTION_WORKFLOW.md` for the required registration step after Stage B isolation.

## Validated architecture

**Stage A → optional Stage A.5 → Stage B erase-only isolation → deterministic per-cell registration restoration → Illustrator**

Stage A / Stage A.5 is the coordinate and scale authority. Stage B is the artwork/isolation authority. The raw Stage-B output must **not** be trusted as final registration truth.

## Why this exists

Stage B can preserve the approved outfit design while introducing meaningful whole-cell drift in scale and X/Y. Prompting harder for exact registration is not scalable across large armor libraries.

The validated solution is to restore registration deterministically after isolation rather than counter-biasing Stage A, repeatedly regenerating Stage B, or tuning prompt offsets.

The latest Leather / Shimmering / Pirate / 8-bit production pass confirmed that drift can be large enough to be immediately visible, not merely a few pixels.

## Stage B responsibilities before registration

Stage B must first PASS destructive isolation:

- remove head, face, hair, ears, exposed non-outfit hero anatomy
- remove required headwear when producing body-outfit-only art
- remove **the entire wooden pedestal/platform in every cell**
- remove cape/context rear mass according to the batch cape manifest
- preserve approved outfit art, hands, sleeves, footwear, intended capes, peg legs, and other intentional structural outfit features
- preserve row/column identity
- do not redesign
- do not invent hidden geometry behind removed head/body/pedestal/context

Any surviving pedestal is an isolation failure and must be corrected before registration.

Raw scale/X/Y drift alone is not a reason to reject an otherwise faithful Stage-B isolation result.

## Input-dimension rule

Downloaded generation outputs may not exactly equal canonical dimensions and may differ slightly between Stage A and Stage B.

Example from validated production:

- approved Stage A download: 1086×1448
- accepted Stage B download: 1087×1447
- canonical final target: 1920×2560

Do not force the whole raw image to be registration authority.

Split Stage A and Stage B into corresponding logical 4×4 cells using their own image dimensions, solve cells independently, then rebuild the final canonical sheet exactly.

## Deterministic registration restoration

Process each logical cell independently.

For each cell:

1. use the approved upstream Stage A / A.5 cell as coordinate and scale authority
2. use the accepted Stage B cell as artwork/isolation authority
3. estimate the Stage-B-to-Stage-A foreground registration
4. apply **uniform scale + X/Y translation only**
5. do not apply rotation, shear, perspective, non-uniform stretch, redraw, inpainting, regeneration, or semantic edits
6. place the corrected isolated foreground into the canonical logical cell
7. output that cell at exactly 480×640
8. rebuild the final 4×4 sheet at exactly 1920×2560

The transform exists only to restore approved upstream registration. It is not an artistic adjustment.

## Implementation guidance validated in production

A working implementation may:

- split raw Stage-A and Stage-B sheets proportionally into 4×4 logical cells
- resize each Stage-B source cell temporarily to the corresponding Stage-A source-cell dimensions for feature comparison
- use robust feature matching in the outfit/body region while excluding much of the head and former pedestal regions
- estimate an affine similarity transform only to recover the uniform scale component
- recompute translation from robust inlier correspondences
- enforce a final pure transform of the form:

```text
[s  0  tx]
[0  s  ty]
```

- warp onto white background
- resize the corrected cell to exactly 480×640
- assemble the 1920×2560 final sheet

The method may change if a more robust deterministic estimator is adopted later, but the permitted final transform remains **uniform scale + X/Y only** unless this authority is explicitly recalibrated.

## Registration invariants

Final registered Stage B output must preserve:

- exactly 1920×2560 sheet
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
- pure white background outside isolated artwork
- no presentation centering
- no presentation enlargement

## Neck / hidden-geometry rule

**Erase only what was visible. Never complete what was hidden.**

Registration may move/scale accepted Stage-B pixels only. It must not create new pixels to complete a collar, rear neckline, scarf bridge, neck ring, shoulder bridge, boot, foot, peg leg, cape, or any material previously hidden by removed anatomy/context.

The former pedestal area is especially important: pedestal removal never authorizes reconstruction of hidden footwear or peg geometry.

## Validation evidence

### Earlier Leather / Shimmering / Pirate / 8-bit validation

The first validated production family established that Stage B could retain row identity while drifting internally in scale/X/Y, and that deterministic per-cell restoration could return the isolated art to usable canonical registration.

### Final simplified Leather / Shimmering / Pirate / 8-bit validation

A later production pass reused the approved concepts as DESIGN-ONLY inspiration and simplified their rendering.

The accepted Stage B isolation:

- removed head/headwear correctly
- preserved leather, shimmering, pirate, and 8-bit identities
- preserved intended capes
- preserved the pirate viewer-left peg leg
- removed the 8-bit cape
- completely removed the wooden pedestal after a failed pedestal-retaining attempt was rejected
- avoided problematic hidden-geometry reconstruction

The accepted raw Stage B was visibly oversized/repositioned relative to Stage A. Deterministic registration solved every cell independently.

Applied scale factors in that batch were approximately:

- Leather row: 0.878–0.901
- Shimmering row: 0.880–0.888
- Pirate row: 0.832–0.857
- 8-bit row: 0.854–0.869

This corresponds to roughly 10–17% shrink depending on row/cell, demonstrating that whole-sheet resize and prompt offset tuning are insufficient.

The final sheet was rebuilt at exactly 1920×2560 / 480×640 cells and visually accepted.

## Rejected alternatives

Do not:

- counter-bias Stage A smaller or off-center to compensate for expected Stage-B drift
- repeatedly tune prompt offsets for each batch
- use Stage B as final registration authority
- regenerate Stage B solely to chase scale/X/Y drift after isolation already passes
- use whole-sheet resizing as the registration solution
- use non-uniform stretching to force bounds
- rotate or warp cells to force alignment
- reconstruct hidden neck/foot/peg geometry

## Core rule

**Stage A owns design and registration. Stage B owns faithful destructive isolation. Deterministic post-processing restores Stage-A registration with uniform scale + X/Y per cell. Illustrator owns final vector cleanup and layering.**