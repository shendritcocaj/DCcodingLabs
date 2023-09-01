import React from "react";
import "./scrollToTop.css";
import { BiArrowToTop } from "react-icons/bi";

const ScrollToTop = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = this.document.querySelector(".scrollup");
    if (this.scrollY >= 300) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });
  return (
    <a href="#" className="scrollup">
      <i className="scrollup-icon">
        <BiArrowToTop />
      </i>
    </a>
  );
};

export default ScrollToTop;
