# Specification

## Summary
**Goal:** Build a full static corporate landing site for Luminia Group Conglomerate with a cinematic welcome popup, a black-and-gold luxury theme, seven subsidiary company cards, and "Launching Soon" modals for each subsidiary.

**Planned changes:**
- Add a full-screen cinematic welcome popup (shown once per session via sessionStorage) featuring: animated gold particle rain on a deep black background; the Luminia Group logo (image-3.png) fading in with a golden glow pulse; "WELCOME TO LUMINIA GROUP CONGLOMERATE" headline with letter-by-letter gold serif reveal; a self-drawing gold horizontal divider; "A Legacy of Excellence" italic gold subtitle; a glowing gold ENTER button with ripple effect; and a gold burst/dissolve exit transition
- Build the main landing page with a strict black and gold luxury theme — deep black/obsidian background, all headings and accents in gold or ivory, gold divider lines, Luminia Group logo in nav and footer
- Display all 7 subsidiaries (Luminia Gadgets, Moda Vestra, Velocity Vogue, Luminia Captures, Assured Tours & Travels, Luminia TechLabs, GST Service) as premium gold-bordered cards in a responsive grid, each with company name, tagline, and a gold "Discover" button
- On clicking "Discover," open a full-screen modal overlay per subsidiary with: black background, animated gold border, large gold subsidiary name, "LAUNCHING SOON" shimmer/glow animation, a grid or carousel of the relevant generated product/service images, and a gold close button (also closeable via Escape key)
- Place all generated product/service images in `frontend/public/assets/generated` and reference them in the correct subsidiary modals

**User-visible outcome:** Visitors land on a cinematic black-and-gold welcome popup, enter the main site, browse all seven Luminia subsidiaries as luxury cards, and can open a "Launching Soon" modal for each subsidiary showcasing relevant imagery — all with a consistent premium black-and-gold aesthetic.
