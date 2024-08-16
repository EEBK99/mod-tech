import React from "react";
import Link from "../../utils/ActiveLink";

const Navbar = () => {
  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link href="/">
                <a onClick={toggleNavbar} className="navbar-brand">
                  <img src="/images/logo.png" alt="logo" />
                </a>
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav text-left">
                  {/* <li className="nav-item">
                    <Link href="/index">
                      <a
                        onClick={(e) => e.preventDefault()}
                        className="nav-link dropdown-toggle"
                      >
                        Home
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Home
                          </a>
                        </Link>
                      </li>
                    </ul>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/index-2" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Home
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li> */}

                  <li className="nav-item">
                    <Link href="/" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Home
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/about-us" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        About
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/solutions" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Service
                      </a>
                    </Link>
                  </li>

                  {/* <li className="nav-item">
                    <Link href="#">
                      <a
                        onClick={(e) => e.preventDefault()}
                        className="nav-link dropdown-toggle"
                      >
                        Service
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/solutions" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Services we provide
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li> */}

                  {/* <li className="nav-item">
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/case-studies" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Projects
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/case-studies-details"
                          activeClassName="active"
                        >
                          <a onClick={toggleNavbar} className="nav-link">
                            Projects Details
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li> */}

                  {/* <li className="nav-item">
                    <Link href="#">
                      <a
                        onClick={(e) => e.preventDefault()}
                        className="nav-link dropdown-toggle"
                      >
                        Elevators
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/blog" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Elevators
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/blog-details" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Elevators Details
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li> */}

                  <li className="nav-item">
                    <Link href="/blog" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Elevators
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/contact-us" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Contact
                      </a>
                    </Link>
                  </li>
                </ul>

                <div className="others-options d-flex align-items-center ms-auto">
                  <div className="nav-right">
                    <form>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control search"
                          placeholder="Search..."
                        />
                      </div>
                      <button type="submit">
                        <i className="bx bx-search"></i>
                      </button>
                    </form>
                  </div>

                  <div className="nav-btn">
                    <Link href="#">
                      <a className="box-btn">Get Started</a>
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
