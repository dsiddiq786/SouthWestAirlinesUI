import { useForm } from 'react-hook-form';
import PassengerFirstName from './Inputs/PassengerFirstName';

export default function PassengerInfoItem({
  passenger,
  register,
  errors,
  clearErrors,
}) {
  return (
    <>
      <div className="flex flex-col">
        {/* Passenger number */}
        <span className="mb-[20px] text-[16px] font-bold">
          Passenger {passenger.passengerNo}
        </span>

        {/* Inputs */}
        <section className="flex flex-col">
          {/* First, middle, last name, suffix */}
          <div className="flex gap-4">
            {/* First name */}
            <PassengerFirstName
              register={register}
              errors={errors}
              clearErrors={clearErrors}
              passenger={passenger}
            />
          </div>
        </section>
      </div>
    </>
  );
}
