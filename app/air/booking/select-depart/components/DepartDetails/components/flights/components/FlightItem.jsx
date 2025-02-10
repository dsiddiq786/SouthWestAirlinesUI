import { IoIosAirplane } from 'react-icons/io';
import FlightDetails from './FlightDetails';
import { useFlights } from '@/context/FlightContext';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useState } from 'react';

export default function FlightItem({ departure, arrival, flights }) {
  const { codeDetailsWithCityState, filteredFlights } = useFlights();

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  return (
    <>
      {filteredFlights.length > 1 ? (
        <li>
          <div className="flex items-center justify-between bg-[#f5f5f5] px-[30px] py-[15px]">
            {/* Depart info */}
            <div className="flex items-start gap-[10px]">
              {/* depart icon */}
              <div className="relative mt-1 -rotate-45 rounded-full bg-black-sw p-[5px]">
                <IoIosAirplane size={20} className="text-white" />
              </div>
              {/* Depart and arrive codes */}
              <div className="flex flex-col gap-[16px] leading-none">
                {/* upper codes */}
                <div className="flex items-center gap-2 text-[26px] font-bold text-black-sw">
                  {/* Depart Codes */}
                  <span>{departure}</span>
                  {/* flight icon */}
                  <span>
                    <IoIosAirplane size={20} className="text-[#a4baf2]" />
                  </span>
                  {/* Arrival Codes */}
                  <span>{arrival}</span>
                </div>
                {/* lower detailed codes */}
                <div className="text-[16px] text-black-sw">
                  {/* Depart code */}
                  <span className="">
                    {codeDetailsWithCityState.filter((detail) => {
                      return detail.includes(departure);
                    })}
                  </span>{' '}
                  to {/* Arrival Codes */}
                  <span>
                    {codeDetailsWithCityState.filter((detail) => {
                      return detail.includes(arrival);
                    })}
                  </span>
                </div>
              </div>
            </div>
            {/* Dropdown button */}
            <button onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
              <span>
                {isDropDownOpen ? (
                  <FaChevronUp size={30} className="text-[#636363]" />
                ) : (
                  <FaChevronDown size={30} className="text-[#636363]" />
                )}
              </span>
            </button>
          </div>
          {isDropDownOpen && <FlightDetails flights={flights} />}
        </li>
      ) : (
        <li>
          <FlightDetails flights={flights} />
        </li>
      )}
    </>
  );
}
