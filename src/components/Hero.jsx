import { FaArrowDown, FaCode, FaLaptopCode, FaDownload, FaAward, FaTrophy } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-name">Aderajew Tilahun</h1>
        <h2 className="hero-title">
          <span className="typing-text">Full-Stack Developer & Information Security Analyst</span>
        </h2>
        <p className="hero-description">
          Passionate about building modern web applications with React, Node.js, and MySQL.
          I create clean, secure, and scalable solutions. Currently working at Tsedey Bank.
        </p>
        
        <div className="hero-achievements">
          <div className="achievement-badge">
            <FaAward /> CGPA 3.95
          </div>
          <div className="achievement-badge">
            <FaTrophy /> Gold Medal Award
          </div>
          <div className="achievement-badge">
            <FaAward /> Exit Exam 80%
          </div>
        </div>
        
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            <FaLaptopCode /> View My Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            <FaCode /> Get In Touch
          </a>
          <a href="https://aderajewtilahun.github.io/portfolio/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-resume">
            <FaDownload /> Download Resume
          </a>
        </div>
        <div className="hero-scroll">
          <a href="#about" className="scroll-link">
            <FaArrowDown />
            <span>Scroll Down</span>
          </a>
        </div>
      </div>
      <div className="hero-background"></div>
    </section>
  );
};

export default Hero;
