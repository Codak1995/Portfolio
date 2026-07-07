import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="navbar-container">
      <div className="navbar-contents">
        <div className="logo">{" < codak  />"}</div>
        <div className="navbar-links">
          <Link to="#about">ABOUT</Link>
          <Link to="#skills">SKILLS</Link>
          <Link to="#projects">PROJECTS</Link>
          <Link to="#contacts">CONTACT</Link>
        </div>
        <button className="hire-btn">HIRE ME</button>
      </div>

      <div className={`navbar-mobile ${mobileMenuOpen ? "open" : ""}`}>
        <div className="logo">{" < codak  />"}</div>
        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <i className="fa-solid fa-bars"></i>
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="navmobile-menu">
          <Link to="#about" onClick={() => setMobileMenuOpen(false)}>
            About
          </Link>
          <Link to="#skills" onClick={() => setMobileMenuOpen(false)}>
            Skills
          </Link>
          <Link to="#projects" onClick={() => setMobileMenuOpen(false)}>
            Projects
          </Link>
          <Link to="#contacts" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </Link>
          <button className="hire-btn">HIRE ME</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
