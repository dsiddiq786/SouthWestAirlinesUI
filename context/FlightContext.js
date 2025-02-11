'use client';

import { createContext, useContext, useState, useEffect } from 'react';

import flightsData from '../data/flights.json'; // Ensure you have a flights.json file
import airportsData from '../data/airports.json';

import { useTravelType } from './InputContexts/TravelTypeContext';
import { useBagFees } from './InputContexts/BagFeesContext';
import { usePassengerCount } from './InputContexts/PassengerContext';
import { useDepart } from './InputContexts/DepartureContext';
import { useArrive } from './InputContexts/ArriveContext';
import { useSearchSubmit } from './InputContexts/SearchSubmitContext';
import { useDepartDate } from './InputContexts/DepartDateContext';
import { useReturnDate } from './InputContexts/ReturnDateContext';
import { useDepartFlight } from './SelectDepart/DepartFlightContext';

const FlightContext = createContext();

// Prevent multiple interactions in the browser (optional feature)
if (typeof window !== 'undefined' && !window.filterInteractions) {
  window.filterInteractions = {};
}

export function FlightProvider({ children }) {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    // Load flights asynchronously to prevent blocking the main thread
    const loadFlights = async () => {
      try {
        setFlights(flightsData); // Set data safely
        setFilteredFlights(flights);
      } catch (error) {
        console.error('Error loading flights:', error);
      }
    };

    setTimeout(loadFlights, 0); // Delay execution to allow smooth rendering
  }, []); // Run only once

  const [filteredFlights, setFilteredFlights] = useState(flights);
  const [airports] = useState(airportsData);

  const codeDetailsWithCityState = airports.map(
    (item) => `${item.city}, ${item.state} - ${item.code}`
  );

  //   Travel types
  const { travelTypeOptions, selectedTravelType, setSelectedTravelType } =
    useTravelType();

  // Bag Fees
  const { bagFeeOptions, selectedBagFee, setSelectedBagFee } = useBagFees();

  // Passenger count
  const {
    passengerTypes,
    passengerCounts,
    setPassengerCounts,
    handleIncrement,
    handleDecrement,
    totalPassengers,
    setTotalPassengers,
  } = usePassengerCount();

  const [updatedSelectedArriveCodes, setUpdatedSelectedArriveCodes] = useState(
    []
  );
  // Departure
  const {
    groupedDepartCitiesByState,
    filteredDepartCitiesByState,
    handleDepartSearch,
    departSearchQuery,
    setDepartSearchQuery,
    selectedDepartStates,
    setSelectedDepartStates,
    selectedDepartCodes,
    setSelectedDepartCodes,
    toggleDepartCodeSelection,
    toggleDepartStateSelection,
  } = useDepart(airports, updatedSelectedArriveCodes);

  // Arrive
  const {
    groupedArriveCitiesByState,
    filteredArriveCitiesByState,
    handleArriveSearch,
    arriveSearchQuery,
    setArriveSearchQuery,
    selectedArriveStates,
    setSelectedArriveStates,
    selectedArriveCodes,
    setSelectedArriveCodes,
    toggleArriveCodeSelection,
    toggleArriveStateSelection,
  } = useArrive(airports, selectedDepartCodes);
  useEffect(() => {
    setUpdatedSelectedArriveCodes(selectedArriveCodes);
  }, [selectedArriveCodes]);

  // Exchange codes function
  const exchangeCodes = () => {
    setSelectedDepartCodes(selectedArriveCodes);
    setSelectedArriveCodes(selectedDepartCodes);
  };

  // Depart Date
  const { departDate, setDepartDate } = useDepartDate();

  // Arrive Date
  const { returnDate, setReturnDate } = useReturnDate();

  // Resetting the return date if one-way is selected as the travel type
  useEffect(() => {
    if (selectedTravelType === travelTypeOptions[1]) {
      setReturnDate('');
    }
  }, [selectedTravelType]);

  const {
    priceVariants,
    selectedDepartFlight,
    setSelectedDepartFlight,
    handlePriceSelection,
    updateDepartFlightURL,
  } = useDepartFlight();

  // Search submit
  const {
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
  } = useSearchSubmit(
    selectedDepartCodes,
    selectedArriveCodes,
    selectedTravelType,
    selectedBagFee,
    totalPassengers,
    departDate,
    returnDate,
    travelTypeOptions
  );

  useEffect(() => {
    if (!flights || flights.length === 0) return; // Ensure flights data exists

    // Convert selectedDepartCodes & selectedArriveCodes to Sets for O(1) lookup
    const departSet = new Set(selectedDepartCodes);
    const arriveSet = new Set(selectedArriveCodes);

    // Use `reduce()` to iterate `flights` only ONCE
    const groupedFlights = flights.reduce((acc, flight) => {
      // Check if flight's departure & arrival exist in selected sets
      if (
        departSet.has(flight.departurePort) &&
        arriveSet.has(flight.arrivalPort)
      ) {
        const key = `${flight.departurePort}-${flight.arrivalPort}`;

        // If route doesn't exist in accumulator, create an entry
        if (!acc[key]) {
          acc[key] = {
            departure: flight.departurePort,
            arrival: flight.arrivalPort,
            flights: [],
          };
        }

        // Push flight data to its corresponding departure → arrival group
        acc[key].flights.push(flight);
      }
      return acc;
    }, {});

    // Convert object to array & update state
    setFilteredFlights(Object.values(groupedFlights));
  }, [flights, selectedDepartCodes, selectedArriveCodes]);

  // console.log('Depart Codes: ', selectedDepartCodes);
  // console.log('Arrive Codes: ', selectedArriveCodes);
  // console.log('Travel Type: ', selectedTravelType);
  // console.log('Bag fee: ', selectedBagFee);
  // console.log('Total Passengers: ', totalPassengers);
  // console.log('Filtered Depart Codes: ', filteredDepartCitiesByState);
  // console.log('Filtered Arrive Codes: ', filteredArriveCitiesByState);
  // console.log('Departure Date: ', departDate);
  // console.log('Return Date: ', returnDate);
  // console.log(selectedDepartFlight);
  // console.log(filteredFlights);

  return (
    <FlightContext.Provider
      value={{
        // flights
        allFlights: flights,
        filteredFlights,

        // codeDetailsWithCityState array
        codeDetailsWithCityState,

        // travel types
        travelTypeOptions,
        selectedTravelType,
        setSelectedTravelType,

        // Bag fees
        bagFeeOptions,
        selectedBagFee,
        setSelectedBagFee,

        // Passenger count
        passengerTypes,
        passengerCounts,
        setPassengerCounts,
        handleIncrement,
        handleDecrement,
        totalPassengers,
        setTotalPassengers,

        // Departure
        groupedDepartCitiesByState,
        filteredDepartCitiesByState,
        handleDepartSearch,
        departSearchQuery,
        setDepartSearchQuery,
        selectedDepartStates,
        setSelectedDepartStates,
        selectedDepartCodes,
        setSelectedDepartCodes,
        toggleDepartCodeSelection,
        toggleDepartStateSelection,

        // Arrive
        groupedArriveCitiesByState,
        filteredArriveCitiesByState,
        handleArriveSearch,
        arriveSearchQuery,
        setArriveSearchQuery,
        selectedArriveStates,
        setSelectedArriveStates,
        selectedArriveCodes,
        setSelectedArriveCodes,
        toggleArriveCodeSelection,
        toggleArriveStateSelection,

        // Exchange code
        exchangeCodes,

        // Depart Date
        departDate,
        setDepartDate,

        // Return Date
        returnDate,
        setReturnDate,

        // DepartFlight
        priceVariants,
        selectedDepartFlight,
        setSelectedDepartFlight,
        handlePriceSelection,
        updateDepartFlightURL,

        // Search Submit
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
      }}
    >
      {children}
    </FlightContext.Provider>
  );
}

// Custom hook for consuming the FlightContext
export function useFlights() {
  return useContext(FlightContext);
}
