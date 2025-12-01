import "./PublicationFee.css";

const PublicationPolicy = () => {
  return (
    <div className="publication-policy-page">
      <div className="container">
        {/* Header Section */}
        <header className="policy-header">
          <h1>Publication and Funding Policy</h1>
          <p className="page-subtitle">
            Transparent Fee Structure and Open Access Publishing Guidelines
          </p>
        </header>

        {/* Introduction Section */}
        <section className="intro-section">
          <div className="intro-card">
            <div className="intro-icon">💰</div>
            <div className="intro-content">
              <h2>Our Funding Model</h2>
              <p>
                The Ajayi Crowther University Journal of Geological Sciences
                (ACU-JGS) operates on a transparent and sustainable open access
                model to ensure the highest quality of scientific publishing
                while maintaining accessibility.
              </p>
              <div className="highlight-box">
                <p>
                  ACU-JGS does not receive funding from any individual, external
                  organization, or government agency. The journal follows an
                  open access &quot;author-pays&quot; policy, meaning that the
                  costs of handling and publishing articles are borne by the
                  author(s) or their supporting institution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fee Structure Section */}
        <section className="fees-section">
          <h2>Publication Fee Structure</h2>

          <div className="fees-grid">
            <div className="fee-category">
              <div className="fee-header">
                <div className="fee-icon">📤</div>
                <h3>Article Submission</h3>
              </div>
              <div className="fee-content">
                <p>
                  Submission of manuscripts to ACU-JGS is free of charge. After
                  an initial evaluation to ensure that the manuscript meets the
                  journal&apos;s scope and formatting requirements, a peer
                  review assessment fee is required.
                </p>
                <div className="fee-amounts">
                  <div className="fee-amount">
                    <span className="amount-label">Nigerian Authors:</span>
                    <span className="amount-value">₦6,000</span>
                  </div>
                  <div className="fee-amount">
                    <span className="amount-label">International Authors:</span>
                    <span className="amount-value">US $15</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="fee-category">
              <div className="fee-header">
                <div className="fee-icon">✅</div>
                <h3>Publication Charges</h3>
              </div>
              <div className="fee-content">
                <p>
                  Once a manuscript is accepted for publication, authors are
                  required to pay the publication fee. These fees cover all
                  aspects of publication.
                </p>
                <div className="publication-fees">
                  <div className="publication-fee">
                    <div className="fee-type">Authors within Nigeria</div>
                    <div className="fee-price">₦30,000</div>
                    <div className="fee-note">per manuscript</div>
                  </div>
                  <div className="publication-fee">
                    <div className="fee-type">International authors</div>
                    <div className="fee-price">US $100</div>
                    <div className="fee-note">per manuscript</div>
                  </div>
                </div>
                <div className="coverage-info">
                  <h4>Fee Coverage Includes:</h4>
                  <div className="coverage-items">
                    <span className="coverage-item">Online hosting</span>
                    <span className="coverage-item">Digital archiving</span>
                    <span className="coverage-item">DOI registration</span>
                    <span className="coverage-item">Editorial processing</span>
                    <span className="coverage-item">
                      Peer review management
                    </span>
                    <span className="coverage-item">Production services</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notice Section */}
        <section className="notice-section">
          <div className="notice-card">
            <div className="notice-icon">⚠️</div>
            <div className="notice-content">
              <h3>Important Notice</h3>
              <p>
                <strong>
                  Publication fees are only charged after a manuscript has been
                  formally accepted for publication.
                </strong>{" "}
                No fees are required during the submission or peer review stages
                except for the peer review assessment fee.
              </p>
              <div className="notice-details">
                <div className="notice-item">
                  <div className="notice-dot"></div>
                  <span>
                    Fees are subject to review in line with inflation and
                    currency exchange rates
                  </span>
                </div>
                <div className="notice-item">
                  <div className="notice-dot"></div>
                  <span>
                    Payment confirmation is required before publication
                  </span>
                </div>
                <div className="notice-item">
                  <div className="notice-dot"></div>
                  <span>
                    Fee waivers may be available for authors from developing
                    countries
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Details Section */}
        <section className="payment-section">
          <div className="payment-card">
            <h2>Payment Details</h2>

            <div className="payment-info">
              <div className="bank-details">
                <div className="detail-item">
                  <div className="detail-icon">🏦</div>
                  <div className="detail-content">
                    <h4>Account Name</h4>
                    <p>ACU-JGS</p>
                  </div>
                </div>

                <div className="detail-item">
                  <div className="detail-icon">💳</div>
                  <div className="detail-content">
                    <h4>Bank</h4>
                    <p>United Bank for Africa</p>
                  </div>
                </div>

                <div className="detail-item">
                  <div className="detail-icon">🔢</div>
                  <div className="detail-content">
                    <h4>Account Number</h4>
                    <p className="account-number">2147612371</p>
                  </div>
                </div>
              </div>

              <div className="payment-instructions">
                <h4>Payment Instructions:</h4>
                <ol className="instructions-list">
                  <li>Make payment to the account details provided above</li>
                  <li>Include your manuscript ID as payment reference</li>
                  <li>Send proof of payment to payments@acu-jgs.edu.ng</li>
                  <li>Allow 24-48 hours for payment verification</li>
                  <li>You will receive confirmation email once verified</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits-section">
          <h2>Benefits of Our Open Access Model</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">🌍</div>
              <div className="benefit-content">
                <h4>Global Visibility</h4>
                <p>
                  Your research reaches a worldwide audience without access
                  barriers
                </p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">📈</div>
              <div className="benefit-content">
                <h4>Higher Impact</h4>
                <p>
                  Open access articles typically receive more citations and
                  downloads
                </p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">⚡</div>
              <div className="benefit-content">
                <h4>Rapid Publication</h4>
                <p>Streamlined process ensures faster publication times</p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">🛡️</div>
              <div className="benefit-content">
                <h4>Professional Services</h4>
                <p>Comprehensive editorial and production support included</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Support Section */}
        <section className="support-section">
          <div className="support-card">
            <div className="support-icon">💬</div>
            <div className="support-content">
              <h3>Need Assistance?</h3>
              <p>
                For questions about payment, fee waivers, or financial support,
                please contact our financial office.
              </p>
              <div className="support-contacts">
                <div className="support-contact">
                  <div className="contact-icon">📧</div>
                  <div className="contact-details">
                    <h5>Financial Office</h5>
                    <p>payments@acu-jgs.edu.ng</p>
                  </div>
                </div>
                <div className="support-contact">
                  <div className="contact-icon">📞</div>
                  <div className="contact-details">
                    <h5>Payment Support</h5>
                    <p>+234 800 123 4567</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PublicationPolicy;
