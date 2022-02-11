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
                staggerChildren: 0.75
            }
        }
    }

    const animateOne = {
        initial: {
            y: 50,
            opacity: 0,
            scale: 1.25
        },
        animate: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.75,
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
                <motion.h2 variants={animateOne}><span>I love to </span>design &amp; code</motion.h2>
                <motion.p variants={animateOne}>I am an aspiring Software Developer from the UK. I enjoy building websites, front-end and back-end applications, and anything related to design.</motion.p>
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