import SaveOnCredits from './SaveOnCredits';
import { IoIosCard } from 'react-icons/io';
import { BsInfoCircleFill } from 'react-icons/bs';
import PaymentCardType from './Inputs/Card Details/PaymentCardType';
import PaymentCardNumber from './Inputs/Card Details/PaymentCardNumber';
import PaymentExpirationDate from './Inputs/Card Details/PaymentExpirationDate';
import PaymentCVV from './Inputs/Card Details/PaymentCVV';
import PaymentFirstName from './Inputs/Card Details/PaymentFirstName';
import PaymentLastName from './Inputs/Card Details/PaymentLastName';
import { FaLock } from 'react-icons/fa';
import PaymentCountry from './Inputs/Billing Info/PaymentCountry';
import PaymentStreetAddress from './Inputs/Billing Info/PaymentStreetAddress';
import PaymentStreetAddress2 from './Inputs/Billing Info/PaymentStreetAddress2';
import PaymentCityTown from './Inputs/Billing Info/PaymentCityTown';
import PaymentState from './Inputs/Billing Info/PaymentState';

export default function PaymentDetails({
  register,
  errors,
  clearErrors,
  setValue,
}) {
  return (
    <div className="flex flex-col">
      <div>
        <h3 className="py-[20px] text-[26px] font-bold">Pay</h3>
      </div>

      <div className="flex gap-5">
        {/* Radios and inputs */}
        <section className="flex flex-1 flex-col">
          {/* Radios */}
          <div>
            {/* flexpay */}
            <label
              className={`flex h-[54px] cursor-pointer items-center justify-between border px-4 py-2 transition-all hover:border-black-sw`}
            >
              <input
                disabled
                type="radio"
                // value={'creditCard'}
                // {...register('payment.paymentMode')}
                className="hidden"
              />

              {/* Left Side - Text */}
              <div className="flex items-center space-x-2">
                <div
                  className={`flex h-[13.5px] w-[13.5px] items-center justify-center rounded-full border-2 border-[#5b4db2] p-[1.5px]`}
                >
                  {/* <div className="h-full w-full rounded-full bg-[#5b4db2]"></div> */}
                </div>
                <span className="flex items-center gap-5 text-[18px] text-gray-800">
                  Pay Monthly from $145.77
                  <span>
                    <BsInfoCircleFill className="text-[13px] text-blue-sw" />
                  </span>
                </span>
              </div>

              {/* Right Side - Icons */}
              <div className="flex">
                <img
                  src="/images/price/flexpay.svg"
                  className="w-[86px]"
                  alt=""
                />
              </div>
            </label>

            {/* paypal */}
            <label
              className={`flex h-[54px] cursor-pointer items-center justify-between border px-4 py-2 transition-all hover:border-black-sw`}
            >
              <input
                disabled
                type="radio"
                // value={'paypal'}
                // {...register('payment.paymentMode')}
                className="hidden"
              />

              {/* Left Side - Text */}
              <div className="flex items-center space-x-2">
                <div
                  className={`flex h-[13.5px] w-[13.5px] items-center justify-center rounded-full border-2 border-[#5b4db2] p-[1.5px]`}
                >
                  {/* <div className="h-full w-full rounded-full bg-[#5b4db2]"></div> */}
                </div>
                <span className="flex text-[18px] text-gray-800">PayPal</span>
              </div>

              {/* Right Side - Icons */}
              <div className="flex">
                <img
                  src="/images/purchase/pay-pal.svg"
                  className="w-[86px]"
                  alt="paypal"
                />
              </div>
            </label>

            {/* Credit/debit */}
            <label
              className={`flex h-[54px] cursor-pointer items-center justify-between border px-4 py-2 transition-all hover:border-black-sw`}
            >
              <input
                type="radio"
                value={'creditCard'}
                {...register('payment.paymentMode')}
                checked={true}
                className="hidden"
              />

              {/* Left Side - Text */}
              <div className="flex items-center space-x-2">
                <div
                  className={`flex h-[13.5px] w-[13.5px] items-center justify-center rounded-full border-2 border-[#5b4db2] p-[1.5px]`}
                >
                  <div className="h-full w-full rounded-full bg-[#5b4db2]"></div>
                </div>
                <span className="text-[18px] text-gray-800">Credit/Debit</span>
              </div>

              {/* Right Side - Icons */}
              <div className="flex">
                <IoIosCard size={44} className="text-black-sw" />
              </div>
            </label>
          </div>

          {/* Inputs */}
          <div className="border pl-[35px]">
            {/* Required span */}
            <span className="mb-[22px] mt-[20px] block text-[13px] text-gray-sw">
              <span className="text-red-600">* </span>
              Required
            </span>
            {/* Inputs */}
            <div className="flex flex-col gap-6">
              {/* Card details */}
              <div className="flex flex-col gap-5">
                {/* Card Type */}
                <div>
                  <PaymentCardType
                    errors={errors}
                    clearErrors={clearErrors}
                    register={register}
                    setValue={setValue}
                  />
                </div>
                {/* Card num, expiraton date, CVV */}
                <div className="flex gap-4">
                  {/* Card num */}
                  <PaymentCardNumber
                    errors={errors}
                    clearErrors={clearErrors}
                    register={register}
                  />
                  {/* Card Expiry */}
                  <PaymentExpirationDate
                    errors={errors}
                    clearErrors={clearErrors}
                    register={register}
                  />
                  {/* Card CVV */}
                  <PaymentCVV
                    errors={errors}
                    clearErrors={clearErrors}
                    register={register}
                  />
                </div>
                {/* First name and last name and lock  */}
                <div className="flex flex-col gap-4 2xl:flex-row 2xl:items-center">
                  <div className="flex gap-4">
                    {/* First name */}
                    <PaymentFirstName
                      errors={errors}
                      clearErrors={clearErrors}
                      register={register}
                    />
                    {/* Last name */}
                    <PaymentLastName
                      errors={errors}
                      clearErrors={clearErrors}
                      register={register}
                    />
                  </div>
                  {/* Lock */}
                  <div className="flex items-center gap-2">
                    <FaLock size={20} className="text-black-sw" />
                    <span className="text-[11px] leading-none text-gray-sw">
                      Southwest uses a TLS connection to transmit <br />{' '}
                      sensitive and personal data.
                    </span>
                  </div>
                </div>
              </div>

              {/* Billing Information */}
              <div className="flex flex-col">
                <h2 className="mb-[28px] text-[22px] font-bold">
                  Billing Information
                </h2>

                {/* Billing inputs */}
                <div className="flex flex-col gap-5">
                  {/* country */}
                  <PaymentCountry
                    errors={errors}
                    clearErrors={clearErrors}
                    register={register}
                    setValue={setValue}
                  />

                  {/* Street Address */}
                  <PaymentStreetAddress
                    errors={errors}
                    clearErrors={clearErrors}
                    register={register}
                  />

                  {/* Street Address 2 */}
                  <PaymentStreetAddress2 register={register} />

                  {/* City, State, Zip */}
                  <div className="flex flex-col gap-5 2xl:flex-row">
                    {/* City/Town, State */}
                    <div className="flex gap-5">
                      {/* City town */}
                      <PaymentCityTown
                        errors={errors}
                        clearErrors={clearErrors}
                        register={register}
                      />

                      {/* State */}
                      <PaymentState
                        errors={errors}
                        setValue={setValue}
                        register={register}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Save on credit */}
        <div className="w-[220px] 2xl:fixed 2xl:right-[5.5rem] 2xl:top-[7.5rem]">
          <SaveOnCredits />
        </div>
      </div>
    </div>
  );
}
