import { useFlights } from '@/context/FlightContext';
import { IoIosAirplane } from 'react-icons/io';
import { today, getLocalTimeZone } from '@internationalized/date';
import { formatDateToDayDate } from '@/utils/formatDate';
import { MdOutlineAltRoute } from 'react-icons/md';
import { FaArrowRight } from 'react-icons/fa';

export default function ConfirmedTicketItem({ passenger }) {
  const {
    departDate,
    returnDate,
    totalPassengers,
    flightBaseFare,
    TotalFlightPrice,
    Tax,
    selectedDepartFlight,
    selectedReturnFlight,
    handlePriceModify,
  } = useFlights();
  return (
    <div className="flex border">
      {/* Passenger Info */}
      <div className="flex w-[25rem] flex-col gap-4 bg-blue-sw p-3 text-white">
        {/* logo */}
        <div>
          <img
            src="/images/logo/southWestLogoWhite.svg"
            className="w-24"
            alt=""
          />
        </div>

        {/* Passenger Details */}
        <div className="flex flex-col gap-3 tracking-tight">
          {/* Name */}
          <div className="flex flex-col gap-1 leading-none">
            <span className="text-[13px] font-bold">Name:</span>
            <span className="text-[11px]">
              {passenger.firstName} {passenger.middleName} {passenger.lastName}
            </span>
          </div>

          {/* Gender */}
          <div className="flex flex-col gap-1 leading-none">
            <span className="text-[13px] font-bold">Gender:</span>
            <span className="text-[11px]">{passenger.gender}</span>
          </div>

          {/* Base fare */}
          <div className="flex w-full items-center justify-between">
            <span className="text-[13px] font-bold tracking-tight">
              Base Fare:{' '}
            </span>
            <span className="text-[13px] font-bold">
              ${flightBaseFare / totalPassengers}
            </span>
          </div>
        </div>
      </div>

      {/* flight details */}
      <div className="relative -ml-9 flex w-[70%] scale-85 flex-col justify-center gap-5 whitespace-nowrap py-2 pr-6">
        {/* Depart flight */}
        <div className="flex items-center gap-8 pl-5">
          <div className="flex items-center gap-3">
            {/* depart icon */}
            <div className="relative mt-1 -rotate-45 rounded-full bg-black-sw p-[5px]">
              <IoIosAirplane size={20} className="text-white" />
            </div>
            {/* Date */}
            <div className="text-[16px] font-bold">
              {formatDateToDayDate(
                departDate ? departDate : today(getLocalTimeZone()).toString()
              )}
            </div>
          </div>

          <div className="flex items-center gap-8">
            {/* Flight */}
            <div className="flex flex-col">
              {/* flight tag */}
              <span className="block cursor-pointer text-[11px] text-blue-sw transition-all hover:text-black-sw hover:underline">
                #{selectedDepartFlight?.flight?.metadata?.flightNums[0]}
              </span>
              {/* route */}
              <div className="flex items-center gap-6 text-[42px] leading-none tracking-tight text-black-sw">
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
                {/* right icon */}
                <span>
                  <FaArrowRight size={13} className="text-[#a0a0a0]" />
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
              <span className="pr-4 text-[13px]">
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
            <div
              className={`underline decoration-[3px] underline-offset-8 ${
                selectedDepartFlight?.price === 'Business Select'
                  ? 'decoration-[#304cb2]'
                  : selectedDepartFlight?.price === 'Anytime'
                    ? 'decoration-[#a4baf2]'
                    : selectedDepartFlight?.price === 'Wanna Get Away plus'
                      ? 'decoration-[#d5152e]'
                      : selectedDepartFlight?.price === 'Wanna Get Away'
                        ? 'decoration-[#ffbf27]'
                        : 'decoration-transparent' // Default
              }`}
            >
              <span className="cursor-pointer text-[13.4px] text-blue-sw underline-offset-[1px] transition-all hover:text-black-sw hover:underline">
                {selectedDepartFlight?.price}
              </span>
            </div>
          </div>
        </div>

        {/* Return flight */}
        {selectedReturnFlight && (
          <div className="flex items-center gap-8 pl-5">
            <div className="flex items-center gap-3">
              {/* Return icon */}
              <div className="relative mt-1 rotate-[230deg] rounded-full bg-[#008020] p-[5px]">
                <IoIosAirplane size={20} className="text-white" />
              </div>
              {/* Date */}
              <div className="text-[16px] font-bold">
                {formatDateToDayDate(
                  returnDate ? returnDate : today(getLocalTimeZone()).toString()
                )}
              </div>
            </div>

            <div className="flex items-center gap-8">
              {/* Flight */}
              <div className="flex flex-col">
                {/* flight tag */}
                <span className="block cursor-pointer text-[11px] text-blue-sw transition-all hover:text-black-sw hover:underline">
                  #{selectedReturnFlight?.flight?.metadata?.flightNums[0]}
                </span>
                {/* route */}
                <div className="flex items-center gap-6 text-[42px] leading-none tracking-tight text-black-sw">
                  {/* Depart Codes */}
                  <div className="flex flex-col">
                    <span className="text-[26px] font-bold">
                      {selectedReturnFlight?.flight?.departurePort}
                    </span>
                    {/* start time */}
                    <span className="pt-[5px] text-[13px]">
                      {selectedReturnFlight?.flight?.metadata?.deptTime}
                    </span>
                  </div>
                  {/* right icon */}
                  <span>
                    <FaArrowRight size={13} className="text-[#a0a0a0]" />
                  </span>
                  {/* Arrival Codes */}
                  <div className="flex flex-col">
                    <span className="text-[26px] font-bold">
                      {selectedReturnFlight?.flight?.arrivalPort}
                    </span>
                    {/* end time */}
                    <span className="pt-[5px] text-[13px]">
                      {selectedReturnFlight?.flight?.metadata?.arrTime}
                    </span>
                  </div>
                </div>
              </div>
              {/* Duration and stops */}
              <div className="flex items-center gap-4">
                <span className="pr-4 text-[13px]">
                  {selectedReturnFlight?.flight?.metadata?.duration
                    .replace('h', ' hr')
                    .replace('m', ' min')}
                </span>
                <span className="h-[13px] w-[2px] bg-[#e6e7e8]"></span>
                <span className="flex items-center text-[13px]">
                  <span className="cursor-pointer text-blue-sw transition-all hover:text-black-sw hover:underline">
                    {selectedReturnFlight?.flight?.metadata?.numStops} stops
                  </span>
                  {/* icon */}
                  <span>
                    <MdOutlineAltRoute size={20} className="text-[#b2c5f3]" />
                  </span>
                </span>
              </div>
              {/* Price variant */}
              <div
                className={`underline decoration-[3px] underline-offset-8 ${
                  selectedReturnFlight?.price === 'Business Select'
                    ? 'decoration-[#304cb2]'
                    : selectedReturnFlight?.price === 'Anytime'
                      ? 'decoration-[#a4baf2]'
                      : selectedReturnFlight?.price === 'Wanna Get Away plus'
                        ? 'decoration-[#d5152e]'
                        : selectedReturnFlight?.price === 'Wanna Get Away'
                          ? 'decoration-[#ffbf27]'
                          : 'decoration-transparent' // Default
                }`}
              >
                <span className="cursor-pointer text-[13.4px] text-blue-sw underline-offset-[1px] transition-all hover:text-black-sw hover:underline">
                  {selectedReturnFlight?.price}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Qr code  */}
      <div className="w-[20rem] py-6">
        <div className="grid h-full w-full place-items-center border-l">
          <img
            src="/images/features/travelQR-code.svg"
            className="w-20"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
