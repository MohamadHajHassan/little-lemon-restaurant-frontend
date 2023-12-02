import React, { useReducer } from "react";
import BookingForm from "components/BookingForm";
import { fetchAPI, submitAPI } from "../utilities/api";
import { useNavigate } from "react-router";

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

    const navigate = useNavigate();
    const submitForm = formData => {
        const response = submitAPI(formData);
        if (response) navigate("/confirmed-booking");
    };

    return (
        <BookingForm
            availableTimes={availableTimes}
            dispatchDateChange={dispatchDateChange}
            submitForm={submitForm}
        />
    );
};

export default Reservations;
