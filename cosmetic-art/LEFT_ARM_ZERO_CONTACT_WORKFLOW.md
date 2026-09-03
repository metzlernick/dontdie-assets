# Don't Die LEFT ARM — Zero-Contact Production Workflow v7.54

## Status

**VALIDATED PRODUCTION AUTHORITY FOR LEFT ARM HELD ITEMS.**

This category-specific workflow supersedes the older LEFT ARM instructions that place generated objects over the hero, hide geometry under a generated hand, require Stage B reconstruction, or rely on Illustrator reconstruction/registration edits.

The goal is to generate the complete object correctly on the first generation pass so the human production pass is limited to normal Image Trace/vector cleanup and final placement/layering.

## Core architecture

For each LEFT ARM cosmetic concept, generate a **single clean comparison image**:

- canonical MAIN HERO on the **right side**
- complete cosmetic isolated on the **left side of the character**
- pure white background
- zero contact between cosmetic and hero
- no overlap
- no generated hand gripping the cosmetic
- no pedestal/shadow under the cosmetic
- cosmetic must be complete, unobstructed, and Image-Trace friendly

The hero exists only as an immediate body-relative scale reference. The cosmetic is generated beside the hero so no object pixels are destroyed by hand/body occlusion.

## Why this is mandatory

Earlier LEFT ARM overlap workflows repeatedly caused:

- interrupted/choppy black outlines after extraction
- white specks and contaminated edges
- character fragments mixed into the cosmetic
- hidden object geometry that required reconstruction
- regenerated Stage B artwork that changed design, scale, or orientation
- extra Illustrator reconstruction work

Zero-contact generation removes the reconstruction problem at the source.

## Stage A is the geometry authority

The first generation must already contain the complete production geometry.

Stage A owns:

- object identity
- silhouette
- complete continuous geometry
- Don't Die style
- clean black outline
- body-relative scale
- intended orientation
- hanging/rigid physics
- usable future grip/attachment region

**Do not approve Stage A if the object would require reconstruction in Illustrator.**

Normal Image Trace cleanup is expected. Rebuilding missing handles, necks, rings, shield geometry, outlines, or occluded sections is not.

## No reconstruction stage

For this LEFT ARM workflow:

- do not generate the item over the hero
- do not cover any object geometry with the hero hand
- do not use a Stage B image-generation isolation/reconstruction pass
- do not erase the hero from an overlapping raster and attempt to repair the object
- do not require the user to reconstruct missing geometry in Illustrator

If a clean object-only raster is needed after generation, obtain it by deterministic crop/masking from the zero-contact source without touching object pixels. Do not regenerate the object.

## Scale rule

The cosmetic is judged against the canonical hero shown in the same image.

LEFT ARM items are generally compact. Do not enlarge them to balance the composition or fill empty white space.

Validated v7.54 calibration:

- **spatula:** validated scale; keep approximately this compact body-relative size
- **money bag:** validated scale; keep approximately this compact body-relative size
- **lantern:** validated scale; keep approximately this compact body-relative size
- **shield:** v7.54 was too small; target approximately **20–25% larger than the v7.54 shield calibration**, while remaining clearly smaller than the earlier oversized shield tests

For new object types, choose the closest approved LEFT ARM scale reference and state it before generation.

## Placement rule

The isolated cosmetic must appear on the **screen-left side of MAIN HERO**.

Keep clear white separation between the cosmetic and every hero pixel. The item must not touch the cape, hand, pedestal, body, or shadow.

Do not place the item on screen-right.

## Style / Image Trace rule

The isolated cosmetic must have:

- crisp continuous true-black outer outline
- approximately 5 px outer stroke at canonical scale
- round joins/caps
- large flat color regions
- minimal interior detail
- no texture/noise
- no anti-aliased-looking white specks inside the outline
- no character-colored contamination
- no cast shadow
- no decorative background
- pure white surrounding field

The outline must remain visually continuous around the complete object.

## Object physics

### Rigid objects

Examples: spatula, shield, bell, blade.

Generate the entire object as one coherent uninterrupted design. Handles/grip regions must be complete and usable. Orientation should match the intended final held orientation, but the object remains physically separate from the hero during generation.

### Hanging/flexible objects

Examples: money bag, lantern, pouch, charm.

Generate the complete attachment region and complete hanging body. Gravity should read correctly in the isolated object itself.

For a money bag, the gathered neck must be part of the bag itself; no rope/string/extra handle unless explicitly requested.

For a lantern, the ring/handle and body must be complete and unobstructed.

## Acceptance gate

PASS only when all are true:

1. correct requested object
2. complete object geometry
3. no overlap/contact with hero
4. item is screen-left of hero
5. clean continuous outer outline
6. no hero fragments or contamination
7. appropriate compact LEFT ARM scale
8. correct broad orientation/physics
9. correct Don't Die style/detail level
10. Image Trace can be performed without reconstructing missing object geometry

FAIL if any object geometry is hidden, interrupted, contaminated, presentation-enlarged, or would need manual reconstruction.

## Production handoff

After approval:

1. use the clean isolated cosmetic from the zero-contact generation
2. Image Trace / perform normal vector cleanup
3. place/layer it in the game asset using the canonical production character/hand assets

The generated hero is a scale reference only and is discarded.

The user should not have to redraw or reconstruct the cosmetic because of generation-time occlusion.
