import RadioItem from '@/app/components/General/RadioItem';
import { useFlights } from '@/context/FlightContext';
import { v4 as uuidv4 } from 'uuid';
export default function TravelTypes() {
  const { travelTypeOptions, selectedTravelType, setSelectedTravelType } =
    useFlights();
  return (
    <div className="flex items-center gap-4">
      {travelTypeOptions.map((option) => (
        <RadioItem
          key={uuidv4()}
          label={option}
          name="travel-type"
          value={option}
          checked={selectedTravelType === option}
          onChange={(e) => setSelectedTravelType(e.target.value)}
        />
      ))}
    </div>
  );
}
