import React from "react";
import Github from "../images/github.png";
import {
  FacebookIcon,
  TwitterIcon,
  RedditIcon,
  LinkedinIcon,
} from "react-share";

const SocialLinks = () => {
  return (
    <div className="fixed-social-links">
      <a className="linkedin" href="https://www.linkedin.com/in/hammadCodes" target="_blank">
        <LinkedinIcon className="" size={36} />
      </a>
      <a className="github" href="https://github.com/hammadCodes" target="_blank">
        <img className="github-img" src={Github} alt="" />
      </a>
      <a className="twitter" href="https://www.twitter.com/hammadCodes" target="_blank">
        <TwitterIcon className="" size={36} />
      </a>
      <a className="facebook" href="https://www.facebook.com/hammadCodes" target="_blank">
        <FacebookIcon className="" size={36} />
      </a>
    </div>
  );
};

export default SocialLinks;
