import * as React from "react";

import "../styles/scss/_footer.scss"


const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerWrapper">
        <p>Built and designed by Ritu Rawat.</p>
        <p>Copyright © {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

