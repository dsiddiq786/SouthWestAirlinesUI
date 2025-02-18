import { MdError } from 'react-icons/md';

export default function PassengerDateOfBirth({
  register,
  passenger,
  errors,
  clearErrors,
}) {
  const formatDateInput = (event) => {
    let value = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    let formattedValue = '';

    // Ensure the first digit is valid for month
    if (value.length > 0) {
      if (parseInt(value[0]) > 1) {
        value = '0' + value; // Prepend '0' if the first digit is greater than 1
      }
    }

    // Format MM/DD/YYYY
    if (value.length > 2) {
      formattedValue = `${value.slice(0, 2)}/${value.slice(2, 4)}`;
    } else {
      formattedValue = value;
    }

    if (value.length > 4) {
      formattedValue += `/${value.slice(4, 8)}`;
    }

    event.target.value = formattedValue;
  };

  return (
    <div className="flex flex-col">
      <span className="pb-[8px] text-[11px] font-bold text-gray-sw">
        DATE OF BIRTH <span className="text-red-600">*</span>
      </span>
      <div className="relative">
        <input
          placeholder="MM/DD/YYYY"
          type="text"
          autoComplete="bday"
          {...register(`passengers.${passenger.passengerNo}.dateOfBirth`, {
            required: 'Enter date of birth',
          })}
          onChange={(event) => {
            clearErrors(`passengers.${passenger.passengerNo}.dateOfBirth`);
            formatDateInput(event);
          }} // Clear error on input change & format input
          className={`h-[32px] w-[208px] rounded-sm py-[3px] pl-[7px] text-[13px] placeholder:text-gray-sw ${
            errors?.passengers?.[passenger.passengerNo]?.dateOfBirth
              ? 'border border-red-600'
              : 'inner-box-shadow-sw border'
          } text-black-sw shadow-inner`}
        />

        {errors?.passengers?.[passenger.passengerNo]?.dateOfBirth && (
          <span className="absolute right-[0.9rem] top-[0.35em]">
            <MdError size={20} className="text-red-600" />
          </span>
        )}
      </div>
      <span className="h-4 text-sm">
        {errors?.passengers?.[passenger.passengerNo]?.dateOfBirth && (
          <span className="text-[11px] text-red-600">
            {errors.passengers[
              passenger.passengerNo
            ].dateOfBirth.message?.toString()}
          </span>
        )}
      </span>
    </div>
  );
}
