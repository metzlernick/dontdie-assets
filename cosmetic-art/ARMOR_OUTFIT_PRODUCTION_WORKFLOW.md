# Don't Die — Armor / Outfit Production Workflow

**Status:** V44 Stage A + Stage B VALIDATED AND LOCKED

## 1. Validated architecture

Armor/outfit production uses:

**Stage A — registered outfit design on canonical hero → Stage B — faithful outfit isolation → optional Stage B.5 — cape operation → deterministic Illustrator finishing**

Do not re-open Stage A or Stage B calibration during normal production unless a new failure is repeatable across fresh tests.

## 2. Stage A — V44 locked behavior

Stage A owns:

- outfit identity and four useful variants per row
- canonical hero-relative scale and proportions
- shoulder, torso, hip, leg, foot, and arm-chain structure
- outfit-specific hand treatment
- cape design when the current brief requests a cape
- flat Don't Die visual language

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

Use the canonical geometry controller and current text brief as the primary inputs. Do not include old generated armor calibration sheets as visual references during normal Stage A production; they were shown to bias anatomy, stumpiness, hands, and semantics even when described as semantic-only references.

Approved art may guide palette/material/design language when needed, but must not override canonical body geometry.

### Cape policy in Stage A

Do not force universal cape removal.

The current outfit brief determines cape semantics:

- cape requested → Stage A may design it in-style
- cape not requested / neutral → do not spend geometry calibration effort forcing removal if that destabilizes the body
- explicit no-cape → final removal may be deferred to Stage B.5

Body/hand registration outranks cape cleanup during Stage A.

## 3. Stage B — V44 locked behavior

Stage B is **faithful isolation, not redesign**.

Stage A is absolute design/variant authority. Canonical references remain geometry checks.

Remove:

- head / face / hair / ears / exposed hero skin not part of the outfit
- underlying hero anatomy
- pedestal
- context/background
- character-only shadows

Keep:

- complete generated outfit
- both generated hands
- sleeves/armwear
- boots/leg coverings
- belts, straps, aprons, tunics, wraps, fur, leather, metal
- cape exactly where it exists in the approved Stage-A result

Preserve row/column assignment, X/Y, scale, pose, silhouette, arm chains, hand geometry, and design details. Do not presentation-center or enlarge isolated outfits.

Where hero removal exposes a hidden garment region, reconstruct only the minimum local outfit geometry required for continuity. Do not redesign.

### Stage B acceptance

PASS only if the result reads as the same 16 approved Stage-A outfits cut away from the hero while retaining near-canonical registration and hand geometry.

FAIL if Stage B redesigns variants, makes proportions stumpy, drifts arm chains, adds a hand digit, removes hands, normalizes scale/position, or newly interprets cape treatment.

## 4. Stage B.5 — cape operation

Cape handling is intentionally separated from validated Stage A/B.

Per outfit/cell, Stage B.5 will use one explicit mode:

- **KEEP** — preserve cape exactly
- **REMOVE** — remove cape while preserving every non-cape element and reconstruct only newly exposed local garment edges
- **RESTYLE** — modify only cape design while preserving body/outfit registration

Stage B.5 must never alter hands, sleeves, arm chains, torso proportions, legs, boots, or overall outfit registration.

Validate REMOVE first before locking the full B.5 module.

## 5. Output

Standard armor sheet:

- 1920×2560
- 4×4
- 480×640 cells
- no gutters/grid/labels
- pure white background for isolated production output

## 6. Core rule

**Registration and hand fidelity outrank semantic embellishment. Stage A establishes the registered design. Stage B extracts it faithfully. Cape manipulation is downstream and modular.**
