import CheckboxItem from '@/app/components/General/CheckboxItem';
import { v4 as uuidv4 } from 'uuid';
import { useFlights } from '@/context/FlightContext';

export default function States({ state }) {
  const {
    selectedStates,
    selectedCodes,
    toggleCodeSelection,
    toggleStateSelection,
  } = useFlights();

  return (
    <>
      <div className="flex flex-col">
        {state.cities.length > 1 ? (
          <>
            <div className="flex w-full items-center gap-2">
              <li className="w-full">
                <div className="flex items-center gap-2 py-[4px]">
                  <span className="whitespace-nowrap text-[12px] italic text-gray-sw">
                    {state.state} Area Airports
                  </span>
                  <div className="h-[0.5px] w-full bg-black-sw"></div>
                </div>
                <CheckboxItem
                  padding={'pl-1'}
                  checked={selectedStates.includes(state.state)}
                  label={`${state.state} Airports`}
                  onChange={() => {
                    toggleStateSelection(state.state);
                  }}
                />
              </li>
            </div>

            <ul className="flex list-none flex-col">
              {state.cities.map((city) => (
                <li key={uuidv4()} className="w-full">
                  <CheckboxItem
                    padding={'pl-[22px]'}
                    checked={selectedCodes.includes(city.code)}
                    label={`${city.city}, ${state.state} - ${city.code}`}
                    onChange={() => toggleCodeSelection(city.code)}
                  />
                </li>
              ))}
            </ul>
            <div className="h-[0.5px] w-full bg-black-sw"></div>
          </>
        ) : (
          <ul className="flex list-none flex-col">
            {state.cities.map((city) => (
              <li key={uuidv4()} className="w-full">
                <CheckboxItem
                  padding={'pl-1'}
                  checked={selectedCodes.includes(city.code)}
                  label={`${city.city}, ${state.state} - ${city.code}`}
                  onChange={() => toggleCodeSelection(city.code)}
                  isCheckBoxHidden={true}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
