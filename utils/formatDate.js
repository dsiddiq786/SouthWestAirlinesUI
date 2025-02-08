// Named export for formatDate
export function formatDate(dateString) {
  const date = new Date(dateString);

  // Format date to "Mon, Feb 24, 2025"
  return date.toLocaleDateString('en-US', {
    weekday: 'short', // Mon
    month: 'short', // Feb
    day: '2-digit', // 24
    year: 'numeric', // 2025
  });
}

// Named export for formatShortDate
export function formatShortDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'numeric', // 2
    day: 'numeric', // 24
  });
}

// Named export for formatShortDate
export function formatRangeDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short', // 2
    day: 'numeric', // 24
  });
}
