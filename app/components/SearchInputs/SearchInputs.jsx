import React from 'react';

import SelectionBar from './components/SelectionBar';
import InputBox from './components/InputBox';

export default function SearchInputs() {
  return (
    <div className="flex flex-col">
      {/* Selection bar */}
      <div>
        <SelectionBar />
      </div>

      {/* Inputs */}
      <div>
        <InputBox />
      </div>
    </div>
  );
}
