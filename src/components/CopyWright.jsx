import "./CopyWright.css";

const Copyright = () => {
  return (
    <div className="copyright-page">
      <div className="container">
        {/* Header Section */}
        <header className="copyright-header">
          <h1>Copyright Policy</h1>
          <p className="page-subtitle">
            Protecting Intellectual Property and Academic Integrity in
            Geological Research
          </p>
        </header>

        {/* Main Content */}
        <section className="content-section">
          <div className="content-card">
            <div className="section-icon">⚖️</div>
            <h2>
              Copyright Policy – ACU Journal of Geological Sciences (ACU-JGS)
            </h2>

            <div className="content-text">
              <p>
                Copyright exists to protect the unique manner in which an
                article presents its research, methodology, analysis, and
                results. At ACU-JGS, we are strongly committed to safeguarding
                the intellectual property and academic reputation of our
                authors. We take all allegations of copyright infringement,
                plagiarism, ethical misconduct, and scientific fraud with the
                utmost seriousness.
              </p>

              <p>
                If an author becomes aware of any suspected plagiarism, misuse
                of their work, or breach of copyright, we encourage them to
                immediately notify the Editor-in-Chief. The editorial office
                will review the concern and provide guidance on the appropriate
                steps to address it.
              </p>

              <div className="important-notice">
                <h3>⚠️ Important Notice</h3>
                <p>
                  All copyright concerns should be directed to the
                  Editor-in-Chief for immediate investigation and appropriate
                  action.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Copyright Procedures Section */}
        <section className="procedures-section">
          <h2>ACU-JGS Copyright Procedures</h2>
          <div className="procedures-grid">
            <div className="procedure-card">
              <div className="procedure-number">(i)</div>
              <div className="procedure-content">
                <h3>Copyright Retention</h3>
                <p>
                  Authors enter into a publishing agreement in which they retain
                  copyright ownership while granting ACU-JGS the non-exclusive
                  rights necessary for publication, distribution, and online
                  hosting of the article across ACU-JGS platforms.
                </p>
              </div>
            </div>

            <div className="procedure-card">
              <div className="procedure-number">(ii)</div>
              <div className="procedure-content">
                <h3>License Selection</h3>
                <p>
                  During submission, authors select an appropriate end-user
                  license (such as Creative Commons), which defines how readers
                  may use, share, and cite the published work.
                </p>
              </div>
            </div>

            <div className="procedure-card">
              <div className="procedure-number">(iii)</div>
              <div className="procedure-content">
                <h3>Transparent Publication</h3>
                <p>
                  ACU-JGS publishes the article online using the author&aposs
                  selected license, ensuring transparency and clarity regarding
                  permitted uses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits-section">
          <div className="benefits-card">
            <h2>Benefits of Our Copyright Approach</h2>
            <div className="benefits-content">
              <div className="benefit-item">
                <div className="benefit-icon">🎯</div>
                <div className="benefit-text">
                  <h4>Author Control</h4>
                  <p>
                    Authors maintain ownership and control of their intellectual
                    property
                  </p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">🛡️</div>
                <div className="benefit-text">
                  <h4>Legal Protection</h4>
                  <p>
                    Clear copyright procedures protect against infringement and
                    misuse
                  </p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">🌐</div>
                <div className="benefit-text">
                  <h4>Wide Dissemination</h4>
                  <p>
                    Balanced approach enables broad distribution while
                    protecting rights
                  </p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">📋</div>
                <div className="benefit-text">
                  <h4>Clear Guidelines</h4>
                  <p>
                    Transparent licensing ensures readers understand usage
                    permissions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="contact-card">
            <div className="contact-icon">📧</div>
            <div className="contact-content">
              <h3>Report Copyright Concerns</h3>
              <p>
                If you suspect copyright infringement, plagiarism, or any misuse
                of published work, please contact the Editor-in-Chief
                immediately for investigation and resolution.
              </p>
              <div className="contact-action">
                <a href="mailto:editor@laujoces.org" className="contact-button">
                  Contact Editor-in-Chief
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Copyright;
