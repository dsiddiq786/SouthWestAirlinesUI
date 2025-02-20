import { MdError } from 'react-icons/md';

export default function PassengerEmail({ register, errors, clearErrors }) {
  return (
    <div className="flex flex-col">
      <span className="pb-[8px] text-[11px] font-bold text-gray-sw">
        EMAIL ADDRESS <span className="text-red-600">*</span>
      </span>
      <div className="relative">
        <input
          type="email"
          autoComplete="email"
          {...register(`contactDetails.email`, {
            required: 'Enter email address',
          })}
          onChange={() => clearErrors(`contactDetails.email`)} // Clear error on input change
          className={`h-[32px] w-[388px] rounded-sm py-[3px] pl-[7px] text-[13px] ${
            errors?.contactDetails?.email
              ? 'border border-red-600'
              : 'inner-box-shadow-sw border'
          } text-black-sw shadow-inner`}
        />
        {errors?.contactDetails?.email && (
          <span className="absolute right-[0.9rem] top-[0.35em]">
            <MdError size={20} className="text-red-600" />
          </span>
        )}
      </div>
      <span className="h-4 text-sm">
        {errors?.contactDetails?.email && (
          <span className="text-[11px] text-red-600">
            {errors.contactDetails.email.message?.toString()}
          </span>
        )}
      </span>
    </div>
  );
}
