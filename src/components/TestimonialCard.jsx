import React from "react";
import "./styles/testimonialCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const TestimonialCard = ({ customer }) => {
    return (
        <article className="testimonial-card">
            <img src={customer.image} alt={customer.name} />
            <h4>{customer.name}</h4>
            <span>
                {Array.from({ length: customer.rating }).map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} size="xs" />
                ))}
            </span>
            <blockquote>
                <p>"{customer.says}"</p>
            </blockquote>
        </article>
    );
};

export default TestimonialCard;
