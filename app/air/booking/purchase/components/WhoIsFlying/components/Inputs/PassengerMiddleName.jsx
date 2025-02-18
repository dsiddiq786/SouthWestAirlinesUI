export default function PassengerMiddleName({ register, passenger }) {
  return (
    <div className="flex flex-col">
      <span className="pb-[8px] text-[11px] font-bold text-gray-sw">
        MIDDLE NAME
      </span>
      <div>
        <input
          type="text"
          autoComplete="additional-name"
          {...register(`passengers.${passenger.passengerNo}.middleName`)}
          className={`inner-box-shadow-sw h-[32px] w-[208px] rounded-sm border py-[3px] pl-[7px] text-[13px] text-black-sw shadow-inner`}
        />
      </div>
      <span className="h-4 text-sm"></span>
    </div>
  );
}
