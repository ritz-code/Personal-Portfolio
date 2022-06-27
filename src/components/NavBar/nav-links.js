import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { ThemeContext } from "../../App.js";
import ThemeStyles from '../../helpers/themeStyles';


const NavLinks = ({ click, handleClickMobileNav }) => {
    const { isMobile } = useContext(ThemeContext);

    return (
        <ul>
            {isMobile ?
                <>
                    <Link click={click} onClick={() => handleClickMobileNav()} style={ThemeStyles()} to="/">Home</Link>

                    <HashLink click={click} onClick={() => handleClickMobileNav(!click)} style={ThemeStyles()}
                        smooth to="/#about"
                    >About</HashLink>

                    <Link click={click} onClick={() => handleClickMobileNav(!click)} style={ThemeStyles()} to="/blog">Blog</Link>

                    <HashLink click={click} onClick={() => handleClickMobileNav(!click)} style={ThemeStyles()} smooth to="/#projects"
                    >Portfolio</HashLink>

                    <HashLink click={click} onClick={() => handleClickMobileNav(!click)} style={ThemeStyles()} smooth to="/#contact"
                    >Contact</HashLink>
                </>
                :
                <>
                    <Link style={ThemeStyles()} to="/">Home</Link>

                    <HashLink style={ThemeStyles()}
                        smooth to="/#about"
                    >About</HashLink>

                    <Link style={ThemeStyles()} to="/blog">Blog</Link>

                    <HashLink style={ThemeStyles()} smooth to="/#projects"
                    >Portfolio</HashLink>

                    <HashLink style={ThemeStyles()} smooth to="/#contact"
                    >Contact</HashLink>
                </>
            }
        </ul>
    )
}

export default NavLinks;