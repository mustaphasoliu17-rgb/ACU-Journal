import "./DigitalArchiving.css";

const DigitalArchiving = () => {
  return (
    <div className="digital-archiving-page">
      <div className="container">
        {/* Header Section */}
        <header className="digital-archiving-header">
          <h1>Digital Archiving</h1>
          <p className="page-subtitle">
            Ensuring Permanent Preservation and Global Accessibility of
            Geological Research
          </p>
        </header>

        {/* Introduction Section */}
        <section className="intro-section">
          <div className="intro-card">
            <div className="intro-icon">💾</div>
            <div className="intro-content">
              <h2>
                Digital Preservation at ACU Journal of Geological Sciences
              </h2>
              <p>
                Digital archiving plays a vital role in safeguarding scholarly
                materials and ensuring that research outputs remain accessible,
                secure, and preserved for future generations. At ACU Journal of
                Geological Sciences (ACU-JGS), digital preservation is guided by
                three fundamental principles:
              </p>
            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section className="principles-section">
          <h2>Our Digital Archiving Principles</h2>
          <div className="principles-grid">
            <div className="principle-card">
              <div className="principle-number">1</div>
              <div className="principle-content">
                <h3>Preservation of Both Physical and Intellectual Content</h3>
                <p>
                  Digital archiving ensures that the intellectual value,
                  structure, formatting, and overall integrity of each scholarly
                  document are retained exactly as originally published,
                  protecting authors&aps; work against corruption or loss.
                </p>
              </div>
            </div>

            <div className="principle-card">
              <div className="principle-number">2</div>
              <div className="principle-content">
                <h3>Long-Term Preservation</h3>
                <p>
                  Research articles must remain accessible for extended periods,
                  regardless of changes in technology or digital platforms. Our
                  archiving strategy focuses on long-term storage solutions
                  using reliable, internationally recognized repositories.
                </p>
              </div>
            </div>

            <div className="principle-card">
              <div className="principle-number">3</div>
              <div className="principle-content">
                <h3>Accessibility and Comprehensiveness</h3>
                <p>
                  Digital archives must guarantee that documents are not only
                  stored securely but are also easy to locate, retrieve, and
                  reference by scholars, institutions, and the general public
                  worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Practices Section */}
        <section className="practices-section">
          <div className="practices-card">
            <div className="practices-header">
              <h2>ACU-JGS Digital Archiving Practices</h2>
              <p>
                To ensure permanent preservation and global accessibility of
                published articles, ACU-JGS takes the following steps:
              </p>
            </div>

            <div className="practices-grid">
              <div className="practice-item">
                <div className="practice-icon">🔄</div>
                <div className="practice-content">
                  <h3>Deposition in Multiple Trusted Digital Repositories</h3>
                  <p>
                    All published articles are deposited across multiple
                    reputable digital archives and preservation networks around
                    the world. This multi-repository strategy guarantees
                    redundancy, long-term security, and continuous availability
                    even if one archive becomes inaccessible.
                  </p>
                </div>
              </div>

              <div className="practice-item">
                <div className="practice-icon">📊</div>
                <div className="practice-content">
                  <h3>
                    Compliance with Open Archives Initiative (OAI) Standards
                  </h3>
                  <p>
                    ACU-JGS provides structured metadata for all published
                    articles in accordance with the Open Archives Initiative
                    Protocol for Metadata Harvesting (OAI-PMH). This ensures
                    that our articles can be automatically harvested and
                    integrated into global indexing services, institutional
                    repositories, and digital libraries.
                  </p>
                </div>
              </div>

              <div className="practice-item">
                <div className="practice-icon">🌐</div>
                <div className="practice-content">
                  <h3>Promotion of Non-Exclusive Archiving</h3>
                  <p>
                    We actively support and encourage the inclusion of our
                    research articles in as many international digital archives
                    as possible. Non-exclusive archiving enhances the visibility
                    of authors&apos; work and provides additional layers of
                    protection against data loss.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits-section">
          <h2>Benefits of Our Digital Archiving Strategy</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">🛡️</div>
              <div className="benefit-content">
                <h4>Data Security</h4>
                <p>
                  Multiple redundant backups protect against data loss and
                  corruption
                </p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">🔍</div>
              <div className="benefit-content">
                <h4>Enhanced Discoverability</h4>
                <p>Global indexing ensures research reaches wider audiences</p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">⚡</div>
              <div className="benefit-content">
                <h4>Future-Proofing</h4>
                <p>
                  Long-term preservation strategies adapt to technological
                  changes
                </p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">📈</div>
              <div className="benefit-content">
                <h4>Increased Impact</h4>
                <p>
                  Wider accessibility leads to greater citation and research
                  impact
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="commitment-section">
          <div className="commitment-card">
            <div className="commitment-icon">🎯</div>
            <div className="commitment-content">
              <h3>Our Commitment to Preservation</h3>
              <p>
                ACU-JGS is dedicated to ensuring that every published research
                article remains accessible and citable for generations to come.
                Our comprehensive digital archiving strategy guarantees that the
                valuable contributions of our authors to geological sciences are
                permanently preserved and globally available.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DigitalArchiving;
