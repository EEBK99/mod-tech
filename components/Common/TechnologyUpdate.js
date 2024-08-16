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
                Embrace the future with our cutting-edge technology. We
                continually invest in the latest advancements to ensure our
                elevators and escalators are not only efficient and reliable but
                also feature the most advanced safety and performance
                technologies. Our commitment to innovation keeps you ahead of
                the curve and ensures optimal performance.
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
