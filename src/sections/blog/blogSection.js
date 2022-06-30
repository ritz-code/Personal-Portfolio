import React from "react";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import '../../styles/scss/_blogSectionContainer.scss';


function BlogSection() {

    //scrollsToTop for linking blog section to /blog page top 
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    //Displays the blog section in the app.js page.
    return (
        <>
            <div className="blogSectionContainer container">
                <h1>Blog.</h1>
                <div className="blogSectionWrapper">
                    <div className="firstLayer">
                        <Link className="blogSectionLinks" to="/blog/building-my-react-website" ><h3>Building my Portfolio</h3></Link>
                        <hr></hr>
                        <p>A detailed documentation of all the tools and packages used in this made-from-scratch React website. The thought process and planning behind all the decisions made are also documented in this article. </p>
                    </div>
                    <div className="secondLayer">
                        <Link className="blogSectionLinks" to="/blog/centering-in-css" ><h3>Centering in CSS</h3></Link>
                        <hr></hr>
                        <p>Easy guide to centering in CSS. When I started out as a web developer, getting a hang of CSS took some sweet time. CSS in itself is easy to start with, the rules being easy to follow but implementing and managing them is another ball game all together.</p>
                    </div>
                    <div className="thirdLayer">

                        <HashLink className="blogSectionLinks" onClick={scrollToTop} to="/blog">
                            <h2>Read all posts</h2>
                        </HashLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogSection;