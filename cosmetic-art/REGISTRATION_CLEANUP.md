# Registration Template Cleanup

The preferred generation base is:
`reference-sheets/SPATIAL_TEMPLATE_MAIN_HERO_4X4_NEUTRAL_GRAY.png`

It is deliberately neutral gray and faint so the registration figure can be separated from the full-color, full-opacity cosmetics more easily.

## Recommended cleanup principle

Do not regenerate the artwork.

The goal is to remove only the faint neutral-gray registration pixels and replace them with pure white while preserving the full-opacity cosmetic pixels.

Because cosmetics may overlap the registration figure, fully automatic color deletion should be tested carefully around:
- black outlines
- white cosmetic fills
- light gray cosmetic fills

For final production, compare the cleaned result against the pre-cleanup version to ensure the cosmetic silhouette, position, scale, and colors did not change.

Then use Illustrator Image Trace as specified in the master MD.
