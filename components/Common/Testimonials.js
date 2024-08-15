import React from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  margin: 30,
  nav: true,
  dots: false,
  mouseDrag: false,
  touchDrag: false,
  navText: [
    "<i class='bx bx-left-arrow-alt'></i>",
    "<i class='bx bx-right-arrow-alt'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 2,
    },
  },
};

const Testimonials = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);
  return (
    <div className="client-area ptb-100 bg-color">
      <div className="container">
        <div className="section-title">
          <span>Testimonials</span>
          <h2>What Our Client’s Say</h2>
          <p> Listen by yourself.</p>
        </div>

        {display ? (
          <OwlCarousel
            className="client-wrap owl-carousel owl-theme"
            {...options}
          >
            <div className="single-client">
              <img src="/images/clients/client1.jpg" alt="img" />

              <p>
                ModTech Elevators has provided excellent lifts for our mosque
                and the Elevators are working extremely good, Rates are very low
                as compare to the market.
              </p>

              <h3>Irfan Riaz</h3>
              <span>Mosque Elevator</span>
            </div>

            <div className="single-client">
              <img src="/images/clients/client2.jpg" alt="img" />
              <p>
                ModTech Elevators have very professional workers which work day
                and night to provide the best quality elevtors.Elevator
                installed in my home by Mod Tech Elevators, is working exteremly
                good and very smooth.
              </p>

              <h3>Najam Aziz</h3>
              <span>House Elevator</span>
            </div>

            <div className="single-client">
              <img src="/images/clients/client2.jpg" alt="img" />
              <p>
                ModTech Elevators are very professional in thier work.They
                provide the best quality elevtors. Elevator installed in my
                hospital by Mod Tech Elevators is working exteremly good and,
                very smoothly.It cariies multiple patients in a day and is
                working with great efficiency.
              </p>

              <h3>Ali Khan</h3>
              <span>Hospital Elevator</span>
            </div>

            <div className="single-client">
              <img src="/images/clients/client3.jpg" alt="img" />
              <p>
                CEO of ModTech Elevator, Muhammad Tahir is a very humble man and
                is veru professional in his work. He delivered my Mall Elevator
                just in time and also provide its maintancece at very low rates.
              </p>

              <h3>Habib Khan</h3>
              <span>Mall owner</span>
            </div>
          </OwlCarousel>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Testimonials;
