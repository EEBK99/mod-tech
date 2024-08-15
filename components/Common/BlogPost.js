import React from "react";
import Link from "next/link";

const BlogPost = () => {
  return (
    <div className="home-blog-area ptb-100">
      <div className="container">
        <div className="section-title">
          <span>Elevators</span>
          <h2>Our Different Types Of Elevators</h2>
          <p>
            We are an organization exclusively devoted to our work. Our solitary
            and complete concentration to one field make us exceptionally well
            versed in this area. Our worldwide openness keeps us side by side
            with the most recent mechanical turns of events. This has empowered
            us to learn, accomplish and keep up with global norms of value,
            security and expert morals.
          </p>
        </div>

        <div className="row justify-content-center">
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
                    <h3>Haripur </h3>
                  </a>
                </Link>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas in fugit minima modi perspiciatis nam aspernatur
                  porro
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
                    <a href="#">By Admin</a>
                  </li>
                </ul>

                <Link href="/blog-details">
                  <a>
                    <h3>Temperature App UX Studies & Development Case</h3>
                  </a>
                </Link>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas in fugit minima modi perspiciatis nam aspernatur
                  porro
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
                    <a href="#">By Admin</a>
                  </li>
                </ul>

                <Link href="/blog-details">
                  <a>
                    <h3>IT Software Company Development Case</h3>
                  </a>
                </Link>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas in fugit minima modi perspiciatis nam aspernatur
                  porro
                </p>

                <Link href="/blog-details">
                  <a className="line-bnt">Read More</a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="blog-btn text-center">
          <p>
            We Have More Usefull Blogs For You.{" "}
            <Link href="/blog">
              <a>View More</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
