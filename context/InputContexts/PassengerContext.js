import { useEffect, useState } from 'react';

export function usePassengerCount() {
  // Passenger categories
  const passengerTypes = [
    { id: 'adults', label: 'Adults', age: 'Age 18+', min: 1 },
    { id: 'teens', label: 'Teens', age: 'Age 12 - 17', min: 0 },
    { id: 'children', label: 'Children', age: 'Age 5 - 11', min: 0 },
    {
      id: 'youngChildren',
      label: 'Children',
      age: 'Age 0 - 4 (excluding Lap Children)',
      min: 0,
    },
    { id: 'lapChildren', label: 'Lap Children', age: 'Age under 2', min: 0 },
  ];

  const [passengerCounts, setPassengerCounts] = useState({
    adults: 1,
    teens: 0,
    children: 0,
    youngChildren: 0,
    lapChildren: 0,
  });

  const [totalPassengers, setTotalPassengers] = useState(
    Object.values(passengerCounts).reduce((sum, count) => sum + count, 0)
  );

  useEffect(() => {
    setTotalPassengers(
      Object.values(passengerCounts).reduce((sum, count) => sum + count, 0)
    );
  }, [passengerCounts]); // Dependency array ensures effect runs when passengerCounts changes

  // Handle increment
  const handleIncrement = (type) => {
    if (totalPassengers < 10) {
      setPassengerCounts((prev) => ({
        ...prev,
        [type]: prev[type] + 1,
      }));
    }
  };

  // Handle decrement
  const handleDecrement = (type, minValue) => {
    if (passengerCounts[type] > minValue) {
      setPassengerCounts((prev) => ({
        ...prev,
        [type]: prev[type] - 1,
      }));
    }
  };

  return {
    passengerTypes,
    passengerCounts,
    setPassengerCounts,
    handleIncrement,
    handleDecrement,
    totalPassengers,
    setTotalPassengers,
  };
}
