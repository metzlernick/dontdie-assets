# Don't Die Cosmetic Art — RIGHT ARM Production Workflow

**Status: VALIDATED / ACTIVE**

This active workflow promotes the historically validated RIGHT ARM route from calibration into production authority. It does not borrow HATS, LEFT ARM, ARMOR, or ACCESSORY stages.

## Architecture

**Single registered generation pass on canonical MAIN HERO 4×4 → Illustrator hand/grip cleanup and final registration**

There is **no normal AI Stage B** for RIGHT ARM.

Historical validation showed that generative cleanup/isolation made held-object geometry and registration worse, while final vector cleanup is already owned by Illustrator.

## Canonical generation base

PRIMARY_CANVAS_AUTHORITY:
- `registration/MAIN_HERO_REGISTRATION_4X4.png`

Sheet:
- 1920×2560 logical canvas
- 4×4
- 480×640 logical cells
- four concepts × four moderate variants
- full MAIN HERO remains visible as registration context

For the validated regression/setup, the exact canonical hero sheet is the only active generation image. Approved RIGHT ARM art and placement/reference sheets may be reviewed before prompt construction for design language, scale class, and category understanding, but do not automatically place those sheets into the image-generation input. This avoids reference-soup contamination.

## RIGHT ARM responsibility split

Generation owns:
- object identity
- approximate body-relative production scale
- approximate grip placement
- broad orientation
- silhouette and style
- continuous usable grip/handle geometry
- four useful variants

Generation does **not** own:
- exact final handle width
- exact finger-wrap placement
- exact grip occlusion
- exact path geometry
- exact vector registration
- exact final transform

Illustrator owns those final details.

## Grip target

Per canonical 480×640 cell:
- approximate grip center: **X=360, Y=344**
- principal handle axis: **~75° from horizontal**
- approximate visible grip-zone: vertical capsule centered around `(357,346)`, top ~327, bottom ~365, half-width ~11–13 px
- broader hand region: approximately X=320–395, Y=320–385

The held object should pass through/behind the existing viewer-right hand grip zone rather than float beside the fist.

Compact weapons/tools are one-handed. Long staffs, rods, poles, or similar objects may extend substantially beyond the hand when required by identity, but empty cell space never authorizes presentation enlargement.

## Scale rule

Use existing approved RIGHT ARM art and the category placement/reference sheets as pre-generation scale/design precedents. Match the established body-relative equipment regime rather than centering or enlarging an object to fill the cell.

Real-world size does not override production size. Simplify detail before enlarging beyond the approved category regime.

Semantic identity does not override the scale regime. Words such as `gold`, `ceremonial`, `legendary`, `powerful`, `sword`, `heavy`, or `dramatic` never by themselves authorize enlargement.

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

## Stage acceptance

A RIGHT ARM generation passes when:
- all four row identities and explicit hard brief constraints are present
- four useful variants exist per row
- object scale is body-relative and consistent with existing approved RIGHT ARM production art
- object is attached to / passes through the viewer-right grip zone rather than floating away from the hand
- broad orientation is plausible for the object
- grip geometry is continuous enough for Illustrator cleanup
- no cross-row contamination
- no presentation centering/enlargement
- hero remains usable registration context

Approximate finger/hand rendering is not required to be final production geometry. Do not regenerate solely because the AI hand/grip is not Illustrator-perfect when the object itself is usable.

## Minimal-change regression rule — mandatory

If a multi-row regression has already established passing rows and one row has only a local BRIEF FAIL, **do not regenerate the passing rows just to test the failed row's prompt correction**.

Instead:
1. freeze the last approved system behavior as the baseline;
2. isolate only the failed row/cells for the next generative regression;
3. preserve the same hand side, hero registration, grip convention, and scale system already demonstrated by the passing baseline;
4. evaluate only the failed row against the local correction;
5. if it passes, merge/replace that row deterministically into the accepted baseline for review or downstream use;
6. do not expose passing rows to new generative variance unless the test is explicitly a category-wide SYSTEM regression.

A local row test may use a cropped 4-cell strip derived from the accepted full-sheet baseline. This is a regression device, not a new production architecture.

If a local BRIEF correction unexpectedly changes hand side/category, grip side, hero registration, or other already-passing system behavior, classify that attempt as **SYSTEM FAIL of the regression strategy**, reject it, and return to the last accepted baseline. Do not reinterpret the category architecture from that failed attempt.

## Final category gate

A passing single registered generation is the completed AI-generation deliverable for RIGHT ARM and proceeds directly to Illustrator.

In Illustrator:
1. isolate/trace the selected object
2. straighten/reconstruct hidden handle sections if needed
3. overlay the canonical right-hand/finger artwork
4. apply precise scale/rotation/X/Y registration
5. complete vector cleanup

Do **not** invent a generative Stage B/isolation pass before Illustrator.

## Failure classification

SYSTEM FAIL examples:
- wrong/missing canonical generation base
- object consistently floats away from the grip zone
- gross category-wide scale regime failure
- reference contamination changes hero/context or held-object behavior
- wrong side/category behavior
- an invented downstream AI stage
- a supposedly local brief correction causes already-passing hand-side/system behavior to regress

BRIEF FAIL examples:
- one requested color/symbol/count/orientation/detail/scale constraint is missed while the registered held-object architecture otherwise works

A BRIEF FAIL does not reopen this architecture and does not justify regenerating already-passing controls.