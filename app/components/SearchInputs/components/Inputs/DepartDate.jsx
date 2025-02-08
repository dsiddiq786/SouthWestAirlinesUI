import { BiCalendar } from 'react-icons/bi';

import { IoCaretDownSharp } from 'react-icons/io5';
import { useEffect, useRef, useState } from 'react';
import { Calendar } from '@heroui/react';
import { useFlights } from '@/context/FlightContext';
import { formatDate, formatShortDate } from '@/utils/formatDate';
import { MdError } from 'react-icons/md';

export default function DepartDate() {
  const {
    departDate,
    setDepartDate,
    isSearchClicked,
    isDepartDateEmpty,
    setIsDepartDateEmpty,
  } = useFlights();

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const dropdownRef = useRef(null);

  // Close dropdown on clicking outside or pressing Escape
  useEffect(() => {
    const handleInteraction = (event) => {
      if (
        event.type === 'mousedown' &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropDownOpen(false);
      }
      if (event.type === 'keydown' && event.key === 'Escape') {
        setIsDropDownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleInteraction);
    document.addEventListener('keydown', handleInteraction);

    return () => {
      document.removeEventListener('mousedown', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };
  }, []);

  // setIsDepartDate to false if the departDate length doesn't exist
  useEffect(() => {
    setIsDepartDateEmpty(!departDate && isSearchClicked);
  }, [departDate]);
  // console.log(departDate);

  return (
    <div ref={dropdownRef} className="relative flex w-min flex-col">
      <span className="pb-[8px] text-[11px] font-bold text-gray-sw">
        DEPART DATE
      </span>
      <div className="flex items-center overflow-hidden border border-r-0 shadow-inner">
        <div className="w-[160px]">
          <input
            onClick={() => setIsDropDownOpen(true)}
            className={` ${isDepartDateEmpty ? 'border border-red-600' : 'inner-box-shadow-sw'} rounded-sm py-[2px] pl-[7px] text-[32px] font-bold leading-none text-blue-sw shadow-inner`}
            type="text"
            maxLength={10}
            value={departDate ? formatShortDate(formatDate(departDate)) : ''}
            readOnly
          />
        </div>
        <button
          onClick={() => setIsDropDownOpen(true)}
          className={`bg-sw ${isDepartDateEmpty ? 'border-r-red-600' : ''} border-r px-3 py-2`}
        >
          {isDepartDateEmpty ? (
            <MdError size={22} className="text-red-600" />
          ) : (
            <BiCalendar className="text-2xl text-[#a4baf2]" />
          )}
        </button>
      </div>

      <div>
        <span
          className={`text-[11px] ${departDate ? 'opacity-100' : 'opacity-0'} text-gray-sw`}
        >
          {departDate ? formatDate(departDate) : 'Formatted Date'}
        </span>
      </div>

      {isDropDownOpen && (
        <div className="absolute -left-5 bottom-[5.7rem] z-50 grid w-[200%] place-items-center rounded-sm border bg-white shadow-lg shadow-gray-400 xl:w-[250%]">
          <Calendar aria-label="Date (Controlled)" onChange={setDepartDate} />;
          <div className="relative -bottom-4 left-20">
            <IoCaretDownSharp className="text-2xl text-white" />
          </div>
        </div>
      )}
    </div>
  );
}
