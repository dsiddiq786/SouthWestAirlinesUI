import { MdError } from 'react-icons/md';

export default function PaymentPhoneNumber({ register, errors, clearErrors }) {
  const formatPhoneNumber = (event) => {
    let value = event.target.value.replace(/\D/g, ''); // Remove all non-numeric characters

    // Apply basic formatting:
    // - For shorter numbers: Groups of 3 or 4 digits
    // - For longer numbers: Groups of 2 or 3 digits
    if (value.length <= 4) {
      event.target.value = value; // No formatting for very short numbers
    } else if (value.length <= 7) {
      event.target.value = `${value.slice(0, 3)}-${value.slice(3)}`; // Format: 123-4567
    } else if (value.length <= 10) {
      event.target.value = `${value.slice(0, 3)}-${value.slice(3, 6)}-${value.slice(6)}`; // Format: 123-456-7890
    } else if (value.length <= 12) {
      event.target.value = `${value.slice(0, 4)}-${value.slice(4, 7)}-${value.slice(7)}`; // Format: 1234-567-890
    } else if (value.length <= 15) {
      event.target.value = `${value.slice(0, 3)} ${value.slice(3, 6)} ${value.slice(6, 9)} ${value.slice(9)}`; // Format: 123 456 789 012
    } else {
      event.target.value = `${value.slice(0, 3)} ${value.slice(3, 6)} ${value.slice(6, 10)} ${value.slice(10)}`; // Format for longer numbers
    }
  };

  return (
    <div className="flex flex-col">
      <span className="pb-[8px] text-[11px] font-bold text-gray-sw">
        PHONE NUMBER <span className="text-red-600">*</span>{' '}
        <span className="font-light text-gray-sw">Use numbers only</span>
      </span>
      <div className="relative">
        <input
          type="text"
          autoComplete="tel-national"
          {...register(`payment.billingInfo.phoneNumber`, {
            required: 'Enter phone number',
          })}
          onChange={(event) => {
            clearErrors(`payment.billingInfo.phoneNumber`);
            formatPhoneNumber(event);
          }} // Clear error on input change
          className={`h-[32px] w-[270px] rounded-sm py-[3px] pl-[7px] text-[13px] ${
            errors?.payment?.billingInfo?.phoneNumber
              ? 'border border-red-600'
              : 'inner-box-shadow-sw border'
          } text-black-sw shadow-inner`}
        />
        {errors?.payment?.billingInfo?.phoneNumber && (
          <span className="absolute right-[0.9rem] top-[0.35em]">
            <MdError size={20} className="text-red-600" />
          </span>
        )}
      </div>
      <span className="h-4 text-sm">
        {errors?.payment?.billingInfo?.phoneNumber && (
          <span className="text-[11px] text-red-600">
            {errors.payment.billingInfo.phoneNumber.message?.toString()}
          </span>
        )}
      </span>
    </div>
  );
}
