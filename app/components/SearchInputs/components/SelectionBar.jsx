import { BiSolidPlaneAlt } from 'react-icons/bi';
import { IoMdArrowDropup } from 'react-icons/io';
import { TbBeach } from 'react-icons/tb';
import { FaHotel } from 'react-icons/fa6';
import { IoCarSport } from 'react-icons/io5';
import { LuShip } from 'react-icons/lu';
import { RiExternalLinkFill } from 'react-icons/ri';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import { MdOutlineAccessTime } from 'react-icons/md';
import { RiExchangeLine } from 'react-icons/ri';

export default function SelectionBar() {
  return (
    <div className="flex items-center justify-between bg-[#304cb2]">
      {/* Flight */}
      <div className="group/flight relative flex grow cursor-pointer items-center justify-center gap-[10px] overflow-hidden bg-[#1a2c80] px-[11px] py-[13px]">
        <BiSolidPlaneAlt className="text-[1.8rem] text-white" />
        <span className="text-[13px] text-white">Flight</span>
        <span className="absolute bottom-[-9px] left-8">
          <IoMdArrowDropup className="text-2xl text-white" />
        </span>
      </div>

      {/* Vacations */}
      <div className="group/flight flex grow cursor-pointer items-center justify-center gap-[10px] overflow-hidden px-[11px] py-[13px] transition-all hover:bg-[#2a4299]">
        <TbBeach className="text-[1.8rem] text-[#a4baf2] transition-all group-hover/flight:text-white" />
        <span className="text-[13px] text-white">Vacations</span>
      </div>

      {/* Hotel */}
      <div className="group/flight flex grow cursor-pointer items-center justify-center gap-[10px] overflow-hidden px-[11px] py-[13px] transition-all hover:bg-[#2a4299]">
        <FaHotel className="text-[1.4rem] text-[#a4baf2] transition-all group-hover/flight:text-white" />
        <span className="text-[13px] text-white">Hotel</span>
      </div>

      {/* Car */}
      <div className="group/flight flex grow cursor-pointer items-center justify-center gap-[10px] overflow-hidden px-[11px] py-[13px] transition-all hover:bg-[#2a4299]">
        <IoCarSport className="text-[1.7rem] text-[#a4baf2] transition-all group-hover/flight:text-white" />
        <span className="text-[13px] text-white">Car</span>
      </div>

      {/* Cruise */}
      <div className="group/flight flex grow cursor-pointer items-center justify-center gap-[10px] overflow-hidden px-[11px] py-[13px] transition-all hover:bg-[#2a4299]">
        <LuShip className="text-[1.7rem] text-[#a4baf2] transition-all group-hover/flight:text-white" />
        <span className="flex items-center gap-1 text-[13px] text-white">
          Cruise{' '}
          <RiExternalLinkFill className="text-[#a4baf2] transition-all group-hover/flight:text-white" />
        </span>
      </div>

      {/* Check in */}
      <div className="group/flight flex grow cursor-pointer items-center justify-center gap-[10px] overflow-hidden px-[11px] py-[13px] transition-all hover:bg-[#2a4299]">
        <HiOutlineCheckCircle className="text-[1.7rem] text-yellow-sw transition-all group-hover/flight:text-white" />
        <span className="flex items-center gap-1 text-[13px] font-bold text-white">
          CHECK IN
        </span>
      </div>

      {/* Flight status */}
      <div className="group/flight flex grow cursor-pointer items-center justify-center gap-[10px] overflow-hidden px-[11px] py-[13px] transition-all hover:bg-[#2a4299]">
        <MdOutlineAccessTime className="text-[1.7rem] text-yellow-sw transition-all group-hover/flight:text-white" />
        <span className="flex items-center gap-1 text-[13px] font-bold text-white">
          FLIGHT STATUS
        </span>
      </div>

      {/* Change/cancel */}
      <div className="group/flight flex grow cursor-pointer items-center justify-center gap-[10px] overflow-hidden px-[11px] py-[13px] transition-all hover:bg-[#2a4299]">
        <RiExchangeLine className="text-[1.7rem] text-yellow-sw transition-all group-hover/flight:text-white" />
        <span className="flex items-center gap-1 text-[13px] font-bold text-white">
          CHANGE/CANCEL
        </span>
      </div>

      {/*  */}
    </div>
  );
}
