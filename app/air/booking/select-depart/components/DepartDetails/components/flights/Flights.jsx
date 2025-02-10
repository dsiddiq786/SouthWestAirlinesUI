import { useFlights } from '@/context/FlightContext';
import FlightItem from './components/FlightItem';
import { v4 as uuidv4 } from 'uuid';

export default function Flights() {
  const { filteredFlights } = useFlights();
  return (
    <div>
      {filteredFlights.length === 0 ? (
        <ol className="w-full list-none text-center text-lg font-medium">
          No flights found!
        </ol>
      ) : (
        <>
          <ol className="flex w-full list-none flex-col gap-4">
            {filteredFlights.map((flight) => (
              <FlightItem key={uuidv4()} {...flight} />
            ))}
          </ol>
        </>
      )}
    </div>
  );
}
