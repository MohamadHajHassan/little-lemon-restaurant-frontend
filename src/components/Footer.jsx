import React from "react";
import logoFooter from "../assets/logo-footer.png";
import Nav from "./Nav";

const Footer = () => {
    return (
        <footer>
            <img src={logoFooter} alt="Little Lemon Logo" />
            <div>
                <p>Navigation</p>
                <Nav />
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
            <div>
                <p>Connect with us</p>
                <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noreferrer">
                    Facebook
                </a>
                <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noreferrer">
                    Instagram
                </a>
                <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noreferrer">
                    Twitter
                </a>
            </div>
        </footer>
    );
};

export default Footer;
