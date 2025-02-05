import { v4 as uuidv4 } from 'uuid';

import RadioItem from '@/app/components/General/RadioItem';
import { useFlights } from '@/context/FlightContext';
export default function TravelTypes() {
  const { travelTypeOptions, selectedTravelType, setSelectedTravelType } =
    useFlights();

  return (
    <div className="flex items-center gap-4">
      {travelTypeOptions.map((option) => (
        <RadioItem
          key={uuidv4()}
          checked={selectedTravelType === option}
          label={option}
          name="travel-type"
          value={option}
          onChange={(e) => setSelectedTravelType(e.target.value)}
        />
      ))}
    </div>
  );
}
