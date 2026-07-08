import { useState } from "react";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Skill from "../components/skills/Skill";
import Project from "../components/project/Project";
import Contact from "../components/contact/Contact";
import LeetCodeStats from "../components/leetCodeStats/LeetCodeStats";
import Chatbot from "../components/chatbot/Chatbot";
import JobAnalyzer from "../components/jobAnalyzer/JobAnalyzer";
import Footer from "../components/footer/Footer";
import Journey from "../components/journey/Journey";
import Certifications from "../components/certifications/Certifications";
import ResumeHub from "../components/resumeHub/ResumeHub";
import RecruiterSnapshot from "../components/recruiterSnapshot/RecruiterSnapshot";
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