# Specification

## Summary
**Goal:** Auto-generate a unique UTE reference number and embed it in the pre-filled WhatsApp payment confirmation message when the customer clicks "Payment Done", with no manual input required.

**Planned changes:**
- Update `frontend/src/lib/whatsapp.ts` to accept a UTE reference number parameter and embed it in the payment confirmation message body alongside UPI ID and timestamp.
- Update `PaymentSection.tsx` to auto-generate a unique UTE reference number (format: `UTE-XXXXXXXX`) when the customer clicks "Payment Done" and pass it to the WhatsApp helper, triggering the redirect immediately with no intermediate steps.

**User-visible outcome:** When a customer clicks "Payment Done", WhatsApp automatically opens with a pre-filled message that includes the auto-generated UTE reference number, UPI ID, and timestamp — fully automatic with zero manual input.
