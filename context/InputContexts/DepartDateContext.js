import { useState } from 'react';
import { today, getLocalTimeZone } from '@internationalized/date';

export function useDepartDate() {
  const [departDate, setDepartDate] = useState('');

  return {
    departDate,
    setDepartDate,
  };
}
