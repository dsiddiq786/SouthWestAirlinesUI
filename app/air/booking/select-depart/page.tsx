'use client';

import Header from './components/Header';
import { useSearchParams } from 'next/navigation';
import { useFlights } from '@/context/FlightContext';
import { useEffect } from 'react';
import DepartDetails from './components/DepartDetails/DepartDetails';

export default function Home() {
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
  } = useFlights();
  const searchParams = useSearchParams();

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
      <Header />
      <div className="bg-white">
        <div className="container-sw pb-[40px] pt-[15px]">
          <DepartDetails />
        </div>
      </div>
    </>
  );
}
