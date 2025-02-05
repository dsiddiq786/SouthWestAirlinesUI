import React from 'react';
import RecentSearches from './Inputs/RecentSearches';
import TravelTypes from './Inputs/TravelTypes';
import BagFees from './Inputs/BagFees';
import Departure from './Inputs/Departure';
import Arrival from './Inputs/Arrival';
import { RiExchangeLine } from 'react-icons/ri';
import DepartDate from './Inputs/DepartDate';
import ReturnDate from './Inputs/ReturnDate';
import Passengers from './Inputs/Passengers';
import BottomBar from './Inputs/BottomBar';

export default function InputBox() {
  return (
    <div className="flex flex-col bg-white pt-[16px]">
      <div className="px-[20px]">
        {/* Recent searches, travel types, fees */}
        <div className="flex items-center justify-between">
          {/* recent, Travel types */}
          <div className="flex items-center gap-6">
            {/* Recent */}
            <RecentSearches />
            {/* Travel Types */}
            <TravelTypes />
          </div>
          {/* fees */}
          <div>
            <BagFees />
          </div>
        </div>

        {/* Depart, arrive, date, passenger */}
        <div className="mt-3 flex items-start justify-between">
          {/* depart and arrive */}
          <div className="relative flex shrink items-center">
            <div className="z-10 -mr-2">
              <Departure />
            </div>
            <button className="z-20 bg-white">
              <RiExchangeLine className="text-2xl text-blue-sw" />
            </button>
            <div className="z-10 -ml-2">
              <Arrival />
            </div>
          </div>
          {/* Depart and return date */}
          <div className="flex shrink items-center gap-2">
            <DepartDate />
            <ReturnDate />
          </div>
          {/* Passengers */}
          <div>
            <Passengers />
          </div>
        </div>
        {/* Details, promo code and search */}
      </div>
      <div className="mt-4 w-full">
        <BottomBar />
      </div>
    </div>
  );
}
