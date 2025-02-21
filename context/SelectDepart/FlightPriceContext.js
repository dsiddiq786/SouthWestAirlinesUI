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
  const [Tax, setTax] = useState(91.74);
  const [TotalFlightPrice, setTotalFlightPrice] = useState(0); // Initialize properly

  // Ensure totalPassengers is a valid number
  const passengers = Number(totalPassengers) || 1; // Default to 1 if NaN

  // Hardcoded tax values based on provided rules
  const EXCISE_TAX = 15; // Static value (previously 7.5% but now fixed)
  const ARRIVAL_DEPARTURE_TAX = 11.40; // Static for Hawaii
  const PUERTO_RICO_TAX = 22.90; // Static for Puerto Rico
  const SEGMENT_FEE = 5.20 * 2; // Assuming round trip (2 segments)
  const SECURITY_FEE = 5.60 * 2; // Assuming round trip
  const PFC = 18; // Static max charge

  // Get price index for depart flight
  const departFlightPriceIndex = priceVariants.findIndex(
    (variant) => variant.variant === selectedDepartFlight?.price
  );

  // Get price at that index
  const departFlightPrice =
    departFlightPriceIndex !== -1 &&
      selectedDepartFlight?.flight?.metadata?.prices?.[departFlightPriceIndex]
      ? Number(selectedDepartFlight.flight.metadata.prices[departFlightPriceIndex])
      : 0; // Fallback to 0 if not found

  // Get price index for return flight
  const returnFlightPriceIndex = priceVariants.findIndex(
    (variant) => variant.variant === selectedReturnFlight?.price
  );

  // Get price at that index (fixing incorrect index reference)
  const returnFlightPrice =
    returnFlightPriceIndex !== -1 &&
      selectedReturnFlight?.flight?.metadata?.prices?.[returnFlightPriceIndex]
      ? Number(selectedReturnFlight.flight.metadata.prices[returnFlightPriceIndex])
      : 0; // Fallback to 0 if not found

  useEffect(() => {
    // Ensure we do not set NaN
    const baseFare = ((departFlightPrice + returnFlightPrice) * passengers);

    // Calculate total tax (all static values)
    const totalTaxes = EXCISE_TAX + ARRIVAL_DEPARTURE_TAX + PUERTO_RICO_TAX + SEGMENT_FEE + SECURITY_FEE + PFC + baseFare * 0.075;
    setTax(totalTaxes);

    setFlightBaseFare(baseFare);
    setTotalFlightPrice(baseFare + Tax);
  }, [departFlightPrice, returnFlightPrice, passengers]); // Added dependencies

  // Continue button click handle
  const handlePriceContinue = () => {
    const params = new URLSearchParams(searchParams);
    router.push(`/air/booking/purchase?${params.toString()}`);
  };

  // Modify button click handle
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
    departFlightPrice,
    returnFlightPrice
  };
}
