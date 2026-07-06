import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div>
          <h3>AI Portfolio OS</h3>
          <p>Full Stack Developer + AI/RAG Portfolio</p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#chatbot">Chatbot</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} Built with React, Django and AI.
      </p>
    </footer>
  );
}

export default Footer;