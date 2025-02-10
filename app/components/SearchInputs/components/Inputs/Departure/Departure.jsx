import { useEffect, useRef, useState } from 'react';
import { IoCaretDownSharp } from 'react-icons/io5';
import { useFlights } from '@/context/FlightContext';
import { v4 as uuidv4 } from 'uuid';
import DepartStates from './DepartStates';
import { MdError } from 'react-icons/md';

export default function Departure() {
  const {
    filteredDepartCitiesByState,
    selectedDepartCodes,
    handleDepartSearch,
    departSearchQuery,
    isDepartEmpty,
    setIsDepartEmpty,
    isSearchClicked,
    codeDetailsWithCityState,
  } = useFlights();

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

  // setIsDepartEmpty to false if the departSearchQuery length is greater than 0
  useEffect(() => {
    setIsDepartEmpty(!departSearchQuery.length > 0 && isSearchClicked);
  }, [departSearchQuery]);

  return (
    <div ref={dropdownRef} className="relative flex flex-col">
      <span className="pb-[8px] text-[11px] font-bold text-gray-sw">
        DEPART
      </span>
      <div className="relative">
        <input
          className={`w-[184px] rounded-sm py-[2px] pl-[7px] pr-[48px] text-[32px] font-bold leading-none ${isDepartEmpty ? 'border border-red-600' : 'inner-box-shadow-sw border'} text-blue-sw shadow-inner`}
          onClick={() => {
            setIsDropDownOpen(true);
          }}
          type="text"
          value={departSearchQuery}
          onChange={(e) => handleDepartSearch(e.target.value)}
        />
        {isDepartEmpty && (
          <span className="absolute right-[0.7rem] top-[0.65rem]">
            <MdError size={22} className="text-red-600" />
          </span>
        )}
      </div>
      <div>
        {isDepartEmpty ? (
          <span className="text-[11px] text-red-600">
            Enter Departure Airport
          </span>
        ) : (
          <>
            {selectedDepartCodes.length > 1 ? (
              <span className="text-[11px] text-gray-sw">{`${filteredDepartCitiesByState[0].state} Airports`}</span>
            ) : (
              <>
                {selectedDepartCodes.length === 0 ? (
                  <span className="text-[11px] text-gray-sw opacity-0">
                    Ama
                  </span>
                ) : (
                  <span className="text-[11px] text-gray-sw">
                    {codeDetailsWithCityState.filter((detail) => {
                      return detail.includes(selectedDepartCodes[0]);
                    })}
                  </span>
                )}
              </>
            )}
          </>
        )}
      </div>

      {isDropDownOpen && departSearchQuery.length >= 2 && (
        <>
          <div className="absolute -left-5 bottom-[5.7rem] z-50 w-[200%] rounded-sm border bg-white shadow-lg shadow-gray-400 xl:w-[240%]">
            <ul className="-mb-3 max-h-64 w-full overflow-y-scroll px-3 pt-3">
              {filteredDepartCitiesByState.length > 0 ? (
                filteredDepartCitiesByState.map((state) => (
                  <div key={uuidv4()}>
                    <DepartStates state={state} />
                  </div>
                ))
              ) : (
                <li className="px-[7px] py-2 text-sm italic text-gray-sw">
                  No match found
                </li>
              )}
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
