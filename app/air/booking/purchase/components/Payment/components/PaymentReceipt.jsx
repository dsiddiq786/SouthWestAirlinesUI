import { useState } from 'react';
import PaymentConfirmEmailAddress from './Inputs/Send your receipt/PaymentConfirmEmailAddress';
import PaymentEmailAddress from './Inputs/Send your receipt/PaymentEmailAddress';

export default function PaymentReceipt({
  register,
  errors,
  clearErrors,
  setValue,
  getValues,
}) {
  const [isKeepUpToDate, setIsKeepUpToDate] = useState(false);
  return (
    <>
      <div className="flex flex-col pb-[15px]">
        <div>
          <h3 className="pt-6 text-[22px] font-bold leading-none tracking-tight">
            Send your receipt
          </h3>
          <p className="mb-[19px] mt-[5px] text-[13px] text-gray-sw">
            Let us know where to send your confirmation receipt.
          </p>
        </div>

        {/* Inputs */}
        <div className="flex gap-5">
          {/* Email Address */}
          <PaymentEmailAddress
            register={register}
            errors={errors}
            clearErrors={clearErrors}
          />

          {/* Confirm Email Address */}
          <PaymentConfirmEmailAddress
            register={register}
            errors={errors}
            clearErrors={clearErrors}
            getValues={getValues}
          />
        </div>

        {/* Note */}
        <div className="mb-[29px]">
          <span className="text-[13px] italic leading-none text-gray-sw">
            <strong>Note: </strong> Receipts contain confidential billing
            information.
          </span>
        </div>

        {/* Keep upto date */}
        <div>
          <label
            onClick={() => {
              const newValue = !isKeepUpToDate;
              setIsKeepUpToDate(newValue);
              setValue('payment.sendReceipt.keepUpToDate', newValue); // Use newValue instead of isKeepUpToDate
            }}
            className="flex cursor-pointer items-start gap-2"
            htmlFor="keepUpToDate"
          >
            <input
              type="checkbox"
              {...register(`payment.sendReceipt.keepUpToDate`)}
              checked={isKeepUpToDate}
              onChange={() => {
                const newValue = !isKeepUpToDate;
                setIsKeepUpToDate(newValue);
                setValue('payment.sendReceipt.keepUpToDate', newValue); // Use newValue instead of isKeepUpToDate
              }}
            />
            <span className="block text-[13px] leading-4 text-gray-sw">
              Keep me up to date using this email address with the latest news,
              fares, travel deals and new route openings. I understand I can{' '}
              <br />
              unsubscribe at anytime.
            </span>
          </label>
        </div>

        {/* Separator */}
      </div>
      <div className="mb-[36px] h-[2px] w-full bg-[#f5f5f5]"></div>
    </>
  );
}
