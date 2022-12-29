import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 text-center text-sm-center text-md-center text-lg-left">
            <h3 className="mb-2 text-light font-weight-bold">Information</h3>
            <Link smooth={true} offset={-84} to="about" className="footer-nav">
              About me
            </Link>
            <br />
            <Link
              smooth={true}
              offset={-84}
              to="services"
              className="footer-nav"
            >
              Services
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 text-center text-sm-center text-md-center text-lg-left">
            <div className="row footer-links">
              <div className="col">
                <h3 className="mb-2 text-light font-weight-bold links-title">
                  Work
                </h3>

                <Link
                  smooth={true}
                  offset={-84}
                  to="portfolio"
                  className="footer-nav"
                >
                  Portfolio
                </Link>
                <br />
                <Link
                  smooth={true}
                  offset={-84}
                  to="experience"
                  className="footer-nav"
                >
                  Experience
                </Link>
                <br />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 text-center text-sm-center text-md-center text-lg-left">
            <div className="row footer-links">
              <div className="col">
                <h3 className="mb-2 text-light font-weight-bold links-title">
                  Links
                </h3>

                <Link
                  smooth={true}
                  offset={-84}
                  to="contact"
                  className="footer-nav"
                >
                  Contacts
                </Link>

                <br />
                <Link
                  smooth={true}
                  offset={-84}
                  to="hire"
                  className="footer-nav blink_me"
                >
                  Hire me
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 text-center">
            <div className="d-flex justify-content-center mb-2">
              <h3 className="mb-2 text-light font-weight-bold">Share with..</h3>
            </div>
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://www.facebook.com/hammadCodes"}
                quote={"Shopify & ReactJS Developer"}
                hashtag="#shopify"
              >
                <FacebookIcon
                  url={"https://www.facebook.com/hammadCodes"}
                  className="mx-3"
                  size={36}
                />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://www.twitter.com/hammadCodes"}
                quote={"Shopify & ReactJS Developer"}
                hashtag="#shopify"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <RedditShareButton
                url={"https://www.reddit.com/user/hammadCodes"}
                quote={"Shopify & ReactJS Developer"}
                hashtag="#shopify"
              >
                <RedditIcon className="mx-3" size={36} />
              </RedditShareButton>
              <LinkedinShareButton
                url={"https://www.linkedin.com/in/hammadCodes"}
                quote={"Shopify & ReactJS Developer"}
                hashtag="#shopify"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;eComVita | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
