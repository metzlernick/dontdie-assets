# DON'T DIE COSMETIC ART — v6.8 HAT EXTRACTION WORKFLOW

This version keeps the successful v6.7 generation approach and adds a separate HAT-only cleanup/extraction stage.

## Locked generation stage

Do not change the generation method that produced the successful v6.7 spatial fit:
- full MAIN HERO registration visible
- 16 cosmetics
- four concepts × four variations
- current scale
- current position
- current foreground-over-hair behavior
- current bold stroke behavior
- current hard-edged solid-color shading behavior

## Problem solved by v6.8

The character is useful during generation because it forces correct position and scale, but the final production sheet must contain only the cosmetics on pure white.

Do not try to solve character preservation during generation.

Instead, perform a SECOND, SEPARATE cleanup step after the 16-cosmetic composite has been generated.

## HAT extraction mask

Use:
`reference-sheets/HAT_EXTRACTION_MASK_4X4.png`

Mask geometry per canonical 480×640 slot:
- X = 45–355
- Y = 25–325

The mask is intentionally generous enough to include:
- banana hats
- cat headphones
- chef hats
- top hats

Everything outside this mask is guaranteed to contain no HAT production pixels and should become pure white in the final cleaned sheet.

## Cleanup objective

INPUT:
The successful 1920×2560 composite containing MAIN HERO + 16 hats.

OUTPUT:
The same 1920×2560 canvas with:
- the 16 hats preserved at EXACT existing coordinates
- the 16 hats preserved at EXACT existing size
- the 16 hats preserved with EXACT silhouette and colors
- all MAIN HERO artwork removed
- everything else pure white

## Non-negotiable preservation rules

The cleanup operation must NOT:
- redesign any hat
- redraw any hat
- move any hat
- resize any hat
- rotate any hat
- recenter any hat
- recolor any hat
- simplify any hat
- change stroke width
- change silhouette
- create new variation details

The cleanup is an isolation operation only.

## Mask behavior

Use the HAT extraction mask to constrain the cleanup.

Outside the white mask regions:
- replace everything with pure white

Inside the white mask regions:
- preserve the cosmetic
- remove only the character/background registration artwork underneath and around it
- restore removed character areas to pure white

Because headphones extend around the head, the mask intentionally includes the full head/ear area.

## Acceptance test

Overlay the cleaned output directly on the pre-cleanup composite.

The hats must register pixel-for-pixel in:
- X/Y position
- scale
- silhouette

Only the MAIN HERO should disappear.

If any hat shifts or changes shape, reject the cleanup.

## Illustrator handoff

Once the cleaned HAT-only sheet is approved:
1. open in Illustrator
2. Image Trace using the master MD settings
3. Expand
4. remove tiny trace artifacts
5. recolor flat fills if desired
