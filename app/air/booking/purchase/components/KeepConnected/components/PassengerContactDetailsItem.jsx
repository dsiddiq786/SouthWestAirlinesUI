import { FaChevronDown } from 'react-icons/fa';
import { useFlights } from '@/context/FlightContext';
import PassengerContactMethod from './Inputs/PassengerContactMethod';
import PassengerCountryCode from './Inputs/PassengerCountryCode';

export default function PassengerContactDetailsItem({
  passenger,
  register,
  errors,
  clearErrors,
  setValue,
  getValues,
}) {
  return (
    <>
      {/* Inputs */}
      <section className="flex flex-col gap-2">
        {/* Contact method, country code, phone, number or email */}
        <div className="flex gap-[20px]">
          {/* Contact Method */}
          <PassengerContactMethod
            register={register}
            errors={errors}
            clearErrors={clearErrors}
            setValue={setValue}
          />

          <div className="flex gap-[20px]">
            {/* Country code */}
            <PassengerCountryCode
              register={register}
              errors={errors}
              clearErrors={clearErrors}
              setValue={setValue}
            />
          </div>
        </div>
      </section>
    </>
  );
}
