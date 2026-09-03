# Don't Die LEFT ARM — 4×4 Production Controller

## Status

**VALIDATED AND LOCKED PRODUCTION CONTROLLER FOR NEW LEFT ARM 4×4 GENERATION.**

This controller is production infrastructure. Do not redesign, optimize, extend, or add one-off exceptions during normal production. Normal user input may change only current row briefs.

## Locked production target

- one 2400×2560 sheet in one pass
- 4 columns × 4 rows; 600×640 logical cells
- one brief per populated row; four variations per row
- white background; no gutters/grid
- canonical MAIN HERO on screen-right
- complete standalone cosmetic on screen-left
- zero contact; no generated grip; no hidden geometry; no AI isolation/reconstruction pass

## Required visual reference — V2.1 single contiguous finished exemplar

Use `reference-sheets/LEFT_ARM_FINISHED_COSMETIC_EXEMPLAR_REFERENCE_4X4.png`.

Each cell contains **one tiny contiguous neutral outlined finished-cosmetic exemplar** on screen-left. It is the visual authority for final visual mass, small-side bias, bold outline behavior, low detail, finished-art status, and relationship to MAIN HERO.

Replace the exemplar with the requested cosmetic. Do not reproduce its geometry. The replacement should read as belonging to the same tiny finished-art scale family and should occupy approximately the same or smaller total visual mass.

The previous multi-example V2 test proved the stronger visual-scale concept but caused detached connector-dot artifacts. V2.1 retained the successful scale behavior while returning to one contiguous exemplar and eliminating those artifacts. V2.1 is the canonical production architecture.

## Locked hierarchy

1. **Tiny finished-exemplar scale/location**
2. **Simplify detail to survive scale**
3. **Exact object identity**
4. **Pose/design/variation**

If size and detail conflict, keep the smaller size and remove detail. When uncertain, smaller and simpler wins. These priorities may not be reordered by a row brief.

## Scale rule

Treat the exemplar as an approximate maximum default total visual mass, not a minimum. Do not enlarge because of real-world size, another approved cosmetic, composition balance, empty white space, optional detail, or phrases such as `large`, `big`, `same size as`, or `similar scale to`.

Slightly undersized source art is desirable because Illustrator enlargement is easy. Oversized source art is the failure mode to avoid.

Long/thin/hanging objects may extend farther only while staying proportionally narrow and low-mass. Broad objects may widen naturally but remain tiny relative to MAIN HERO. Creatures and bottles/containers receive strong miniature bias.

## Detached-artifact rule

Do not copy visual-reference residue into the generated composition. Unless explicitly identity-critical to the requested cosmetic, do not add dots, beads, ellipses, particles, connector marks, trails, or floating secondary shapes between cosmetic and hero.

## Mandatory conflict gate

Before building or delivering a LEFT ARM production prompt, inspect every user instruction for conflict with the locked controller.

A conflict includes requests or implications that alter generation scale/visual mass, hero placement, zero-contact architecture, sheet/cell geometry, detail hierarchy, exemplar authority, generated grip interaction, hidden geometry/reconstruction workflow, presentation enlargement, or the visual scale controller.

If a conflict exists:
1. STOP before creating the package.
2. Identify the conflicting instruction and likely failure mode.
3. Offer a safe rewording preserving design intent.
4. Proceed only after the brief no longer conflicts.

Do not silently reinterpret a conflict or create a special-case controller.

Approved art may guide palette, design language, silhouette vocabulary, thematic family, material treatment, and non-scale proportion cues. It may not override canonical generation scale.

## Detail follows scale

Lock tiny production footprint first. Simplify silhouette and secondary geometry until identity survives. Remove nonessential interior lines/color regions. If a detail requires enlargement, simplify or delete it unless identity-critical.

## Row identity and variation

Each populated row is semantically independent and must remain the exact requested object type. Required features repeat in every applicable variation. Four useful but simple interpretations are required. Variation may not increase scale or complexity enough to violate exemplar visual mass.

Pose may change shape. Pose may not increase scale. Detail may change design. Detail may not increase scale.

## Zero-contact

Every cosmetic must remain viewer-left/screen-left, separated from every hero pixel by clean white space, complete and unobstructed, with standalone geometry for Image Trace and later Illustrator placement. Never depict the hero holding it during generation.

## Style

- flat vector-like cartoon
- bold smooth true-black outer contour, visually about 5 px at canonical scale
- round joins/caps
- sparse interior linework
- hard-edged solid colors
- extremely low detail
- no cosmetic cast shadow, texture/noise, or painterly rendering
- no gradient unless explicitly requested and not scale-inducing
- Illustrator/Image-Trace friendly

## Prompt-construction lock

Normal production TXT = canonical `LEFT_ARM_PRODUCTION_PROMPT_TEMPLATE.txt` + sanitized row briefs. Only row-brief content may vary. If invariant text needs changing, that is a separate calibration/change-control task.

## Validation record

V2.1 was regression-tested in a fresh instance using four materially different briefs:
- golden ceremonial shield
- tan money bag
- diagonal metal spatula
- hanging black lantern with green flame

PASS criteria observed across the 4×4 output:
- all four identities correct
- four variations per row
- small production-scale neighborhood maintained across broad, compact, long/thin, and hanging forms
- detail simplified to survive scale
- screen-left zero-contact maintained
- no cross-row scale contamination
- no detached connector-dot artifacts

This regression batch is the validation proof for V2.1. Stop calibration unless a genuinely new production class exposes a repeatable failure.

## Illustrator handoff

After selection: Image Trace/cleanup, move/rotate into canonical viewer-left hand, enlarge modestly if desired, layer canonical hand over cosmetic, finish vector cleanup.

## Clean-input rule

Normal production briefs contain only current requested cosmetics. Do not mention calibration objects, previous failures, prior test versions, or corrective examples from old sheets.