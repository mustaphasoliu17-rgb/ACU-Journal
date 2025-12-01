import "./OpenAccess.css";

const OpenAccess = () => {
  return (
    <div className="open-access-page">
      <div className="container">
        {/* Header Section */}
        <header className="open-access-header">
          <h1>Open Access Policy</h1>
          <p className="page-subtitle">
            Advancing Geological Knowledge Through Free and Unrestricted Access
            to Research
          </p>
        </header>

        {/* Main Content */}
        <section className="content-section">
          <div className="content-card">
            <div className="section-icon">🌍</div>
            <h2>
              Open Access Policy – ACU Journal of Geological Sciences (ACU-JGS)
            </h2>

            <div className="content-text">
              <p>
                The principle of open access aims to remove the traditional
                barriers that restrict the use and distribution of copyrighted
                academic works. Instead of operating under the limitations of
                all rights reserved, open access promotes free and unrestricted
                online availability of scholarly materials. This means that
                readers can access published articles at no cost, regardless of
                whether additional permissions are required for reuse.
              </p>

              <p>
                At ACU-JGS, we are committed to advancing geological knowledge
                by ensuring that research findings are accessible to scholars,
                students, practitioners, and the global scientific community.
                Open access helps to increase visibility, encourages wider
                dissemination, and enhances the impact of published research. It
                also supports collaboration across institutions and contributes
                to the growth of scientific innovation—particularly in
                developing regions where access to paid journals is limited.
              </p>

              <div className="highlight-box">
                <h3>Our Commitment</h3>
                <p>
                  Currently, all articles published in ACU-JGS are fully open
                  access. Authors retain rights to their work while granting the
                  journal permission to publish it under this model. This
                  approach ensures that high-quality geological research from
                  ACU and beyond is freely accessible to anyone, anywhere in the
                  world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits-section">
          <h2>Benefits of Open Access</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">📈</div>
              <h3>Increased Visibility</h3>
              <p>
                Research reaches a wider audience without subscription barriers
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">🤝</div>
              <h3>Global Collaboration</h3>
              <p>
                Enables researchers worldwide to access and build upon your work
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">💡</div>
              <h3>Accelerated Innovation</h3>
              <p>Faster dissemination leads to quicker scientific progress</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">🎓</div>
              <h3>Educational Access</h3>
              <p>
                Students and institutions in developing regions benefit freely
              </p>
            </div>
          </div>
        </section>

        {/* Author Rights Section */}
        <section className="rights-section">
          <div className="rights-card">
            <h2>Author Rights & Permissions</h2>
            <div className="rights-content">
              <div className="rights-item">
                <div className="rights-icon">📝</div>
                <div className="rights-text">
                  <h4>Copyright Retention</h4>
                  <p>Authors retain copyright of their published work</p>
                </div>
              </div>

              <div className="rights-item">
                <div className="rights-icon">🔓</div>
                <div className="rights-text">
                  <h4>Free Access</h4>
                  <p>
                    All articles are immediately available to readers worldwide
                  </p>
                </div>
              </div>

              <div className="rights-item">
                <div className="rights-icon">📚</div>
                <div className="rights-text">
                  <h4>Repository Archiving</h4>
                  <p>
                    Authors may self-archive copies in institutional
                    repositories
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OpenAccess;
