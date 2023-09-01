import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer ">
      <div className="container">
        <div className="footer-title">Your growth, our code!</div>
        <div className="footer-line"></div>
        <div className="footer-details">
          <div className="footer-name">
            <p className="footer-name-details">DCoding Labs LLC</p>
            <div className="social-media">
              <p className="social-media-title">Social Media</p>
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
        <div className="footer-copyright">
          Copyright © 2023 DCoding Labs Privacy Policy
        </div>
      </div>
    </div>
  );
};

export default Footer;
