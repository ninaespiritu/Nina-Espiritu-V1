import React from "react";
import "./styles/Navbar.css";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <a href="#Home">
                    <li>Home</li>
                </a>
                <a href="#About">
                    <li>About</li>
                </a>
                <a href="#Portfolio">
                    <li>Portfolio</li>
                </a>
                <a href="#Contact">
                    <li>Contact</li>
                </a>
            </ul>
        </nav>
    )
};

export default Navbar;