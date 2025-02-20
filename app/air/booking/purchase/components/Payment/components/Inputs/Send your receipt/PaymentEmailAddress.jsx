import { MdError } from 'react-icons/md';

export default function PaymentEmailAddress({ register, errors, clearErrors }) {
  const formatEmail = (event) => {
    let value = event.target.value;

    // Convert to lowercase
    value = value.toLowerCase();

    // Remove spaces
    value = value.replace(/\s+/g, '');

    // Prevent multiple '@' symbols
    const atIndex = value.indexOf('@');
    if (atIndex !== -1) {
      value =
        value.slice(0, atIndex + 1) +
        value.slice(atIndex + 1).replace(/@/g, '');
    }

    // Prevent multiple dots before the domain
    value = value.replace(/\.{2,}/g, '.');

    // Update input field
    event.target.value = value;
  };

  return (
    <div className="flex flex-col">
      <span className="pb-[8px] text-[11px] font-bold text-gray-sw">
        EMAIL ADDRESS <span className="text-red-600">*</span>
      </span>
      <div className="relative">
        <input
          type="email"
          name="email"
          autoComplete="new-password"
          readOnly
          onFocus={(e) => e.target.removeAttribute('readOnly')}
          {...register(`payment.sendReceipt.email`, {
            required: 'Enter email address',
          })}
          onChange={(event) => {
            clearErrors(`payment.sendReceipt.email`);
            formatEmail(event);
          }} // Clear error on input change
          className={`h-[32px] w-[300px] rounded-sm py-[3px] pl-[7px] text-[13px] ${
            errors?.payment?.sendReceipt?.email
              ? 'border border-red-600'
              : 'inner-box-shadow-sw border'
          } text-black-sw shadow-inner`}
        />
        {errors?.payment?.sendReceipt?.email && (
          <span className="absolute right-[0.9rem] top-[0.35em]">
            <MdError size={20} className="text-red-600" />
          </span>
        )}
      </div>
      {errors?.payment?.sendReceipt?.email && (
        <span className="h-4">
          <span className="text-[11px] text-red-600">
            {errors.payment.sendReceipt.email.message?.toString()}
          </span>
        </span>
      )}
    </div>
  );
}
