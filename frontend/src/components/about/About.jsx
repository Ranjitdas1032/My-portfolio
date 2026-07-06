import "./about.css";
import { profile } from "../../data/profileData";

function About() {
  return (
    <section className="about section" id="about">
      <div className="container about-container">
        <div className="section-header">
          <p className="section-tag">About Me</p>
          <h2>Developer with full-stack and AI product mindset.</h2>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <h3>Who I Am</h3>
            <p>{profile.summary}</p>
          </div>

          <div className="about-card">
            <h3>What I Build</h3>
            <p>
              I focus on building practical, production-ready applications:
              dashboards, APIs, AI tools, automation systems, and recruiter-ready
              portfolio products.
            </p>
          </div>

          <div className="about-card">
            <h3>Current Direction</h3>
            <p>
              I am improving in industrial AI development using RAG, LangChain,
              vector databases, deployment workflows, testing, and CI/CD.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;