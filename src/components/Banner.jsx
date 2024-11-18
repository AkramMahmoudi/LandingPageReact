import React from "react";

function Banner() {
  return (
    <>
      {/*-----Banner Start-----*/}
      <section className="banner" data-scroll-index={0}>
        <div className="banner-overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-12">
                <div className="banner-text">
                  <h2 className="white">Best App Website Template</h2>
                  <h6 className="white">
                    This awesome template designed by{" "}
                    <a
                      href="http://w3Template.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="weblink"
                    >
                      W3 Template
                    </a>
                    .
                  </h6>
                  <p className="banner-text white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur hendrerit neque massa, sit amet tristique ante
                    porta ut. In sodales et justo vel vulputate. Pellentesque
                    habitant morbi tristique senectus et netus et malesuada
                    fames ac turpis egestas.
                  </p>
                  <ul>
                    <li>
                      <a href="/">
                        <img
                          src="./assets/images/appstore.png"
                          className="wow fadeInUp"
                          data-wow-delay="0.4s"
                          alt="Company Logo"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img
                          src="./assets/images/playstore.png"
                          className="wow fadeInUp"
                          data-wow-delay="0.7s"
                          alt="Company Logo"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                {" "}
                <img
                  src="./assets/images/iphone-screen.png"
                  className="img-fluid wow fadeInUp"
                  alt="Company Logo"
                />{" "}
              </div>
            </div>
          </div>
        </div>
        <span className="svg-wave">
          {" "}
          <img
            className="svg-hero"
            src="./assets/images/applight-wave.svg"
            alt="Company Logo"
          />{" "}
        </span>{" "}
      </section>
      {/*-----Banner End-----*/}
    </>
  );
}

export default Banner;
