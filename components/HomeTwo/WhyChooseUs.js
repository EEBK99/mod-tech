import React from "react";
import Link from "next/link";

const WhyChooseUs = () => {
  return (
    <div className="home2-choose-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <h1>Why Choose Us</h1>
          <h2>We Achieved People’s Trust by Our Great Service</h2>
          <p>
            We are enthusiastic about security, quality, manageability and
            values, which together structure areas of strength for a for our
            organization culture. Our extraordinary and solid culture has
            consistently upheld us in effectively restoring our business as per
            the evolving climate.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-2 col-sm-4">
            <div className="single-choose">
              <div className="icon">
                <i className="flaticon-friends"></i>
              </div>
              <h3>Understanding</h3>
            </div>
          </div>

          <div className="col-lg-2 col-sm-4">
            <div className="single-choose">
              <div className="icon">
                <i className="flaticon-award"></i>
              </div>
              <h3>Best Quality</h3>
            </div>
          </div>

          <div className="col-lg-2 col-sm-4">
            <div className="single-choose">
              <div className="icon">
                <i className="flaticon-chip"></i>
              </div>
              <h3>Technology</h3>
            </div>
          </div>

          <div className="col-lg-2 col-sm-4">
            <div className="single-choose">
              <div className="icon">
                <i className="flaticon-customer-service"></i>
              </div>
              <h3>Support 24/7</h3>
            </div>
          </div>

          <div className="col-lg-2 col-sm-4">
            <div className="single-choose">
              <div className="icon">
                <i className="flaticon-like"></i>
              </div>
              <h3>Expert Team</h3>
            </div>
          </div>

          <div className="col-lg-2 col-sm-4">
            <div className="single-choose">
              <div className="icon">
                <i className="flaticon-coin"></i>
              </div>
              <h3>Price Oriented</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
