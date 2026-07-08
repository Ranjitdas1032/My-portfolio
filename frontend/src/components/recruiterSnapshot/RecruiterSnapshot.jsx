import "./RecruiterSnapshot.css";

const snapshotItems = [
  {
    value: "500+",
    label: "LeetCode Problems",
    description: "Strong problem-solving consistency.",
  },
  {
    value: "2",
    label: "Professional Roles",
    description: "Full Stack and AI internship experience.",
  },
  {
    value: "React + Django",
    label: "Full Stack",
    description: "Frontend, backend, APIs, and integrations.",
  },
  {
    value: "AI/RAG",
    label: "AI Projects",
    description: "Chatbot, JD analyzer, and LLM features.",
  },
  {
    value: "Google + Microsoft",
    label: "Certifications",
    description: "Contributor recognition and AI internship.",
  },
  {
    value: "Docker + CI/CD",
    label: "Production Ready",
    description: "Deployment-focused engineering mindset.",
  },
];

function RecruiterSnapshot() {
  return (
    <section className="snapshot section" id="snapshot">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Recruiter Snapshot</p>
          <h2>Quick proof that I can build and learn fast.</h2>
        </div>

        <div className="snapshot-grid">
          {snapshotItems.map((item) => (
            <div className="snapshot-card" key={item.label}>
              <h3>{item.value}</h3>
              <h4>{item.label}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecruiterSnapshot;