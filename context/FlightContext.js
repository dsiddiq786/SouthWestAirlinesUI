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
import { useReturnFlight } from './SelectDepart/ReturnFlightContext';
import { useFlightPrice } from './SelectDepart/FlightPriceContext';
import { usePassengerInfo } from './purchase/PassengerInfoContext';

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

  // departure flights
  const [filteredFlights, setFilteredFlights] = useState(flights);

  // return flights
  const [filteredReturnFlights, setFilteredReturnFlights] = useState(flights);
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

  // Return Date
  const { returnDate, setReturnDate } = useReturnDate();

  // Depart Flight
  const {
    priceVariants,
    selectedDepartFlight,
    setSelectedDepartFlight,
    handlePriceSelection,
    updateDepartFlightURL,
    openDepartDropdown,
    setDepartOpenDropdownId,
    handleDepartDropDown,
    clearDepartFlightSelection,
    isDepartContinueBtnClicked,
    setIsDepartContinueBtnClicked,
    handleContinueClick,
  } = useDepartFlight(returnDate);

  // Return Flight
  const {
    selectedReturnFlight,
    setSelectedReturnFlight,
    handleReturnPriceSelection,
    updateReturnFlightURL,
    clearReturnFlightSelection,
    handleReturnContinueClick,
  } = useReturnFlight();

  // Price
  const {
    flightBaseFare,
    setFlightBaseFare,
    TotalFlightPrice,
    setTotalFlightPrice,
    Tax,
    handlePriceContinue,
    handlePriceModify,
  } = useFlightPrice(
    selectedDepartFlight,
    selectedReturnFlight,
    totalPassengers,
    priceVariants
  );

  const { passengerInfo, setPassengerInfo } = usePassengerInfo(totalPassengers);

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
    passengerCounts,
    departDate,
    returnDate,
    travelTypeOptions,
    selectedDepartFlight,
    selectedReturnFlight
  );

  // Filtered departure flights
  useEffect(() => {
    if (!flights || flights.length === 0) return; // Ensure flights data exists

    // Convert selectedDepartCodes & selectedArriveCodes to Sets for O(1) lookup
    const departSet = new Set(selectedDepartCodes);
    const arriveSet = new Set(selectedArriveCodes);

    let idCounter = 0; // Start ID from 0

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
            id: idCounter++, // Assign and increment the ID counter
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

  // Filtered Return flight
  useEffect(() => {
    if (!flights || flights.length === 0 || !selectedDepartFlight) return; // Ensure flights & selectedDepartFlight exist

    // Get the departure & arrival for return flights
    const returnDepartCode = selectedDepartFlight?.flight?.arrivalPort; // Arrival of depart flight becomes departure
    const returnArriveCode = selectedDepartFlight?.flight?.departurePort; // Departure of depart flight becomes arrival

    let idCounter = 0; // Start ID from 0

    // Use `reduce()` to filter only return flights
    const groupedReturnFlights = flights.reduce((acc, flight) => {
      // Check if flight matches the reverse route
      if (
        flight.departurePort === returnDepartCode &&
        flight.arrivalPort === returnArriveCode
      ) {
        const key = `${flight.departurePort}-${flight.arrivalPort}`;

        // If route doesn't exist in accumulator, create an entry
        if (!acc[key]) {
          acc[key] = {
            id: idCounter++, // Assign and increment the ID counter
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
    setFilteredReturnFlights(Object.values(groupedReturnFlights));
  }, [selectedDepartFlight]); // Runs when flights or selectedDepartFlight change

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
  // console.log(isDepartContinueBtnClicked);

  return (
    <FlightContext.Provider
      value={{
        // flights
        allFlights: flights,
        filteredFlights,

        // Return flight
        filteredReturnFlights,
        setFilteredReturnFlights,

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
        openDepartDropdown,
        setDepartOpenDropdownId,
        handleDepartDropDown,
        clearDepartFlightSelection,
        isDepartContinueBtnClicked,
        setIsDepartContinueBtnClicked,
        handleContinueClick,

        // Return Flight
        selectedReturnFlight,
        setSelectedReturnFlight,
        handleReturnPriceSelection,
        updateReturnFlightURL,
        clearReturnFlightSelection,
        handleReturnContinueClick,

        // Price
        flightBaseFare,
        setFlightBaseFare,
        TotalFlightPrice,
        setTotalFlightPrice,
        Tax,
        handlePriceContinue,
        handlePriceModify,

        // Passenger Info
        passengerInfo,
        setPassengerInfo,

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
