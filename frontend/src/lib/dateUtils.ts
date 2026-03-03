/**
 * Returns true only when the current local date is March 3, 2026 (Holi day).
 */
export function isHoliToday(): boolean {
  const now = new Date();
  return (
    now.getFullYear() === 2026 &&
    now.getMonth() === 2 && // 0-indexed: 2 = March
    now.getDate() === 3
  );
}
