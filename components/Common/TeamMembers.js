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
          <span> CEO</span>
          <h2>Muhammad Tahir Akhtar</h2>
        </div>

        <div>
          <p>
            Mod Tech Elevators is an innovative work organization in the field
            of lifts/lifts in Pakistan for many years. Established promotion
            headed by vigorous and imaginative staff with sufficient experience
            of over many years in the field of assembling and establishment of
            lifts. Have procured a far superior to others notoriety in the thin
            field of lifts assembling and establishment. Through research, we
            have created creation and assembling of control boards, program
            rationale control, inverters programming improvement, speed
            regulators, entryway drivers, lodges, magnet switches, promoter
            switches, computerized markers and press buttons and so on we plan
            and introduce our condition of-workmanship lifts/lifts in
            understanding to nearby environment, temperature and clients,
            accordingly we have demonstrated high productivity, long life and
            low upkeep cost of lifts/lifts. We are additionally dedicated to
            giving clients the highest level of satisfaction and expert truck
            for their generally introduced lift frameworks no matter what the
            brand or maker. We give support offices at exceptionally cutthroat
            rates on agreement premise that incorporates occasional upkeep,
            Troubleshooting, amendment as well as new establishment. Our howdy
            tech scope of lifts are intended to offer the least difficult,
            fastest, practical and dependable answer for establishment of
            traveler lifts, all encompassing lifts, freight lifts and bed lifts
            in skyscraper, places of business, medical clinics and plants,
            manors and structure houses. We have quality steel in hairline and
            brilliant too. Kindly feel free to for most recent venture
            subtleties by whatsapp, Contact now +92.3008502133
          </p>
        </div>

        {display ? (
          <div className="single-team">
            <div className="team-img">
              <img src="/images/team/team16.jpg" alt="team" />
              <ul className="social">
                <li>
                  <a href="https://www.linkedin.com/" target="_blank">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/" target="_blank">
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/" target="_blank">
                    <i className="bx bxl-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank">
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
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default TeamMembers;
