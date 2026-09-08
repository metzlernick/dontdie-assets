# Don't Die Cosmetic Art — RIGHT ARM Production Workflow

**Status: VALIDATED / ACTIVE / REGRESSION BASELINE LOCKED**

This active workflow restores the historically validated RIGHT ARM isolation route and supersedes any later documentation that incorrectly described RIGHT ARM as Stage A only.

## Architecture

**Stage A held-object generation on canonical MAIN HERO 4×4 → Stage B isolation + minimal hidden-grip reconstruction → deterministic scale/X/Y registration restoration → final isolated asset → Illustrator final hand overlay/vector cleanup**

RIGHT ARM does **not** pass until an isolated asset exists.

## Stage A — registered held-object generation

PRIMARY_CANVAS_AUTHORITY:
- `registration/MAIN_HERO_REGISTRATION_4X4.png`

Sheet:
- 1920×2560 logical canvas
- 4×4
- 480×640 logical cells
- four concepts × four moderate variants
- full MAIN HERO remains visible as registration context

For the validated regression/setup, the exact canonical hero sheet is the only active generation image unless the current brief genuinely requires an approved design reference. Approved RIGHT ARM art and placement/reference sheets may be reviewed before prompt construction for design language, scale class, and category understanding, but do not automatically become active image-generation inputs.

### Stage A owns
- object identity
- body-relative production scale
- grip placement
- broad orientation
- silhouette and style
- visible held-object geometry
- four useful variants

### Grip target
Per canonical 480×640 cell:
- approximate grip center: **X=360, Y=344**
- principal handle axis: **~75° from horizontal**
- broader hand region: approximately X=320–395, Y=320–385

The held object should pass through/behind the existing viewer-right hand grip zone rather than float beside the fist.

Compact weapons/tools are one-handed. Long staffs, rods, poles, fishing rods, or similar objects may legitimately extend substantially beyond the hand when required by identity. Empty cell space never authorizes presentation enlargement.

## Scale rule

Stage A is the canonical scale/X/Y authority for downstream isolation.

Use existing approved RIGHT ARM art and category placement/reference sheets as scale/design precedents. Match the established body-relative equipment regime rather than centering or enlarging an object to fill the cell.

Real-world size does not override production size. Simplify detail before enlarging beyond the approved category regime.

Semantic identity does not override the scale regime. Words such as `gold`, `ceremonial`, `legendary`, `powerful`, `sword`, `heavy`, or `dramatic` never by themselves authorize enlargement.

## Stage B — isolation + minimal hidden-grip reconstruction

Stage B receives the approved Stage-A artwork as the literal artwork authority.

Remove completely:
- hero/head/face/hair/body
- hands/fingers/skin/gloves that are not part of the item
- cape
- pedestal/context

Preserve:
- visible approved item design
- colors/material treatment
- broad orientation
- row/column identity
- legitimate thin structures such as fishing line
- attached semantic item parts such as lure, bobber, fish, flame, ribbon, cable, etc. when they belong to the cosmetic

Where the hand hid a small part of the handle/grip, reconstruct **only the minimum missing handle/grip segment** needed to make the item a clean standalone object.

Hard Stage-B rules:
- continuous grip geometry
- no hand-shaped holes
- no surviving skin/glove pixels
- no redesign outside the former hand overlap
- no intentional recentering
- no intentional presentation enlargement
- no mirroring or side swapping
- preserve row identity independently; no cross-row borrowing

## Stage-B scale drift rule

Generative isolation may presentation-enlarge or shift isolated items even when isolation quality is otherwise good.

**Do not regenerate solely to chase raw Stage-B scale/X/Y drift.**

Authority split:
- **Stage A = scale/X/Y/registration authority**
- **Stage B = isolated-art + completed-hidden-grip authority**

A faithful Stage-B isolation can PASS even if its raw isolated object is visibly larger than Stage A. The next deterministic stage restores the item to Stage-A production registration.

Long/thin items such as fishing rods retain their legitimate Stage-A extent and must not be normalized to compact dagger/sword dimensions.

## Deterministic registration restoration — mandatory

After Stage B passes isolation:
- solve each cell independently
- restore Stage-A scale and X/Y placement using **uniform scale + translation only**
- no generative redraw
- no rotation unless the deterministic comparison proves the Stage-B art itself changed rotation and a pure Stage-A restoration requires it; default is no rotation
- no non-uniform stretch
- no warp
- no semantic changes
- rebuild exactly 1920×2560 with 480×640 logical cells for a full 4×4 batch

For a validated 4×1 fallback row, restore each of its four cells to the corresponding Stage-A row registration, then recombine the restored rows into the canonical 4×4 sheet.

## Generic image-generation backend failure fallback

A generic backend/tool failure after successful submission is not evidence that the RIGHT ARM workflow or package is wrong.

