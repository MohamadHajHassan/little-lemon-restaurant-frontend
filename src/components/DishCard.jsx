import React from "react";

const DishCard = ({ dish }) => {
    return (
        <article>
            <div>
                <img src={dish.image} alt={dish.name} />
            </div>
            <div>
                <h3>{dish.name}</h3>
                <span>{dish.price}</span>
            </div>
            <div>
                <p>{dish.description}</p>
                <p>Order a delivery</p>
            </div>
        </article>
    );
};

export default DishCard;
