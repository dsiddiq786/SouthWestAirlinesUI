import { useState, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export function useDepartFlight() {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  // Price variants with corresponding points
  const priceVariants = [
    { variant: 'Business Select', points: '5,193' },
    { variant: 'Anytime', points: '3,863' },
    { variant: 'Wanna Get Away plus', points: '2,398' },
    { variant: 'Wanna Get Away', points: '1,687' },
  ];

  // State to track selected flight
  const [selectedDepartFlight, setSelectedDepartFlight] = useState(null);
  //   console.log(selectedDepartFlight);
  const updateDepartFlightURL = (flight, price) => {
    const departFlight = {
      flightId: flight.id,
      price: price,
    };
    const params = new URLSearchParams(searchParams);
    console.log(departFlight);
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
      flight: [flight],
      price: priceVariants[variantIndex],
    });
    updateDepartFlightURL(flight, priceVariants[variantIndex]);
  };

  // Function to update the URL

  useEffect(() => {
    if (pathname === '/') {
      setSelectedDepartFlight(null);
    }
  }, [pathname]);

  return {
    priceVariants,
    selectedDepartFlight,
    setSelectedDepartFlight,
    handlePriceSelection,
    updateDepartFlightURL,
  };
}
