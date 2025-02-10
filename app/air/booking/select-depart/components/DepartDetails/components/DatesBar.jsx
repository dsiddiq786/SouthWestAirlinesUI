import { useFlights } from '@/context/FlightContext';
import { BiCalendar } from 'react-icons/bi';
import { FaAngleRight } from 'react-icons/fa';
import { format, isValid, parseISO } from 'date-fns'; // Import date-fns for formatting
import { useState } from 'react';
import { today, getLocalTimeZone } from '@internationalized/date';

export default function DatesBar() {
  const { departDate } = useFlights();

  // Ensure departDate is a valid Date object
  const validDepartDate = isValid(departDate) ? departDate : new Date(); // Fallback to today's date if departDate is invalid

  const [selectedDate, setSelectedDate] = useState(validDepartDate); // Track selected date

  // Generate an array of the next 4 dates (including departDate)
  const dates = Array.from({ length: 5 }, (_, i) => {
    const date = new Date(
      departDate ? departDate : today(getLocalTimeZone()).toString()
    );
    date.setDate(date.getDate() + i); // Add i days
    return {
      fullDate: format(date, 'yyyy-MM-dd'), // Format fullDate as YYYY-MM-DD
      day: format(date, 'EEE'), // Short day (e.g., SAT)
      month: format(date, 'MMM'), // Short month (e.g., Feb)
      dayNumber: format(date, 'dd'), // Day number (e.g., 08)
    };
  });

  return (
    <div className="flex justify-between">
      {/* Dates */}
      <div className="grid flex-1 auto-cols-fr grid-flow-col">
        {dates.map((dateObj) => (
          <button
            key={dateObj.fullDate}
            onClick={() => setSelectedDate(dateObj.fullDate)}
            className={`ml-[1px] flex flex-col items-center justify-center gap-[2px] px-3 py-2 leading-none text-black-sw ${
              departDate === dateObj.fullDate
                ? 'border-t-[3px] border-[#304cb2]' // Highlight selected date
                : 'bg-[#e8ecf9]'
            }`}
          >
            <span className="text-[11px] uppercase">{dateObj.day}</span>
            <span className="text-[16px] font-bold">
              {dateObj.month} {dateObj.dayNumber}
            </span>
          </button>
        ))}
      </div>

      {/* other details */}
      <div className="flex">
        {/* low fare calender */}
        <div className="ml-[1px] flex items-center bg-[#008020] px-5">
          <button className="group/lowCalender flex items-center gap-2 text-white">
            {/* calender icon */}
            <span>
              <BiCalendar size={25} />
            </span>
            <span className="text-[13px] font-bold leading-none group-hover/lowCalender:underline">
              Low Fare <br /> Calender
            </span>
          </button>
        </div>

        {/* apply now */}
        <button className="group/applyNow relative flex justify-between gap-2 bg-[#304cb2] px-2 pb-[16px] pt-2 text-white">
          {/* credit and poitns */}
          <div className="flex flex-col gap-1 font-swSans text-[16px] leading-tight">
            <span>
              <strong>$300</strong> statement credit
            </span>

            <span className="-ml-5">
              and <strong>10,000</strong> points.
            </span>
          </div>
          <div>
            <img
              src="/images/select-depart/sw-card.png"
              className="w-12"
              alt=""
            />
          </div>
          <span className="absolute bottom-[2px] right-0 flex items-center gap-1 text-[9px] font-bold group-hover/applyNow:underline">
            Apply now{' '}
            <span>
              <FaAngleRight size={10} />
            </span>
          </span>
        </button>
      </div>
    </div>
  );
}
