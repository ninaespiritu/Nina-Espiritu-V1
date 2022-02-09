import React from "react";
import "./styles/Header.css";
import FullArt from "./../images/home-fullart.png";

import { motion } from "framer-motion";

const Header = () => {

    const animateArt = {
        initial: {
            x: -300,
            opacity: 0,
            scale: 1.5
        },
        animate: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1.75,
                ease: "easeOut",
            }
        }
    }

    const animateText = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 1
            }
        }
    }

    const animateOne = {
        initial: {
            x: 70,
            opacity: 0,
            scale: 1.15
        },
        animate: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1.25,
                ease: "easeOut",
            }
        }
    }

    const animateButton = {
        initial: {
            y: 70,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                type: "spring",
                bounce: 0.5
            }
        }
    }

    return (
        <header id="Home">
            <motion.div
                variants={animateText}
                initial="initial"
                animate="animate"
                className="header-text"
            >
                <motion.h3 variants={animateOne}>Hello! I am</motion.h3>
                <motion.h1 variants={animateOne}>Nina Espiritu</motion.h1>
                <motion.h2 variants={animateOne}>Software Developer &amp; Designer</motion.h2>

                <a href="#About">
                    <motion.button variants={animateButton}>About Me</motion.button>
                </a>
            </motion.div>
            
            <motion.div
                variants={animateArt}
                initial="initial"
                animate="animate"
                className="art"
            >
                <div className="art-full">
                    <img src={FullArt} alt="#" />
                </div>
            </motion.div>
            
        </header>
    )
};

export default Header;