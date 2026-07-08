import "./skill.css";
import { profile } from "../../data/profiledata";

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Skills</p>
          <h2>Technology stack I use to build real products.</h2>
        </div>

        <div className="skills-grid">
          {Object.entries(profile.skills).map(([category, items]) => (
            <div className="skill-box" key={category}>
              <h3>{category.toUpperCase()}</h3>

              <div className="skill-list">
                {items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;