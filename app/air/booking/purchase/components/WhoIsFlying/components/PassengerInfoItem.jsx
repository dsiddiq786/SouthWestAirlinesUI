export default function PassengerInfoItem({ passenger, passengerIndex }) {
  return (
    <>
      <div className="flex flex-col gap-4">
        {/* passenger number */}
        <span className="text-[16px] font-bold">
          Passenger {passenger.passengerNo}
        </span>

        {/* Inputs */}
        <section></section>
      </div>
    </>
  );
}
