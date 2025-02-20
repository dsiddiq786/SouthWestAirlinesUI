import { useFlights } from '@/context/FlightContext';
import ConfirmedTicketItem from './ConfirmedTicketItem';

export default function ConfirmedTickets() {
  const { tempFormDetails } = useFlights();
  console.log(tempFormDetails);
  return (
    <div className="flex flex-col gap-4">
      {tempFormDetails.passengers.map((passenger, index) => {
        return <ConfirmedTicketItem key={index} passenger={passenger} />;
      })}
    </div>
  );
}
