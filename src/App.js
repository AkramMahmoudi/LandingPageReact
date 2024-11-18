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
import Footer from "./components/Footer";
import Banner2 from "./components/Banner2";
function App() {
  return (
    <>
      <NavBar />
      {/* <Banner /> */}
      <Banner2 />
      <About />
      <VideoComp />
      <Features />
      <Team />
      <Testimonial />
      <Faq />
      <ContactUs />
      {/* <DownloadSec /> */}
      <Footer />
    </>
  );
}

export default App;
