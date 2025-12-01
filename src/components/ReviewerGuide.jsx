import { Link } from "react-router-dom";
import "./ReviewerGuide.css";

const ReviewersGuide = () => {
  const reviewCriteria = [
    {
      number: "I",
      title: "Originality and Scope",
      description: "Evaluate the novelty and alignment with journal objectives",
      questions: [
        "Is the article aligned with the purpose and scope of the journal?",
        "Does the content demonstrate sufficient novelty to warrant publication?",
        "Are there meaningful contributions to the existing body of knowledge?",
      ],
    },
    {
      number: "II",
      title: "Title Appropriateness",
      description: "Assess clarity and relevance of the title",
      questions: [
        "Is the title reflective of the study objectives and design?",
        "Does the title require modification for better accuracy?",
      ],
    },
    {
      number: "III",
      title: "Abstract Quality",
      description: "Evaluate comprehensive summary representation",
      questions: [
        "Does the abstract comprehensively represent the full text content?",
        "Are problem statement, methodology, findings, and conclusions clearly presented?",
        "Is the word count within the 250-word maximum limit?",
      ],
    },
    {
      number: "IV",
      title: "Keyword Effectiveness",
      description: "Assess searchability and relevance",
      questions: [
        "Are the keywords appropriately searchable and relevant to the content?",
      ],
    },
    {
      number: "V",
      title: "Introduction Framework",
      description: "Evaluate context establishment and literature review",
      questions: [
        "Is the research problem clearly stated and contextualized?",
        "Does the literature review incorporate recent global, regional, and local sources?",
        "Is the research gap clearly identified and justified?",
      ],
    },
    {
      number: "VI",
      title: "Methodological Rigor",
      description: "Assess research design and reproducibility",
      questions: [
        "Is the methodology logically sound and scientifically valid?",
        "Are data collection procedures clearly and accurately described?",
        "Is the research design appropriate for the stated objectives?",
        "Is there sufficient information to enable research replication?",
        "Was the sampling strategy adequate and properly justified?",
        "Have equipment and materials been appropriately described?",
      ],
    },
    {
      number: "VII",
      title: "Results and Discussion",
      description: "Evaluate analysis quality and interpretation",
      questions: [
        "Do the results logically follow from the methodology employed?",
        "Has appropriate statistical analysis been conducted?",
        "Are the statistical methods and results presented accurately?",
        "Is there internal consistency throughout the results section?",
        "Are results clearly presented and compared with relevant previous studies?",
      ],
    },
    {
      number: "VIII",
      title: "Conclusion Validity",
      description: "Assess derivation and significance of conclusions",
      questions: [
        "Do conclusions logically derive from the results and discussion?",
        "Are all claims supported by the presented evidence?",
        "Does the conclusion clearly state contributions to knowledge?",
      ],
    },
    {
      number: "IX",
      title: "Visual Presentation",
      description: "Evaluate tables and figures quality",
      questions: [
        "Are tables and figures clear, simple, and easily understandable?",
        "Do they avoid unnecessary duplication of information?",
        "Are they appropriate and conform to journal formatting standards?",
      ],
    },
    {
      number: "X",
      title: "Reference Quality",
      description: "Assess citation and bibliography standards",
      questions: [
        "Are references adequate, current, and relevant to the research?",
        "Are citations accurate and properly formatted according to journal guidelines?",
      ],
    },
    {
      number: "XI",
      title: "Overall Quality",
      description: "Comprehensive manuscript assessment",
      questions: [
        "Is the manuscript satisfactory in spelling, punctuation, and grammar?",
        "Is the writing style clear, concise, and academically appropriate?",
        "Does the manuscript make a substantial contribution to knowledge?",
      ],
    },
  ];

  return (
    <div className="reviewers-guide-page">
      <div className="container">
        {/* Header Section */}
        <header className="guide-header">
          <div className="header-content">
            <h1>Reviewer&apos;s Guide</h1>
            <p>
              Comprehensive evaluation framework for peer review at ACU Journal
              of Geological Sciences
            </p>
          </div>
        </header>

        {/* Introduction Section */}
        <section className="introduction-section">
          <div className="intro-card">
            <div className="intro-icon"></div>
            <h2>Peer Review Evaluation Framework</h2>
            <p className="intro-text">
              This guide provides a structured framework for evaluating
              manuscripts submitted to the ACU Journal of Geological Sciences.
              Reviewers should consider these criteria to ensure comprehensive
              and consistent assessment of scientific quality, originality, and
              contribution to the geological sciences field.
            </p>
          </div>
        </section>

        {/* Review Criteria Sections */}
        <section className="criteria-section">
          <div className="section-header">
            <h3>Evaluation Criteria</h3>
            <p>Systematic assessment framework for manuscript review</p>
          </div>

          <div className="criteria-grid">
            {reviewCriteria.map((criterion, index) => (
              <div key={index} className="criterion-card">
                <div className="criterion-header">
                  {/* <div className="criterion-number">{criterion.number}</div> */}
                  <div className="criterion-title">
                    <h4>{criterion.title}</h4>
                    <p className="criterion-desc">{criterion.description}</p>
                  </div>
                </div>
                <div className="criterion-content">
                  <ul className="questions-list">
                    {criterion.questions.map((question, qIndex) => (
                      <li key={qIndex} className="question-item">
                        {question}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Submission Section */}
        <section className="submission-section">
          <div className="submission-card">
            <div className="submission-icon">📋</div>
            <div className="submission-content">
              <h3>Submit Your Review Report</h3>
              <p>
                Upon completion of your comprehensive manuscript evaluation,
                please submit your detailed review report through our secure
                submission portal. Your feedback is essential for maintaining
                the high standards of our journal.
              </p>
              <div className="submission-action">
                <Link to="/upload-review-report" className="submit-button">
                  Upload Review Report
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Guidelines Section */}
        <section className="guidelines-section">
          <div className="guidelines-card">
            <h3>Reviewer Responsibilities</h3>
            <div className="guidelines-grid">
              <div className="guideline-item">
                <div className="guideline-icon">🤝</div>
                <div className="guideline-content">
                  <h4>Professional Conduct</h4>
                  <p>
                    Maintain objectivity and provide constructive,
                    evidence-based feedback that helps authors improve their
                    scientific work.
                  </p>
                </div>
              </div>
              <div className="guideline-item">
                <div className="guideline-icon">🔒</div>
                <div className="guideline-content">
                  <h4>Confidentiality</h4>
                  <p>
                    Protect the confidentiality of the manuscript content and
                    review process. Do not share or discuss unpublished work
                    with others.
                  </p>
                </div>
              </div>
              <div className="guideline-item">
                <div className="guideline-icon">⏰</div>
                <div className="guideline-content">
                  <h4>Timeliness</h4>
                  <p>
                    Submit reviews within the agreed timeframe to ensure timely
                    publication decisions and author notifications.
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

export default ReviewersGuide;
