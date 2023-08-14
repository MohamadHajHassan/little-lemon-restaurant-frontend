import React from "react";
import logo from "assets/logo.png";
import "components/styles/header.css";

const Header = () => {
    return (
        <header>
            <img src={logo} alt="Little Lemon Logo" />
        </header>
    );
};

export default Header;
