import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

export default function PaymentRedeem({ register, setValue }) {
  const [isCashPoints, setIsCashPoints] = useState(false);
  const [isFlightCredits, setIsFlightCredits] = useState(false);
  const [isGiftCard, setIsGiftCard] = useState(false);
  const [isLUVVouchers, setIsLUVVouchers] = useState(false);
  return (
    <div className="flex flex-col gap-1">
      <div>
        <h3 className="pb-[20px] text-[26px] font-bold">Redeem</h3>
        <span>
          <p className="text-[13px] text-gray-sw">
            Apply funds one at a time. Starting 4/22/2024, if you use Cash +
            Points as a form of payment, your points will be applied first.
            Flight credits are applied after Cash + Points and ahead of
            Southwest LUV Vouchers<sup>®</sup>. Southwest<sup>®</sup> gift
            cards, Southwest LUV Vouchers<sup>®</sup>, and Southwest
            <sup>®</sup> flight credits can only be used on the flight portion
            of your trip.{' '}
            <a
              className="text-blue-sw underline transition-all hover:text-black-sw"
              onClick={(e) => e.preventDefault()}
              href="#"
            >
              Learn more
            </a>
            .
          </p>
        </span>
      </div>

      {/* checkboxes */}
      <div>
        {/* Apply Cash + points  */}
        <label
          className={`flex cursor-pointer ${isCashPoints ? 'border-black-sw' : 'border hover:border-blue-sw'} items-center justify-between border p-3 transition-all`}
        >
          <input
            className="hidden"
            type="checkbox"
            {...register('payment.redeem.applyCashPoints')}
            checked={isCashPoints}
            onChange={() => {
              const newValue = !isCashPoints;
              setIsCashPoints(newValue);
              setValue('payment.redeem.applyCashPoints', newValue); // Use newValue instead of isCashPoints
            }}
          />
          {/* Left Side - Text */}
          <div className="flex items-center space-x-2">
            <div
              className={`flex ${isCashPoints ? 'bg-[#3f53b2]' : 'bg-white'} h-4 w-4 items-center justify-center rounded border border-gray-500`}
            >
              {isCashPoints && (
                <span className="font-bold text-white">
                  <FaCheck size={14} />
                </span>
              )}
            </div>
            <span className="font-medium text-gray-800">
              Apply Cash + Points
            </span>
            <span className="text-sm text-gray-500">must be logged in</span>
            <div className="pl-4">
              <span className="block rounded-sm bg-[#008020] px-1 text-[10.2px] font-bold text-white">
                NEW
              </span>
            </div>
          </div>

          {/* Right Side - Icons */}
          <div className="flex items-center space-x-1">
            <span className="text-lg font-bold text-green-600">$</span>
            <span className="text-lg font-bold text-gray-800">+</span>
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-600 text-xs text-white">
              PTS
            </div>
          </div>
        </label>

        {/* Apply Flight credits  */}
        <label
          className={`flex cursor-pointer ${isFlightCredits ? 'border-black-sw' : 'border hover:border-blue-sw'} items-center justify-between border p-3 transition-all`}
        >
          <input
            className="hidden"
            type="checkbox"
            {...register('payment.redeem.applyFlightCredits')}
            checked={isFlightCredits}
            onChange={() => {
              const newValue = !isFlightCredits;
              setIsFlightCredits(newValue);
              setValue('payment.redeem.applyFlightCredits', newValue);
            }}
          />
          {/* Left Side - Text */}
          <div className="flex items-center space-x-2">
            <div
              className={`flex ${isFlightCredits ? 'bg-[#3f53b2]' : 'bg-white'} h-4 w-4 items-center justify-center rounded border border-gray-500`}
            >
              {isFlightCredits && (
                <span className="font-bold text-white">
                  <FaCheck size={14} />
                </span>
              )}
            </div>
            <span className="font-medium text-gray-800">
              Apply Flight Credits
            </span>
          </div>

          {/* Right Side - Icons */}
          <div className="flex items-center space-x-1">
            <span className="text-lg font-bold text-green-600">$</span>
            <span className="text-lg font-bold text-gray-800">+</span>
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-600 text-xs text-white">
              PTS
            </div>
          </div>
        </label>

        {/* Apply Gift Card  */}
        <label
          className={`flex cursor-pointer ${isGiftCard ? 'border-black-sw' : 'border hover:border-blue-sw'} items-center justify-between border p-3 transition-all`}
        >
          <input
            className="hidden"
            type="checkbox"
            {...register('payment.redeem.applyGiftCard')}
            checked={isGiftCard}
            onChange={() => {
              const newValue = !isGiftCard;
              setIsGiftCard(newValue);
              setValue('payment.redeem.applyGiftCard', newValue);
            }}
          />
          {/* Left Side - Text */}
          <div className="flex items-center space-x-2">
            <div
              className={`flex ${isGiftCard ? 'bg-[#3f53b2]' : 'bg-white'} h-4 w-4 items-center justify-center rounded border border-gray-500`}
            >
              {isGiftCard && (
                <span className="font-bold text-white">
                  <FaCheck size={14} />
                </span>
              )}
            </div>
            <span className="font-medium text-gray-800">Apply Gift Card</span>
          </div>

          {/* Right Side - Icons */}
          <div className="flex items-center space-x-1">
            <img
              src="/images/purchase/payment/giftcard.svg"
              className="h-[35px] w-[74px]"
              alt=""
            />
          </div>
        </label>

        {/* Apply LUV vouchers */}
        <label
          className={`flex cursor-pointer ${isLUVVouchers ? 'border-black-sw' : 'border hover:border-blue-sw'} items-center justify-between border p-3 transition-all`}
        >
          <input
            className="hidden"
            type="checkbox"
            {...register('payment.redeem.applyLUVVouchers')}
            checked={isLUVVouchers}
            onChange={() => {
              const newValue = !isLUVVouchers;
              setIsLUVVouchers(newValue);
              setValue('payment.redeem.applyLUVVouchers', newValue);
            }}
          />
          {/* Left Side - Text */}
          <div className="flex items-center space-x-2">
            <div
              className={`flex ${isLUVVouchers ? 'bg-[#3f53b2]' : 'bg-white'} h-4 w-4 items-center justify-center rounded border border-gray-500`}
            >
              {isLUVVouchers && (
                <span className="font-bold text-white">
                  <FaCheck size={14} />
                </span>
              )}
            </div>
            <span className="font-medium text-gray-800">
              Apply LUV Vouchers
            </span>
          </div>

          {/* Right Side - Icons */}
          <div className="flex items-center space-x-1">
            <img
              src="/images/purchase/payment/giftcard.svg"
              className="h-[35px] w-[74px]"
              alt=""
            />
          </div>
        </label>
      </div>
    </div>
  );
}
