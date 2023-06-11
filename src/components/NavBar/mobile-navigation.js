import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { ThemeContext } from "../../App.js";
import ThemeStyles from '../../helpers/themeStyles';
import "../../styles/scss/_mobile-navigation.scss";

function MobileNavigation() {
    const { darkTheme, setDarkTheme } = useContext(ThemeContext);
    const [click, setClick] = useState(false);

    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme);
    }

    const handleClickMobileNav = () => {
        setClick(!click);
    };

    return (
        <>
            <div style={ThemeStyles()} className='mobileNavContainer'>
                <div className='mobileNavWrapper'>
                    <div className="logo"><a style={ThemeStyles()} href="#intro">RITU RAWAT.</a></div>
                    {click ?
                        <div className='navWrapper'>
                            <ul>
                                <Link onClick={handleClickMobileNav} style={ThemeStyles()} to="/">Home</Link>

                                <HashLink onClick={handleClickMobileNav} style={ThemeStyles()}
                                    smooth to="/#about"
                                >About</HashLink>

                                <HashLink onClick={handleClickMobileNav} style={ThemeStyles()} smooth to="/#projects"
                                >Portfolio</HashLink>

                                <Link onClick={handleClickMobileNav} style={ThemeStyles()} to="/blog">Blog</Link>

                                <HashLink onClick={handleClickMobileNav} style={ThemeStyles()} smooth to="/#contact"
                                >Contact</HashLink>
                            </ul>
                            <button className="light-switch" onClick={toggleTheme}>
                                {darkTheme ? <>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f3f2f9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg></> :
                                    <> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                                    </>}
                            </button>
                        </div> :
                        <></>
                    }
                    <div className='hamburger' click={click} onClick={handleClickMobileNav}>
                        {click ? <>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                            >
                                <path d="M13.4 12l6.3-6.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L12 10.6 5.7 4.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l6.3 6.3-6.3 6.3c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3l6.3-6.3 6.3 6.3c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L13.4 12z"></path>
                            </svg>
                        </> :
                            <>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="30"
                                    fill="none"
                                    viewBox="0 0 48 48"
                                >
                                    <path fill="#fff" fillOpacity="0.01" d="M0 0H48V48H0z"></path>
                                    <path
                                        stroke="#000"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="4"
                                        d="M7.95 11.95h32M7.95 23.95h32M7.95 35.95h32"
                                    ></path>
                                </svg>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileNavigation;