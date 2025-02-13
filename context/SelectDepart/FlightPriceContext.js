import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export function useFlightPrice(
  selectedDepartFlight,
  selectedReturnFlight,
  totalPassengers,
  priceVariants
) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [flightBaseFare, setFlightBaseFare] = useState(0);
  const Tax = 91.74;
  const [TotalFlightPrice, setTotalFlightPrice] = useState(
    flightBaseFare + Tax
  );

  // Get price index for depart flight
  const departFlightPriceIndex = priceVariants.findIndex(
    (variant) => variant.variant === selectedDepartFlight?.price
  );

  // Get price at that index
  const departFlightPrice =
    departFlightPriceIndex !== -1
      ? Number(
          selectedDepartFlight?.flight?.metadata?.prices[departFlightPriceIndex]
        )
      : 0; // Convert string to number

  // Get price index for return flight
  const returnFlightPriceIndex = priceVariants.findIndex(
    (variant) => variant.variant === selectedReturnFlight?.price
  );

  console.log(selectedDepartFlight);
  // Get price at that index
  const returnFlightPrice =
    returnFlightPriceIndex !== -1
      ? Number(
          selectedReturnFlight?.flight?.metadata?.prices[departFlightPriceIndex]
        )
      : 0; // Convert string to number

  useEffect(() => {
    // Calculate base fare based on selected flights & passengers
    const baseFare = (departFlightPrice + returnFlightPrice) * totalPassengers;
    setFlightBaseFare(baseFare);

    // Update total price
    setTotalFlightPrice(baseFare + Tax);
  }, [selectedDepartFlight, selectedReturnFlight, totalPassengers]);

  //   Continue button click handle
  const handlePriceContinue = () => {
    const params = new URLSearchParams(searchParams);
    router.push(`/air/booking/purchase?${params.toString()}`);
  };

  //   Continue button click handle
  const handlePriceModify = () => {
    const params = new URLSearchParams(searchParams);
    router.push(`/air/booking/select-depart?${params.toString()}`);
  };

  return {
    flightBaseFare,
    setFlightBaseFare,
    TotalFlightPrice,
    setTotalFlightPrice,
    Tax,
    handlePriceContinue,
    handlePriceModify,
  };
}
