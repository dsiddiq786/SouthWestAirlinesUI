import CheckboxItem from '@/app/components/General/CheckboxItem';
import { v4 as uuidv4 } from 'uuid';
import { useFlights } from '@/context/FlightContext';

export default function States({ state }) {
  const {
    selectedStates,
    selectedCities,
    toggleCitySelection,
    toggleStateSelection,
  } = useFlights();

  return (
    <>
      <div className="flex flex-col">
        <div className="flex w-full items-center gap-2">
          <li className="w-full">
            <CheckboxItem
              checked={selectedStates.includes(state.state)}
              label={state.state}
              onChange={() => {
                toggleStateSelection(state.state);
              }}
            />
          </li>
        </div>
        <ul className="ml-8 flex list-none flex-col">
          {state.cities.map((city) => (
            <li key={uuidv4()} className="w-full">
              <CheckboxItem
                checked={selectedCities.includes(city)}
                label={city}
                onChange={() => toggleCitySelection(city)}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
