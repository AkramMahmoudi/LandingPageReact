import React from "react";

function NavBar() {
  return (
    <>
      {/* Start Navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a href="/" className="navbar-brand navbar-logo">
            <img
              src="./assets/images/9622184.png"
              alt="logo"
              className="logo-1"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fas fa-bars" />{" "}
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="/" data-scroll-nav={0}>
                  Home
                </a>{" "}
              </li>
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="/" data-scroll-nav={1}>
                  About
                </a>{" "}
              </li>
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="/" data-scroll-nav={2}>
                  Features
                </a>{" "}
              </li>
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="/" data-scroll-nav={3}>
                  Team
                </a>{" "}
              </li>
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="/" data-scroll-nav={4}>
                  Testimonials
                </a>{" "}
              </li>
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="/" data-scroll-nav={5}>
                  Faq
                </a>{" "}
              </li>
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="/" data-scroll-nav={6}>
                  Contact
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}

export default NavBar;
