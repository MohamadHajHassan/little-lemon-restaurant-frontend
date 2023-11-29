import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ navStyle }) => {
    return (
        <nav>
            <ul className={navStyle}>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/about">ABOUT</Link>
                </li>
                <li>
                    <Link to="/menu">MENU</Link>
                </li>
                <li>
                    <Link to="/reservations">RESERVATIONS</Link>
                </li>
                <li>
                    <Link to="/order-online">ORDER ONLINE</Link>
                </li>
                <li>
                    <Link to="/login">LOGIN</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
