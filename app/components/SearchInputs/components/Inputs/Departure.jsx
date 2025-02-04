import { useEffect, useRef, useState } from 'react';
import { BiSolidDownArrow } from 'react-icons/bi';

export default function Departure() {
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
    <div ref={dropdownRef} className="flex flex-col">
      <span className="pb-[8px] text-[11px] font-bold text-gray-sw">
        DEPART
      </span>
      <input
        onClick={() => {
          setIsDropDownOpen(true);
        }}
        className="w-[184px] rounded-sm border py-[2px] pl-[7px] pr-[48px] text-[32px] font-bold leading-none text-blue-sw shadow-inner"
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
          <div className="absolute bottom-[5.7rem] z-50 max-h-64 w-full overflow-y-scroll rounded-sm bg-white p-3 shadow-md shadow-gray-400">
            <div>Locations</div>
          </div>
          <div className="">
            <BiSolidDownArrow className="text-lg text-black" />
          </div>
        </>
      )}
    </div>
  );
}
