import "./EditorialBoard.css";

const EditorialBoard = () => {
  // Editorial Board Members Data
  const boardMembers = [
    {
      id: 1,
      name: "Prof. Adebayo Johnson",
      position: "Head of Department & Editor-in-Chief",
      phone: "+234 801 234 5678",
      email: "adebayo.johnson@acu.edu.ng",
      image: "👨‍🏫",
    },
    {
      id: 2,
      name: "Dr. Chinedu Okoro",
      position: "Deputy Editor & Senior Lecturer",
      phone: "+234 802 345 6789",
      email: "chinedu.okoro@acu.edu.ng",
      image: "👨‍💼",
    },
    {
      id: 3,
      name: "Prof. Fatima Bello",
      position: "Associate Editor & Professor of Geophysics",
      phone: "+234 803 456 7890",
      email: "fatima.bello@acu.edu.ng",
      image: "👩‍🏫",
    },
    {
      id: 4,
      name: "Dr. Emmanuel Nwosu",
      position: "Managing Editor & Senior Research Fellow",
      phone: "+234 804 567 8901",
      email: "emmanuel.nwosu@acu.edu.ng",
      image: "👨‍🔬",
    },
    {
      id: 5,
      name: "Prof. Grace Okafor",
      position: "Section Editor - Mineralogy",
      phone: "+234 805 678 9012",
      email: "grace.okafor@acu.edu.ng",
      image: "👩‍🔬",
    },
    {
      id: 6,
      name: "Dr. Ibrahim Sani",
      position: "Section Editor - Petroleum Geology",
      phone: "+234 806 789 0123",
      email: "ibrahim.sani@acu.edu.ng",
      image: "👨‍💻",
    },
    {
      id: 7,
      name: "Prof. Ngozi Eze",
      position: "Section Editor - Environmental Geology",
      phone: "+234 807 890 1234",
      email: "ngozi.eze@acu.edu.ng",
      image: "👩‍🌾",
    },
    {
      id: 8,
      name: "Dr. Oluwaseun Adeyemi",
      position: "Section Editor - Geochemistry",
      phone: "+234 808 901 2345",
      email: "oluwaseun.adeyemi@acu.edu.ng",
      image: "👨‍🔧",
    },
    {
      id: 9,
      name: "Prof. Halima Abdullahi",
      position: "Section Editor - Structural Geology",
      phone: "+234 809 012 3456",
      email: "halima.abdullahi@acu.edu.ng",
      image: "👩‍🎓",
    },
    {
      id: 10,
      name: "Dr. Kunle Adebayo",
      position: "Section Editor - Hydrogeology",
      phone: "+234 810 123 4567",
      email: "kunle.adebayo@acu.edu.ng",
      image: "👨‍🚀",
    },
    {
      id: 11,
      name: "Prof. Zainab Mohammed",
      position: "Section Editor - Paleontology",
      phone: "+234 811 234 5678",
      email: "zainab.mohammed@acu.edu.ng",
      image: "👩‍⚖️",
    },
    {
      id: 12,
      name: "Dr. Tunde Williams",
      position: "Section Editor - Geophysics",
      phone: "+234 812 345 6789",
      email: "tunde.williams@acu.edu.ng",
      image: "👨‍✈️",
    },
  ];

  return (
    <div className="editorial-board-page">
      <div className="container">
        {/* Header Section */}
        <header className="editorial-header">
          <h1>Editorial Board</h1>
          <p className="page-subtitle">
            Meet the Distinguished Scholars and Experts Guiding ACU Journal of
            Geological Sciences
          </p>
        </header>

        {/* Introduction Section */}
        <section className="intro-section">
          <div className="intro-card">
            <div className="intro-icon">👥</div>
            <div className="intro-content">
              <h2>Our Editorial Leadership</h2>
              <p>
                The ACU Journal of Geological Sciences is guided by a team of
                distinguished scholars, researchers, and industry experts who
                bring decades of collective experience in various geological
                disciplines. Our editorial board ensures the highest standards
                of academic excellence and scientific integrity.
              </p>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">{boardMembers.length}</div>
                  <div className="stat-label">Expert Members</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">8+</div>
                  <div className="stat-label">Specialized Sections</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Years Combined Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Board Members Grid */}
        <section className="board-section">
          <h2 className="section-title">Editorial Board Members</h2>
          <div className="board-grid">
            {boardMembers.map((member) => (
              <div key={member.id} className="member-card">
                <div className="member-header">
                  <div className="member-image">{member.image}</div>
                  <div className="member-basic-info">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-position">{member.position}</p>
                  </div>
                </div>

                <div className="member-details">
                  <div className="contact-info">
                    <div className="contact-item">
                      <div className="contact-icon">📞</div>
                      <div className="contact-text">
                        <span className="contact-label">Phone</span>
                        <span className="contact-value">{member.phone}</span>
                      </div>
                    </div>
                    <div className="contact-item">
                      <div className="contact-icon">✉️</div>
                      <div className="contact-text">
                        <span className="contact-label">Email</span>
                        <span className="contact-value">{member.email}</span>
                      </div>
                    </div>
                  </div>

                  <div className="member-actions">
                    <button className="btn btn-primary">View Profile</button>
                    <button className="btn btn-secondary">Contact</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Organizational Structure */}
        <section className="structure-section">
          <div className="structure-card">
            <h2>Editorial Structure</h2>
            <div className="structure-levels">
              <div className="structure-level">
                <div className="level-icon">👑</div>
                <div className="level-content">
                  <h3>Editor-in-Chief</h3>
                  <p>
                    Overall responsibility for journal content and editorial
                    direction
                  </p>
                </div>
              </div>
              <div className="structure-level">
                <div className="level-icon">🎯</div>
                <div className="level-content">
                  <h3>Deputy Editors</h3>
                  <p>Assist in editorial decisions and manage special issues</p>
                </div>
              </div>
              <div className="structure-level">
                <div className="level-icon">📚</div>
                <div className="level-content">
                  <h3>Section Editors</h3>
                  <p>
                    Oversee specific geological disciplines and research areas
                  </p>
                </div>
              </div>
              <div className="structure-level">
                <div className="level-icon">🔍</div>
                <div className="level-content">
                  <h3>Managing Editors</h3>
                  <p>
                    Coordinate the peer review process and manuscript workflow
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="contact-card">
            <div className="contact-icon-large">💬</div>
            <div className="contact-content">
              <h3>Contact the Editorial Board</h3>
              <p>
                For questions about manuscript submissions, peer review process,
                or editorial policies, please contact our editorial office.
              </p>
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">📧</div>
                  <div className="method-details">
                    <h4>General Inquiries</h4>
                    <p>editorial@acu-jgs.edu.ng</p>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="method-icon">📞</div>
                  <div className="method-details">
                    <h4>Editorial Office</h4>
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

export default EditorialBoard;
