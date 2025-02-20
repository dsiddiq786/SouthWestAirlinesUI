import { useFlights } from '@/context/FlightContext';
import { FaAngleRight } from 'react-icons/fa6';
export default function SaveOnCredits() {
  const { TotalFlightPrice } = useFlights();
  return (
    <div className="flex flex-col rounded-sm border font-swSans text-[13px]">
      {/* Apply now */}
      <div className="flex flex-col gap-2 bg-[#ffbf27] p-3">
        <div className="text-[15px]">
          <span className="leading-none">
            <strong>Earn $200 statement credit</strong> <br /> and{' '}
            <strong>10,000 Rapid Rewards®</strong> <br />{' '}
            <strong>points.</strong>
          </span>
        </div>

        {/* img */}
        <div>
          <img
            src="/images/select-depart/sw-card.png"
            alt="rewards card"
            className="h-[56px] w-[90px]"
          />
        </div>

        {/* Apply now */}
        <div className="flex items-end">
          <span className="-mb-1 font-bold">Apply now</span>
          <FaAngleRight size={20} />
        </div>
      </div>

      {/* pricing */}
      <div className="flex flex-col px-2 py-3 font-bold leading-none">
        {/* upper price */}
        <div className="flex flex-col gap-2">
          {/* Pay today */}
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold">YOU PAY TODAY</span>
            <span className="text-[11px]">${TotalFlightPrice}</span>
          </div>

          {/* credit */}
          <div className="flex items-center justify-between text-[#008522]">
            <span className="text-[11px] font-bold">
              CREDIT ON YOUR <br /> STATEMENT
            </span>
            <span className="text-[11px]">-$200.00</span>
          </div>
        </div>

        {/* Separator */}
        <div className="my-1 h-[2px] w-full bg-black-sw"></div>

        {/* Lower Price */}
        <div className="mt-1 flex items-start justify-between">
          <span className="text-[11px]">
            TOTAL AFTER <br /> STATEMENT CREDIT
          </span>

          <span className="text-[17px]">
            ${(TotalFlightPrice - 200.0).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
