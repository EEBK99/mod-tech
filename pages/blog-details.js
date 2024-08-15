import React from "react";
import Navbar from "../components/_App/Navbar";
import TopHeader from "../components/_App/TopHeader";
import PageBanner from "../components/Common/PageBanner";
import Link from "next/link";
import Footer from "../components/_App/Footer";
import BlogSidebar from "../components/BlogDetails/BlogSidebar";

const BlogDetails = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="ELEVATOR DETAILS"
        homePageUrl="/"
        homePageText="Home"
        activePageText="ELEVATORS Details"
      />

      <div className="blog-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">
                  <img
                    src="/images/blog-details/blog-details.jpg"
                    alt="image"
                  />
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <span>Posted On:</span> <a href="#">May 19, 2020</a>
                      </li>
                      <li>
                        <span>Posted By:</span>{" "}
                        <a href="#">ModTech Elevators</a>
                      </li>
                    </ul>
                  </div>

                  <h3>Home, Passenger, Shopping Mall Lifts</h3>

                  <h2> HOME ELEVATORS</h2>
                  <p>
                    A lift in an individual home has been seen as an
                    extravagance for a really long time. In any case, more
                    purchasers — going from families with small kids to those
                    with impermanent or super durable handicaps — presently need
                    a stage that can move individuals and things starting with
                    one level of a home then onto the next.
                  </p>

                  <p>
                    A home elevator resembles the lift in a retail chain,
                    enormous place of business or air terminal in that it
                    voyages upward and transports at least one individuals all
                    over the floors or levels in a house. Some are intended to
                    be sat in when utilized while others can be stood up in very
                    much like business types.
                  </p>

                  <blockquote className="flaticon-quote">
                    <p>
                      Possessing a lift is about personal satisfaction and
                      giving you the opportunity to move about your property.
                      This as well as they are very useful, permitting you to
                      handily move bigger and heavier things more.
                    </p>
                  </blockquote>
                  <h2> PASSENGER ELEVATORS</h2>
                  <p>
                    Passenger lifts offer higher proficiency. They are for all
                    intents and purposes silent and stay away from any
                    vibration. Like water powered lifts, passenger lifts are fit
                    for conveying weighty burdens. They are utilized to convey a
                    base heap of 320 kg (equivalent to around four-six
                    individuals). They can convey a greatest heap of up to 5000
                    kg, which makes the passenger lift more dependable and
                    adaptable. In this individual, move rapidly between floors
                    at a speed of 0.6 meters each second. It's a given that the
                    creative designing makes these lifts noteworthy, these
                    passenger lifts are not difficult to utilize and solid after
                    some time. They include a gearless engine plan and can be
                    begun 180 times each hour. They are likewise intended to
                    convey weighty burdens.
                  </p>

                  <p>
                    Passenger lifts utilize demonstrated innovation lifts. These
                    lifts are accessible in the machine room and machine
                    room-less forms. The water powered drive framework is
                    practically loud and requires a quiet choice. These lifts
                    have great ride quality. Water driven passenger lifts
                    utilize low energy utilization, which naturally diminishes
                    their life cycle costs. It should give incredible unwavering
                    quality.
                  </p>

                  <div className="row justify-content-center mb-3">
                    <div className="col-lg-4 col-sm-6 mt-2">
                      <div className="b-d-s-img">
                        <img src="/images/blog/e2.jpg" alt="Image" />
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mt-2">
                      <div className="b-d-s-img">
                        <img src="/images/blog/gg.jpg" alt="Image" />
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                      <div className="b-d-s-img">
                        <img src="/images/blog/section1.jpg" alt="Image" />
                      </div>
                    </div>
                  </div>

                  <h2>SHOPPING MALL ELEVATORS</h2>
                  <p>
                    The Elevators and lifts for Shopping malls are frequently
                    are so alluring. As much of the time, a more appealing
                    structure cause be an incredible piece of the feel. The vast
                    majority go to the shopping center are incredibly drawn in
                    by its magnificence. Our plans are best as a rule. Our for
                    the most part plans are made to address the issues of the
                    shopping center and as per rules and guidelines. They are
                    intended to guarantee the essential security of clients of
                    lifts and derrick Our essential concern is to give
                    incredible fulfillment to our clients. We offer a large
                    number of administrations that assistance in more noteworthy
                    commitment. Our establishment of lifts is finished by
                    countless specialists who make every one of the fundamental
                    strides that are expected for the establishment of lifts.
                  </p>

                  <p>
                    Our amazing skill permits us to give the different
                    establishment answers for you. You need to pick the best one
                    that suits as indicated by the requirements of the venture.
                    Our establishment of lifts is finished by experienced
                    experts to do the most complicated gatherings. We give
                    ensured fixing of administration. We generally utilize
                    quality items that are taken care of by specialists. We give
                    a most extreme assurance to the quality work.
                  </p>
                </div>

                <div className="post-navigation">
                  <div className="navigation-links">
                    <div className="nav-previous">
                      <Link href="#">
                        <a>
                          <i className="bx bx-left-arrow-alt"></i> Prev Post
                        </a>
                      </Link>
                    </div>

                    <div className="nav-next">
                      <Link href="#">
                        <a>
                          Next Post <i className="bx bx-right-arrow-alt"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="comments-area">
                  <h3 className="comments-title">2 Comments:</h3>

                  <ol className="comment-list">
                    <li className="comment">
                      <div className="comment-body">
                        <footer className="comment-meta">
                          <div className="comment-author vcard">
                            <img
                              src="/images/blog-details/avtar2.png"
                              className="avatar"
                              alt="image"
                            />
                            <b className="fn">Ali Rana</b>
                            <span className="says">says:</span>
                          </div>

                          <div className="comment-metadata">
                            <span>April 24, 2020 at 10:59 am</span>
                          </div>
                        </footer>

                        <div className="comment-content">
                          <p>Very helpful and informative</p>
                        </div>

                        <div className="reply">
                          <Link href="#">
                            <a className="comment-reply-link">Reply</a>
                          </Link>
                        </div>
                      </div>

                      <ol className="children">
                        <li className="comment">
                          <div className="comment-body">
                            <footer className="comment-meta">
                              <div className="comment-author vcard">
                                <img
                                  src="/images/blog-details/avtar1.jpg"
                                  className="avatar"
                                  alt="image"
                                />
                                <b className="fn">Muhammad Ifran</b>
                                <span className="says">says:</span>
                              </div>

                              <div className="comment-metadata">
                                <span>April 24, 2020 at 10:59 am</span>
                              </div>
                            </footer>

                            <div className="comment-content">
                              <p>
                                Thanks for sharing, it cleared all my
                                confusions.
                              </p>
                            </div>

                            <div className="reply">
                              <Link href="#">
                                <a className="comment-reply-link">Reply</a>
                              </Link>
                            </div>
                          </div>
                        </li>
                      </ol>
                    </li>

                    <li className="comment">
                      <div className="comment-body">
                        <footer className="comment-meta">
                          <div className="comment-author vcard">
                            <img
                              src="/images/blog-details/avtar.jpg"
                              className="avatar"
                              alt="image"
                            />
                            <b className="fn">Shakeel Khan</b>
                            <span className="says">says:</span>
                          </div>

                          <div className="comment-metadata">
                            <span>April 24, 2020 at 10:59 am</span>
                          </div>
                        </footer>

                        <div className="comment-content">
                          <p>
                            Really excieted to see technology evolving so
                            greatly.
                          </p>
                        </div>

                        <div className="reply">
                          <Link href="#">
                            <a className="comment-reply-link">Reply</a>
                          </Link>
                        </div>
                      </div>
                    </li>
                  </ol>

                  <div className="comment-respond">
                    <h3 className="comment-reply-title">Leave a Reply</h3>

                    <form className="comment-form">
                      <p className="comment-notes">
                        <span id="email-notes">
                          Your email address will not be published.
                        </span>
                        Required fields are marked{" "}
                        <span className="required">*</span>
                      </p>
                      <p className="comment-form-author">
                        <label>
                          Name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          id="author"
                          name="author"
                          required="required"
                        />
                      </p>
                      <p className="comment-form-email">
                        <label>
                          Email <span className="required">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required="required"
                        />
                      </p>
                      <p className="comment-form-url">
                        <label>Website</label>
                        <input type="url" id="url" name="url" />
                      </p>
                      <p className="comment-form-comment">
                        <label>Comment</label>
                        <textarea
                          name="comment"
                          id="comment"
                          rows="5"
                          required="required"
                        ></textarea>
                      </p>
                      <p className="form-submit">
                        <input
                          type="submit"
                          name="submit"
                          id="submit"
                          className="submit"
                          value="Post A Comment"
                        />
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BlogDetails;
