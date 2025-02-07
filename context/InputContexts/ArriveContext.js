import { useState, useMemo, useEffect } from 'react';

export function useArrive(airports, selectedDepartCodes) {
  // Group cities by state and maintain the correct format
  const groupedArriveCitiesByState = useMemo(() => {
    const stateCityMap = airports.reduce((acc, airport) => {
      const state = airport.state || 'Unknown';
      const city = airport.city || 'Unknown';
      const code = airport.code || ''; // Ensure the airport code is captured

      if (!acc[state]) {
        acc[state] = [];
      }

      // Avoid duplicates
      if (!acc[state].some((entry) => entry.code === code)) {
        acc[state].push({ city, code });
      }

      return acc;
    }, {});

    return Object.keys(stateCityMap).map((state) => ({
      state,
      cities: stateCityMap[state],
    }));
  }, [airports]); // Runs when `airports` changes

  // Global state for selected states and airport codes
  const [selectedArriveStates, setSelectedArriveStates] = useState([]);
  const [selectedArriveCodes, setSelectedArriveCodes] = useState([]);
  const [arriveSearchQuery, setArriveSearchQuery] = useState(''); // Search query state

  // Function to handle search input
  const handleArriveSearch = (query) => {
    setArriveSearchQuery(query.toLowerCase());
  };

  // useEffect to update arriveSearchQuery when selectedArriveCodes change
  useEffect(() => {
    if (selectedArriveCodes.length > 0) {
      // Join selected codes into a comma-separated string
      const query = selectedArriveCodes
        .map((code) => code.toUpperCase())
        .join(', ');
      setArriveSearchQuery((prev) => (prev !== query ? query : prev));
    }
  }, [selectedArriveCodes]); // Only depends on selectedArriveCodes

  // useEffect to clear selections only when arriveSearchQuery is changed manually
  useEffect(() => {
    if (arriveSearchQuery.length > 0 && selectedArriveCodes.length > 0) {
      // Prevent clearing when arriveSearchQuery is being set by code selection
      const codeMatches = selectedArriveCodes.some((code) =>
        arriveSearchQuery.includes(code.toUpperCase())
      );

      // Check if all selected codes belong to a single state
      const matchingState = groupedArriveCitiesByState.find(
        ({ state, cities }) =>
          selectedArriveCodes.every((code) =>
            cities.some((c) => c.code === code)
          )
      );

      if (!codeMatches) {
        setSelectedArriveCodes([]); // Clear only selected codes
        if (matchingState) {
          setSelectedArriveStates([]); // Clear selectedArriveStates if all selected codes belong to one state
        }
      }
    }
  }, [arriveSearchQuery]); // Now depends on groupedArriveCitiesByState

  // Filtered state based on search query
  const filteredArriveCitiesByState = useMemo(() => {
    if (!arriveSearchQuery || arriveSearchQuery.trim() === '')
      return groupedArriveCitiesByState; // Return all if search is empty

    // Split arriveSearchQuery by comma and trim each term
    const searchTerms = arriveSearchQuery
      .split(',')
      .map((term) => term.trim().toLowerCase());

    // Step 1: Initial filtering based on search query
    let filtered = groupedArriveCitiesByState.filter(({ state, cities }) =>
      searchTerms.some(
        (term) =>
          state.toLowerCase().includes(term) || // Match state name
          cities.some(
            (c) =>
              c.city.toLowerCase().includes(term) ||
              c.code.toLowerCase().includes(term) // Match city or airport code
          )
      )
    );

    // Step 2: If selectedArriveCodes exist, show only their states with all cities in those states
    if (selectedArriveCodes.length > 0) {
      const statesWithSelectedCodes = new Set();

      // Find states that contain the selected codes
      groupedArriveCitiesByState.forEach(({ state, cities }) => {
        if (cities.some((c) => selectedArriveCodes.includes(c.code))) {
          statesWithSelectedCodes.add(state);
        }
      });

      // Modify filtered list to keep selected codes & all other cities in their states
      filtered = groupedArriveCitiesByState
        .filter(({ state }) => statesWithSelectedCodes.has(state)) // Keep only states with selected codes
        .map(({ state, cities }) => ({
          state,
          cities, // Keep all cities in those states
        }));
    }

    // Step 3: Remove cities that are in selectedDepartCodes
    filtered = filtered.map(({ state, cities }) => ({
      state,
      cities: cities.filter((c) => !selectedDepartCodes.includes(c.code)), // Remove depart codes
    }));

    return filtered;
  }, [
    arriveSearchQuery,
    groupedArriveCitiesByState,
    selectedArriveCodes,
    selectedDepartCodes,
  ]); // Now also depends on selectedArriveCodes

  // Toggle airport code selection
  const toggleArriveCodeSelection = (code) => {
    setSelectedArriveCodes(
      (prev) =>
        prev.includes(code)
          ? prev.filter((item) => item !== code) // Remove if already selected
          : [...prev, code] // Add if not selected
    );

    // Find the corresponding state for the selected airport code
    const correspondingState = groupedArriveCitiesByState.find((el) =>
      el.cities.some((c) => c.code === code)
    )?.state;

    if (!correspondingState) return; // Exit if no state found

    // Ensure the state is removed only if no other selected airport codes belong to it
    setSelectedArriveStates(
      (prev) =>
        groupedArriveCitiesByState
          .find((el) => el.state === correspondingState)
          ?.cities.some((c) => selectedArriveCodes.includes(c.code)) // Check if any airport code remains
          ? prev
          : prev.filter((item) => item !== correspondingState) // Remove state if no airport codes remain
    );
  };

  // Toggle state selection and update airport codes
  const toggleArriveStateSelection = (state) => {
    if (selectedArriveStates.includes(state)) {
      // Deselect state & remove its airport codes
      setSelectedArriveStates((prev) => prev.filter((item) => item !== state));
      setSelectedArriveCodes((prev) =>
        prev.filter(
          (code) =>
            !groupedArriveCitiesByState
              .find((el) => el.state === state)
              ?.cities.some((c) => c.code === code)
        )
      );
    } else {
      // Select state & add its airport codes
      setSelectedArriveStates((prev) => [...prev, state]);
      setSelectedArriveCodes((prev) => [
        ...prev,
        ...(groupedArriveCitiesByState
          .find((el) => el.state === state)
          ?.cities.map((c) => c.code) || []),
      ]);
    }
  };

  return {
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
  };
}
