import { useFlights } from '@/context/FlightContext';
import FlightItem from './components/FlightItem';
import { v4 as uuidv4 } from 'uuid';

export default function Flights() {
  const { filteredFlights, selectedDepartFlight } = useFlights();

  // If there is a selectedDepartFlight, find which filteredFlight contains it
  const displayedFlights = selectedDepartFlight
    ? filteredFlights
        .map((flight) => ({
          ...flight,
          flights: flight.flights.filter(
            (f) => f.id === selectedDepartFlight.flight[0].id
          ),
        }))
        .filter((flight) => flight.flights.length > 0) // Remove empty results
    : filteredFlights;
  return (
    <div>
      {displayedFlights.length === 0 ? (
        <ol className="w-full list-none text-center text-lg font-medium">
          No flights found!
        </ol>
      ) : (
        <>
          <ol className="flex w-full list-none flex-col gap-4">
            {displayedFlights.map((flight, index) => (
              <FlightItem key={uuidv4()} flightIndex={index} {...flight} />
            ))}
          </ol>
          {/* Continue button */}
          <div className="mt-8 flex w-full justify-end">
            <button className="box-shadow-sw rounded-sm bg-yellow-sw px-[22px] py-3 text-[17px] font-bold text-black-sw">
              Continue
            </button>
          </div>
        </>
      )}
    </div>
  );
}
