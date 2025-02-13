import { useFlights } from '@/context/FlightContext';
import { IoIosAirplane } from 'react-icons/io';
import { today, getLocalTimeZone } from '@internationalized/date';
import { formatDateToDayDate } from '@/utils/formatDate';
import { MdOutlineAltRoute } from 'react-icons/md';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SelectedDepartFlight() {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const router = useRouter();

  //   const handleChangeFlight = () => {
  //     setIsDepartContinueBtnClicked(false);
  //     setSelectedDepartFlight(null);
  //     setSelectedReturnFlight(null);

  //     const params = new URLSearchParams(searchParams);
  //     params.set('departFlight', null);
  //     params.set('returnFlight', null);
  //     params.set('isReturnFlight', false);

  //     replace(`?${params.toString()}`, { scroll: false });

  //     window.scrollTo({ top: 0, behavior: 'smooth' });
  //   };

  const {
    departDate,
    codeDetailsWithCityState,
    selectedDepartFlight,
    setSelectedDepartFlight,
    setSelectedReturnFlight,
    setIsDepartContinueBtnClicked,
  } = useFlights();

  //   console.log(selectedDepartFlight);
  return (
    <div className="flex flex-col whitespace-nowrap leading-none text-black-sw">
      {/* icon and depart */}
      <div className="flex items-center gap-4">
        {/* depart icon */}
        <div className="relative mt-1 -rotate-45 rounded-full bg-black-sw p-[5px]">
          <IoIosAirplane size={20} className="text-white" />
        </div>

        <h2 className="text-[42px] font-bold tracking-tighter text-black-sw">
          Depart:
        </h2>
      </div>

      {/* Depart flight details */}
      <div className="my-[30px] flex items-center gap-24 rounded-sm bg-[#f5f5f5] py-7 pl-6 pr-5">
        {/* trip to */}
        <div className="flex flex-col">
          <span className="text-[12px]">Your trip to:</span>
          <span className="text-[18px] font-bold">
            <span className="">
              {codeDetailsWithCityState.filter((detail) => {
                return detail.includes(
                  selectedDepartFlight?.flight?.arrivalPort
                );
              })}
            </span>
          </span>
        </div>

        <div className="flex flex-1 items-center justify-between">
          {/* Date */}
          <div className="text-[16px] font-bold">
            {formatDateToDayDate(
              departDate ? departDate : today(getLocalTimeZone()).toString()
            )}
          </div>

          {/* Flight */}
          <div className="flex flex-col">
            {/* flight tag */}
            <span className="block cursor-pointer text-[11px] text-blue-sw transition-all hover:text-black-sw hover:underline">
              #{selectedDepartFlight?.flight?.metadata?.flightNums[0]}
            </span>

            {/* route */}
            <div className="flex items-center gap-4 text-[42px] tracking-tight text-black-sw">
              {/* Depart Codes */}
              <div className="flex flex-col">
                <span className="text-[26px] font-bold">
                  {selectedDepartFlight?.flight?.departurePort}
                </span>
                {/* start time */}
                <span className="pt-[5px] text-[13px]">
                  {selectedDepartFlight?.flight?.metadata?.deptTime}
                </span>
              </div>

              {/* flight icon */}
              <span>
                <IoIosAirplane size={28} className="text-[#a4baf2]" />
              </span>

              {/* Arrival Codes */}
              <div className="flex flex-col">
                <span className="text-[26px] font-bold">
                  {selectedDepartFlight?.flight?.arrivalPort}
                </span>
                {/* end time */}
                <span className="pt-[5px] text-[13px]">
                  {selectedDepartFlight?.flight?.metadata?.arrTime}
                </span>
              </div>
            </div>
          </div>

          {/* Duration and stops */}
          <div className="flex items-center gap-4">
            <span className="text-[13px]">
              {selectedDepartFlight?.flight?.metadata?.duration
                .replace('h', ' hr')
                .replace('m', ' min')}
            </span>
            <span className="h-[13px] w-[2px] bg-[#e6e7e8]"></span>
            <span className="flex items-center text-[13px]">
              <span className="cursor-pointer text-blue-sw transition-all hover:text-black-sw hover:underline">
                {selectedDepartFlight?.flight?.metadata?.numStops} stops
              </span>
              {/* icon */}
              <span>
                <MdOutlineAltRoute size={20} className="text-[#b2c5f3]" />
              </span>
            </span>
          </div>

          {/* Price variant */}
          <div className="underline decoration-blue-sw decoration-[3px] underline-offset-8">
            <span className="cursor-pointer text-[13.4px] text-blue-sw underline-offset-[1px] transition-all hover:text-black-sw hover:underline">
              {selectedDepartFlight?.price}
            </span>
          </div>

          {/* change flight */}
          <button>
            <span className="text-[13px] font-bold text-blue-sw underline hover:text-black-sw">
              Change flight
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
