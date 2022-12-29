import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faShopify,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="pt-5">My Services</h1>
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faShopify}
                    size="2x"
                  />
                </div>
                <h3>Shopify Expert</h3>
                <p>
                  Shopify Theme Development +<br /> App Development + App
                  Integration
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon className="icon" icon={faReact} size="2x" />
                </div>
                <h3>ReactJS Developer</h3>
                <p>
                  ReactApp Development + Shopify App
                  using NodeJS 
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faBullhorn}
                    size="2x"
                  />
                </div>
                <h3>Social Media Marketer</h3>
                <p>Social Media Campaigns +  Social Media Handle Management + GTM Integration</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faFacebookF}
                    size="2x"
                  />
                </div>
                <h3>Facebook Ad Expert</h3>
                <p>Facebook Conversion Ad Run + Facebook Handle Management + Facebook Pixel</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
