# Don't Die Cosmetic Art — Production Package Regression Gates

**Status: mandatory pre/post-generation change-control gates.**

## Classification first
### SYSTEM FAIL
Validated controller/reference/stage/scale/contact/registration architecture failed structurally.

### BRIEF FAIL
Architecture works but an explicit cosmetic constraint is missed.

Do not redesign category architecture for a BRIEF FAIL.

## Freeze-passing-controls rule
Once a cosmetic/stage passes, do not expose it to unrelated new generative variance. Correct only the failed 4×1 cosmetic/stage whenever practical.

If a local correction causes scale, side, contact, anatomy, or stage regression, reject the correction and return to the last passing baseline.

## Packaging gate
FAIL if the user-facing generation ZIP:
- contains subfolders
- contains files the user should not upload
- adds unnecessary references
- changes controller/reference authority order
- replaces a locked prompt with a generic rewrite

Read `00_GENERATION_UPLOAD_ZIP_STANDARD.md`.

## HATS
4×1 Stage A must preserve head-relative placement/scale/orientation. Stage B must remove hero/context while keeping foreground-only hat geometry and never reconstruct behind-head parts. Raw isolation scale drift is corrected deterministically.

## RIGHT ARM
4×1 Stage A must use viewer-right raised-hand registration and body-relative scale. Stage B must remove hero/hand/context and reconstruct only the minimum hidden grip. Raw Stage-B scale/X/Y drift alone is not a failure when isolation art passes.

## LEFT ARM
Locked architecture:
**4×1 zero-contact Stage A → Illustrator; no AI Stage B.**

PASS requires hero/context screen-right, complete cosmetic screen-left, clean zero contact, and tiny V3 placeholder footprint behavior.

SYSTEM FAIL examples:
- presentation-sized prop replacing tiny footprint
- hero gripping/touching cosmetic
- wrong/missing controller
- introducing AI isolation/reconstruction

BRIEF FAIL examples:
- missed tilt/orientation/color/symbol/detail while scale/contact system passes

If repeated local brief correction begins enlarging the cosmetic or otherwise regressing system behavior, keep the best passing-scale result and defer tiny Illustrator cleanup rather than continuing prompt escalation.

## ARMOR
Locked 4×1 architecture:
**cape preflight → validated clean-room Stage A → optional A.5 → destructive Stage B → deterministic registration → Illustrator.**

Stage A uses a literal 4×1 canonical-hero controller as the body/proportion authority. A result passes Stage A only when it simultaneously satisfies the validated trifecta:
1. canonical registration/proportions;
2. genuinely new, undistorted armor artwork;
3. seamless Don't Die art/style/stroke consistency.

FAIL Stage A for:
- missing/incorrect outfit-specific hands;
- viewer-left arm-chain regression;
- generic/stumpy geometry or shortened canonical leg/body proportions;
- head/neck, hand/wrist, or bottom-of-sole relationships drifting materially from canonical;
- non-rigid raster warping/stretching used to force registration;
- partial base-outfit cut-and-paste/compositing that is not genuinely new seamless armor;
- inconsistent outline weight/style that breaks the canonical visual language.

A design revision that keeps good hands but makes the body stumpier is a `SYSTEM FAIL`, not a partial pass. Reject it and return to the last passing canonical-controller baseline.

Modest lateral foot-spacing variation can pass when sole-bottom Y, leg length, and overall canonical proportions remain correct.

Never solve isolation by weakening Stage A.

FAIL Stage B for surviving head/pedestal/context, wrong cape ownership, lost approved hands/arms, cross-variant contamination, or hidden reconstruction. Raw scale/X/Y drift alone is corrected deterministically.

If cape state is not stated/clear before Stage A, ask the user. KEEP cape styling belongs to Stage A/A.5, not Stage B.

## FACE ACCESSORIES
Locked 4×1 architecture:
**faint-substrate Stage A → deterministic extraction → Illustrator.**

No generative Stage B and no full-color hero subtraction.

## Backend errors
A generic backend generation error after valid submission is not automatically SYSTEM FAIL. Retry the same valid 4×1 once before changing workflow architecture.

## Cross-category rule
A success/failure in one category is not evidence for changing another category's validated architecture.
