import "./Contact.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="container">
        {/* Header Section */}
        <header className="contact-header">
          <h1>Contact ACU-JGS</h1>
          <p className="page-subtitle">
            Get in Touch with the Ajayi Crowther University Journal of
            Geological Sciences
          </p>
        </header>

        {/* Introduction Section */}
        <section className="intro-section">
          <div className="intro-card">
            <div className="intro-icon">📞</div>
            <div className="intro-content">
              <h2>We&apos;re Here to Help</h2>
              <p>
                Whether you have questions about manuscript submission, need
                assistance with the peer review process, or want to learn more
                about our publication policies, our editorial team is ready to
                assist you.
              </p>
              <div className="highlight-box">
                <p>
                  Our dedicated support team typically responds to all inquiries
                  within 24-48 hours during business days.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods Grid */}
        <section className="contact-methods-section">
          <h2>Contact Methods</h2>
          <div className="contact-methods-grid">
            <div className="contact-method-card">
              <div className="method-icon">📧</div>
              <div className="method-content">
                <h3>General Inquiries</h3>
                <p>
                  For general questions about the journal and publication
                  process
                </p>
                <div className="contact-detail">
                  <span className="detail-label">Email:</span>
                  <a href="mailto:info@acu-jgs.edu.ng" className="detail-value">
                    info@acu-jgs.edu.ng
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-method-card">
              <div className="method-icon">📝</div>
              <div className="method-content">
                <h3>Manuscript Submission</h3>
                <p>For questions related to article submission and status</p>
                <div className="contact-detail">
                  <span className="detail-label">Email:</span>
                  <a
                    href="mailto:submissions@acu-jgs.edu.ng"
                    className="detail-value"
                  >
                    submissions@acu-jgs.edu.ng
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-method-card">
              <div className="method-icon">💰</div>
              <div className="method-content">
                <h3>Payment & Fees</h3>
                <p>For payment-related questions and fee waivers</p>
                <div className="contact-detail">
                  <span className="detail-label">Email:</span>
                  <a
                    href="mailto:payments@acu-jgs.edu.ng"
                    className="detail-value"
                  >
                    payments@acu-jgs.edu.ng
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-method-card">
              <div className="method-icon">🔍</div>
              <div className="method-content">
                <h3>Peer Review</h3>
                <p>For reviewers and peer review process questions</p>
                <div className="contact-detail">
                  <span className="detail-label">Email:</span>
                  <a
                    href="mailto:review@acu-jgs.edu.ng"
                    className="detail-value"
                  >
                    review@acu-jgs.edu.ng
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-method-card">
              <div className="method-icon">📚</div>
              <div className="method-content">
                <h3>Editorial Office</h3>
                <p>Contact the editorial team and board members</p>
                <div className="contact-detail">
                  <span className="detail-label">Email:</span>
                  <a
                    href="mailto:editorial@acu-jgs.edu.ng"
                    className="detail-value"
                  >
                    editorial@acu-jgs.edu.ng
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-method-card">
              <div className="method-icon">🌐</div>
              <div className="method-content">
                <h3>Technical Support</h3>
                <p>For website and submission system issues</p>
                <div className="contact-detail">
                  <span className="detail-label">Email:</span>
                  <a
                    href="mailto:support@acu-jgs.edu.ng"
                    className="detail-value"
                  >
                    support@acu-jgs.edu.ng
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="contact-form-section">
          <div className="form-container">
            <div className="form-header1">
              <h2>Send Us a Message</h2>
              <p>
                Fill out the form below and we&apos;ll get back to you as soon
                as possible
              </p>
            </div>

            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="form-input"
                    placeholder="Enter your first name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName" className="form-label">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="form-input"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-input"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="form-input"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject *
                </label>
                <select id="subject" className="form-select" required>
                  <option value="">Select a subject</option>
                  <option value="submission">Manuscript Submission</option>
                  <option value="review">Peer Review Process</option>
                  <option value="payment">Payment & Fees</option>
                  <option value="technical">Technical Support</option>
                  <option value="editorial">Editorial Questions</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  className="form-textarea"
                  placeholder="Please describe your inquiry in detail..."
                  rows="6"
                  required
                ></textarea>
              </div>

              <div className="form-actions">
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
                <button type="reset" className="reset-btn">
                  Clear Form
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Physical Address Section */}
        <section className="address-section">
          <div className="address-card">
            <div className="address-header">
              <div className="address-icon">🏛️</div>
              <div className="address-content">
                <h2>Physical Address</h2>
                <p>Visit our editorial office at Ajayi Crowther University</p>
              </div>
            </div>

            <div className="address-details">
              <div className="address-item">
                <div className="address-item-icon">📍</div>
                <div className="address-item-content">
                  <h4>Main Office</h4>
                  <p>
                    Department of Geological Sciences
                    <br />
                    Ajayi Crowther University
                    <br />
                    Oyo Town, Oyo State
                    <br />
                    Nigeria
                  </p>
                </div>
              </div>

              <div className="address-item">
                <div className="address-item-icon">📞</div>
                <div className="address-item-content">
                  <h4>Phone</h4>
                  <p>+234 803 123 4567</p>
                </div>
              </div>

              <div className="address-item">
                <div className="address-item-icon">🕒</div>
                <div className="address-item-content">
                  <h4>Office Hours</h4>
                  <p>
                    Monday - Friday: 8:00 AM - 5:00 PM
                    <br />
                    Saturday: 9:00 AM - 1:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact Section */}
        <section className="emergency-section">
          <div className="emergency-card">
            <div className="emergency-icon">🚨</div>
            <div className="emergency-content">
              <h3>Urgent Matters</h3>
              <p>
                For urgent issues requiring immediate attention (e.g.,
                manuscript withdrawal, ethical concerns, or time-sensitive
                correspondence), please contact:
              </p>
              <div className="emergency-contacts">
                <div className="emergency-contact">
                  <div className="emergency-contact-icon">👨‍💼</div>
                  <div className="emergency-contact-details">
                    <h5>Editor-in-Chief</h5>
                    <p>Prof. Adebayo Johnson</p>
                    <a href="mailto:eic@acu-jgs.edu.ng">eic@acu-jgs.edu.ng</a>
                    <span>+234 802 123 4567</span>
                  </div>
                </div>

                <div className="emergency-contact">
                  <div className="emergency-contact-icon">👩‍💼</div>
                  <div className="emergency-contact-details">
                    <h5>Managing Editor</h5>
                    <p>Dr. Emmanuel Nwosu</p>
                    <a href="mailto:manager@acu-jgs.edu.ng">
                      manager@acu-jgs.edu.ng
                    </a>
                    <span>+234 803 123 4567</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Quick Links */}
        <section className="faq-section">
          <div className="faq-card">
            <h2>Quick Links & FAQs</h2>
            <div className="faq-links">
              <a href="/submit-manuscript" className="faq-link">
                📝 Submission Guidelines
              </a>
              <a href="/puplication-fee" className="faq-link">
                💰 Publication Fees
              </a>
              <a href="/peer-review" className="faq-link">
                🔍 Peer Review Process
              </a>
              <a href="/editorial-board" className="faq-link">
                👥 Editorial Board
              </a>
              <a href="/publication-ethics" className="faq-link">
                ⚖️ Publication Ethics
              </a>
              <a href="/authors" className="faq-link">
                📚 Author Guidelines
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
