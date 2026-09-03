# Don't Die LEFT ARM — 4×4 Production Controller

## Status

**VALIDATED PRODUCTION CONTROLLER FOR NEW LEFT ARM 4×4 GENERATION.**

This is the clean production surface. Normal user input is only up to four current LEFT ARM descriptions. Calibration examples and failure history do not belong in production briefs.

## Production target

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

## Required visual reference

Use the active final LEFT ARM production-scale reference in `reference-sheets/`.

Each cell contains a tiny neutral marker on screen-left. Replace the marker conceptually with the requested cosmetic; never reproduce the marker.

The marker is an approximate **maximum default visual-mass guide**, not a target that must be filled.

## Permanent instruction hierarchy

Apply instructions in this order:

1. **Small production scale / location**
2. **Simplify detail to survive that scale**
3. **Exact object identity**
4. **Pose / design / variation**

Scale is established before detail.

**If size and detail conflict: keep the small size and remove the detail.**

**When uncertain: smaller and simpler wins.**

## Small-side bias

Slightly undersized source art is desirable because enlargement in Illustrator is easy. Oversized generation is a production failure.

Do not enlarge because:

- the canvas has empty white space
- the object is detailed or semantically complex
- real-world proportions suggest a large object
- readability would improve
- a creature needs anatomy or expression
- a bottle needs a label or construction detail
- composition feels unbalanced

The cosmetic is subordinate to MAIN HERO and should read as a small game asset beside the hero's fist.

## Detail follows scale

Small final display size is a forcing function for simplicity.

Do not design a detailed object and enlarge it so the detail survives. Instead:

1. establish the tiny production size
2. remove details that do not survive at that size
3. simplify silhouette and color regions
4. retain only the few features necessary for identity

Tiny cosmetics should use very few major shapes, few interior lines, few color regions, large readable features, and no micro-decoration or texture-like detail.

Variation comes primarily from simple silhouette, proportion, and major color/decorative placement changes — not from adding complexity.

## Universal scale prior with semantic-class bias

Use the same universal small baseline for arbitrary objects, then bias smaller when semantic complexity tends to inflate them.

### Compact simple objects

Stay at or below the marker's small visual-mass class.

### Long / thin / hanging objects

May extend farther in one direction, but remain proportionally narrow and small in total visual mass. Simplify along the length.

### Creatures / character-like objects

Apply a **strong miniature bias**. They must read as tiny mascot/toy cosmetics, not companion characters. Use extremely simplified anatomy and only essential facial features. Never enlarge to preserve wings, feet, feathers, expression, or body detail.

### Bottles / containers / multi-part handheld objects

Apply a **strong miniature bias**. Keep body, neck, attachment, cloth, flame, cap, or similar parts simple and compact. Use minimal or no label detail unless identity requires it. Never enlarge to preserve wrapping, glass detail, labels, or internal construction.

### Broad objects

May use a wider silhouette but remain compact relative to the hero's fist.

Real-world size does not control production size. Cosmetic production scale wins.

## Exact row identity

Each populated row is semantically independent. Every column in that row must remain the exact requested object type.

Required features apply to every applicable variation unless the user explicitly requests otherwise. Do not distribute one required feature across four columns. Do not substitute generic fantasy-item defaults.

## Pose / design

Pose and physics are subordinate to established scale. Keep unusual mechanical pose descriptions concise.

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

At canonical art scale:

- flat vector-like cartoon construction
- smooth true-black outer contour, visually about 5 px
- round joins/caps
- sparse interior linework only where necessary
- hard-edged solid color regions
- **very low detail appropriate for tiny final display**
- no cast shadow on the cosmetic
- no texture/noise
- no painterly rendering
- no gradient unless explicitly requested
- Illustrator/Image-Trace friendly

Absolute outer stroke remains bold even when the cosmetic is tiny.

## Acceptance gate

PASS only when:

1. every populated row has the exact requested identity
2. each populated row has four useful variations
3. required features repeat correctly
4. cosmetics are at or below the small production-scale prior
5. detail has been simplified to fit the scale rather than scale enlarged to fit detail
6. creature-like and container-like objects receive strong miniature bias when applicable
7. cosmetics are screen-left and zero-contact
8. geometry is complete and unobstructed
9. broad pose/orientation is usable
10. outer stroke remains bold and construction is Image-Trace friendly
11. no AI reconstruction/isolation pass is required

FAIL if an object becomes presentation-sized, detail forces enlargement, semantic class causes size inflation, row identity changes, geometry touches the hero, or substantial reconstruction is required.

## Illustrator handoff

After selection:

1. use the complete zero-contact cosmetic pixels
2. Image Trace / normal vector cleanup
3. move and rotate into the canonical viewer-left hand
4. enlarge modestly if desired; source art intentionally biases small
5. layer the canonical hand over the cosmetic
6. perform normal final vector cleanup

## Clean-input rule

Normal production briefs contain only the current requested cosmetics. Do not mention calibration objects, previous failures, prior test versions, or corrective examples. The controller owns reusable production behavior; the user's brief owns current object identity.