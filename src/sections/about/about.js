import React from "react";
import '../../styles/scss/_about.scss'
import Facts from "./facts";

function About() {
    return (
        <>
            <section id="about" >
                <div className="aboutContainer">
                    <h1>About.</h1>

                    <div className="aboutDetailsContainer">
                        <div className="aboutLine">
                            <p>Hey, my name is Ritu Rawat. I'm a web developer and artist based in Atlanta, GA.  </p>
                            <p> I'm always curious to learn more when it comes to new technologies and efficient coding.
                            </p>
                            <p>
                                Using React, HTML, CSS, and JavaScript with pre-processors and build tools such as Sass, I have a passion for developing pixel-perfect websites and apps while maintaining a semantic, modular, and DRY code base.
                            </p>
                            <p>
                                I strive to develop and implement responsive and aesthetically pleasing interfaces for websites and apps that adapt to any type of device, platform, or browser.
                            </p>

                        </div>

                        <div className="aboutWrapper">

                            <div className="aboutText">
                                <h3>My story</h3>
                                <p>
                                    I have worn different hats including software engineering, master's in marketing, being a caretaker, a mom and an art teacher.
                                    My aspiration has always been to combine these skills to develop accessible, pleasing, marketable and effective websites.
                                </p>
                            </div>
                            <div className="aboutImg">
                                <div className="mePic">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rotatingWrapper">
                        <div className="rotatingCircle"></div>
                    </div>
                    <Facts />
                </div>
            </section>

        </>
    );
}

export default About;