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
                          Elevate Your Experience with Mod Tech Elevators! From
                          seamless new installations to expert maintenance and
                          repairs, we handle it all with zero hassle. Discover
                          effortless solutions for all your elevator needs
                          today!
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
                        <h1>Elevate with Excellence: Mod Tech Elevators</h1>
                        <p>
                          Welcome to ModTech Elevators. We are here to serve
                          you.
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
                        <h1>Serving Pakistan with Excellence and Innovation</h1>
                        <p>
                          Established in Punjab and serving all of Pakistan, Mod
                          Tech believes that quality is the cornerstone of
                          business success and growth. With sophisticated
                          design, exceptional durability, quick installation,
                          and dedicated after-sales service, Mod Tech has
                          already provided comfortable, safe, and reliable
                          elevator systems to thousands of buildings.
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
