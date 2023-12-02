import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = ({ navStyle }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleHamburgerMenu = () => {
        setIsOpen(prevState => !prevState);
    };

    const { pathname } = useLocation();
    console.log(pathname);

    return (
        <nav className={navStyle === "navbar" ? "nav" : ""}>
            {navStyle === "navbar" && (
                <div className="hamburger-menu" onClick={toggleHamburgerMenu}>
                    <FontAwesomeIcon
                        icon={isOpen ? faTimes : faBars}
                        size="2x"
                    />
                </div>
            )}
            <ul
                className={`${navStyle} ${
                    navStyle === "navbar" ? (isOpen ? "open" : "closed") : ""
                }`}>
                <li>
                    <Link
                        to="/"
                        onClick={toggleHamburgerMenu}
                        className={
                            navStyle === "navbar" && pathname === "/"
                                ? "selected"
                                : ""
                        }>
                        HOME
                    </Link>
                </li>
                <li>
                    <Link
                        to="/about"
                        onClick={toggleHamburgerMenu}
                        className={
                            navStyle === "navbar" && pathname === "/about"
                                ? "selected"
                                : ""
                        }>
                        ABOUT
                    </Link>
                </li>
                <li>
                    <Link
                        to="/menu"
                        onClick={toggleHamburgerMenu}
                        className={
                            navStyle === "navbar" && pathname === "/menu"
                                ? "selected"
                                : ""
                        }>
                        MENU
                    </Link>
                </li>
                <li>
                    <Link
                        to="/reservations"
                        onClick={toggleHamburgerMenu}
                        className={
                            navStyle === "navbar" &&
                            pathname === "/reservations"
                                ? "selected"
                                : ""
                        }>
                        RESERVATIONS
                    </Link>
                </li>
                <li>
                    <Link
                        to="/order-online"
                        onClick={toggleHamburgerMenu}
                        className={
                            navStyle === "navbar" &&
                            pathname === "/order-online"
                                ? "selected"
                                : ""
                        }>
                        ORDER ONLINE
                    </Link>
                </li>
                <li>
                    <Link
                        to="/login"
                        onClick={toggleHamburgerMenu}
                        className={
                            navStyle === "navbar" && pathname === "/login"
                                ? "selected"
                                : ""
                        }>
                        LOGIN
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
