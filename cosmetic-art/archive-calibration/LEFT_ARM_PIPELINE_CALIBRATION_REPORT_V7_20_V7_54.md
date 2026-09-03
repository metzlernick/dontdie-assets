# Don't Die Cosmetic Art — LEFT ARM Pipeline Calibration Report

**Scope:** V7.20–V7.54 LEFT ARM production-pipeline calibration  
**Status:** Historical calibration report; not production authority  
**Current production authority:** `../LEFT_ARM_ZERO_CONTACT_WORKFLOW.md`, `../REPEATABLE_PRODUCTION_WORKFLOW.md`, `../PRODUCTION_SESSION_STARTER.txt`

---

## 1. Why this report exists

This report records the sequence of LEFT ARM cosmetic-production experiments that led to the validated zero-contact workflow promoted after V7.54.

The purpose is to prevent future sessions from repeating already-disproven approaches, especially:

- exact generated hand/grip registration;
- AI reconstruction after hand occlusion;
- AI Stage B isolation that silently changes scale, stroke, orientation, or variant identity;
- semantic/programmatic re-registration based on row-wide rules or inferred principal axes;
- prompt-only attempts to force unnatural z-order, such as drawing an object “over” a gripping hand;
- pixel-mask extraction of an object composited against a complex character;
- paired duplicate generation where the isolated copy must preserve exact physical scale and stroke;
- overloading a 4×4 generation with several unrelated LEFT ARM briefs before the category architecture itself is stable.

The final production conclusion is intentionally simple: **for LEFT ARM items, generate the complete cosmetic as a separate, zero-contact object on screen-left beside the canonical MAIN HERO, using the hero only as a body-relative scale reference.** Then Image Trace and move/rotate the complete object into the canonical hand in Illustrator. No cosmetic reconstruction is part of the production pipeline.

---

## 2. Production requirements that drove the tests

LEFT ARM assets have several requirements that are easy to satisfy individually but difficult to satisfy simultaneously in image generation:

1. The cosmetic must be the correct object and visual style.
2. It must be approximately the correct physical size relative to MAIN HERO before Image Trace.
3. The primary black outline must remain approximately 5 px at canonical 480×640 scale; stroke width is absolute, not proportional.
4. The object must be complete enough that Illustrator does not require reconstruction of hidden geometry.
5. The output should be clean enough for Image Trace.
6. Exact final grip X/Y and small rotation can be done manually in Illustrator, but the user should not need to redraw or reconstruct every held object.
7. LEFT ARM is a screen-space term: it means the **viewer-left / screen-left lowered hand beside the black cape**. The viewer-right raised fist is the RIGHT ARM side.
8. The production method must scale to large quantities of cosmetics; one-off masking or manual reconstruction tricks are not acceptable as the default pipeline.

These requirements explain why several visually plausible tests were still production failures.

---

## 3. Initial V7.19 architecture and why LEFT ARM exposed its weakness

The V7.19 held-object architecture split responsibility between three stages:

- **AI Stage A:** design, style, approximate body-relative scale/position/orientation, and registration-safe geometry;
- **AI Stage B:** remove hero/hand/body/pedestal and reconstruct hidden object geometry where practical;
- **Illustrator Stage C:** exact X/Y, scale/rotation correction, canonical hand/finger overlay, exact grip and final cleanup.

This was reasonable for categories where Stage B could preserve the Stage A object. LEFT ARM testing showed that this assumption was not dependable enough. Stage B often behaved as a new rendering rather than a literal isolation pass. It changed size, orientation, stroke, silhouette, detail, or variant identity. When the Stage A hand covered object geometry, neither AI reconstruction nor deterministic masking reliably recovered a production-ready object.

The core problem was eventually reframed: **do not create hidden cosmetic geometry in the first place.**

---

## 4. Calibration chronology

### V7.20 — Stage B isolation

**Goal:** isolate LEFT ARM artwork from a Stage A sheet.

**Failure:** the wrong Stage A source was used and the extraction prompt allowed too much regeneration. The result became more detailed and behaved like a newly rendered object rather than a faithful isolation.

**Lesson:** Stage B cannot be given semantic freedom if physical scale, stroke, and exact variant fidelity matter.

### V7.21 — Stage B pixel-lock attempt

**Goal:** make Stage B much stricter and preserve pixels/identity.

**Result:** artwork identity improved, but Stage A position and angle were not preserved.

**Lesson:** even a stricter isolation prompt did not preserve spatial registration. This motivated a separate B.5 concept.

### V7.22 — B.5 deterministic registration concept

**Goal:** make Stage A the spatial authority and Stage B the artwork authority, then use rigid transforms only.

