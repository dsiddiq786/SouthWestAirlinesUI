import { RiShareForward2Fill } from 'react-icons/ri';
import { FaChevronDown } from 'react-icons/fa6';

export default function ShareYourPlans() {
  return (
    <div className="flex items-center justify-between bg-[#f5f5f5] px-[30px] pb-4 pt-[24px]">
      {/* icon, title, and notification */}
      <div className="flex flex-col">
        {/* icon and title */}
        <div className="flex items-center gap-[10px]">
          <RiShareForward2Fill size={30} className="text-[#008020]" />
          <h3 className="text-[30px] font-bold leading-none tracking-tight">
            Share your plans
          </h3>
        </div>

        {/* noti */}
        <span className="text-[13px] text-gray-sw">
          We'll email your travel details to the addresses you enter below.
        </span>
      </div>

      {/* down icon */}
      <FaChevronDown size={25} className="text-[#636363]" />
    </div>
  );
}
