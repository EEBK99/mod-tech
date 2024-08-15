import React from "react";
import Navbar from "../components/_App/Navbar";
import TopHeader from "../components/_App/TopHeader";
import PageBanner from "../components/Common/PageBanner";
import Link from "next/link";
import Footer from "../components/_App/Footer";

const Blog = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="ELEVATORS"
        homePageUrl="/"
        homePageText="Home"
        activePageText="ELEVATORS"
      />

      <div className="home-blog-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Elevators</span>
            <h2>Our Different Types Of Elevators</h2>
            <p>
              We are an organization exclusively devoted to our work. Our
              solitary and complete concentration to one field make us
              exceptionally well versed in this area. Our worldwide openness
              keeps us side by side with the most recent mechanical turns of
              events. This has empowered us to learn, accomplish and keep up
              with global norms of value, security and expert morals.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="blog-img">
                  <Link href="/blog-details">
                    <a>
                      <img src="/images/blog/e1.png" alt="blog" />
                    </a>
                  </Link>
                </div>

                <div className="content">
                  <ul>
                    <li>10 April 2020</li>
                    <li>
                      <a href="#">By Mod Tech Elevators</a>
                    </li>
                  </ul>

                  <Link href="/blog-details">
                    <a>
                      <h3>Home, Passenger, Shopping Mall Lifts.</h3>
                    </a>
                  </Link>
                  <p>
                    A lift in an individual home has been seen as an
                    extravagance for a really long time. In any case, more
                    purchasers
                  </p>

                  <Link href="/blog-details">
                    <a className="line-bnt">Read More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="blog-img">
                  <Link href="/blog-details">
                    <a>
                      <img src="/images/blog/blog2.jpg" alt="blog" />
                    </a>
                  </Link>
                </div>

                <div className="content">
                  <ul>
                    <li>10 April 2020</li>
                    <li>
                      <a href="#">by Mod Tech Elevators</a>
                    </li>
                  </ul>

                  <Link href="/blog-details">
                    <a>
                      <h3>Stair Case Lifts</h3>
                    </a>
                  </Link>
                  <p>
                    A staircase elevator is a mechanical gadget for lifting
                    individuals, regularly those with inabilities, all over
                    steps. For adequately wide steps, a rail is mounted to the
                    tracks of the steps. A seat or lifting stage is connected to
                    the rail.
                  </p>

                  <Link href="/blog-details">
                    <a className="line-bnt">Read More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="blog-img">
                  <Link href="/blog-details">
                    <a>
                      <img src="/images/blog/blog3.jpg" alt="blog" />
                    </a>
                  </Link>
                </div>

                <div className="content">
                  <ul>
                    <li>10 April 2020</li>
                    <li>
                      <a href="#">By Mod Tech Elevators</a>
                    </li>
                  </ul>

                  <Link href="/blog-details">
                    <a>
                      <h3>Cargo / Freight Elevators </h3>
                    </a>
                  </Link>

                  <p>
                    FREIGHT ELEVATORS are Intended to move Inside a building.
                    Freight elevators as a rule travel at lower speeds than
                    passenger elevators, however they are worked to convey
                    heavier loads and completed to endure harder working
                    circumstances.
                  </p>

                  <Link href="/blog-details">
                    <a className="line-bnt">Read More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="blog-img">
                  <Link href="/blog-details">
                    <a>
                      <img src="/images/blog/blog3.jpg" alt="blog" />
                    </a>
                  </Link>
                </div>

                <div className="content">
                  <ul>
                    <li>11 April 2020</li>
                    <li>
                      <a href="#">By Mod Tech Elevators</a>
                    </li>
                  </ul>

                  <Link href="/blog-details">
                    <a>
                      <h3>Dumb waiters</h3>
                    </a>
                  </Link>

                  <p>
                    A dumbwaiter is a little freight lift or lift expected to
                    convey food. Dumbwaiters tracked down inside current
                    designs, including both business, public and confidential
                    structures, are in many cases associated between numerous
                    floors.
                  </p>

                  <Link href="/blog-details">
                    <a className="line-bnt">Read More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="blog-img">
                  <Link href="/blog-details">
                    <a>
                      <img src="/images/blog/e5.jpg" alt="blog" />
                    </a>
                  </Link>
                </div>

                <div className="content">
                  <ul>
                    <li>11 April 2020</li>
                    <li>
                      <a href="#">By Mod Tech Elevators</a>
                    </li>
                  </ul>

                  <Link href="/blog-details">
                    <a>
                      <h3>Hospital / Bed elevators</h3>
                    </a>
                  </Link>

                  <p>
                    Hospital, clinic Elevators Are Utilized For Straightforward
                    Transportation Of A Patient On Wheelchair To Wheeling away a
                    critical patient on stretcher Without Upsetting His Life
                    support supportive network With Specialists And Medical
                    caretakers, Easily, Quietly And Quickly, Without Jerks And
                    Shocks
                  </p>

                  <Link href="/blog-details">
                    <a className="line-bnt">Read More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="blog-img">
                  <Link href="/blog-details">
                    <a>
                      <img src="/images/blog/11.png" alt="blog" />
                    </a>
                  </Link>
                </div>

                <div className="content">
                  <ul>
                    <li>11 April 2020</li>
                    <li>
                      <a href="#">By Mod Tech Elevators</a>
                    </li>
                  </ul>

                  <Link href="/blog-details">
                    <a>
                      <h3>Over Head Cranes</h3>
                    </a>
                  </Link>

                  <p>
                    An overhead crane, normally called an bridge/extension
                    crane, is a sort of crane tracked down in industrial
                    conditions. An overhead crane comprises of two equal rails
                    situated on longitudinal I-radiates connected to inverse
                    steel segments through sections. The voyaging span traverses
                    the gap.
                  </p>

                  <Link href="/blog-details">
                    <a className="line-bnt">Read More</a>
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

export default Blog;
