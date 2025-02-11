import { useFlights } from '@/context/FlightContext';
import { FaArrowRight } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import BusinessSelect from './PriceVariantFeatures/BusinessSelect';
import {} from 'next/navigation';
import Anytime from './PriceVariantFeatures/Anytime';
import WannaGetAwayPlus from './PriceVariantFeatures/WannaGetAwayPlus';
import WannaGetAway from './PriceVariantFeatures/WannaGetAway';

export default function FlightDetailItem({ flight, metadata }) {
  const { priceVariants, selectedDepartFlight, handlePriceSelection } =
    useFlights();

  return (
    <>
      <div className="flex flex-col gap-6">
        {/* flight detail item */}
        <div className="flex">
          {/* time , duration etc */}
          <div className="flex flex-1 flex-col">
            {/* flight tag */}
            <span className="block cursor-pointer text-[11px] text-blue-sw transition-all hover:text-black-sw hover:underline">
              # {metadata.flightNums[0]}
            </span>
            {/* time, stop, duration */}
            <div className="flex items-end justify-between">
              {/* Time */}
              <div className="flex items-center">
                {/* deptTime */}
                <div className="flex w-20 items-end leading-none">
                  <span className="text-[30px] font-bold text-black-sw">
                    {metadata.deptTime.split(' ')[0]}
                  </span>
                  <span className="mb-[2px] text-[13px] text-black-sw">
                    {metadata.deptTime.split(' ')[1]}
                  </span>
                </div>
                {/* Right icon */}
                <div className="pl-7 pr-5">
                  <FaArrowRight size={13} className="text-[#8f8f8f]" />
                </div>
                {/* arrTime */}
                <div className="flex w-20 items-end leading-none">
                  <span className="text-[30px] font-bold text-black-sw">
                    {metadata.arrTime.split(' ')[0]}
                  </span>
                  <span className="mb-[2px] text-[13px] text-black-sw">
                    {metadata.arrTime.split(' ')[1]}
                  </span>
                </div>
              </div>
              {/* stop, duration */}
              <div className="flex items-end">
                {/* Stop */}
                <div>
                  {metadata.planeChange ? (
                    <div className="flex w-[150px] flex-col items-center justify-between">
                      {/* No. of stops */}
                      <button className="rounded-sm bg-[#e6e7e8] px-[6px] py-1 text-[11px] font-bold leading-none text-gray-sw">
                        {metadata.planeChange.split(',').length}{' '}
                        {metadata.planeChange.split(',').length > 1
                          ? 'stops'
                          : 'stop'}
                      </button>
                      {/* stops */}
                      <div className="mt-[5px] text-[13px] leading-none">
                        <span className="">
                          Change planes {metadata.planeChange}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex w-[150px] flex-col items-center justify-between">
                      {/* No. of stops */}
                      <button className="rounded-sm bg-[#e6e7e8] px-[6px] py-1 text-[11px] font-bold leading-none text-gray-sw">
                        Non stop
                      </button>
                    </div>
                  )}
                </div>
                {/* Duration */}
                <div className="ml-6 mr-12 flex w-[55px] items-center justify-center whitespace-nowrap">
                  <span className="text-[16px] text-black-sw">
                    {metadata.duration}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Prices */}
          <div className="flex gap-[10px]">
            {metadata.prices.map((price, index) => {
              return (
                <button
                  onClick={() => handlePriceSelection(flight, index)}
                  disabled={price === 'Unavailable'}
                  key={uuidv4()}
                  className={`group/priceBtn relative flex w-[94px] items-center justify-center rounded-sm border py-4 ${
                    price === 'Unavailable'
                      ? 'bg-price-unavailable cursor-not-allowed border-[#8f8f8f] bg-cover'
                      : selectedDepartFlight.price.variant === priceVariants[0]
                        ? 'bg-blue-sw text-white underline decoration-2 underline-offset-1'
                        : selectedDepartFlight.price.variant ===
                            priceVariants[1]
                          ? 'bg-[#a4baf2] text-white underline decoration-2 underline-offset-1'
                          : index === 2
                            ? 'border-[#a4baf2] bg-white text-yellow-600 transition-all duration-300 hover:bg-[#e8ecf9]'
                            : 'border-[#a4baf2] bg-white text-center text-blue-sw transition-all duration-300 hover:bg-[#e8ecf9]'
                  }`}
                >
                  <span className="flex items-start">
                    {/* dollar sign */}
                    {price !== 'Unavailable' && (
                      <span className="mt-1 text-[13px] font-bold">$</span>
                    )}
                    {/* Price */}
                    <span
                      className={` ${price === 'Unavailable' ? 'text-[13px] text-gray-sw' : 'text-[22px]'} font-bold`}
                    >
                      {price}
                    </span>
                  </span>
                  {/* points */}
                  {price !== 'Unavailable' && !selectedDepartFlight && (
                    <span className="absolute bottom-1 text-[11px] italic text-gray-sw opacity-0 group-hover/priceBtn:opacity-100">
                      earn {priceVariants[index].points} pts
                    </span>
                  )}

                  {/* bottom background */}
                  {selectedDepartFlight && (
                    <div className="absolute -bottom-3 h-3 w-full bg-[#304cb2]"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* price variant features */}
        {selectedDepartFlight && (
          <section>
            {selectedDepartFlight.price.variant ===
              priceVariants[0].variant && <BusinessSelect />}
            {selectedDepartFlight.price.variant ===
              priceVariants[1].variant && <Anytime />}
            {selectedDepartFlight.price.variant ===
              priceVariants[2].variant && <WannaGetAwayPlus />}
            {selectedDepartFlight.price.variant ===
              priceVariants[3].variant && <WannaGetAway />}
          </section>
        )}
      </div>
    </>
  );
}
