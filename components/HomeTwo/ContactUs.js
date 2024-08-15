import React from "react";

const ContactUs = () => {
  return (
    <div className="home-contact-area home-2-contact ptb-100">
      <div className="container">
        <div className="section-title">
          <span>Contact Us</span>
          <h2>Let Us Know About Your Project Idea!</h2>
          <p>
            Need to introduce an Elevator or your Elevator isn't working
            efficiently, Just Contact Us. Whatever the idea of your enquiry,
            we're here to help Whether it's figuring out more about an item,
            finding a solution to that specialized question, or whatever else -
            we'll coordinate your enquiry. If it's not too much trouble, give as
            much data as possible to assist us with managing your solicitation.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="content">
              <form id="contactForm">
                <div className="row">
                  <div className="col-lg-12 col-sm-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        required
                        placeholder="Your Name"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-sm-12">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        required
                        placeholder="Your Email"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-sm-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="phone_number"
                        id="phone_number"
                        required
                        className="form-control"
                        placeholder="Your Phone"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-sm-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="msg_subject"
                        id="msg_subject"
                        className="form-control"
                        required
                        placeholder="Subject"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        cols="30"
                        rows="5"
                        required
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <button
                      type="submit"
                      className="default-btn page-btn box-btn"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="contact-img">
              <img src="/images/contact-img" alt="contact" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
