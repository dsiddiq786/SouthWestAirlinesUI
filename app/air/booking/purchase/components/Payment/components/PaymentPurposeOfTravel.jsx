import { useState } from 'react';
import PaymentConfirmEmailAddress from './Inputs/Send your receipt/PaymentConfirmEmailAddress';
import PaymentEmailAddress from './Inputs/Send your receipt/PaymentEmailAddress';
import PaymentTravelPurpose from './Inputs/Purpose of Travel/PaymentTravelPurpose';
import PaymentFirstTimeFlying from './Inputs/Purpose of Travel/PaymentFirstTimeFlying';

export default function PaymentPurposeOfTravel({
  register,
  errors,
  clearErrors,
  setValue,
  getValues,
}) {
  return (
    <>
      <div className="flex flex-col pb-[15px]">
        <div>
          <h3 className="mb-[4px] text-[22px] font-bold leading-none tracking-tight">
            Purpose of Travel
          </h3>
        </div>

        {/* Inputs */}
        <div>
          <div className="py-4">
            <PaymentTravelPurpose
              register={register}
              // watch={watch}
            />
          </div>

          {/* first time flying */}
          <PaymentFirstTimeFlying register={register} setValue={setValue} />
        </div>
      </div>
    </>
  );
}
