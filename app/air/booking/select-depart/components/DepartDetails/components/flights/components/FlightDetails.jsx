import { useFlights } from '@/context/FlightContext';
import FlightDetailItem from './FlightDetailItem';
import { v4 as uuidv4 } from 'uuid';

export default function FlightDetails({ flights }) {
  const { selectedDepartFlight } = useFlights();
  console.log(selectedDepartFlight);
  return (
    <div className="flex flex-col">
      {/* Filters */}
      {!selectedDepartFlight && <div className="py-[12px]">Filters</div>}

      {/* title column */}
      <div className="flex">
        {/* flights, stops, duration */}
        <div className="flex flex-1 items-center justify-between border-y py-2">
          <span className="text-[20px] font-bold tracking-tighter text-black-sw">
            Departing flights
          </span>

          <div className="flex text-[13px] text-gray-sw">
            <span>Number of stops</span>
            <span className="ml-14 mr-12">Duration</span>
          </div>
        </div>

        {/* Price tags */}
        <div className="flex gap-[10px] border-y">
          {/* Business Select */}
          <div className="relative flex w-[94px] items-center justify-center bg-[#304cb2] text-center">
            <button className="z-10 flex flex-col items-center justify-center text-[13px] font-bold leading-none text-white hover:underline">
              <span>Business</span>
              <span>Select</span>
            </button>
            <div className="clip-ribbon absolute bottom-[-.72rem] w-full bg-[#304cb2] py-6"></div>
          </div>

          {/* Anytime */}
          <div className="relative flex w-[94px] items-center justify-center bg-[#a4baf2] text-center">
            <button className="z-10 flex flex-col items-center justify-center text-[13px] font-bold leading-none text-black-sw hover:underline">
              <span>Anytime</span>
            </button>
            <div className="clip-ribbon absolute bottom-[-.72rem] w-full bg-[#a4baf2] py-6"></div>
          </div>

          {/* Wanna get away plus */}
          <div className="relative z-20 flex w-[94px] items-center justify-center border border-x-red-600 border-t-red-600 bg-white text-center">
            <button className="z-10 flex flex-col items-center justify-center text-[13px] font-bold leading-none text-black-sw hover:underline">
              <span>Wanna Get</span>
              <span>
                Away{' '}
                <span className="font-swSans italic text-red-600">plus</span>
              </span>
            </button>
            <div className="clip-chevron absolute bottom-[-1.25rem] -z-20 h-2 w-full bg-red-600 pt-10"></div>
            <div className="clip-chevron absolute bottom-[-.9rem] -z-20 h-2 w-full bg-white pt-10"></div>
          </div>

          {/* Wanna get away */}
          <div className="relative flex w-[94px] items-center justify-center bg-[#ffbf27] text-center">
            <button className="z-10 flex flex-col items-center justify-center text-[13px] font-bold leading-none text-black-sw hover:underline">
              <span>Wanna Get</span>
              <span>Away</span>
            </button>
            <div className="clip-ribbon absolute bottom-[-.72rem] w-full bg-[#ffbf27] py-6"></div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-6">
        {selectedDepartFlight ? (
          <section>
            {flights
              .filter(
                (flightDetail) =>
                  flightDetail.id === selectedDepartFlight.flight.id
              )
              .map((flightDetail) => (
                <FlightDetailItem
                  key={uuidv4()}
                  flight={flightDetail}
                  {...flightDetail}
                />
              ))}
          </section>
        ) : (
          <section className="flex flex-col gap-6">
            {flights.map((flightDetail) => {
              return (
                <FlightDetailItem
                  key={uuidv4()}
                  flight={flightDetail}
                  {...flightDetail}
                />
              );
            })}
          </section>
        )}
      </div>
    </div>
  );
}
