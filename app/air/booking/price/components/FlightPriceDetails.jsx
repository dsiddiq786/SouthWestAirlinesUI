import { useFlights } from '@/context/FlightContext';
import { IoIosAirplane } from 'react-icons/io';
import { today, getLocalTimeZone } from '@internationalized/date';
import { formatDateToDayDate } from '@/utils/formatDate';
import { MdOutlineAltRoute } from 'react-icons/md';
import { FaArrowRight } from 'react-icons/fa';

export default function FlightPriceDetails() {
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
    <div className="flex flex-col">
      {/* Flight icon and modify */}
      <div className="flex items-center gap-5 border border-black-sw bg-black-sw px-[28px] py-[14px] leading-none text-white">
        {/* icon */}
        <div className="flex items-center gap-2">
          <span className="-rotate-45">
            <IoIosAirplane size={30} />
          </span>
          <h2 className="text-[22px] font-bold">Flight</h2>
        </div>

        {/* modifify */}
        <button
          onClick={() => handlePriceModify()}
          className="text-[13px] font-bold hover:underline"
        >
          Modify
        </button>
      </div>

      {/* flight details and price and lists */}
      <div className="flex flex-col border-x border-b">
        {/* flight details and price */}
        <div className="flex items-stretch border-b">
          {/* flight details */}
          <div className="flex h-[233px] flex-1 flex-col justify-start gap-7">
            {/* Depart flight */}
            <div className="mt-6 flex items-center gap-12 pl-5">
              <div className="flex items-center gap-3">
                {/* depart icon */}
                <div className="relative mt-1 -rotate-45 rounded-full bg-black-sw p-[5px]">
                  <IoIosAirplane size={20} className="text-white" />
                </div>
                {/* Date */}
                <div className="text-[16px] font-bold">
                  {formatDateToDayDate(
                    departDate
                      ? departDate
                      : today(getLocalTimeZone()).toString()
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
                <div className="underline decoration-blue-sw decoration-[3px] underline-offset-8">
                  <span className="cursor-pointer text-[13.4px] text-blue-sw underline-offset-[1px] transition-all hover:text-black-sw hover:underline">
                    {selectedDepartFlight?.price}
                  </span>
                </div>
              </div>
            </div>

            {/* Return flight */}
            {selectedReturnFlight && (
              <div className="mt-6 flex items-center gap-12 pl-5">
                <div className="flex items-center gap-3">
                  {/* Return icon */}
                  <div className="relative mt-1 rotate-[230deg] rounded-full bg-[#008020] p-[5px]">
                    <IoIosAirplane size={20} className="text-white" />
                  </div>
                  {/* Date */}
                  <div className="text-[16px] font-bold">
                    {formatDateToDayDate(
                      returnDate
                        ? returnDate
                        : today(getLocalTimeZone()).toString()
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
                        <MdOutlineAltRoute
                          size={20}
                          className="text-[#b2c5f3]"
                        />
                      </span>
                    </span>
                  </div>
                  {/* Price variant */}
                  <div className="underline decoration-blue-sw decoration-[3px] underline-offset-8">
                    <span className="cursor-pointer text-[13.4px] text-blue-sw underline-offset-[1px] transition-all hover:text-black-sw hover:underline">
                      {selectedReturnFlight?.price}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Price Details */}
          <div className="flex w-[232px] flex-col bg-[#e8ecf9] p-[24px] text-[11px] font-bold">
            {/* Base fare */}
            <div className="flex justify-between">
              {/* Passengers */}
              <div className="flex flex-col leading-none">
                <span>Base fare</span>
                <span className="font-normal">
                  {totalPassengers} Passengers (s)
                </span>
              </div>

              {/* Price */}
              <span>${flightBaseFare}</span>
            </div>

            {/* Taxes and fees*/}
            <div className="my-3 flex justify-between border-y border-[#cccccc] py-4">
              {/* Passengers */}
              <span>Taxes and fees</span>

              {/* Price */}
              <span className="text-blue-sw">${Tax}</span>
            </div>

            {/* Flight total*/}
            <div className="flex justify-between">
              {/* Passengers */}
              <span>Flight total</span>

              {/* Price */}
              <span className="text-[16px]">${TotalFlightPrice}</span>
            </div>

            {/* flexpay */}
            <div className="mt-4 flex flex-col items-end text-[11px] leading-none">
              <span>or from $77/mo*</span>

              <span className="flex items-center font-normal">
                with{' '}
                <span className="px-1">
                  <img
                    className="w-[44px]"
                    src="/images/price/flexpay.svg"
                    alt=""
                  />
                </span>{' '}
                Learn more
              </span>
            </div>
          </div>
        </div>

        {/* Helpful information */}
        <div className="flex flex-col gap-4 px-[30px] py-[15px] text-[13px]">
          <span className="font-bold text-black-sw">Helpful Information:</span>
          <ul className="list-outside list-disc pl-[15px] text-gray-sw">
            <li>
              All fares and fare ranges are subject to change until purchased
              and are per person for each way of travel.
            </li>
            <li>
              Starting July 1, 2023 (12:00 a.m. CT), for Wanna Get Away® or
              Wanna Get Away Plus™ reward travel reservations (booked with
              points): If you do not cancel your reservation at least 10 minutes
              before the flight’s original scheduled departure time, any points
              used for booking will be forfeited, along with any taxes and fees
              associated with your reward travel reservation. For Anytime or
              Business Select® reward travel reservations: the points used for
              booking will be redeposited to the purchaser's Rapid Rewards®
              account, and any taxes and fees associated with the reward travel
              reservation will be converted into a Transferable Flight Credit™
              for future use.
            </li>
            <li>For more information regarding Cash + Points, visit</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
