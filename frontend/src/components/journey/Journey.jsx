import "./Journey.css";

const experiences = [
  {
    company: "Wabi Sabi Sustainability LLP",
    role: "Full Stack Developer Intern",
    period: "Sep 2025 - Feb 2026",
    description:
      "Worked on React, Django, REST APIs, database integration, and real-world business applications.",
    skills: ["React", "Django", "REST APIs", "Database Design"],
  },
  {
    company: "Sparrow Interactive Solutions pvt limited",
    role: "Full Stack Developer & AI Trainee",
    period: "Feb 2026 - Present",
    description:
      "Building AI-powered applications, RAG systems, LLM integrations, intelligent automation, and full-stack products.",
    skills: [
      "React",
      "Django",
      "AI",
      "RAG",
      "LangChain",
      "LLM Integration",
    ],
  },
];

function Journey() {
  return (
    <section className="journey section" id="journey">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Professional Journey</p>
          <h2>My Growth as a Developer</h2>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-card">
                <span className="timeline-period">{exp.period}</span>

                <h3>{exp.role}</h3>

                <h4>{exp.company}</h4>

                <p>{exp.description}</p>

                <div className="timeline-skills">
                  {exp.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey;