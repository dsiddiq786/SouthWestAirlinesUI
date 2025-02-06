import { useState, useMemo, useEffect } from 'react';

export function useDeparture(airports) {
  // Group cities by state and maintain the correct format
  const groupedCitiesByState = useMemo(() => {
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
  const [selectedStates, setSelectedStates] = useState([]);
  const [selectedCodes, setSelectedCodes] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // Search query state

  // Function to handle search input
  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  // useEffect to update searchQuery when selectedCodes or selectedStates change
  useEffect(() => {
    if (selectedCodes.length === 1) {
      // If only one code is selected, set searchQuery to the code (UPPERCASE)
      setSearchQuery((prev) =>
        prev !== selectedCodes[0].toUpperCase()
          ? selectedCodes[0].toUpperCase()
          : prev
      );
    } else {
      // Group selected codes by state
      const stateToCodesMap = selectedCodes.reduce((acc, code) => {
        const state = groupedCitiesByState.find((el) =>
          el.cities.some((c) => c.code === code)
        )?.state;

        if (state) {
          if (!acc[state]) acc[state] = [];
          acc[state].push(code);
        }

        return acc;
      }, {});

      // If multiple codes exist for a state, set searchQuery to `${state} Airports`
      const statesWithMultipleCodes = Object.entries(stateToCodesMap).find(
        ([, codes]) => codes.length > 1
      );

      if (statesWithMultipleCodes) {
        setSearchQuery((prev) =>
          prev !== `${statesWithMultipleCodes[0]}`
            ? `${statesWithMultipleCodes[0]}`
            : prev
        );
      }
    }
  }, [selectedCodes, selectedStates, groupedCitiesByState]);

  // useEffect to clear selections only when searchQuery is changed manually
  useEffect(() => {
    if (
      searchQuery.length > 0 &&
      (selectedCodes.length > 0 || selectedStates.length > 0)
    ) {
      // Prevent clearing when searchQuery is being set by code or state selection
      const codeMatches = selectedCodes.some((code) =>
        searchQuery.includes(code.toUpperCase())
      );

      const stateMatches = selectedStates.some((state) =>
        searchQuery.includes(state.toUpperCase())
      );

      // Find the state that contains all selected codes
      const selectedState = selectedStates.find((state) =>
        groupedCitiesByState.some(
          (el) =>
            el.state === state &&
            el.cities.every((c) => selectedCodes.includes(c.code))
        )
      );

      if (!codeMatches && !stateMatches) {
        setSelectedStates([]); // Clear states but keep selected codes
        if (selectedState) {
          setSelectedCodes([]); // Only clear codes if all codes from the selected state are in selectedCodes
        }
      }
    }
  }, [searchQuery]); // Only depends on searchQuery

  // Filtered state based on search query
  const filteredCitiesByState = useMemo(() => {
    if (!searchQuery || searchQuery.trim() === '') return groupedCitiesByState; // Return all if search is empty

    return groupedCitiesByState.filter(
      ({ state, cities }) =>
        state.toLowerCase().includes(searchQuery.toLowerCase()) || // Search in state name
        cities.some(
          (c) =>
            c.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.code.toLowerCase().includes(searchQuery.toLowerCase())
        )
    ); // Keep state if either state name, city name, or code matches
  }, [searchQuery, groupedCitiesByState]);

  // Toggle airport code selection
  const toggleCodeSelection = (code) => {
    setSelectedCodes(
      (prev) =>
        prev.includes(code)
          ? prev.filter((item) => item !== code) // Remove if already selected
          : [...prev, code] // Add if not selected
    );

    // Find the corresponding state for the selected airport code
    const correspondingState = groupedCitiesByState.find((el) =>
      el.cities.some((c) => c.code === code)
    )?.state;

    if (!correspondingState) return; // Exit if no state found

    // Ensure the state is removed only if no other selected airport codes belong to it
    setSelectedStates(
      (prev) =>
        groupedCitiesByState
          .find((el) => el.state === correspondingState)
          ?.cities.some((c) => selectedCodes.includes(c.code)) // Check if any airport code remains
          ? prev
          : prev.filter((item) => item !== correspondingState) // Remove state if no airport codes remain
    );
  };

  // Toggle state selection and update airport codes
  const toggleStateSelection = (state) => {
    if (selectedStates.includes(state)) {
      // Deselect state & remove its airport codes
      setSelectedStates((prev) => prev.filter((item) => item !== state));
      setSelectedCodes((prev) =>
        prev.filter(
          (code) =>
            !groupedCitiesByState
              .find((el) => el.state === state)
              ?.cities.some((c) => c.code === code)
        )
      );
    } else {
      // Select state & add its airport codes
      setSelectedStates((prev) => [...prev, state]);
      setSelectedCodes((prev) => [
        ...prev,
        ...(groupedCitiesByState
          .find((el) => el.state === state)
          ?.cities.map((c) => c.code) || []),
      ]);
    }
  };

  return {
    groupedCitiesByState,
    filteredCitiesByState,
    handleSearch,
    searchQuery,
    setSearchQuery,
    selectedStates,
    setSelectedStates,
    selectedCodes,
    setSelectedCodes,
    toggleCodeSelection,
    toggleStateSelection,
  };
}
