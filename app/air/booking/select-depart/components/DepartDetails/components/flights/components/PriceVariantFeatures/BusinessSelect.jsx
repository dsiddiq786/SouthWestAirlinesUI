import { useFlights } from '@/context/FlightContext';
import { FaCheckCircle } from 'react-icons/fa';

export default function BusinessSelect() {
  const { priceVariants } = useFlights();
  return (
    <div className="flex flex-col gap-2">
      {/* uppder div */}
      <div className="flex items-stretch border-2 border-blue-sw text-white">
        {/* title and points */}
        <div className="flex flex-col gap-1 bg-blue-sw py-4 pl-4 pr-2">
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
            Rapid Rewards point® <sup>11</sup>
          </span>
        </div>

        {/* Features and selected */}
        <div className="flex flex-1 items-center justify-center">
          <div className="flex w-full items-start justify-between px-5">
            {/* features */}
            <div className="flex flex-col gap-3">
              {/* refund */}
              <div className="flex gap-2">
                <FaCheckCircle size={13} className="text-[#008020]" />
                <span className="text-[13px] font-bold text-black-sw">
                  Refundable<sup>7</sup>
                </span>
              </div>

              {/* priority */}
              <div className="flex gap-2">
                <FaCheckCircle size={13} className="text-[#008020]" />
                <span className="text-[13px] font-bold text-black-sw">
                  Priority boarding A1-A15
                </span>
              </div>

              {/* refund */}
              <div className="flex gap-2">
                <FaCheckCircle size={13} className="text-[#008020]" />
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
      <div className="border-2 px-4">lower div</div>
    </div>
  );
}
