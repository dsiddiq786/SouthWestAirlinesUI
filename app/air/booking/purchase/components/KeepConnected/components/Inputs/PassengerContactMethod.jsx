import { useEffect, useRef, useState } from 'react';
import { IoCaretDownSharp, IoCaretUpSharp } from 'react-icons/io5';
import { v4 as uuidv4 } from 'uuid';

export default function PassengerContactMethod({
  register,
  setValue,
  errors,
  clearErrors,
}) {
  const contactMethods = ['Email me', 'Text me', 'Call me (automated)'];
  setValue(`contactDetails.contactMethod`, contactMethods[1]); // Register input value

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [selectedContactMethod, setSelectedContactMethod] = useState(
    contactMethods[1]
  );

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
  const handleSelect = (contactMethod) => {
    setSelectedContactMethod(contactMethod);
    setValue(`contactDetails.contactMethod`, contactMethod); // Register input value
    clearErrors(`contactDetails.contactMethod`);
    setIsDropDownOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative">
      <div className="relative flex flex-col">
        <span className="pb-[8px] text-[11px] font-bold text-gray-sw">
          CONTACT METHOD <span className="text-red-600">*</span>
        </span>
        <div>
          {/* Hidden Input Field (for React Hook Form) */}
          <input
            type="hidden"
            {...register(`contactDetails.contactMethod`, {
              required: 'Select contact method.',
            })}
          />
        </div>
        {/* Custom Select Button */}
        <button
          type="button"
          className={`flex h-[32px] w-[388px] ${
            errors?.contactDetails?.contactMethod
              ? 'border border-red-600'
              : 'box-shadow-sw hover:border hover:border-black-sw'
          } ${
            isDropDownOpen
              ? 'border-black-sw'
              : 'box-shadow-sw hover:border hover:border-black-sw'
          } items-center justify-between rounded-sm border px-[7px] py-[3px] leading-none text-black-sw transition-all`}
          onClick={() => setIsDropDownOpen(!isDropDownOpen)}
        >
          <span className="text-[13px]">
            {selectedContactMethod || 'Select'}
          </span>
          <span>
            {errors?.contactDetails?.contactMethod ? (
              <MdError size={20} className="text-red-600" />
            ) : (
              <IoCaretDownSharp className="text-lg text-blue-sw" />
            )}
          </span>
        </button>
        <span className="h-4 text-sm">
          {errors?.contactDetails?.contactMethod && (
            <span className="text-[11px] text-red-600">
              {errors.contactDetails.contactMethod.message?.toString()}
            </span>
          )}
        </span>
      </div>

      {/* Dropdown List */}
      {isDropDownOpen && (
        <>
          <div className="absolute bottom-[4.2rem] left-24 z-50 w-[224px] rounded-sm border bg-white shadow-lg shadow-gray-400">
            <ul className="-mb-6 p-[10px]">
              {/* Suffix options (Show only 4 at a time) */}
              {contactMethods.map((contactMethod) => (
                <li
                  key={uuidv4()}
                  className={`cursor-pointer gap-2 px-2 py-1 transition-all duration-300 ${
                    selectedContactMethod === contactMethod
                      ? 'bg-[#e6e7e8]'
                      : 'hover:bg-[#e6e7e8]'
                  }`}
                  onClick={() => handleSelect(contactMethod)}
                >
                  <span className="text-[16px] text-blue-sw">
                    {contactMethod}
                  </span>
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
