import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { formatDate } from '@/utils/formatDate';

export function useSearchSubmit(
  selectedDepartCodes,
  selectedArriveCodes,
  selectedTravelType,
  selectedBagFee,
  totalPassengers,
  departDate,
  returnDate,
  travelTypeOptions
) {
  const router = useRouter();

  // State for checking if Depart and Arrive selections are empty
  const [isDepartEmpty, setIsDepartEmpty] = useState(false);
  const [isArriveEmpty, setIsArriveEmpty] = useState(false);
  const [isDepartDateEmpty, setIsDepartDateEmpty] = useState(false);
  const [isReturnDateEmpty, setIsReturnDateEmpty] = useState(false);

  // Check if the search button is clicked
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  // Function to check selections and update URL params
  const checkSearchSubmit = () => {
    setIsSearchClicked(true);
    setIsDepartEmpty(selectedDepartCodes.length === 0);
    setIsArriveEmpty(selectedArriveCodes.length === 0);
    setIsDepartDateEmpty(departDate ? false : true);
    setIsReturnDateEmpty(returnDate ? false : true);

    // Create search params
    const params = new URLSearchParams();
    if (
      selectedDepartCodes.length > 0 &&
      selectedArriveCodes.length > 0 &&
      selectedTravelType &&
      selectedBagFee &&
      departDate
    ) {
      if (selectedTravelType === travelTypeOptions[0] && returnDate) {
        params.set('departCodes', selectedDepartCodes.join(','));
        params.set('arriveCodes', selectedArriveCodes.join(','));
        params.set('travelType', selectedTravelType);
        params.set('bagFee', selectedBagFee);
        params.set('totalPassengers', totalPassengers);
        params.set('departDate', departDate);
        params.set('returnDate', returnDate);

        // Navigate to the flights page with search params
        router.push(`/air/booking/select-depart?${params.toString()}`);
      }
      if (selectedTravelType === travelTypeOptions[1]) {
        params.set('departCodes', selectedDepartCodes.join(','));
        params.set('arriveCodes', selectedArriveCodes.join(','));
        params.set('travelType', selectedTravelType);
        params.set('bagFee', selectedBagFee);
        params.set('totalPassengers', totalPassengers);
        params.set('departDate', departDate);

        // Navigate to the flights page with search params
        router.push(`/air/booking/select-depart?${params.toString()}`);
      }
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
    isDepartDateEmpty,
    setIsDepartDateEmpty,
    isReturnDateEmpty,
    setIsReturnDateEmpty,
  };
}
