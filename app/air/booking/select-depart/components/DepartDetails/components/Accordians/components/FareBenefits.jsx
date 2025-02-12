import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function FareBenefits() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        {/* Fare Benefits */}
        <span className="text-[16px] text-gray-sw">Fare Benefits</span>
        {/* dropdown icon */}
        <button
          className="mx-4"
          onClick={() => setIsDropDownOpen(!isDropDownOpen)}
        >
          {isDropDownOpen ? (
            <FaChevronUp size={25} className="text-[#636363]" />
          ) : (
            <FaChevronDown size={25} className="text-[#636363]" />
          )}
        </button>
      </div>

      {/* Details */}
      {isDropDownOpen && (
        <div className="flex flex-col px-10 pt-6 text-[14px] text-gray-sw">
          <h2 className="mb-2 font-bold">
            Two bags fly free<sup>®1</sup>
          </h2>
          <p className="mb-4">
            First and second checked bags. Weight and size limits apply. A golf
            bag or skis in a container acceptable to Southwest<sup>®</sup> can
            be substituted for one checked bag.
          </p>

          <h2 className="mb-2 font-bold">
            No change<sup>2</sup> or cancel fees<sup>3</sup>
          </h2>
          <p className="mb-4">
            If you need to change an upcoming flight itinerary, you’ll only pay
            the difference in fare (if one applies). Failure to cancel a
            reservation at least 10 minutes prior to scheduled departure may
            result in forfeited travel funds.
          </p>

          <h2 className="mb-2 font-bold">
            Flight credit<sup>4</sup>
          </h2>
          <p className="mb-4">
            Flight credits will be issued as long as the flight is canceled at
            least 10 minutes prior to the scheduled departure. Flight credits
            don’t expire and are non-transferable. For travel booked with Rapid
            Rewards points: starting July 1, 2023 (12:00 a.m. CT), for Wanna Get
            Away® or Wanna Get Away Plus™ reward travel reservations (booked
            with points): If you do not cancel your reservation at least 10
            minutes before the flight’s original scheduled departure time, any
            points used for booking will be forfeited, along with any taxes and
            fees associated with your reward travel reservation.
          </p>

          <h2 className="mb-2 font-bold">
            Transferable Flight Credit™<sup>5</sup>
          </h2>
          <p>
            Transferable Flight Credit™ will be issued as long as the flight is
            canceled at least 10 minutes prior to the scheduled departure.
            Transferable Flight Credit can be transferred between Rapid Rewards
            <sup>®</sup> Members. Only one transfer is permitted. For bookings
            made through a Southwest<sup>®</sup> Business channel, there is a
            limitation to transfer only between employees within the
            organization. Transferable Flight Credits don’t expire. For travel
            booked with Rapid Rewards points: starting July 1, 2023 (12:00 a.m.
            CT), for Wanna Get Away® or Wanna Get Away Plus™ reward travel
            reservations (booked with points): If you do not cancel your
            reservation at least 10 minutes before the flight’s original
            scheduled departure time, any points used for booking will be
            forfeited, along with any taxes and fees associated with your reward
            travel reservation.
          </p>
        </div>
      )}
    </div>
  );
}
