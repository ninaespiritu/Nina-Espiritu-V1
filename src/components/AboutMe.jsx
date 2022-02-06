import React from "react";
import "./styles/AboutMe.css";

const AboutMe = () => {
    return (
        <section id="AboutMe"className="about">
            <h4>About Me</h4>
            
            <h2>Designed turned Developer</h2>
            
            <p>My name is Nina and I am a Full-Stack Developer with experience in building websites, front-end and back-end applications, and more.</p>

            <p>A few months ago, my coding knowledge was next to nothing. I began self-studying web development after being mesmerised by what I could create with code. I enjoy being able to combine both my passion for <span>design</span> and love for <span>coding and problem-solving.</span></p>

            <p>Prior to learning software development, I have experience in several design principles, such as graphic design, digital illustration, and UX/UI design.</p>

            <div>
                <p><span>My skills include:</span></p>
                <ul className="about-skills">
                    <li>HTML &amp; CSS</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li> Responsive Web Design</li>
                    <li>MongoDB &ampl Mongoose</li>
                </ul>
            </div>
        </section>
    )
};

export default AboutMe;