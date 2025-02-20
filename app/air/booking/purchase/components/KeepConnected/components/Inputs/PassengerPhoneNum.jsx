import { MdError } from 'react-icons/md';

export default function PassengerPhoneNum({ register, errors, clearErrors }) {
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
          {...register(`contactDetails.phoneNumber`, {
            required: 'Enter phone number',
          })}
          onChange={() => clearErrors(`contactDetails.phoneNumber`)} // Clear error on input change
          className={`h-[32px] w-[270px] rounded-sm py-[3px] pl-[7px] text-[13px] ${
            errors?.contactDetails?.phoneNumber
              ? 'border border-red-600'
              : 'inner-box-shadow-sw border'
          } text-black-sw shadow-inner`}
        />
        {errors?.contactDetails?.phoneNumber && (
          <span className="absolute right-[0.9rem] top-[0.35em]">
            <MdError size={20} className="text-red-600" />
          </span>
        )}
      </div>
      <span className="h-4 text-sm">
        {errors?.contactDetails?.phoneNumber && (
          <span className="text-[11px] text-red-600">
            {errors.contactDetails.phoneNumber.message?.toString()}
          </span>
        )}
      </span>
    </div>
  );
}
