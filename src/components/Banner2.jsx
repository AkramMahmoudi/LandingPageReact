import React from "react";
import { SolarArrowRight, SolarArrowLeft } from "./Arrows";

function Banner2() {
  return (
    <>
      <>
        {/* top */}
        <div className="full_bg">
          <div className="slider_main">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  {/* carousel code */}
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                  >
                    <ol className="carousel-indicators">
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to={0}
                        className="active"
                      />
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to={1}
                      />
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to={2}
                      />
                    </ol>
                    <div className="carousel-inner">
                      {/* first slide */}
                      <div className="carousel-item active">
                        <div className="carousel-caption relative">
                          <div className="row d_flex">
                            <div className="col-md-7">
                              <div className="board">
                                <h3>You can Get Pure Hony Here</h3>
                                <p>
                                  There are many variations of passages of Lorem
                                  Ipsum available, but the majority have
                                  suffered
                                </p>
                                <a className="read_more" href="contact.html">
                                  Contact
                                </a>
                              </div>
                            </div>
                            <div className="col-md-5">
                              <div className="banner_img">
                                <figure>
                                  <img
                                    className="img_responsive"
                                    src="./assets/images/banner_img.png"
                                    alt=""
                                  />
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* second slide */}
                      <div className="carousel-item">
                        <div className="carousel-caption relative">
                          <div className="row d_flex">
                            <div className="col-md-7">
                              <div className="board">
                                <h3>You can Get Pure Hony Here</h3>
                                <p>
                                  There are many variations of passages of Lorem
                                  Ipsum available, but the majority have
                                  suffered
                                </p>
                                <a className="read_more" href="contact.html">
                                  Contact
                                </a>
                              </div>
                            </div>
                            <div className="col-md-5">
                              <div className="banner_img">
                                <figure>
                                  <img
                                    className="img_responsive"
                                    src="./assets/images/banner_img.png"
                                    alt=""
                                  />
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* third slide*/}
                      <div className="carousel-item">
                        <div className="carousel-caption relative">
                          <div className="row d_flex">
                            <div className="col-md-7">
                              <div className="board">
                                <h3>You can Get Pure Hony Here</h3>
                                <p>
                                  There are many variations of passages of Lorem
                                  Ipsum available, but the majority have
                                  suffered
                                </p>
                                <a className="read_more" href="contact.html">
                                  Contact
                                </a>
                              </div>
                            </div>
                            <div className="col-md-5">
                              <div className="banner_img">
                                <figure>
                                  <img
                                    className="img_responsive"
                                    src="./assets/images/banner_img.png"
                                    alt=""
                                  />
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* controls */}
                    <a
                      className="carousel-control-prev"
                      href="#carouselExampleIndicators"
                      role="button"
                      data-slide="prev"
                    >
                      <SolarArrowLeft />
                      {/* <i className="fa fa-long-arrow-left" aria-hidden="true" /> */}
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#carouselExampleIndicators"
                      role="button"
                      data-slide="next"
                    >
                      {/* <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                      /> */}
                      <SolarArrowRight />
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end banner */}
      </>
    </>
  );
}

export default Banner2;
