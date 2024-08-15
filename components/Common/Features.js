import React from "react";
import Link from "next/link";

const Features = () => {
  return (
    <div className="feature-area bg-color ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="contnet">
              <div className="feature-tittle">
                <span>Features</span>
                <h2>Facilities that are provided by Mod Tech Elevators</h2>
                <h4>
                  We install all types of elevators of high quality and also
                  provide monthly service for all types of elevatotrs.
                </h4>
                <p> WE BELIEVE IN EXCELLENCE </p>
              </div>

              <ul>
                <li>
                  <i className="flaticon-correct"></i>
                  RESIDENTIAL ELEVATORS
                </li>
                <li>
                  <i className="flaticon-correct"></i>
                  DUMBWAIT ELEVATORS
                </li>
                <li>
                  <i className="flaticon-correct"></i>
                  HOSPITAL ELEVATORS
                </li>
                <li>
                  <i className="flaticon-correct"></i>
                  SHOPPING MALL ELEVATORS
                </li>
                <li>
                  <i className="flaticon-correct"></i>
                  MAINTAINANCE
                </li>
              </ul>

              <Link href="/contact-us">
                <a className="box-btn">Lets Talk!</a>
              </Link>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="feature-img">
              <img src="/images/feature-img.png" alt="feature" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
