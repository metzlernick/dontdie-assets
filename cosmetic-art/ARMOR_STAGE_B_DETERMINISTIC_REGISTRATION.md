# Don't Die — Armor Stage B Deterministic Registration

**Status: VALIDATED / LOCKED — 4×1 production.**

## Architecture
**Stage A → optional A.5 → Stage B destructive isolation → deterministic per-cell registration → Illustrator.**

Stage A/A.5 is coordinate + scale authority. Stage B is isolated-art authority.

## 4×1 target
Normal current production uses:
- one brief
- four variants
- logical 1920×640 strip
- four 480×640 cells

Historical 4×4 sources remain valid. When restoring a historical 4×4 sheet, process 16 cells and rebuild 1920×2560. When restoring a current 4×1 strip, process four cells and rebuild 1920×640.

## Why this exists
Generative Stage B can preserve design while drifting in scale/X/Y. Do not counter-bias Stage A or repeatedly regenerate a clean isolation just to chase registration.

## Stage-B acceptance before registration
Stage B must already have:
- removed head/face/hair/ears/non-outfit context
- removed entire pedestal
- applied requested cape state
- preserved approved outfit-specific hands/arms/footwear/intentional structural features
- avoided hidden-geometry reconstruction

Raw scale/X/Y drift alone is not a rejection reason.

## Deterministic restoration
For each corresponding logical cell:
1. Stage A/A.5 cell = scale/X/Y authority.
2. Stage B cell = isolated artwork authority.
3. Estimate Stage-B-to-Stage-A registration from shared visible outfit features.
4. Apply uniform scale + X/Y translation only.
5. No rotation, shear, perspective, non-uniform stretch, warp, redraw, inpainting, regeneration, or semantic edits.
6. Place corrected isolated art on white in a canonical 480×640 cell.
7. Assemble four cells to 1920×640 for current production.

Downloaded raw raster dimensions may differ from logical target. Split corresponding logical cells proportionally using each image's own dimensions; do not treat raw export dimensions as coordinate authority.

## Hidden-geometry rule
Registration moves/scales accepted Stage-B pixels only. It never completes collars, necklines, shoulder cloth, boots, feet, peg geometry, capes, wraps, or other artwork that was hidden by removed anatomy/context.

## Multi-strip assembly
If 1–4 approved 4×1 Armor strips are later combined, preserve each restored strip independently. Use 1920×640, ×1280, ×1920, or ×2560 for 1–4 rows, or leave unused lower rows blank when a fixed-height downstream sheet is useful. Never invent filler.

## Core rule
**Stage A owns design/registration; Stage B owns faithful isolation; deterministic uniform scale + X/Y restores Stage-A registration before Illustrator.**
