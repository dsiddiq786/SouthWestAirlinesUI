import { BsInfoCircleFill } from 'react-icons/bs';

export default function PassengerRedress({ register, passenger }) {
  return (
    <div className="flex flex-col">
      <span className="flex items-center gap-2 pb-[8px] text-[11px] font-bold uppercase text-gray-sw">
        Redress #
        <span>
          <BsInfoCircleFill size={16} className="text-blue-sw" />
        </span>
      </span>
      <div>
        <input
          type="text"
          {...register(`passengers.${passenger.passengerNo}.redress`)}
          className={`inner-box-shadow-sw h-[32px] w-[358px] rounded-sm border py-[3px] pl-[7px] text-[13px] text-black-sw shadow-inner`}
        />
      </div>
      <span className="h-4 text-sm"></span>
    </div>
  );
}
