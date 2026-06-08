import { FaUserGraduate, FaBriefcase, FaLightbulb } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="section-header">
        <h2>About Me</h2>
        <div className="section-line"></div>
      </div>
      
      <div className="about-content">
        <div className="about-text">
          <p className="about-intro">
            I am a passionate full-stack developer experienced in building
            modern web applications using React, Node.js, and MySQL.
            I focus on clean UI, secure systems, and scalable backend solutions.
          </p>
          
          <div className="about-details">
            <div className="about-item">
              <FaUserGraduate className="about-icon" />
              <div>
                <h3>Education</h3>
                <p>Bachelor's Degree in Computer Science</p>
              </div>
            </div>
            
            <div className="about-item">
              <FaBriefcase className="about-icon" />
              <div>
                <h3>Experience</h3>
                <p>Full-Stack Development & Software Engineering</p>
              </div>
            </div>
            
            <div className="about-item">
              <FaLightbulb className="about-icon" />
              <div>
                <h3>Focus</h3>
                <p>Building scalable, secure, and user-friendly applications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
