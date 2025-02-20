import { BsInfoCircleFill } from 'react-icons/bs';

export default function PaymentStreetAddress2({ register }) {
  return (
    <div className="flex flex-col">
      <span className="flex pb-[8px] text-[11px] font-bold uppercase text-gray-sw">
        Street address 2
      </span>
      <div>
        <input
          type="text"
          autoComplete="address-line2"
          {...register(`payment.billingInfo.streetAddress2`)}
          className={`inner-box-shadow-sw h-[32px] w-[263px] rounded-sm border py-[3px] pl-[7px] text-[13px] text-black-sw shadow-inner`}
        />
      </div>
      <span className="h-4 text-sm"></span>
    </div>
  );
}
