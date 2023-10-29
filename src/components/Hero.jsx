import React from "react";
import restaurantFoodImage from "../assets/restaurant-food.jpg";

const Hero = () => {
    return (
        <section>
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    We are a family owned Mediterranean restaurant, focused on
                    traditional recipes served with a modern twist.
                </p>
            </div>
            <img src={restaurantFoodImage} alt="Restaurant food" />
        </section>
    );
};

export default Hero;
