# Don't Die LEFT ARM — 4×4 Production Controller

## Status

**VALIDATED AND LOCKED PRODUCTION CONTROLLER FOR NEW LEFT ARM 4×4 GENERATION.**

This controller is production infrastructure. Do not redesign, optimize, extend, or add one-off exceptions to it during normal production.

Normal user input may change only the current row briefs. The controller owns scale, placement, detail hierarchy, zero-contact behavior, sheet geometry, exemplar behavior, and production acceptance rules.

## Locked production target

Generate one sheet in one image-generation pass:

- 2400 × 2560 px
- 4 columns × 4 rows
- 600 × 640 px logical cells
- one brief per populated row
- four moderately different variations per populated row
- pure white background
- no gutters or visible grid
- canonical MAIN HERO context on the right
- complete cosmetic on screen-left
- zero contact
- no AI isolation/reconstruction pass afterward

## Required visual reference — finished cosmetic exemplar

Use:

`reference-sheets/LEFT_ARM_FINISHED_COSMETIC_EXEMPLAR_REFERENCE_4X4.png`

Each cell contains a tiny neutral outlined finished-cosmetic exemplar on screen-left. Replace that exemplar with the requested cosmetic. Do not reproduce the exemplar itself.

The exemplar is the visual authority for intended final cosmetic visual mass, small-side production bias, bold outline weight at tiny scale, very low detail, finished-art status, and relationship to MAIN HERO.

The replacement cosmetic should read like the same kind of tiny finished production asset, not like a normal standalone icon.

## Locked instruction hierarchy

1. **Match or undercut the tiny finished-exemplar visual mass / location**
2. **Simplify detail to survive that scale**
3. **Exact object identity**
4. **Pose / design / variation**

**If size and detail conflict: keep the small size and remove the detail.**

**When uncertain: smaller and simpler wins.**

These priorities may not be reordered by a row brief.

## Finished-exemplar scale rule

Treat the exemplar as an approximate maximum default total visual mass, not a minimum and not a target that must be filled.

The requested cosmetic should occupy approximately the same or smaller total visual mass.

Do not enlarge the replacement because of real-world size, comparison to another approved cosmetic, composition balance, empty white space, optional detail, or a phrase such as "large," "big," "full-size," "same size as," or "similar scale to."

Slightly undersized source art is desirable because enlargement in Illustrator is easy. Oversized source art is the failure mode to avoid.

## Mandatory conflict gate

Before building or delivering a LEFT ARM production prompt, inspect every user instruction for conflict with the locked controller.

A conflict exists when the brief asks for or implies a change to any locked invariant, including:

- generation scale or visual-mass exceptions
- hero placement
- screen-left zero-contact architecture
- sheet/cell geometry
- detail hierarchy
- exemplar authority
- generated grip/hand interaction
- hidden geometry or reconstruction workflow
- presentation enlargement
- replacing the finished exemplar with another scale controller

If a conflict exists:

1. **STOP before creating the production package.**
2. Tell the user which instruction conflicts and what failure mode it risks.
3. Offer a safe rewording that preserves design intent without changing the locked system.
4. Proceed only after the user accepts or supplies a non-conflicting brief.

Do not silently reinterpret the conflict. Do not create a special-case controller. Do not "helpfully" add an exception.

### Reference-asset rule

Existing approved art may be used for:

- palette
- design language
- silhouette vocabulary
- thematic family resemblance
- material treatment
- proportion cues that do not alter canonical generation scale

Existing approved art may **not** override canonical LEFT ARM generation scale unless the canonical controller itself is formally revised through a separate calibration process.

Example of safe phrasing:

`Match Gold Armor and Gold Sword in palette/design language. Use Mirror Shield as a silhouette/proportion reference only. Preserve canonical LEFT ARM generation scale.`

Unsafe phrasing:

`Make it the same scale as Mirror Shield.`

The unsafe version must trigger the conflict gate.

## Detail follows scale

