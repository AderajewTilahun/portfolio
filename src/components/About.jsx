import { FaUserGraduate, FaBriefcase, FaLightbulb, FaShieldAlt, FaAward } from "react-icons/fa";

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
            Currently working as Information Security Analyst at Tsedey Bank.
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
              <FaAward className="about-icon" />
              <div>
                <h3>Academic Achievements</h3>
                <p>CGPA 3.95 • National Exit Exam 80% • Gold Medal Award</p>
              </div>
            </div>
            
            <div className="about-item">
              <FaShieldAlt className="about-icon" />
              <div>
                <h3>Current Role</h3>
                <p>Information Security Analyst at Tsedey Bank (Since August 26)</p>
              </div>
            </div>
            
            <div className="about-item">
              <FaBriefcase className="about-icon" />
              <div>
                <h3>Development Experience</h3>
                <p>Full-Stack Development & Software Engineering</p>
              </div>
            </div>
            
            <div className="about-item">
              <FaLightbulb className="about-icon" />
              <div>
                <h3>Learning Focus</h3>
                <p>New Technologies, Graphics Design, Cyber Security</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
