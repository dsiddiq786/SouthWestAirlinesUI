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

const FlightContext = createContext();

// Prevent multiple interactions in the browser (optional feature)
if (typeof window !== 'undefined' && !window.filterInteractions) {
  window.filterInteractions = {};
}

export function FlightProvider({ children }) {
  const [flights, setFlights] = useState(flightsData);
  const [airports] = useState(airportsData);
  const [filteredFlights, setFilteredFlights] = useState(flightsData);
  const [filters, setFilters] = useState({}); // Example filters (e.g., price range, airlines)

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

  // Load flights data on mount
  useEffect(() => {
    setFlights(flightsData);
  }, []);

  // Function to filter flights
  const filterFlights = (criteria) => {
    let filteredFlights = flightsData;

    if (criteria.airline) {
      filteredFlights = filteredFlights.filter(
        (flight) => flight.airline === criteria.airline
      );
    }

    if (criteria.priceRange) {
      filteredFlights = filteredFlights.filter(
        (flight) =>
          flight.price >= criteria.priceRange.min &&
          flight.price <= criteria.priceRange.max
      );
    }

    setFlights(filteredFlights);
  };

  console.log('Depart Codes: ', selectedDepartCodes);
  console.log('Arrive Codes: ', selectedArriveCodes);
  console.log('Travel Type: ', selectedTravelType);
  console.log('Bag fee: ', selectedBagFee);
  console.log('Total Passengers: ', totalPassengers);
  console.log('Filtered Depart Codes: ', filteredDepartCitiesByState);
  console.log('Filtered Arrive Codes: ', filteredArriveCitiesByState);
  console.log('Departure Date: ', departDate);
  console.log('Return Date: ', returnDate);

  return (
    <FlightContext.Provider
      value={{
        // flights
        allFlights: flights,
        filteredFlights,

        // filters
        filters,
        setFilters,

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