For Stage-B 4×4 isolation:
1. retry the same valid 4×4 package once;
2. if the same generic backend failure repeats, split execution into independent **4×1 row isolation jobs**;
3. preserve the exact same Stage-B isolation semantics for each row;
4. after all rows pass, recombine them and perform the normal deterministic registration restoration;
5. do not redesign Stage A, Stage B, scale rules, or grip rules merely because the backend is temporarily less reliable on the 4×4 edit.

This fallback has been validated by a successful 4×1 fishing-rod isolation after repeated 4×4 backend failures. The returned rods were presentation-enlarged, but isolation quality passed; the correct action is to retain them and restore scale/X/Y deterministically from Stage A.

## Style

- Don't Die flat vector-like cosmetic style
- bold true-black rounded primary outer stroke, approximately 5 px at canonical 480×640 scale
- hard-edged solid fills
- restrained interior linework
- low detail
- no painterly rendering
- no soft airbrushed shading
- no texture/noise
- no cast/drop shadow

Prompt-specific exceptions may override style constraints, e.g. an explicitly unoutlined flame or explicitly required controlled energy-blade gradient/glow.

## Locked regression baseline

The validated four-row Stage-A control is:
1. **Dagger** — compact one-handed blade, correct viewer-right grip behavior.
2. **Fishing Rod** — justified long/thin extent with handle registered through the viewer-right grip zone.
3. **Gold Sword** — compact one-handed ceremonial sword; accepted corrected row uses the V3 row-only local regression rather than the oversized V1 row.
4. **Charred Interloper Flamethrower** — compact one-handed dark/charred weapon with hot orange/fire accents and usable grip geometry.

Rows 1, 2, and 4 are preserved from the accepted V1 system regression. Row 3 is preserved from the accepted V3 row-only Gold Sword correction. This deterministic merged control is the current Stage-A RIGHT ARM regression baseline.

The failed V2 full-sheet rerun is rejected as a regression-strategy SYSTEM FAIL because it swapped all objects to the opposite hand while attempting only a Gold Sword scale correction. It is not evidence against the RIGHT ARM architecture.

## Stage A acceptance

Stage A passes when:
- all row identities and explicit hard brief constraints are present
- four useful variants exist per row
- scale is body-relative and consistent with approved production art
- object passes through the viewer-right grip zone
- broad orientation is plausible
- no cross-row contamination
- no presentation centering/enlargement
- hero remains usable registration context

Stage A PASS leaves RIGHT ARM **IN PROGRESS**.

## Stage B acceptance

Stage B passes when:
- hero/hand/cape/pedestal/context are fully removed
- item identity/design/colors are preserved
- hidden hand overlap is reconstructed minimally into continuous grip geometry
- no hand-shaped holes or skin/glove pixels remain
- attached semantic item parts are retained
- no cross-row contamination

Raw scale/X/Y drift alone is not a Stage-B failure.

Stage B PASS leaves RIGHT ARM **IN PROGRESS**.

## Minimal-change regression rule — mandatory

If a multi-row regression has already established passing rows and one row has only a local BRIEF FAIL, do not regenerate the passing rows just to test the failed row's prompt correction.

Instead:
1. freeze the last approved system behavior as the baseline;
2. isolate only the failed row/cells for the next generative regression;
3. preserve the same hand side, hero registration, grip convention, and scale system already demonstrated by the passing baseline;
4. evaluate only the failed row against the local correction;
5. if it passes, merge/replace that row deterministically into the accepted baseline;
6. do not expose passing rows to new generative variance unless the test is explicitly a category-wide SYSTEM regression.

A local row test may use a cropped 4-cell strip derived from the accepted full-sheet baseline. This is a regression device and also the approved backend-complexity fallback for Stage-B isolation when a valid 4×4 job repeatedly fails generically.

## Final category gate

RIGHT ARM becomes **COMPLETE** only after:
1. Stage A passes;
2. Stage B isolation passes;
3. deterministic scale/X/Y registration restoration is complete;
4. final isolated artwork exists at canonical logical registration.

Illustrator then owns final vector tracing/cleanup and exact in-game canonical hand/finger overlay. Illustrator is not a substitute for required AI isolation.

## Failure classification

SYSTEM FAIL examples:
- wrong/missing canonical generation base
- object consistently floats away from grip zone
- gross category-wide scale regime failure
- wrong hand side/category behavior
- Stage B leaves hero/hand/context or reconstructs unrelated geometry
- deterministic restoration corrupts identity/registration
- local correction causes already-passing system behavior to regress

BRIEF FAIL examples:
- one requested color/symbol/count/orientation/detail/pose constraint is missed while category architecture otherwise works

A generic image-generation backend error with no input-specific reason is **neither a SYSTEM FAIL nor a BRIEF FAIL** by itself. Use the retry/fallback execution rule without changing architecture.