# Don't Die Cosmetic Art — Production Runtime Asset Manifest

## Purpose

This file solves fresh-session asset portability.

For normal production, the user supplies only:

- category
- up to four row briefs
- this repo/handoff context

The agent owns retrieval of canonical visual references and creation of a **single complete ZIP** for any generation step that requires uploads.

## Hard rule — never make the user hunt for canonical files

If a required PNG/SVG already exists in `metzlernick/dontdie-assets`, **do not ask the user to find, download, or re-upload it individually**.

The GitHub connector may be able to inspect a binary repository entry without exporting its bytes into the working container. That is not a user problem and is not a reason to request manual uploads.

This repository is public. Binary repository assets can be retrieved from the raw GitHub endpoint:

`https://raw.githubusercontent.com/metzlernick/dontdie-assets/main/<repo-path>`

For paths containing spaces or other URL-sensitive characters, URL-encode the path.

An agent with a container/download tool should download the raw URL directly to its working directory. An agent with another HTTP/file-fetch mechanism should use that mechanism. The GitHub contents API `download_url` is also valid when surfaced by repository listing.

After retrieval, verify that the local file exists and is non-empty before packaging.

## Package contract

Whenever a generation step requires the user to upload references, provide **one ZIP** containing:

1. the exact production prompt
2. manifest/metadata files required by that category/stage
3. every fixed canonical visual dependency required by the prompt
4. every batch-specific approved-art reference selected by the agent
5. a short README naming the intended generation stage and expected output

Never give the user a list of repo PNGs/SVGs to collect manually.

If the generation system accepts visual references directly from the agent's working environment, use them directly. Otherwise package them into the ZIP.

## Retrieval order

1. Inspect the live repo and category workflow.
2. Resolve exact canonical paths.
3. Resolve batch-specific approved-art references by semantic/design similarity.
4. Retrieve binary assets from raw GitHub into the working environment.
5. Verify the files.
6. Build one complete ZIP.
7. Only then ask the user to run/upload the package.

If a mandatory asset genuinely does not exist in the repository, stop and identify that missing repository asset. Do not phrase this as a request for the user to hunt for it locally.

---

# Fixed runtime assets by category

These are baseline dependencies. Category workflows may require additional current canonical files; the live workflow wins.

## Shared canonical visual assets

Preferred raster hero reference:

- `cosmetic-art/reference-sheets/MASTER_CHARACTER_REFERENCE.png`

Additional registration/context assets when required:

- `cosmetic-art/reference-sheets/SPATIAL_TEMPLATE_MAIN_HERO_4X4.png`
- `cosmetic-art/registration/MAIN_HERO_REGISTRATION.png`
- `cosmetic-art/registration/MAIN_HERO_REGISTRATION_4X4.png`
- `cosmetic-art/registration/CANONICAL_ANCHOR_REFERENCE.png`
- `cosmetic-art/reference-sheets/STYLE_LOCK_APPROVED_ART.png`

Canonical SVG sources:

- `cosmetic-art/templates/MAIN HERO.svg`
- `cosmetic-art/templates/Character Master Template.svg`

## HATS

Fixed visual dependencies:

- `cosmetic-art/reference-sheets/MASTER_CHARACTER_REFERENCE.png`
- `cosmetic-art/reference-sheets/HATS_REFERENCE.png`
- `cosmetic-art/reference-sheets/HATS_PLACEMENT_REFERENCE.png`
- `cosmetic-art/reference-sheets/HAT_HEAD_ORIENTATION_REFERENCE.png`

Batch-specific dependencies:

- especially similar files from `cosmetic-art/approved-art/hats/`

The agent retrieves and packages these. The user does not locate them.

## RIGHT ARM

Fixed visual dependencies:

- `cosmetic-art/reference-sheets/MASTER_CHARACTER_REFERENCE.png`
- `cosmetic-art/reference-sheets/RIGHT_ARM_REFERENCE.png`
- `cosmetic-art/reference-sheets/RIGHT_ARM_PLACEMENT_REFERENCE.png`

Batch-specific dependencies:

- especially similar files from `cosmetic-art/approved-art/right-arm/`

The agent retrieves and packages these. The user does not locate them.

## LEFT ARM — V3

