import React from "react";
import Link from "next/link";

const BlogSidebar = () => {
  return (
    <div className="widget-area" id="secondary">
      <div className="widget widget_categories">
        <h3 className="widget-title">Categories</h3>
        <div className="post-wrap">
          <ul>
            <li>
              <Link href="#">
                <a>
                  Business <span>(10)</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  Privacy <span>(20)</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  Technology <span>(10)</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  Tips <span>(12)</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  Uncategorized <span>(16)</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="widget widget_tag_cloud">
        <h3 className="widget-title">Tags</h3>
        <div className="post-wrap">
          <div className="tagcloud">
            <Link href="#">
              <a>Business (3)</a>
            </Link>

            <Link href="#">
              <a>Privacy (3)</a>
            </Link>

            <Link href="#">
              <a>Technology (2)</a>
            </Link>

            <Link href="#">
              <a>Tips (2)</a>
            </Link>

            <Link href="#">
              <a>Uncategorized (1)</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
