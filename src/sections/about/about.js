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
                            <p>Hello, I am Ritu. Welcome to my portfolio!  </p>
                            <p>
                            I am experienced in development and implementation of software applications using Java, J2EE, Spring Framework and JavaScript. I have been involved in all phases of Software Development Life Cycle (SDLC) including analysis, design, implementation, and coding.
                            </p>
                            <p>
                            
                            </p>

                        </div>
                        <div className="aboutWrapper">

                            <div className="aboutText">
                                <h3>My story</h3>
                                <p>
                                    I have worn different hats: software engineer, sales & marketeer, a caretaker and an art teacher. I bring my varied experience to my work too, can understand different perspectives, and hope to provide new viewpoints.
                                    </p>
                                <p>
                                    As a self taught developer, I love learning about latest technologies from all vantage points: how they fit together as a whole, and their intricacies as individual components too.
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