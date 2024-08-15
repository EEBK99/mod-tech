import React from "react";

const WorkingProcess = () => {
  return (
    <div className="home-process-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span>Working Process</span>
          <h2>We are popular because of our way of working</h2>
          <p>
            Innovation is the place where business, design and strategy meet. It
            comes with different way of working. Over the past decade we have
            created, sharpened and scaled our award innovation approach. Now
            it's we here for you.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="single-process">
              <div className="icon">
                <img src="/images/process/process1.png" alt="process" />
                <span>
                  <img src="/images/process/next.png" alt="shape" />
                </span>
              </div>
              <div className="content">
                <h3>Requirements of Client</h3>
                <p>
                  Requirements and product idea are gathered to check, how to
                  make it successful It's a part of the product development
                  process that helps identify customer needs.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="single-process">
              <div className="icon">
                <img src="/images/process/process2.png" alt="process" />
                <span className="pro-span">
                  <img src="/images/process/next.png" alt="shape" />
                </span>
              </div>
              <div className="content">
                <h3>Contact</h3>
                <p>
                  A fair contract is made with client, delivering all the
                  knowledge about the product and discussion about the date of
                  delivery of product and its cost and payment methods.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="single-process">
              <div className="icon">
                <img src="/images/process/process3.png" alt="process" />
                <span>
                  <img src="/images/process/next.png" alt="shape" />
                </span>
              </div>
              <div className="content">
                <h3>Development</h3>
                <p>
                  Elevator development is started keeping in mind the factors
                  that govern elevator type and design including cost, speed,
                  capacity requirements, safety, and reliability.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="single-process">
              <div className="icon">
                <img src="/images/process/process4.png" alt="process" />
              </div>
              <div className="content">
                <h3>Product Handover</h3>
                <p>
                  After all the carefull development and testing through several
                  phases product is finally handed over to our valuable cystomer
                  to ensure maximum success and client satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
