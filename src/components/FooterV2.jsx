import React from "react";

function FooterV2() {
  return (
    <>
      {/*  footer */}
      <footer>
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="infoma text_align_left">
                  <h3 style={{ color: "white" }}>About</h3>
                  <p style={{ color: "white" }} className="ipsum">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sedconsectetur{" "}
                  </p>
                  {/* <ul className="social_icon">
                    <li>
                      <a
                        href="/"
                        onClick={(e) => {
                          e.preventDefault(); // Prevent navigation
                        }}
                      >
                        <i className="fa fa-facebook" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        onClick={(e) => {
                          e.preventDefault(); // Prevent navigation
                        }}
                      >
                        <i className="fa fa-twitter" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        onClick={(e) => {
                          e.preventDefault(); // Prevent navigation
                        }}
                      >
                        <i
                          className="fa fa-linkedin-square"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        onClick={(e) => {
                          e.preventDefault(); // Prevent navigation
                        }}
                      >
                        <i className="fa fa-instagram" aria-hidden="true" />
                      </a>
                    </li>
                  </ul> */}
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="infoma">
                  <h3 style={{ color: "white" }}>Adderess</h3>
                  <ul style={{ color: "white" }} className="conta">
                    <li>
                      Healing Center, oo W Street name, <br />
                      Loram ipusum
                      <br /> (+213) 8522369417 <br />
                      (+213) 8522369417 <br />
                    </li>
                    {/* <li>
                        (+213) 8522369417 <br />
                        (+213) 8522369417
                      </li> */}
                    <li>
                      <a className="emailss" href="/">
                        demo@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 pad_lrft col-sm-6">
                <div className="infoma">
                  <h3
                    style={{
                      color: "white",
                      textAlign: "center",
                      marginRight: "15%",
                    }}
                  >
                    Links
                  </h3>
                  <ul className="fullink">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="/">About</a>
                    </li>
                    <li>
                      <a href="/">Shop</a>
                    </li>
                    <li>
                      <a href="/">Quality</a>
                    </li>
                    <li>
                      <a href="/">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="infoma">
                  <h3 style={{ color: "white" }}>Newsletter</h3>
                  <form className="form_subscri">
                    <div className="row">
                      <div className="col-md-12">
                        <input
                          className="newsl"
                          placeholder="Your Name"
                          type="text"
                          name="Your Name"
                        />
                      </div>
                      <div className="col-md-12">
                        <input
                          className="newsl"
                          placeholder="Email"
                          type="text"
                          name="Email"
                        />
                      </div>
                      <div className="col-md-12">
                        <button className="subsci_btn">subscribe</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <p>
                    © 2024 All Rights Reserved. <a href="/"> Express Tech</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* end footer */}
    </>
  );
}

export default FooterV2;
