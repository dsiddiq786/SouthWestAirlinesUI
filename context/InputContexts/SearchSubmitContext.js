import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function useSearchSubmit(selectedDepartCodes, selectedArriveCodes) {
  const router = useRouter();

  // State for checking if Depart and Arrive selections are empty
  const [isDepartEmpty, setIsDepartEmpty] = useState(false);
  const [isArriveEmpty, setIsArriveEmpty] = useState(false);

  // Check if the search button is clicked
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  // Function to check selections and update URL params
  const checkSearchSubmit = () => {
    setIsSearchClicked(true);
    setIsDepartEmpty(selectedDepartCodes.length === 0);
    setIsArriveEmpty(selectedArriveCodes.length === 0);

    // Create search params
    const params = new URLSearchParams();
    if (selectedDepartCodes.length > 0 && selectedArriveCodes.length > 0) {
      params.set('departCodes', selectedDepartCodes.join(','));
      params.set('arriveCodes', selectedArriveCodes.join(','));
      // Navigate to the flights page with search params
      router.push(`/air/booking/select-depart?${params.toString()}`);
    }
  };

  return {
    isSearchClicked,
    setIsSearchClicked,
    isDepartEmpty,
    setIsDepartEmpty,
    isArriveEmpty,
    setIsArriveEmpty,
    checkSearchSubmit,
  };
}
