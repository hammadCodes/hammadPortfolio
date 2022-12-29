import React from "react";
import Upwork from "../images/svg/upwork.svg";
import Fiverr from "../images/svg/fiverr.svg";

const HireMe = () => {
  return (
    <div id="hire" className="hire__me-wrapper py-5">
      <div className="container">
        <div className="text-center">
          <h1>Hire me</h1>
        </div>
        <div className="row freelance-profiles">
          <a
            className="upwork"
            href="https://www.upwork.com/freelancers/~018d5cd0b1736fdedf"
            target="_blank"
          >
            <a
              href="https://www.upwork.com/freelancers/~018d5cd0b1736fdedf"
              target="_blank"
            >
              <img src={Upwork} alt="" />
            </a>
          </a>
          <a
            className="fiverr"
            href="https://www.fiverr.com/engr_hammad_uet/"
            target="_blank"
          >
            <a href="https://www.fiverr.com/engr_hammad_uet/" target="_blank">
              <img src={Fiverr} alt="" />
            </a>
          </a>
        </div>
        <div className="direct-contract-h1 text-center pt-3 pb-1">
          <h2>OR</h2>
        </div>
        <div className="direct-contract text-center pt-3 pb-2">
          <a className="text-center" target="_blank" href="https://www.upwork.com/workwith/hammadcodes">
            Make a Secure Direct Contract on Upwork
          </a>
        </div>
      </div>
    </div>
  );
};

export default HireMe;
