# Specification

## Summary
**Goal:** Add a date-gated Holi theme overlay to the Luminia Group website, visible only on March 14, 2025, featuring a greeting banner and festive color accents that complement the existing black and gold design.

**Planned changes:**
- Add a `isHoliToday()` utility function that returns true only when the current date is March 14, 2025
- Add a dismissible "Happy Holi 🎨" greeting banner/splash overlay at the top of the page with bold gold text on a black background, shown only on March 14, 2025
- Add semi-transparent Holi color decorative elements (pink, red, green, cyan, orange, yellow powder splashes/blobs) as background accents across sections, visible only on March 14, 2025
- All Holi UI components are conditionally rendered using the date-gating utility and do not appear on any other date

**User-visible outcome:** On March 14, 2025, visitors see a festive "Happy Holi 🎨" greeting and colorful Holi-themed decorative splashes across the site. On all other dates, the website renders exactly as before with no Holi elements visible.