Small final display size is intentionally a forcing function for simplicity.

Do not design a detailed object first and enlarge it so the detail survives. Lock tiny production footprint first, simplify silhouette and secondary geometry, remove nonessential interior lines and color regions, and retain only identity-critical cues.

If a detail requires making the object larger, simplify or delete the detail unless it is essential to identity.

## Object-shape behavior

- Compact/simple objects: stay at or below exemplar visual mass.
- Long/thin/hanging objects: may extend farther only by remaining proportionally narrow and low in total visual mass.
- Creatures/character-like objects: strong miniature bias; extremely simplified anatomy and face.
- Bottles/containers/multi-part handheld objects: strong miniature bias; simple and compact secondary construction.
- Broad objects: may widen naturally but must remain tiny relative to MAIN HERO.

Real-world size does not control production scale. Cosmetic production scale wins.

## Exact row identity

Each populated row is semantically independent. Every column in that row must remain the exact requested object type.

Required features apply to every applicable variation unless the user explicitly requests otherwise. Do not distribute one required feature across four columns. Do not substitute generic fantasy-item defaults.

## Pose / design

Pose and physics are subordinate to established scale.

**Pose may change shape. Pose may not increase scale.**

**Detail may change design. Detail may not increase scale.**

## Zero-contact rule

Every cosmetic must:

- appear viewer-left / screen-left of MAIN HERO
- remain separated from every hero pixel by clean white space
- never be depicted as held during generation
- never touch or overlap hero, hand, cape, body, pedestal, or shadow
- remain complete and unobstructed
- contain all standalone geometry needed for Image Trace and later Illustrator placement

Do not add a generated hand around the cosmetic. The hero is contextual and disposable.

## Style

Match approved Don't Die production logic:

- flat vector-like cartoon construction
- bold smooth true-black outer contour, visually about 5 px at canonical scale
- round joins/caps
- sparse interior linework only where necessary
- hard-edged solid color regions
- extremely low detail appropriate for tiny final display
- no cast shadow on cosmetic
- no texture/noise
- no painterly rendering
- no gradient unless explicitly requested and not scale-inducing
- Illustrator/Image-Trace friendly

## Prompt-construction lock

For normal production, the generated production TXT must be built from the canonical locked production template plus the user's sanitized row briefs.

Only row-brief content may vary.

The production-invariant section must not be rewritten, expanded with one-off rules, or altered to accommodate a particular object.

If the instance believes the invariant section needs to change, that is not a production task; it is a new calibration/change-control task and must be handled separately.

## Acceptance gate

PASS only when:

1. every populated row has the exact requested identity
2. each populated row has four useful variations
3. required features repeat correctly
4. cosmetics remain approximately at or below the tiny finished-exemplar visual mass
5. detail is simplified to fit scale rather than scale enlarged to fit detail
6. elongated items stay narrow/low-mass
7. semantic complexity does not inflate scale
8. cosmetics are screen-left and zero-contact
9. geometry is complete and unobstructed
10. outer stroke remains bold and artwork is Image-Trace friendly
11. no AI reconstruction/isolation pass is required
12. no user instruction was converted into a hidden controller exception

FAIL if a replacement becomes a normal standalone icon, detail forces enlargement, real-world size inflates scale, a reference asset overrides generation scale, row identity changes, geometry touches the hero, or substantial reconstruction is required.

## Illustrator handoff

After selection:

1. use the complete zero-contact cosmetic pixels
2. Image Trace / normal vector cleanup
3. move and rotate into the canonical viewer-left hand
4. enlarge modestly if desired; source art intentionally biases small
5. layer the canonical hand over the cosmetic
6. perform normal final vector cleanup

## Clean-input rule

Normal production briefs contain only current requested cosmetics. Do not mention calibration objects, previous failures, prior test versions, or corrective examples from old sheets.

The controller owns reusable production behavior. The user's brief owns current object identity, visual features, palette, and pose only to the extent those do not conflict with locked production invariants.