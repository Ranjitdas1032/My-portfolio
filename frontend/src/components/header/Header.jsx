import "./header.css";
import { FiDownload } from "react-icons/fi";

function Header({ onOpenJobAnalyzer }) {
  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="logo">
          AI<span>Portfolio</span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#journey">Journey</a>
          <a href="#certifications">Certifications</a>
          <a href="#resume">Resume</a>
          <a href="#skills">Skills</a>
          <a href="#snapshot">Snapshot</a>
          <a href="#leetcode">LeetCode</a>
          <a href="#projects">Projects</a>
          <a href="#chatbot">Chatbot</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="jd-btn" onClick={onOpenJobAnalyzer}>
  Add JD
</button>
      </div>
    </header>
  );
}

export default Header;