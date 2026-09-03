# LEFT ARM Production Guardrail Change

## Status

Active production change record.

## Why this exists

A production batch correctly preserved row identity and zero-contact behavior but became dramatically oversized after a one-off row-specific scale exception was added to match another approved cosmetic's scale.

That failure demonstrated that normal production must not rewrite or extend the validated LEFT ARM controller for individual objects.

## Permanent safeguards

- LEFT ARM production invariants are locked.
- Normal production may change only the four current row briefs.
- A mandatory conflict gate runs before production files are created.
- User instructions that conflict with scale, exemplar authority, zero-contact, hero placement, sheet geometry, detail hierarchy, grip behavior, or reconstruction workflow must be flagged rather than silently encoded.
- The user must be shown a safe rewording that preserves design intent without changing the controller.
- Approved art can influence palette, design language, material, silhouette vocabulary, family resemblance, and non-scale proportion cues, but cannot override canonical generation scale.
- `LEFT_ARM_PRODUCTION_PROMPT_TEMPLATE.txt` is the immutable production-prompt body.
- Any proposed change to invariant behavior is a separate calibration/change-control task, not normal production.

## Core principle

The repository, not conversational memory, must preserve the calibrated production system.