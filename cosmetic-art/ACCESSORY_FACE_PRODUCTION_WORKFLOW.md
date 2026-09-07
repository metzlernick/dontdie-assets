# Don't Die Cosmetic Artwork — Face Accessory Production Workflow

## Status

**VALIDATED AND LOCKED — September 2026**

This is the category-specific authority for ACCESSORIES placed on the face. Accessories at other body locations may require their own location-specific controller/workflow.

## Locked architecture

**Current briefs → Stage A on faint literal canonical substrate → deterministic faint-substrate extraction → Illustrator.**

There is **no generative Stage B** for face accessories.

## Canonical dimensions

- final sheet: exactly 1920×2560
- logical grid: 4×4
- cell: exactly 480×640
- one accessory brief per row
- four moderate variations per row
- pure white final background
- no visible grid or labels

## Stage A — faint literal substrate

Generate accessories directly at their intended final body-relative position and scale over a faint literal canonical MAIN HERO substrate.

The validated substrate uses approximately **6% opacity** canonical hero art in every cell.

The faint hero is registration context only. It must remain faint and literal. Do not regenerate, redraw, recolor, strengthen, restyle, or replace it with a full-color generated hero.

The accessory is the only full-opacity generated artwork.

### Face registration

Use location-specific literal visual controllers rather than prose-only coordinates.

For the validated face batch:

- eyewear/masks/goggles register to the canonical eye region
- mouth accessories register to a literal mouth anchor
- approved `Meme Glass` is the closest existing face-accessory scale/style precedent
- Meme Glass informs compact face-relative visual mass; it does not authorize presentation enlargement or independent centering

Small face accessories remain small even though most of the cell is empty white space.

### Stage A priorities

1. faint canonical hero remains literal and faint
2. final-position accessory registration
3. correct face anchor/location
4. approved face-accessory scale class
5. exact row/item identity
6. simple flat Don't Die style
7. useful moderate variation
8. optional detail

### Stage A style

- flat 2D vector-like construction
- true-black primary outline
- approximately 5 px at canonical 480×640 scale
- rounded joins/caps
- hard-edged solid fills
- few colors
- low detail
- sparse interior lines
- no texture/noise
- no painterly rendering
- no cast shadow
- Image-Trace friendly

## Deterministic isolation — mandatory

After Stage A passes, remove the faint substrate **deterministically**. Do not ask an image model to isolate or redraw the accessory.

Validated approach:

- split the generated sheet into logical 4×4 cells
- normalize each cell to exactly 480×640
- use row/location-specific accessory ROIs
- exploit the intentional contrast separation between the approximately 6% substrate and the full-opacity accessory
- retain high-contrast / appropriately saturated accessory pixels from the approved Stage A
- preserve required low-saturation details such as cigarette smoke with row-specific thresholds
- replace faint substrate/background with pure white
- copy retained artwork from Stage A rather than generating replacement geometry
- rebuild exactly 1920×2560

No semantic reconstruction is permitted.

## Why generative Stage B is prohibited

Two calibration passes demonstrated that generative isolation is not reliable for small face accessories.

### Generative Stage B V1 — rejected

The model interpreted isolation as standalone product illustration:

- major scale inflation
- independent centering
- reconstructed hidden geometry
- standardized/regularized shapes
- expanded smoke/hardware

### Generative Stage B V2 — rejected

Literal erase-only prompting improved scale but still reconstructed hidden geometry, including complete frame/mask/goggle structures and standardized cigarette-holder geometry.

Therefore exact X/Y or scale correction cannot repair generative Stage B because the artwork itself has already changed.

## Why full-color hero subtraction is prohibited

A deterministic subtraction test using a full-color generated Stage A also failed.

The Stage-A generator did not preserve the canonical hero pixel-for-pixel. Differences between the generated hero and canonical hero were large enough that subtraction extracted hero/body regions instead of reliably identifying the accessory.

Do not attempt canonical full-color hero subtraction as the normal face-accessory isolation method.

## Validated solution

The successful architecture changed Stage A itself:

- literal canonical hero supplied at approximately 6% opacity
- accessory generated at final face-relative position and scale
- hero remained faint rather than being regenerated
- accessory remained full opacity
- row identities remained stable
- deterministic contrast-based extraction became tractable

Validated test batch:

1. alien-eye sunglasses
2. near-black superhero eye mask
3. long cigarette holder with lit cigarette and small smoke wisp
4. mad-scientist goggles

Stage A V3 passed all four identities and face registration. In particular, the mad-scientist row remained goggles rather than drifting into generic mad-scientist facial-hair tropes.

## Registration policy

Exact final cleanup/registration remains an Illustrator responsibility where needed.

Do not introduce a generative registration pass after deterministic extraction.

If a future deterministic extraction needs coordinate correction, use deterministic per-cell transforms only and preserve the approved Stage-A artwork. Never regenerate simply to chase X/Y or scale drift.

## Future face-accessory batches

Reuse the same architecture, changing only:

- row briefs
- location-specific anchor when the item attaches to a different facial feature
- extraction ROI/threshold rules when the accessory has unusual visual properties

Do not weaken the faint-substrate rule to accommodate a difficult design. Adjust the deterministic extraction logic instead.

## Non-face accessories

`ACCESSORY_FACE_PRODUCTION_WORKFLOW.md` does not automatically govern accessories attached elsewhere on the body. Use the general accessory rules plus a literal location-specific controller, and validate a reusable location workflow before declaring it canonical.

## Core principle

**Make isolation solvable at Stage A.**

For face accessories: **faint literal canonical substrate → final-position full-opacity accessory → deterministic substrate removal → Illustrator.**