import { FaChevronDown } from 'react-icons/fa';
import { useFlights } from '@/context/FlightContext';
import PassengerContactMethod from './Inputs/PassengerContactMethod';
import PassengerCountryCode from './Inputs/PassengerCountryCode';
import PassengerPhoneNum from './Inputs/PassengerPhoneNum';
import PassengerEmail from './Inputs/PassengerEmail';

export default function PassengerContactDetailsItem({
  register,
  errors,
  clearErrors,
  setValue,
  getValues,
}) {
  const contactMethod = getValues('contactDetails.contactMethod');
  return (
    <>
      {/* Inputs */}
      <section className="flex flex-col gap-3">
        {/* Contact method, country code, phone, number or email */}
        <div className="flex gap-[20px]">
          {/* Contact Method */}
          <PassengerContactMethod
            register={register}
            errors={errors}
            clearErrors={clearErrors}
            setValue={setValue}
          />

          {contactMethod === 'Email me' ? (
            <div className="flex">
              {/* Email Address */}
              <PassengerEmail
                register={register}
                errors={errors}
                clearErrors={clearErrors}
              />
            </div>
          ) : (
            <div className="flex gap-[20px]">
              {/* Country code */}
              <PassengerCountryCode
                register={register}
                errors={errors}
                clearErrors={clearErrors}
                setValue={setValue}
              />

              {/* Phone number  */}
              <PassengerPhoneNum
                register={register}
                errors={errors}
                clearErrors={clearErrors}
              />
            </div>
          )}
        </div>

        {/* Notifications */}
        {contactMethod !== 'Email me' && (
          <div className="pb-[19px]">
            <span className="text-[13px] italic text-gray-sw">
              {contactMethod === 'Text me'
                ? 'Messages will arrive via text. If you no longer wish to receive messages, you’ll need to opt out. Message frequency varies. Message and data rates apply.'
                : 'Quiet Time observed for voice notifications. Southwest Airlines will not call between 10:00 p.m. and 8:00 a.m. local time. However, if a flight update occurs during the quiet time and is also within four (4) hours prior to scheduled departure, then a voice notification will be sent.'}
            </span>
          </div>
        )}
      </section>
    </>
  );
}
