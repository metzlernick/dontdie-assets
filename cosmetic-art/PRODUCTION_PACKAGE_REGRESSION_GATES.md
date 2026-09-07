# Don't Die Cosmetic Art — Production Package Regression Gates

**Status: mandatory pre-generation tests.**

A package is not ready merely because it contains the right files. It must prove that fresh-agent packaging preserved the **validated category generation setup**: exact active visual inputs, controller bytes/construction, reference order, prompt body, and stage-specific authority hierarchy.

## Universal failing conditions

FAIL before generation if the package contains multiple visual references but does not explicitly designate which visual is allowed to control canvas geometry, body pose, registration, scale, and contact/occlusion behavior.

FAIL if an approved-art/design reference can plausibly be interpreted as coequal pose/scale/context authority.

FAIL if a category's primary controller/substrate is missing, misnamed, substituted by a generic reference sheet, or only described in prose.

FAIL if generic packaging changes the validated category/stage active visual-input set by adding an image solely because it exists in the permanent reference kit or generic role taxonomy.

FAIL if an exact controller has been resized, downsampled, re-encoded, screenshotted, flattened, duplicate-renamed (for example `(1)`/`(2)`), or otherwise round-tripped before generation. If an exact canonical controller is required, generation receives the exact canonical file bytes and basename.

FAIL if PRIMARY is not first in actual generation-reference order.

FAIL if a composite PRIMARY already contains the validated hero/context and packaging adds a separate full-color hero/context image that the category workflow does not explicitly require.

FAIL if a locked prompt template was summarized, shortened, paraphrased, reordered, or freshly rewritten outside its permitted substitution fields.

FAIL if preflight checks a prompt/reference package but the actual image-generation invocation uses a different synthesized prompt or a different visual set/order.

## Required role labels

Every image supplied to generation must be assigned exactly one role in the prompt/manifest:

- `PRIMARY_CANVAS_AUTHORITY` — controls the PRIMARY-owned sheet/cell geometry, hero/context relationship, registration, scale/contact behavior defined by the category workflow.
- `ANATOMY_AUTHORITY` — controls canonical body/hand anatomy only; never design style or prop scale.
- `DESIGN_ONLY` — controls requested palette/material/silhouette/theme only; never canvas, pose, registration, contact, anatomy, or scale unless the category workflow explicitly grants that property.
- `STYLE_ONLY` — controls rendering language only; never geometry/scale/pose/contact.

No unlabeled visual references are allowed. A role label does not make an otherwise-unneeded image valid.

## Input-fidelity record

Before generation, record:

1. exact active visual files in supply order;
2. PRIMARY basename and expected dimensions;
3. SHA-256 for any category controller designated exact/locked;
4. source path for each active visual;
5. whether each visual is a direct canonical byte copy or a permitted derived controller;
6. exact prompt-template source and which substitution fields changed.

If a package is transferred through a UI or chat, verify the file received by the generation stage still matches the recorded controller dimensions/hash. Do not infer success from a similar-looking thumbnail.

## Category regression gates

### HATS
PASS only if packaging reproduces the current validated hat generation input set. Hat placement/orientation controller(s) remain primary spatial authority; approved hats are DESIGN_ONLY only when needed by the brief; no generic packaging step injects extra context/style imagery or rewrites a locked hat prompt. Do not presentation-center or enlarge hats.

### RIGHT ARM
PASS only if packaging reproduces the current validated right-arm generation input set and order. Right-arm placement controller remains primary spatial authority; approved weapons/props are DESIGN_ONLY only when needed; generic packaging must not add reference soup or alter continuous grip/body-relative scale behavior.

### LEFT ARM V3
PASS only if `LEFT_ARM_FINISHED_COSMETIC_EXEMPLAR_REFERENCE_4X4_V3.png` is active visual input **#1**, under that exact basename, at **2400×2560**, and its bytes match the canonical repository/fallback-kit file.

For normal V3 one-pass production, the V3 composite controller itself supplies the validated hero/context relationship. **Do not supply `MASTER_CHARACTER_REFERENCE.png` as a separate active generation reference.** It may remain outside `GENERATION_INPUT/` for portability/audit.

`00_GENERATION_PROMPT.txt` must be the canonical `LEFT_ARM_PRODUCTION_PROMPT_TEMPLATE.txt` with only `ROW_1`–`ROW_4` brief slots substituted. A shorter “equivalent” fresh-agent prompt is a FAIL.

Regression A design references Gold Armor / Gold Sword / Mirror Shield are allowed only because the shield brief explicitly needs them. They are supplied after V3 and remain DESIGN_ONLY; they can never control hero clothing, hand pose, grip, contact, object scale, or canvas composition.

Regression A expected behavior: shield, money bag, spatula, lantern are **extremely tiny standalone cosmetics screen-left**, separated from hero by white space. Hero does not hold them. If output depicts a gauntleted/armored hand gripping them, or normal readable-prop scale, FAIL immediately.

Regression B remains the difficult scale control: palm-facing gold gauntlet with four unoutlined colored energy streaks, silver throwing star, slightly three-quarter bedazzled pink purse, red nunchuks. It must retain V3 tiny zero-contact behavior.

### ARMOR / OUTFITS
PASS only if packaging reproduces the exact current stage-specific input set. Stage A uses its literal canonical hero substrate + proportion controller as geometry authorities, canonical hand/left-arm-chain refs as required anatomy authorities, and only genuinely needed DESIGN_ONLY outfit references. Generic armor sheets or unrelated approved art must not be injected. Stage B receives approved Stage A/A.5 + cape manifest only as specified by the locked workflow; generic packaging must not add reference soup.

### ACCESSORIES — FACE
PASS only if packaging reproduces the locked face Stage-A setup: the ~6% faint literal hero substrate remains PRIMARY, face registration controller remains its spatial authority, and only needed approved face art is DESIGN_ONLY. A full-color MAIN HERO image must not be added as an active generation input by generic packaging. Generative Stage B remains prohibited.

### ACCESSORIES — NON-FACE
No location may be treated as validated merely because general accessory references exist. Packaging must reproduce an already validated location-specific setup or stop; this cross-category gate does not authorize a new controller architecture.

## Preflight output

Before invoking image generation, the agent must internally verify and record:

1. category/location/stage;
2. validated workflow controlling that stage;
3. ordered active visual set;
4. primary canvas authority filename + dimensions + hash when exact;
5. any required subordinate authorities;
6. every DESIGN_ONLY/STYLE_ONLY reference and why it is needed;
7. prohibited properties for each subordinate reference;
8. expected contact/occlusion behavior;
9. expected scale class;
10. exact output sheet/cell geometry/relationship;
11. locked prompt-template source and permitted substitutions;
12. confirmation that the actual generation call will use that exact prompt and ordered visual set.

If any field is unresolved, or if the fresh-agent package differs from the validated category setup without an explicit category-level change-control decision, do not generate.
