# DON'T DIE — CANONICAL COSMETIC REGISTRATION SYSTEM v7.12

This file defines production registration independently from incidental character redraws made by image generation.

## Coordinate system

Every cosmetic cell uses the canonical MAIN HERO artboard:

- Width: 480 px
- Height: 640 px
- Origin: top-left `(0,0)`
- X increases rightward
- Y increases downward

The 1920×2560 exploration sheet is exactly four 480×640 cells across and four down.

## Canonical anchors

These coordinates are deliberate production anchors and are now the source of truth for cosmetic registration.

| Anchor | X | Y | Purpose |
|---|---:|---:|---|
| LEFT_GRIP | 123 | 382 | Viewer-left lowered fist beside cape |
| RIGHT_GRIP | 360 | 344 | Viewer-right raised fist |
| HEAD_ANCHOR | 218 | 144 | Hat/head registration reference |
| FACE_CENTER | 218 | 249 | Face accessory reference |
| TORSO_CENTER | 218 | 365 | Body/outfit reference |

See `registration/CANONICAL_ANCHOR_REFERENCE.png` for a visual reference.

IMPORTANT: the annotated anchor image is REFERENCE ONLY. Never use it as final artwork and never reproduce its dots, axes, labels, or guides.

## Grip axes

Angles use image-coordinate convention:
- 0° = right
- 90° = down
- 180° = left
- 270° = up

### LEFT_GRIP
Canonical grip axis: **45°**.

A held object's local grip segment should cross `(123,382)` along approximately this top-left → bottom-right diagonal unless the approved item type requires a deliberate exception.

This means the hidden grip segment should not default to perfectly vertical or horizontal.

### RIGHT_GRIP
Canonical grip axis: **75°**.

A held object's local grip segment should cross `(360,344)` along approximately this diagonal unless an approved reference establishes another orientation.

## Held-object production rule

The generated character hand is NOT coordinate truth.

For every held cosmetic, the cosmetic itself must contain a usable grip segment that:

1. crosses the category's canonical grip anchor;
2. has enough continuous material underneath the hand for later Illustrator layering;
3. follows the canonical grip axis or a justified item-specific angle;
4. is not interrupted by a hand-shaped hole;
5. remains continuous after Stage B extraction.

Minor Stage A finger/hand redraw is acceptable.

The final Illustrator hand is canonical and will be layered over the cosmetic.

## Stage A — concept + approximate registration

Use `MAIN_HERO_REGISTRATION_4X4.png`.

The hero supplies body context, scale, and pose. The model may incidentally redraw parts of the hero.

Acceptance is based on the COSMETIC:
- correct category side;
- correct anchor intersection;
- correct approximate grip axis;
- correct production-relative scale;
- correct orientation;
- sensible occlusion relationship.

Do not judge Stage A by exact generated finger pixels.

## Stage B — isolation

Remove the generated character and pedestal.

Preserve the cosmetic's registered position, scale, orientation, silhouette, colors, and design.

Reconstruct the full continuous hidden cosmetic region where the generated hand occluded it.

For held objects, the isolated result must contain a complete grip segment through the canonical anchor zone.

## Stage C — deterministic Illustrator registration

Stage C is the production truth.

In Illustrator:
1. place the isolated cosmetic on the canonical 480×640 artboard;
2. align its defined grip/attachment point to the category anchor;
3. rotate/adjust only as necessary so its grip segment follows the canonical grip axis;
4. place the exact canonical MAIN HERO hand/body layer over the cosmetic;
5. never reshape the canonical hand to fit the cosmetic.

This stage removes dependence on generated hero geometry.

## Category mapping

### RIGHT ARM
- Screen-space side: viewer-right
- Anchor: RIGHT_GRIP `(360,344)`
- Default grip axis: 75°
- Canonical hand overlays object in production

### LEFT ARM
- Screen-space side: viewer-left
- Anchor: LEFT_GRIP `(123,382)`
- Default grip axis: 105°
- Canonical hand overlays object in production

### HAT
- Anchor: HEAD_ANCHOR `(218,144)`
- Use MAIN HERO head/hair silhouette and approved hats for scale/orientation
- Hat-specific contact geometry may vary; head anchor is the stable reference point

### FACE ACCESSORY
- Reference anchor: FACE_CENTER `(218,249)`
- Exact subtype geometry should follow approved references

### OUTFIT / ARMOR
- Reference anchor: TORSO_CENTER `(218,365)`
- Registration is primarily full-body silhouette matching, not a single-point attachment
- MAIN HERO body geometry remains canonical

### OTHER ACCESSORIES
Define a subtype anchor before mass production if the item class repeats.
Do not invent a different attachment point per asset.

## Scale rule

Anchor correctness does not authorize presentation scaling.

Objects remain at realistic production-relative size. Empty white space is expected.

## Complex-object detail rule

Prefer 3–5 major forms and strong silhouettes.
Avoid mechanical greebles, micro-panels, dense filigree, tiny repeated details, and excessive tubing.

## Correction-pass rule

Never leave a logical row blank in a Stage A generation/correction sheet.
Blank rows can cause the image model to reflow the composition.

For a correction pass, populate all four rows or perform a targeted edit on the existing full sheet.

## Core principle

**Generated hero geometry is contextual. Canonical anchors are production truth.**
