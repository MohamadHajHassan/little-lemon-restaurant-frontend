import React from "react";
import "./styles/testimonialCard.css";

const TestimonialCard = ({ customer }) => {
    return (
        <article className="testimonial-card">
            <img src={customer.image} alt={customer.name} />
            <h4>{customer.name}</h4>
            <blockquote>
                <p>"{customer.says}"</p>
            </blockquote>
        </article>
    );
};

export default TestimonialCard;
