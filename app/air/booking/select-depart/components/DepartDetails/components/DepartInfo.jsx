import { useFlights } from '@/context/FlightContext';
import { IoIosAirplane } from 'react-icons/io';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function DepartInfo() {
  const {
    selectedDepartCodes,
    selectedArriveCodes,
    filteredDepartCitiesByState,
    filteredArriveCitiesByState,
    codeDetailsWithCityState,
    bagFeeOptions,
    selectedBagFee,
    setSelectedBagFee,
  } = useFlights();

  const { replace } = useRouter();
  const searchParams = useSearchParams();

  // Function to update the URL
  const updateURL = (newBagFee) => {
    const params = new URLSearchParams(searchParams);
    params.set('bagFee', newBagFee); // Update bagFee

    replace(`?${params.toString()}`, { scroll: false }); // Update URL without reload
  };

  return (
    <div className="flex items-start justify-between whitespace-nowrap">
      {/* Depart info */}
      <div className="flex items-start gap-4">
        {/* depart icon */}
        <div className="relative mt-1 -rotate-45 rounded-full bg-black-sw p-[5px]">
          <IoIosAirplane size={20} className="text-white" />
        </div>

        {/* Depart and arrive codes */}
        <div className="flex flex-col gap-[16px] leading-none">
          {/* upper codes */}
          <div className="flex items-end gap-2">
            <h2 className="text-[42px] font-bold tracking-tighter text-black-sw">
              Depart:
            </h2>
            <div className="flex items-center gap-3 text-[42px] tracking-tight text-black-sw">
              {/* Depart Codes */}
              <span>
                {selectedDepartCodes.length > 1 ? (
                  <span className="">{`${filteredDepartCitiesByState[0].state} Airports`}</span>
                ) : (
                  <span className="">{selectedDepartCodes[0]}</span>
                )}
              </span>

              {/* flight icon */}
              <span>
                <IoIosAirplane size={22} className="text-[#a4baf2]" />
              </span>

              {/* Arrival Codes */}
              <span>
                {selectedArriveCodes.length > 1 ? (
                  <span className="">{`${filteredArriveCitiesByState[0].state} Airports`}</span>
                ) : (
                  <span className="">{selectedArriveCodes[0]}</span>
                )}
              </span>
            </div>
          </div>

          {/* lower detailed codes */}
          <div className="text-[16px] text-black-sw">
            {/* Depart code */}
            <span>
              {selectedDepartCodes.length > 1 ? (
                <span className="">{`${filteredDepartCitiesByState[0].state} Area Airports`}</span>
              ) : (
                <span className="">
                  {codeDetailsWithCityState.filter((detail) => {
                    return detail.includes(selectedDepartCodes[0]);
                  })}
                </span>
              )}
            </span>{' '}
            to {/* Arrival Codes */}
            <span>
              {selectedArriveCodes.length > 1 ? (
                <span className="">{`${filteredArriveCitiesByState[0].state} Area Airports`}</span>
              ) : (
                <span className="">
                  {codeDetailsWithCityState.filter((detail) => {
                    return detail.includes(selectedArriveCodes[0]);
                  })}
                </span>
              )}
            </span>
          </div>
        </div>
      </div>

      {/*   Govt tax and dollars or points */}
      <div className="mt-1 flex items-start gap-4">
        {selectedBagFee === bagFeeOptions[0] && (
          <>
            {/* Govt tax notification */}
            <div className="flex flex-col items-end text-[11px]">
              <button className="text-blue-sw underline transition-all hover:text-black-sw hover:decoration-black-sw">
                Government taxes & fees included
              </button>
              <p className="text-black-sw">
                All fares are rounded upto the nearest dollar.
              </p>
            </div>
          </>
        )}

        {/* Dollars and points */}
        <div className="flex border text-[13px]">
          {/* dollars */}
          <button
            onClick={() => {
              setSelectedBagFee(bagFeeOptions[0]);
              updateURL(bagFeeOptions[0]);
            }}
            className={`${selectedBagFee === 'Dollars' ? 'border-t-[3px] border-t-black-sw text-black-sw' : 'text-blue-sw'} min-w-[80px] border-r px-[30px] py-[3px] font-bold`}
          >
            $
          </button>
          <button
            onClick={() => {
              setSelectedBagFee(bagFeeOptions[1]);
              updateURL(bagFeeOptions[1]);
            }}
            className={`${selectedBagFee === 'Points' ? 'border-t-[3px] border-t-black-sw text-black-sw' : 'text-blue-sw'} min-w-[80px] px-[20px] py-[3px] font-bold`}
          >
            Points
          </button>
        </div>
      </div>
    </div>
  );
}
