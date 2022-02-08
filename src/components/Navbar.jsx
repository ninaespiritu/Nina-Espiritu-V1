import React, { useState } from "react";
import "./styles/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <nav className='navbar'>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'><a href='#Home'>Home</a></li>
                <li className='nav-item'><a href='#About'>About</a></li>
                <li className='nav-item'><a href='#Portfolio'>Portfolio</a></li>
                <li className='nav-item'><a href='#Contact'>Contact</a></li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={24} style={{ color: '#a8a5b6' }} />) : (<FaBars size={24} style={{ color: '#a8a5b6' }} />)}

            </div>
        </nav>
    )
};

export default Navbar;