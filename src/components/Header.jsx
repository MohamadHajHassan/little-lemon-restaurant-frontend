import React from "react";
import logo from "assets/logo.png";
import "components/styles/header.css";
import Nav from "./Nav";

const Header = () => {
    return (
        <header>
            <img src={logo} alt="Little Lemon Logo" />
            <Nav />
        </header>
    );
};

export default Header;
