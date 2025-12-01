import "./AuthorGuide.css";
import { Link } from "react-router-dom";

function AuthorGuide() {
  return (
    <div>
      <div className="authors-page">
        <div className="container">
          {/* Header Section */}
          <header className="authors-header">
            <h1>Author&apos;s Guidelines</h1>
            <p className="page-subtitle">
              Instructions for preparing and submitting manuscripts to ACU
              Journal of Geological Sciences
            </p>
          </header>

          {/* Introduction Section */}
          <section className="intro-section">
            <div className="content-card">
              <p>
                ACU Journal of Geological Sciences (ACU-JGS) is a bi-annual
                academic journal (March and September) of the Department of
                Geological Sciences, Ajayi Crowther University, Oyo, Nigeria. It
                is an international, peer-reviewed journal that publishes
                original research articles, review papers, and technical notes
                across the fields of Geology, Geophysics, Hydrogeology,
                Petroleum Geoscience, Mineral Exploration, Geological
                Engineering, and other related disciplines.
              </p>
              <p>
                ACU-JGS provides a reliable platform for disseminating new
                research findings, innovative technologies, and discoveries that
                advance academic scholarship and sustainable development in the
                geosciences.
              </p>
              <p>
                Researchers, scholars, and practitioners are invited to submit
                manuscripts for the next edition of ACU-JGS. Manuscripts written
                in English will be considered for publication after undergoing
                thorough peer review.
              </p>
            </div>
          </section>

          {/* Submission Guidelines */}
          <section className="guidelines-section">
            <h2>Submission Guidelines</h2>

            <div className="guidelines-grid">
              {/* Language */}
              <div className="guideline-card">
                <div className="card-icon">🌐</div>
                <h3>Language</h3>
                <p>
                  Manuscripts must be written in English, preferably using
                  British Standard.
                </p>
              </div>

              {/* Paper Length */}
              <div className="guideline-card">
                <div className="card-icon">📏</div>
                <h3>Paper Length</h3>
                <ul>
                  <li>
                    <strong>Review Papers:</strong> maximum 10,000 words
                  </li>
                  <li>
                    <strong>Research Articles:</strong> maximum 6,000 words
                  </li>
                  <li>
                    <strong>Technical Notes:</strong> maximum 2,000 words
                  </li>
                </ul>
              </div>

              {/* Formatting */}
              <div className="guideline-card">
                <div className="card-icon">📝</div>
                <h3>Formatting</h3>
                <p>
                  Manuscripts must be prepared in MS Word format, single column,
                  Times New Roman, font size 12, single line spacing, A4 size
                  with the following margins: left 2.5 cm, right 2.0 cm, top 2.0
                  cm, bottom 2.0 cm.
                </p>
              </div>
            </div>
          </section>

          {/* Manuscript Structure */}
          <section className="structure-section">
            <h2>Manuscript Structure</h2>

            <div className="structure-content">
              {/* Title Page */}
              <div className="structure-card">
                <h3>Title Page</h3>
                <p>The title page must include:</p>
                <ul>
                  <li>Full names of all authors</li>
                  <li>Institutional affiliations and addresses</li>
                  <li>
                    Email address and phone number of the corresponding author
                  </li>
                  <li>
                    <strong>Title:</strong> Clear, concise, and informative.
                    Maximum 15 words (excluding prepositions and conjunctions).
                    Written in title case, avoiding abbreviations and formulae
                    where possible.
                  </li>
                </ul>
              </div>

              {/* Abstract */}
              <div className="structure-card">
                <h3>Abstract</h3>
                <ul>
                  <li>Maximum 250 words</li>
                  <li>Include 5–6 keywords</li>
                  <li>
                    Clearly describe the purpose, methods, major findings, and
                    conclusion of the study
                  </li>
                  <li>
                    Should not contain references, but may include
                    recommendations useful to researchers
                  </li>
                </ul>
              </div>

              {/* Manuscript Body */}
              <div className="structure-card">
                <h3>Manuscript Body</h3>
                <p>All manuscripts should include the following sections:</p>
                <div className="sections-list">
                  <span className="section-tag">Introduction</span>
                  <span className="section-tag">Materials and Methods</span>
                  <span className="section-tag">Results and Discussion</span>
                  <span className="section-tag">Conclusion</span>
                  <span className="section-tag">
                    Acknowledgements (optional)
                  </span>
                  <span className="section-tag">References</span>
                  <span className="section-tag">Appendix (optional)</span>
                </div>
              </div>

              {/* Formatting Details */}
              <div className="structure-card">
                <h3>Formatting Guidelines</h3>
                <ul>
                  <li>
                    <strong>First-level sections:</strong> Title case
                  </li>
                  <li>
                    <strong>Second-level subsections:</strong> Sentence case
                  </li>
                  <li>
                    <strong>Third-level headings (if any):</strong> Italic, not
                    bold
                  </li>
                  <li>
                    <strong>All paragraphs:</strong> Block style
                  </li>
                  <li>
                    <strong>Displayed equations:</strong> centered on a separate
                    line
                  </li>
                </ul>
                <div className="example-box">
                  <p>
                    <strong>Example:</strong>
                  </p>
                  <code>x + y = z (1)</code>
                </div>
              </div>

              {/* Tables and Figures */}
              <div className="structure-card">
                <h3>Tables and Figures</h3>
                <ul>
                  <li>Numbered sequentially and referred to in the text</li>
                  <li>
                    <strong>Figures:</strong> caption below the figure (e.g.,
                    Fig. 1)
                  </li>
                  <li>
                    <strong>Tables:</strong> caption above the table
                  </li>
                </ul>
                <div className="example-box">
                  <p>
                    <strong>Examples:</strong>
                  </p>
                  <code>
                    Figure 1: Geological cross-section of the study area.
                    <br />
                    Source: Author (Year)
                  </code>
                  <br />
                  <br />
                  <code>
                    Table 1: Summary of rock sample properties.
                    <br />
                    Source: Author (Year)
                  </code>
                </div>
              </div>
            </div>
          </section>

          {/* References Section */}
          <section className="references-section">
            <h2>References Style</h2>
            <div className="references-card">
              <p>
                References must follow APA style and be listed in alphabetical
                order.
              </p>

              <h4>Examples:</h4>

              <div className="reference-examples">
                <div className="reference-item">
                  <h5>Journal Article:</h5>
                  <code>
                    Adesanya, D.A., & Raheem, A.A. (2009). Development of corn
                    cob ash blended cement. Construction and Building Materials,
                    23(4), 347–352. https://doi.org/xxxx
                  </code>
                </div>

                <div className="reference-item">
                  <h5>Book:</h5>
                  <code>
                    Adegbola, A.A. (2010). Guidelines to Writing a Final Year
                    Project Report in Tertiary Institution. Hydroplan
                    Associates, Ibadan, Nigeria.
                  </code>
                </div>

                <div className="reference-item">
                  <h5>Book Chapter:</h5>
                  <code>
                    Son, M., & Adedokun, S. (2014). Earth pressure against the
                    excavation wall in a jointed rock mass. In C. Yoo, S. Park,
                    B. Kim, & H. Ban (Eds.), Geotechnical Aspects of Underground
                    Construction in Soft Ground (pp. 449–452). CRC Press, Korea.
                  </code>
                </div>

                <div className="reference-item">
                  <h5>Conference:</h5>
                  <code>
                    Ojoawo, S.O., Lateef, A., Adelakun, W.M., & Osho, O.O.
                    (2020). Biosorption of heavy metals in automobile panel
                    workshop effluent using Bacillus safensis LAU 13.
                    Proceedings of the Global Conference on Advanced Smart and
                    Sustainable Technologies in Engineering (GCASSTE), Mangalore
                    Institute of Engineering and Technology, Mangalore, India,
                    30–31 January 2020, pp. 7–12.
                  </code>
                </div>

                <div className="reference-item">
                  <h5>Website:</h5>
                  <code>
                    IITA. (2004). Title. Retrieved April 11, 2018, from
                    http://www.iita.org
                  </code>
                </div>

                <div className="reference-item">
                  <h5>Thesis/Project Report:</h5>
                  <code>
                    Oluremi, A. (2015). Evaluation of waste wood ash treated
                    lateritic soil for use in municipal solid waste containment
                    application (Unpublished PhD Thesis). Department of Civil
                    Engineering, Ahmadu Bello University, Zaria, Nigeria.
                  </code>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="cta-section">
            <div className="cta-card">
              <h3>Ready to Submit Your Manuscript?</h3>
              <p>
                Ensure your manuscript follows all guidelines before submission
                to facilitate the review process.
              </p>
              <button className="cta-button">
                {" "}
                <Link
                  to="/submit-manuscript"
                  style={{
                    textDecoration: "none",
                    border: " none",
                    color: "black",
                  }}
                >
                  Submit Manuscript
                </Link>
              </button>
            </div>
          </section>
        </div>
      </div>
      );
    </div>
  );
}

export default AuthorGuide;
