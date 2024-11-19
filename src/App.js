import NavBar from "./components/navBar";
// import Banner from "./components/Banner";
import About from "./components/About";
import VideoComp from "./components/VideoComp";
import Features from "./components/Features";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Faq from "./components/Faq";
import ContactUs from "./components/ContactUs";
// import DownloadSec from "./components/DownloadSec";
// import Footer from "./components/Footer";
import Banner2 from "./components/Banner2";
import FooterV2 from "./components/FooterV2";
function App() {
  return (
    <>
      <NavBar />
      {/* <Banner /> */}
      <Banner2 />
      <About />
      <VideoComp />
      <Features />
      {/*  */}
      <div className="coffee_section layout_padding">
        <div className="container">
          <div className="row">
            <h1 className="coffee_taital">OUR Coffee OFFER</h1>
            <div className="bulit_icon">
              <img alt="" src="images/bulit-icon.png" />
            </div>
          </div>
        </div>

        <div className="coffee_section_2">
          <div id="main_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-3 col-md-6">
                      <div className="coffee_img">
                        <img
                          alt=""
                          src="./assets/images/shopifybiotamradatte_1.png"
                        />
                      </div>
                      <h3 className="types_text">TYPES OF COFFEE</h3>
                      <p className="looking_text">
                        looking at its layout. The point of
                      </p>
                      <div className="read_bt">
                        <a href="/">Read More</a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="coffee_img">
                        <img
                          alt=""
                          src="./assets/images/shopifybiotamradatte_1.png"
                        />
                      </div>
                      <h3 className="types_text">BEAN VARIETIES</h3>
                      <p className="looking_text">
                        looking at its layout. The point of
                      </p>
                      <div className="read_bt">
                        <a href="/">Read More</a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="coffee_img">
                        <img
                          alt=""
                          src="./assets/images/shopifybiotamradatte_1.png"
                        />
                      </div>
                      <h3 className="types_text">COFFEE &amp; PASTRY</h3>
                      <p className="looking_text">
                        looking at its layout. The point of
                      </p>
                      <div className="read_bt">
                        <a href="/">Read More</a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="coffee_img">
                        <img
                          alt=""
                          src="./assets/images/shopifybiotamradatte_1.png"
                        />
                      </div>
                      <h3 className="types_text">COFFEE TO GO</h3>
                      <p className="looking_text">
                        looking at its layout. The point of
                      </p>
                      <div className="read_bt">
                        <a href="/">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-3 col-md-6">
                      <div className="coffee_img">
                        <img
                          alt=""
                          src="./assets/images/shopifybiotamradatte_1.png"
                        />
                      </div>
                      <h3 className="types_text">TYPES OF COFFEE</h3>
                      <p className="looking_text">
                        looking at its layout. The point of
                      </p>
                      <div className="read_bt">
                        <a href="/">Read More</a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="coffee_img">
                        <img
                          alt=""
                          src="./assets/images/shopifybiotamradatte_1.png"
                        />
                      </div>
                      <h3 className="types_text">BEAN VARIETIES</h3>
                      <p className="looking_text">
                        looking at its layout. The point of
                      </p>
                      <div className="read_bt">
                        <a href="/">Read More</a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="coffee_img">
                        <img
                          alt=""
                          src="./assets/images/shopifybiotamradatte_1.png"
                        />
                      </div>
                      <h3 className="types_text">COFFEE &amp; PASTRY</h3>
                      <p className="looking_text">
                        looking at its layout. The point of
                      </p>
                      <div className="read_bt">
                        <a href="/">Read More</a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="coffee_img">
                        <img
                          alt=""
                          src="./assets/images/shopifybiotamradatte_1.png"
                        />
                      </div>
                      <h3 className="types_text">COFFEE TO GO</h3>
                      <p className="looking_text">
                        looking at its layout. The point of
                      </p>
                      <div className="read_bt">
                        <a href="/">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#main_slider"
              role="button"
              data-slide="prev"
            >
              <i className="fa fa-arrow-left" />
            </a>
            <a
              className="carousel-control-next"
              href="#main_slider"
              role="button"
              data-slide="next"
            >
              <i className="fa fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>

      {/*  */}
      <Team />
      <Testimonial />
      <Faq />
      <ContactUs />
      {/* <DownloadSec /> */}
      {/* <Footer /> */}
      <FooterV2></FooterV2>
    </>
  );
}

export default App;
