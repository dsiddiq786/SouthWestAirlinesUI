import { BiCalendar } from 'react-icons/bi';

import { IoCaretDownSharp } from 'react-icons/io5';
import { useEffect, useRef, useState } from 'react';
import { Calendar } from '@heroui/react';
import { useFlights } from '@/context/FlightContext';
import { formatDate, formatShortDate } from '@/utils/formatDate';
import { MdError } from 'react-icons/md';

export default function ReturnDate() {
  const {
    returnDate,
    setReturnDate,
    isSearchClicked,
    isReturnDateEmpty,
    setIsReturnDateEmpty,
    selectedTravelType,
    travelTypeOptions,
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

  // setIsDepartDate to false if the returnDate length doesn't exist
  useEffect(() => {
    setIsReturnDateEmpty(!returnDate && isSearchClicked);
  }, [returnDate]);

  return (
    <div ref={dropdownRef} className="relative flex w-min flex-col">
      <span className="pb-[8px] text-[11px] font-bold text-gray-sw">
        RETURN DATE
      </span>
      <div className="flex items-center overflow-hidden border border-r-0 shadow-inner">
        {selectedTravelType === travelTypeOptions[0] ? (
          <>
            <div className="w-[160px]">
              <input
                onClick={() => setIsDropDownOpen(true)}
                className={` ${isReturnDateEmpty ? 'border border-red-600' : 'inner-box-shadow-sw'} rounded-sm py-[2px] pl-[7px] text-[32px] font-bold leading-none text-blue-sw shadow-inner`}
                type="text"
                maxLength={10}
                value={
                  returnDate ? formatShortDate(formatDate(returnDate)) : ''
                }
                readOnly
              />
            </div>
            <button
              onClick={() => setIsDropDownOpen(true)}
              className={`bg-sw ${isReturnDateEmpty ? 'border-r-red-600' : ''} border-r px-3 py-2`}
            >
              {isReturnDateEmpty ? (
                <MdError size={22} className="text-red-600" />
              ) : (
                <BiCalendar className="text-2xl text-[#a4baf2]" />
              )}
            </button>
          </>
        ) : (
          <>
            <div className="w-[160px] cursor-not-allowed overflow-hidden bg-[#f5f5f5]">
              {/* <input
                className={`rounded-sm bg-[#f5f5f5] py-[8px] pl-[7px]`}
                type="text"
                disabled
                maxLength={10}
                readOnly
              /> */}
              <div className="w-full rounded-sm bg-[#f5f5f5] py-5 pl-[7px]"></div>
              <div className="rounded-sm bg-[#f5f5f5]"></div>
            </div>
            <button disabled className={`border-x bg-[#f5f5f5] px-3 py-2`}>
              <BiCalendar className="text-2xl text-[#cccccc]" />
            </button>
          </>
        )}
      </div>

      <div>
        <span
          className={`text-[11px] ${returnDate ? 'opacity-100' : 'opacity-0'} text-gray-sw`}
        >
          {returnDate ? formatDate(returnDate) : 'Formatted Date'}
        </span>
      </div>

      {isDropDownOpen && (
        <div className="absolute -left-5 bottom-[5.7rem] z-50 grid w-[200%] place-items-center rounded-sm border bg-white shadow-lg shadow-gray-400 xl:w-[250%]">
          <Calendar aria-label="Date (Controlled)" onChange={setReturnDate} />;
          <div className="relative -bottom-4 left-20">
            <IoCaretDownSharp className="text-2xl text-white" />
          </div>
        </div>
      )}
    </div>
  );
}
