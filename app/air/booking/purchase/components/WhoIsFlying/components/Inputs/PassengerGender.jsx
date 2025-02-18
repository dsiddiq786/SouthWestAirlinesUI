import { useEffect, useRef, useState } from 'react';
import { IoCaretDownSharp, IoCaretUpSharp } from 'react-icons/io5';
import { MdError } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';

export default function PassengerGender({
  register,
  passenger,
  setValue,
  errors,
  clearErrors,
}) {
  const genders = [
    'Select',
    'Male (M)',
    'Female (F)',
    'Undisclosed (U)',
    'Unspecified (X)',
  ];

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [selectedGender, setSelectedGender] = useState('');
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

  // Handle option selection
  const handleSelect = (gender) => {
    setSelectedGender(gender);
    setValue(`passengers.${passenger.passengerNo}.gender`, gender); // Register input value
    clearErrors(`passengers.${passenger.passengerNo}.gender`);
    setIsDropDownOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative">
      <div className="relative flex flex-col">
        <span className="pb-[8px] text-[11px] font-bold text-gray-sw">
          GENDER <span className="text-red-600">*</span>
        </span>
        <div>
          {/* Hidden Input Field (for React Hook Form) */}
          <input
            type="hidden"
            {...register(`passengers.${passenger.passengerNo}.gender`, {
              required: 'Select gender.',
            })}
          />
        </div>
        {/* Custom Select Button */}
        <button
          type="button"
          className={`flex h-[32px] w-[208px] ${
            errors?.passengers?.[passenger.passengerNo]?.gender
              ? 'border border-red-600'
              : 'box-shadow-sw hover:border hover:border-black-sw'
          } ${
            isDropDownOpen
              ? 'border-black-sw'
              : 'box-shadow-sw hover:border hover:border-black-sw'
          } items-center justify-between rounded-sm border px-[7px] py-[3px] leading-none text-black-sw transition-all`}
          onClick={() => setIsDropDownOpen(!isDropDownOpen)}
        >
          <span className="text-[13px]">{selectedGender || 'Select'}</span>
          <span>
            {errors?.passengers?.[passenger.passengerNo]?.gender ? (
              <MdError size={20} className="text-red-600" />
            ) : (
              <IoCaretDownSharp className="text-lg text-blue-sw" />
            )}
          </span>
        </button>
        <span className="h-4 text-sm">
          {errors?.passengers?.[passenger.passengerNo]?.gender && (
            <span className="text-[11px] text-red-600">
              {errors.passengers[
                passenger.passengerNo
              ].gender.message?.toString()}
            </span>
          )}
        </span>
      </div>

      {/* Dropdown List */}
      {isDropDownOpen && (
        <>
          <div className="absolute -left-2 bottom-[4.2rem] z-50 w-[224px] rounded-sm border bg-white shadow-lg shadow-gray-400">
            <ul className="-mb-6 p-[10px]">
              {/* Suffix options (Show only 4 at a time) */}
              {genders.map((gender) => (
                <li
                  key={uuidv4()}
                  className={`cursor-pointer gap-2 px-2 py-1 transition-all duration-300 ${
                    selectedGender === gender
                      ? 'bg-[#e6e7e8]'
                      : 'hover:bg-[#e6e7e8]'
                  }`}
                  onClick={() => handleSelect(gender)}
                >
                  <span className="text-[16px] text-blue-sw">{gender}</span>
                </li>
              ))}
            </ul>

            <div className="relative -bottom-4 left-24">
              <IoCaretDownSharp className="text-2xl text-white" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
