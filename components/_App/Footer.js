import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area pt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="content">
                <div className="logo">
                  <Link href="/">
                    <a>
                      <img src="/images/logo.png" alt="logo" />
                    </a>
                  </Link>
                </div>
                <p>ModTech Elevators.</p>
                <div className="subscribe">
                  <form className="newsletter-form">
                    <input
                      type="email"
                      id="emails"
                      className="form-control"
                      placeholder="Your Email"
                      name="EMAIL"
                      required
                    />
                    <button className="box-btn" type="submit">
                      Subscribe
                    </button>
                  </form>
                </div>

                <ul className="social">
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
                  <li>
                    <a href="https://www.pinterest.com/" target="_blank">
                      <i className="bx bxl-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="content ml-15">
                <h3>Our Service</h3>
                <ul className="footer-list">
                  <li>
                    <Link href="/blog">
                      <a>ELEVATOR INSTALLMENT</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/solution">
                      <a>MAINTENANCE</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/solution">
                      <a></a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <a></a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <a></a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <div className="content">
                <h3>Quick Links</h3>
                <ul className="footer-list">
                  <li>
                    <Link href="/faq">
                      <a>FAQs</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions">
                      <a>Services</a>
                    </Link>
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="content contacts">
                <h3 className="ml-40">Contact</h3>
                <ul className="footer-list foot-social">
                  <li>
                    <a href="tel:+1975456789">
                      <i className="bx bx-phone"></i> +92 3008502133
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hello@zoko.com">
                      <i className="bx bxs-envelope"></i> shmtar@yahoo.com
                    </a>
                  </li>

                  <li>
                    <i className="bx bxs-map"></i> Garden Town GT Road, Wah
                    Cantt
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copy-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <ul className="menu">
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us">
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions">
                      <a>Solutions</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/blog">
                      <a>Elevators</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us">
                      <a>Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-6">
                <p className="right">
                  Copyright &copy; {currentYear} ModTech. All Rights Reserved by{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
