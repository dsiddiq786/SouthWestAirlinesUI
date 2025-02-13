import { useState, useMemo, useEffect } from 'react';

export function useDepart(airports, selectedArriveCodes) {
  // Group cities by state and maintain the correct format
  const groupedDepartCitiesByState = useMemo(() => {
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
  const [selectedDepartStates, setSelectedDepartStates] = useState([]);
  const [selectedDepartCodes, setSelectedDepartCodes] = useState([]);
  const [departSearchQuery, setDepartSearchQuery] = useState(''); // Search query state

  // Function to handle search input
  const handleDepartSearch = (query) => {
    setDepartSearchQuery(query.toLowerCase());
  };

  // useEffect to update departSearchQuery when selectedDepartCodes change
  useEffect(() => {
    if (selectedDepartCodes.length > 0) {
      // Join selected codes into a comma-separated string
      const query = selectedDepartCodes
        .map((code) => code.toUpperCase())
        .join(', ');
      setDepartSearchQuery((prev) => (prev !== query ? query : prev));
    }
  }, [selectedDepartCodes]); // Only depends on selectedDepartCodes

  // useEffect to clear selections only when departSearchQuery is changed manually
  useEffect(() => {
    if (departSearchQuery.length > 0 && selectedDepartCodes.length > 0) {
      // Prevent clearing when departSearchQuery is being set by code selection
      const codeMatches = selectedDepartCodes.some((code) =>
        departSearchQuery.includes(code.toUpperCase())
      );

      // Check if all selected codes belong to a single state
      const matchingState = groupedDepartCitiesByState.find(
        ({ state, cities }) =>
          selectedDepartCodes.every((code) =>
            cities.some((c) => c.code === code)
          )
      );

      if (!codeMatches) {
        setSelectedDepartCodes([]); // Clear only selected codes
        if (matchingState) {
          setSelectedDepartStates([]); // Clear selectedDepartStates if all selected codes belong to one state
        }
      }
    }
  }, [departSearchQuery]); // Now depends on groupedDepartCitiesByState

  // Filtered state based on search query
  const filteredDepartCitiesByState = useMemo(() => {
    if (!departSearchQuery || departSearchQuery.trim() === '')
      return groupedDepartCitiesByState; // Return all if search is empty

    // Split departSearchQuery by comma and trim each term
    const searchTerms = departSearchQuery
      .split(',')
      .map((term) => term.trim().toLowerCase());

    // Step 1: Initial filtering based on search query
    let filtered = groupedDepartCitiesByState.filter(({ state, cities }) =>
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

    // Step 2: If selectedDepartCodes exist, show only their states with all cities in those states
    if (selectedDepartCodes.length > 0) {
      const statesWithSelectedCodes = new Set();

      // Find states that contain the selected codes
      groupedDepartCitiesByState.forEach(({ state, cities }) => {
        if (cities.some((c) => selectedDepartCodes.includes(c.code))) {
          statesWithSelectedCodes.add(state);
        }
      });

      // Modify filtered list to keep selected codes & all other cities in their states
      filtered = groupedDepartCitiesByState
        .filter(({ state }) => statesWithSelectedCodes.has(state)) // Keep only states with selected codes
        .map(({ state, cities }) => ({
          state,
          cities, // Keep all cities in those states
        }));
    }

    // Step 3: Remove cities that are in selectedDepartCodes
    filtered = filtered.map(({ state, cities }) => ({
      state,
      cities: cities.filter((c) => !selectedArriveCodes.includes(c.code)), // Remove depart codes
    }));

    return filtered;
  }, [
    departSearchQuery,
    groupedDepartCitiesByState,
    selectedDepartCodes,
    selectedArriveCodes,
  ]); // Now also depends on selectedDepartCodes

  // Toggle airport code selection
  const toggleDepartCodeSelection = (code) => {
    setSelectedDepartCodes(
      (prev) =>
        prev.includes(code)
          ? prev.filter((item) => item !== code) // Remove if already selected
          : [...prev, code] // Add if not selected
    );

    // Find the corresponding state for the selected airport code
    const correspondingState = groupedDepartCitiesByState.find((el) =>
      el.cities.some((c) => c.code === code)
    )?.state;

    if (!correspondingState) return; // Exit if no state found

    // Ensure the state is removed only if no other selected airport codes belong to it
    setSelectedDepartStates(
      (prev) =>
        groupedDepartCitiesByState
          .find((el) => el.state === correspondingState)
          ?.cities.some((c) => selectedDepartCodes.includes(c.code)) // Check if any airport code remains
          ? prev
          : prev.filter((item) => item !== correspondingState) // Remove state if no airport codes remain
    );
  };

  // Toggle state selection and update airport codes
  const toggleDepartStateSelection = (state) => {
    if (selectedDepartStates.includes(state)) {
      // Deselect state & remove its airport codes
      setSelectedDepartStates((prev) => prev.filter((item) => item !== state));
      setSelectedDepartCodes((prev) =>
        prev.filter(
          (code) =>
            !groupedDepartCitiesByState
              .find((el) => el.state === state)
              ?.cities.some((c) => c.code === code)
        )
      );
    } else {
      // Select state & add its airport codes
      setSelectedDepartStates((prev) => [...prev, state]);
      setSelectedDepartCodes((prev) => [
        ...prev,
        ...(groupedDepartCitiesByState
          .find((el) => el.state === state)
          ?.cities.map((c) => c.code) || []),
      ]);
    }
  };

  return {
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
  };
}
