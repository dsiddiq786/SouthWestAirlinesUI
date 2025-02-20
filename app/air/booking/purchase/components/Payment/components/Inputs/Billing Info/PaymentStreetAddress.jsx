import { MdError } from 'react-icons/md';

export default function PaymentStreetAddress({
  register,
  errors,
  clearErrors,
}) {
  return (
    <div className="flex flex-col">
      <span className="pb-[8px] text-[11px] font-bold text-gray-sw">
        STREET ADDRESS <span className="text-red-600">*</span>
      </span>
      <div className="relative">
        <input
          type="text"
          autoComplete="address-line1"
          {...register(`payment.streetAddress`, {
            required: 'Enter street address',
          })}
          onChange={() => clearErrors(`payment.streetAddress`)} // Clear error on input change
          className={`h-[32px] w-[329px] rounded-sm py-[3px] pl-[7px] text-[13px] ${
            errors?.payment?.streetAddress
              ? 'border border-red-600'
              : 'inner-box-shadow-sw border'
          } text-black-sw shadow-inner`}
        />
        {errors?.payment?.streetAddress && (
          <span className="absolute right-[0.9rem] top-[0.35em]">
            <MdError size={20} className="text-red-600" />
          </span>
        )}
      </div>
      <span className="h-4 text-sm">
        {errors?.payment?.streetAddress && (
          <span className="text-[11px] text-red-600">
            {errors.payment.streetAddress.message?.toString()}
          </span>
        )}
      </span>
    </div>
  );
}
