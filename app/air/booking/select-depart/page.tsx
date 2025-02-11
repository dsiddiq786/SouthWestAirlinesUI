'use client';

import Header from './components/Header';
import { useSearchParams } from 'next/navigation';
import { useFlights } from '@/context/FlightContext';
import { useEffect } from 'react';
import DepartDetails from './components/DepartDetails/DepartDetails';

export default function Home() {
  const searchParams = useSearchParams();

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
  const { filteredFlights } = useFlights();

  let tempDepartFlight: any;
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

  useEffect(() => {
    const fetchDepartFlight = async () => {
      // Wait until `filteredFlights` contains data
      while (filteredFlights.length === 0) {
        await new Promise((resolve) => setTimeout(resolve, 100)); // Check every 100ms
      }

      if (searchParams.get('departFlight') !== 'undefined') {
        try {
          const departFlight = JSON.parse(
            decodeURIComponent(searchParams.get('departFlight') || '')
          );

          // console.log('Filtered Flights:', filteredFlights);
          // console.log('Depart Flight:', departFlight);
          const testFlight = {
            flight: filteredFlights[0]?.flights.filter(
              (flightDetail: { id: any }) =>
                flightDetail.id === departFlight.flightId
            ),
            price: departFlight?.price,
          };

          // console.log(testFlight);

          setSelectedDepartFlight(testFlight);
        } catch (error) {
          console.error('Error parsing departFlight:', error);
        }
      }
    };

    fetchDepartFlight();
  }, [searchParams, filteredFlights]); // Runs when `filteredFlights` updates

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
