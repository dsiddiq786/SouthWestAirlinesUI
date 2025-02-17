import { useForm } from 'react-hook-form';

export default function PassengerInfoItem({
  passenger,
  passengerIndex,
  register,
  errors,
  clearErrors,
}) {
  return (
    <>
      <div className="flex flex-col gap-4">
        {/* Passenger number */}
        <span className="mb-[20px] text-[16px] font-bold">
          Passenger {passenger.passengerNo}
        </span>

        {/* Inputs */}
        <section className="flex flex-col">
          {/* First, middle, last name, suffix */}
          <div className="flex gap-4">
            {/* First name */}
            <div className="flex flex-col">
              <span className="pb-[8px] text-[11px] font-bold text-gray-sw">
                FIRST NAME <span className="text-red-600">*</span>
              </span>
              <div>
                <input
                  {...register(`passengers.${passengerIndex}.firstName`, {
                    required: 'Enter first name',
                  })}
                  onChange={() =>
                    clearErrors(`passengers.${passengerIndex}.firstName`)
                  } // Clear error on input change
                  className={`h-[32px] w-[184px] rounded-sm py-[3px] pl-[7px] text-[13px] ${
                    errors?.passengers?.[passengerIndex]?.firstName
                      ? 'border border-red-600'
                      : 'inner-box-shadow-sw border'
                  } text-black-sw shadow-inner`}
                />
              </div>
              <span className="h-4 text-sm">
                {errors?.passengers?.[passengerIndex]?.firstName && (
                  <span className="text-[11px] text-red-600">
                    {errors.passengers[
                      passengerIndex
                    ].firstName.message?.toString()}
                  </span>
                )}
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
