import { useFlights } from '@/context/FlightContext';

export default function PriceContinueSec() {
  const { handlePriceContinue } = useFlights();
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        {/* not ready to buy yet */}
        <div className="flex flex-col gap-1">
          {/* not ready and save flight */}
          <div className="flex gap-1 text-[16px]">
            <span>Not ready to buy yet?</span>{' '}
            <span className="text-blue-sw underline transition-all hover:text-black-sw">
              Save this flight for later.
            </span>
          </div>
          {/* checked bags and weight and size */}
          <div className="flex gap-1 text-[11px]">
            <span className="text-gray-sw">
              1st and 2nd checked bags fly free<sup>®</sup>.
            </span>
            <span className="text-blue-sw underline hover:text-black-sw">
              Weight and size limits apply.
            </span>
          </div>
        </div>
        {/* login and continue */}
        <div className="flex gap-2">
          {/* login button */}
          <button className="box-shadow-sw group/login rounded-sm border border-blue-sw px-[22px] py-3 text-[17px] font-bold text-blue-sw transition-all duration-300">
            <span className="group-hover/login:underline">
              Log in for faster checkout
            </span>
          </button>
          {/* Continue button */}
          <button
            onClick={() => handlePriceContinue()}
            className="box-shadow-sw rounded-sm border border-transparent bg-yellow-sw px-[22px] py-3 text-[17px] font-bold text-black-sw transition-all duration-300 hover:border-black-sw hover:shadow-none"
          >
            Continue
          </button>
        </div>
      </div>

      {/* notification */}
      <div className="flex w-full justify-end text-right leading-3">
        <span className="text-[11px] text-gray-sw">
          By clicking 'Continue', you agree to accept the{' '}
          <span className="text-blue-sw underline">fare rules</span> <br /> and
          want to continue with this purchase.
        </span>
      </div>
    </div>
  );
}
