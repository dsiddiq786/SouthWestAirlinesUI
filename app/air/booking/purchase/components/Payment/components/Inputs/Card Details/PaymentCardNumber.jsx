import { MdError } from 'react-icons/md';

export default function PaymentCardNumber({ register, errors, clearErrors }) {
  const formatCardNumber = (event) => {
    let value = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters

    // Limit input length to 16 digits (standard card format)
    if (value.length > 16) {
      value = value.slice(0, 16);
    }

    // Insert spaces every 4 digits (xxxx xxxx xxxx xxxx)
    let formattedValue = value.replace(/(\d{4})/g, '$1 ').trim();

    event.target.value = formattedValue; // Update input field
  };

  return (
    <div className="flex flex-col">
      <span className="pb-[8px] text-[11px] font-bold text-gray-sw">
        CREDIT/DEBIT CARD# <span className="text-red-600">*</span>
      </span>
      <div className="relative">
        <input
          type="text"
          autoComplete="cc-number"
          {...register(`payment.cardNumber`, {
            required: 'Enter credit card #',
          })}
          maxLength={19} // 16 digits + 3 spaces
          onChange={(event) => {
            clearErrors(`payment.cardNumber`);
            formatCardNumber(event);
          }} // Clear error on input change & format input
          className={`h-[32px] w-[213px] rounded-sm py-[3px] pl-[7px] text-[13px] ${
            errors?.payment?.cardNumber
              ? 'border border-red-600'
              : 'inner-box-shadow-sw border'
          } text-black-sw shadow-inner`}
        />
        {errors?.payment?.cardNumber && (
          <span className="absolute right-[0.9rem] top-[0.35em]">
            <MdError size={20} className="text-red-600" />
          </span>
        )}
      </div>
      <span className="h-4 text-sm">
        {errors?.payment?.cardNumber && (
          <span className="text-[11px] text-red-600">
            {errors.payment.cardNumber.message?.toString()}
          </span>
        )}
      </span>
    </div>
  );
}
