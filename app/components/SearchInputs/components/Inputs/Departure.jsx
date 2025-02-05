import { useEffect, useRef, useState } from 'react';
import { IoCaretDownSharp } from 'react-icons/io5';
import States from './States';
import { useFlights } from '@/context/FlightContext';
import { v4 as uuidv4 } from 'uuid';

export default function Departure() {
  const { groupedCitiesByState } = useFlights();

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const dropdownRef = useRef(null);

  // Close dropdown on clicking outside or pressing Escape
  useEffect(() => {
    const handleInteraction = (event) => {
      // Close dropdown on outside click
      if (
        event.type === 'mousedown' &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropDownOpen(false);
      }

      // Close dropdown on Escape key press
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
  }, [setIsDropDownOpen]);

  return (
    <div ref={dropdownRef} className="relative flex flex-col">
      <span className="pb-[8px] text-[11px] font-bold text-gray-sw">
        DEPART
      </span>
      <input
        className="w-[184px] rounded-sm border py-[2px] pl-[7px] pr-[48px] text-[32px] font-bold leading-none text-blue-sw shadow-inner"
        onClick={() => {
          setIsDropDownOpen(true);
        }}
        type="text"
        // value={searchQuery}
        // onChange={(e) => handleSearch(e.target.value)}
        // onClick={togglePopover}
      />
      <div>
        <span className="text-[11px] text-gray-sw">AMA</span>
      </div>

      {isDropDownOpen && (
        <>
          <div className="absolute -left-5 bottom-[5.7rem] z-50 w-[200%] rounded-sm border bg-white shadow-lg shadow-gray-400 xl:w-[240%]">
            <ul className="max-h-64 w-full overflow-y-scroll px-3 pt-3">
              {groupedCitiesByState.map((state) => {
                return (
                  <div key={uuidv4()}>
                    <States state={state} />
                  </div>
                );
              })}
            </ul>
            <div className="relative -bottom-4 left-20">
              <IoCaretDownSharp className="text-2xl text-white" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
