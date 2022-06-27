import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/scss/_page-not-found.scss";

const PageNotFound = () => {
    return (
        <>
            <div className="notFoundContainer">
                <img src="/png/blob/red-blob.png" alt="red paint blob" />
                <div className="notFoundWrapper">
                    <h1>404</h1>
                    <h4>Sorry, Page Not Found!</h4>
                    <Link to="/" ><button> Back to Home Page
                    </button></Link>
                </div>
            </div>
        </>
    );
};

export default PageNotFound;