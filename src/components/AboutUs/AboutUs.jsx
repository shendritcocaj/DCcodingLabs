import "./AboutUs.css";
import { BsChevronDoubleDown } from "react-icons/bs";
import team from "/team.jpg";

const AboutUs = () => {
  return (
    <>
      <div className="about-us container" id="aboutus">
        <p className="about-us-title">About Us</p>
        <p className="about-us-subtitle">
          We are a consulting, design, and development company with full-service
          offerings for technology.
        </p>
        <p className="aboutus-icons">
          <BsChevronDoubleDown />
        </p>
        <div className="aboutus-info">
          <div className="aboutus-card">
            <p className="aboutus-card-title">What we do?</p>
            <p className="aboutus-card-subtitle">
              We specialize in establishing industry benchmarks: operating as a
              comprehensive technology company that sets the pace for web
              design, web development, branding, mobile application development,
              personalized software, and SEO services. Our collaboration with
              your team is paramount, as we delve into your business procedures,
              pinpoint chances for enhancement, and construct a strategic
              pathway towards accomplishment.
            </p>
          </div>
          <img src={team} alt="" className="aboutus-image" />
          <div className="about-us-ball"></div>
        </div>
        <div className="about-us-line"></div>
      </div>
    </>
  );
};
export default AboutUs;
