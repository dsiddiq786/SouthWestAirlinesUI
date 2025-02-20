import { useState } from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';

export default function PaymentFirstTimeFlying({ register, setValue }) {
  const [isFirstTimeFlying, setIsFirstTimeFlying] = useState(false);
  return (
    <label
      onClick={() => {
        const newValue = !isFirstTimeFlying;
        setIsFirstTimeFlying(newValue);
        setValue('payment.firstTimeFlying', newValue); // Use newValue instead of isFirstTimeFlying
      }}
      className="flex cursor-pointer items-start gap-2"
      htmlFor="keepUpToDate"
    >
      <input
        type="checkbox"
        {...register(`payment.firstTimeFlying`)}
        checked={isFirstTimeFlying}
        onChange={() => {
          const newValue = !isFirstTimeFlying;
          setIsFirstTimeFlying(newValue);
          setValue('payment.firstTimeFlying', newValue); // Use newValue instead of isFirstTimeFlying
        }}
      />
      <span className="flex items-center gap-3 text-[13px] leading-4 text-gray-sw">
        <span>
          First time flying with Southwest Airlines<sup>®</sup>
        </span>{' '}
        <BsInfoCircleFill size={16} className="text-blue-sw" />
      </span>
    </label>
  );
}
