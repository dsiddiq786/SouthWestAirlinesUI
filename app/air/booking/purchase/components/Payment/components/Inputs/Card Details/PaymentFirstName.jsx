import { MdError } from 'react-icons/md';

export default function PaymentFirstName({ register, errors, clearErrors }) {
  return (
    <div className="flex flex-col">
      <span className="pb-[8px] text-[11px] font-bold text-gray-sw">
        FIRST NAME ON CARD <span className="text-red-600">*</span>
      </span>
      <div className="relative">
        <input
          type="text"
          autoComplete="given-name"
          {...register(`payment.cardDetails.firstName`, {
            required: 'Enter first name',
          })}
          onChange={() => clearErrors(`payment.cardDetails.firstName`)} // Clear error on input change
          className={`h-[32px] w-[214px] rounded-sm py-[3px] pl-[7px] text-[13px] ${
            errors?.payment?.cardDetails?.firstName
              ? 'border border-red-600'
              : 'inner-box-shadow-sw border'
          } text-black-sw shadow-inner`}
        />
        {errors?.payment?.cardDetails?.firstName && (
          <span className="absolute right-[0.9rem] top-[0.35em]">
            <MdError size={20} className="text-red-600" />
          </span>
        )}
      </div>
      <span className="h-4 text-sm">
        {errors?.payment?.cardDetails?.firstName && (
          <span className="text-[11px] text-red-600">
            {errors.payment.cardDetails.firstName.message?.toString()}
          </span>
        )}
      </span>
    </div>
  );
}
