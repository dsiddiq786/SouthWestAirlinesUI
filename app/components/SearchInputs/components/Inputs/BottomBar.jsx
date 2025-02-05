import { BiCalendar } from 'react-icons/bi';
import { GrMapLocation } from 'react-icons/gr';
import { IoLocationSharp } from 'react-icons/io5';

export default function BottomBar() {
  return (
    <div className="flex items-start whitespace-nowrap">
      {/* Details */}
      <div className="mt-5">
        <ul className="sliced-div relative flex list-none items-center gap-4 bg-[#f5f5f5] py-3 pl-[17px] pr-16">
          {/* Where we fly */}
          <li>
            <button className="group/where flex items-center gap-2 p-[3px] text-[13px]">
              <IoLocationSharp className="text-[#fe8748]" size={20} />
              <span className="text-gray-sw decoration-gray-sw group-hover/where:underline">
                Where we fly
              </span>
            </button>
          </li>
          {/* Low fare */}
          <li>
            <button className="group/lowFare flex items-center gap-2 p-[3px] text-[13px]">
              <BiCalendar className="text-[#febf28]" size={20} />
              <span className="text-gray-sw decoration-gray-sw group-hover/lowFare:underline">
                Low Fare Calender
              </span>
            </button>
          </li>
          {/* exploreDes */}
          <li>
            <button className="group/exploreDes flex items-center gap-2 p-[3px] text-[13px]">
              <GrMapLocation className="text-blue-sw" size={20} />
              <span className="text-gray-sw decoration-blue-sw group-hover/exploreDes:underline">
                Explore destinations
              </span>
            </button>
          </li>
        </ul>
      </div>

      {/* Promo code, advanced search, search button */}
      <div className="flex w-full items-end justify-between gap-3 pr-[20px]">
        {/* Promo code */}
        <div className="-ml-4 flex flex-col">
          <span>
            <span className="pb-[8px] text-[11px] font-bold text-gray-sw">
              PROMO CODE
            </span>
            <span className="text-[9px] text-gray-sw">(Optional)</span>
          </span>
          <input
            className="rounded-sm border px-7 py-[6px] text-sm leading-none text-blue-sw shadow-inner"
            type="text"
            maxLength={10}
          />
        </div>

        {/* Advanced Search */}
        <div className="mb-1">
          <button className="text-[13px] leading-none text-blue-sw decoration-black-sw hover:text-black-sw hover:underline">
            Advanced search
          </button>
        </div>

        {/* Search Button */}
        <div>
          <button className="box-shadow-sw flex items-center gap-1 rounded-sm border border-transparent bg-yellow-sw px-[20px] py-2 text-black-sw transition-all duration-200 hover:border-black-sw hover:shadow-none">
            <span className="text-xs font-bold">Search</span>
          </button>
        </div>
      </div>
    </div>
  );
}
