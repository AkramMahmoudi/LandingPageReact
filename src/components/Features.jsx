import React from "react";

function Features() {
  return (
    <>
      {/*-----Features Start-----*/}
      <section className="feature section-padding" data-scroll-index={2}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sectioner-header text-center">
                <h3 style={{ color: "white" }}>Features</h3>
                <span className="line" />
                <p>
                  Sed quis nisi nisi. Proin consectetur porttitor dui sit amet
                  viverra. Fusce sit amet lorem faucibus, vestibulum ante in,
                  pharetra ante.
                </p>
              </div>
              <div className="section-content text-center">
                <div className="row">
                  <div className="col-md-4 col-sm-12">
                    <div
                      className="media single-feature wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <div className="media-body text-right media-right-margin">
                        <h5 style={{ color: "white" }}>Fast Processing</h5>
                        <p style={{ color: "white" }}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididugnt ut labore
                        </p>
                      </div>
                      <div className="media-right icon-border">
                        {" "}
                        <span className="fa fa-bolt" aria-hidden="true" />{" "}
                      </div>
                    </div>
                    <div
                      className="media single-feature wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <div className="media-body text-right media-right-margin">
                        <h5 style={{ color: "white" }}>Low Power Consuming</h5>
                        <p style={{ color: "white" }}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididugnt ut labore
                        </p>
                      </div>
                      <div className="media-right icon-border">
                        {" "}
                        <span
                          className="fa fa-battery-full"
                          aria-hidden="true"
                        />{" "}
                      </div>
                    </div>
                    <div
                      className="media single-feature wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <div className="media-body text-right media-right-margin">
                        <h5 style={{ color: "white" }}>Wifi Compatibility</h5>
                        <p style={{ color: "white" }}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididugnt ut labore
                        </p>
                      </div>
                      <div className="media-right icon-border">
                        {" "}
                        <span className="fa fa-wifi" aria-hidden="true" />{" "}
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-12">
                    <div className="feature-mobile">
                      <img
                        src="./assets/images/noyauxdattes-031216-111-removebg-preview.png"
                        className="product-img img-fluid wow fadeInUp"
                        alt="Company Logo"
                      />
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-12">
                    <div
                      className="media single-feature wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <div className="media-left icon-border media-right-margin">
                        {" "}
                        <span
                          className="fa fa-check-double"
                          aria-hidden="true"
                        />{" "}
                      </div>
                      <div className="media-body text-left">
                        <h5 style={{ color: "white" }}> Regular Updates</h5>
                        <p style={{ color: "white" }}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididugnt ut labore
                        </p>
                      </div>
                    </div>
                    <div
                      className="media single-feature wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <div className="media-left icon-border media-right-margin">
                        {" "}
                        <span
                          className="fa fa-dollar-sign"
                          aria-hidden="true"
                        />{" "}
                      </div>
                      <div className="media-body text-left">
                        <h5 style={{ color: "white" }}>Save Money</h5>
                        <p style={{ color: "white" }}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididugnt ut labore
                        </p>
                      </div>
                    </div>
                    <div
                      className="media single-feature wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <div className="media-left icon-border media-right-margin">
                        <span className="fa fa-hdd" aria-hidden="true" />{" "}
                      </div>
                      <div className="media-body text-left">
                        <h5 style={{ color: "white" }}>Unlimited Storage</h5>
                        <p style={{ color: "white" }}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididugnt ut labore
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*-----Features End-----*/}
    </>
  );
}

export default Features;
