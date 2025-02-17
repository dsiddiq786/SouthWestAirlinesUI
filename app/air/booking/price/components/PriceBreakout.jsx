import { useFlights } from '@/context/FlightContext';
import { FaChevronRight } from 'react-icons/fa';

export default function PriceBreakout() {
  const { flightBaseFare, Tax, TotalFlightPrice } = useFlights();
  return (
    <div className="flex flex-col gap-6">
      {/* Upper div */}
      <div className="grid auto-cols-fr grid-flow-col bg-blue-sw pb-[30px] pl-[30px] pr-[26px] pt-[21px]">
        {/* Flexbitlity */}
        <div className="flex flex-col gap-5 pl-5">
          {/* title */}
          <span className="font-swSans text-[21px] font-bold text-yellow-sw">
            Flexibility comes with every fare.
          </span>

          {/* Features */}
          <div className="flex flex-col gap-4">
            {/* two bags */}
            <div className="flex items-center gap-4">
              <div>
                <img
                  src="/images/price/two-bags.png"
                  className="w-[43px]"
                  alt=""
                />
              </div>
              <span className="font-swSans text-[14px] text-white">
                Two bags fly free<sup>®</sup>.<sup>1</sup>
              </span>
            </div>

            {/* exchange */}
            <div className="flex items-center gap-4">
              <div>
                <img
                  src="/images/price/exchange.svg"
                  className="w-[40px]"
                  alt=""
                />
              </div>
              <span className="font-swSans text-[14px] text-white">
                <span>No change</span>
                <sup>2</sup> or cancel<sup>3</sup> fees. Change your flight{' '}
                <br />
                later without a fee. Fare difference may apply.
              </span>
            </div>
          </div>

          {/* notification */}
          <span className="font-swSans text-[9px] text-white">
            <sup>1</sup>1st and 2nd checked bags. Weight and size limits apply.{' '}
            <sup>2</sup>Fare difference may apply. <sup>3</sup>Failure to cancel
            a <br /> reservation at least 10 minutes prior to scheduled
            departure may result in forfeited flight credits.
          </span>
        </div>

        {/* Price details */}
        <div className="flex flex-col gap-5 pl-[3.8rem]">
          <ul className="list-none leading-none text-white">
            <li className="flex w-full items-end justify-between">
              <span className="text-[11px]">BAG FEE *</span>
              <span className="flex items-start font-bold">
                <span className="mt-[5px] text-[13.2px]">$</span>
                <span className="text-[22px]">0.00</span>
              </span>
            </li>
            <li className="flex w-full items-end justify-between">
              <span className="text-[11px]">SUBTOTAL</span>
              <span className="flex items-start font-bold">
                <span className="mt-[5px] text-[13.2px]">$</span>
                <span className="pt-[2px] text-[22px]">{flightBaseFare}</span>
              </span>
            </li>
            <li className="flex w-full items-end justify-between">
              <span className="text-[11px]">TAXES & FEES</span>
              <span className="flex items-start font-bold">
                <span className="mt-[5px] text-[13.2px]">$</span>
                <span className="pt-[2px] text-[22px]">{Tax}</span>
              </span>
            </li>
            <li className="flex w-full items-end justify-between">
              <span className="text-[16px] font-bold">TRIP TOTAL</span>
              <span className="flex items-start font-bold">
                <span className="mt-[5px] text-[18px]">$</span>
                <span className="pt-[8px] text-[30px]">{TotalFlightPrice}</span>
              </span>
            </li>
          </ul>

          <div className="flex w-full justify-end">
            <span className="cursor-pointer text-[11px] text-white underline">
              Show price breakdown
            </span>
          </div>
        </div>
      </div>

      {/* Lower div */}
      <div className="flex items-center justify-between gap-20 font-swSans">
        {/* card */}
        <div className="group/apply relative cursor-pointer bg-blue-sw px-5 pt-5">
          {/* shape */}
          <div className="hexagon-shape absolute -right-10 top-0 h-full bg-blue-sw pr-40"></div>
          {/* img and features */}
          <div className="relative z-50 flex items-center gap-4">
            <img src="/images/price/card.png" className="w-[145px]" alt="" />

            {/* features */}
            <div className="flex flex-col gap-1 text-[24px] font-bold leading-none text-white">
              <strong>
                Get a $200.00 statement credit<sup>1</sup>
              </strong>

              <strong>
                and 10,000 Rapid Rewards<sup>®</sup> points.<sup>2</sup>
              </strong>
            </div>
          </div>

          {/* apply now div */}
          <div className="relative z-50 flex w-full items-center justify-between pb-1 pt-3 text-white">
            <span className="text-[12px]">
              1. After first purchase. 2. After you spend $500 in first three
              months.
            </span>

            <button className="flex items-center gap-2 font-arial text-[16px] font-bold">
              Apply now <FaChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* pricing */}
        <div className="flex flex-1 flex-col font-bold leading-none">
          {/* upper price */}
          <div className="flex flex-col gap-3 pl-3">
            {/* Pay today */}
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold">YOU PAY TODAY</span>
              <span className="text-[13px]">${TotalFlightPrice}</span>
            </div>

            {/* credit */}
            <div className="flex items-center justify-between pl-2 text-[#008522]">
              <span className="text-[11px] font-bold">
                CREDIT ON YOUR STATEMENT
              </span>
              <span className="text-[18px]">-$200.00</span>
            </div>
          </div>

          {/* Separator */}
          <div className="my-2 h-[2px] w-full bg-black-sw"></div>

          {/* Lower Price */}
          <div className="flex items-end justify-between">
            <span className="text-[13px] leading-5">
              TOTAL AFTER <br /> STATEMENT CREDIT
            </span>

            <span className="text-[28px]">
              ${(TotalFlightPrice - 200.0).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
