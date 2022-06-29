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
                            <p>Hello, I am Ritu. Welcome to my portfolio! I'm a web developer and designer  based in Atlanta.  </p>
                            <p>
                                I have a passion for developing pixel-perfect websites and apps while maintaining a responsive, modular, and DRY code base.
                            </p>
                            <p>
                                I strive to develop and implement semantic and aesthetically pleasing interfaces for accessible and elegant websites.
                            </p>

                        </div>
                        <div className="mintCircle"></div>
                        <div className="aboutWrapper">

                            <div className="aboutText">
                                <h3>My story</h3>
                                <p>
                                    I have worn different hats: software engineer, sales & marketeer, a caretaker and an art teacher.
                                    </p>
                                <p>
                                    Now, as a self taught web developer, I am looking for an opportunity to develop amazing websites.
                                </p>
                            </div>
                            <div className="aboutImg">
                                <div className="mePic"></div>
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