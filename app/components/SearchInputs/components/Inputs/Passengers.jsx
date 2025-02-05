import { PiUserFill } from 'react-icons/pi';
import PassengerSelector from './PassengerSelector';
import { useEffect, useRef, useState } from 'react';
import { IoCaretDownSharp } from 'react-icons/io5';
import { useFlights } from '@/context/FlightContext';
export default function Passengers() {
  const { totalPassengers } = useFlights();

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
        PASSENGERS
      </span>
      <div
        role="button"
        onClick={() => {
          setIsDropDownOpen(true);
        }}
        className="bg-sw box-shadow-sw flex items-center gap-5 border px-3"
      >
        <div className="py-1 text-center text-[32px] font-bold leading-none text-blue-sw">
          {totalPassengers}
        </div>
        <span className="">
          <PiUserFill className="text-xl text-[#a4baf2]" />
        </span>
      </div>

      {isDropDownOpen && (
        <>
          <div className="absolute -right-5 bottom-[3.8rem] z-50 w-[300%] rounded-sm border bg-white shadow-lg shadow-gray-400 xl:w-[370%]">
            <PassengerSelector />
            <div className="relative -bottom-4 left-48">
              <IoCaretDownSharp className="text-2xl text-white" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