Fixed visual dependencies:

- `cosmetic-art/reference-sheets/MASTER_CHARACTER_REFERENCE.png`
- `cosmetic-art/reference-sheets/LEFT_ARM_FINISHED_COSMETIC_EXEMPLAR_REFERENCE_4X4_V3.png`

Mandatory text authorities:

- `cosmetic-art/LEFT_ARM_ZERO_CONTACT_WORKFLOW.md`
- `cosmetic-art/LEFT_ARM_4X4_PRODUCTION_CONTROLLER.md`
- `cosmetic-art/LEFT_ARM_PRODUCTION_PROMPT_TEMPLATE.txt`

Batch-specific dependencies:

- especially similar approved art from any relevant category, including `approved-art/left-arm/`, `approved-art/right-arm/`, `approved-art/armor/`, etc., when the brief explicitly asks to match an existing set/design family

Example regression batch: gold shield / money bag / spatula / lantern. If the gold shield is explicitly required to match Gold Armor + Gold Sword and use Mirror Shield as a scale/design precedent, the agent must retrieve those approved files itself and include them in the ZIP. It must **not** ask the user to upload Gold Armor, Gold Sword, Mirror Shield, MAIN HERO, or the V3 exemplar.

## ARMOR / OUTFITS

Mandatory text authorities:

- `cosmetic-art/ARMOR_OUTFIT_PRODUCTION_WORKFLOW.md`
- `cosmetic-art/ARMOR_STAGE_B_DETERMINISTIC_REGISTRATION.md`

Fixed visual dependencies are the current canonical-derived hero geometry/substrate, canonical hand, viewer-left arm-chain, and master hero references named by the live armor workflow/package.

Batch-specific dependencies:

- relevant approved armor/design references
- DESIGN-ONLY prior approved outfit only when explicitly requested

The agent retrieves all repository-resident dependencies and packages each generation stage completely. Do not ask the user to rediscover canonical armor controllers.

## ACCESSORIES — GENERAL

Fixed baseline visual dependencies:

- `cosmetic-art/reference-sheets/MASTER_CHARACTER_REFERENCE.png`
- `cosmetic-art/reference-sheets/ACCESSORIES_REFERENCE.png`
- `cosmetic-art/reference-sheets/ACCESSORIES_PLACEMENT_REFERENCE.png`

Batch-specific dependencies:

- relevant approved files from `cosmetic-art/approved-art/accessories/`
- location-specific controllers required by a validated workflow

## FACE ACCESSORIES — LOCKED

Mandatory text authority:

- `cosmetic-art/ACCESSORY_FACE_PRODUCTION_WORKFLOW.md`

Runtime package must include the current faint literal canonical hero substrate/controller, face registration controller, and especially similar approved face-accessory references required by the live workflow/package.

If those controllers are generated deterministically from canonical repo assets as part of packaging, the agent performs that operation itself and includes the generated controllers in the ZIP.

Do not ask the user to upload Meme Glass, MAIN HERO, or a canonical face controller when those are repository-resident or deterministically constructible from repository assets.

---

# Batch-specific approved-art selection

A fixed production kit cannot predict which approved design references a future brief will invoke. Therefore the fresh agent must select them automatically.

When a brief says things such as:

- "match the gold armor/sword"
- "similar scale to Mirror Shield"
- "same style as X"
- "closest to Meme Glass"

search the relevant `approved-art/` directories, resolve the best matching canonical file(s), retrieve them from raw GitHub, and include them in the package.

Do not require exact filename spelling from the user when the intended approved asset can be resolved from the repository.

Approved art controls only the properties assigned by the category workflow. It never silently overrides locked scale, registration, anatomy, zero-contact, or isolation rules.

# Failure handling

A fresh agent may ask the user for an additional visual file only when **all** of the following are true:

1. the requested design depends on a user-specific/new visual reference not already in the repo;
2. repository search confirms no suitable canonical asset exists;
3. the current brief cannot be executed faithfully without that external visual.

Canonical production files are never treated as user-supplied dependencies.

# Core portability principle

**Repo asset retrieval is agent work.**

The normal user-facing contract is:

**handoff + category + four briefs → agent-built complete ZIP → generation → review.**