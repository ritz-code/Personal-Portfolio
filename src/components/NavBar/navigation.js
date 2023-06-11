import React, { useContext } from 'react';
import { ThemeContext } from "../../App.js";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import ThemeStyles from '../../helpers/themeStyles';

function Navigation() {
    const { darkTheme, setDarkTheme } = useContext(ThemeContext);

    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme);
    }

    return (
        <>
            <div className='nav-container'>
                <div className='siteNavigation'>
                    <div className="logo"><a style={ThemeStyles()} href="#intro">RITU RAWAT.</a></div>
                    <div className='mainNav'>
                        <nav className='navList'>
                            <Link style={ThemeStyles()} to="/">Home</Link>

                            <HashLink style={ThemeStyles()}
                                smooth to="/#about"
                            >About</HashLink>

                            <HashLink style={ThemeStyles()} smooth to="/#projects"
                            >Portfolio</HashLink>

                            <Link style={ThemeStyles()} to="/blog">Blog</Link>

                            <HashLink style={ThemeStyles()} smooth to="/#contact"
                            >Contact</HashLink>
                        </nav>
                        <button className="light-switch" onClick={toggleTheme}>
                            {darkTheme ? <><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f3f2f9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg></> : <> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg></>}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navigation;
