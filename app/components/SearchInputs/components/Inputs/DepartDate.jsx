import { BiCalendar } from 'react-icons/bi';
import { RangeCalendar } from '@heroui/react';
import { today, getLocalTimeZone } from '@internationalized/date';
import { IoCaretDownSharp } from 'react-icons/io5';
import { useEffect, useRef, useState } from 'react';
import { format } from 'date-fns';

export default function DepartDate() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [selectedDates, setSelectedDates] = useState({
    start: today(getLocalTimeZone()),
    end: today(getLocalTimeZone()),
  });

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

  // Handle date selection from the calendar
  const handleDateChange = (range) => {
    if (range?.start) {
      setSelectedDates((prev) => ({
        ...prev,
        start: range.start,
      }));
    }
    if (range?.end) {
      setSelectedDates((prev) => ({
        ...prev,
        end: range.end,
      }));
      setIsDropDownOpen(false); // Close the calendar when both dates are selected
    }
  };

  return (
    <div ref={dropdownRef} className="relative flex w-min flex-col">
      <span className="pb-[8px] text-[11px] font-bold text-gray-sw">
        DEPART DATE
      </span>
      <div className="flex items-center overflow-hidden border border-r-0 shadow-inner">
        <div className="w-[160px]">
          <input
            onClick={() => setIsDropDownOpen(true)}
            className="rounded-sm py-[2px] pl-[7px] text-[32px] font-bold leading-none text-blue-sw shadow-inner"
            type="text"
            maxLength={10}
            value={
              selectedDates.start
                ? format(new Date(selectedDates.start), 'MM/dd')
                : ''
            }
            readOnly
          />
        </div>
        <button
          onClick={() => setIsDropDownOpen(true)}
          className="bg-sw border-r px-3 py-2"
        >
          <BiCalendar className="text-2xl text-[#a4baf2]" />
        </button>
      </div>

      <div>
        <span className="text-[11px] text-gray-sw">
          {selectedDates.start
            ? format(new Date(selectedDates.start), 'EEE, MMM d, yyyy')
            : 'Select a date'}
        </span>
      </div>

      {isDropDownOpen && (
        <div className="absolute -left-5 bottom-[5.7rem] z-50 grid w-[200%] place-items-center rounded-sm border bg-white shadow-lg shadow-gray-400 xl:w-[250%]">
          <RangeCalendar
            showShadow={false}
            visibleMonths={2}
            aria-label="Select Dates"
            minValue={today(getLocalTimeZone())}
            value={selectedDates}
            onChange={handleDateChange}
          />
          <div className="relative -bottom-4 left-20">
            <IoCaretDownSharp className="text-2xl text-white" />
          </div>
        </div>
      )}

      {/* Return Date Section */}
      {/* <div className="mt-3">
        <span className="pb-[8px] text-[11px] font-bold text-gray-sw">
          RETURN DATE
        </span>
        <div className="flex items-center overflow-hidden border border-r-0 shadow-inner">
          <div className="w-[160px]">
            <input
              onClick={() => setIsDropDownOpen(true)}
              className="rounded-sm py-[2px] pl-[7px] text-[32px] font-bold leading-none text-blue-sw shadow-inner"
              type="text"
              maxLength={10}
              value={
                selectedDates.return
                  ? format(new Date(selectedDates.return), 'MM/dd')
                  : ''
              }
              readOnly
            />
          </div>
          <button
            onClick={() => setIsDropDownOpen(true)}
            className="bg-sw border-r px-3 py-2"
          >
            <BiCalendar className="text-2xl text-[#a4baf2]" />
          </button>
        </div>
        <div>
          <span className="text-[11px] text-gray-sw">
            {selectedDates.return
              ? format(new Date(selectedDates.return), 'EEE, MMM d, yyyy')
              : 'Select a date'}
          </span>
        </div>
      </div> */}
    </div>
  );
}
