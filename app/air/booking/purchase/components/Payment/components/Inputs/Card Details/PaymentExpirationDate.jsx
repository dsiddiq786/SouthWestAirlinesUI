import { MdError } from 'react-icons/md';

export default function PaymentExpirationDate({
  register,
  errors,
  clearErrors,
}) {
  const formatDateInput = (event) => {
    let value = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters

    // Ensure the first digit of the month is valid (01-12)
    if (value.length > 0) {
      if (parseInt(value[0]) > 1) {
        value = '0' + value; // If first digit is >1, prepend '0'
      }
    }

    let formattedValue = '';

    // Format MM/YY
    if (value.length >= 2) {
      let month = parseInt(value.slice(0, 2));
      if (month > 12) {
        month = 12; // Limit month to 12
      }
      formattedValue = month.toString().padStart(2, '0'); // Ensure 2-digit month

      if (value.length > 2) {
        formattedValue += '/' + value.slice(2, 4); // Append year
      }
    } else {
      formattedValue = value; // If not enough characters, keep original value
    }

    event.target.value = formattedValue;
  };

  return (
    <div className="flex flex-col">
      <span className="pb-[8px] text-[11px] font-bold text-gray-sw">
        EXPIRATION DATE <span className="text-red-600">*</span>
      </span>
      <div className="relative">
        <input
          placeholder="MM/YY"
          type="text"
          autoComplete="cc-exp"
          {...register(`payment.expirationDate`, {
            required: 'Enter expiration date',
          })}
          onChange={(event) => {
            clearErrors(`payment.expirationDate`);
            formatDateInput(event);
          }} // Clear error on input change & format input
          className={`h-[32px] w-[131px] rounded-sm py-[3px] pl-[7px] text-[13px] placeholder:text-gray-sw ${
            errors?.payment?.expirationDate
              ? 'border border-red-600'
              : 'inner-box-shadow-sw border'
          } text-black-sw shadow-inner`}
        />

        {errors?.payment?.expirationDate && (
          <span className="absolute right-[0.9rem] top-[0.35em]">
            <MdError size={20} className="text-red-600" />
          </span>
        )}
      </div>
      <span className="h-4 text-sm">
        {errors?.payment?.expirationDate && (
          <span className="text-[11px] text-red-600">
            {errors.payment.expirationDate.message?.toString()}
          </span>
        )}
      </span>
    </div>
  );
}
