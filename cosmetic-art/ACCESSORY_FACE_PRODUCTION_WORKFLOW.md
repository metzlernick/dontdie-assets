# Don't Die Cosmetic Artwork — Face Accessory Production Workflow

**Status: VALIDATED / LOCKED — 4×1 production.**

## Architecture
**One face-accessory brief → four variants in 4×1 Stage A on ~6% faint literal canonical substrate → deterministic faint-substrate extraction → Illustrator.**

There is no generative Stage B.

## Stage A
- logical target: 1920×640
- four 480×640 cells
- pure white background
- canonical hero remains literal at ~6% opacity
- accessory is the only full-opacity generated artwork
- four variants of one brief

Use literal face anchors/controllers for eyes/mouth/etc. Approved Meme Glass or other similar face art is DESIGN_ONLY / compact scale precedent only when genuinely relevant.

Small accessories remain small despite empty canvas.

## Style
- flat 2D vector-like construction
- true-black ~5 px primary outline at canonical scale
- hard-edged solid fills
- few colors / low detail
- no texture/noise/painterly rendering/cast shadow

## Deterministic extraction
After Stage A passes, remove the faint substrate deterministically. Do not ask image generation to isolate/redraw the accessory.

For the four logical cells:
- normalize to 480×640 when needed
- use location/accessory-specific ROIs and thresholds
- exploit contrast/saturation separation between faint substrate and full-opacity accessory
- preserve required low-saturation details with local threshold exceptions when necessary
- copy retained pixels from approved Stage A
- replace substrate/background with pure white
- rebuild final 1920×640 strip

No semantic reconstruction.

## Rejected methods
- generative face-accessory Stage B
- full-color canonical-hero subtraction

Both previously changed/reconstructed artwork or extracted hero regions unreliably.

## Final gate
Four isolated face accessories on white at approved Stage-A registration, no faint hero substrate remaining.

Historical 4×4 alien-glasses / mask / cigarette-holder / mad-scientist-goggles validation remains evidence of this architecture. New production uses one brief per 4×1.

## Non-face accessories
This workflow does not automatically govern other body locations. Use only an already validated location-specific controller/workflow.
