import React from "react";
import restaurantFoodImage from "../assets/restaurant-food.jpg";
import "components/styles/hero.css";

const Hero = () => {
    return (
        <section className="hero">
            <div className="container grid">
                <div className="hero-info">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        We are a family owned Mediterranean restaurant, focused
                        on traditional recipes served with a modern twist.
                    </p>
                </div>
                <img
                    className="hero-image"
                    src={restaurantFoodImage}
                    alt="Restaurant food"
                />
            </div>
        </section>
    );
};

export default Hero;
