import { useForm } from 'react-hook-form';

// Custom hook to generate multiple form instances
export function usePassengerForms(passengerInfo) {
  return passengerInfo.map(() => useForm());
}
