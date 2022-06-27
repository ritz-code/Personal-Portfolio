import React from "react";
import '../../styles/scss/_contact.scss';
import { contactIcons } from "../../data/constants";

function Contact() {
    return (
        <>
            <section id="contact">
                <div className="contactContainer">
                    <h1>Say hi!</h1>
                    <div className="pulsatingCircle"></div>

                    <div className="contactDetailsContainer">
                        <h2>RITU.</h2>
                        <div className="description">
                            <p>A job profile you'd like to discuss? Collabrating on web development, web design, feedback on blog posts? Just want to say hi? </p>
                            <p>Drop me an email!</p>

                        </div>
                        <div className="iconsBox">
                            {contactIcons.map((contactIcon) => {
                                return (
                                    <div className="icon" key={contactIcon.iconName}>
                                        <div className="tooltip">{contactIcon.iconName}</div>
                                        <a href={contactIcon.iconLink} target="_blank" rel="noreferrer" >
                                            <span>
                                                {contactIcon.svg}
                                            </span>
                                        </a>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;


