# DON'T DIE — CANONICAL COSMETIC REGISTRATION SYSTEM v7.19

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

These coordinates are deliberate production anchors and are the source of truth for final production registration.

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

A held object's local grip segment should cross the intended left-hand attachment region along approximately this top-left → bottom-right diagonal unless the approved item type requires a deliberate exception.

This is final Illustrator registration metadata. Image generation should approximate the direction and provide enough continuous local geometry for later adjustment; it does not need to hit the anchor pixel-perfectly.

### RIGHT_GRIP
Canonical grip axis: **75°**.

A held object's local grip segment should cross the intended right-hand attachment region along approximately this diagonal unless an approved reference establishes another orientation.

This is final Illustrator registration metadata. Image generation should approximate the direction and provide enough continuous local geometry for later adjustment; it does not need to hit the anchor pixel-perfectly.

## Held-object production rule

The generated character hand is NOT coordinate truth.

For every held cosmetic, the cosmetic itself must contain a registration-safe grip/attachment region that:

1. is on the correct viewer-side/body region;
2. has enough continuous material underneath the future canonical hand for Illustrator layering;
3. follows the broad intended grip direction or a justified item-specific angle;
4. is not interrupted by a hand-shaped hole or fake transparent cutout;
5. remains continuous after Stage B extraction;
6. tolerates modest X/Y, rotation, and scale correction in Illustrator without breaking the design.

Minor Stage A hand/finger redraw is acceptable.

The final Illustrator hand is canonical and will be layered over the cosmetic.

## Stage A — concept + approximate registration

Use `registration/MAIN_HERO_REGISTRATION_4X4.png` when visible hero context materially improves body-relative scale, side, and placement.

The hero supplies body context, scale, and pose. The model may incidentally redraw parts of the hero.

Acceptance is based on the COSMETIC:
- correct category side;
- correct approximate body-relative position;
- correct approximate grip/attachment direction;
- correct production-relative scale;
- correct broad orientation;
- sensible occlusion relationship;
- registration-safe continuous geometry.

Do not judge Stage A by exact generated finger pixels or exact anchor intersection.

## Stage B — isolation

Remove the generated character and pedestal.

Preserve the cosmetic's design, approximate position, scale, orientation, silhouette, colors, and usable attachment geometry.

Reconstruct the full continuous hidden cosmetic region where the generated hand occluded it whenever practical.

For held objects, the isolated result must contain a complete registration-safe grip/attachment region with no hand-shaped hole.

## Stage C — deterministic Illustrator registration

Stage C is the production truth.

In Illustrator:
1. place the isolated cosmetic on the canonical 480×640 artboard;
2. move it to the category's exact final attachment position;
3. apply small scale/rotation corrections so its grip/attachment geometry fits the canonical hand and intended axis;
4. place the exact canonical MAIN HERO hand/body layer over the cosmetic;
5. never reshape the canonical hand to fit the cosmetic;
6. perform final vector cleanup and layering.

This stage removes dependence on generated hero geometry.

## Category mapping

### RIGHT ARM
- Screen-space side: viewer-right
- Final Illustrator anchor: RIGHT_GRIP `(360,344)`
- Default grip axis: 75°
- Canonical hand overlays object in production

### LEFT ARM
- Screen-space side: viewer-left
- Final Illustrator anchor: LEFT_GRIP `(123,382)`
- Default grip axis: **45°**
- Canonical hand overlays object in production
- Hanging/flexible objects should separate local grip geometry from gravity geometry: attachment near the hand may angle, then the main body hangs naturally

### HAT
- Anchor: HEAD_ANCHOR `(218,144)`
- Use MAIN HERO head/hair silhouette and approved hats for scale/orientation
- Hat-specific contact geometry may vary; head anchor is the stable final production reference point
- Proven calibration progress: visible MAIN HERO context can be used in Stage A when needed for fit, followed by a separate Stage B isolation/extraction pass

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

This rule was validated during RIGHT ARM calibration and should carry forward to mechanically complex held objects.

## Correction-pass rule

Avoid correction approaches that cause the image generator to reflow or presentation-center the sheet. When a partial correction risks reflow, prefer a targeted edit of the existing full sheet or keep sufficient full-sheet context.

## Core principle

**AI generation creates a production-ready design layer with registration tolerance. Illustrator creates the exact final registration.**
