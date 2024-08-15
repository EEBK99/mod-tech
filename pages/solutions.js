import React from "react";
import Navbar from "../components/_App/Navbar";
import TopHeader from "../components/_App/TopHeader";
import PageBanner from "../components/Common/PageBanner";
import Link from "next/link";
import Footer from "../components/_App/Footer";

const Solutions = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Services"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services"
      />

      <div className="home-service-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Smart Services</span>
            <h2>
              We Install all kinds of Elevators and provide its Maintainance and
              Solution to your Elevator problems
            </h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-service">
                <div className="service-img">
                  <img src="/images/services/service1.png" alt="service" />
                </div>

                <div className="service-content">
                  <h3>ELEVATOR INSTALLMENT</h3>
                  <p>
                    We have all ranges of elevators including house elevators,
                    shopping mall elevators, hospital elevators etc
                  </p>

                  <Link href="/contact-us">
                    <a className="line-bnt">Press To Contact</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-service">
                <div className="service-img">
                  <img src="/images/services/service2.png" alt="service" />
                </div>

                <div className="service-content">
                  <h3>Home, Passenger, Shopping Mall Lifts</h3>
                  <p>
                    We Install best quality passenger as well as commercial
                    elevators.
                  </p>
                  <Link href="/contact-us">
                    <a className="line-bnt">Press To Contact</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-service">
                <div className="service-img">
                  <img src="/images/services/service3.png" alt="service" />
                </div>

                <div className="service-content">
                  <h3>Cargo / Freight Elevators</h3>
                  <p>
                    We provide you ease and comfort in your business by
                    installing cargo elevators so can save your time and work
                    effectively.
                  </p>
                  <Link href="/contact-us">
                    <a className="line-bnt">Press To Contact</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-service">
                <div className="service-img">
                  <img src="/images/services/service4.png" alt="service" />
                </div>

                <div className="service-content">
                  <h3>Hospital Elevators</h3>
                  <p>
                    Patiants and their lives are an asset, ModTech provides
                    extremely smooth ans spacious elevators for your hospital so
                    that patients can feel feel ease and comfort during their
                    sick days.
                  </p>

                  <Link href="/contact-us">
                    <a className="line-bnt">Press To Contact</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-service">
                <div className="service-img">
                  <img src="/images/services/service5.png" alt="service" />
                </div>

                <div className="service-content">
                  <h3> Over Head Cranes</h3>
                  <p>
                    We provide overhead cranes that best suits you in tracking
                    down in industrial conditions.
                  </p>

                  <Link href="/contact-us">
                    <a className="line-bnt">Press To Contact</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-service">
                <div className="service-img">
                  <img src="/images/services/service6.png" alt="service" />
                </div>

                <div className="service-content">
                  <h3>Maintainance</h3>
                  <p>
                    We examin oall moving parts to determine appropriate
                    adjustments and lubrication. Machinery is inspected, which
                    includes the governor — a pulley that rotates when the
                    elevator is in motion — the motor and its bearings, brushes,
                    and the machine brake system.
                  </p>

                  <Link href="/contact-us">
                    <a className="line-bnt">Press To Contact</a>
                  </Link>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="col-lg-12">
              <div className="page-navigation-area">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link page-links" href="#">
                      <i className="bx bx-chevrons-left"></i>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="bx bx-chevrons-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Solutions;
