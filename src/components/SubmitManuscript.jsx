import { Link } from "react-router-dom";
import "./SubmitManuscript.css";

const SubmitManuscript = () => {
  return (
    <div className="submit-manuscript-page">
      <div className="container">
        {/* Header Section */}
        <div className="submit-header">
          <h1>Submit Manuscript</h1>
          <p>
            Guidelines and procedures for submitting manuscripts to ACU Journal
            of Geological Sciences
          </p>
        </div>

        {/* Authorship Guidelines Section */}
        <section className="guidelines-section">
          <h2>Authorship and Corresponding Author Guidelines</h2>
          <div className="content-section">
            <p>
              A well-structured and complete manuscript should be submitted to
              ACU Journal of Geological Sciences (ACU-JGS) only after all
              contributing authors have given their consent. Authors submitting
              a manuscript should ensure that everyone whose work contributed to
              the paper is properly acknowledged as a contributing author.
            </p>
          </div>
        </section>

        {/* Authorship Criteria */}
        <section className="criteria-section">
          <h2>Authorship Criteria</h2>
          <div className="criteria-grid">
            <div className="criterion-item">
              <div className="criterion-icon">🎯</div>
              <h3>Substantial Contribution</h3>
              <p>
                Made a substantial contribution to the conception and design of
                the study, acquisition of data, or analysis and interpretation
                of data.
              </p>
            </div>

            <div className="criterion-item">
              <div className="criterion-icon">✍️</div>
              <h3>Manuscript Development</h3>
              <p>
                Drafted the manuscript or critically revised it for important
                intellectual content.
              </p>
            </div>

            <div className="criterion-item">
              <div className="criterion-icon">✅</div>
              <h3>Final Approval</h3>
              <p>
                Approved the final version of the manuscript for publication.
              </p>
            </div>

            <div className="criterion-item">
              <div className="criterion-icon">🔍</div>
              <h3>Accountability</h3>
              <p>
                Agreed to be accountable for all aspects of the work, ensuring
                that any questions regarding accuracy or integrity are
                appropriately addressed.
              </p>
            </div>
          </div>

          <div className="additional-info">
            <h4>Additional Information</h4>
            <p>
              Each author should have participated sufficiently to take public
              responsibility for appropriate portions of the content.
            </p>
            <p>
              For large or multicentre research groups, the group should
              identify individuals who accept direct responsibility for the
              manuscript. These individuals must fully meet the authorship
              criteria listed above.
            </p>
          </div>
        </section>

        {/* Corresponding Author Section */}
        <section className="corresponding-author-section">
          <h2>Corresponding Author Responsibilities</h2>
          <div className="responsibilities-grid">
            <div className="responsibility-item">
              <h3>Submission & Review Process</h3>
              <p>
                The corresponding author is responsible for managing
                communication with the journal throughout the manuscript
                submission, peer review, and publication process.
              </p>
            </div>

            <div className="responsibility-item">
              <h3>Administrative Requirements</h3>
              <ul>
                <li>Providing authorship details</li>
                <li>Obtaining ethics committee approval</li>
                <li>
                  Submitting clinical trial registration documentation (if
                  applicable)
                </li>
                <li>
                  Collecting conflict of interest statements from all authors
                </li>
              </ul>
            </div>

            <div className="responsibility-item">
              <h3>Legal Responsibilities</h3>
              <p>
                The corresponding author signs the publishing agreement on
                behalf of all authors and ensures compliance with publication
                standards.
              </p>
            </div>

            <div className="responsibility-item">
              <h3>Post-Publication Duties</h3>
              <p>
                After publication, the corresponding author may be contacted to:
              </p>
              <ul>
                <li>Respond to critiques or questions regarding the work</li>
                <li>Provide additional data or clarifications if needed</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Submission Options */}
        <section className="submission-options-section">
          <h2>Submitting Your Manuscript</h2>
          <div className="submission-options">
            {/* New Submission */}
            <div className="submission-option new-submission">
              <div className="option-header">
                <div className="option-icon">📄</div>
                <h3>New Manuscript Submission</h3>
              </div>
              <div className="option-content">
                <p>
                  Submit a new manuscript for consideration by our editorial
                  board and peer reviewers.
                </p>
                <ul>
                  <li>Complete manuscript submission form</li>
                  <li>Upload manuscript files</li>
                  <li>Provide author information</li>
                  <li>Submit supporting documents</li>
                </ul>
              </div>

              <div className="option-footer">
                <Link to="/submit-new" className="submit-link">
                  Click here to submit new manuscript
                </Link>
              </div>
            </div>

            {/* Revised Submission */}
            <div className="submission-option revised-submission">
              <div className="option-header">
                <div className="option-icon">🔄</div>
                <h3>Revised Manuscript Submission</h3>
              </div>
              <div className="option-content">
                <p>
                  Submit a revised manuscript based on peer-review feedback and
                  editorial recommendations.
                </p>
                <ul>
                  <li>Upload revised manuscript</li>
                  <li>Submit response to reviewers</li>
                  <li>Include track changes version</li>
                  <li>Address all reviewer comments</li>
                </ul>
              </div>

              <div className="option-footer">
                <Link to="/submit-revised-manuscript" className="submit-link">
                  Click here to submit revised manuscript
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="notes-section">
          <h3>Important Notes Before Submission</h3>
          <div className="notes-grid">
            <div className="note-item">
              <div className="note-icon">📋</div>
              <p>Ensure your manuscript follows all formatting guidelines.</p>
            </div>
            <div className="note-item">
              <div className="note-icon">👥</div>
              <p>Confirm all authors have approved the final version.</p>
            </div>
            <div className="note-item">
              <div className="note-icon">🔒</div>
              <p>Prepare all required supporting documents.</p>
            </div>
            <div className="note-item">
              <div className="note-icon">📧</div>
              <p>
                Ensure corresponding author contact information is accurate.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SubmitManuscript;
