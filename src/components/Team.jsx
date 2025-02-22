import React from "react";

function Team() {
  return (
    <>
      {/*-----Team Start-----*/}
      <section className="team section-padding" data-scroll-index={3}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sectioner-header text-center">
                <h3>Our Team</h3>
                <span className="line" />
                <p>
                  Sed quis nisi nisi. Proin consectetur porttitor dui sit amet
                  viverra. Fusce sit amet lorem faucibus, vestibulum ante in,
                  pharetra ante.
                </p>
              </div>
              <div className="section-content text-center">
                <div className="row">
                  <div className="col-md-4">
                    <div
                      className="team-detail wow bounce"
                      data-wow-delay="0.2s"
                    >
                      {" "}
                      <img
                        src="./assets/images/user1.jpg"
                        className="img-fluid"
                        alt="Company Logo"
                      />
                      <h4>Nitu Singh</h4>
                      <p>Marketing Specialist</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div
                      className="team-detail wow bounce"
                      data-wow-delay="0.4s"
                    >
                      {" "}
                      <img
                        src="./assets/images/user2.jpg"
                        className="img-fluid"
                        alt="Company Logo"
                      />
                      <h4>Yogesh Singh</h4>
                      <p>CEO &amp; Founder</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div
                      className="team-detail wow bounce"
                      data-wow-delay="0.6s"
                    >
                      {" "}
                      <img
                        src="./assets/images/user3.jpg"
                        className="img-fluid"
                        alt="Company Logo"
                      />
                      <h4>Nisha Sharma</h4>
                      <p>Web Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*-----Team End-----*/}
    </>
  );
}

export default Team;
