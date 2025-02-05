import React, { useState } from 'react';
import {
  addMonths,
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
  parseISO,
} from 'date-fns';
import {
  FaChevronLeft,
  FaChevronRight,
  FaRegCalendarAlt,
} from 'react-icons/fa';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDeparture, setSelectedDeparture] = useState(null);
  const [selectedReturn, setSelectedReturn] = useState(null);

  // Move to next month
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  // Move to previous month
  const prevMonth = () => setCurrentMonth(addMonths(currentMonth, -1));

  // Handle date selection for departure and return
  const handleDateClick = (day) => {
    if (!selectedDeparture || (selectedDeparture && selectedReturn)) {
      setSelectedDeparture(day);
      setSelectedReturn(null);
    } else {
      setSelectedReturn(day);
    }
  };

  // Generate calendar days
  const renderDays = (month) => {
    const monthStart = startOfMonth(month);
    const monthEnd = endOfMonth(month);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const isDeparture =
          selectedDeparture && isSameDay(day, selectedDeparture);
        const isReturn = selectedReturn && isSameDay(day, selectedReturn);
        const isInRange =
          selectedDeparture &&
          selectedReturn &&
          day > selectedDeparture &&
          day < selectedReturn;

        days.push(
          <div
            key={day}
            className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full ${!isSameMonth(day, month) ? 'text-gray-400' : 'text-blue-900'} ${isDeparture ? 'bg-blue-600 text-white' : ''} ${isReturn ? 'bg-green-600 text-white' : ''} ${isInRange ? 'bg-gray-300' : ''} hover:bg-blue-200`}
            onClick={() => handleDateClick(day)}
          >
            {format(day, 'd')}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7 gap-1" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return rows;
  };

  return (
    <div className="">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-3">
        <h2 className="text-lg font-bold text-blue-900">Depart date</h2>
      </div>

      {/* Navigation */}
      <div className="my-4 flex items-center justify-between">
        <button
          onClick={prevMonth}
          className="rounded-full p-2 text-blue-900 hover:bg-gray-200"
        >
          <FaChevronLeft size={18} />
        </button>
        <h3 className="text-xl font-bold text-gray-600">
          {format(currentMonth, 'MMMM yyyy')}
        </h3>
        <button
          onClick={nextMonth}
          className="rounded-full p-2 text-blue-900 hover:bg-gray-200"
        >
          <FaChevronRight size={18} />
        </button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-center font-bold text-gray-500">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
          <div key={day} className="flex h-10 w-10 items-center justify-center">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      {renderDays(currentMonth)}

      {/* Selected Dates Display */}
      <div className="mt-4 p-2 text-center text-sm">
        <p className="font-semibold text-gray-600">
          Selected Departure:{' '}
          {selectedDeparture
            ? format(selectedDeparture, 'MMM dd, yyyy')
            : 'None'}
        </p>
        <p className="font-semibold text-gray-600">
          Selected Return:{' '}
          {selectedReturn ? format(selectedReturn, 'MMM dd, yyyy') : 'None'}
        </p>
      </div>
    </div>
  );
};

export default Calendar;
