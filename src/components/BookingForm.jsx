import React, { useState } from "react";
import "./styles/bookingForm.css";

const BookingForm = ({ availableTimes, dispatchDateChange, submitForm }) => {
    const occasions = ["Birthday", "Anniversary"];

    const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
    const [time, setTime] = useState(availableTimes[0]);
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState(occasions[0]);

    const handleDateChange = e => {
        setDate(e.target.value);
        dispatchDateChange(e.target.value);
    };

    const handleTimeChange = e => {
        setTime(e.target.value);
    };

    const handleGuestsChange = e => {
        setGuests(e.target.value);
    };

    const handleOccasionChange = e => {
        setOccasion(e.target.value);
    };

    const validationRules = {
        date: {
            required: true,
        },

        time: {
            required: true,
        },
        guests: {
            required: true,
            min: 1,
            max: 10,
        },
        occasion: {
            required: true,
        },
    };

    const [errors, setErrors] = useState({});

    const getFormValues = () => ({
        date,
        time,
        guests,
        occasion,
    });

    const handleFormSubmit = e => {
        e.preventDefault();
        const errors = {};
        const formValues = getFormValues();
        for (const field in validationRules) {
            const rule = validationRules[field];
            const value = formValues[field];
            console.log(value);

            if (field === "date") {
                const chosenDate = new Date(value);
                const minDate = new Date(
                    new Date().toISOString().split("T")[0]
                );
                if (chosenDate < minDate) {
                    errors[field] = `Date cannot be less than ${
                        minDate.toISOString().split("T")[0]
                    }!`;
                }
            } else {
                if (rule.required && !value) {
                    errors[field] = `${field} is required!`;
                } else if (rule.min && value < rule.min) {
                    errors[field] = `${field} must be at least ${rule.min}!`;
                } else if (rule.max && value > rule.max) {
                    errors[
                        field
                    ] = `${field} must be less than or equal to ${rule.max}!`;
                }
            }
        }
        if (Object.keys(errors).length === 0) {
            submitForm({ date, time, guests, occasion });
        } else {
            setErrors(errors);
        }
    };

    return (
        <form onSubmit={handleFormSubmit} className="reservations">
            <h2>Book a table</h2>
            <div className="form-items">
                <div>
                    <label htmlFor="res-date">Choose date</label>
                    <input
                        type="date"
                        id="res-date"
                        value={date}
                        onChange={handleDateChange}
                    />
                    {errors.date && <p className="error">{errors.date}</p>}
                </div>
                <div>
                    <label htmlFor="res-time">Choose time</label>
                    <select
                        id="res-time"
                        value={time}
                        onChange={handleTimeChange}>
                        {availableTimes.map(time => (
                            <option value={time} key={time}>
                                {time}
                            </option>
                        ))}
                    </select>
                    {errors.time && <p className="error">{errors.time}</p>}
                </div>
                <div>
                    <label htmlFor="guests">Number of guests</label>
                    <input
                        type="number"
                        placeholder="1"
                        min="1"
                        max="10"
                        id="guests"
                        value={guests}
                        onChange={handleGuestsChange}
                    />
                    {errors.guests && <p className="error">{errors.guests}</p>}
                </div>
                <div>
                    <label htmlFor="occasion">Occasion</label>
                    <select
                        id="occasion"
                        value={occasion}
                        onChange={handleOccasionChange}>
                        {occasions.map(occasion => (
                            <option key={occasion} value={occasion}>
                                {occasion}
                            </option>
                        ))}
                    </select>
                    {errors.occasion && (
                        <p className="error">{errors.occasion}</p>
                    )}
                </div>
                <div>
                    <input
                        type="submit"
                        value="Make Your reservation"
                        className="button-primary btn"
                    />
                </div>
            </div>
        </form>
    );
};

export default BookingForm;
