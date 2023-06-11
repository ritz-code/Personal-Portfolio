import React from "react";
import { skills } from '../../data/constants';
import '../../styles/scss/_skills.scss'

function Skills() {
    return (
        <>
            <div className='skillsContainer'>
                <h2>My Skills</h2>
                <div className="skillsWrapper">
                    <div className="techstack">
                        {skills.map((skill) => {
                            return (
                                <div className="skillcard" key={skill.skillTxt}>
                                    <img className="skillsImg" src={skill.img} alt={skill.imgAlt} />
                                    <p className="skillText">{skill.skillTxt}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="skills">
                        <div> I have experience developing and designing software that functions efficiently under the hood, but also provides intuitive, seamless user experiences.</div>
                        <div>Experience in analysis, design, development, testing, maintenance, and deployment of applications using Java, JSP, JDBC, Spring, AJAX, JavaScript.</div>
                        <div>Utilized Java 8 features like Lambda expressions and Stream API for Bulk data operations on Collections which increased the performance of the Application.</div>
                        <div>Experience in Web-Development technologies like JavaScript, JQuery, JSP, React, HTML5, JSON CSS3, AJAX.</div>
                        <div>I have always been a learner and an avid reader, and love to always be learning new technologies.</div>
                       
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;