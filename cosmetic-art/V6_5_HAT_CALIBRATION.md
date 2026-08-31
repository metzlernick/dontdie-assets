# DON'T DIE COSMETIC ART — v6.5 HAT CALIBRATION UPDATE

This update supersedes earlier HAT positioning/orientation guidance while preserving the successful 16-position production architecture.

## 1. HAT Production Priorities

For every HAT generation, all four are mandatory:

1. approved Don't Die art style
2. correct MAIN HERO-relative position
3. correct MAIN HERO-relative scale
4. correct MAIN HERO-relative orientation

The current MAIN HERO is not a perfectly front-flat mannequin. The head/body presentation has a slight rightward-facing three-quarter bias. HAT artwork must visually fit that orientation.

## 2. Canonical HAT Orientation Reference

Review:

- `reference-sheets/HAT_HEAD_ORIENTATION_REFERENCE.png`
- `reference-sheets/HAT_DIRECTIONAL_CALIBRATION_REFERENCE.png`
- approved HAT references

The hero's head has a subtle rightward-facing bias. Do not default to a perfectly symmetrical straight-on icon when the cosmetic's construction depends on left/right geometry.

This matters especially for:
- headphones
- masks
- asymmetric brims
- side decorations
- ear pieces
- headbands
- straps

For headphones, the earcups and band must read as wrapping around the hero's head in the same directional orientation as MAIN HERO. Do not mirror the perspective.

## 3. Directional HAT Anchor

Use:

`reference-sheets/HAT_DIRECTIONAL_ANCHOR_4X4.png`

Each canonical 480×640 slot contains three tiny neutral-gray points:

- crown/contact anchor: X=214, Y=176
- near-ear orientation anchor: X=284, Y=224
- far-ear orientation anchor: X=151, Y=216

These points are metadata only.

They communicate:
- where the hat contacts the head
- head width
- left/right directional bias

Do not generate a character.
Do not turn the points into design features.
Do not move hats to visual center.

## 4. HAT Scale Correction

Previous tests produced hats too large.

For ordinary hats, target a noticeably smaller character-relative footprint than the v6.4 test.

Typical target envelope inside each 480×640 slot:

- X approximately **125–310**
- Y approximately **60–200**

This is a scale guide, not a visible box.

The hat should look correctly sized when mentally overlaid on MAIN HERO, not like an isolated icon.

For compact hats, stay smaller.
For naturally wide objects such as headphones, horizontal/vertical extent may exceed the ordinary envelope where required to meet the ear anchors.

Do not enlarge any HAT merely because the slot contains empty white space.

## 5. Stroke Calibration

The canonical SVG primary stroke remains **5 px at the 480×640 coordinate scale**.

However, image generation has repeatedly produced a visually thinner effective outline than the approved artwork.

Therefore the generation instruction must target the **visual appearance of the approved 5 px SVG stroke**, not merely mention the number.

Required:
- true black
- visually bold
- consistent width
- dominant silhouette outline
- no thin illustrator-style hairline
- no tapered outline
- no soft dark-gray edge

When raster generation visually under-renders the 5 px target, bias the requested outline slightly heavier so that the resulting raster MATCHES the approved SVG stroke visually after Image Trace.

The approved references, not the numeric token alone, determine whether the stroke looks correct.

## 6. Style Lock

Keep the existing approved Don't Die style:

- flat hard-edged fills
- low detail
- no gradients
- no soft shading
- no painterly rendering
- no glossy 3D modeling
- minimal interior black linework
- generally 6–10 colors maximum
- rounded outer contours/joins

A correctly positioned hat with thin outlines or generic vector shading is failed.

## 7. 16-Design Architecture

Keep the successful layout unchanged:

- positions 1–4 = brief 1, four variations
- positions 5–8 = brief 2, four variations
- positions 9–12 = brief 3, four variations
- positions 13–16 = brief 4, four variations

One 1920×2560 white production canvas.
No visual grid, labels, borders, or character artwork.
