# Don't Die LEFT ARM — Zero-Contact Production Workflow v7.65

## Status

**VALIDATED PRODUCTION AUTHORITY FOR LEFT ARM HELD ITEMS.**

This category-specific workflow supersedes older LEFT ARM instructions that place generated objects over the hero, hide geometry under a generated hand, require AI Stage B reconstruction, or rely on Illustrator reconstruction of missing geometry.

For scalable one-pass 4×4 generation, also use `LEFT_ARM_4X4_PRODUCTION_CONTROLLER.md`.

## Core architecture

LEFT ARM generation uses **zero-contact registration**:

- canonical MAIN HERO context on the right
- complete cosmetic on viewer-left / screen-left
- pure white background
- clear white separation between cosmetic and hero
- no generated grip
- no object/hero overlap
- no hidden cosmetic geometry
- no AI isolation/reconstruction pass afterward

The hero exists only as body-relative scale/context. The cosmetic is generated complete and standalone so the production pass is limited to Image Trace, normal cleanup, placement, and canonical hand layering.

## Validated scalable 4×4 format

V7.65 validated a single-generation production sheet with four unrelated LEFT ARM briefs and four variations per brief.

For LEFT ARM, use:

- **2400 × 2560 px logical sheet**
- **4 columns × 4 rows**
- **600 × 640 px logical cells**
- no gutters
- no visible grid/labels
- pure white background

The extra 120 px of width per cell is screen-left workspace. It does **not** authorize larger cosmetics or a larger hero.

Each populated row is one current user brief. Each row produces four moderately different variations of that same brief.

## Active visual-scale reference

Use the active LEFT ARM wide visual-scale reference. Each cell contains a very small neutral marker on screen-left beside the hero context.

The marker establishes the **universal initial production-scale prior** for new LEFT ARM cosmetics.

The generated cosmetic replaces the marker conceptually; the marker itself must not appear in the output.

Natural long/hanging geometry may extend beyond the marker in one direction, but the item's component thickness and overall visual mass must remain small relative to the hero's fist.

## Production instruction hierarchy

The V7.65 calibration established this ordering:

1. **Scale and location** — first establish the item at the small marker-derived production scale on screen-left.
2. **Identity** — make it the exact requested object without increasing scale.
3. **Pose and design** — apply orientation, physics, and variation without increasing the established scale.

**Pose may change shape. Pose may not increase scale.**

This ordering matters. V7.64 showed that adding pose/detail emphasis without explicit scale priority can cause the model to enlarge otherwise-correct cosmetics even when the visual proxy is unchanged.

## Stage A is the geometry authority

The first generation must already contain:

- correct object identity
- complete continuous silhouette
- all required handles/attachments/components
- correct broad pose/orientation
- usable hanging/rigid physics
- low-detail Don't Die styling
- approximately final production scale
- absolute bold stroke suitable for Image Trace

Do not approve a result that would require rebuilding missing cosmetic geometry.

## No AI Stage B for LEFT ARM

For LEFT ARM:

- do not generate the object over the hero hand
- do not hide geometry behind hero pixels
- do not ask a later generation to isolate, reconstruct, redraw, resize, or clean the chosen object
- do not use semantic pixel masking across a touching hero/object boundary

If an object-only raster is required, obtain it deterministically from the zero-contact source without changing cosmetic pixels.

## Placement

LEFT ARM means **viewer-left / screen-left lowered-hand side**.

During generation, the cosmetic stays separate from the character. Exact final X/Y, small rotation, and hand occlusion are performed later in Illustrator.

The generated hero may drift somewhat because it is disposable. Hero drift is only a failure if it becomes large enough to corrupt the scale/context relationship.

## Scale

Do not presentation-enlarge LEFT ARM cosmetics.

The current production baseline is the validated V7.65 small universal visual-scale prior, not the older V7.54 object-by-object scale percentages.

The universal marker is a strong initial scale prior across arbitrary object classes. It is not a requirement that every object share an identical rectangular bounding box.

- broad objects remain compact relative to the hero's fist
- long thin objects may extend farther while staying thin
- hanging items may extend downward while preserving small component scale
- empty white space is expected

## Style / Image Trace

The isolated cosmetic should use:

- crisp continuous true-black outer contour
- approximately 5 px visual outer stroke at canonical art scale
- round joins/caps
- sparse ~3–4 px interior linework where needed
- large flat color regions
- minimal detail
- no texture/noise
- no cast shadow
- pure white surrounding field
- no gradients unless explicitly requested

Soft effects such as flame, smoke, vapor, or explicitly unoutlined energy may use their requested outline exception.

## Row binding and required features

For one-pass 4×4 production:

- one row = one brief
- four columns = four variations
- keep row identity stable
- every required per-object feature must appear on every applicable variation
- do not distribute a feature across columns unless the user explicitly asks for that behavior

Keep production briefs clean. Do not mention prior calibration objects or prior failures in normal production prompts.

## Object physics

### Rigid objects

Generate complete uninterrupted geometry. Preserve the requested broad orientation. Illustrator may later make a modest rotation for final hand placement.

### Hanging / connected objects

Describe the mechanical relationship concisely: which component is near the future hand, where the connection leaves it, and which component hangs under gravity.

Do not over-explain pose. Detailed pose prose can compete with scale priority.

## Acceptance gate

PASS only when all are true:

1. correct requested object identity
2. four useful variations per populated row
3. required features repeated correctly on each applicable variation
4. compact marker-derived LEFT ARM production scale
5. screen-left placement
6. clean zero-contact separation
7. complete unobstructed geometry
8. usable broad pose/orientation/physics
9. bold continuous outer stroke
10. low-detail Image-Trace-friendly construction
11. no reconstruction/isolation generation required

FAIL if a row substitutes another object, items become presentation-sized, pose causes scale inflation, required features are distributed incorrectly, geometry touches the hero, or substantial reconstruction would be required.

## Production handoff

After approval:

1. select the chosen complete cosmetic from the zero-contact generation
2. Image Trace / normal vector cleanup
3. translate and rotate into the canonical viewer-left hand
4. use only modest scale correction when genuinely necessary
5. layer the canonical hand over the object
6. perform normal final vector cleanup

The user should not need to redraw or reconstruct cosmetic geometry lost during generation.
