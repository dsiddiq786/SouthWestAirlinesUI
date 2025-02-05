import { BsInfoCircleFill } from 'react-icons/bs';
import { useEffect, useRef, useState } from 'react';

export default function Arrival() {
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
    <div ref={dropdownRef} className="flex w-min flex-col">
      <span className="flex items-center gap-1 pb-[8px] text-[11px] font-bold text-gray-sw">
        Arrive
        <BsInfoCircleFill className="text-[13px] text-blue-sw" />
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
        <span className="text-[11px] text-gray-sw">AUS</span>
      </div>

      {isDropDownOpen && (
        <>
          <div className="absolute bottom-[5.7rem] z-50 max-h-64 w-full overflow-y-scroll rounded-sm bg-white p-3 shadow-md shadow-gray-400">
            <div>Locations</div>
          </div>
          {/* <div className="absolute bottom-[4.8rem] left-20">
            <BiSolidDownArrow className="text-lg text-gray-200" />
          </div> */}
        </>
      )}
    </div>
  );
}
