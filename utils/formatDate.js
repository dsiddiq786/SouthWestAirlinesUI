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

// Function to format date as "Thu 2/13"
export function formatDateToDayDate(dateString) {
  const date = new Date(dateString);

  // Extract individual components
  const weekday = date.toLocaleDateString('en-US', { weekday: 'short' }); // Thu
  const month = date.toLocaleDateString('en-US', { month: 'numeric' }); // 2
  const day = date.toLocaleDateString('en-US', { day: 'numeric' }); // 13

  return `${weekday} ${month}/${day}`;
}

// Named export for formatShortDate
export function formatRangeDate(startDate, endDate) {
  if (!startDate) return '';

  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : null;

  const options = { month: 'short', day: 'numeric' }; // Format: "FEB 13"

  // If both dates exist and are in the same month
  if (end && start.getMonth() === end.getMonth()) {
    return `${start.toLocaleDateString('en-US', options)} - ${end.getDate()}`;
  }

  // If dates are in different months
  return end
    ? `${start.toLocaleDateString('en-US', options)} - ${end.toLocaleDateString(
        'en-US',
        options
      )}`
    : start.toLocaleDateString('en-US', options);
}
