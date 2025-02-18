import React from 'react';
import PassengerInfoItem from './components/PassengerInfoItem';
import { IoIosAirplane } from 'react-icons/io';
import { useFlights } from '@/context/FlightContext';
import { useForm } from 'react-hook-form';

export default function PassengerInfo({
  register,
  errors,
  clearErrors,
  setValue,
}) {
  const { passengerInfo } = useFlights();
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
        <span className="mb-[22px] mt-[20px] block text-[13px] text-gray-sw">
          <span className="text-red-600">* </span>
          Required
        </span>

        {passengerInfo.map((passenger) => {
          return (
            <div key={passenger.passengerNo}>
              <PassengerInfoItem
                register={register}
                passenger={passenger}
                errors={errors}
                clearErrors={clearErrors}
                setValue={setValue}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
