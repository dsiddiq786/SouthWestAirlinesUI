import { useState } from 'react';
import { today, getLocalTimeZone } from '@internationalized/date';

export function useReturnDate() {
  const [returnDate, setReturnDate] = useState('');

  return {
    returnDate,
    setReturnDate,
  };
}
