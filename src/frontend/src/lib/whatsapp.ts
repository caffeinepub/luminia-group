export const WHATSAPP_NUMBER = "917439065260";

export function openWhatsApp(message: string): void {
  const encoded = encodeURIComponent(message);
  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`,
    "_blank",
    "noopener,noreferrer",
  );
}

export function buildBookingMessage(service: string): string {
  return `Hello Luminia Group! 👋\n\nI'm interested in booking *${service}*.\n\nCould you please share more details and availability?\n\nPreferred date/time: ___________\n\nThank you!`;
}

export function buildNotifyMessage(brand: string): string {
  return `Hello Luminia Group! 👋\n\nI'd like to be notified when *${brand}* launches.\n\nPlease add me to your notification list. Thank you!`;
}

export function buildGovernmentServiceMessage(service: string): string {
  return `Hello Luminia Group! 👋\n\nI need assistance with *${service}*.\n\nCould you please guide me through the process and let me know what documents are required?\n\nThank you!`;
}

export function openWhatsAppBooking(service: string): void {
  openWhatsApp(buildBookingMessage(service));
}

export function openWhatsAppNotify(brand: string): void {
  openWhatsApp(buildNotifyMessage(brand));
}

export function openWhatsAppPaymentConfirmation(uteReference: string): void {
  const now = new Date();
  const timestamp = now.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  });

  const message = `Hello Luminia Group! 👋\n\nI have completed my payment via Google Pay / UPI.\n\n*UTE Reference:* ${uteReference}\n*UPI ID Paid To:* luminiagadgets@okicici\n*Payment Date & Time:* ${timestamp} IST\n\nPlease confirm receipt of my payment at your earliest convenience.\n\nThank you!`;

  openWhatsApp(message);
}
