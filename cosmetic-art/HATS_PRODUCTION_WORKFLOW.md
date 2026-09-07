# Don't Die Cosmetic Art — HATS Production Workflow

**Status: VALIDATED / ACTIVE**

This active workflow promotes the historically successful v6.7 registration stage and v6.8 extraction stage from calibration into production authority. It does not invent a new HATS architecture.

## Architecture

**Stage A exact MAIN HERO edit → Stage B HAT-only extraction/cleanup → Illustrator**

A Stage-A pass is not a completed HATS deliverable.

## Stage A — exact registered hat generation

Validated historical authority: v6.7 exact MAIN HERO edit behavior.

- logical sheet: 1920×2560
- 4×4
- 480×640 logical cells
- four concepts × four variations
- use the exact canonical MAIN HERO 4×4 edit base
- this is image editing, not character generation
- MAIN HERO pixels are immutable except where newly added hat pixels naturally cover them
- add cosmetic pixels only
- preserve successful head-relative scale, position, foreground-over-hair behavior, bold black stroke, hard-edged flat fills, and moderate variation
- no grid, labels, borders, dots, texture, painterly shading, or presentation centering

Stage-A acceptance:
- correct row identities and hard brief constraints
- useful four-variation spread
- correct head-relative scale/orientation/attachment
- hats may overlap hair naturally
- hero/context remains the registration base

If the runtime cannot actually use the canonical base as an edit base, report a SYSTEM FAIL rather than silently substituting a newly generated character.

## Stage B — HAT-only extraction / cleanup

Validated historical authority: v6.8 HAT extraction.

This is **not new cosmetic generation**.

Input:
- approved Stage-A composite

Extraction controller:
- `archive-calibration/HAT_EXTRACTION_MASK_4X4.png`
- canonical mask geometry per 480×640 cell: X=45–355, Y=25–325

Objective:
- preserve all 16 Stage-A hats at their existing coordinates, size, silhouette, stroke, colors, and design details
- remove MAIN HERO, pedestal/base, body, face, hair, clothing, weapons, and every other non-hat character/context pixel
- final background pure white

Outside white mask regions: pure white.
Inside white mask regions: retain only the existing HAT cosmetic pixels; remove registration character art and restore removed areas to white.

Stage B must NOT:
- regenerate or reinterpret hats
- redesign or improve hats
- move, resize, rotate, recenter, recolor, simplify, or change stroke width
- invent new variation details

## Stage-B acceptance

Overlay the cleaned output on the pre-cleanup composite. Hat artwork must register to the approved Stage-A hats in X/Y, scale, and silhouette. Only the MAIN HERO/context should disappear.

Raw image-model export dimensions are not trusted as canonical. If a Stage-A download arrives at another raster size while preserving the logical 4×4 composition, normalize the full sheet proportionally to 1920×2560 before the extraction stage; do not alter cells independently or change relative geometry.

## Final HATS gate

HATS is COMPLETE only when:
- 16 isolated hat/head cosmetics remain
- pure white background
- no hero/body/cape/pedestal/context remains
- Stage-A hat identity/scale/orientation/registration is preserved

Then proceed to Illustrator / Image Trace cleanup.

## Orchestration rule

After Stage A passes, automatically package Stage B using the approved Stage-A result + HAT extraction mask + locked extraction instructions. Do not ask the user to rediscover files, do not move to another category, and do not declare HATS complete before Stage B passes.