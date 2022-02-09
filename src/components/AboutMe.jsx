import React, { useEffect } from "react";
import "./styles/AboutMe.css";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {

    const {ref, inView} = useInView({
        threshold: 0.2
    });
    const animateAbout = useAnimation();
    const animateAboutText = useAnimation();

    useEffect(() => {
        if (inView) {
            animateAbout.start({
                x: 0,
                opacity: 1,
                transition: {
                    duration: 1,
                    staggerChildren: 0.2,
                }
            })
            // animateAboutText.start({
            //     y: 0,
            //     opacity: 1,
            //     transition: {
            //         duration: 1,
            //         ease: "easeOut"
            //     }
                
            // })
        };
        if (!inView) {
            animateAbout.start({
                x: 100,
                opacity: 0
            })
            // animateAboutText.start({
            //     y: 50,
            //     opacity: 0
            // })
        };
        console.log("useEffect hook, inView = ", inView);
    }, [inView]);



    // const animateAbout = {
    //     initial: {
    //         opacity: 0
    //     },
    //     animate: {
    //         opacity: 1,
    //         transition: {
    //             staggerChildren: 0.2,
    //         }
    //     }
    // }

    // const animateAboutText = {
    //     initial: {
    //         y: 50,
    //         opacity: 0
    //     },
    //     animate: {
    //         y: 0,
    //         opacity: 1,
    //         transition: {
    //             duration: 1,
    //             ease: "easeOut"
    //         }
    //     }
    // }

    return (
        <motion.section 
            ref={ref}
            /* variants={animateAbout}
            initial="initial" */
            animate={animateAbout}
            id="About"className="about"
        >
            <motion.h4 variants={animateAboutText}>About Me</motion.h4>
            
            <motion.h2 variants={animateAboutText}>Designer turned Developer</motion.h2>
            
            <motion.p variants={animateAboutText}>My name is Nina and I am a Full-Stack Developer with experience in building websites, front-end and back-end applications, and more.</motion.p>

            <motion.p variants={animateAboutText}>A few months ago, my coding knowledge was next to nothing. I began self-studying web development after being mesmerised by what I could create with code. I enjoy being able to combine both my passion for <span>design</span> and love for <span>coding and problem-solving.</span></motion.p>

            <motion.p variants={animateAboutText}>Prior to learning software development, I have experience in several design principles, such as graphic design, digital illustration, and UX/UI design.</motion.p>

            <motion.div variants={animateAboutText}>
                <p><span>My skills include:</span></p>
                <ul className="about-skills">
                    <li>HTML &amp; CSS</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li> Responsive Web Design</li>
                    <li>MongoDB &ampl Mongoose</li>
                </ul>
            </motion.div>
        </motion.section>
    )
};

export default AboutMe;