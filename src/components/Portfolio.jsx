import React, { useEffect } from "react";
import ProjectBig from "./ProjectBig";
import ProjectBigAlt from "./ProjectBigAlt";
import ProjectSmall from "./ProjectSmall";
import "./styles/Portfolio.css"

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Import Images
import coffeeislife from "../images/project-coffeeislife.png"
import notion from "../images/project-notion.jpg"
import dicegame from "../images/project-dicegame.png"

const Portfolio = () => {

    // const {ref, inView} = useInView({
    //     threshold: 0.2
    // });
    // const animatePortfolio = useAnimation();

    // useEffect(() => {
    //     if (inView) {
    //         animatePortfolio.start({
    //             x: 0,
    //             opacity: 1,
    //             transition: {
    //                 duration: 0.75,
                    
    //             }
    //         })
    //     };
    //     if (!inView) {
    //         animatePortfolio.start({
    //             x: -100,
    //             opacity: 0
    //         })
    //     };
    //     console.log("useEffect hook, inView = ", inView);
    // });

    return (
        <motion.section 
            // ref={ref} 
            // animate={animatePortfolio} 
            id="Portfolio" 
            className="portfolio"
        >
            <h4>Portfolio</h4>
            <h2>Featured Projects</h2>
            <div className="projects">
                <ProjectBig
                    image={coffeeislife}
                    title="Coffee Is Life"
                    desc="Coffee Is Life is a full-stack MERN application for coffee lovers. Users can signup or login to browse cafes, view information about each shop, and publish their own reviews."
                    skills="JavaScript, React.js, MongoDB &amp; Mongoose, Express, Node.js"
                    github="https://github.com/ninaespiritu/Coffee-Is-Life"
                    website="https://coffeeislife.netlify.app/"
                />
                <ProjectBigAlt
                    image={notion}
                    title="Notion Website Clone"
                    desc="Cloning Notion's website design as close to identical as possible, using only HTML and CSS. This is one of my first projects while learning how to code."
                    skills="HTML &amp; CSS"
                    github="https://github.com/ninaespiritu/Notion-Website-Clone"
                    website="https://ninaespiritu.github.io/Notion-Website-Clone/"
                />
                <ProjectBig
                    image={dicegame}
                    title="2-Player Dice Game"
                    desc="A simple dice game for two players, created using vanilla JavaScript."
                    skills="JavaScript, HTML &amp; CSS"
                    github="https://github.com/ninaespiritu/DiceGame-TwoPlayers"
                    website="https://ninaespiritu.github.io/DiceGame-TwoPlayers/"
                />
            </div>
            
            <h2>Other Work I've Done</h2>
            <div className="projects-2">
                <ProjectSmall
                    title="REST API"
                    desc="A simple REST API with two databases. Includes email validation and password hashing."
                    skills="MongoDB &amp; Mongoose, Express, JavaScript"
                    github="https://github.com/ninaespiritu/REST-API"
                    website="https://github.com/ninaespiritu/REST-API"
                />
                <ProjectSmall
                    title="Anime Quote Generator"
                    desc="A random anime quote generator created using the Animechan API"
                    skills="JavaScript, React.js"
                    github="https://github.com/ninaespiritu/Anime-Quote-Generator"
                    website="https://random-anime-quote.netlify.app/"
                />
                <ProjectSmall
                    title="To-Do List"
                    desc="A simple to-do list created using React.js"
                    skills="JavaScript, React.js"
                    github="https://github.com/ninaespiritu/ToDo-List"
                    website="https://ninaespiritu-todolist.netlify.app/"
                />
                <ProjectSmall
                    title="Calculator"
                    desc="A simple calculator created using React.js"
                    skills="JavaScript, React.js"
                    github="https://github.com/ninaespiritu/Calculator"
                    website="https://ninaespiritu-calculator.netlify.app/"
                />
                <ProjectSmall
                    title="Drum Kit"
                    desc="Interactive drum kit built with vanilla JavaScript"
                    skills="JavaScript, HTML &amp; CSS"
                    github="https://github.com/ninaespiritu/DrumKit"
                    website="https://ninaespiritu.github.io/DrumKit/"
                />
                <ProjectSmall
                    title="Code Nation Bootcamp"
                    desc="A compilation of all my modules for my Software Developer Bootcamp at Code Nation"
                    skills="JavaScript, HTML &amp; CSS"
                    github="https://github.com/ninaespiritu/CodeNation-Bootcamp"
                    website="https://github.com/ninaespiritu/CodeNation-Bootcamp"
                />
            </div>
        </motion.section>
    )
};

export default Portfolio;