**Failure:** shield angles varied incorrectly, money-bag neck geometry did not match intended local grip behavior, spatulas were too vertical, and lanterns drifted.

**Lesson:** a single row-level semantic transform is not enough. Different objects, and even different variants within a row, require independent spatial treatment.

### V7.23 — deterministic B.5 using inferred geometry / PCA-like orientation

**Goal:** derive transforms programmatically from shape statistics.

**Failure:** orientation inference was wrong for shields, bag necks, spatulas, and lanterns.

**Lesson:** principal-axis or PCA-like geometry is not a trustworthy semantic orientation authority for stylized objects. A roughly symmetric shield or bag can have a mathematically valid principal axis that is not the production orientation.

### V7.24 — semantic row normalization

**Goal:** replace PCA with row-level semantic rules: shields upright, bag body vertical, spatulas top-left, lanterns vertical.

**Failure:** outputs looked duplicated/collapsed, became too small, and lost per-variant character. The approach over-normalized entire rows.

**Lesson:** do not normalize all four variants with one transform. Each cosmetic variant must retain its own geometry and registration.

### V7.25 / V7.25B — correct matched source discovery

A major source error was discovered: earlier B.5 testing had used a Stage A sheet where the cosmetics were actually on the viewer-right raised hand, not the LEFT ARM viewer-left hand.

A correct historical Stage A sheet and its matching Stage B sheet were found. V7.25B performed per-variant re-registration using the correct source pair.

**Result:** substantially better. Shields were broadly upright, money bags hung naturally, spatulas leaned top-left, and lanterns were vertical.

**Remaining problem:** the historical Stage A hero itself was wrong/taller than the canonical hero, so the test did not prove a clean production path from a fresh canonical prompt.

**Lesson:** the B.5 idea can work only when both source images are already valid, matched, and spatially trustworthy. That is too fragile to be the default large-scale generation path.

### V7.26 — clean end-to-end retest

**Goal:** restart from the canonical hero and prove a clean full pipeline.

**Stage A failure:** row identity drifted:

- shields became too ornate;
- money bags were large and did not solve the intended neck behavior;
- the spatula row generated lanterns;
- the lantern row generated potions/bottles.

**Lesson:** a long full-pipeline prompt plus broad repository context diluted row-brief authority. Multi-row generation can cause semantic substitution before the category architecture is stable.

### V7.27 direction — row-isolated generation

The proposed correction was to generate each row independently and combine rows programmatically. This reduces cross-row semantic substitution. The broader lesson remained useful even after the final architecture changed: when testing a new category behavior, isolate one variable and one object class at a time before scaling to a 4×4 sheet.

### V7.28 — canonical hero lock

**Goal:** determine whether the supplied hero could be preserved exactly as immutable registration geometry.

**Result:** pass. A marker-based test showed exact pixel preservation was possible when no semantic object interaction was required.

**Lesson:** exact hero preservation itself was not the fundamental problem. The difficulty began when generation had to create a believable hand/object relationship.

### V7.29–V7.30 — spatula containment / grip refinement

These tests explored compact spatula scale, viewer-left placement, top-left orientation, and safe containment inside a 480×640 cell.

Important retained rule: **containment outranks ideal diagonal angle.** A spatula can be steeper or more vertical if a stronger diagonal would clip the object. Long dangling handle geometry should not be added merely to satisfy grip tolerance.

### V7.31–V7.34 — canonical-hand and reconstruction experiments

The tests attempted to preserve the canonical hand while generating usable spatula geometry, including programmatic overlays and reconstruction-style approaches.

**Failure pattern:** either the generated hand changed, the cosmetic geometry became unnatural, or programmatic overlays produced visibly wrong composite regions.

**Lesson:** exact generated grip is the wrong optimization target. Programmatic hand overlays do not solve missing semantic object geometry cleanly.

### V7.35–V7.39 — 4×4, Illustrator ingest, re-registration, and reconstruction tests

These tests explored whether the pipeline could return to a full 4×4 production sheet and whether Illustrator-facing extraction/reconstruction could be made deterministic.

**Finding:** the system could preserve useful art in some cases, but hidden grip geometry and Stage B drift remained recurring sources of cleanup. A method that requires per-object reconstruction does not scale to the intended asset volume.

### V7.40–V7.42 — foreground-complete geometry tests

The next strategy was to require the cosmetic to exist completely in Stage A even where it interacted with the hand. The critical requirement was that the object’s full geometry exist before any extraction.

V7.42 produced visually good complete bell geometry, but exact output dimensions became an issue in follow-up extraction attempts, and hand/object compositing still complicated clean separation.

