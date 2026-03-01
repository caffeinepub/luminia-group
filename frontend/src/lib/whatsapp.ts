// Shared WhatsApp configuration for Luminia Group
export const WHATSAPP_NUMBER = '917439065260';

/**
 * Opens WhatsApp in a new tab with a pre-filled message.
 * @param message - The pre-filled message text
 */
export function openWhatsApp(message: string): void {
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank', 'noopener,noreferrer');
}

/**
 * Generates a booking message for a Luminia service.
 * @param serviceName - The name of the service/division
 */
export function buildBookingMessage(serviceName: string): string {
  return `Hello Luminia Group! 👋\n\nI would like to book a session / consultation for *${serviceName}*.\n\nPlease let me know the available slots.\n\nPreferred Date & Time: [Please mention your preferred date and time]\n\nThank you!`;
}

/**
 * Generates a launch notification message for a coming-soon brand.
 * @param brandName - The name of the upcoming brand
 */
export function buildNotifyMessage(brandName: string): string {
  return `Hello Luminia Group! 👋\n\nI would like to be notified about the launch of *${brandName}*.\n\nPlease add me to the launch notification list so I can be among the first to know when it goes live!\n\nThank you!`;
}
