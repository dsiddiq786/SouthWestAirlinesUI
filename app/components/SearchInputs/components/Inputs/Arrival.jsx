import { BsInfoCircleFill } from 'react-icons/bs';
import { useEffect, useRef, useState } from 'react';
import { IoCaretDownSharp } from 'react-icons/io5';

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
    <div ref={dropdownRef} className="relative flex flex-col">
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
          <div className="absolute -right-24 bottom-[5.7rem] z-50 w-[200%] rounded-sm border bg-white shadow-lg shadow-gray-400 xl:w-[230%]">
            <div className="max-h-64 w-full overflow-y-scroll px-3 pt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet a
              odio placeat neque architecto iure earum atque natus quos labore,
              sint ad impedit distinctio quas ea quod minus veritatis quidem
              unde! Obcaecati sunt dolorem provident quidem odio corrupti
              explicabo eum aperiam quo hic, blanditiis minima dolores! Debitis
              quam autem reiciendis ducimus minus eum fuga dicta facere nihil,
              ipsa repellat sapiente culpa quis quasi et, fugiat distinctio
              dignissimos. Dicta in fugit dolorem optio esse ex. Ipsum assumenda
              perspiciatis ab praesentium in dolorem. Doloremque earum ea
              corporis a iste consequuntur voluptatem inventore dolor mollitia
              accusantium? Quam ea nam cumque. Unde, in enim?
            </div>
            <div className="relative -bottom-4 left-56">
              <IoCaretDownSharp className="text-2xl text-white" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
