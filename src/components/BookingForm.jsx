import React from "react";

const BookingForm = () => {
    return (
        <form>
            <div>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" />
            </div>
            <div>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time ">
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
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
                />
            </div>
            <div>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Make Your reservation" />
            </div>
        </form>
    );
};

export default BookingForm;
