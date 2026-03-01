# Specification

## Summary
**Goal:** Add WhatsApp automation to booking CTAs and "Notify Me" buttons so users are redirected to WhatsApp with pre-filled messages relevant to the selected service or brand.

**Planned changes:**
- Update all "Book a Session" and booking-related CTA buttons in AssuredToursSection, LuminiaCapturesSection, LuminiaTechLabsSection, and GSTServicesSection to open `https://wa.me/<number>?text=...` in a new tab, with a pre-filled message that includes the service/subsidiary name and a prompt for preferred date/time
- Update all "Notify Me" buttons in ComingSoonSection (Luminia Gadgets, Moda Vestra, Velocity Vogue) to open WhatsApp in a new tab with a pre-filled message stating the user wants to be notified about the launch of that specific brand
- Use the same WhatsApp number already present in the Footer contact link for all buttons

**User-visible outcome:** Clicking any booking or notify-me button across the site opens WhatsApp in a new tab with a relevant pre-filled message, making it easy for users to inquire about bookings or request launch notifications.
