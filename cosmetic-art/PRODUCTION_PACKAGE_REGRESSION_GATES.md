# Don't Die Cosmetic Art — Production Package Regression Gates

**Status: mandatory pre-generation tests.**

A package is not ready merely because it contains the right files. It must prove that the image-generation model is being given the correct **visual authority hierarchy**.

## Universal failing condition

FAIL before generation if the package contains multiple visual references but does not explicitly designate which visual is allowed to control canvas geometry, body pose, registration, scale, and contact/occlusion behavior.

FAIL if an approved-art/design reference can plausibly be interpreted as coequal pose/scale/context authority.

FAIL if a category's primary controller/substrate is missing, misnamed, substituted by a generic reference sheet, or only described in prose.

## Required role labels

Every image supplied to generation must be assigned exactly one role in the prompt/manifest:

- `PRIMARY_CANVAS_AUTHORITY` — controls sheet/cell geometry, hero/context placement, registration, scale/contact behavior.
- `ANATOMY_AUTHORITY` — controls canonical body/hand anatomy only; never design style or prop scale.
- `DESIGN_ONLY` — controls requested palette/material/silhouette/theme only; never canvas, pose, registration, contact, anatomy, or scale unless the category workflow explicitly grants that property.
- `STYLE_ONLY` — controls rendering language only; never geometry/scale/pose/contact.

No unlabeled visual references are allowed.

## Category regression gates

### HATS
PASS only if the package names the hat placement/orientation controller as primary spatial authority; MAIN HERO is anatomy/context authority; approved hats are DESIGN_ONLY; hat designs remain head-relative rather than independently centered or presentation-sized.

### RIGHT ARM
PASS only if the right-arm placement controller is primary spatial authority; MAIN HERO is anatomy/context authority; approved weapons/props are DESIGN_ONLY; generation preserves body-relative held-object scale/orientation and does not let approved standalone art become presentation scale.

### LEFT ARM V3
PASS only if `LEFT_ARM_FINISHED_COSMETIC_EXEMPLAR_REFERENCE_4X4_V3.png` is the PRIMARY_CANVAS_AUTHORITY. It must be present under that exact canonical filename/path or a clearly labeled package copy. MAIN HERO and approved art are subordinate. Approved Gold Armor/Gold Sword/Mirror Shield can never control hero clothing, hand pose, grip, contact, object scale, or canvas composition.

Regression A expected behavior: shield, money bag, spatula, lantern are **extremely tiny standalone cosmetics screen-left**, separated from hero by white space. Hero does not hold them. If the output depicts a gauntleted/armored hand gripping them, or normal readable-prop scale, FAIL immediately.

### ARMOR / OUTFITS
PASS only if the literal canonical hero substrate + proportion controller are primary geometry authorities, canonical hand/left-arm-chain refs are ANATOMY_AUTHORITY, and prior outfit/approved armor refs are DESIGN_ONLY. Generic armor reference sheets must not displace clean-room canonical geometry. Stage B receives approved Stage A + cape manifest as artwork/semantic authority, not a reference soup.

### ACCESSORIES — FACE
PASS only if the ~6% faint literal hero substrate is PRIMARY_CANVAS_AUTHORITY, the face registration controller is spatial authority, and approved face art such as Meme Glass is DESIGN_ONLY/scale-class precedent. A full-color hero image must not become the generation canvas. Generative Stage B is prohibited.

### ACCESSORIES — NON-FACE
No location may be treated as validated merely because general accessory references exist. A literal location-specific controller must be designated PRIMARY_CANVAS_AUTHORITY before production is declared reusable.

## Preflight output

Before invoking image generation, the agent must internally verify and record:

1. category/location;
2. primary canvas authority filename;
3. any anatomy authorities;
4. every design/style-only reference;
5. prohibited properties for each subordinate reference;
6. expected contact/occlusion behavior;
7. expected scale class;
8. exact output sheet/cell geometry.

If any field is unresolved, do not generate.
