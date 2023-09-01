import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUs.css";
import { IoLocationSharp } from "react-icons/io5";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ovdixnu",
        "template_cg9ny1m",
        form.current,
        "kICO628dZkkGJpvd_"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact" id="contactus">
      <div className="contact-details container">
        {" "}
        <div className="form-wrapper">
          <p className="contact-title">Contact Us</p>
          <p className="contact-subtitle">
            Please contact our team for further inquiries:
          </p>
          <form ref={form} className="contact-form" onSubmit={sendEmail}>
            <div className="contact-form-div">
              <input
                type="text"
                name="user_name"
                className="contact-form-input"
                placeholder="Insert your name"
              />
            </div>
            <div className="contact-form-div">
              <input
                type="email"
                name="user_email"
                className="contact-form-input"
                placeholder="Insert your email"
              />
            </div>
            <div className="contact-form-div">
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact-form-input"
                placeholder="Insert your message"
              ></textarea>
            </div>
            <input type="submit" value="Send" className="form-button" />
          </form>{" "}
        </div>
        <div className="location">
          <div className="map">
            {" "}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d95040.10377116463!2d-87.70408179052997!3d41.89278734759578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d41.8928168!2d-87.621681!5e0!3m2!1sen!2s!4v1692560139824!5m2!1sen!2s"
              loading="lazy"
            ></iframe>
          </div>
          <p className="location-text ">
            <span>
              <IoLocationSharp className="form-icon" />
            </span>{" "}
            <span> Location</span>{" "}
          </p>
          <p className="location-text">DCoding Labs LLC,</p>
          <p className="location-text">230 E Ohio Street, Suite 410 1567</p>
          <p className="location-text">Chicago, IL 60611</p>
        </div>{" "}
      </div>
    </div>
  );
};

export default ContactUs;
