import React, { useEffect } from "react";
import "./styles/Contact.css";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {

    const {ref, inView} = useInView({
        threshold: 0.2
    });
    const animateContact = useAnimation();

    useEffect(() => {
        if (inView) {
            animateContact.start({
                scale: 1,
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.75,
                }
            })
        };
        if (!inView) {
            animateContact.start({
                scale: 0.8,
                y: 100,
                opacity: 0
            })
        };
        console.log("useEffect hook, inView = ", inView);
    });

    return (
        <motion.section
            ref={ref}
            animate={animateContact}
            id="Contact"
            className="contact"
        >
            <h4>Contact</h4>
            <h2>Get in Touch</h2>
            <p>My inbox is always open. <br /> Whether you have a question or just want to say hello, I'd love to hear from you!</p>

            <div className="contact-area">
                <div className="contact-type">
                    <div className="contact-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"/></svg>
                    </div>
                    <a href="mailto:ninaangela.espiritu@gmail.com" target="_blank" rel="noopener noreferrer">
                        <button>Send Email</button>
                    </a>
                </div>
                <div className="contact-type">
                    <div className="contact-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                    </div>
                    <a href="https://www.linkedin.com/in/nina-espiritu/" target="_blank" rel="noopener noreferrer">
                        <button>Connect</button>
                    </a>
                </div>
            </div>
            
            {/* <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Subject" />
                <textarea placeholder="Your message" rows="15" id="contact-message" />
                <button type="submit">Send</button>
            </form> */}
        </motion.section>
    )
};

export default Contact;