import React from "react";
import logoFooter from "../assets/logo-footer.png";
import "components/styles/footer.css";
import Nav from "./Nav";

const Footer = () => {
    return (
        <footer>
            <div className="container container-footer">
                <img
                    src={logoFooter}
                    alt="Little Lemon Logo"
                    className="logo"
                />
                <div className="navigation">
                    <p>Navigation</p>
                    <Nav navStyle="nav-footer" />
                </div>
                <div>
                    <p>Contact us</p>
                    <address>
                        678 Pisa Ave, Chicago, IL 60611
                        <a href="tel:(312) 593-2744">(312) 593-2744</a>
                        <a href="mailto:customer@littlelemon.com">
                            customer@littlelemon.com
                        </a>
                    </address>
                </div>
                <div className="test">
                    <p>Connect with us</p>
                    <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noreferrer">
                        Facebook
                    </a>{" "}
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noreferrer">
                        Instagram
                    </a>{" "}
                    <a
                        href="https://www.twitter.com"
                        target="_blank"
                        rel="noreferrer">
                        Twitter
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
