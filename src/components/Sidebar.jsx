import { useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaBars,
  FaTimes
} from "react-icons/fa";
import "../css/Sidebar.css";
import profileImg from "../assets/profile.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Menu Button (Mobile Only) */}
      <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <aside className={`sidebar ${isOpen ? "active" : ""}`}>
        {/* Profile Image */}
        <img src={profileImg} alt="Aderajew Tilahun" className="profile-img" />

        {/* Name & Title */}
        <h2 className="name">Aderajew Tilahun</h2>
        <p className="title">Full Stack Developer</p>

        {/* Resume Button */}
        <a href="https://aderajewtilahun.github.io/portfolio/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
          <FaDownload /> Download Resume
        </a>

        {/* Contact Links */}
        <div className="contact-links">
          <a href="mailto:aderajewtilahun495@gmail.com">
            <FaEnvelope /> aderajewtilahun495@gmail.com
          </a>

          <a
            href="https://github.com/aderajew"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> github.com/aderajew
          </a>

          <a
            href="https://www.linkedin.com/in/aderajew"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> linkedin.com/in/aderajew
          </a>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