**Lesson:** complete geometry is necessary, but if the object shares a raster boundary with the character, isolation can still damage the object edge.

### V7.43–V7.45 — deterministic pixel extraction

**Goal:** avoid AI Stage B completely and use exact/programmatic pixel extraction from Stage A.

Two different extraction environments produced unacceptable results:

- choppy black outlines;
- white specks;
- retained character fragments;
- missing bell pixels;
- poor Image Trace input.

A custom programmatic source-pixel mask was also tested. It still left character contamination and damaged the bell contour.

**Why it failed:** once the bell and character are composited into one raster, their neighboring anti-aliased pixels do not provide a perfect semantic boundary. Color/connected-component masks must guess which dark edge pixels belong to the bell versus the glove/cape/body. A sufficiently aggressive mask destroys the object edge; a conservative mask retains character fragments.

**Permanent conclusion:** do not base the production pipeline on post-hoc semantic masking of a cosmetic that physically touches the character.

### V7.46 — paired-output single render

**Goal:** in one generation, produce a registered bell on the hero plus a clean isolated copy, avoiding later Stage B reconstruction.

**Result:** very promising. Design identity, orientation, complete geometry, stroke character, and clean isolated output were close.

**Remaining uncertainty:** the isolated bell appeared larger than the registered bell.

**Lesson:** simultaneous paired generation can preserve design identity much better than a later isolation pass, but it does not guarantee exact physical size.

### V7.47 — paired-output scale/stroke lock

**Goal:** force the isolated duplicate to retain identical bounding-box size and absolute stroke.

**Failure:** the right-side isolated bell was still treated as a presentation object and changed size/proportions.

**Permanent conclusion:** do not depend on two separately rendered copies having identical physical size or stroke, even when they are generated simultaneously and explicitly described as duplicates.

### V7.48 — single-render exact-pixel extraction test

**Goal:** render one bell only and make it complete enough that its exact Stage A pixels could become production art.

**Failure:** the red glove still covered the brown handle. Hidden geometry remained.

**Lesson:** natural hand/object occlusion is strongly preferred by the image model.

### V7.49 — absolute foreground z-order test

**Goal:** force the complete bell to render as a topmost sticker over the glove.

**Failure:** the hand still owned the overlap region, and the arm was substantially reposed.

**Permanent conclusion:** prompt wording such as “foreground,” “sticker,” “topmost,” or “bell owns every overlap pixel” does not reliably override learned gripping/occlusion behavior. Do not spend future calibration time trying to win this through stronger z-order language.

### V7.50 — reserved object corridor / omitted hand

**Goal:** omit the obstructing viewer-left hand and generate complete bell geometry through the reserved grip corridor.

**Result:** bell geometry was much better and complete, but the model still invented a viewer-left hand/arm interaction near the handle.

**Lesson:** if an object is placed close enough to imply a grip, the model tends to generate a grip even when explicitly instructed not to.

### V7.51 — zero-contact registration

**Goal:** break the semantic grip entirely. Generate the complete object beside the hero with a small white gap.

**Result:** architectural success. The bell was complete, separated from the hero, cleanly outlined, and usable as a standalone production object. It was somewhat too large.

**Critical breakthrough:** **zero physical contact between hero and cosmetic removes the entire occlusion/reconstruction problem.** The hero can still serve as a scale reference without participating in the grip.

### V7.52 — screen-left + smaller zero-contact bell

Two controlled changes were made:

- place the object on the viewer-left / screen-left side of the hero;
- reduce the bell scale by roughly 15–20% while retaining the same absolute ~5 px stroke.

**Result:** pass.

This established the core production architecture:

- hero visible as scale reference;
- complete cosmetic on screen-left;
- small clean white gap;
- no contact or overlap;
- production-oriented body-relative size;
- absolute stroke retained;
- Illustrator only needs Image Trace, small translation/rotation, canonical hand layering, and normal cleanup.

### V7.53 — four-object generalization

The architecture was tested independently on four object classes:

- gold ceremonial shield — bulky rigid;
- money bag — hanging/flexible;
- spatula — long/thin rigid;
- lantern — hanging/bulky.

**Result:** all four constructed well. Geometry, style, completeness, and zero-contact separation generalized. All four were too large.

**Lesson:** the architecture generalized; scale was now the only systematic error. This was an important signal to stop changing architecture and calibrate size only.

### V7.54 — scale calibration

The four object classes were regenerated with explicit scale reductions while retaining the absolute 5 px outer stroke:

- shield: ~40% smaller than V7.53;
- money bag: ~35–40% smaller;
- spatula: ~35% smaller;
- lantern: ~40–45% smaller.

**Result:** all four passed as usable LEFT ARM assets. The shield became somewhat too small, while money bag, spatula, and lantern landed in a good production range.

**Final shield correction:** target approximately **20–25% larger than the V7.54 shield result** while keeping the rest of the V7.54 architecture unchanged.

V7.54 therefore validated the zero-contact architecture across rigid, flexible, long/thin, and bulky items.

---

## 5. Final validated LEFT ARM production architecture

The current production method is deliberately different from the earlier Stage A → AI Stage B reconstruction model.

### Stage A — zero-contact exploration / production art

For each LEFT ARM cosmetic:

- display MAIN HERO as the body-relative scale reference;
- place the complete cosmetic on **screen-left / viewer-left** of the hero;
- leave a small clean white gap between hero and cosmetic;
- never depict the object being held during generation;
- generate the full object silhouette and all grip/attachment geometry visibly;
- generate at approximately final physical size;
- keep the primary outer stroke approximately 5 px at canonical 480×640 scale regardless of object size;
- keep interior lines sparse, usually around 3–4 px;
- keep the object simple, flat, and Image-Trace friendly;
- do not presentation-enlarge the cosmetic to fill empty space.

### No AI Stage B for LEFT ARM

The object is already standalone and complete. Do not ask another image-generation pass to isolate, redraw, reconstruct, resize, or “clean” it. Those operations were repeatedly shown to change scale, stroke, geometry, orientation, or edge quality.

### Illustrator production step

The human production pass should be limited to work that is cheap and repeatable:

- Image Trace / normal vector cleanup;
- translate the complete object into the canonical viewer-left hand;
- apply a small rotation if needed;
- layer the canonical hand over the object;
- perform normal final vector cleanup.

The intent is **not** to reconstruct missing cosmetic geometry, redraw handles, or correct major size/stroke mistakes after Image Trace.

---

## 6. Why zero-contact works

The successful architecture aligns the generation task with what the image model does reliably.

The model is good at:

- generating a coherent standalone object;
- matching broad visual style;
- using a nearby character as a rough scale reference;
- preserving complete object silhouettes when there is no occlusion;
- producing a bold cartoon outline around an isolated prop.

The model is unreliable at:

- obeying unnatural hand/object z-order;
- preserving exact canonical hand geometry while inventing a prop interaction;
- revealing geometry that a normal grip would hide;
- producing a second copy at exactly the same pixel dimensions and stroke;
- performing semantic isolation without re-rendering;
- preserving exact geometry through a later AI Stage B pass.

Zero-contact removes the unreliable requirements instead of trying to overpower them with more prompt language.

---

## 7. Scale findings

Scale must be treated as a first-class production constraint because the user Image Traces the raster artwork. Resizing after trace is undesirable when stroke width and cleanup quality must remain consistent.

Important rules established by the tests:

- “Compact” is not strong enough by itself; the model often treats the prop as a co-equal presentation subject.
- Explicit body-relative scale language is more useful than telling the model to fill or balance the canvas.
- Smaller object silhouette must **not** imply thinner stroke.
- The hero is the scale authority; empty white space is not.
- Different object classes need different size envelopes.
- The V7.54 bag, spatula, and lantern are good reference scales for future analogous items.
- Shield-like LEFT ARM items should be larger than the V7.54 shield by roughly 20–25%, but still much smaller than the original V7.53 shield.

Future prompts should compare new objects to the closest validated object class rather than use one universal LEFT ARM percentage.

---

## 8. Stroke findings

The primary outer stroke remains an **absolute** production property.

At canonical 480×640 scale:

- target outer stroke: ~5 px, true black;
- target interior linework: ~3–4 px where needed;
- rounded joins/caps;
- low line density;
- smaller objects should look relatively bolder rather than receiving proportionally thinner outlines.

This requirement is especially important for Image Trace. Several failed isolation/redraw experiments produced larger silhouettes with visually thinner outlines, making them unsuitable even when the object design itself looked attractive.

---

## 9. Object-class findings

### Shields

- Broadly upright works well.
- Keep decoration simple: one border, one strong emblem, few major interior forms.
- Dense ornament and filigree quickly become too detailed for the game style and tracing workflow.
- V7.54 overshot the scale reduction; future shield baseline is ~20–25% larger than V7.54 shield.

### Money bags / pouches

- Generate complete neck geometry because the canonical hand will later cover part of it.
- No rope/string/separate loop unless explicitly requested.
- Main body should hang naturally downward.
- Do not force the entire bag to follow a diagonal grip axis.
- V7.54 scale is a good production reference.

