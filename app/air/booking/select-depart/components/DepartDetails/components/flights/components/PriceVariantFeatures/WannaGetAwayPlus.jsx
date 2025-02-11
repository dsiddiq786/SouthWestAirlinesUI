import { useFlights } from '@/context/FlightContext';
import { FaCheckCircle } from 'react-icons/fa';

export default function WannaGetAwayPlus() {
  const { priceVariants } = useFlights();
  return (
    <div className="relative flex flex-col gap-2 tracking-tight">
      {/* uppder div */}
      <div className="flex h-[160px] items-stretch border-2 border-[#f5f5f5]">
        {/* title and points */}
        <div className="flex w-[185px] flex-col gap-1 bg-[#f5f5f5] py-6 pl-4 pr-2">
          {/* title */}
          <h3 className="text-[28px] font-bold leading-none">
            Wanna Get <br /> Away{' '}
            <span className="italic text-red-600">plus</span>
          </h3>

          {/* earn */}
          <div className="flex flex-col leading-none">
            <span className="text-[13px]">EARN</span>
            <span className="text-[20px] font-bold">
              {priceVariants[2].points}
            </span>
          </div>

          {/* rapid rewars */}
          <span className="text-[13px] font-bold">
            Rapid Rewards<sup>®</sup> point<sup>11</sup>
          </span>
        </div>

        {/* Features and selected */}
        <div className="flex flex-1 items-center justify-center">
          <div className="flex w-full items-start justify-between px-7">
            {/* features */}
            <div className="flex flex-col gap-2">
              {/* refund */}
              <div className="flex gap-2">
                <FaCheckCircle size={14} className="text-[#008020]" />
                <span className="text-[13px] font-bold text-black-sw">
                  Non-refundable (Transferable Flight Credit<sup>TM</sup> if you
                  cancel)<sup>5</sup>
                </span>
              </div>

              {/* priority */}
              <div className="flex gap-2">
                <FaCheckCircle size={14} className="text-[#008020]" />
                <span className="text-[13px] font-bold text-black-sw">
                  Free same-day change/standby (taxes and fees may apply)
                  <sup>6</sup>
                </span>
              </div>

              {/* refund */}
              <div className="flex gap-2">
                <FaCheckCircle size={14} className="text-[#008020]" />
                <span className="text-[13px] font-bold text-black-sw">
                  Transferable Flight Credit™<sup>5</sup>
                </span>
              </div>
            </div>

            {/* selected tag */}
            <div className="flex gap-2">
              <FaCheckCircle size={23} className="text-[#008020]" />
              <span className="text-[16px] font-bold text-black-sw">
                SELECTED
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Lower div */}
      <div className="flex h-[110px] items-center gap-5 border-2 border-[#e8ecf9] px-4">
        {/* we get it  */}
        <div className="flex flex-col text-[24px] font-bold leading-none text-blue-sw">
          <span>Low fares for all</span>
        </div>

        <div className="-mb-3 flex items-center gap-10">
          {/* Change fees */}
          <div className="flex items-center gap-1 font-bold">
            <span className="text-[24px] text-blue-sw">$0</span>
            <span className="text-[18px]">
              Change fees<sup className="text-[12.6px]">1</sup>
            </span>
          </div>

          {/* Cancel fees */}
          <div className="flex items-center gap-1 font-bold">
            <span className="text-[24px] text-blue-sw">$0</span>
            <span className="text-[18px]">
              Cancel fees<sup className="text-[12.6px]">2</sup>
            </span>
          </div>

          {/* two bags fees */}
          <div className="flex items-center gap-1 font-bold">
            <span className="text-[24px] text-blue-sw">$0</span>
            <span className="text-[18px]">
              Two bags fly free<sup>®</sup>
              <sup className="text-[12.6px]">3</sup>
            </span>
          </div>
        </div>
      </div>

      {/* tags */}
      <div className="absolute bottom-0 left-4 flex items-center gap-1 text-[9px] text-[#1A2C80]">
        {/* 1 */}
        <span>
          <sup>1</sup>
          <span>Fare difference may apply. </span>
        </span>

        {/* 2 */}
        <span>
          <sup>2</sup>
          <span>
            Failure to cancel a reservation at least 10 minutes prior to
            schedule departure may result in forfeited travel funds.{' '}
          </span>
        </span>

        {/* 3 */}
        <span>
          <sup>3</sup>
          <span>
            First and second checked bags. Weight and size limits apply.
          </span>
        </span>
      </div>
    </div>
  );
}
