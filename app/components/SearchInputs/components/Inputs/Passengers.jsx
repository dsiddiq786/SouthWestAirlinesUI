import { PiUserFill } from 'react-icons/pi';
export default function Passengers() {
  return (
    <div className="flex flex-col" role="button">
      <span className="pb-[8px] text-[11px] font-bold text-gray-sw">
        PASSENGERS
      </span>
      <div className="box-shadow-sw flex items-center gap-5 border bg-gradient-to-b from-white to-gray-100 px-3">
        <div className="py-1 text-center text-[32px] font-bold leading-none text-blue-sw">
          1
        </div>
        <span className="">
          <PiUserFill className="text-xl text-[#a4baf2]" />
        </span>
      </div>
    </div>
  );
}
