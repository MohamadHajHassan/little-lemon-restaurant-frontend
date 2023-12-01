import React, { useState } from "react";
import "./styles/bookingForm.css";

const BookingForm = ({ availableTimes, dispatchDateChange }) => {
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

    const handleFormSubmit = e => {
        e.preventDefault();
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
                </div>
                <div>
                    <label htmlFor="res-time">Choose time</label>
                    <select
                        id="res-time"
                        value={time}
                        onChange={handleTimeChange}>
                        {availableTimes.map(time => (
                            <option key={time.value} value={time.value}>
                                {time.label}
                            </option>
                        ))}
                    </select>
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
