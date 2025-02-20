import { MdError } from 'react-icons/md';
import { TiCreditCard } from 'react-icons/ti';

export default function PaymentCVV({ register, errors, clearErrors }) {
  const formatCVV = (event) => {
    const value = event.target.value;
    event.target.value = value.replace(/[^0-9]/g, '');
  };

  return (
    <div className="flex flex-col">
      <span className="pb-[8px] text-[11px] font-bold text-gray-sw">
        CVV <span className="text-red-600">*</span>
      </span>
      <div className="relative">
        <input
          type="text"
          autoComplete="cc-csc"
          {...register(`payment.cardDetails.cvv`, {
            required: 'Enter CVV',
          })}
          maxLength={3} // 3 digits + 1 space
          onChange={(event) => {
            clearErrors(`payment.cardDetails.cvv`);
            formatCVV(event);
          }} // Clear error on input change & format input
          className={`h-[32px] w-[85px] rounded-sm py-[3px] pl-[7px] text-[13px] ${
            errors?.payment?.cardDetails?.cvv
              ? 'border border-red-600'
              : 'inner-box-shadow-sw border'
          } text-black-sw shadow-inner`}
        />
        <span className="absolute right-[0.9rem] top-[0.35em]">
          <span>
            {errors?.payment?.cardDetails?.cvv ? (
              <MdError size={20} className="text-red-600" />
            ) : (
              <TiCreditCard size={20} className="text-blue-sw" />
            )}
          </span>
        </span>
      </div>
      <span className="h-4 text-sm">
        {errors?.payment?.cardDetails?.cvv && (
          <span className="text-[11px] text-red-600">
            {errors.payment.cardDetails.cvv.message?.toString()}
          </span>
        )}
      </span>
    </div>
  );
}
