import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

function Hompage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [expandedSections, setExpandedSections] = useState({
    openAccess: false,
    peerReview: false,
    authorsZone: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-image">
          <img src="/g1.jpg" alt="Geological Sciences Research" />
        </div>
        <div className="hero-content">
          <h1>ACU Journal of Geological Sciences</h1>
          <p className="hero-subtitle">
            Advancing Earth Science Research Globally
          </p>
        </div>
      </section>
      <section className="intro-section">
        <div className="container">
          <div className="intro-text">
            <p>
              AJCU Journal of Geological Sciences (AJCU-JGS) is the official
              bi-annual academic journal of the Department of Geological
              Sciences, Ajayi Crowther University, Oyo, Nigeria. It is an
              international, peer-reviewed publication dedicated to
              disseminating original research articles, reviews, and technical
              notes across the fields of Geology, Environmental Geosciences,
              Geophysics, Hydrogeology, Petroleum Geoscience, Mineral
              Exploration, Geological Engineering, and other related
              disciplines.
            </p>
            <p>
              AJCU-JGS serves as a reliable platform for sharing new scientific
              findings, emerging technologies, and innovative solutions that
              advance academic scholarship, professional practice, and
              sustainable development within the geosciences community.
            </p>
            <p>
              Manuscripts written in English are accepted for publication
              following a rigorous and comprehensive peer-review process. The
              journal welcomes submissions in the form of research papers, case
              studies, technical notes, and book reviews from scholars,
              researchers, and practitioners across the globe.
            </p>
          </div>
        </div>
      </section>
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </div>
              <h3>Open Access Policy</h3>
              <div className="feature-content">
                <p>
                  The principle of open access ensures that scholarly works are
                  freely available to readers without the restrictions typically
                  imposed by traditional all rights reserved copyright models.
                  It promotes unrestricted, free online access to published
                  articles, allowing anyone to read and download them without
                  financial or institutional barriers...
                </p>
                {expandedSections.openAccess && (
                  <div className="expanded-content">
                    <p>
                      All articles published in AJCU Journal of Geological
                      Sciences (AJCU-JGS) are fully open access. This means
                      immediate free access to the full text of research
                      articles, combined with the rights to use these articles
                      fully in the digital environment, provided the original
                      authors and source are properly credited.
                    </p>
                  </div>
                )}
                <button
                  className="read-more-btn"
                  onClick={() => toggleSection("openAccess")}
                >
                  {expandedSections.openAccess ? "Read Less" : "Read More"}
                </button>
                <Link to="/open-access" className="nav-link-btn">
                  Learn More About Open Access
                </Link>
              </div>
            </div>

            {/* Peer Review Feature */}
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3>Peer Review Policy</h3>
              <div className="feature-content">
                <p>
                  The quality of manuscripts submitted to AJCU Journal of
                  Geological Sciences (AJCU-JGS) is ensured through a rigorous
                  peer review process. Independent and experienced researchers
                  in relevant fields are appointed as reviewers to evaluate
                  submissions for originality, validity, and scientific
                  significance...
                </p>
                {expandedSections.peerReview && (
                  <div className="expanded-content">
                    <p>
                      Their assessments guide the editors in determining the
                      suitability of a manuscript for publication. Peer review
                      is a cornerstone of scientific publishing, helping to
                      validate research and improve the overall quality of
                      manuscripts. Reviewers volunteer their expertise to
                      strengthen submissions by:
                    </p>
                    <ul>
                      <li>
                        Identifying gaps or areas needing clarification or
                        additional experiments, making the manuscript more
                        robust.
                      </li>
                      <li>
                        Suggesting improvements to enhance clarity and
                        readability.
                      </li>
                      <li>
                        Evaluating the manuscripts relevance and usefulness to
                        the wider scientific community.
                      </li>
                    </ul>
                    <p>
                      Upon submission, manuscripts are initially pre-assessed by
                      the Editor-in-Chief to ensure they meet the journals
                      criteria outlined in the Call for Papers. Suitable
                      manuscripts are then assigned to expert peer reviewers who
                      provide detailed evaluations and recommendations to guide
                      the editorial decision.
                    </p>
                    <p>
                      AJCU-JGS employs a double-blind peer review system: the
                      identities of authors and reviewers are concealed from
                      each other. Each manuscript is reviewed by at least two
                      independent reviewers. If there is disagreement between
                      the two reviews, a third reviewer is appointed to provide
                      an additional independent assessment, ensuring a fair and
                      thorough evaluation before publication.
                    </p>
                  </div>
                )}
                <button
                  className="read-more-btn"
                  onClick={() => toggleSection("peerReview")}
                >
                  {expandedSections.peerReview ? "Read Less" : "Read More"}
                </button>
                <br />
                <Link to="/reviewers-guide" className="nav-link-btn">
                  Reviewer Guidelines
                </Link>
              </div>
            </div>

            {/* Authors Zone Feature */}
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <h3>Authors Zone</h3>
              <div className="feature-content">
                <p>
                  Welcome to the Authors Zone! Here you will find all the
                  resources and guidelines needed to prepare and submit your
                  manuscript for publication in AJCU Journal of Geological
                  Sciences.
                </p>
                {expandedSections.authorsZone && (
                  <div className="expanded-content">
                    <p>
                      Access comprehensive resources for manuscript preparation
                      and submission:
                    </p>
                  </div>
                )}
                <button
                  className="read-more-btn"
                  onClick={() => toggleSection("authorsZone")}
                >
                  {expandedSections.authorsZone ? "Read Less" : "Read More"}
                </button>
                <div className="author-links">
                  <Link to="/authors" className="author-link">
                    Guidance
                  </Link>
                  <Link to="/publication-ethics" className="author-link">
                    Publication Ethics
                  </Link>
                  <Link to="/puplication-fee" className="author-link">
                    Handling & Publication Fee
                  </Link>
                  <Link to="/editorial" className="author-link">
                    Editorial Policy
                  </Link>
                  <Link
                    to="/submit-manuscript"
                    className="author-link submit-link"
                  >
                    Submit Manuscript
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <SubmitNewManuscript /> */}
        {/* <SubmitManuscript /> */}
        {/* <ReviewerGuide /> */}
      </section>
    </div>
  );
}

export default Hompage;
