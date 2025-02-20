import { useEffect, useRef, useState } from 'react';
import { IoCaretDownSharp, IoCaretUpSharp } from 'react-icons/io5';
import states from '@/data/states.json'; // Ensure you have a flights.json file
import { MdError } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';

export default function PaymentState({ register, errors, setValue }) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [selectedState, setSelectedState] = useState(states[1]);

  useEffect(() => {
    setValue(`payment.billingInfo.state`, states[1]); // Register input value
  }, [setValue]);

  const [startIndex, setStartIndex] = useState(0); // Track visible states
  const dropdownRef = useRef(null);
  const visibleCount = 10; // Number of visible items

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

  // Handle option selection
  const handleSelect = (state) => {
    setSelectedState(state);
    setValue(`payment.billingInfo.state`, state); // Register input value
    setIsDropDownOpen(false);
  };

  // Move suffix list up
  const handleScrollUp = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  // Move suffix list down
  const handleScrollDown = () => {
    if (startIndex + visibleCount < states.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  return (
    <div ref={dropdownRef} className="relative">
      <div className="relative flex flex-col">
        <span className="pb-[8px] text-[11px] font-bold uppercase text-gray-sw">
          state <span className="text-red-600">*</span>
        </span>
        <div>
          {/* Hidden Input Field (for React Hook Form) */}
          <input type="hidden" {...register(`payment.billingInfo.state`)} />
        </div>
        {/* Custom Select Button */}
        <button
          type="button"
          className={`flex h-[32px] w-[149px] ${
            errors?.payment?.billingInfo?.state
              ? 'border border-red-600'
              : 'box-shadow-sw hover:border hover:border-black-sw'
          } ${
            isDropDownOpen
              ? 'border-black-sw'
              : 'box-shadow-sw hover:border hover:border-black-sw'
          } items-center justify-between rounded-sm border px-[7px] py-[3px] leading-none text-black-sw transition-all`}
          onClick={() => setIsDropDownOpen(!isDropDownOpen)}
        >
          <span className="text-[13px]">{selectedState || 'Select'}</span>
          <span>
            {errors?.payment?.billingInfo?.state ? (
              <MdError size={20} className="text-red-600" />
            ) : (
              <IoCaretDownSharp className="text-lg text-blue-sw" />
            )}
          </span>
        </button>
        <span className="h-4 text-sm">
          {errors?.payment?.billingInfo?.state && (
            <span className="text-[11px] text-red-600">
              {errors.payment.billingInfo.state.message?.toString()}
            </span>
          )}
        </span>
      </div>

      {/* Dropdown List */}
      {isDropDownOpen && (
        <>
          <div className="absolute -left-12 bottom-[4.2rem] z-50 w-[324px] rounded-sm border bg-white shadow-lg shadow-gray-400">
            <ul className="-mb-6 p-[10px]">
              {/* Upper arrow (Disabled at top) */}
              <div
                className={`mb-5 flex w-full items-center justify-center ${
                  startIndex === 0
                    ? 'cursor-not-allowed opacity-50'
                    : 'cursor-pointer'
                }`}
                onClick={handleScrollUp}
              >
                <span>
                  <IoCaretUpSharp className="text-lg text-blue-sw" />
                </span>
              </div>

              {/* Suffix options (Show only 4 at a time) */}
              {states
                .slice(startIndex, startIndex + visibleCount)
                .map((state) => (
                  <li
                    key={uuidv4()}
                    className={`cursor-pointer gap-2 px-2 py-1 transition-all duration-300 ${
                      selectedState === state
                        ? 'bg-[#e6e7e8]'
                        : 'hover:bg-[#e6e7e8]'
                    }`}
                    onClick={() => handleSelect(state)}
                  >
                    <span className="text-[16px] text-blue-sw">{state}</span>
                  </li>
                ))}

              {/* Lower arrow (Disabled at bottom) */}
              <div
                className={`mt-5 flex w-full items-center justify-center ${
                  startIndex + visibleCount >= states.length
                    ? 'cursor-not-allowed opacity-50'
                    : 'cursor-pointer'
                }`}
                onClick={handleScrollDown}
              >
                <span>
                  <IoCaretDownSharp className="text-lg text-blue-sw" />
                </span>
              </div>
            </ul>

            <div className="relative -bottom-4 left-36">
              <IoCaretDownSharp className="text-2xl text-white" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
