import React, { useState, useEffect } from "react";
import { SolarArrowRight, SolarArrowLeft } from "./Arrows";
// import "./Testimonial.css"; // Include the CSS file for styling

function Testimonial() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      console.log("handleResize");
      setIsMobile(window.innerWidth <= 768);
    };

    // Call handleResize immediately on load
    handleResize();

    // Add the resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section className="testimonial section-padding" data-scroll-index="4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sectioner-header text-center white">
                <h3>Testimonials</h3>
                <span className="line"></span>
                <p className="white">
                  Sed quis nisi nisi. Proin consectetur porttitor dui sit amet
                  viverra. Fusce sit amet lorem faucibus, vestibulum ante in,
                  pharetra ante.
                </p>
              </div>

              <div className="section-content">
                <div className="row">
                  {isMobile ? (
                    <section>
                      {/* <div class="row d-flex justify-content-center">
                        <div class="col-md-10 col-xl-8 text-center">
                          <h3 class="mb-4">Testimonials</h3>
                          <p class="mb-4 pb-2 mb-md-5 pb-md-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Fugit, error amet numquam iure provident
                            voluptate esse quasi, veritatis totam voluptas
                            nostrum quisquam eum porro a pariatur veniam.
                          </p>
                        </div>
                      </div> */}

                      <div class="row text-center">
                        <div class="col-md-4 mb-5 mb-md-0">
                          <div class="card testimonial-card">
                            <div
                              class="card-up"
                              style={{ backgroundColor: "#d96226" }}
                            ></div>
                            <div class="avatar mx-auto bg-white">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                class="rounded-circle img-fluid"
                                alt=""
                              />
                            </div>
                            <div class="card-body">
                              <h4 class="mb-4">Maria Smantha</h4>
                              <hr />
                              <p class="dark-grey-text mt-4">
                                <i class="fas fa-quote-left pe-2"></i>Lorem
                                ipsum dolor sit amet eos adipisci, consectetur
                                adipisicing elit.
                              </p>
                              <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                                <li>
                                  <i class="fas fa-star fa-sm"></i>
                                </li>
                                <li>
                                  <i class="fas fa-star fa-sm"></i>
                                </li>
                                <li>
                                  <i class="fas fa-star fa-sm"></i>
                                </li>
                                <li>
                                  <i class="fas fa-star fa-sm"></i>
                                </li>
                                <li>
                                  <i class="far fa-star fa-sm"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 mb-5 mb-md-0">
                          <div class="card testimonial-card">
                            <div
                              class="card-up"
                              style={{ backgroundColor: "#d96226" }}
                            ></div>
                            <div class="avatar mx-auto bg-white">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                                class="rounded-circle img-fluid"
                                alt=""
                              />
                            </div>
                            <div class="card-body">
                              <h4 class="mb-4">Lisa Cudrow</h4>
                              <hr />
                              <p class="dark-grey-text mt-4">
                                <i class="fas fa-quote-left pe-2"></i>Neque
                                cupiditate assumenda in maiores repudi mollitia
                                architecto.
                              </p>
                              <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                                <li>
                                  <i class="fas fa-star fa-sm"></i>
                                </li>
                                <li>
                                  <i class="fas fa-star fa-sm"></i>
                                </li>
                                <li>
                                  <i class="fas fa-star fa-sm"></i>
                                </li>
                                <li>
                                  <i class="fas fa-star fa-sm"></i>
                                </li>
                                <li>
                                  <i class="far fa-star fa-sm"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 mb-0">
                          <div class="card testimonial-card">
                            <div
                              class="card-up"
                              style={{ backgroundColor: "#d96226" }}
                            ></div>
                            <div class="avatar mx-auto bg-white">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                                class="rounded-circle img-fluid"
                                alt=""
                              />
                            </div>
                            <div class="card-body">
                              <h4 class="mb-4">John Smith</h4>
                              <hr />
                              <p class="dark-grey-text mt-4">
                                <i class="fas fa-quote-left pe-2"></i>Delectus
                                impedit saepe officiis ab aliquam repellat rem
                                unde ducimus.
                              </p>
                              <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                                <li>
                                  <i class="fas fa-star fa-sm"></i>
                                </li>
                                <li>
                                  <i class="fas fa-star fa-sm"></i>
                                </li>
                                <li>
                                  <i class="fas fa-star fa-sm"></i>
                                </li>
                                <li>
                                  <i class="fas fa-star fa-sm"></i>
                                </li>
                                <li>
                                  <i class="fas fa-star fa-sm"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  ) : (
                    <div className="offset-md-2 col-md-8 col-sm-12">
                      <div className="slider">
                        <div className="slider-item">
                          <div className="test-img">
                            <img
                              src="./assets/images/user1.jpg"
                              alt="Placeholder"
                              width="157"
                              height="157"
                            />
                          </div>
                          <div className="test-text">
                            <span className="title">
                              <span>zineb</span> Digital Designer
                            </span>
                            Consectetuer adipiscing elit, sed diam nonummy nibh
                            euismod tincidunt ut laoreet dolore magna aliquam
                            eratvo lutpat.
                          </div>
                        </div>
                        <div className="slider-item">
                          <div className="test-img">
                            <img
                              src="./assets/images/user3.jpg"
                              alt="Placeholder"
                              width="157"
                              height="157"
                            />
                          </div>
                          <div className="test-text">
                            <span className="title">
                              <span>jaber Smith</span> App User
                            </span>
                            Euismod tincidunt ut laoreet dolore magna aliquam
                            eratvo lutpat. Ut wisi enim ad minim veniam, quis
                            nostrud v
                          </div>
                        </div>
                        <div className="slider-item">
                          <div className="test-img">
                            <img
                              src="./assets/images/user3.jpg"
                              alt="Placeholder"
                              width="157"
                              height="157"
                            />
                          </div>
                          <div className="test-text">
                            <span className="title">
                              <span>bachir Shaw</span> Blogger
                            </span>
                            Consectetuer adipiscing elit, sed diam nonummy nibh
                            euismod tincidunt ut laoreet dolore magna aliquam
                            eratvo lutpat. Ut wisi enim ad minim veniam, quis
                            nostrud v
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial;
