import React from "react";
import { projects } from '../../data/constants';
import '../../styles/scss/_projects.scss';

function Projects() {
    return (
        <>
            <div className='projectsContainer container'>
                <h2>Projects</h2>
                <div className="projectsWrapper">
                    {projects.map((project) => {
                        return (
                            <div className="projectCard" key={project.name}>
                                <div className="cardImg">
                                    <img src={project.img} alt={project.imgAlt}></img>
                                </div>
                                <div className="cardDetails">
                                    <h3>{project.name}</h3>
                                    <h5>{project.desc} </h5>
                                    <div className="line"></div>
                                    <div className="projDesc">
                                        <p>{project.description}</p>   </div>
                                    <h5 className="builtUsing">{project.builtUsing} </h5>
                                    <a href={project.gitRepo} target="_blank" rel="noreferrer" className="button button1" >Go To Github</a>
                                    {(project.website) && <a href={project.website} target="_blank" rel="noreferrer" className="button button1">Go To Website</a>}
                                </div>
                            </div>
                        )
                    })}

                </div>

            </div>
        </>
    );
}

export default Projects;