### Spatulas / long thin rigid props

- Preserve normal utensil proportions; avoid weapon/staff scale.
- A top-left diagonal is useful, but containment is more important than maximizing angle.
- Do not add excessive handle length for grip tolerance.
- Maintain 5 px outer stroke even though the prop is narrow.
- V7.54 scale is a good production reference.

### Lanterns / hanging bulky props

- Keep structure simple: ring, cap, frame, a few panes, base.
- Main body stays approximately vertical under gravity.
- Avoid dense gothic bars, spikes, feet, or micro-detail.
- Localized flame/window glow can be an explicit exception to flat-color rules.
- V7.54 scale is a good production reference.

---

## 10. Approaches that should not be retried by default

The following are considered disproven as the default LEFT ARM production path unless a fundamentally new tool capability changes the problem:

1. **Exact generated grip registration.** The hand changes or occludes object geometry.
2. **Prompting the object to render over the hand.** The model strongly prefers natural grip occlusion and may repose the arm instead.
3. **Omitting the hand while leaving the object in grip position.** The model tends to invent a replacement grip.
4. **AI Stage B isolation/reconstruction.** It changes scale, stroke, orientation, detail, or identity too often.
5. **Semantic/pixel masking of a touching composite.** Anti-aliased boundaries produce chipped outlines or character contamination.
6. **PCA/principal-axis re-registration.** Mathematical orientation is not semantic production orientation.
7. **Row-wide transform normalization.** It collapses variant individuality and creates generic sizing/orientation.
8. **Paired generated duplicate as production copy.** A second rendering cannot be trusted to preserve exact physical size/stroke.
9. **Presentation-scale isolated outputs.** They look cleaner but are wrong for Image Trace and production stroke consistency.
10. **Large multi-row category tests before architecture validation.** They introduce semantic substitution and make failures harder to diagnose.

If a future session proposes one of these again, this report should be reviewed first and the new proposal should state what capability or constraint has changed enough to justify reopening the test.

---

## 11. Recommended scalable generation sequence

For production quantities, do not permanently switch to one-item-only output. The single-object tests were a calibration technique, not the desired final throughput.

The recommended production sequence is:

1. Use the validated zero-contact LEFT ARM architecture.
2. Define up to four row briefs.
3. Generate four variants per brief once multi-row behavior is confirmed under the zero-contact rules.
4. Keep each complete cosmetic on the screen-left side of its hero reference with clean separation.
5. Calibrate each row’s body-relative size from the closest validated scale class.
6. Preserve the absolute stroke regardless of row scale.
7. Do not add a reconstruction/isolation generation stage.
8. Image Trace selected cosmetics and perform only small registration moves/rotations plus canonical hand layering in Illustrator.

If a future 4×4 implementation introduces row substitution again, use row-isolated Stage A generation as a fallback and assemble validated rows programmatically. Do not compromise the object architecture merely to force a single 4×4 generation.

---

## 12. Acceptance criteria for future LEFT ARM generation

A LEFT ARM Stage A result should pass when:

- correct requested object category;
- complete standalone geometry;
- viewer-left / screen-left placement beside the hero;
- no contact or overlap with hero pixels;
- clean white separation;
- approximately correct final body-relative size;
- ~5 px absolute outer stroke at canonical scale;
- sparse ~3–4 px interior linework where appropriate;
- clean, low-detail, Image-Trace-friendly rendering;
- no presentation enlargement;
- no hidden grip geometry;
- user should only need Image Trace, small translation/rotation, canonical hand overlay, and normal cleanup.

It should fail when:

- object touches or overlaps the hero;
- the model depicts a grip;
- any cosmetic geometry is hidden;
- object is presentation-sized rather than production-sized;
- stroke gets thinner as the object gets smaller;
- design is too detailed for the game style;
- major Illustrator reconstruction would be required.

---

## 13. Final conclusion

The LEFT ARM problem was not solved by making registration more exact. It was solved by **removing generated hand/object interaction from Stage A entirely**.

The canonical MAIN HERO remains valuable, but only as a visual body-relative scale reference. The cosmetic itself is generated as a separate complete object on screen-left with zero contact. This preserves the properties that matter before Image Trace: complete geometry, useful production size, clean outline, correct stroke weight, and low-detail style.

The final hand relationship is cheap to create in Illustrator because the complete object already exists. The canonical hand can simply be layered over it after a small move/rotation. That division of labor is the key production insight from V7.20–V7.54.

**Do not reintroduce a reconstruction step unless a future tool can prove exact geometry, scale, stroke, and edge preservation rather than merely produce a visually similar isolated asset.**
