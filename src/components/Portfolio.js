import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
//popup box
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

import one from "../images/1.png";
import two from "../images/2.png";
import three from "../images/3.png";
import four from "../images/4.png";
import five from "../images/5.png";
import six from "../images/6.png";
import seven from "../images/7.png";
import eight from "../images/8.png";

import one_m from "../images/sm_img/1.png";
import two_m from "../images/sm_img/2.png";
import three_m from "../images/sm_img/3.png";
import four_m from "../images/sm_img/4.png";
import five_m from "../images/sm_img/5.png";
import six_m from "../images/sm_img/6.png";
import seven_m from "../images/sm_img/7.png";
import eight_m from "../images/sm_img/8.png";

export const Portfolio = () => {
  //one
  const openPopupboxOne = () => {
    const content = (
      <>
        <img
          src={one}
          className="portfolio-image-popupbox"
          alt="herick.com Shopify store link, shopify development, theme customization"
        />
        {/*
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <a
          className="hyper-link"
          onClick={() => window.open("https://hammad.live", "_blank")}
        >
          <b>Github&nbsp;</b>link
        </a>
        */}
      </>
    );
    PopupboxManager.open({ content });
  };
  const popupboxConfigOne = {
    titleBar: {
      enable: true,
      text: "Shopify store link, shopify development, theme customization",
    },
    faseIn: true,
    fadeInSpeed: 100,
  };

  //two
  const openPopupboxTwo = () => {
    const content = (
      <>
        <img
          src={two}
          className="portfolio-image-popupbox"
          alt="flawco.com Shopify store link, shopify development, theme customization"
        />
        {/*
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <a
          className="hyper-link"
          onClick={() => window.open("https://google.com", "_blank")}
        >
          <b>Github&nbsp;</b>link
        </a>
        */}
      </>
    );
    PopupboxManager.open({ content });
  };
  const popupboxConfigTwo = {
    titleBar: {
      enable: true,
      text: "Shopify store link, shopify development, theme customization",
    },
    faseIn: true,
    fadeInSpeed: 100,
  };

  //two
  const openPopupboxThree = () => {
    const content = (
      <>
        <img
          src={three}
          className="portfolio-image-popupbox"
          alt="dinhstore.dk Shopify store link, shopify development, theme customization"
        />
        {/*
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <a
          className="hyper-link"
          onClick={() => window.open("https://google.com", "_blank")}
        >
          <b>Github&nbsp;</b>link
        </a>
        */}
      </>
    );
    PopupboxManager.open({ content });
  };
  const popupboxConfigThree = {
    titleBar: {
      enable: true,
      text: "Shopify store link, shopify development, theme customization",
    },
    faseIn: true,
    fadeInSpeed: 100,
  };

  //two
  const openPopupboxFour = () => {
    const content = (
      <>
        <img
          src={four}
          className="portfolio-image-popupbox"
          alt="powerculture.dk Shopify store link, shopify development, theme customization"
        />
        {/*
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <a
          className="hyper-link"
          onClick={() => window.open("https://google.com", "_blank")}
        >
          <b>Github&nbsp;</b>link
        </a>
        */}
      </>
    );
    PopupboxManager.open({ content });
  };
  const popupboxConfigFour = {
    titleBar: {
      enable: true,
      text: "Shopify store link, shopify development, theme customization",
    },
    faseIn: true,
    fadeInSpeed: 100,
  };

  //two
  const openPopupboxFive = () => {
    const content = (
      <>
        <img
          src={five}
          className="portfolio-image-popupbox"
          alt="greenhousevines.com Shopify store link, shopify development, theme customization"
        />
        {/*
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <a
          className="hyper-link"
          onClick={() => window.open("https://google.com", "_blank")}
        >
          <b>Github&nbsp;</b>link
        </a>
        */}
      </>
    );
    PopupboxManager.open({ content });
  };
  const popupboxConfigFive = {
    titleBar: {
      enable: true,
      text: "Shopify store link, shopify development, theme customization",
    },
    faseIn: true,
    fadeInSpeed: 100,
  };

  //two
  const openPopupboxSix = () => {
    const content = (
      <>
        <img
          src={six}
          className="portfolio-image-popupbox"
          alt="Shopify store link, shopify development, theme customization"
        />
        {/*
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <a
          className="hyper-link"
          onClick={() => window.open("https://google.com", "_blank")}
        >
          <b>Github&nbsp;</b>link
        </a>
        */}
      </>
    );
    PopupboxManager.open({ content });
  };
  const popupboxConfigSix = {
    titleBar: {
      enable: true,
      text: "Shopify store link, shopify development, theme customization",
    },
    faseIn: true,
    fadeInSpeed: 100,
  };

  //two
  const openPopupboxSeven = () => {
    const content = (
      <>
        <img
          src={seven}
          className="portfolio-image-popupbox"
          alt="chesserfeld.com Shopify store link, shopify development, theme customization"
        />
        {/*
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <a
          className="hyper-link"
          onClick={() => window.open("https://google.com", "_blank")}
        >
          <b>Github&nbsp;</b>link
        </a>
        */}
      </>
    );
    PopupboxManager.open({ content });
  };
  const popupboxConfigSeven = {
    titleBar: {
      enable: true,
      text: "Shopify store link, shopify development, theme customization",
    },
    faseIn: true,
    fadeInSpeed: 100,
  };

  //two
  const openPopupboxEight = () => {
    const content = (
      <>
        <img
          src={eight}
          className="portfolio-image-popupbox"
          alt="Shopify store link, shopify development, theme customization"
        />
        {/*
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <a
          className="hyper-link"
          onClick={() => window.open("https://google.com", "_blank")}
        >
          <b>Github&nbsp;</b>link
        </a>
        */}
      </>
    );
    PopupboxManager.open({ content });
  };
  const popupboxConfigEight = {
    titleBar: {
      enable: true,
      text: "Shopify store link, shopify development, theme customization",
    },
    faseIn: true,
    fadeInSpeed: 100,
  };

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center pb-3 pt-3">some projects</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxOne}>
            <img
              loading="lazy"
              className="portfolio-image"
              src={one_m}
              alt="herick.com Shopify store link, shopify development, theme customization"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxTwo}>
            <img
              loading="lazy"
              className="portfolio-image"
              src={two_m}
              alt="flawco.com Shopify store link, shopify development, theme customization"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxFive}>
            <img
              loading="lazy"
              className="portfolio-image"
              src={five_m}
              alt="greenhousevines.com Shopify store link, shopify development, theme customization"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxThree}>
            <img
              loading="lazy"
              className="portfolio-image"
              src={three_m}
              alt="dinhstore.dk Shopify store link, shopify development, theme customization"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxFour}>
            <img
              loading="lazy"
              className="portfolio-image"
              src={four_m}
              alt="powerculture.dk Shopify store link, shopify development, theme customization"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxSix}>
            <img
              loading="lazy"
              className="portfolio-image"
              src={six_m}
              alt="Shopify store link, shopify development, theme customization"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}

          <div className="portfolio-image-box" onClick={openPopupboxSeven}>
            <img
              loading="lazy"
              className="portfolio-image"
              src={seven_m}
              alt="chesserfeld.com Shopify store link, shopify development, theme customization"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}

          <div className="portfolio-image-box" onClick={openPopupboxEight}>
            <img
              loading="lazy"
              className="portfolio-image"
              src={eight_m}
              alt="Shopify store link, shopify development, theme customization"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigOne} />
      <PopupboxContainer {...popupboxConfigTwo} />
      <PopupboxContainer {...popupboxConfigThree} />
      <PopupboxContainer {...popupboxConfigFour} />
      <PopupboxContainer {...popupboxConfigFive} />
      <PopupboxContainer {...popupboxConfigSix} />
      <PopupboxContainer {...popupboxConfigSeven} />
      <PopupboxContainer {...popupboxConfigEight} />
    </div>
  );
};
