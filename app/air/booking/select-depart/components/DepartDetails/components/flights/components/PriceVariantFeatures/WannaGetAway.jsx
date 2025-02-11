import { useFlights } from '@/context/FlightContext';
import { FaCheckCircle } from 'react-icons/fa';

export default function WannaGetAway() {
  const { priceVariants } = useFlights();
  return (
    <div className="flex flex-col gap-2">
      {/* uppder div */}
      <div className="flex h-[160px] items-stretch border-2 border-[#ffbf27] text-black-sw">
        {/* title and points */}
        <div className="flex w-[185px] flex-col gap-1 bg-[#ffbf27] py-6 pl-4 pr-2">
          {/* title */}
          <h3 className="text-[28px] font-bold leading-none">
            Wanna <br />
            Get Away
          </h3>

          {/* earn */}
          <div className="flex flex-col leading-none">
            <span className="text-[13px]">EARN</span>
            <span className="text-[20px] font-bold">
              {priceVariants[3].points}
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
                  Non-refundable (flight credit if you cancel)<sup>4</sup>
                </span>
              </div>

              {/* priority */}
              <div className="flex gap-2">
                <FaCheckCircle size={14} className="text-[#008020]" />
                <span className="text-[13px] font-bold text-black-sw">
                  No change
                  <sup>2</sup> or cancel fees<sup>3</sup>
                </span>
              </div>

              {/* refund */}
              <div className="flex gap-2">
                <FaCheckCircle size={14} className="text-[#008020]" />
                <span className="text-[13px] font-bold text-black-sw">
                  Free same-day standby (taxes and fees may apply)<sup>6</sup>
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
      <div className="flex h-[110px] items-center gap-[4.5rem] border-2 px-4">
        {/* we get it  */}
        <div className="flex flex-col text-[18px] font-bold leading-none text-blue-sw">
          <span>Upgrade to Wanna</span>
          <span>
            Get Away <span className="italic text-red-600">plus</span>
          </span>
        </div>

        {/* points and upgrade button */}
        <div className="flex flex-1 items-center justify-between leading-none">
          <ul className="list-disc space-y-3 text-[14px] font-bold text-gray-sw">
            <li>
              Earn 2,398 Rapid Rewards<sup>®</sup> points<sup>11</sup>
            </li>
            <li>
              Transferable Flight Credit™<sup>5</sup>
            </li>
            <li>
              Free same-day confirmed change (taxes and fees may apply)
              <sup>6</sup>
            </li>
          </ul>

          {/* price and button */}
          <div className="flex items-center gap-4 pr-5">
            <div className="flex flex-col items-center justify-center leading-none text-blue-sw">
              <span className="text-[12px] italic">for only</span>
              <span className="text-[28px] font-bold">$20</span>
              <span className="text-[12px] italic">more</span>
            </div>
            <button className="rounded-sm bg-blue-sw px-[20px] py-2 text-[14px] font-bold text-white">
              Upgrade
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
