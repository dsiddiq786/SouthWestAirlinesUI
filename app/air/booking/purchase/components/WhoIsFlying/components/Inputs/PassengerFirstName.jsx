export default function PassengerFirstName({
  register,
  passenger,
  errors,
  clearErrors,
}) {
  return (
    <div className="flex flex-col">
      <span className="pb-[8px] text-[11px] font-bold text-gray-sw">
        FIRST NAME <span className="text-red-600">*</span>
      </span>
      <div>
        <input
          //   type="text"
          //   autoComplete="first-name"
          {...register(`passengers.${passenger.passengerNo}.firstName`, {
            required: 'Enter first name',
          })}
          onChange={() =>
            clearErrors(`passengers.${passenger.passengerNo}.firstName`)
          } // Clear error on input change
          className={`h-[32px] w-[184px] rounded-sm py-[3px] pl-[7px] text-[13px] ${
            errors?.passengers?.[passenger.passengerNo]?.firstName
              ? 'border border-red-600'
              : 'inner-box-shadow-sw border'
          } text-black-sw shadow-inner`}
        />
      </div>
      <span className="h-4 text-sm">
        {errors?.passengers?.[passenger.passengerNo]?.firstName && (
          <span className="text-[11px] text-red-600">
            {errors.passengers[
              passenger.passengerNo
            ].firstName.message?.toString()}
          </span>
        )}
      </span>
    </div>
  );
}
