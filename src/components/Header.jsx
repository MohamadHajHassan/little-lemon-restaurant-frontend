import React from "react";
import logo from "assets/logo.png";
import "components/styles/header.css";
import Nav from "./Nav";

const Header = () => {
    return (
        <header className="container header">
            <img src={logo} alt="Little Lemon Logo" className="logo" />
            <Nav navStyle="navbar" />
        </header>
    );
};

export default Header;
