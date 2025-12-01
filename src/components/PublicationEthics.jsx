import "./PublicationEthics.css";

const PublicationEthics = () => {
  return (
    <div className="publication-ethics-page">
      <div className="container">
        {/* Header Section */}
        <header className="ethics-header">
          <h1>Publication Ethics and Publication Malpractice Statement</h1>
          <p className="page-subtitle">
            Upholding the Highest Standards of Scholarly Integrity and Ethical
            Conduct
          </p>
        </header>

        {/* Introduction Section */}
        <section className="intro-section">
          <div className="intro-card">
            <div className="intro-icon">⚖️</div>
            <div className="intro-content">
              <h2>Our Commitment to Ethical Publishing</h2>
              <p>
                The ACU Journal of Geological Sciences (ACU-JGS) is firmly
                committed to upholding the highest standards of publication
                ethics. To maintain integrity, transparency, and trust in
                scholarly communication, the journal adheres to internationally
                recognized ethical guidelines, including those established by
                the Committee on Publication Ethics (COPE).
              </p>
              <div className="highlight-box">
                <p>
                  Authors, reviewers, editors, and the publisher are expected to
                  follow the ethical principles outlined below.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Responsibilities of Editors Section */}
        <section className="responsibility-section">
          <h2>Responsibilities of Editors</h2>

          <div className="responsibility-grid">
            <div className="responsibility-card">
              <div className="responsibility-header">
                <div className="responsibility-icon">🎯</div>
                <h3>Editorial Independence and Fairness</h3>
              </div>
              <div className="responsibility-content">
                <p>
                  Editors evaluate all submitted manuscripts solely on academic
                  merit—originality, scientific quality, methodological
                  validity, clarity of presentation, and relevance to the
                  journal&apos;s scope.
                </p>
                <ul>
                  <li>
                    Decisions are made without discrimination based on
                    authors&apos; gender, ethnicity, nationality, religion,
                    political position, institutional affiliation, or personal
                    characteristics
                  </li>
                  <li>
                    The Editor-in-Chief holds full authority over editorial
                    decisions and publication timelines, independent of external
                    influences
                  </li>
                </ul>
              </div>
            </div>

            <div className="responsibility-card">
              <div className="responsibility-header">
                <div className="responsibility-icon">🔒</div>
                <h3>Confidentiality</h3>
              </div>
              <div className="responsibility-content">
                <p>
                  All submitted manuscripts are treated confidentially.
                  Editorial staff may disclose content only to individuals
                  directly involved in the review process.
                </p>
              </div>
            </div>

            <div className="responsibility-card">
              <div className="responsibility-header">
                <div className="responsibility-icon">⚠️</div>
                <h3>Handling Conflicts of Interest</h3>
              </div>
              <div className="responsibility-content">
                <p>
                  Editors must not use unpublished manuscript information for
                  personal research or benefit. If an editor has a conflict of
                  interest, they must recuse themselves.
                </p>
              </div>
            </div>

            <div className="responsibility-card">
              <div className="responsibility-header">
                <div className="responsibility-icon">📋</div>
                <h3>Decisions on Publication</h3>
              </div>
              <div className="responsibility-content">
                <p>
                  Editors ensure that each manuscript undergoes a fair, rigorous
                  peer-review process with at least two qualified reviewers.
                </p>
                <div className="criteria-list">
                  <h4>Final publication decisions are based on:</h4>
                  <ul>
                    <li>The scientific value of the work</li>
                    <li>Reviewer recommendations</li>
                    <li>Relevance to the journal&apos;s scope</li>
                    <li>Ethical standards and legal compliance</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="responsibility-card">
              <div className="responsibility-header">
                <div className="responsibility-icon">🔍</div>
                <h3>Investigations and Ethical Concerns</h3>
              </div>
              <div className="responsibility-content">
                <p>
                  Editors, in cooperation with the publisher, manage
                  investigations into alleged ethical breaches. Every report of
                  misconduct is examined—even years after publication.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Responsibilities of Reviewers Section */}
        <section className="responsibility-section">
          <h2>Responsibilities of Reviewers</h2>

          <div className="responsibility-grid">
            <div className="responsibility-card">
              <div className="responsibility-header">
                <div className="responsibility-icon">💡</div>
                <h3>Contribution to Editorial Decisions</h3>
              </div>
              <div className="responsibility-content">
                <p>
                  Peer review assists editors in making publication decisions
                  and provides authors with constructive feedback to improve
                  their manuscripts.
                </p>
              </div>
            </div>

            <div className="responsibility-card">
              <div className="responsibility-header">
                <div className="responsibility-icon">⏱️</div>
                <h3>Promptness</h3>
              </div>
              <div className="responsibility-content">
                <p>
                  Reviewers who lack expertise or cannot meet the review
                  deadline must notify the editors immediately and decline the
                  assignment.
                </p>
              </div>
            </div>

            <div className="responsibility-card">
              <div className="responsibility-header">
                <div className="responsibility-icon">🤫</div>
                <h3>Confidentiality</h3>
              </div>
              <div className="responsibility-content">
                <p>
                  Manuscripts sent for review must be handled as confidential
                  documents. Information must not be shared with others unless
                  authorized.
                </p>
              </div>
            </div>

            <div className="responsibility-card">
              <div className="responsibility-header">
                <div className="responsibility-icon">🎓</div>
                <h3>Objectivity and Constructive Criticism</h3>
              </div>
              <div className="responsibility-content">
                <p>
                  Reviews must be objective, clear, and supported by scientific
                  reasoning. Personal criticism of authors is inappropriate and
                  strictly prohibited.
                </p>
              </div>
            </div>

            <div className="responsibility-card">
              <div className="responsibility-header">
                <div className="responsibility-icon">📚</div>
                <h3>Acknowledgement of Sources</h3>
              </div>
              <div className="responsibility-content">
                <p>
                  Reviewers should identify relevant studies not cited by
                  authors and report suspected plagiarism, duplication, or
                  overlap with other works.
                </p>
              </div>
            </div>

            <div className="responsibility-card">
              <div className="responsibility-header">
                <div className="responsibility-icon">🚫</div>
                <h3>Conflicts of Interest</h3>
              </div>
              <div className="responsibility-content">
                <p>
                  Reviewers must decline assignments involving conflicts of
                  interest. Unpublished data from manuscripts must not be used
                  for personal research.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Responsibilities of Authors Section */}
        <section className="responsibility-section">
          <h2>Responsibilities of Authors</h2>

          <div className="responsibility-grid">
            <div className="responsibility-card">
              <div className="responsibility-header">
                <div className="responsibility-icon">📊</div>
                <h3>Reporting Standards</h3>
              </div>
              <div className="responsibility-content">
                <p>
                  Authors must present accurate, honest accounts of their work.
                  Falsification, fabrication, or misrepresentation of data is
                  unethical and unacceptable.
                </p>
              </div>
            </div>

            <div className="responsibility-card">
              <div className="responsibility-header">
                <div className="responsibility-icon">💾</div>
                <h3>Data Access and Retention</h3>
              </div>
              <div className="responsibility-content">
                <p>
                  Authors may be required to provide raw data for editorial
                  review. They should retain research data for at least 10 years
                  after publication.
                </p>
              </div>
            </div>

            <div className="responsibility-card">
              <div className="responsibility-header">
                <div className="responsibility-icon">✍️</div>
                <h3>Originality and Plagiarism</h3>
              </div>
              <div className="responsibility-content">
                <p>
                  Submissions must be entirely original works. Plagiarism in all
                  forms is strictly prohibited.
                </p>
              </div>
            </div>

            <div className="responsibility-card">
              <div className="responsibility-header">
                <div className="responsibility-icon">📄</div>
                <h3>Multiple or Redundant Publication</h3>
              </div>
              <div className="responsibility-content">
                <p>
                  A manuscript must not be submitted to more than one journal
                  simultaneously. Duplicate publication is unethical and
                  unacceptable.
                </p>
              </div>
            </div>

            <div className="responsibility-card">
              <div className="responsibility-header">
                <div className="responsibility-icon">👥</div>
                <h3>Authorship Criteria</h3>
              </div>
              <div className="responsibility-content">
                <p>
                  Only individuals who meet all criteria should be listed as
                  authors. Contributors not meeting authorship criteria must be
                  acknowledged separately.
                </p>
                <div className="criteria-list">
                  <h4>Authorship requires:</h4>
                  <ul>
                    <li>
                      Significant contribution to conception, design, or
                      analysis
                    </li>
                    <li>Participation in manuscript drafting or revision</li>
                    <li>
                      Approval of the final version and agreement to submission
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="responsibility-card">
              <div className="responsibility-header">
                <div className="responsibility-icon">💰</div>
                <h3>Disclosure of Conflicts of Interest</h3>
              </div>
              <div className="responsibility-content">
                <p>
                  Authors must disclose all financial or non-financial conflicts
                  of interest that may influence interpretation of results.
                </p>
              </div>
            </div>

            <div className="responsibility-card">
              <div className="responsibility-header">
                <div className="responsibility-icon">🔗</div>
                <h3>Proper Acknowledgement of Sources</h3>
              </div>
              <div className="responsibility-content">
                <p>
                  All data, citations, and ideas obtained from others must be
                  properly credited. Confidential information must not be used
                  without written permission.
                </p>
              </div>
            </div>

            <div className="responsibility-card">
              <div className="responsibility-header">
                <div className="responsibility-icon">🐾</div>
                <h3>Ethical Compliance</h3>
              </div>
              <div className="responsibility-content">
                <p>
                  Authors must clearly state compliance with ethical standards
                  when research involves:
                </p>
                <div className="ethics-types">
                  <span className="ethics-type">Human participants</span>
                  <span className="ethics-type">Animals</span>
                  <span className="ethics-type">
                    Hazardous chemicals or equipment
                  </span>
                </div>
              </div>
            </div>

            <div className="responsibility-card">
              <div className="responsibility-header">
                <div className="responsibility-icon">🔄</div>
                <h3>Peer Review Participation</h3>
              </div>
              <div className="responsibility-content">
                <p>
                  Authors must respond promptly and systematically to reviewer
                  comments and submit revised manuscripts within the required
                  timeframe.
                </p>
              </div>
            </div>

            <div className="responsibility-card">
              <div className="responsibility-header">
                <div className="responsibility-icon">✅</div>
                <h3>Correction of Errors</h3>
              </div>
              <div className="responsibility-content">
                <p>
                  If authors identify significant errors after publication, they
                  must notify the editor immediately so a correction or
                  retraction can be issued.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Responsibilities of Publisher Section */}
        <section className="publisher-section">
          <div className="publisher-card">
            <h2>Responsibilities of the Publisher</h2>

            <div className="publisher-content">
              <div className="publisher-item">
                <div className="publisher-icon">🔍</div>
                <div className="publisher-text">
                  <h3>Handling Misconduct</h3>
                  <p>
                    The publisher, working closely with editors, investigates
                    all allegations of scientific or ethical misconduct. This
                    may result in correction statements, clarifications, or
                    retractions.
                  </p>
                </div>
              </div>

              <div className="publisher-item">
                <div className="publisher-icon">🏛️</div>
                <div className="publisher-text">
                  <h3>Ensuring Access and Preservation</h3>
                  <p>
                    The publisher ensures long-term preservation and
                    accessibility of ACU-JGS articles through digital archiving.
                    All published papers are assigned Digital Object Identifiers
                    (DOIs) for permanent and reliable accessibility.
                  </p>
                </div>
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
                research integrity and ethical conduct. Through our
                comprehensive publication ethics framework, we ensure that all
                stakeholders—authors, reviewers, editors, and readers—can trust
                the integrity and reliability of scholarly work published in our
                journal.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PublicationEthics;
