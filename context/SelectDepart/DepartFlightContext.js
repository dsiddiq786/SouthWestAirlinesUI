import { useState, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export function useDepartFlight(returnDate) {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const router = useRouter();

  // Price variants with corresponding points
  const priceVariants = [
    {
      variant: 'Business Select',
      points: '5,193',
      class: 'rounded-b-none border-none bg-blue-sw text-white',
      bottomBackground: 'bg-[#304cb2]',
      decoration: 'decoration-[#304cb2]',
    },
    {
      variant: 'Anytime',
      points: '3,863',
      class: 'rounded-b-none border-none bg-[#a4baf2] text-black-sw',
      bottomBackground: 'bg-[#a4baf2]',
      decoration: 'decoration-[#a4baf2]',
    },
    {
      variant: 'Wanna Get Away plus',
      points: '2,398',
      class: 'rounded-b-none  bg-[#f5f5f5] text-black-sw',
      bottomBackground: 'bg-[#f5f5f5]',
      decoration: 'decoration-[#f5f5f5]',
    },
    {
      variant: 'Wanna Get Away',
      points: '1,687',
      class: 'rounded-b-none border-none bg-[#ffbf27] text-black-sw',
      bottomBackground: 'bg-[#ffbf27]',
      decoration: 'decoration-[#ffbf27]',
    },
  ];

  // state to store which flight item should be open
  const [openDepartDropdown, setDepartOpenDropdownId] = useState(null);
  // Handle drop down function open/close using the id of flightItem
  const handleDepartDropDown = (id) => {
    setDepartOpenDropdownId((prevId) => (prevId === id ? null : id)); // Toggle the dropdown for the specific id
  };

  // State to track selected flight
  const [selectedDepartFlight, setSelectedDepartFlight] = useState(null);
  const updateDepartFlightURL = (flight, variant) => {
    const departFlight = {
      flightId: flight.id,
      price: variant,
    };
    const params = new URLSearchParams(searchParams);
    params.set(
      'departFlight',
      encodeURIComponent(JSON.stringify(departFlight))
    );

    replace(`?${params.toString()}`, { scroll: false }); // Update URL without reload
  };

  // Handles price selection and updates state
  const handlePriceSelection = (flight, variantIndex) => {
    if (!flight || variantIndex < 0 || variantIndex >= priceVariants.length) {
      console.warn('Invalid flight or variant index'); // Debugging safeguard
      return;
    }

    setSelectedDepartFlight({
      flight: flight,
      price: priceVariants[variantIndex].variant,
    });
    updateDepartFlightURL(flight, priceVariants[variantIndex].variant);
  };

  const [isDepartContinueBtnClicked, setIsDepartContinueBtnClicked] =
    useState(false);

  const handleContinueClick = () => {
    if (selectedDepartFlight) {
      if (returnDate) {
        setIsDepartContinueBtnClicked(true);
        const params = new URLSearchParams(searchParams);
        params.set('isReturnFlight', isDepartContinueBtnClicked);

        replace(`?${params.toString()}`, { scroll: false });
      } else {
        const params = new URLSearchParams(searchParams);
        router.push(`/air/booking/price?${params.toString()}`);
      }
    }
  };

  // Clear the flight selection
  const clearDepartFlightSelection = () => {
    setSelectedDepartFlight(null);
    setDepartOpenDropdownId(null);

    // Remove 'departFlight' from URL params
    const params = new URLSearchParams(searchParams);
    params.set('departFlight', null);

    replace(`?${params.toString()}`, { scroll: false });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (pathname === '/') {
      setSelectedDepartFlight(null);
      setDepartOpenDropdownId(null);
      setIsDepartContinueBtnClicked(false);
    }
  }, [pathname]);

  return {
    priceVariants,
    selectedDepartFlight,
    setSelectedDepartFlight,
    handlePriceSelection,
    updateDepartFlightURL,
    openDepartDropdown,
    setDepartOpenDropdownId,
    handleDepartDropDown,
    clearDepartFlightSelection,
    isDepartContinueBtnClicked,
    setIsDepartContinueBtnClicked,
    handleContinueClick,
  };
}
