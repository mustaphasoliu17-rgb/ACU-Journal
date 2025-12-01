import "./Crossmark.css";

const Crossmark = () => {
  return (
    <div className="crossmark-page">
      <div className="container">
        {/* Header Section */}
        <header className="crossmark-header">
          <h1>Crossmark</h1>
          <p className="page-subtitle">
            Ensuring Content Integrity and Version Control in Geological
            Research Publications
          </p>
        </header>

        {/* Introduction Section */}
        <section className="intro-section">
          <div className="intro-card">
            <div className="intro-icon">🔄</div>
            <div className="intro-content">
              <h2>Maintaining Research Integrity Through Crossmark</h2>
              <p>
                Research is dynamic and constantly evolving. Even after an
                article is published, new findings may emerge, errors may be
                corrected, or supplementary information may need to be added.
                For this reason, it is essential for readers and researchers to
                know whether the version of a publication they are citing is the
                most current and reliable.
              </p>
              <div className="highlight-box">
                <p>
                  To support this transparency and integrity, ACU Journal of
                  Geological Sciences (ACU-JGS) participates in the Crossmark
                  Initiative.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What is Crossmark Section */}
        <section className="definition-section">
          <h2>What is Crossmark?</h2>
          <div className="definition-card">
            <div className="definition-icon">🎯</div>
            <div className="definition-content">
              <p>
                Crossmark is a multi-publisher initiative that provides a
                standardized and reliable way for readers to identify the
                current status of scholarly content. By displaying the Crossmark
                logo on our articles, ACU-JGS commits to maintaining all
                published content and notifying readers promptly whenever
                updates, corrections, or retractions occur.
              </p>
              <div className="status-info">
                <h4>
                  When readers click the Crossmark icon, they are presented with
                  a detailed status box that reveals:
                </h4>
                <ul>
                  <li>Whether the document is current,</li>
                  <li>Whether updates or corrections are available, or</li>
                  <li>Whether the article has been retracted,</li>
                  <li>
                    along with additional publication history and metadata.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits-section">
          <h2>Benefits of Crossmark</h2>
          <div className="benefits-grid">
            <div className="benefit-category">
              <div className="category-header">
                <div className="category-icon">🏢</div>
                <h3>For Publishers</h3>
              </div>
              <ul className="benefit-list">
                <li>
                  Demonstrates commitment to maintaining accurate, trustworthy
                  content
                </li>
                <li>
                  Reassures readers that the journal actively updates and
                  preserves publication integrity
                </li>
                <li>
                  Allows publishers to showcase extended metadata, including
                  licensing details and publication history
                </li>
              </ul>
            </div>

            <div className="benefit-category">
              <div className="category-header">
                <div className="category-icon">👥</div>
                <h3>For Researchers, Librarians, and Readers</h3>
              </div>
              <ul className="benefit-list">
                <li>
                  Provides a quick, reliable method to verify whether an article
                  has been updated or corrected
                </li>
                <li>
                  Helps users avoid citing outdated, superseded, or retracted
                  material
                </li>
                <li>
                  Offers immediate access to additional information such as
                  funding sources, author details, and licensing terms
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Implementation Section */}
        <section className="implementation-section">
          <div className="implementation-card">
            <h2>How Crossmark Works at ACU-JGS</h2>

            <div className="implementation-steps">
              <div className="implementation-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Placement of the Crossmark Logo</h3>
                  <p>
                    ACU-JGS places the Crossmark icon prominently near the
                    article title on both the website and in PDF versions of all
                    publications.
                  </p>
                </div>
              </div>

              <div className="implementation-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Commitment to Updates</h3>
                  <p>
                    The journal is committed to informing Crossmark immediately
                    of any changes to published content. These updates may
                    include:
                  </p>
                  <div className="update-types">
                    <span className="update-type">
                      Minor or major corrections
                    </span>
                    <span className="update-type">Retractions</span>
                    <span className="update-type">Addenda</span>
                    <span className="update-type">
                      Updated datasets or supplemental materials
                    </span>
                  </div>
                </div>
              </div>

              <div className="implementation-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Reader Interaction</h3>
                  <p>
                    When a reader clicks the Crossmark button, a pop-up window
                    appears displaying the article&apos;s current status. This
                    ensures readers are always aware of the most accurate and
                    official version of the work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Demo Section */}
        <section className="demo-section">
          <div className="demo-card">
            <div className="demo-icon">👀</div>
            <div className="demo-content">
              <h3>Identifying Crossmark on Articles</h3>
              <p>
                Look for the Crossmark logo{" "}
                <span className="crossmark-demo">Ⓧ</span> near the article title
                on any ACU-JGS publication. Clicking this icon will reveal the
                current status and version information for that specific
                article.
              </p>
              <div className="demo-note">
                <p>
                  <strong>Note:</strong> The presence of the Crossmark logo
                  indicates our commitment to maintaining the accuracy and
                  integrity of published research.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="commitment-section">
          <div className="commitment-card">
            <div className="commitment-icon">🛡️</div>
            <div className="commitment-content">
              <h3>Our Commitment to Research Integrity</h3>
              <p>
                ACU-JGS is dedicated to maintaining the highest standards of
                research integrity and transparency. Through our participation
                in the Crossmark initiative, we ensure that our readers and
                authors can trust the accuracy and currency of all published
                content in the geological sciences.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Crossmark;
