import React from "react";
import "./styles/Header.css";

const Header = () => {
    return (
        <header id="Home">
            <h3>Hello! I am</h3>
            <h1>Nina Espiritu</h1>
            <p>Software Developer &amp; Designer</p>
            <a href="#About">
                <button>About Me</button>
            </a>
        </header>
    )
};

export default Header;