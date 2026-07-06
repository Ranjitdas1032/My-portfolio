import { useState } from "react";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import About from "../components/About/About";
import Skill from "../components/Skills/Skill";
import Project from "../components/Project/Project";
import Contact from "../components/Contact/Contact";
import LeetCodeStats from "../components/LeetCodeStats/LeetCodeStats";
import Chatbot from "../components/Chatbot/Chatbot";
import JobAnalyzer from "../components/JobAnalyzer/JobAnalyzer";
import Footer from "../components/Footer/Footer";
import Journey from "../components/Journey/Journey";
import Certifications from "../components/Certifications/Certifications";
import ResumeHub from "../components/ResumeHub/ResumeHub";
import RecruiterSnapshot from "../components/RecruiterSnapshot/RecruiterSnapshot";
function Home() {
   const [isJobAnalyzerOpen, setIsJobAnalyzerOpen] = useState(false);
  return (
    <>
      <Header onOpenJobAnalyzer={() => setIsJobAnalyzerOpen(true)} />
      <main>
        <Hero />
         <About />
         <Journey />
         <Certifications />
         <ResumeHub />
         <RecruiterSnapshot />
        <Skill />
        <LeetCodeStats />
        <Project />
        <Chatbot />
        <Contact />
        <Footer />
      </main>
      <JobAnalyzer
        isOpen={isJobAnalyzerOpen}
        onClose={() => setIsJobAnalyzerOpen(false)}
      />
    </>
  );
}

export default Home;