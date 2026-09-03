# Don't Die LEFT ARM — 4×4 Production Controller v7.65

## Status

**VALIDATED PRODUCTION CONTROLLER FOR NEW LEFT ARM 4×4 GENERATION.**

This controller is the clean production surface derived from the V7.55–V7.65 calibration sequence. It contains no calibration-object names and should be used with new user-supplied briefs.

## Production target

Generate one exploration sheet containing up to four LEFT ARM briefs at once:

- 4 columns × 4 rows
- each populated row = one user brief
- four moderately different variations per populated row
- all rows generated in one image-generation pass
- zero-contact LEFT ARM architecture
- no AI isolation/reconstruction pass afterward

For LEFT ARM generation, the active wide logical sheet is:

- **2400 × 2560 px**
- **600 × 640 px logical cells**
- no gutters
- no visible grid
- pure white background

The extra horizontal width is production workspace on screen-left. It must not increase hero or cosmetic scale.

## Required visual reference

Use the active LEFT ARM wide visual-scale reference.

Each cell contains:

- canonical MAIN HERO context on the right
- one very small neutral scale marker on screen-left

The marker is a generation control only. Replace it with the requested cosmetic and do not reproduce the marker in the output.

The marker establishes the default LEFT ARM production-scale prior. It is intentionally much smaller than a presentation prop.

## Instruction hierarchy

Apply generation instructions in this order.

### Priority 1 — scale and location

First establish the cosmetic at approximately the same **small visual footprint** as the neutral marker.

This is the highest-priority requirement.

- the cosmetic must read as small beside the hero's actual fist
- empty white space does not authorize enlargement
- object complexity does not authorize enlargement
- pose requirements do not authorize enlargement
- longer or hanging geometry may extend beyond the marker when its form requires it, but thickness and overall visual mass must remain based on the small scale prior

### Priority 2 — object identity

Within the already-established small production footprint, make the cosmetic the exact object described by the user.

Each row must remain semantically independent. Do not distribute a required feature across the four columns. If the brief requires a feature, every variation in that row must contain that feature unless the user explicitly says otherwise.

### Priority 3 — pose and design

Apply the requested pose, orientation, physics, and four design variations **without increasing the scale established by Priority 1**.

**Pose may change shape. Pose may not increase scale.**

## Zero-contact rule

Every generated LEFT ARM cosmetic must:

- appear on viewer-left / screen-left of MAIN HERO
- remain separated from every hero pixel by clean white space
- never be depicted as held during image generation
- never touch or overlap the hero, cape, hand, body, pedestal, or shadow
- remain complete and unobstructed
- contain all geometry needed for Image Trace and later Illustrator placement

The generated hero is contextual and disposable. Exact generated hero pixels are not production truth.

## Scale rule

Use the active neutral marker as the universal initial production-scale prior for new LEFT ARM objects.

This is a strong starting prior, not a rigid same-shaped bounding box for every object class.

Natural exceptions:

- long thin objects may extend farther in one direction while remaining thin and small in visual mass
- hanging objects may extend downward while keeping compact widths and component sizes
- broad objects may use a somewhat different silhouette while still reading as small relative to the hero's fist

Do not fall back to presentation scale because the object has unusual geometry.

## Style

At the canonical art scale:

- flat vector-like cartoon construction
- true-black smooth outer contour, visually about 5 px
- round joins/caps
- sparse interior black linework, generally about 3–4 px when needed
- hard-edged solid color regions
- low detail
- no cast shadow
- no texture/noise
- no painterly rendering
- no gradient unless explicitly requested
- clean enough for Illustrator Image Trace

Absolute stroke width remains important even when the cosmetic is small.

## Row binding

For each populated row:

- generate four moderately different interpretations of exactly that row's brief
- keep object identity stable
- vary silhouette details, major forms, decoration placement, and modest proportions where appropriate
- do not import identity or required features from another row
- do not turn required per-object features into one feature per column

Unused rows remain blank only when fewer than four briefs are supplied.

## Pose and physics

The user's brief controls orientation and physics.

For unusual poses, keep the description concise and mechanical. State which component is oriented which way and how connected or hanging parts behave under gravity.

Do not add more pose prose than necessary. The V7.64 calibration showed that excessive pose emphasis can cause scale regression.

## Acceptance gate

PASS only when:

1. every populated row matches the requested object identity
2. each row contains four useful variations
3. all required per-object features appear on every applicable variation
4. cosmetics remain at the small production-scale prior
5. pose/orientation is usable for later Illustrator placement
6. cosmetics are screen-left and zero-contact
7. all object geometry is complete and unobstructed
8. outer stroke remains bold at small scale
9. artwork is low-detail and Image-Trace friendly
10. no AI reconstruction/isolation stage is required

FAIL when:

- a row substitutes another object type
- cosmetics become presentation-sized
- pose instructions cause scale inflation
- required features are distributed between columns instead of repeated per variation
- hero/cosmetic contact hides geometry
- the object would need substantial reconstruction before Image Trace

## Illustrator handoff

After selecting a variation:

1. use the complete zero-contact cosmetic pixels
2. Image Trace / perform normal vector cleanup
3. move and rotate into the canonical viewer-left hand
4. apply only modest scale correction if genuinely necessary
5. layer the canonical hand over the cosmetic
6. perform normal final vector cleanup

The production pipeline should not depend on reconstructing geometry lost during generation.

## Clean-input rule

For normal production, the item briefs should contain only the current requested cosmetics. Do not mention prior calibration objects, prior failures, or negative examples derived from previous sheets.

The controller carries the reusable production architecture; the user brief carries the current object design.
