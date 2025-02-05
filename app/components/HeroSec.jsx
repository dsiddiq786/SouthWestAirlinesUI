import React from 'react';

export default function HeroSEC() {
  return (
    <div
      className="block w-full px-[4.7rem] pb-[9.8rem] pt-[5.8rem]"
      role="button"
    >
      {/* Book now */}

      {/* hero text and button */}
      <div className="flex flex-col">
        <strong>
          <span className="font-swSans text-[36px] font-bold text-blue-sw">
            The airline with Heart.
          </span>
        </strong>

        <span className="mb-4 text-[24px] font-light text-blue-sw">
          Low fares to the U.S.
        </span>

        {/* Login button */}
        <div>
          <button className="box-shadow-sw flex items-center gap-1 bg-yellow-sw px-[20px] py-[6px] text-black-sw">
            <span className="text-[14px] font-bold">Book Now</span>
          </button>
        </div>
      </div>

      {/* Lowest Price */}
      {/* <div className="font-swSans ml-10 flex flex-col items-center gap-4 text-white">
        <div className="-mr-8">
          <span className="text-[22px]">One-way as low as</span>
          <sup className="text-[11px]">*</sup>
        </div> */}

      {/* Price */}
      {/* <div className="flex items-start -space-x-2 font-bold leading-none">
          <span className="relative -bottom-3 text-[105px]">$</span>
          <span className="text-[200px]">69</span>
        </div>
      </div> */}
    </div>
  );
}
