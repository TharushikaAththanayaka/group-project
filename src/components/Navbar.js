import React from "react";
import Logo from "../assests/logo.png";

function Navbar() {
    return(
        <div className="Navbar">
            <div className="logo-text">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="text">
                    Complaint Management<br />System
                    
                </div>
                </div>
            <div className="navlinks">
                <ul>
                    <li>Home</li>
                    <li>Add Complaint</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;