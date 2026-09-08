# Don't Die Cosmetic Art — HATS Production Workflow

**Status: VALIDATED / LOCKED — 4×1 production.**

## Architecture
**One hat brief → four variants in 4×1 Stage A → foreground-only Stage B isolation → deterministic registration restoration → Illustrator.**

## Stage A
- logical target: 1920×640
- four 480×640 cells
- canonical hero visible as registration context
- hat generated at final head-relative scale/position
- no presentation centering/enlargement
- four useful variants of the same brief

Use the validated hat placement/orientation controls and only necessary approved DESIGN_ONLY references.

## Stage B — foreground-only isolation
Input: approved Stage-A 4×1.

Remove hero/body/cape/pedestal/context. Keep only hat geometry that belongs in front of/on top of the in-game HEAD layer.

Do not reconstruct geometry that belongs behind the head/hair. White gaps created by removing the head are correct.

Stage B may introduce scale/X/Y drift. Do not regenerate solely for otherwise faithful registration drift.

## Deterministic restoration
- Stage A = scale/X/Y/broad orientation authority
- Stage B = isolated foreground artwork/occlusion authority
- uniform scale + X/Y translation only
- no hidden-geometry reconstruction, redraw, warp, or semantic changes
- final logical 4×1 target: 1920×640

## Final gate
Four isolated foreground-only hats on white, no hero/context, no behind-head reconstruction, approved Stage-A registration restored.

Historical 4×4 hat sheets remain valid evidence/source material and do not need regeneration solely because production is now 4×1.
