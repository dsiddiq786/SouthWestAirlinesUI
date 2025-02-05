import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useFlights } from '@/context/FlightContext';

const PassengerSelector = () => {
  const {
    passengerTypes,
    passengerCounts,
    handleIncrement,
    handleDecrement,
    totalPassengers,
  } = useFlights();

  return (
    <div className="-mb-5">
      {passengerTypes.map((passenger) => (
        <div
          key={passenger.id}
          className="flex items-center justify-between border-b p-2 last:border-none"
        >
          <div>
            <h3 className="text-[16px] font-bold text-blue-sw">
              {passenger.label}
            </h3>
            <p className="text-[13px] text-gray-sw">{passenger.age}</p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => handleDecrement(passenger.id, passenger.min)}
              className={`flex items-center justify-center rounded-full p-1 ${
                passengerCounts[passenger.id] === passenger.min
                  ? 'bg-[#8f8f8f] text-white'
                  : 'bg-blue-sw text-white'
              }`}
              disabled={passengerCounts[passenger.id] === passenger.min}
            >
              <FaMinus size={13} />
            </button>
            <span className="text-center text-[26px] font-bold text-black-sw">
              {passengerCounts[passenger.id]}
            </span>
            <button
              onClick={() => handleIncrement(passenger.id)}
              className={`flex items-center justify-center rounded-full p-1 ${
                totalPassengers >= 10
                  ? 'bg-[#8f8f8f] text-white'
                  : 'bg-blue-sw text-white'
              }`}
              disabled={totalPassengers >= 10}
            >
              <FaPlus size={13} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PassengerSelector;
