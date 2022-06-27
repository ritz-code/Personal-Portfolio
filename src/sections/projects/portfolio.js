import React from "react";
import Skills from "./skills";
import Projects from "./projects";
import OtherProjects from "./otherprojects";

function Portfolio() {
    return (
        <>
            <section id="projects">
                <div className='container'>
                    <h1>Portfolio.</h1>
                    <Skills />

                    <Projects />

                    <OtherProjects />
                </div>
            </section>
        </>
    );
}


export default Portfolio;