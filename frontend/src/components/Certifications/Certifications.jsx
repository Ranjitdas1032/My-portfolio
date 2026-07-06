import "./Certifications.css";

import googleCertificate from "../../assets/certificates/google-contributor.png";
import microsoftCertificate from "../../assets/certificates/microsoft-ai-intern.png";

const certifications = [
  {
    title: "Google Contributor",
    issuer: "Google",
    type: "Contributor Recognition",
    image: googleCertificate,
    description:
      "Recognition for contribution in the Google developer ecosystem and community participation.",
  },
  {
    title: "Microsoft AI Intern",
    issuer: "Microsoft",
    type: "AI Internship",
    image: microsoftCertificate,
    description:
      "AI-focused internship experience involving artificial intelligence concepts, practical AI tools, and solution-oriented learning.",
  },
];

function Certifications() {
  return (
    <section className="certifications section" id="certifications">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Certifications</p>
          <h2>Verified learning and contribution milestones.</h2>
        </div>

        <div className="certification-grid">
          {certifications.map((cert) => (
            <article className="certification-card" key={cert.title}>
              <div className="certification-image">
                <img src={cert.image} alt={cert.title} />
              </div>

              <div className="certification-content">
                <span>{cert.type}</span>
                <h3>{cert.title}</h3>
                <h4>{cert.issuer}</h4>
                <p>{cert.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;