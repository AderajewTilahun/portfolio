import { FaArrowDown, FaCode, FaLaptopCode, FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-name">Aderajew Tilahun</h1>
        <h2 className="hero-title">
          <span className="typing-text">Full-Stack Developer</span>
        </h2>
        <p className="hero-description">
          Passionate about building modern web applications with React, Node.js, and MySQL.
          I create clean, secure, and scalable solutions.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            <FaLaptopCode /> View My Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            <FaCode /> Get In Touch
          </a>
          <a href="/resume.pdf" download className="btn btn-resume">
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
