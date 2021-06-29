import React from "react";

function Navbar() {

    return (
        <nav className="navbar">
            <div className="max-width">
                <div className="logo"><a href="#crystal-lakes-studio">Crystal Lakes Studio</a></div>
                <ul className="tabs">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#service">Services</a></li>
                    <li><a href="#contact-info">Contact Info</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;