import React from "react";
import author from "../me.jpg";
import { Link } from "react-scroll";

const AboutMe = () => {
  return (
    <div id="about" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xm-12 about-image-container py-3">
            <figure>
              <img
                className="author"
                loading="lazy"
                src={author}
                alt="Hammad Ul Hassan, shopify developer, react developer"
              />
            </figure>
          </div>
          <div className="col-lg-6 col-xm-12 py-3">
            <h1 className="about-me-title">About...!</h1>

            <div className="about-me">
              <div className="div-read-less">
                <div className="read-less-content">
                  <p>
                    <strong>
                      🏆 TOP-RATED CERTIFIED DEVELOPER ON{" "}
                      <a
                        href="https://www.upwork.com/freelancers/~018d5cd0b1736fdedf"
                        style={{
                          fontWeight: "bold",
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}
                        target="_blank"
                      >
                        UPWORK
                      </a>
                    </strong>
                    <br />
                    <br />✅ With over 4 years of experience, I can create
                    Shopify themes from scratch based on your specific design
                    and requirements. This includes but is not limited to
                    styling, custom functionality, special features, and
                    integrating 3rd party applications.
                    <br />
                    <br />I am a <strong>Shopify Expert</strong>. I will provide
                    you with the best, most cost-effective solution for all
                    shopify related bugs and functionalities.
                    <br />
                    <br />
                    <strong>⭐️⭐️ Expertise in Shopify ⭐️⭐️</strong>
                    <p>
                      <br />
                      <span>
                        ✅ 
                        <strong>
                          HTML, CSS Guru, Javascript Master and Liquid Champion
                        </strong>
                      </span>
                      <br />
                      <span>✅ Shopify Designing and Development</span>
                      <br />✅{" "}
                      <strong>
                        Latest Shopify 2.0 features implementation
                      </strong>
                      <br />✅ Shopify Theme Customization
                      <br />
                      <strong>
                        ✅ HTML (PSD to HTML/Liquid, Figma to HTML/Liquid
                      </strong>
                      <br />
                      <strong>
                        ✅ Theme Development/ CSS Styling/ Bug Fixing​​​​​​​)
                      </strong>
                      <br />✅ Integration of Payment Gate... &ensp;
                      <span
                        className="read-more-btn"
                        style={{
                          fontWeight: "bold",
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}
                      >
                        Read more
                      </span>
                    </p>
                  </p>
                </div>
              </div>
              <div className="div-read-more" style={{ display: "none" }}>
                <div className="read-more-content">
                  <meta charset="utf-8" />
                  <p>
                    <strong>
                      🏆 TOP-RATED CERTIFIED DEVELOPER ON{" "}
                      <a
                        href="https://www.upwork.com/freelancers/~018d5cd0b1736fdedf"
                        style={{
                          fontWeight: "bold",
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}
                        target="_blank"
                      >
                        UPWORK
                      </a>
                    </strong>
                    <br />
                    <br />✅ With over 4 years of experience, I can create
                    Shopify themes from scratch based on your specific design
                    and requirements. This includes but is not limited to
                    styling, custom functionality, special features, and
                    integrating 3rd party applications.
                    <br />
                    <br />I am a <strong>Shopify Expert</strong>. I will provide
                    you with the best, most cost-effective solution for all
                    shopify related bugs and functionalities.
                    <br />
                    <br />
                    <strong>⭐️⭐️ Expertise in Shopify ⭐️⭐️</strong>
                  </p>
                  <meta charset="utf-8" />
                  <meta charset="utf-8" />
                  <p>
                    <br />
                    <span>
                      ✅ 
                      <strong>
                        HTML, CSS Guru, Javascript Master and Liquid Champion
                      </strong>
                    </span>
                    <br />
                    <span>✅ Shopify Designing and Development</span>
                    <br />✅{" "}
                    <strong>Latest Shopify 2.0 features implementation</strong>
                    <br />✅ Shopify Theme Customization
                    <br />✅ Development of Shopify Custom App
                    <br />✅ Responsive(Mobile, Tablet, iOS, Android, Desktop)
                    <br />✅ Website Migration (From any Platform to Shopify)
                    <br />
                      <strong>
                        ✅ HTML (PSD to HTML/Liquid, Figma to HTML/Liquid
                      </strong>
                      <br />
                      <strong>
                        ✅ Theme Development/ CSS Styling/ Bug Fixing​​​​​​​)
                      </strong>
                    <br />✅ Integration of Payment Gateway in Shopify
                    <br />✅ Shipping, App Integrations, Checkout Page
                    <br />
                    <br />
                    <br />I have relevant experience of 4+ years in the Shopify
                    platform. I can create and integrate shopify themes with a
                    different applications for the launch of your business with
                    great sales and traffic to your Shopify store.
                    <br />
                    <br />
                    With my development, designing, and programming skills.
                    You will get a cost-effective development process driven by
                    agile methodologies.
                    <br />
                    <br />I am your one-stop solution if you want the guarantee
                    of on-time delivery, quality tech stack, and modern visual
                    taste.
                    <span className="nav-item">
                      <Link smooth={true} to="contact" offset={-84} href="#">
                        &nbsp;contact
                      </Link>
                    </span>{" "}
                    me now, and let's discuss your project.
                    <br />
                    <br />
                    Cheers!
                  </p>
                </div>
                <span
                  className="read-less-btn"
                  style={{
                    fontWeight: "bold",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Read less
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
