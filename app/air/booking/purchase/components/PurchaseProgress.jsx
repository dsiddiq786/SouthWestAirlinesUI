import { IoIosAirplane } from 'react-icons/io';
import { FaCheck } from 'react-icons/fa';

export default function PurchaseProgress() {
  return (
    <div className="flex items-center justify-between pb-[22px] pt-[25px] leading-none">
      {/* Title */}
      <h1 className="text-[42px] font-bold tracking-tighter">
        Passenger & Payment Info
      </h1>

      {/* Progress */}
      <div className="flex flex-col pr-10">
        {/* circles */}
        <div className="flex items-center gap-1">
          {/* Price */}
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#008020]">
            <FaCheck size={10} className="text-white" />
          </div>

          {/* Separator */}
          <div className="h-[2px] w-[110px] bg-[#e6e7e8]"></div>

          {/* Payment */}
          <div className="bg-[#008020 flex h-5 w-5 items-center justify-center rounded-full bg-black-sw">
            <IoIosAirplane size={13} className="text-white" />
          </div>

          {/* Separator */}
          <div className="h-[2px] w-[110px] bg-[#e6e7e8]"></div>

          {/* Payment */}
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#e6e7e8]"></div>
        </div>

        {/* tags */}
        <div className="mt-1 flex w-full items-center justify-between text-[12px]">
          <span className="relative -left-1">Price</span>

          <span className="relative -right-6">Payment</span>

          <span className="relative -right-6">Confirmation</span>
        </div>
      </div>
    </div>
  );
}
