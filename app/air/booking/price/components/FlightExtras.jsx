import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

export default function FlightExtras() {
  const [selectedUpgrade, setSelectedUpgrade] = useState(null);

  const upgradeOptions = [
    { id: 'depart', label: 'Upgrade departing trip for $50' },
    { id: 'return', label: 'Upgrade returning trip for $50' },
    { id: 'both', label: 'Upgrade both for $100' },
  ];

  return <div>Flight Extras</div>;
}
