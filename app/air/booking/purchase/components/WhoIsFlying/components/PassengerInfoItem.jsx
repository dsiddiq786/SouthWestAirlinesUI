import PassengerFirstName from './Inputs/PassengerFirstName';
import PassengerMiddleName from './Inputs/PassengerMiddleName';
import PassengerLastName from './Inputs/PassengerLastName';
import PassengerSuffix from './Inputs/PassengerSuffix';
import PassengerDateOfBirth from './Inputs/PassengerDateOfBirth';
import PassengerGender from './Inputs/PassengerGender';
import PassengerRapidRewardAcc from './Inputs/PassengerRapidRewardAcc';
import PassengerRedress from './Inputs/PassengerRedress';
import PassengerKnownTraveler from './Inputs/PassengerKnownTraveler';
import { FaChevronDown } from 'react-icons/fa';
import { useFlights } from '@/context/FlightContext';

export default function PassengerInfoItem({
  passenger,
  register,
  errors,
  clearErrors,
  setValue,
}) {
  const { passengerInfo } = useFlights();
  return (
    <>
      <div className="flex flex-col">
        {/* Passenger number */}
        <span className="mb-[20px] text-[16px] font-bold">
          Passenger {passenger.passengerNo}
        </span>

        {/* Inputs */}
        <section className="flex flex-col gap-2">
          {/* First, middle, last name, suffix */}
          <div className="flex gap-[20px]">
            {/* First name */}
            <PassengerFirstName
              register={register}
              errors={errors}
              clearErrors={clearErrors}
              passenger={passenger}
            />

            {/* Middle name */}
            <PassengerMiddleName register={register} passenger={passenger} />

            {/* Last name */}
            <PassengerLastName
              register={register}
              errors={errors}
              clearErrors={clearErrors}
              passenger={passenger}
            />

            {/* Suffix */}
            <PassengerSuffix
              passenger={passenger}
              register={register}
              setValue={setValue}
            />
          </div>

          {/* Date of birth, gender, rapid rewards */}
          <div className="flex gap-[20px]">
            {/* Date of birth */}
            <PassengerDateOfBirth
              register={register}
              errors={errors}
              clearErrors={clearErrors}
              passenger={passenger}
            />

            {/* Gender */}
            <PassengerGender
              register={register}
              errors={errors}
              clearErrors={clearErrors}
              passenger={passenger}
              setValue={setValue}
            />

            {/* Rapid rewards acc */}
            <PassengerRapidRewardAcc
              register={register}
              passenger={passenger}
            />
          </div>

          {/* Redress, known traveler */}
          <div className="flex gap-[20px]">
            {/* Redress */}
            <PassengerRedress register={register} passenger={passenger} />

            {/* Known Traveler */}
            <PassengerKnownTraveler register={register} passenger={passenger} />
          </div>

          {/* Special Assitance */}
          <div className="flex cursor-pointer items-center gap-3 text-[13px]">
            <FaChevronDown size={13} className="text-blue-sw" />
            <span className="text-blue-sw">Special Assistance</span>
          </div>
        </section>
      </div>
      <div className="h-[16px] w-full"></div>
      {passengerInfo.length !== passenger.passengerNo && (
        // Separator
        <div className="mb-[37px] mt-[20px] h-[2px] w-full bg-[#f5f5f5]"></div>
      )}
    </>
  );
}
