import "./EditorInChief.css";

const WelcomeMessage = () => {
  return (
    <div className="welcome-message-page">
      <div className="container">
        {/* Header Section */}
        <header className="welcome-header">
          <h1>Welcome to ACU Journal of Geological Sciences</h1>
          <p className="page-subtitle">
            Advancing Geological Knowledge for Sustainable Development and
            Scientific Progress
          </p>
        </header>

        {/* Opening Section */}
        <section className="opening-section">
          <div className="opening-card">
            <div className="opening-icon">👋</div>
            <div className="opening-content">
              <h2>A Message from the Editor-in-Chief</h2>
              <p className="greeting-text">
                Distinguished colleagues, respected scholars, contributors, and
                members of the academic community,
              </p>
              <p>
                It is with great honour and deep appreciation that I welcome you
                all to the Ajayi Crowther University Journal of Geological
                Sciences—ACU-JGS. Today marks another chapter in our collective
                pursuit of knowledge, scientific integrity, and academic
                excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <div className="mission-card">
            <div className="mission-icon">🎯</div>
            <div className="mission-content">
              <h3>Our Mission and Purpose</h3>
              <p>
                ACU-JGS was established not just as a publication outlet, but as
                a platform for discovery, a home for researchers, and a bridge
                between innovation and society.
              </p>
              <div className="highlight-box">
                <p>
                  Our mission is clear: to advance geological knowledge that
                  supports sustainable development, environmental stewardship,
                  and scientific progress across Nigeria, Africa, and the global
                  community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="commitment-section">
          <h2>Our Commitment to Excellence</h2>
          <div className="commitment-grid">
            <div className="commitment-item">
              <div className="commitment-icon">🛡️</div>
              <div className="commitment-text">
                <h4>Credibility & Transparency</h4>
                <p>
                  As Editor-in-Chief, I am committed to ensuring that this
                  journal remains a beacon of credibility, transparency, and
                  scholarly excellence.
                </p>
              </div>
            </div>

            <div className="commitment-item">
              <div className="commitment-icon">⚖️</div>
              <div className="commitment-text">
                <h4>Ethical Standards</h4>
                <p>
                  Our editorial processes uphold the highest ethical
                  standards—fairness, impartiality, rigorous peer review, and a
                  strong commitment to academic honesty.
                </p>
              </div>
            </div>

            <div className="commitment-item">
              <div className="commitment-icon">📊</div>
              <div className="commitment-text">
                <h4>Merit-Based Evaluation</h4>
                <p>
                  Every manuscript is evaluated solely on its merit, relevance,
                  originality, and contribution to the scientific community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Appreciation Sections */}
        <section className="appreciation-section">
          <h2>Our Heartfelt Appreciation</h2>

          <div className="appreciation-grid">
            <div className="appreciation-card">
              <div className="appreciation-header">
                <div className="appreciation-icon">✍️</div>
                <h3>To Our Authors</h3>
              </div>
              <div className="appreciation-content">
                <p>
                  To our authors, I say a heartfelt thank you. Your dedication
                  to research, fieldwork, experimentation, and academic writing
                  keeps the engine of discovery running.
                </p>
                <div className="impact-list">
                  <span className="impact-item">
                    Shapes the future of geology
                  </span>
                  <span className="impact-item">
                    Influences education and policy
                  </span>
                  <span className="impact-item">Guides industry practices</span>
                </div>
              </div>
            </div>

            <div className="appreciation-card">
              <div className="appreciation-header">
                <div className="appreciation-icon">🔍</div>
                <h3>To Our Reviewers</h3>
              </div>
              <div className="appreciation-content">
                <p>
                  To our reviewers, your expertise and commitment to scholarly
                  scrutiny are invaluable. You help refine and strengthen each
                  manuscript.
                </p>
                <div className="reviewer-benefits">
                  <h5>Ensuring publications are:</h5>
                  <ul>
                    <li>Accurate and trustworthy</li>
                    <li>Impactful and relevant</li>
                    <li>Methodologically sound</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="appreciation-card">
              <div className="appreciation-header">
                <div className="appreciation-icon">📚</div>
                <h3>To Our Readers</h3>
              </div>
              <div className="appreciation-content">
                <p>
                  To our readers, students, and researchers, ACU-JGS remains
                  dedicated to providing open access to quality scientific
                  knowledge.
                </p>
                <div className="access-principle">
                  <p>
                    <strong>Our Principle:</strong> Knowledge should not be
                    locked behind barriers, but shared widely to inspire new
                    ideas and new possibilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Directions Section */}
        <section className="future-section">
          <div className="future-card">
            <h2>Future Directions & Emerging Fields</h2>

            <div className="future-content">
              <div className="growth-area">
                <div className="growth-icon">🚀</div>
                <div className="growth-text">
                  <h4>Embracing Emerging Research Fields</h4>
                  <p>
                    As we continue to grow, ACU-JGS will embrace emerging
                    research fields that shape the future of geological
                    sciences.
                  </p>
                </div>
              </div>

              <div className="research-fields">
                <h4>Key Research Areas:</h4>
                <div className="fields-grid">
                  <span className="field-item">Environmental Geoscience</span>
                  <span className="field-item">Water Resources</span>
                  <span className="field-item">Climate Studies</span>
                  <span className="field-item">GIS & Remote Sensing</span>
                  <span className="field-item">Mineral Exploration</span>
                  <span className="field-item">Geohazard Analysis</span>
                  <span className="field-item">
                    Sustainable Earth Management
                  </span>
                </div>
              </div>

              <div className="improvement-areas">
                <h4>Continuous Improvement:</h4>
                <div className="improvement-list">
                  <div className="improvement-item">
                    <div className="improvement-icon">💻</div>
                    <span>Enhanced Digital Presence</span>
                  </div>
                  <div className="improvement-item">
                    <div className="improvement-icon">🏛️</div>
                    <span>Advanced Archiving Systems</span>
                  </div>
                  <div className="improvement-item">
                    <div className="improvement-icon">🌐</div>
                    <span>Global Academic Network Visibility</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="vision-section">
          <div className="vision-card">
            <div className="vision-icon">⭐</div>
            <div className="vision-content">
              <h3>Our Vision</h3>
              <p className="vision-statement">
                To make ACU-JGS one of the leading geological science journals
                in the region—known for excellence, integrity, innovation, and
                impact.
              </p>
              <div className="vision-pillars">
                <div className="pillar">
                  <div className="pillar-icon">🏆</div>
                  <span>Excellence</span>
                </div>
                <div className="pillar">
                  <div className="pillar-icon">🛡️</div>
                  <span>Integrity</span>
                </div>
                <div className="pillar">
                  <div className="pillar-icon">💡</div>
                  <span>Innovation</span>
                </div>
                <div className="pillar">
                  <div className="pillar-icon">📈</div>
                  <span>Impact</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="cta-section">
          <div className="cta-card">
            <div className="cta-icon">🤝</div>
            <div className="cta-content">
              <h3>Join Our Academic Community</h3>
              <p>
                I invite scholars, practitioners, and young researchers to
                partner with us, submit their work, and join us in advancing
                geological knowledge for future generations.
              </p>
              <div className="cta-highlight">
                <p>
                  Together, we will continue to uphold high publication
                  standards, support credible research, and shine a light on the
                  vast scientific opportunities hidden beneath our feet and all
                  around us.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Section */}
        <section className="closing-section">
          <div className="closing-card">
            <div className="closing-icon">🙏</div>
            <div className="closing-content">
              <h3>Thank You and Welcome</h3>
              <p className="closing-message">
                Thank you, and welcome once again to ACU-JGS—where science,
                integrity, and discovery meet.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WelcomeMessage;
