import "./Footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  const logoImages = [
    { id: 1, name: "Logo 1", url: "/1.png" },
    { id: 2, name: "Logo 2", url: "2.png" },
    { id: 3, name: "Logo 3", url: "/1.png" },
    { id: 4, name: "Logo 4", url: "/4.png" },
    { id: 5, name: "Logo 5", url: "/5.png" },
    { id: 6, name: "Logo 6", url: "/6.png" },
    { id: 7, name: "Logo 7", url: "/7.png" },
    // { id: 8, name: "Logo 8", url: "/9.png" },
  ];

  return (
    <footer className="footer">
      {/* Quick Actions Section */}
      <section className="quick-actions">
        <div className="container">
          <div className="actions-grid">
            {/* Author Button */}
            <Link to="/authors" className="action-button">
              <div className="action-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <span className="action-text">Authors</span>
            </Link>

            {/* Submit Manuscript Button */}
            <Link to="/submit-manuscript" className="action-button">
              <div className="action-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                </svg>
              </div>
              <span className="action-text">Submit Manuscript</span>
            </Link>

            {/* Reviewer Button */}
            <Link to="/reviewers-guide" className="action-button">
              <div className="action-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <span className="action-text">Reviewer</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Logo Gallery Section */}
      <section className="logo-gallery">
        <div className="container">
          <div className="gallery-grid">
            {logoImages.map((logo) => (
              <div key={logo.id} className="logo-item">
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="logo-image"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Footer Content */}
      <section className="footer-main">
        <div className="container">
          <div className="footer-content">
            {/* Navigation Links */}
            <div className="footer-section">
              <h4 className="section-titl">Quick Links</h4>
              <nav className="footer-nav">
                <Link to="/" className="footer-link">
                  Home
                </Link>
                <Link to="/publication-ethics" className="footer-link">
                  Publication Ethics
                </Link>
                <Link to="submit-manuscript" className="footer-link">
                  Submit Manuscript
                </Link>
                <Link to="/archive" className="footer-link">
                  Archive
                </Link>

                {/* <div className="footer-dropdown">
                  <span className="footer-link">Journal</span>
                  <div className="dropdown-menu">
                    <Link to="/archive" className="dropdown-link">
                      Archive
                    </Link>
                    <Link to="/submit-manuscript" className="dropdown-link">
                      Submit Manuscript
                    </Link>
                    <Link to="/reviewers-guide" className="dropdown-link">
                      Reviewers Guide
                    </Link>
                  </div>
                </div>
                <div className="footer-dropdown">
                  <span className="footer-link">Policies</span>
                  <div className="dropdown-menu">
                    <Link to="/copyright" className="dropdown-link">
                      Copyright
                    </Link>
                    <Link to="/open-access" className="dropdown-link">
                      Open Access
                    </Link>
                    <Link to="/editorial" className="dropdown-link">
                      Editorial
                    </Link>
                    <Link to="/digital-archiving" className="dropdown-link">
                      Digital Archiving
                    </Link>
                    <Link to="/crossmark" className="dropdown-link">
                      Crossmark
                    </Link>
                  </div>
                </div> */}
                <Link to="/contact" className="footer-link">
                  Contact Us
                </Link>
              </nav>
            </div>

            {/* Contact Information */}
            <div className="footer-section">
              <h4 className="section-titl">Contact Us</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icons">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div className="contact-detail">
                    <span className="contact-labe">Phone</span>
                    <a href="tel:09037357296" className="contact-valu">
                      09037357296
                    </a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icons">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div className="contact-detail">
                    <span className="contact-labe">Email</span>
                    <a
                      href="mailto:editor@laujoces.org"
                      className="contact-valu"
                    >
                      editor@laujoces.org
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Journal Information */}
            <div className="footer-section">
              <h4 className="section-titl">
                ACU Journal of Geological Sciences
              </h4>
              <p className="journal-description">
                A premier peer-reviewed journal dedicated to advancing research
                in geological sciences through high-quality publications and
                innovative scientific contributions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Bottom */}
      <section className="footer-bottom">
        <div className="container">
          <div className="bottom-content">
            <center>
              <span className="copyright">
                © 2020 ACU_JGS. All Rights Reserved. Powered by: OlaTech
              </span>
            </center>
            {/* <div className="powered-by">
              <span>Powered by: OlaTech</span>
            </div> */}
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
