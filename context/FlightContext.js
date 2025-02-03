'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import flightsData from '../data/flights.json'; // Ensure you have a flights.json file

const FlightContext = createContext();

// Prevent multiple interactions in the browser (optional feature)
if (typeof window !== 'undefined' && !window.filterInteractions) {
  window.filterInteractions = {};
}

export function FlightProvider({ children }) {
  const [flights, setFlights] = useState([]);
  const [filters, setFilters] = useState({}); // Example filters (e.g., price range, airlines)

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

  return (
    <FlightContext.Provider
      value={{ flights, setFlights, filterFlights, filters, setFilters }}
    >
      {children}
    </FlightContext.Provider>
  );
}

// Custom hook for consuming the FlightContext
export function useFlights() {
  return useContext(FlightContext);
}
