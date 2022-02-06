import React from "react";
import "./styles/Contact.css";

const Contact = () => {
    return (
        <section id="Contact" className="contact">
            <h2>I'd love to hear from you!</h2>

            {/* <div className="contact-type">
                <div className="circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                    <h3>Connect on LinkedIn</h3>
                    <h4></h4>
                </div>
                <div className="circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"/></svg>
                    <h3>Send Email</h3>
                    <h4></h4>
                </div>
            </div> */}
            
            <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Subject" />
                <textarea placeholder="Your message" rows="15" id="contact-message" />
                <button type="submit">Send</button>
            </form>
        </section>
    )
};

export default Contact;