import React, { useReducer } from "react";
import BookingForm from "components/BookingForm";

const updateTimes = (availableTimes, date) => {
    return availableTimes;
};

const initializeTimes = initialTimes => {
    return initialTimes;
};

const Reservations = () => {
    const [availableTimes, dispatchDateChange] = useReducer(
        updateTimes,
        [
            { label: "17:00", value: "17:00" },
            { label: "18:00", value: "18:00" },
            { label: "19:00", value: "19:00" },
            { label: "20:00", value: "20:00" },
            { label: "21:00", value: "21:00" },
            { label: "22:00", value: "22:00" },
        ],
        initializeTimes
    );
    return (
        <BookingForm
            availableTimes={availableTimes}
            dispatchDateChange={dispatchDateChange}
        />
    );
};

export default Reservations;
