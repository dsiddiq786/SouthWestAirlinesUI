import { useFlights } from '@/context/FlightContext';
import { FaChevronRight } from 'react-icons/fa';

export default function PurchasePriceBreakout() {
  const { flightBaseFare, Tax, TotalFlightPrice } = useFlights();
  return (
    <div className="flex flex-col gap-6">
      {/* Upper div */}
      <div className="grid auto-cols-fr grid-flow-col items-center bg-blue-sw pb-[30px] pl-[30px] pr-[26px] pt-[21px]">
        {/* Flexbitlity */}
        <div className="flex flex-col pl-5">
          {/* title */}
          <span className="text-[36px] font-bold leading-none tracking-tight text-yellow-sw">
            Lock in this fare today.
          </span>

          {/* feature */}
          <div className="text-[21px] leading-8 tracking-tight text-white">
            This nonrefundable fare will allow you to <br />
            change<sup>1</sup> or cancel<sup>2</sup> without a fee.
          </div>

          {/* notification */}
          <span className="text-[10px] text-white">
            <sup>1</sup>Fare difference may apply. <sup>2</sup>Failure to cancel
            a reservation at least 10 <br />
            minutes prior to scheduled departure may result in forfeited travel
            funds.
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
                <span className="pt-[2px] text-[22px]">{Tax.toFixed(2)}</span>
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
    </div>
  );
}
