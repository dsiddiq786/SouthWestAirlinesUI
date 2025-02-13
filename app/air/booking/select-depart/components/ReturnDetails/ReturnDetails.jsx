import Accordians from '../DepartDetails/components/Accordians/Accordians';
import SelectedDepartFlight from '../DepartDetails/components/SelectedDepartFlight';
import ReturnDatesBar from './components/ReturnDatesBar';
import ReturnFlights from './components/ReturnFlights/ReturnFlights';
import ReturnInfo from './components/ReturntInfo';

export default function ReturnDetails() {
  return (
    <section>
      {/* Selected Depart flight */}
      <div>
        <SelectedDepartFlight />
      </div>

      {/* Upper info div */}
      <ReturnInfo />

      {/* Dates Bar */}
      <div className="mb-[20px] mt-[28px]">
        <ReturnDatesBar />
      </div>

      {/* Flights */}
      <div>
        <ReturnFlights />
      </div>

      {/* Accordians */}
      <div className="mt-10">
        <Accordians />
      </div>
    </section>
  );
}
