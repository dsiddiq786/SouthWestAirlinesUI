import React from 'react';
import RecentSearches from './Inputs/RecentSearches';

export default function InputBox() {
  return (
    <div className="flex flex-col px-[20px] pt-[16px]">
      {/* Recent searches, trip, fees */}
      <div className="flex items-center justify-between">
        {/* recent, trip */}
        <div>
          {/* Recent */}
          <RecentSearches />
        </div>

        {/* fees */}
        <div></div>
      </div>
    </div>
  );
}
