import { useFlights } from '@/context/FlightContext';
import { IoIosAirplane } from 'react-icons/io';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function ReturnInfo() {
  const { codeDetailsWithCityState, selectedDepartFlight } = useFlights();

  return (
    <div className="flex items-start justify-between whitespace-nowrap">
      {/* Return info */}
      <div className="flex items-start gap-4">
        {/* return icon */}
        <div className="relative mt-1 rotate-[230deg] rounded-full bg-[#008020] p-[5px]">
          <IoIosAirplane size={20} className="text-white" />
        </div>

        {/* Depart and arrive codes */}
        <div className="flex flex-col gap-[16px] leading-none">
          {/* upper codes */}
          <div className="flex items-end gap-2">
            <h2 className="text-[42px] font-bold tracking-tighter text-black-sw">
              Return:
            </h2>
            <div className="flex items-center gap-3 text-[42px] tracking-tight text-black-sw">
              {/* Arrival Codes */}
              <span>{selectedDepartFlight?.flight?.arrivalPort}</span>

              {/* flight icon */}
              <span>
                <IoIosAirplane size={22} className="text-[#a4baf2]" />
              </span>

              {/* Depart Codes */}
              <span>{selectedDepartFlight?.flight?.departurePort}</span>
            </div>
          </div>

          {/* lower detailed codes */}
          <div className="text-[16px] text-black-sw">
            {/* Depart code */}
            <span>
              {codeDetailsWithCityState.filter((detail) => {
                return detail.includes(
                  selectedDepartFlight?.flight?.arrivalPort
                );
              })}
            </span>{' '}
            to {/* Arrival Codes */}
            <span>
              {codeDetailsWithCityState.filter((detail) => {
                return detail.includes(
                  selectedDepartFlight?.flight?.departurePort
                );
              })}
            </span>
          </div>
        </div>
      </div>

      {/*   Govt tax and dollars or points */}
      <div className="mt-1 flex items-start gap-4">
        {/* Govt tax notification */}
        <div className="flex flex-col items-end text-[11px]">
          <button className="text-blue-sw underline transition-all hover:text-black-sw hover:decoration-black-sw">
            Government taxes & fees included
          </button>
          <p className="text-black-sw">
            All fares are rounded upto the nearest dollar.
          </p>
        </div>
      </div>
    </div>
  );
}
