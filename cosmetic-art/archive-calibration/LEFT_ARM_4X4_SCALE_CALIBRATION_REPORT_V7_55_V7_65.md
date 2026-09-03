# Don't Die Cosmetic Art — LEFT ARM 4×4 Scale/Throughput Calibration Report

**Scope:** V7.55–V7.65  
**Status:** Historical calibration report; not production authority  
**Current production authority:** `../LEFT_ARM_ZERO_CONTACT_WORKFLOW.md` and `../LEFT_ARM_4X4_PRODUCTION_CONTROLLER.md`

## Purpose

V7.20–V7.54 solved LEFT ARM geometry by removing generated hand/object contact. V7.55–V7.65 tested whether that zero-contact architecture could scale to the intended production throughput: four unrelated briefs, four variations each, in one 4×4 generation.

The final result was V7.65: a one-pass 4×4 workflow using wide cells, a universal small visual-scale marker, clean row binding, and an explicit instruction hierarchy of **scale/location → identity → pose/design**.

## V7.55 — new unseen concepts

Four unseen concepts were selected to stress different object classes and difficult orientation/feature requirements. Initial planning considered isolated row tests, but the production requirement was one 4×4 generation.

## V7.56 — first real one-pass 4×4

**Result:** failed.

Findings:
- row substitution occurred in later rows;
- several objects were presentation-sized;
- zero-contact placement itself remained successful;
- hero redraw/drift was not a major production problem because hero pixels are discarded.

**Lesson:** zero-contact solved geometry but did not by itself guarantee multi-row semantic binding or production scale.

## V7.57 — clean row binding

The controller was shortened and stripped of calibration history and negative examples. It used only reusable production rules plus the four current briefs.

**Result:** major improvement.

- all four rows bound to the intended concepts;
- four useful variations per row were produced;
- zero-contact and complete geometry held;
- scale remained too large.

**Lesson:** clean current-only briefs are more scalable than prompts containing historical failure language.

## V7.58–V7.60B — wide cells, pose and scale attempts

The LEFT ARM generation cell was widened from 480×640 to **600×640**, producing a **2400×2560** 4×4 sheet. The canonical hero scale was intended to remain unchanged, while the extra horizontal space was reserved for screen-left zero-contact cosmetics.

The wider layout worked and was retained.

Prompt-only scale instructions using percentages, hero head widths, production corridors, and numerical envelopes were inconsistent. Pose refinements could also cause scale regression or semantic substitution.

A difficult gauntlet test established that a **closed fist shown from the palm/gripping underside** could be generated successfully; the requirement should not be simplified to an open-hand pose.

## V7.61 — visual scale proxy

A deterministic wide reference was created from the canonical 4×4 hero sheet. Each original 480×640 hero cell was preserved at the same pixel scale and shifted into a 600×640 logical cell. A small neutral screen-left proxy was added.

The controller asked image generation to replace the proxy with the cosmetic.

**Result:** substantial improvement.

- four-row semantic binding worked;
- nunchuk mechanical pose improved;
- difficult closed-fist palm-side gauntlet pose worked;
- scale was still too large.

**Lesson:** visual scale control was more effective than numeric prose.

## V7.62 — smaller visual proxy

The universal proxy was reduced from roughly 100×150 to roughly 60×90 while hero scale and cell geometry remained unchanged.

**Result:** scale moved materially closer to production size, but all object classes were still too large.

## V7.63 — small universal proxy

The universal proxy was reduced again to roughly **38×58 px**.

**Result:** this established the correct scale neighborhood.

- gauntlet scale became usable and palm-side pose could work;
- throwing stars became small enough to behave as handheld items;
- purses became much closer to production scale;
- nunchuks became compact and retained correct semantic identity.

**Critical finding:** keep one universal small proxy as a strong initial production prior. Object classes may naturally extend beyond it in shape, but the universal prior prevents presentation enlargement.

## V7.64 — pose refinement caused scale regression

The proxy was unchanged, but more detailed pose instructions were added for purses and nunchuks.

**Result:** pose improved but all rows became larger again.

**Lesson:** detailed pose language can compete with visual scale control even when the visual reference is unchanged.

## V7.65 — scale priority controller

The same ~38×58 proxy was retained. The controller introduced an explicit hierarchy:

1. **Scale and location first** — establish the cosmetic at the small proxy-derived footprint.
2. **Object identity second** — make it the requested object within that scale.
3. **Pose/design third** — apply orientation and variation without increasing scale.

The repeated rule was:

**Pose may change shape. Pose may not increase scale.**

Pose descriptions were shortened.

**Result: pass.**

- four unrelated briefs bound correctly in one generation;
- four variations per brief remained useful;
- small production scale was preserved;
- difficult gauntlet orientation was retained;
- per-object required features were preserved;
- throwing stars, purses, and connected nunchuks remained compact;
- zero-contact complete geometry held across all 16 cells.

## Final validated production findings

### One-pass throughput

Row-isolated generation is not required as the default LEFT ARM production workflow. V7.65 demonstrated that a single 4×4 generation can produce four unrelated briefs with four variations each.

Row isolation remains only a fallback if a future model/version reintroduces severe row substitution.

### Wide LEFT ARM generation cells

Use 600×640 logical generation cells / 2400×2560 sheet. The extra 120 px per cell is screen-left workspace only.

Final production assets still register to the canonical 480×640 hero artboard in Illustrator.

### Universal visual scale prior

Use the small neutral marker established by V7.63/V7.65 as the default initial scale prior for arbitrary new LEFT ARM briefs.

Do not replace this with object-specific historical percentages as the default controller.

Different object classes may naturally have different aspect ratios or directional extensions, but they should inherit the same small visual-mass prior.

### Instruction hierarchy

The production controller must prioritize:

**scale/location → identity → pose/design**

Pose/detail instructions must not be allowed to inflate the object.

### Clean production briefs

Normal production should contain only the current requested cosmetics. Do not mention calibration objects, previous failures, or negative examples from earlier sheets.

### Required features

If a user brief requires a feature on the object, that feature applies to every variation unless explicitly stated otherwise. Do not let the model reinterpret four required attributes as one attribute per column.

## Do not retry by default

- percentage-only scale calibration
- head-width/forearm-width prose as the primary scale controller
- narrow numeric production corridors without a visual reference
- adding increasingly long pose explanations while expecting scale to remain stable
- shrinking/enlarging every object class independently before testing a universal visual prior
- using historical failure-object names in clean production prompts
- abandoning one-pass 4×4 generation merely because an intermediate calibration sheet substituted a row

## Production conclusion

V7.65 completes the scalable LEFT ARM generation architecture:

**clean current briefs + one 2400×2560 4×4 generation + zero-contact screen-left placement + universal small visual-scale reference + scale/location → identity → pose/design priority.**

The output is then Image Traced and registered into the canonical viewer-left hand in Illustrator without AI reconstruction.
