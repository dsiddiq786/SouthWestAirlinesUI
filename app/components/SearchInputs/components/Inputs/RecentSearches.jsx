import { useState, useEffect, useRef } from 'react';
import { IoCaretDownSharp } from 'react-icons/io5';

export default function RecentSearches() {
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
    <div
      ref={dropdownRef}
      className="relative flex w-full flex-col items-center text-[14px]"
    >
      <button
        className=""
        onClick={() => {
          setIsDropDownOpen(!isDropDownOpen);
        }}
      >
        <span
          className={`flex w-full ${isDropDownOpen ? 'border-black-sw' : 'hover:border'} box-shadow-sw items-center justify-between gap-14 rounded-sm border p-2 leading-none text-black-sw`}
        >
          <span className="text-[13px]">Recent searches</span>
          <span>
            <IoCaretDownSharp className="text-lg text-blue-sw" />
          </span>
        </span>
      </button>

      {isDropDownOpen && (
        <div className="absolute bottom-10 w-full border">recent searches</div>
      )}
    </div>
  );
}
