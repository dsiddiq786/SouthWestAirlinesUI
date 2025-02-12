import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function ImportantFare() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        {/* Fare Benefits */}
        <span className="text-[16px] text-gray-sw">
          Important fare and schedule information
        </span>
        {/* dropdown icon */}
        <button
          className="mx-4"
          onClick={() => setIsDropDownOpen(!isDropDownOpen)}
        >
          {isDropDownOpen ? (
            <FaChevronUp size={25} className="text-[#636363]" />
          ) : (
            <FaChevronDown size={25} className="text-[#636363]" />
          )}
        </button>
      </div>

      {/* Details */}
      {isDropDownOpen && (
        <ul className="flex list-outside list-disc flex-col px-10 pt-6 text-[14px] text-gray-sw">
          <li>
            All fares and fare ranges are subject to change until purchased and
            are per person for each way of travel.
          </li>
          <li>
            Flight ontime performance statistics can be viewed by clicking on
            the individual flight numbers.
          </li>
          <li>
            "Unavailable" indicates the corresponding fare is unavailable for
            the selected dates, the search did not meet certain fare
            requirements, or the flight has already departed.
          </li>
          <li>
            "Invalid w/ Depart or Return Dates" indicates that our system cannot
            return a valid itinerary option(s) with the search criteria
            submitted. These itineraries may become valid options if you search
            with a different depart or return date and/or for a one-way flight
            instead.
          </li>
        </ul>
      )}
    </div>
  );
}
