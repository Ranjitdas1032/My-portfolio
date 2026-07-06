import "./hero.css";
import { motion } from "framer-motion";
import { FaReact, FaPython, FaDocker } from "react-icons/fa";
import { SiDjango, SiRedux, SiLangchain } from "react-icons/si";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-blur hero-blur-one"></div>
      <div className="hero-bg-blur hero-blur-two"></div>

      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero-badge">Available for Full Stack & AI Roles</p>

          <h1>
            Hi, I'm <span>Ranjit Das</span>
            <br />
            Full Stack Developer building AI-powered products.
          </h1>

          <p className="hero-description">
            I build production-ready web applications using React, Django,
            Redux, Docker, CI/CD, and RAG-based AI systems.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="primary-btn">
              Hire Me
            </a>
            <a href="/resume.pdf" className="secondary-btn" download>
              Download Resume
            </a>
          </div>

          <div className="hero-stack">
            <span><FaReact /> React</span>
            <span><SiDjango /> Django</span>
            <span><SiRedux /> Redux</span>
            <span><FaDocker /> Docker</span>
            <span><SiLangchain /> RAG</span>
            <span><FaPython /> Python</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-card"
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="terminal-header">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="terminal-body">
            <p><span>$</span> developer.profile()</p>
            <p>{"{"}</p>
            <p> role: "Full Stack + AI Developer",</p>
            <p> stack: ["React", "Django", "Docker", "RAG"],</p>
            <p> status: "Ready to Build"</p>
            <p>{"}"}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;