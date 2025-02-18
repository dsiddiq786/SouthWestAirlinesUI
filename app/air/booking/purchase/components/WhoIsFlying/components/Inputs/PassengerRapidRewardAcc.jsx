export default function PassengerRapidRewardAcc({ register, passenger }) {
  return (
    <div className="flex flex-col">
      <span className="pb-[8px] text-[11px] font-bold uppercase text-gray-sw">
        Rapid Rewards®/Account #
      </span>
      <div>
        <input
          type="text"
          {...register(
            `passengers.${passenger.passengerNo}.rapidRewardsAccount`
          )}
          className={`inner-box-shadow-sw h-[32px] w-[320px] rounded-sm border py-[3px] pl-[7px] text-[13px] text-black-sw shadow-inner`}
        />
      </div>
      <span className="h-4 text-sm"></span>
    </div>
  );
}
