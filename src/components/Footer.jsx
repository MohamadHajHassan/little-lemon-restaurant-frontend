import React from "react";
import logoFooter from "../assets/logo-footer.png";
import "components/styles/footer.css";
import Nav from "./Nav";
import {
    faEnvelope,
    faLocationDot,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faInstagram,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                        <FontAwesomeIcon icon={faLocationDot} />
                        678 Pisa Ave, Chicago, IL 60611
                        <a href="tel:(312) 593-2744">
                            <FontAwesomeIcon icon={faPhone} /> (312) 593-2744
                        </a>
                        <a href="mailto:customer@littlelemon.com">
                            <FontAwesomeIcon icon={faEnvelope} />
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
                        <FontAwesomeIcon icon={faFacebook} />
                        Facebook
                    </a>{" "}
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                        Instagram
                    </a>{" "}
                    <a
                        href="https://www.twitter.com"
                        target="_blank"
                        rel="noreferrer">
                        <FontAwesomeIcon icon={faTwitter} />
                        Twitter
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
