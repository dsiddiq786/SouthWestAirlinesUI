import { CiAt } from 'react-icons/ci';
import { useFlights } from '@/context/FlightContext';
import PassengerContactDetailsItem from './components/PassengerContactDetailsItem';

export default function KeepConnected({
  register,
  errors,
  clearErrors,
  setValue,
  getValues,
}) {
  return (
    <div className="flex flex-col bg-[#f5f5f5] px-[30px] pb-[30px] pt-[24px]">
      {/* icon and title */}
      <div className="flex items-center gap-1">
        <span className="mb-1 -rotate-45">
          <CiAt size={30} className="text-[#008020]" />
        </span>
        <h2 className="text-[30px] font-bold">
          Keep connected on your day of travel
        </h2>
      </div>

      {/* notification */}
      <span className="mb-[26px] mt-[4px] text-[13px] text-gray-sw">
        Enter your contact information to receive important updates about your
        trip.
      </span>

      {/* Passenger Contact details */}
      <div className="bg-white pb-[20px] pl-[40px] pr-[15px] pt-[16px]">
        {/* Required span */}
        <span className="mb-[22px] mt-[20px] block text-[13px] text-gray-sw">
          <span className="text-red-600">* </span>
          Required
        </span>

        <div>
          <PassengerContactDetailsItem
            register={register}
            errors={errors}
            clearErrors={clearErrors}
            setValue={setValue}
            getValues={getValues}
          />
        </div>
      </div>
    </div>
  );
}
