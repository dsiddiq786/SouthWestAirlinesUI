import { IoIosCard } from 'react-icons/io';
import { BsInfoCircleFill } from 'react-icons/bs';
import PaymentRedeem from './components/PaymentRedeem';
import PaymentDetails from './components/PaymentDetails';

export default function PaymentMethod({
  register,
  errors,
  clearErrors,
  setValue,
}) {
  return (
    <div className="flex flex-col bg-[#f5f5f5] px-[30px] pb-[30px] pt-[24px]">
      {/* icon and title */}
      <div className="flex items-center gap-1">
        <span className="mb-1">
          <IoIosCard size={30} className="text-[#008020]" />
        </span>
        <h2 className="text-[30px] font-bold">Payment Method</h2>
      </div>

      {/* notification */}
      <span className="mb-[26px] mt-[4px] flex items-center gap-1 text-[13px] text-gray-sw">
        Up to three forms of payment may be applied.{' '}
        <span>
          <BsInfoCircleFill size={16} className="text-blue-sw" />
        </span>
      </span>

      {/* PassengerInfo */}
      <div className="bg-white px-[40px] pb-[30px] pt-[19px]">
        {/* Redeem */}
        <PaymentRedeem register={register} setValue={setValue} />

        {/* Pay */}
        <PaymentDetails
          register={register}
          errors={errors}
          clearErrors={clearErrors}
          setValue={setValue}
        />
      </div>
    </div>
  );
}
