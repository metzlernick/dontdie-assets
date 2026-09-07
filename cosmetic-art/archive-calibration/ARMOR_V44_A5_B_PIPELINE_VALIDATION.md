# Armor / Outfit V44 → A.5 V1 → Stage B Validation

Historical calibration evidence only. Current production authority is `../ARMOR_OUTFIT_PRODUCTION_WORKFLOW.md`.

## Final validated architecture

**Stage A V44 → optional Stage A.5 V1 cape control → Stage B faithful isolation → Illustrator**

Stage A.5 is optional and is used only when cape state must change after Stage A.

## Stage A calibration conclusion

Repeated earlier generations failed through combinations of:

- stumpy/shortened body proportions
- regenerated hero geometry
- viewer-left lowered arm drift
- malformed lower hand / rogue extra digit
- cape contamination
- generated reference sheets biasing later anatomy even when labeled semantic-only

The decisive improvement came from removing generated dressed-character calibration images from normal visual inputs and using canonical-derived geometry/hand references instead.

V44 added an enlarged literal canonical viewer-left shoulder → upper arm → elbow → forearm → wrist → hand chain reference while preserving the clean-room architecture.

V44 passed:

- near-canonical body proportions
- stable stance/feet
- coherent viewer-left lowered arm chain
- stable viewer-right raised arm
- usable four-digit hands
- four row semantics and variation

Hand rule locked:

**THREE FINGERS + ONE THUMB = FOUR TOTAL DIGITS.**

Do not naturalize to five digits or add a rogue lower knuckle/finger.

## Stage B validation conclusion

Stage B isolation on approved V44 passed.

Stage B successfully removed hero/head/pedestal/context while preserving:

- 16 variant identities
- outfit registration
- body/leg proportions implied by the outfit
- both arm chains
- both hands
- row/column assignment
- existing cape state

Stage B is therefore locked as faithful isolation, not redesign.

## Rejected post-isolation cape approaches

### Generative Stage B.5 REMOVE — rejected

A generative cape-removal pass after isolation removed the cape but globally regenerated the outfit. Observed drift included:

- body silhouette/proportion changes
- arm/wrist changes
- hand regeneration
- clothing contour/detail changes
- boot/leg changes
- mummy wrap changes

Conclusion: do not use generative post-isolation cape deletion.

### Approximate deterministic cape masking — rejected

Spatial/color mask testing on flattened Stage-B PNGs produced:

- rectangular/square cape bites
- remaining cape fragments
- damaged shoe/leg/non-cape pixels

Cause: cape and foreground share black outlines/fills and overlap spatially; a flattened raster does not preserve layer ownership.

Conclusion: do not use approximate color/spatial masking as a general cape-removal solution.

## Stage A.5 V1 validation

Cape control was moved before isolation, while the complete hero/context still exists.

Stage A.5 modes:

- KEEP
- REMOVE
- RESTYLE

Validation batch:

- Row 1 animal/fur armor: RESTYLE
- Row 2 chef: REMOVE
- Row 3 green heroic-fantasy tunic: REMOVE
- Row 4 mummy: REMOVE

Result passed cape semantics while preserving the Stage-A structure closely enough for production:

- Row 1 gained an in-style fur/animal cape
- Rows 2–4 became capeless
- body proportions remained usable
- viewer-left arm chain remained coherent
- raised arm remained coherent
- four-digit hands remained usable
- no major stumpiness regression

## End-to-end Stage B after A.5

Stage B was then run on the approved A.5 sheet.

It passed:

- clean hero/head/pedestal removal
- Row 1 approved restyled cape preserved
- Rows 2–4 remained capeless
- arm chains remained coherent
- four-digit hands survived
- proportions and row semantics remained usable

This validated the complete conditional pipeline.

## Locked conclusion

Normal production:

**Stage A V44 → Stage B → Illustrator**

When cape state must change:

**Stage A V44 → Stage A.5 V1 KEEP/REMOVE/RESTYLE → Stage B → Illustrator**

Do not reopen calibration for normal outfit preferences. Reopen only for a repeatable failure on fresh production briefs.
