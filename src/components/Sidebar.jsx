import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaDownload
} from "react-icons/fa";
import "../css/Sidebar.css";
import profileImg from "../assets/profile.png";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {/* Profile Image */}
      <img src={profileImg} alt="Aderajew Tilahun" className="profile-img" />

      {/* Name & Title */}
      <h2 className="name">Aderajew Tilahun</h2>
      <p className="title">Full Stack Developer</p>

      {/* Resume Button */}
      <a href="./resume.pdf" download className="resume-btn">
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
  );
};

export default Sidebar;
