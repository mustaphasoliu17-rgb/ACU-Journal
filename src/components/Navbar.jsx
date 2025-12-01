import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img src="/acu logo.jpg" alt="Geological Sciences Journal" />
          <div className="logo-text">
            <span className="university-name">Ajayi Crowther University</span>
            <span className="department-name">
              Department of Geological Sciences
            </span>
          </div>
        </Link>

        {/* Hamburger Menu */}
        <div
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navigation Menu */}
        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          {/* Home */}
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Home
            </Link>
          </li>

          {/* About Us */}
          <li className="nav-item dropdown">
            <div
              className="nav-link dropdown-toggle"
              onClick={() => toggleDropdown("journal")}
            >
              About Us
              <span className="dropdown-arrow">▼</span>
            </div>
            <ul
              className={`dropdown-menu ${
                activeDropdown === "journal" ? "active" : ""
              }`}
            >
              <li>
                <Link
                  to="/about-us/editor-in-chief"
                  className="dropdown-link"
                  onClick={closeMenu}
                >
                  Editor in Chief
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us/editorial-board"
                  className="dropdown-link"
                  onClick={closeMenu}
                >
                  Editorial Board
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us/peer-review"
                  className="dropdown-link"
                  onClick={closeMenu}
                >
                  Peer Review
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us/publication-ethics"
                  className="dropdown-link"
                  onClick={closeMenu}
                >
                  Publication Ethics
                </Link>
              </li>
            </ul>
          </li>

          {/* Journal Dropdown */}
          <li className="nav-item dropdown">
            <div
              className="nav-link dropdown-toggle"
              onClick={() => toggleDropdown("journal")}
            >
              Journal
              <span className="dropdown-arrow">▼</span>
            </div>
            <ul
              className={`dropdown-menu ${
                activeDropdown === "journal" ? "active" : ""
              }`}
            >
              <li>
                <Link
                  to="/journal/archive"
                  className="dropdown-link"
                  onClick={closeMenu}
                >
                  Archive
                </Link>
              </li>
              <li>
                <Link
                  to="/journal/submit-manuscript"
                  className="dropdown-link"
                  onClick={closeMenu}
                >
                  Submit Manuscript
                </Link>
              </li>
              <li>
                <Link
                  to="/journal/reviewers-guide"
                  className="dropdown-link"
                  onClick={closeMenu}
                >
                  Reviewers Guide
                </Link>
              </li>
            </ul>
          </li>

          {/* Policies Dropdown */}
          <li className="nav-item dropdown">
            <div
              className="nav-link dropdown-toggle"
              onClick={() => toggleDropdown("policies")}
            >
              Policies
              <span className="dropdown-arrow">▼</span>
            </div>
            <ul
              className={`dropdown-menu ${
                activeDropdown === "policies" ? "active" : ""
              }`}
            >
              <li>
                <Link
                  to="/copyright"
                  className="dropdown-link"
                  onClick={closeMenu}
                >
                  Copyright
                </Link>
              </li>
              <li>
                <Link
                  to="/open-access"
                  className="dropdown-link"
                  onClick={closeMenu}
                >
                  Open Access
                </Link>
              </li>
              <li>
                <Link
                  to="/editorial"
                  className="dropdown-link"
                  onClick={closeMenu}
                >
                  Editorial
                </Link>
              </li>
              <li>
                <Link
                  to="/digital-archiving"
                  className="dropdown-link"
                  onClick={closeMenu}
                >
                  Digital Archiving
                </Link>
              </li>
              <li>
                <Link
                  to="/crossmark"
                  className="dropdown-link"
                  onClick={closeMenu}
                >
                  Crossmark
                </Link>
              </li>
            </ul>
          </li>

          {/* Contact Us */}
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={closeMenu}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
