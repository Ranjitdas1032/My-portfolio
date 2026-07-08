import "./project.css";
import { profile } from "../../data/profiledata";

function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Projects</p>
          <h2>Selected projects that show practical engineering skills.</h2>
        </div>

        <div className="projects-grid">
          {profile.projects.map((project) => (
            <article className="project-card" key={project.title}>
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.github}>GitHub</a>
                <a href={project.live}>Live Demo</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;