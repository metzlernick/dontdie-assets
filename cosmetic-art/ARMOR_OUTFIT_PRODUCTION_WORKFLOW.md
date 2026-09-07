# Don't Die — Armor / Outfit Production Workflow

**Status:** Stage A V44 + optional Stage A.5 V1 + Stage B VALIDATED AND LOCKED

## 1. Validated architecture

Armor/outfit production uses:

**Stage A — registered outfit design on canonical hero → optional Stage A.5 — cape control → Stage B — faithful outfit isolation → deterministic Illustrator finishing**

Stage A.5 is optional. Use it only when cape state must change after Stage A.

Do not re-open Stage A, Stage A.5, or Stage B calibration during normal production unless a new failure is repeatable across fresh tests.

## 2. Stage A — V44 locked behavior

Stage A owns:

- outfit identity and four useful variants per row
- canonical hero-relative scale and proportions
- shoulder, torso, hip, leg, foot, and arm-chain structure
- outfit-specific hand treatment
- flat Don't Die visual language

Stage A does **not** need to perfectly solve cape removal. Body/hand registration outranks cape cleanup.

### Geometry authority

The canonical hero substrate is the structural authority. The generated outfit must remain extremely close to its pose and proportions.

Preserve especially:

- overall hero height/width
- head/body relationship
- shoulder locations
- torso height/width
- hip height
- leg length and spacing
- foot locations
- viewer-left lowered shoulder → upper arm → elbow → forearm → wrist → hand chain
- viewer-right raised arm chain

Do not normalize into a generic chibi character. Do not shorten legs, widen the torso, enlarge boots, lower shoulders, or make the body stumpier.

### Hand lock

Hands are production-critical geometry.

Don't Die hands use **THREE FINGERS + ONE THUMB = FOUR TOTAL DIGITS**.

Never complete them into natural five-digit hands. Do not add a rogue lower knuckle/finger. Preserve the canonical hand pose, scale, wrist attachment, and silhouette as closely as possible.

The viewer-left lowered arm must connect cleanly into the hand; do not invent an extra finger-like form at the sleeve/wrist transition.

### Reference discipline

Use canonical-derived geometry/hand references and the current text brief as the primary inputs.

Do **not** include old generated armor calibration sheets as visual references during normal Stage A production. Testing showed that even when labeled semantic-only, generated dressed-character references can bias anatomy, stumpiness, hand count, pose, and semantics.

Approved art may guide palette/material/design language when needed, but must not override canonical body geometry.

## 3. Stage A.5 — V1 cape control, optional and locked

Stage A.5 exists only when cape state must change after Stage A.

Input: the approved Stage-A sheet.

Per row/cell, assign one explicit cape mode:

- **KEEP** — leave the approved cape unchanged
- **REMOVE** — remove the cape while preserving the complete approved hero/outfit geometry
- **RESTYLE** — redesign only the cape to match the outfit while preserving its approximate attachment, placement, scale, and flow

Stage A.5 is **not** an outfit redesign pass and is **not** a body/pose correction pass.

### Stage A.5 invariants

Preserve as closely as possible:

- hero proportions and pose
- total height/width
- shoulders, torso, hips, legs, and feet
- pedestal and X/Y
- both complete arm chains
- both wrists
- both four-digit hands
- all non-cape outfit semantics and details
- row/column correspondence

Do not add headwear or held items.

For REMOVE, newly exposed regions should remain background except for the minimum local garment-edge completion genuinely needed for continuity. Do not invent substitute rear cloth, wings, scarf masses, coat tails, or a replacement cloak.

For RESTYLE, cape work must remain localized to the cape. Do not allow the cape to force broader shoulders, shorter legs, different arms, or changed outfit semantics.

### Stage A.5 validation evidence

Validated test:

- Row 1 animal/fur armor — RESTYLE passed
- Row 2 chef — REMOVE passed
- Row 3 green heroic-fantasy tunic — REMOVE passed
- Row 4 mummy — REMOVE passed

The result preserved usable Stage-A geometry and then passed Stage B isolation.

## 4. Stage B — locked faithful isolation

Stage B is **faithful isolation, not redesign**.

The approved upstream sheet — Stage A directly, or Stage A.5 when used — is the absolute design/variant/cape-state authority. Canonical references remain geometry checks.

Remove:

- head / face / hair / ears / exposed hero skin not part of the outfit
- underlying hero anatomy
- pedestal
- context/background
- character-only shadows

Keep:

- complete approved outfit
- both approved hands
- sleeves/armwear
- boots/leg coverings
- belts, straps, aprons, tunics, wraps, fur, leather, metal
- the exact approved cape state from upstream

Preserve row/column assignment, X/Y, scale, pose, silhouette, arm chains, hand geometry, and design details. Do not presentation-center or enlarge isolated outfits.

Where hero removal exposes a hidden garment region, reconstruct only the minimum local outfit geometry required for continuity. Do not redesign.

### Stage B acceptance

PASS only if the result reads as the same 16 approved upstream outfits cut away from the hero while retaining near-canonical registration, four-digit hand geometry, and the approved cape state.

FAIL if Stage B redesigns variants, makes proportions stumpy, drifts arm chains, adds a hand digit, removes hands, normalizes scale/position, changes cape state, or introduces new rear cloth.

## 5. Rejected architecture — do not use

Do **not** use a generative Stage B.5 cape-removal pass after isolation.

Testing showed that post-isolation generative cape deletion redraws the entire outfit, including proportions, arms, hands, boots, and semantics.

Do **not** use approximate deterministic color/spatial cape masks on flattened Stage-B PNGs as a general solution. Cape and foreground art share outlines/fills and overlap spatially; the test produced rectangular removal artifacts and damaged non-cape artwork.

If cape state must change, use Stage A.5 before isolation.

## 6. Output

Standard armor sheet:

- 1920×2560
- 4×4
- 480×640 cells
- no gutters/grid/labels
- pure white background for isolated production output

## 7. Core rule

**Canonical registration + four-digit hand fidelity first. Stage A establishes the registered outfit. Optional Stage A.5 changes cape state only. Stage B extracts the approved result faithfully.**
