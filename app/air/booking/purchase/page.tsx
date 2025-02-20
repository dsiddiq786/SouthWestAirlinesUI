'use client';

import { useSearchParams } from 'next/navigation';
import { useFlights } from '@/context/FlightContext';
import { useEffect, useRef, useState } from 'react';
import Footer from '@/app/components/Footer/Footer';
import Header from '../select-depart/components/Header';
import Accordians from '../select-depart/components/DepartDetails/components/Accordians/Accordians';
import PurchaseProgress from './components/PurchaseProgress';
import FlightPurchaseDetails from './components/FlightPurchaseDetails';
import PassengerInfo from './components/WhoIsFlying/PassengerInfo';
import { useForm } from 'react-hook-form';
import KeepConnected from './components/KeepConnected/KeepConnected';
import PaymentMethod from './components/Payment/PaymentMethod';
import ShareYourPlans from './components/ShareYourPlans';
import PurchasePriceBreakout from './components/Payment/components/PurchasePriceBreakout';
import { useRouter } from 'next/navigation'; // Use next/router for older Next.js versions
import { Spinner } from '@heroui/react';

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    setSelectedTravelType,
    setSelectedBagFee,
    setPassengerCounts,
    setSelectedDepartCodes,
    setSelectedArriveCodes,
    setDepartDate,
    setReturnDate,
    setSelectedDepartFlight,
    setSelectedReturnFlight,
    setIsDepartContinueBtnClicked,
  } = useFlights();
  const { filteredFlights, filteredReturnFlights } = useFlights();

  useEffect(() => {
    // Retrieve values from search params
    const travelType = searchParams.get('travelType') || '';
    const bagFee = searchParams.get('bagFee') || '';
    const passengerCount = JSON.parse(
      decodeURIComponent(searchParams.get('passengerCount') || '')
    );
    const departCodes = searchParams.get('departCodes')?.split(',') || [];
    const arriveCodes = searchParams.get('arriveCodes')?.split(',') || [];
    const departDate = searchParams.get('departDate') || '';
    const returnDate = searchParams.get('returnDate') || '';
    const isReturnFlight = searchParams.get('isReturnFlight') || false;

    // set the values according to the searchParams
    setSelectedTravelType(travelType);
    setSelectedBagFee(bagFee);
    setPassengerCounts(passengerCount);
    setSelectedDepartCodes(departCodes);
    setSelectedArriveCodes(arriveCodes);
    setDepartDate(departDate);
    setReturnDate(returnDate);
    setIsDepartContinueBtnClicked(isReturnFlight);
  }, [searchParams]); // Runs when search params change

  useEffect(() => {
    const fetchDepartFlight = async () => {
      // Wait until `filteredFlights` contains data
      while (filteredFlights.length === 0) {
        await new Promise((resolve) => setTimeout(resolve, 100)); // Check every 100ms
      }

      if (searchParams.get('departFlight') !== 'null') {
        try {
          const departFlight = JSON.parse(
            decodeURIComponent(searchParams.get('departFlight') || '')
          );

          const testFlight = {
            flight:
              filteredFlights.flatMap((group: { flights: any[] }) =>
                group.flights.filter(
                  (flightDetail: { id: any }) =>
                    flightDetail.id === departFlight.flightId
                )
              )[0] || null, // Extract the first matching flight or set null if not found

            price: departFlight?.price,
          };

          setSelectedDepartFlight(testFlight);
        } catch (error) {
          console.error('Error parsing departFlight:', error);
        }
      }
    };

    fetchDepartFlight();
  }, [searchParams, filteredFlights]); // Runs when `filteredFlights` updates

  useEffect(() => {
    const fetchReturnFlight = async () => {
      // Wait until `filteredReturnFlights` contains data
      while (filteredReturnFlights.length === 0) {
        await new Promise((resolve) => setTimeout(resolve, 100)); // Check every 100ms
      }

      if (searchParams.get('returnFlight') !== 'null') {
        try {
          const returnFlight = JSON.parse(
            decodeURIComponent(searchParams.get('returnFlight') || '')
          );

          const testFlight = {
            flight:
              filteredReturnFlights.flatMap((group: { flights: any[] }) =>
                group.flights.filter(
                  (flightDetail: { id: any }) =>
                    flightDetail.id === returnFlight.flightId
                )
              )[0] || null, // Extract the first matching flight or set null if not found

            price: returnFlight?.price,
          };

          setSelectedReturnFlight(testFlight);
        } catch (error) {
          console.error('Error parsing returnFlight:', error);
        }
      }
    };

    fetchReturnFlight();
  }, [searchParams, filteredReturnFlights]); // Runs when `return filtered flights` updates

  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);

  const handleConfirmationPageRedirect = () => {
    const params = new URLSearchParams(searchParams);
    router.push(`/air/booking/confirmation?${params.toString()}`);
  };

  const {
    setTempFormDetails,
    register,
    handleSubmit,
    formState,
    formState: { errors },
    clearErrors,
    setValue,
    getValues,
    trigger,
    watch,
    setFocus,
    reset,
  } = useFlights();

  // const [formDetails, setFormDetails] = useState({});
  const formValues = watch(); // Watches all form fields dynamically
  // setFormDetails(formValues);

  const onSubmit = (data: any) => {
    setTempFormDetails(watch());
    reset();
    handleConfirmationPageRedirect();
  };

  // Function to recursively extract field names from nested objects/arrays
  const extractFieldNames = (obj: any, prefix = ''): string[] => {
    let fieldNames: string[] = [];

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const fieldPath = prefix ? `${prefix}.${key}` : key;

        if (typeof obj[key] === 'object' && obj[key] !== null) {
          fieldNames = [
            ...fieldNames,
            ...extractFieldNames(obj[key], fieldPath),
          ];
        } else {
          fieldNames.push(fieldPath);
        }
      }
    }

    return fieldNames;
  };

  // General function to focus on each registered input before submission
  const focusOnAllFieldsAndSubmit = async (event: any) => {
    event.preventDefault();

    const fieldNames = extractFieldNames(formValues); // Extract all field names dynamically

    setIsSpinnerVisible(true);
    for (const field of fieldNames) {
      setFocus(field as any);
      await new Promise((resolve) => setTimeout(resolve, 10)); // Small delay for visibility
    }
    setIsSpinnerVisible(false);

    handleSubmit(onSubmit)(); // Submit the form after focusing on all fields
  };

  return (
    <>
      <div className="-ml-2 text-black-sw">
        <Header isModifyVisiblle={false} />
        <div className="bg-white">
          <div className="container-sw pb-[40px] pt-[15px]">
            {/* Progress */}
            <section>
              <PurchaseProgress />
            </section>

            <div className="flex flex-col gap-3">
              {/* Purchase flight details */}
              <section>
                <FlightPurchaseDetails isModify={true} />
              </section>

              <form
                className="flex flex-col gap-3"
                onSubmit={focusOnAllFieldsAndSubmit}
              >
                {/* who is flying */}
                <section>
                  <PassengerInfo
                    register={register}
                    errors={errors}
                    clearErrors={clearErrors}
                    setValue={setValue}
                  />
                </section>

                {/* Keep connected */}
                <section>
                  <KeepConnected
                    register={register}
                    errors={errors}
                    clearErrors={clearErrors}
                    setValue={setValue}
                    getValues={getValues}
                  />
                </section>

                {/* Payment Method */}
                <section>
                  <PaymentMethod
                    register={register}
                    errors={errors}
                    clearErrors={clearErrors}
                    setValue={setValue}
                    getValues={getValues}
                  />
                </section>

                {/* Share you plans */}
                <section>
                  <ShareYourPlans />
                </section>

                {/* Price breakout */}
                <PurchasePriceBreakout />

                {/* material info and submit button */}
                <section className="flex w-full flex-col justify-end pr-7 text-right">
                  {/* info */}
                  <div className="flex flex-col gap-2">
                    <h2 className="text-[13px] font-bold text-black-sw">
                      Transportation of hazardous materials
                    </h2>
                    <p className="text-[11px] text-gray-sw">
                      Federal law forbids the carriage of hazardous materials
                      such as aerosols, fireworks,
                      <br />
                      lithium batteries, and flammable liquids aboard the
                      aircraft in your checked or carryon baggage.
                      <br />
                      E-cigarettes are not permitted in checked baggage and must
                      be transported in carryon baggage only.
                      <br />
                      By clicking 'Purchase', you acknowledge that you
                      understand the hazardous materials restrictions and
                      penalties.
                      <br />{' '}
                      <span className="cursor-pointer text-blue-sw underline transition-all hover:text-black-sw">
                        View more on hazardous materials
                      </span>{' '}
                    </p>
                  </div>

                  <div className="mt-14 flex flex-col gap-1 text-[13px] text-gray-sw">
                    <p className="leading-4">
                      All fares and fare ranges are subject to change until{' '}
                      <br />
                      purchased and are per person for each way of travel.
                    </p>
                    <p className="">
                      By clicking ‘Purchase’, I agree to and acknowledge receipt
                      of the{' '}
                      <span className="cursor-pointer text-blue-sw underline transition-all hover:text-black-sw">
                        Terms and conditions,
                      </span>{' '}
                      <br />{' '}
                      <span className="cursor-pointer text-blue-sw underline transition-all hover:text-black-sw">
                        Privacy Policy,
                      </span>{' '}
                      <span className="cursor-pointer text-blue-sw underline transition-all hover:text-black-sw">
                        Fare Rules,
                      </span>{' '}
                      <span className="cursor-pointer text-blue-sw underline transition-all hover:text-black-sw">
                        Contract of Carriage,
                      </span>{' '}
                      and{' '}
                      <span className="cursor-pointer text-blue-sw underline transition-all hover:text-black-sw">
                        Notice of Incorporated Terms
                      </span>
                    </p>
                  </div>
                  {/* Purchase/Submit button */}
                  <div className="mt-8">
                    <button
                      // onClick={() => handleAllFormsSubmit()}
                      type="submit"
                      className="box-shadow-sw rounded-sm border border-transparent bg-yellow-sw px-[22px] py-3 text-[17px] font-bold text-black-sw transition-all duration-300 hover:border-black-sw hover:shadow-none"
                    >
                      Purchase
                    </button>
                  </div>
                </section>
              </form>

              {/* Accordian */}
              <section className="my-16">
                <Accordians />
              </section>
            </div>
          </div>
        </div>
        <Footer isLinks={false} />
      </div>
      {isSpinnerVisible && (
        <div className="fixed inset-0 grid place-items-center bg-white">
          <Spinner />
        </div>
      )}
    </>
  );
}
