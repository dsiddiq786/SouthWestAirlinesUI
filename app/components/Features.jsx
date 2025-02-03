import React from 'react';

export default function Features() {
  return (
    <>
      {/* Features */}
      <div>
        {/* extend, earlyBird */}
        <div className="mt-[38px] grid auto-cols-fr grid-flow-col border-b pb-[6px]">
          {/* Extend */}
          <div className="group/extend cursor-pointer border-r">
            <div className="ml-[40px] mr-5">
              <div className="flex items-end justify-between">
                {/* Text */}
                <div className="flex flex-col">
                  <h2 className="font-swSans text-[35px] font-bold leading-tight text-blue-sw">
                    Extend your <br /> floating holiday.
                  </h2>

                  <span className="my-3 text-[13px] text-gray-sw">
                    That’s a Big Flex.™ No change
                    <span className="relative -top-1 text-[.6em]">1</span> or
                    cancel fees.
                    <span className="relative -top-1 text-[.6em]">2</span>
                  </span>

                  <span className="text-[9px] text-gray-sw">
                    <span className="relative -top-1 text-[.6em]">1</span>
                    <span>Fare difference may apply. </span>
                    <span className="relative -top-1 text-[.6em]">2</span>
                    <span>
                      Failure to cancel a reservation at least 10 <br /> minutes
                      prior to scheduled departure may result in forfeited
                      flight credits.
                    </span>
                  </span>
                </div>

                {/* Img */}
                <div className="">
                  <img
                    alt=""
                    className="w-[75px]"
                    src="/images/features/extend.png"
                  />
                </div>
              </div>

              <span className="mt-5 block text-[17px] font-bold text-blue-sw group-hover/extend:underline">
                Book now
              </span>
            </div>
          </div>

          {/* EarlyBird */}
          <div className="group/earlyBird cursor-pointer">
            <div className="ml-[40px] mr-5">
              <div className="flex items-end justify-between">
                {/* Text */}
                <div className="flex flex-col">
                  <h2 className="font-swSans text-[35px] font-bold text-blue-sw">
                    EarlyBird Check-In
                    <sup className="">®</sup>
                  </h2>

                  <span className="mb-3 mt-1 text-[13px] text-gray-sw">
                    When available, automatic check-in 36 hours <br /> before
                    your flight for a better boarding position, <br /> starting
                    from $15 one-way* per Passenger.
                  </span>

                  <span className="block text-[17px] font-bold text-blue-sw group-hover/earlyBird:underline">
                    Get it today
                  </span>
                </div>

                {/* Img */}
                <div className="relative -bottom-5">
                  <img
                    alt=""
                    className="w-[78px]"
                    src="/images/features/earlyBird.gif"
                  />
                </div>
              </div>

              <span className="mt-7 block text-[9px] text-gray-sw">
                *Pricing starts at $15 one-way, and is subject to availability.
                <br />
                Pricing may vary based on the popularity and length of each
                (one-way) flight.
              </span>
            </div>
          </div>
        </div>

        {/* Travel, Plan */}
        <div className="mt-[38px] grid auto-cols-fr grid-flow-col">
          {/* Travel */}
          <div className="cursor-pointer border-r">
            <div className="ml-[40px] mr-5">
              <div className="flex items-end justify-between">
                {/* Text */}
                <div className="flex flex-col">
                  <h2 className="font-swSans text-[35px] font-bold leading-tight text-blue-sw">
                    Travel with ease with <br /> the Southwest
                    <sup className="">®</sup> app
                  </h2>

                  <span className="my-3 text-[13px] text-gray-sw">
                    Download the Southwest<sup>®</sup> mobile app to check in{' '}
                    <br />
                    and get your boarding pass on your mobile <br /> device – no
                    kiosks or paper necessary.
                  </span>
                </div>

                {/* Img */}
                <div className="">
                  <img
                    alt=""
                    className="w-[70px]"
                    src="/images/features/travelQR-code.svg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Plan */}
          <div className="group/plan cursor-pointer">
            <div className="ml-[40px] mr-5">
              <div className="flex items-end justify-between">
                {/* Text */}
                <div className="flex flex-col">
                  <h2 className="font-swSans text-[35px] font-bold leading-tight text-blue-sw">
                    A plan for every type <br /> of business.
                  </h2>

                  <span className="my-3 text-[13px] text-gray-sw">
                    Wherever your business takes you, we can help <br /> you get
                    there with ease and reliability.
                  </span>
                </div>

                {/* Img */}
                <div className="relative -bottom-7">
                  <img
                    alt=""
                    className="w-[90px]"
                    src="/images/features/plan.jpg"
                  />
                </div>
              </div>

              <span className="mt-5 block text-[17px] font-bold text-blue-sw group-hover/plan:underline">
                Learn more
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
