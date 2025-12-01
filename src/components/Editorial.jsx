import "./Editorial.css";

const Editorial = () => {
  return (
    <div className="editorial-page">
      <div className="container">
        {/* Header Section */}
        <header className="editorial-header">
          <h1>Editorial Guidelines</h1>
          <p className="page-subtitle">
            Comprehensive submission and formatting guidelines for ACU Journal
            of Geological Sciences
          </p>
        </header>

        {/* Main Content */}
        <section className="content-section">
          <div className="content-card">
            <div className="section-icon">📋</div>
            <h2>SUBMISSION GUIDELINES</h2>

            {/* Language Section */}
            <div className="guideline-section">
              <div className="guideline-number">1</div>
              <div className="guideline-content">
                <h3>Language</h3>
                <p>
                  All manuscripts must be written in clear and coherent English,
                  preferably following the British Standard.
                </p>
              </div>
            </div>

            {/* Paper Length Section */}
            <div className="guideline-section">
              <div className="guideline-number">2</div>
              <div className="guideline-content">
                <h3>Paper Length & Formatting</h3>
                <p>The recommended maximum word limits for submissions are:</p>
                <div className="requirements-grid">
                  <div className="requirement-item">
                    <span className="requirement-type">Review Articles:</span>
                    <span className="requirement-value">
                      up to 10,000 words
                    </span>
                  </div>
                  <div className="requirement-item">
                    <span className="requirement-type">Research Articles:</span>
                    <span className="requirement-value">up to 6,000 words</span>
                  </div>
                  <div className="requirement-item">
                    <span className="requirement-type">Technical Notes:</span>
                    <span className="requirement-value">up to 2,000 words</span>
                  </div>
                </div>

                <h4>Formatting Requirements:</h4>
                <div className="formatting-grid">
                  <div className="format-item">
                    <span className="format-label">File Format:</span>
                    <span className="format-value">
                      Microsoft Word (.doc or .docx)
                    </span>
                  </div>
                  <div className="format-item">
                    <span className="format-label">Layout:</span>
                    <span className="format-value">Single column</span>
                  </div>
                  <div className="format-item">
                    <span className="format-label">Font:</span>
                    <span className="format-value">
                      Times New Roman, size 12
                    </span>
                  </div>
                  <div className="format-item">
                    <span className="format-label">Line Spacing:</span>
                    <span className="format-value">Single</span>
                  </div>
                  <div className="format-item">
                    <span className="format-label">Paper Size:</span>
                    <span className="format-value">A4</span>
                  </div>
                </div>

                <h4>Margins:</h4>
                <div className="margins-grid">
                  <div className="margin-item">
                    <span className="margin-side">Left:</span>
                    <span className="margin-value">2.5 cm</span>
                  </div>
                  <div className="margin-item">
                    <span className="margin-side">Right:</span>
                    <span className="margin-value">2.0 cm</span>
                  </div>
                  <div className="margin-item">
                    <span className="margin-side">Top:</span>
                    <span className="margin-value">2.0 cm</span>
                  </div>
                  <div className="margin-item">
                    <span className="margin-side">Bottom:</span>
                    <span className="margin-value">2.0 cm</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Title Page Section */}
            <div className="guideline-section">
              <div className="guideline-number">3</div>
              <div className="guideline-content">
                <h3>Title Page</h3>
                <p>A proper title page must include:</p>
                <ul className="requirement-list">
                  <li>Full names of all authors</li>
                  <li>Institutional affiliations</li>
                  <li>Email addresses</li>
                  <li>Phone number of the corresponding author</li>
                </ul>
              </div>
            </div>

            {/* Manuscript Title Section */}
            <div className="guideline-section">
              <div className="guideline-number">4</div>
              <div className="guideline-content">
                <h3>Manuscript Title</h3>
                <p>The title should be:</p>
                <ul className="requirement-list">
                  <li>Clear, concise, and informative</li>
                  <li>
                    No more than 15 words, excluding prepositions and
                    conjunctions
                  </li>
                  <li>Written in Title Case</li>
                  <li>Free of abbreviations and formulas where possible</li>
                </ul>
              </div>
            </div>

            {/* Abstract Section */}
            <div className="guideline-section">
              <div className="guideline-number">5</div>
              <div className="guideline-content">
                <h3>Abstract</h3>
                <p>
                  Every manuscript must contain an abstract of no more than 250
                  words, clearly stating:
                </p>
                <ul className="requirement-list">
                  <li>Purpose of the study</li>
                  <li>Methodology</li>
                  <li>Major findings</li>
                  <li>Conclusion</li>
                </ul>
                <p>Include 5–6 keywords.</p>
                <p className="note">
                  The abstract must not include references but may contain
                  relevant recommendations.
                </p>
              </div>
            </div>

            {/* Manuscript Structure Section */}
            <div className="guideline-section">
              <div className="guideline-number">6</div>
              <div className="guideline-content">
                <h3>Manuscript Structure</h3>
                <p>
                  The main body of the manuscript should follow this structure:
                </p>
                <div className="structure-grid">
                  <span className="structure-item">Introduction</span>
                  <span className="structure-item">Materials and Methods</span>
                  <span className="structure-item">Results and Discussion</span>
                  <span className="structure-item">Conclusion</span>
                  <span className="structure-item optional">
                    Acknowledgements (optional)
                  </span>
                  <span className="structure-item">References</span>
                  <span className="structure-item optional">
                    Appendix (optional)
                  </span>
                </div>
              </div>
            </div>

            {/* Heading Format Section */}
            <div className="guideline-section">
              <div className="guideline-number">7</div>
              <div className="guideline-content">
                <h3>Heading Format</h3>
                <div className="heading-examples">
                  <div className="heading-level">
                    <span className="level-name">First-Level Heading:</span>
                    <span className="level-format">Title Case</span>
                  </div>
                  <div className="heading-level">
                    <span className="level-name">Second-Level Heading:</span>
                    <span className="level-format">Sentence case</span>
                  </div>
                  <div className="heading-level">
                    <span className="level-name">Third-Level Heading:</span>
                    <span className="level-format">Italicised, not bold</span>
                  </div>
                </div>
                <p className="note">Additional formatting rules:</p>
                <ul className="requirement-list">
                  <li>All paragraphs must be written in block format</li>
                  <li>Equations should be centered on a separate line</li>
                </ul>
                <div className="equation-example">
                  <p>
                    <strong>Example:</strong>
                  </p>
                  <code>x + y = z (1)</code>
                </div>
              </div>
            </div>

            {/* Tables and Figures Section */}
            <div className="guideline-section">
              <div className="guideline-number">8</div>
              <div className="guideline-content">
                <h3>Tables and Figures</h3>
                <ul className="requirement-list">
                  <li>Tables and figures must be numbered sequentially</li>
                  <li>
                    They must appear immediately after their first mention in
                    the text
                  </li>
                  <li>
                    All illustrations should be labeled as Figure and cited as
                    Fig. 1, Fig. 2, etc.
                  </li>
                </ul>
                <div className="example-box">
                  <p>
                    <strong>Example:</strong>
                  </p>
                  <code>
                    Figure 1: Caption placed below the figure.
                    <br />
                    Source: Author (Year)
                  </code>
                </div>
                <p className="note">
                  Table captions must appear above the table.
                </p>
              </div>
            </div>

            {/* References Section */}
            <div className="guideline-section">
              <div className="guideline-number">9</div>
              <div className="guideline-content">
                <h3>References</h3>
                <p>
                  All references must follow the APA referencing style and be
                  arranged alphabetically.
                </p>
                <p className="note">Below are examples:</p>

                <div className="reference-examples">
                  <div className="reference-type">
                    <h4>Journal Article</h4>
                    <code>
                      Adesanya, D. A., & Raheem, A. A. (2009). Development of
                      corn cob ash blended cement. Construction and Building
                      Materials, 23(4), 347–352.
                    </code>
                  </div>

                  <div className="reference-type">
                    <h4>Book</h4>
                    <code>
                      Adegbola, A. A. (2010). Guidelines to Writing a Final Year
                      Project Report in Tertiary Institutions. Hydroplan
                      Associates.
                    </code>
                  </div>

                  <div className="reference-type">
                    <h4>Book Chapter</h4>
                    <code>
                      Son, M., & Adedokun, S. (2014). Earth pressure against
                      excavation walls. In C. Yoo et al. (Eds.), Geotechnical
                      Aspects of Underground Construction in Soft Ground (pp.
                      449–452). CRC Press.
                    </code>
                  </div>

                  <div className="reference-type">
                    <h4>Conference Paper</h4>
                    <code>
                      Ojoawo, S. O., Lateef, A., Adelakun, W. M., & Osho, O. O.
                      (2020). Biosorption of heavy metals... GCASSTE Conference
                      Proceedings (pp. 7–12).
                    </code>
                  </div>

                  <div className="reference-type">
                    <h4>Website</h4>
                    <code>
                      IITA. (2004). Title. Retrieved April 11, 2018, from
                      http://www.iita.org
                    </code>
                  </div>

                  <div className="reference-type">
                    <h4>Thesis / Project</h4>
                    <code>
                      Oluremi, (2015). Evaluation of waste wood ash treated
                      lateritic soil... Unpublished PhD thesis, Ahmadu Bello
                      University.
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Review Process Section */}
        <section className="review-section">
          <div className="review-card">
            <div className="review-icon">🔍</div>
            <div className="review-content">
              <h2>REVIEW PROCESS</h2>
              <p>
                Submitted manuscripts undergo a double-blind peer review.
                Reviewer comments will be forwarded to the corresponding author
                for revision.
              </p>
              <div className="revision-requirements">
                <h3>Upon completing revisions, authors must submit:</h3>
                <ul>
                  <li>The revised manuscript</li>
                  <li>
                    A detailed response letter addressing each reviewer/editor
                    comment and indicating all changes made
                  </li>
                </ul>
              </div>
              <p className="process-note">
                This ensures transparency and improves the quality of the final
                published work.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Editorial;
