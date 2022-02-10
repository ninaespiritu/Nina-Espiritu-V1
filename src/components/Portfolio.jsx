import React, { useEffect } from "react";
import ProjectBig from "./ProjectBig";
import ProjectBigAlt from "./ProjectBigAlt";
import ProjectSmall from "./ProjectSmall";
import "./styles/Portfolio.css"

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Import Images
import cats4lyf from "../images/project-cats4lyf.jpg"
import notion from "../images/project-notion.jpg"


const Portfolio = () => {

    const {ref, inView} = useInView({
        threshold: 0.2
    });
    const animatePortfolio = useAnimation();

    useEffect(() => {
        if (inView) {
            animatePortfolio.start({
                x: 0,
                opacity: 1,
                transition: {
                    duration: 1,
                }
            })
        };
        if (!inView) {
            animatePortfolio.start({
                x: -100,
                opacity: 0
            })
        };
        console.log("useEffect hook, inView = ", inView);
    });

    return (
        <motion.section 
            ref={ref} 
            animate={animatePortfolio} 
            id="Portfolio" 
            className="portfolio"
        >
            <h4>Portfolio</h4>
            <h2>Featured Projects</h2>
            <div className="projects">
                <ProjectBig
                    image={cats4lyf}
                    title="Cats4Lyf"
                    desc="Cats4Lyf is an eCommerce app where users can buy cats, created using The Cat API. This is a group project completed as part of the Code Nation Bootcamp."
                    skills="JavaScript, React.js"
                    github="https://github.com/ninaespiritu/Cats4Lyf"
                    website="#"
                />
                <ProjectBigAlt
                    image={notion}
                    title="Notion Website Clone"
                    desc="Cloning Notion's website design as close to identical as possible, using only HTML and CSS. This is one of my first projects while learning how to code."
                    skills="HTML / CSS"
                    github="https://github.com/ninaespiritu/Notion-Website-Clone"
                    website="https://ninaespiritu.github.io/Notion-Website-Clone/"
                />
            </div>
            
            <h2>Other Work I've Done</h2>
            <div className="projects-2">
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
                    title="Two-Player Dice Game"
                    desc="Interactive dice game for two players built with vanilla JavaScript"
                    skills="JavaScript, HTML &amp; CSS"
                    github="https://github.com/ninaespiritu/DiceGame-TwoPlayers"
                    website="https://ninaespiritu.github.io/DiceGame-TwoPlayers/"
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