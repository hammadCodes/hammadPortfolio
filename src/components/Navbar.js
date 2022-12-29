import React from "react";
import logo from "../logo.png";
// REACT FONTAWSOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light header-navbar-color">
      <div className="container">
        <Link
          smooth={true}
          to="header"
          offset={-84}
          className="navbar-brand"
          href="#"
        >
          <img className="logo" src={logo} alt="Site logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link
                smooth={true}
                to="header"
                offset={-84}
                className="nav-link"
                href="#"
              >
                home <span className="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                smooth={true}
                to="about"
                offset={-84}
                className="nav-link"
                href="#"
              >
                about
              </Link>
            </li>

            <li className="nav-item">
              <Link
                smooth={true}
                to="services"
                offset={-84}
                className="nav-link"
                href="#"
              >
                services
              </Link>
            </li>

            <li className="nav-item">
              <Link
                smooth={true}
                to="experience"
                offset={-84}
                className="nav-link"
                href="#"
              >
                experience
              </Link>
            </li>

            <li className="nav-item">
              <Link
                smooth={true}
                to="portfolio"
                offset={-84}
                className="nav-link"
                href="#"
              >
                portfolio
              </Link>
            </li>

            <li className="nav-item">
              <Link
                smooth={true}
                offset={-84}
                to="testimonials"
                className="nav-link"
                href="#"
              >
                testimonials
              </Link>
            </li>

            <li className="nav-item">
              <Link
                smooth={true}
                to="contact"
                offset={-84}
                className="nav-link"
                href="#"
              >
                contact
              </Link>
            </li>

            <li className="nav-item">
              <Link
                smooth={true}
                to="hire"
                offset={-84}
                className="nav-link blink_me"
                href="#"
              >
                hire me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
