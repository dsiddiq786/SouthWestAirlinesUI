import { useFlights } from '@/context/FlightContext';
import { v4 as uuidv4 } from 'uuid';
import ReturnFlightDetails from './components/ReturnFlightDetails';

export default function ReturnFlights() {
  const { filteredReturnFlights, handleReturnContinueClick } = useFlights();

  return (
    <div>
      {filteredReturnFlights.length === 0 ? (
        <ol className="w-full list-none text-center text-lg font-medium">
          No flights found!
        </ol>
      ) : (
        <>
          <ol className="flex w-full list-none flex-col gap-4">
            <ReturnFlightDetails
              key={uuidv4()}
              flights={filteredReturnFlights[0]?.flights}
            />
          </ol>
          {/* Continue button */}
          <div className="mt-8 flex w-full justify-end">
            <button
              onClick={() => handleReturnContinueClick()}
              className="box-shadow-sw rounded-sm border border-transparent bg-yellow-sw px-[22px] py-3 text-[17px] font-bold text-black-sw transition-all duration-300 hover:border-black-sw hover:shadow-none"
            >
              Continue
            </button>
          </div>
        </>
      )}
    </div>
  );
}
