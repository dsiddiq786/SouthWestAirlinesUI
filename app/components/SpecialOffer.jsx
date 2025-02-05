import { RiExternalLinkFill } from 'react-icons/ri';

export default function SpecialOffer() {
  return (
    <div className="bg-blue-sw">
      <h2 className="font-swSans mb-[12px] ml-[10px] mt-[10px] text-[30px] font-bold text-white">
        Special Offers
      </h2>

      {/* Offers */}
      <div className="grid auto-cols-fr grid-flow-col">
        {/* Vacation */}
        <a className="group/vacation" href="#">
          <img alt="" src="/images/special-offers/vacation.png" />

          <div className="flex flex-col gap-2 p-4">
            <span className="text-[13px] font-bold text-yellow-sw">
              BOOK A VACATION
            </span>

            <span className="text-[17px] font-bold text-white">
              Bundle Southwest<sup className="text-[.6rem]">®</sup> <br />{' '}
              flight + hotel to save <br /> big on your next <br />
              vacation.
            </span>

            <button className="flex w-min items-center gap-2 whitespace-nowrap rounded-[1px] bg-[#fdfdfd] px-[20px] py-[6px] text-blue-sw">
              <span className="text-[12px] font-bold group-hover/vacation:underline">
                Explore vacations
              </span>
              <RiExternalLinkFill />
            </button>
          </div>
        </a>

        {/* Car */}
        <a className="group/car" href="#">
          <img alt="" src="/images/special-offers/car.jpg" />

          <div className="flex flex-col gap-2 p-4">
            <span className="text-[13px] font-bold text-yellow-sw">
              RENT A CAR
            </span>

            <span className="text-[17px] font-bold text-white">
              Earn up to 4X points on <br /> your next car rental at <br /> over
              100 locations <br />
              nationwide.
            </span>

            <button className="flex w-min items-center gap-2 whitespace-nowrap rounded-[1px] bg-[#fdfdfd] px-[20px] py-[6px] text-blue-sw">
              <span className="text-[12px] font-bold group-hover/car:underline">
                Rent a car
              </span>
            </button>
          </div>
        </a>

        {/* Hotel */}
        <a className="group/hotel" href="#">
          <img alt="" src="/images/special-offers/hotel.jpg" />

          <div className="flex flex-col gap-9 p-4">
            <div className="flex flex-col gap-2">
              <span className="text-[13px] font-bold text-yellow-sw">
                BOOK A HOTEL
              </span>
              <span className="text-[17px] font-bold text-white">
                Earn up to 10,000 <br /> points per night on <br /> hotel stays.
              </span>
            </div>

            <button className="flex w-min items-center gap-2 whitespace-nowrap rounded-[1px] bg-[#fdfdfd] px-[20px] py-[6px] text-blue-sw">
              <span className="text-[12px] font-bold group-hover/hotel:underline">
                Search hotels
              </span>
              <RiExternalLinkFill />
            </button>
          </div>
        </a>

        {/* Cruise */}
        <a className="group/cruise" href="#">
          <img alt="" src="/images/special-offers/cruise.jpg" />

          <div className="flex flex-col gap-9 p-4">
            <div className="flex flex-col gap-2">
              <span className="text-[13px] font-bold text-yellow-sw">
                BOOK A CRUISE
              </span>
              <span className="text-[17px] font-bold text-white">
                Earn 1 Rapid Rewards<sup className="text-[.6rem]">®</sup>{' '}
                <br /> point for every $1 spent <br /> on cruises.
              </span>
            </div>

            <button className="flex w-min items-center gap-2 whitespace-nowrap rounded-[1px] bg-[#fdfdfd] px-[20px] py-[6px] text-blue-sw">
              <span className="text-[12px] font-bold group-hover/cruise:underline">
                Book now
              </span>
              <RiExternalLinkFill />
            </button>
          </div>
        </a>
      </div>
    </div>
  );
}
