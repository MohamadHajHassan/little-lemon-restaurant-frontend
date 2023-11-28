import React from "react";
import "./styles/dishCard.css";

const DishCard = ({ dish }) => {
    return (
        <article className="dish-card">
            <div className="dish-card-image">
                <img src={dish.image} alt={dish.name} />
            </div>
            <div className="dish-card-header">
                <h3>{dish.name}</h3>
                <span>{dish.price}</span>
            </div>
            <div className="dish-card-body">
                <p>{dish.description}</p>
                <p>Order a delivery</p>
            </div>
        </article>
    );
};

export default DishCard;
