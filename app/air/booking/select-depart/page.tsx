'use client';

import Header from './components/Header';
import { usePathname, useSearchParams } from 'next/navigation';
import { useFlights } from '@/context/FlightContext';
import { useEffect } from 'react';
import DepartDetails from './components/DepartDetails/DepartDetails';

export default function Home() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const {
    setSelectedTravelType,
    setSelectedBagFee,
    setTotalPassengers,
    setSelectedDepartCodes,
    setSelectedArriveCodes,
    setDepartDate,
    setReturnDate,
    selectedTravelType,
    travelTypeOptions,
    selectedDepartFlight,
    setSelectedDepartFlight,
  } = useFlights();

  useEffect(() => {
    // Retrieve values from search params
    const travelType = searchParams.get('travelType') || '';
    const bagFee = searchParams.get('bagFee') || '';
    const totalPassengers = searchParams.get('totalPassengers') || 0;
    const departCodes = searchParams.get('departCodes')?.split(',') || [];
    const arriveCodes = searchParams.get('arriveCodes')?.split(',') || [];
    const departDate = searchParams.get('departDate') || '';
    if (selectedTravelType === travelTypeOptions[0]) {
      const returnDate = searchParams.get('returnDate') || '';
      setReturnDate(returnDate);
    }
    if (
      pathname.includes('departFlightId') ||
      pathname.includes('departFlightPrice')
    ) {
      const departFlightId = searchParams.get('departFlightId') || null;
      const departFlightPrice = searchParams.get('departFlightPrice') || null;
      setSelectedDepartFlight({
        flight: departFlightId,
        price: departFlightPrice,
      });
    }

    // set the values according to the searchParams
    setSelectedTravelType(travelType);
    setSelectedBagFee(bagFee);
    setTotalPassengers(totalPassengers);
    setSelectedDepartCodes(departCodes);
    setSelectedArriveCodes(arriveCodes);
    setDepartDate(departDate);
  }, [searchParams]); // Runs when search params change

  return (
    <>
      <div className="-ml-2">
        <Header />
        <div className="bg-white">
          <div className="container-sw pb-[40px] pt-[15px]">
            <DepartDetails />
          </div>
        </div>
      </div>
    </>
  );
}
