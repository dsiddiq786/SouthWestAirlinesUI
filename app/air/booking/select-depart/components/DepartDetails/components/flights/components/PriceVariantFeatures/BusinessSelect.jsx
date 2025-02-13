import { useFlights } from '@/context/FlightContext';
import { FaCheckCircle } from 'react-icons/fa';

export default function BusinessSelect() {
  const { priceVariants } = useFlights();
  return (
    <div className="flex flex-col gap-2">
      {/* uppder div */}
      <div className="flex h-[160px] items-stretch border-2 border-blue-sw text-white">
        {/* title and points */}
        <div className="flex w-[185px] flex-col gap-1 bg-blue-sw py-6 pl-4 pr-2">
          {/* title */}
          <h3 className="text-[28px] font-bold leading-none">
            Business <br /> Select
          </h3>

          {/* earn */}
          <div className="flex flex-col leading-none">
            <span className="text-[13px]">EARN</span>
            <span className="text-[20px] font-bold">
              {priceVariants[0].points}
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
                  Refundable<sup>7</sup>
                </span>
              </div>

              {/* priority */}
              <div className="flex gap-2">
                <FaCheckCircle size={14} className="text-[#008020]" />
                <span className="text-[13px] font-bold text-black-sw">
                  Priority boarding A1-A15
                </span>
              </div>

              {/* refund */}
              <div className="flex gap-2">
                <FaCheckCircle size={14} className="text-[#008020]" />
                <span className="text-[13px] font-bold text-black-sw">
                  Free Inflight Internet<sup>12</sup>
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
      <div className="flex h-[110px] items-center border-2 px-4">
        {/* we get it  */}
        <div className="flex flex-col text-[18px] font-bold leading-none text-blue-sw">
          <span>We get it: we love</span>
          <span>being first too</span>
        </div>

        {/* img */}
        <div className="pl-2 pr-4">
          <img
            src="/images/select-depart/BusSelect.png"
            className="w-[40px]"
            alt=""
          />
        </div>

        {/* paragraph */}
        <div className="flex flex-col gap-1 text-[14px] leading-none text-black-sw">
          <span>
            This fare guarantees a boarding position in A1-A15, which means
            you're one of the first to board.
          </span>
          <span>Start thinking about your favorite seat!</span>
        </div>
      </div>
    </div>
  );
}
