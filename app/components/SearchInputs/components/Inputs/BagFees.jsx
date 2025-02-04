import RadioItem from '@/app/components/General/RadioItem';
import { useFlights } from '@/context/FlightContext';
import { v4 as uuidv4 } from 'uuid';
export default function BagFees() {
  const { bagFeeOptions, selectedBagFee, setSelectedBagFee } = useFlights();
  return (
    <div className="flex items-center gap-6">
      <span className="text-[13px] leading-none text-blue-sw">
        Baggage and optional fees
      </span>
      <div className="flex items-center gap-4">
        {bagFeeOptions.map((option) => (
          <RadioItem
            key={uuidv4()}
            label={option}
            name="bag-fees"
            value={option}
            checked={selectedBagFee === option}
            onChange={(e) => setSelectedBagFee(e.target.value)}
          />
        ))}
      </div>
    </div>
  );
}
