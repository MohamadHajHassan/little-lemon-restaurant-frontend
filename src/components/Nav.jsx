import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = ({ navStyle }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleHamburgerMenu = () => {
        setIsOpen(prevState => !prevState);
    };

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
            <ul className={`${navStyle} ${navStyle === "navbar"? isOpen ? "open" : "closed":'' }`}>
                <li>
                    <Link to="/" onClick={toggleHamburgerMenu}>
                        HOME
                    </Link>
                </li>
                <li>
                    <Link to="/about" onClick={toggleHamburgerMenu}>
                        ABOUT
                    </Link>
                </li>
                <li>
                    <Link to="/menu" onClick={toggleHamburgerMenu}>
                        MENU
                    </Link>
                </li>
                <li>
                    <Link to="/reservations" onClick={toggleHamburgerMenu}>
                        RESERVATIONS
                    </Link>
                </li>
                <li>
                    <Link to="/order-online" onClick={toggleHamburgerMenu}>
                        ORDER ONLINE
                    </Link>
                </li>
                <li>
                    <Link to="/login" onClick={toggleHamburgerMenu}>
                        LOGIN
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
