import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  animateOut: "slideOutDown",
  animateIn: "slideInDown",
  items: 1,
  loop: true,
  autoplay: false,
  dots: false,
  nav: true,
  mouseDrag: false,
  autoplayHoverPause: true,
  navText: [
    "<i class='flaticon-left-arrow'></i>",
    "<i class='flaticon-next-1'></i>",
  ],
};

const MainBanner = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);
  return (
    <div className="slider-area-2">
      {display ? (
        <OwlCarousel
          className="home-slider owl-carousel owl-theme"
          {...options}
        >
          <div className="single-slider single-slider-bg-1">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-12 text-center">
                      <div className="slider-content one">
                        <h1>ModTech Elevators</h1>
                        <p>
                          Mod Crest Elevators, Alhamdulillah can possibly
                          furnish you with every one of the services you want
                          with next to no problem whether it is introducing
                          another lift or a current one, Maintenance or fixing,
                          everything you really want.
                        </p>

                        <div className="slider-btn text-center">
                          <Link href="/contact-us">
                            <a className="box-btn">Let’s Talk!</a>
                          </Link>
                          <Link href="/about-us">
                            <a className="box-btn border-btn">Know More</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="single-slider single-slider-bg-2">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-12 text-center">
                      <div className="slider-content one">
                        <h1>A solid group</h1>
                        <p>
                          Welcome to ModTech Elevators we are here to serve you
                        </p>

                        <div className="slider-btn text-center">
                          <Link href="/contact-us">
                            <a className="box-btn">Let’s Talk!</a>
                          </Link>
                          <Link href="/about-us">
                            <a className="box-btn border-btn">Know More</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="single-slider single-slider-bg-3">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-12 text-center">
                      <div className="slider-content one">
                        <h1>OUR PROJECTS & EXPERTISE</h1>
                        <p>
                          "Established in Punjab, Serving entire Pakistan" Mod
                          Tech generally accept quality is the foundation of big
                          business endurance and advancement. Refined plan,
                          wonderful strong quality, quick establishment and cozy
                          after-deals administrations, Mod Crest has proactively
                          offered an agreeable, wellbeing and solid lift
                          framework for large number of buildings.
                        </p>

                        <div className="slider-btn text-center">
                          <Link href="/contact-us">
                            <a className="box-btn">Let’s Talk!</a>
                          </Link>
                          <Link href="/about-us">
                            <a className="box-btn border-btn">Know More</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      ) : (
        ""
      )}
    </div>
  );
};

export default MainBanner;
