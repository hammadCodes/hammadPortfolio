import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div id="header" className="header-wraper">
      <div className="main-info">
      <h1>SMM & Shopify Expert</h1>
        <Typed
          className="typed-text"
          strings={[
            "Shopify Expert",
            "Shopify Theme Developer",
            "Social Media Marketer",
          ]}
          typeSpeed={50}
          backSpeed={40}
          loop
        />
        <div className="header-btns">
        <div className="hire_btn_blink--container ">
          <Link smooth={true} to="hire" href="#" offset={-84} className="btn-main-offer hire_btn_blink">
            hire me
          </Link>
          </div>
          <Link smooth={true} to="contact" href="#" offset={-84} className="btn-main-offer">
            discuss your project
          </Link>
        </div>
      </div>
      <div className="header-overlay"></div>
    </div>
  );
};

export default Header;
