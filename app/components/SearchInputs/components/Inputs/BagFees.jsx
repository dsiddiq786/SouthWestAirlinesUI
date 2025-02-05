import { v4 as uuidv4 } from 'uuid';

import RadioItem from '@/app/components/General/RadioItem';
import { useFlights } from '@/context/FlightContext';
export default function BagFees() {
  const { bagFeeOptions, selectedBagFee, setSelectedBagFee } = useFlights();

  return (
    <div className="flex items-center gap-6">
      <button className="text-[13px] leading-none text-blue-sw decoration-black-sw hover:text-black-sw hover:underline">
        Baggage and optional fees
      </button>
      <div className="flex items-center gap-4">
        {bagFeeOptions.map((option) => (
          <RadioItem
            key={uuidv4()}
            checked={selectedBagFee === option}
            label={option}
            name="bag-fees"
            value={option}
            onChange={(e) => setSelectedBagFee(e.target.value)}
          />
        ))}
      </div>
    </div>
  );
}
