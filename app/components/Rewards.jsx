import React from 'react';
import { FaAngleRight } from 'react-icons/fa6';

export default function Rewards() {
  return (
    <div className="grid grid-cols-2 rounded-[1px] font-swSans">
      {/* Join rapid */}
      <a
        className="group/join flex w-full flex-col gap-4 bg-[#192c7f] pb-[20px] pl-[30px] pr-[15px] pt-[35px] text-white"
        href="#"
      >
        <div className="flex flex-col gap-2 text-[35px] font-extrabold leading-tight text-yellow-sw">
          <div>Join Rapid Rewards®.</div>
          <div>Get rewarded rapidly.</div>
        </div>

        <ul className="list-none space-y-4 text-[22px] text-white">
          <li className="flex gap-2">
            <span>•</span>{' '}
            <span>
              No blackout dates & points <br />
              don't expire.
            </span>
          </li>
          <li className="flex gap-2">
            <span>•</span>{' '}
            <span>
              Redeem points on flights, <br />
              hotels, cars, & more
            </span>
          </li>
        </ul>

        <div className="flex items-center justify-between gap-5 pr-4">
          <span className="text-[11px] text-white">
            All Rapid Rewards® rules and regulations apply <br /> and can be
            found at
            <strong>Southwest.com/rrterms.</strong>
          </span>
          <span className="flex items-center gap-2 whitespace-nowrap font-bold text-yellow-sw">
            <span className="group-hover/join:underline">Join for free</span>
            <FaAngleRight className="text-2xl" />
          </span>
        </div>
      </a>

      {/* Points */}
      <a
        className="group/points relative flex w-full flex-col justify-between overflow-hidden bg-[#ffbf27] pb-[20px] pl-[30px] pr-[15px] pt-[35px] text-[#1a2c80]"
        href="#"
      >
        <div>
          {/* tag */}
          <div>
            <span className="text-[19px]">
              Get your new year off to a flying start.
            </span>
          </div>
          {/* Price */}
          <div>
            <span className="text-[64px] font-extrabold leading-none">
              Earn 50,000 points.
            </span>
          </div>
        </div>

        {/* Learn more */}
        <span className="flex items-center whitespace-nowrap text-[17px] font-bold">
          <span className="group-hover/points:underline">Learn more</span>
          <FaAngleRight className="text-2xl" />
        </span>

        {/* card */}
        <div className="absolute -bottom-5 right-9 flex justify-end">
          <img alt="" src="/images/debit-card.png" />
        </div>
      </a>
    </div>
  );
}
