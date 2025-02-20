import { MdError } from 'react-icons/md';

export default function PaymentZipCode({ register, errors, clearErrors }) {
  const formatZipCode = (event) => {
    let value = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters

    // Limit input length to 9 digits (ZIP+4 format)
    if (value.length > 9) {
      value = value.slice(0, 9);
    }

    // Insert dash after 5 digits if it's a ZIP+4 format
    let formattedValue =
      value.length > 5 ? `${value.slice(0, 5)}-${value.slice(5)}` : value;

    event.target.value = formattedValue; // Update input field
  };

  return (
    <div className="flex flex-col">
      <span className="pb-[8px] text-[11px] font-bold text-gray-sw">
        ZIP CODE <span className="text-red-600">*</span>
      </span>
      <div className="relative">
        <input
          type="text"
          autoComplete="postal-code"
          {...register(`payment.billingInfo.zipCode`, {
            required: 'Enter credit card #',
          })}
          onChange={(event) => {
            clearErrors(`payment.billingInfo.zipCode`);
            formatZipCode(event);
          }} // Clear error on input change & format input
          className={`h-[32px] w-[94px] rounded-sm py-[3px] pl-[7px] text-[13px] ${
            errors?.payment?.billingInfo?.zipCode
              ? 'border border-red-600'
              : 'inner-box-shadow-sw border'
          } text-black-sw shadow-inner`}
        />
        {errors?.payment?.billingInfo?.zipCode && (
          <span className="absolute right-[0.9rem] top-[0.35em]">
            <MdError size={20} className="text-red-600" />
          </span>
        )}
      </div>
      <span className="h-4 text-sm">
        {errors?.payment?.billingInfo?.zipCode && (
          <span className="text-[11px] text-red-600">
            {errors.payment.billingInfo.zipCode.message?.toString()}
          </span>
        )}
      </span>
    </div>
  );
}
