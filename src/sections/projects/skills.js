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
                        <div> I have experience developing and designing software for the web. I strive to create software that functions efficiently under the hood, but also provides intuitive, pixel-perfect user experiences.</div>
                        <div>Writing responsive, accessible, modular code on React and modern JavaScript syntax.</div>
                        <div>Creating 3D page animations with Threejs. I am also learning Blender to be able to create intricate components and bake them for usage in React.
                        </div>
                        <div>Maintaining code on Git and Github.</div>
                        <div>Deployment on platforms like Vercel and Netlify.</div>
                        <div>I have always been a learner and an avid reader. Learning about the vast intricacies of web developent fascinates me.</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;