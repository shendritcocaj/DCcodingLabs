import "./Careers.css";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Careers = () => {
  return (
    <div className="careers-section ">
      {" "}
      <div className="careers container">
        <div className="job-open">
          <NavLink to={"/"} className="back-home">
            <span className="backhome-span">&larr;</span>
            <p className="back-home-p">Back to Home</p>
          </NavLink>
          <p className="careers-title">Become Part of Our Growing Team</p>
          <p className="careers-jobs-message">
            Unfortunately, at this time, we don't have any job vacancies!
          </p>
        </div>
        <div className="careers-contact">
          <p className="careers-contact-text">
            Didn't find what you were looking for?
          </p>
          <NavLink to={"/"} className="career-button-contact">
            Contact Us
          </NavLink>
        </div>
      </div>
      <div className="footer-careers-backgroundcolor">
        <div className="careers-footer-details ">
          <div className="footer-name">
            <p className="footer-name-details">DCoding Labs LLC</p>
            <div className="social-media">
              <p className="careers-social-media-title">Social Media</p>
              <div className="footer-icons">
                <p className="footer-icon">
                  <BsLinkedin />
                </p>
                <p className="footer-icon">
                  <BsInstagram />
                </p>
                <p className="footer-icon">
                  <BsFacebook />
                </p>
              </div>
            </div>
          </div>
          <div className="footer-nav">
            <p className="footer-nav-comp-title">The Company</p>
            <p className="footer-nav-title">Home</p>
            <p className="footer-nav-title">About Us</p>
            <p className="footer-nav-title">Services</p>
            <p className="footer-nav-title">Contact Us</p>
          </div>
        </div>
        <div className="careers-footer-copyright">Copyright © 2023 DCodin</div>
      </div>
    </div>
  );
};

export default Careers;
