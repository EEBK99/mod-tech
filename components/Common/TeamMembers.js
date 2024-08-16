import React from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  margin: 30,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    575: {
      items: 2,
    },
    576: {
      items: 2,
    },
    768: {
      items: 3,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
};

const TeamMembers = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);
  return (
    <div className="home-team-area ptb-100">
      <div className="container">
        <div className="section-title">
          <h2>A Message from Our CEO</h2>
        </div>

        <div className="row">
          <div className="col-lg-9 col-md-12 mb-4">
            <p className="text-animated">
              Mod Tech Elevators is a leading innovator in lift technology in
              Pakistan, with years of expertise in designing, manufacturing, and
              installing high-quality lifts.
              <br />
              <br />
              Our dedicated team excels in creating state-of-the-art control
              panels, logic systems, speed regulators, door operators, cabins,
              digital indicators, and more.
              <br />
              <br />
              We customize our lifts to suit local climates, ensuring optimal
              performance, durability, and low maintenance costs. Whether it's
              passenger, panoramic, freight, or bed lifts, our solutions are
              designed for high-rise buildings, offices, hospitals, factories,
              and villas. We also provide comprehensive maintenance services,
              troubleshooting, upgrades, and new installations, all at
              competitive rates—guaranteeing maximum satisfaction, regardless of
              brand or manufacturer.
              <br />
              <br />
              Contact us now for project details or inquiries: +92 300 8502133
              (WhatsApp available).
            </p>
          </div>

          {display && (
            <div className="col-lg-3 col-md-12 text-center">
              <div className="single-team">
                <div className="team-img">
                  <img
                    src="/images/team/team16.jpg"
                    alt="team"
                    className="img-fluid"
                  />
                  <ul className="social">
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="content text-center">
                  <h3>Muhammad Tahir Akhtar</h3>
                  <p>CEO</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
