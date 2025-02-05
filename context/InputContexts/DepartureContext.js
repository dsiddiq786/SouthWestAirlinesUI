import { useState, useMemo } from 'react';

export function useDeparture(airports, flights) {
  const groupedCitiesByState = useMemo(() => {
    // Create a mapping of states to cities
    const stateCityMap = airports.reduce((acc, airport) => {
      const state = airport.state || 'Unknown';
      const city = airport.city || 'Unknown';

      // Initialize the state if not already present
      if (!acc[state]) {
        acc[state] = new Set();
      }

      acc[state].add(city);
      return acc;
    }, {});

    // Convert the object into the required array format
    return Object.keys(stateCityMap).map((state) => ({
      state,
      cities: Array.from(stateCityMap[state]), // Convert Set to Array
    }));
  }, [airports]); // Runs when `airports` changes

  // Global state for selected states and cities
  const [selectedStates, setSelectedStates] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);

  // Toggle city selection
  const toggleCitySelection = (city) => {
    setSelectedCities(
      (prev) =>
        prev.includes(city)
          ? prev.filter((item) => item !== city) // Remove if already selected
          : [...prev, city] // Add if not selected
    );

    // Find the corresponding state for the selected city
    const correspondingState = groupedCitiesByState.find((el) =>
      el.cities.includes(city)
    )?.state;

    if (!correspondingState) return; // Exit if no state found

    // Ensure the state is removed only if no other selected cities belong to it
    setSelectedStates(
      (prev) =>
        groupedCitiesByState
          .find((el) => el.state === correspondingState)
          ?.cities.some((c) => selectedCities.includes(c)) // Check if any city remains
          ? prev
          : prev.filter((item) => item !== correspondingState) // Remove state if no city remains
    );
  };

  // Toggle state selection and update cities
  const toggleStateSelection = (state) => {
    if (selectedStates.includes(state)) {
      // Deselect state & remove its cities
      setSelectedStates((prev) => prev.filter((item) => item !== state));
      setSelectedCities((prev) =>
        prev.filter(
          (city) =>
            !groupedCitiesByState
              .find((el) => el.state === state)
              ?.cities.includes(city)
        )
      );
    } else {
      // Select state & add its cities
      setSelectedStates((prev) => [...prev, state]);
      setSelectedCities((prev) => [
        ...prev,
        ...(groupedCitiesByState.find((el) => el.state === state)?.cities ||
          []),
      ]);
    }
  };

  return {
    groupedCitiesByState,
    selectedStates,
    setSelectedStates,
    selectedCities,
    setSelectedCities,
    toggleCitySelection,
    toggleStateSelection,
  };
}
