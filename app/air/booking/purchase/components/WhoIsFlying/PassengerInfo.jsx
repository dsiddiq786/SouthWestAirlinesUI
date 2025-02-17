import React from 'react';
import PassengerInfoItem from './components/PassengerInfoItem';
import { IoIosAirplane } from 'react-icons/io';
import { useFlights } from '@/context/FlightContext';

export default function PassengerInfo() {
  const { passengerInfo, setPassengerInfo } = useFlights();
  return (
    <div className="flex flex-col bg-[#f5f5f5] px-[30px] pb-[30px] pt-[24px]">
      {/* icon and title */}
      <div className="flex items-center gap-1">
        <span className="mb-1 -rotate-45">
          <IoIosAirplane size={30} className="text-[#008020]" />
        </span>
        <h2 className="text-[30px] font-bold">Who's flying?</h2>
      </div>

      {/* notification */}
      <span className="mb-[26px] mt-[4px] text-[13px] text-gray-sw">
        Please make sure names match government-issued IDs.
      </span>

      {/* PassengerInfo */}
      <div className="bg-white pb-[20px] pl-[40px] pr-[15px] pt-[16px]">
        {/* Required span */}
        <span className="pb-[22px] text-[13px] text-gray-sw">
          <span className="text-red-600">* </span>
          Required
        </span>

        {passengerInfo.map((passenger, index) => {
          return (
            <div key={passenger.passengerNo}>
              <PassengerInfoItem passenger={passenger} passengerIndex={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
