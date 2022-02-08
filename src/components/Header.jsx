import React from "react";
import "./styles/Header.css";
import FullArt from "./../images/home-fullart.png";

const Header = () => {
    return (
        <header id="Home">
            <div className="header-text">
                <h3>Hello! I am</h3>
                <h1>Nina Espiritu</h1>
                <h2>Software Developer &amp; Designer</h2>
                <a href="#About">
                    <button>About Me</button>
                </a>
            </div>
            
            <div className="art">
                <div className="art-full">
                    <img src={FullArt} alt="#" />
                </div>
            </div>
            
        </header>
    )
};

export default Header;