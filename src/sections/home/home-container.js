import React from "react";

import ResumeButton from '../../components/resumeButton';
import '../../styles/scss/_home-container.scss'


function HomeContainer() {

    return (
        <>
            <section id="home">
                <div className="homeContainer">
                    <svg viewBox="0 0 870 200" className="my-projects-title"><text textAnchor="middle" x="50%" y="65%">ritu rawat</text></svg>
                    <p>Hey, I am a web developer based in Atlanta.</p>
                    <ResumeButton />
                </div>
            </section>
        </>
    );
};

export default HomeContainer;