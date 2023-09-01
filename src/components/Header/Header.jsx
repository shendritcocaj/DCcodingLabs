import { Link, NavLink } from "react-router-dom";
import "./header.css";
import logo from "/Logo Var 2.png";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

const Header = () => {
  const [mobile, setMobile] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <ul
          className={mobile ? "nav-links-mobile" : "nav-list "}
          onClick={() => setMobile(false)}
        >
          <li>
            {" "}
            <NavLink
              to={"/"}
              className="nav-link"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <a href="#aboutus" className="nav-link">
              AboutUs
            </a>
          </li>
          <li>
            <a href="#services" className="nav-link">
              Services
            </a>
          </li>
          <li>
            <NavLink to={"careers"} className="nav-link">
              Careers
            </NavLink>
          </li>
          <li>
            <a href="#contactus" className="nav-link button-header">
              ContactUs
            </a>
          </li>
        </ul>

        <button className="mobile-menu-icon" onClick={() => setMobile(!mobile)}>
          {mobile ? <GrClose /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
