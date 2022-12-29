import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const serviceID = "service_ID";
  const template_ID = "template_ID";
  const userID = "user_MUNrMMGWw6SxGS9f5kcUy";

  const sendEmail = (e) => {
    e.preventDefault();
    onSubmitForm();
    emailjs.sendForm(serviceID, template_ID, form.current, userID).then(
      (result) => {
        console.log(result.text);
        myFunction();
        onSubmitFormExit();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  function onSubmitForm() {
    document.getElementById("submit-contact-spinner").style.display = "block";
    document.getElementById("class-spinner-relative").style.opacity = "0.2";
  }
  function onSubmitFormExit() {
    document.getElementById("submit-contact-spinner").style.display = "none";
    document.getElementById("class-spinner-relative").style.opacity = "1";
  }

  function myFunction() {
    var x = document.getElementById("myDivSuccess");
    x.style.display = "block";
    setTimeout(function () {
      var x = document.getElementById("myDivSuccess");
      x.style.display = "none";
    }, 7000);
  }

  return (
    <div id="contact" className="contacts">
      <div className="text-center">
        <h1>contact...!</h1>
        <p>
          Please fill out the form and describe your project needs and I will
          contact you as soon as possible
        </p>
      </div>
      <div className="container container-padding">
        <form
          id="contactForm"
          className="contact-form pb-0"
          ref={form}
          onSubmit={sendEmail}
        >
          <div id="class-spinner-relative" className="row">
            <div className="col-md-6 col-xs 12">
              {/* Name Input */}
              <div className="text-center">
                <input
                  id="name"
                  type="text"
                  className="form-control"
                  placeholder="Name*"
                  name="name"
                  required
                />
                <div className="line"></div>
              </div>
              <div className="text-center">
                {/* Phone Input */}
                <input
                  id="phone"
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phone"
                />
                <div className="line"></div>
              </div>
              <div className="text-center">
                {/* Email Input */}
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="Email*"
                  name="email"
                  required
                />
                <div className="line"></div>
              </div>
              <div className="text-center">
                {" "}
                {/* Name Input */}
                <input
                  id="subject"
                  className="form-control"
                  placeholder="Subject*"
                  name="subject"
                  required
                />
                <div className="line"></div>
              </div>
            </div>
            <div className="col-md-6 col-xs-12">
              <div className="text-center">
                {/* Description */}
                <textarea
                  id="description"
                  type="text"
                  className="form-control"
                  placeholder="Please describe your project briefly..."
                  name="description"
                />
                <div className="line"></div>
              </div>
            </div>
            <button className="btn-main-offer contact-btn" type="submit">
              SEND MESSAGE
            </button>
          </div>

          <div id="submit-contact-spinner" className="submit-contact-spinner">
            <div className="spinner__inner-container">
              <div
                id="spinner__item"
                className="spinner-border text-warning "
                role="status"
              >
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </form>

        <p id="myDivSuccess" className="container">
          Thank you. I have got your message and I will be contacting you soon.
          Cheers!
        </p>
      </div>
    </div>
  );
};

export default Contact;
