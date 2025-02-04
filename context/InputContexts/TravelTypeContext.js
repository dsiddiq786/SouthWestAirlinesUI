import { useState } from 'react';

export function useTravelType() {
  // Travel type options
  const travelTypeOptions = ['Round Trip', 'One-way'];

  // State to manage the selected travel type
  const [selectedTravelType, setSelectedTravelType] = useState(
    travelTypeOptions[0]
  ); // Default to "Round Trip"

  return {
    travelTypeOptions,
    selectedTravelType,
    setSelectedTravelType,
  };
}
