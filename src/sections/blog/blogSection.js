import React from "react";
import { NavHashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import '../../styles/scss/_blogSectionContainer.scss';
import baseUrl from "../../helpers/baseUrl";

//Displays the blog section in the app.js page.
function BlogSection() {
    return (
        <>
            <div className="blogSectionContainer container">
                <h1>Blog.</h1>
                <div className="blogSectionWrapper">
                    <div className="firstLayer">
                        <Link className="blogSectionLinks" to="/blog/building-my-react-website" ><h3>Building my Portfolio</h3></Link>
                        <p>A detailed look at all the tools and packages used in my React app. </p>
                    </div>
                    <div className="secondLayer">
                        <Link className="blogSectionLinks" to="/blog/centering-in-css" ><h3>Centering in CSS</h3></Link>
                        <p>A guide to horizontally and vertically centering in CSS.</p>
                    </div>
                    <div className="thirdLayer">

                        <Link className="blogSectionLinks" to="/blog">
                            <h2>Read all posts</h2>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogSection;