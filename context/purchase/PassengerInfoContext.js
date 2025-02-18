import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';

export function usePassengerInfo(totalPassengers) {
    const [passengerInfo, setPassengerInfo] = useState([]);

    useEffect(() => {
        // Generate passenger info based on count
        const passengers = Array.from({ length: totalPassengers }, (_, index) => ({
            passengerNo: index + 1,
            info: {
                [`firstName${index + 1}`]: '',
                [`middleName${index + 1}`]: '',
                [`lastName${index + 1}`]: '',
                [`suffix${index + 1}`]: '',
                [`dateOfBirth${index + 1}`]: '',
                [`gender${index + 1}`]: '',
                [`rapidRewardAcc${index + 1}`]: '',
                [`redress${index + 1}`]: '',
                [`knownTraveler${index + 1}`]: '',
            },
        }));

        setPassengerInfo(passengers);
    }, [totalPassengers]); // Re-run when passengerCount changes


    return { passengerInfo, setPassengerInfo };
}
