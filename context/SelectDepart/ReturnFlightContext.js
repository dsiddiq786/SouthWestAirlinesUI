import { useState, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export function useReturnFlight() {
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
      colorCode: '#304cb2',
    },
    {
      variant: 'Anytime',
      points: '3,863',
      class: 'rounded-b-none border-none bg-[#a4baf2] text-black-sw',
      bottomBackground: 'bg-[#a4baf2]',
      colorCode: '#a4baf2',
    },
    {
      variant: 'Wanna Get Away plus',
      points: '2,398',
      class: 'rounded-b-none  bg-[#f5f5f5] text-black-sw',
      bottomBackground: 'bg-[#f5f5f5]',
      colorCode: '#f5f5f5',
    },
    {
      variant: 'Wanna Get Away',
      points: '1,687',
      class: 'rounded-b-none border-none bg-[#ffbf27] text-black-sw',
      bottomBackground: 'bg-[#ffbf27]',
      colorCode: '#ffbf27',
    },
  ];

  // State to track selected return flight
  const [selectedReturnFlight, setSelectedReturnFlight] = useState(null);

  const updateReturnFlightURL = (flight, variant) => {
    const returnFlight = {
      flightId: flight.id,
      price: variant,
    };
    const params = new URLSearchParams(searchParams);
    params.set(
      'returnFlight',
      encodeURIComponent(JSON.stringify(returnFlight))
    );

    replace(`?${params.toString()}`, { scroll: false }); // Update URL without reload
  };

  // Handles price selection and updates state
  const handleReturnPriceSelection = (flight, variantIndex) => {
    if (!flight || variantIndex < 0 || variantIndex >= priceVariants.length) {
      console.warn('Invalid flight or variant index'); // Debugging safeguard
      return;
    }

    setSelectedReturnFlight({
      flight: flight,
      price: priceVariants[variantIndex].variant,
    });
    updateReturnFlightURL(flight, priceVariants[variantIndex].variant);
  };

  //   Continue button click handle
  const handleReturnContinueClick = () => {
    if (selectedReturnFlight) {
      const params = new URLSearchParams(searchParams);
      router.push(`/air/booking/price?${params.toString()}`);
    }
  };

  // Clear the return flight selection
  const clearReturnFlightSelection = () => {
    setSelectedReturnFlight(null);

    // Remove 'returnFlight' from URL params
    const params = new URLSearchParams(searchParams);
    params.set('returnFlight', null);

    replace(`?${params.toString()}`, { scroll: false });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (pathname === '/') {
      setSelectedReturnFlight(null);
    }
  }, [pathname]);

  return {
    selectedReturnFlight,
    setSelectedReturnFlight,
    handleReturnPriceSelection,
    updateReturnFlightURL,
    clearReturnFlightSelection,
    handleReturnContinueClick,
  };
}
