import React from "react";

function Navbar() {

    return (
        <nav className="navbar">
            <div className="max-width">
                <div className="logo"><a href="#">Crystal Lakes Studio</a></div>
                <ul className="tabs">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Experiences</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact Info</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;