import React from 'react';
import DepartInfo from './components/DepartInfo';
import DatesBar from './components/DatesBar';
import Flights from './components/flights/Flights';

export default function DepartDetails() {
  return (
    <section>
      {/* Upper info div */}
      <DepartInfo />

      {/* Dates Bar */}
      <div className="mb-[20px] mt-[28px]">
        <DatesBar />
      </div>

      {/* Flights */}
      <div>
        <Flights />
      </div>
    </section>
  );
}
