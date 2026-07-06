import "./ResumeHub.css";
import resumePdf from "../../assets/resume/resume.pdf";

function ResumeHub() {
  return (
    <section className="resume-hub section" id="resume">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Resume</p>
          <h2>Download my latest professional resume.</h2>
        </div>

        <div className="resume-card">
          <div className="resume-content">
            <span className="resume-badge">Latest Resume</span>

            <h3>Full Stack Developer + AI Intern</h3>

            <p>
              A recruiter-ready resume covering my full-stack development
              journey, AI/RAG work, projects, certifications, and technical
              skills.
            </p>

            <div className="resume-points">
              <span>✓ React + Django</span>
              <span>✓ AI/RAG Projects</span>
              <span>✓ WAbi Sabi Experience</span>
              <span>✓ Google + Microsoft Certifications</span>
              <span>✓ 500+ LeetCode Problems</span>
            </div>

            <div className="resume-actions">
              <a href={resumePdf} download className="resume-download">
                Download PDF
              </a>

              <a
                href={resumePdf}
                target="_blank"
                rel="noreferrer"
                className="resume-view"
              >
                View Resume
              </a>
            </div>
          </div>

          <div className="resume-preview">
            <div className="resume-paper">
              <h4>Resume Preview</h4>
              <p>Full Stack Developer</p>
              <p>AI/RAG Projects</p>
              <p>React • Django • Docker</p>
              <p>Microsoft AI Intern</p>
              <p>Google Contributor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumeHub;