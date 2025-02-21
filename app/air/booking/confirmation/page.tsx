'use client';

import { useSearchParams } from 'next/navigation';
import { useFlights } from '@/context/FlightContext';
import { useEffect, useRef, useState } from 'react';
import Footer from '@/app/components/Footer/Footer';
import Header from '../select-depart/components/Header';
import Accordians from '../select-depart/components/DepartDetails/components/Accordians/Accordians';
import ConfirmProgress from './components/ConfirmProgress';
import FlightPurchaseDetails from '../purchase/components/FlightPurchaseDetails';
import ConfirmedTickets from './components/Tickets/ConfirmedTickets';

export default function Home() {
  const searchParams = useSearchParams();

  const {
    setSelectedTravelType,
    setSelectedBagFee,
    setPassengerCounts,
    setSelectedDepartCodes,
    setSelectedArriveCodes,
    setDepartDate,
    setReturnDate,
    setSelectedDepartFlight,
    setSelectedReturnFlight,
    setIsDepartContinueBtnClicked,
  } = useFlights();
  const { filteredFlights, filteredReturnFlights } = useFlights();

  useEffect(() => {
    // Retrieve values from search params
    const travelType = searchParams.get('travelType') || '';
    const bagFee = searchParams.get('bagFee') || '';
    const passengerCount = JSON.parse(
      decodeURIComponent(searchParams.get('passengerCount') || '')
    );
    const departCodes = searchParams.get('departCodes')?.split(',') || [];
    const arriveCodes = searchParams.get('arriveCodes')?.split(',') || [];
    const departDate = searchParams.get('departDate') || '';
    const returnDate = searchParams.get('returnDate') || '';
    const isReturnFlight = searchParams.get('isReturnFlight') || false;

    // set the values according to the searchParams
    setSelectedTravelType(travelType);
    setSelectedBagFee(bagFee);
    setPassengerCounts(passengerCount);
    setSelectedDepartCodes(departCodes);
    setSelectedArriveCodes(arriveCodes);
    setDepartDate(departDate);
    setReturnDate(returnDate);
    setIsDepartContinueBtnClicked(isReturnFlight);
  }, [searchParams]); // Runs when search params change

  useEffect(() => {
    const fetchDepartFlight = async () => {
      // Wait until `filteredFlights` contains data
      while (filteredFlights.length === 0) {
        await new Promise((resolve) => setTimeout(resolve, 100)); // Check every 100ms
      }

      if (searchParams.get('departFlight') !== 'null') {
        try {
          const departFlight = JSON.parse(
            decodeURIComponent(searchParams.get('departFlight') || '')
          );

          const testFlight = {
            flight:
              filteredFlights.flatMap((group: { flights: any[] }) =>
                group.flights.filter(
                  (flightDetail: { id: any }) =>
                    flightDetail.id === departFlight.flightId
                )
              )[0] || null, // Extract the first matching flight or set null if not found

            price: departFlight?.price,
          };

          setSelectedDepartFlight(testFlight);
        } catch (error) {
          console.error('Error parsing departFlight:', error);
        }
      }
    };

    fetchDepartFlight();
  }, [searchParams, filteredFlights]); // Runs when `filteredFlights` updates

  useEffect(() => {
    const fetchReturnFlight = async () => {
      // Wait until `filteredReturnFlights` contains data
      while (filteredReturnFlights.length === 0) {
        await new Promise((resolve) => setTimeout(resolve, 100)); // Check every 100ms
      }

      if (searchParams.get('returnFlight') !== 'null') {
        try {
          const returnFlight = JSON.parse(
            decodeURIComponent(searchParams.get('returnFlight') || '')
          );

          const testFlight = {
            flight:
              filteredReturnFlights.flatMap((group: { flights: any[] }) =>
                group.flights.filter(
                  (flightDetail: { id: any }) =>
                    flightDetail.id === returnFlight.flightId
                )
              )[0] || null, // Extract the first matching flight or set null if not found

            price: returnFlight?.price,
          };

          setSelectedReturnFlight(testFlight);
        } catch (error) {
          console.error('Error parsing returnFlight:', error);
        }
      }
    };

    fetchReturnFlight();
  }, [searchParams, filteredReturnFlights]); // Runs when `return filtered flights` updates

  const { tempFormDetails } = useFlights();

  return (
    <>
      {Object.keys(tempFormDetails).length > 0 ? (
        <div className="-ml-2 text-black-sw">
          <Header isModifyVisiblle={false} />
          <div className="bg-white">
            <div className="container-sw pb-[40px] pt-[15px]">
              {/* Progress */}
              <section>
                <ConfirmProgress />
              </section>

              <div className="flex flex-col gap-3">
                {/* Tickets */}
                <section>
                  <ConfirmedTickets />
                </section>

                {/* Accordian */}
                <section className="my-16">
                  <Accordians />
                </section>
              </div>
            </div>
          </div>
          <Footer isLinks={false} />
        </div>
      ) : (
        <div className="grid h-screen place-items-center">
          <h1>You have no booked flights!</h1>
        </div>
      )}
    </>
  );
}
