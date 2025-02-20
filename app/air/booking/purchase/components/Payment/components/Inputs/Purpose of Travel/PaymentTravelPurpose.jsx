import { useForm } from 'react-hook-form';

export default function PaymentTravelPurpose({ register }) {
  return (
    <>
      {/* Radio Buttons */}
      <ul className="flex list-none items-center gap-4">
        {['Personal', 'Business', 'Both', 'Prefer not to say'].map((option) => (
          <li key={option}>
            <label className="flex cursor-pointer items-center space-x-2 text-gray-600">
              <input
                type="radio"
                value={option}
                {...register('payment.purposeOfTravel')}
              />
              <span className="text-[13px] text-gray-sw">{option}</span>
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}
