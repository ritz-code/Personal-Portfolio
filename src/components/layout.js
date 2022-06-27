import React, { useState, useEffect } from 'react';
import Navigation from "../components/NavBar/navigation";
import MobileNavigation from './NavBar/mobile-navigation';
import Footer from "../components/footer";

const Layout = ({ children }) => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth
  })

  //Checks for window resize
  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth
      })
    }
    window.addEventListener('resize', handleResize)
    return _ => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <>
      {dimensions.width >= 768 ? <Navigation /> : <MobileNavigation />}
      {children}
      <Footer />
    </>
  );
};

export default Layout;