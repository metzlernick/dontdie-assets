# Don't Die Cosmetic Art — RIGHT ARM Production Workflow

**Status: VALIDATED / LOCKED — 4×1 production.**

## Architecture
**One held-object brief → four variants in 4×1 Stage A → 4×1 Stage B isolation + minimal hidden-grip reconstruction → deterministic scale/X/Y restoration → Illustrator.**

RIGHT ARM is not complete until an isolated, deterministically restored asset exists.

## Stage A
- logical target: 1920×640
- four 480×640 cells
- full canonical hero visible as registration context
- requested item held in viewer-right/screen-right raised hand
- approximate grip center per cell: X=360, Y=344
- principal handle axis ~75° where applicable
- four variants of the same brief

Stage A owns identity, body-relative scale, broad orientation, grip placement, silhouette/style, and visible item geometry.

Empty canvas and real-world size never authorize presentation enlargement. Long/thin items such as fishing rods may legitimately extend farther while remaining body-relative.

Approved weapon/prop art is DESIGN_ONLY unless explicitly needed. It cannot override hand side, scale, or registration.

## Stage B
Input: approved Stage-A 4×1.

Remove hero/head/hair/body/hands/cape/pedestal/context. Preserve item identity/design/colors/orientation and legitimate attached parts.

Where the fist hides the grip, reconstruct only the minimum missing handle segment needed for continuous standalone geometry.

Hard rules:
- no hand-shaped hole
- no surviving skin/glove pixels
- no redesign outside former hand overlap
- no mirroring/side swap
- no intentional presentation enlargement/recentering

## Stage-B drift
Generative isolation may enlarge/shift the item. A faithful isolation can PASS despite raw scale/X/Y drift.

Authority split:
- Stage A = scale/X/Y authority
- Stage B = isolated-art + completed-hidden-grip authority

Do not regenerate solely to chase scale drift.

## Deterministic restoration
Restore each of four cells independently using uniform scale + X/Y translation only. No warp/non-uniform stretch/redraw/semantic change. Final logical target: 1920×640.

Fishing rods and other long/thin items retain their legitimate Stage-A extent rather than being normalized to compact weapon sizes.

## Failure/change control
A local BRIEF FAIL is corrected only on that 4×1 cosmetic. Do not expose unrelated passing cosmetics to regeneration.

Historical 4×4 Dagger/Fishing Rod/Gold Sword/Flamethrower regression sheets remain valid evidence. The corrected compact Gold Sword baseline and wrong-hand regression lesson remain authoritative history, not the new batching format.

## Final gate
Four standalone isolated items, hero/context absent, continuous grip geometry, approved Stage-A scale/X/Y restored.
