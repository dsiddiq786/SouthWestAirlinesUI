import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';

export default function TravelAdvisory() {
  return (
    <div className="flex w-full items-center gap-2 bg-white px-[20px] pb-[8px] pt-[9px] text-[13px]">
      <span>
        <RiErrorWarningFill className="text-lg text-blue-sw" />
      </span>

      <div className="flex items-center gap-1">
        <div className="font-bold text-black-sw">TRAVEL ADVISORY:</div>
        <a href="#" className="text-blue-sw hover:underline">
          Washington (Reagan National), D.C. - DCA Operations
        </a>
      </div>
    </div>
  );
}
