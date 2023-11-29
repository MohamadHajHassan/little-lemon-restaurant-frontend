import React from "react";
import "./styles/dishCard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";

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
                <Link to={"/order-online"}>
                    Order a delivery
                    <FontAwesomeIcon icon={faMotorcycle} />
                </Link>
            </div>
        </article>
    );
};

export default DishCard;
