import React from "react";

import { otherProjects } from '../../data/constants';
import '../../styles/scss/_otherprojects.scss';

function OtherProjects() {
    return (
        <>

            <div className='otherprojectsContainer container'>
                <h2>Notable Mentions</h2>
                <div className="projectsWrapper">
                    {otherProjects.map((project) => {
                        return (
                                <div className="projectCard" key={project.name}>
                                    <div className="cardImg">
                                        <img src={project.img} alt={project.imgAlt} className=" cardSize"></img>
                                    </div>
                                    <div className="cardDetails">

                                        <h5>{project.name}</h5>
                                        <p className="cardText">{project.description}  </p>
                                        <div className="buttonBox">
                                            <a href={project.gitRepo}target="_blank" rel="noreferrer" className="button button2">Github</a>
                                            {(project.website) && <a href={project.website} target="_blank" rel="noreferrer" className="button button2" > Website</a>}
                                        </div>
                                    </div>
                                </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}


export default OtherProjects;