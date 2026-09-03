# Don't Die LEFT ARM — 4×4 Production Controller

## Status

**V3 VALIDATED AND LOCKED.** Normal user input may change only current row briefs. Do not redesign or add one-off controller exceptions during production.

## Production target

One 2400×2560 sheet; logical 4×4; 600×640 cells; four variations per populated row; white background; MAIN HERO screen-right; complete standalone cosmetic screen-left; zero contact; no generated grip; no hidden geometry; no AI reconstruction pass.

## V3 visual scale authority

Use `reference-sheets/LEFT_ARM_FINISHED_COSMETIC_EXEMPLAR_REFERENCE_4X4.png`.

Each cell contains one **extremely tiny contiguous neutral finished-cosmetic exemplar**, approximately 14×19 px in the validated V3 reference. It is the absolute first-priority visual-mass authority, not merely a location marker.

Replace it with the requested cosmetic without reproducing exemplar geometry. Replacement should match or undercut its tiny visual mass relative to MAIN HERO.

V3 supersedes V2.1. V2.1 passed shield/money-bag/spatula/lantern but later failed on gauntlet/throwing-star/purse/nunchuks by reverting toward hero-sized readable props. V3 materially reduced the universal exemplar and the same difficult batch then passed all rows at the desired production scale.

## Locked hierarchy

1. **Extremely tiny finished-exemplar scale/location**
2. **Remove/simplify detail to survive scale**
3. **Exact identity**
4. **Pose/design**
5. **Variation**

Semantic identity never authorizes enlargement. If size and detail conflict, keep the smaller size. When uncertain, shrink and simplify.

## Scale behavior

Do not enlarge due to real-world size, readable-prop expectations, comparison assets, composition balance, empty space, optional detail, or words such as large/big/same size/similar scale.

Broad/chunky objects simplify and compress rather than grow. Long/thin/hanging objects may extend farther only by becoming proportionally narrower and staying low-mass. Creatures, containers, wearables, weapons, and multi-part handheld objects remain strongly miniature-biased.

Approved art may guide palette, design language, silhouette vocabulary, thematic family, material treatment, and non-scale proportion cues only.

## Pose/surface rule

Pose instructions never authorize scale changes. If a brief specifies a visible surface or orientation, the generated object must actually show that requested surface. For example, `palm/underside toward camera` must not silently revert to the default knuckle/back-of-hand view.

## Detached-artifact rule

Unless identity-critical, do not add dots, beads, particles, connector marks, trails, or floating secondary shapes between cosmetic and hero. Do not copy reference residue.

## Conflict gate

Before creating a package, inspect user instructions for conflicts with scale, exemplar authority, hero placement, zero-contact, sheet geometry, detail hierarchy, generated grip, hidden geometry/reconstruction, or presentation enlargement. If conflict exists: stop, identify it, explain the failure risk, offer safe wording, and proceed only after resolution. Never silently invent an exception.

## Identity / variation / zero-contact

Each row remains the exact requested object type with required features repeated in applicable variations. Four simple useful interpretations per populated row. Variation may not increase scale.

Every cosmetic remains screen-left with clean white separation from all hero pixels, complete/unobstructed and standalone for Image Trace. Hero never holds the cosmetic during generation.

## Style

Flat vector-like Don't Die cartoon; bold smooth true-black outer contour; round joins/caps; sparse interior lines; hard-edged colors; extremely low detail; no cosmetic cast shadow/texture/noise/painterly rendering; gradient only when explicitly requested and non-scale-inducing. Explicit requested effects may locally omit outlines.

## Prompt-construction lock

Normal production TXT = canonical `LEFT_ARM_PRODUCTION_PROMPT_TEMPLATE.txt` + sanitized row briefs. Only row-brief content varies. Invariant changes require a separate calibration/change-control task.

## Regression validation

V3 must be considered against both regression families:

**Regression A:** golden ceremonial shield, tan money bag, diagonal metal spatula, hanging black lantern with green flame.

**Regression B:** chunky golden palm-facing gauntlet with four colored unoutlined energy streaks, silver throwing star, slightly three-quarter bedazzled pink purse, red nunchuks.

Regression B exposed V2.1 semantic scale inflation. With the V3 smaller exemplar, the fresh-instance result passed all four rows for scale and identity; the gauntlet also corrected to palm/underside presentation. Four variations and zero-contact were maintained.

Do not reopen calibration for ordinary asset preferences. Reopen only if a genuinely new class produces a repeatable V3 failure.

## Illustrator handoff

Image Trace/cleanup; move/rotate into canonical viewer-left hand; enlarge modestly if desired; layer canonical hand; final vector cleanup.