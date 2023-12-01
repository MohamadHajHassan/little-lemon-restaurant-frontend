import React, { useReducer } from "react";
import BookingForm from "components/BookingForm";
import { fetchAPI, submitAPI } from "../utilities/api";

const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return response.length !== 0 ? response : availableTimes;
};

const initializeTimes = initialTimes => [
    ...initialTimes,
    ...fetchAPI(new Date()),
];

const Reservations = () => {
    const [availableTimes, dispatchDateChange] = useReducer(
        updateTimes,
        [],
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
