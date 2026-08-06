import { useState, useEffect } from "react";
import { FaUserGraduate, FaBriefcase, FaLightbulb, FaShieldAlt, FaAward } from "react-icons/fa";

const About = () => {
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const fullText = "I am a passionate Full-Stack Developer and Information Security Analyst with experience in designing, developing, and securing modern web applications. My technical expertise includes React.js, Node.js, Express.js, MySQL, and RESTful APIs, enabling me to build scalable, efficient, and user-friendly solutions. Currently, I work as an Information Security Analyst at Tsedey Bank, where I monitor security events, investigate incidents, analyze threats, and support the organization's cybersecurity operations. My combined background in software development and cybersecurity allows me to build solutions that are not only functional and scalable but also secure by design. I am continuously expanding my knowledge in cloud technologies, cybersecurity, and modern software engineering practices, with a strong passion for problem-solving, innovation, and delivering impactful digital solutions.";

  useEffect(() => {
    let index = 0;
    const typingSpeed = 20;

    const typeNextChar = () => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
        setTimeout(typeNextChar, typingSpeed);
      } else {
        setIsTyping(false);
      }
    };

    typeNextChar();

    return () => {
      clearTimeout(typeNextChar);
    };
  }, []);

  return (
    <section id="about" className="section">
      <div className="section-header">
        <h2>About Me</h2>
        <div className="section-line"></div>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p className="about-intro">
            {typedText}
            {isTyping && <span className="typing-cursor">|</span>}
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
