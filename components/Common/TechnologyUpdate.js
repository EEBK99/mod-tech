import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});

const TechnologyUpdate = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const openModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="technology-area ptb-100 bg-color">
      <div className="container">
        <div className="row align-items-center choose-c">
          <div className="col-lg-6">
            <div className="choose-img">
              <img src="/images/company-img.jpg" alt="choose" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="technology-content">
              <h2>Updated Technology</h2>
              <p>
                Mod Tech Elevators is an innovative work organization in the
                field of lifts/lifts in Pakistan for many years. Established
                promotion headed by vigorous and imaginative staff with
                sufficient experience of over many years in the field of
                assembling and establishment of lifts. Have procured a far
                superior to others notoriety in the thin field of lifts
                assembling and establishment. Through research, we have created
                creation and assembling of control boards, program rationale
                control, inverters programming improvement, speed regulators,
                entryway drivers, lodges, magnet switches, promoter switches,
                computerized markers and press buttons and so on we plan and
                introduce our condition of-workmanship lifts/lifts in
                understanding to nearby environment, temperature and clients,
                accordingly we have demonstrated high productivity, long life
                and low upkeep cost of lifts/lifts. We are additionally
                dedicated to giving clients the highest level of satisfaction
                and expert truck for their generally introduced lift frameworks
                no matter what the brand or maker. We give support offices at
                exceptionally cutthroat rates on agreement premise that
                incorporates occasional upkeep, Troubleshooting, amendment as
                well as new establishment. Our howdy tech scope of lifts are
                intended to offer the least difficult, fastest, practical and
                dependable answer for establishment of traveler lifts, all
                encompassing lifts, freight lifts and bed lifts in skyscraper,
                places of business, medical clinics and plants, manors and
                structure houses. We have quality steel in hairline and
                brilliant too. Kindly feel free to for most recent venture
                subtleties by whatsapp, Contact now +92.3008502133
              </p>
              <Link href="/contact-us">
                <a className="box-btn">Contact Us</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* If you want to change the video need to update videoID */}
      <ModalVideo
        channel="youtube"
        isOpen={!isOpen}
        videoId="bk7McNUjWgw"
        onClose={() => setIsOpen(!isOpen)}
      />
    </div>
  );
};

export default TechnologyUpdate;
