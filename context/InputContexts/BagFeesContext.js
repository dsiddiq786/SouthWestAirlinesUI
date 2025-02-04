import { useState } from 'react';

export function useBagFees() {
  // Bag fees options
  const bagFeeOptions = ['Dollars', 'Points'];

  // State to manage the selected bag fee type
  const [selectedBagFee, setSelectedBagFee] = useState(bagFeeOptions[0]); // Default to "Dollars"

  return {
    bagFeeOptions,
    selectedBagFee,
    setSelectedBagFee,
  };
}
