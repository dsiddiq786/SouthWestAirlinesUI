import Link from 'next/link';
import { BsGlobe } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { useFlights } from '@/context/FlightContext';
import { formatRangeDate } from '@/utils/formatDate';
import { MdAirplanemodeActive } from 'react-icons/md';

export default function Header({ isModifyVisiblle }) {
  const {
    selectedDepartCodes,
    selectedArriveCodes,
    filteredDepartCitiesByState,
    filteredArriveCitiesByState,
    departDate,
    returnDate,
    selectedDepartFlight,
  } = useFlights();

  return (
    <header className="flex flex-col">
      {/* login */}
      <div className="bg-[#2a4199] py-[7px]">
        <div className="container-sw flex justify-end">
          <div className="flex items-center gap-4">
            {/* login button */}
            <button className="group/login flex items-center gap-1 pt-[3px]">
              <FaUser className="text-white" />
              <span className="text-[12px] font-bold text-white group-hover/login:underline">
                Log in
              </span>
            </button>

            {/* Espanol */}
            <button className="group/espanol flex items-center gap-1 text-xs text-[#b9bcc7] transition-all hover:text-white">
              <span className="cursor-pointer group-hover/espanol:underline">
                Español
              </span>
              <span>
                <BsGlobe className="text-sm font-bold" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* logo, flight details, and modify button */}
      <div className="bg-[#304cb2]">
        <div className="container-sw flex items-center justify-between pb-[11px] pt-[12px]">
          {/* logo */}
          <div>
            <Link href={'/'}>
              <img
                src="/images/logo/southWestLogoWhite.svg"
                alt="southwest logo"
              />
            </Link>
          </div>

          {/* flights and modify */}
          <div className="flex items-end gap-3">
            {/* flight details */}
            <div className="flex items-end gap-[6px]">
              {/* flight icon */}
              <span className="relative mb-2 rotate-45">
                <MdAirplanemodeActive size={22} className="text-[#a4b9f1]" />
              </span>
              {/* details */}
              <div className="-space-y-2">
                <span className="text-[11px] font-bold uppercase text-white">
                  {formatRangeDate(departDate, returnDate)}
                </span>
                <div className="flex items-center gap-2 text-white">
                  {/* Departure */}
                  {selectedDepartFlight ? (
                    <span className="text-[22px] font-bold">
                      {selectedDepartFlight?.flight?.departurePort}
                    </span>
                  ) : (
                    <>
                      {selectedDepartCodes.length > 1 ? (
                        <span className="text-[22px] font-bold">{`${filteredDepartCitiesByState[0].state} Airports`}</span>
                      ) : (
                        <span className="text-[22px] font-bold">
                          {selectedDepartCodes[0]}
                        </span>
                      )}
                    </>
                  )}

                  <FaArrowRight size={12} className="font-bold" />
                  {/* Arrival */}
                  {selectedDepartFlight ? (
                    <span className="text-[22px] font-bold">
                      {selectedDepartFlight?.flight?.arrivalPort}
                    </span>
                  ) : (
                    <>
                      {selectedArriveCodes.length > 1 ? (
                        <span className="text-[22px] font-bold">{`${filteredArriveCitiesByState[0].state} Airports`}</span>
                      ) : (
                        <span className="text-[22px] font-bold">
                          {selectedArriveCodes[0]}
                        </span>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
            {isModifyVisiblle && (
              <button className="h-min rounded-sm border border-white px-[20px] py-[4px] text-[14px] font-bold text-white hover:underline">
                Modify
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
