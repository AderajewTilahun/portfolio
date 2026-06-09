import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Construction Information Management System",
      description: "Full-stack system using React, Node.js, and MySQL for managing properties, consultants, and contractors with real-time updates.",
      technologies: ["React", "Node.js", "MySQL", "Express"],
      github: "https://github.com/aderajew/construction-information-management",
      demo: "#"
    },
    {
      title: "Attendance Management System",
      description: "Full-featured attendance management platform with student management, teacher management, and attendance tracking with reporting.",
      technologies: ["React", "Node.js", "MongoDB", "Redux"],
      github: "https://github.com/aderajew/attendance-management",
      demo: "#"
    },
    {
      title: "Bus Reservation System",
      description: "Online seat booking system with payment integration, real-time availability, and user authentication.",
      technologies: ["React", "Node.js", "MySQL", "Stripe"],
      github: "https://github.com/aderajew/bus-reservation",
      demo: "#"
    },
    {
      title: "Face Recognition System",
      description: "AI-powered face recognition system for attendance tracking and security using Python and machine learning libraries.",
      technologies: ["Python", "OpenCV", "TensorFlow", "Flask"],
      github: "https://github.com/aderajew/face-recognition",
      demo: "#"
    },
    {
      title: "Chatting Application",
      description: "Real-time messaging application with user authentication, group chats, and file sharing capabilities using WebSocket.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "https://github.com/aderajew/chatting-app",
      demo: "#"
    },
    {
      title: "School Management System",
      description: "Comprehensive school management system with student enrollment, grade management, attendance, and parent communication.",
      technologies: ["React", "Node.js", "MySQL", "Express"],
      github: "https://github.com/aderajew/school-management",
      demo: "#"
    },
    {
      title: "Portfolio Website",
      description: "Professional responsive portfolio website showcasing projects, skills, and achievements with modern design and dark mode.",
      technologies: ["React", "CSS3", "React Icons", "EmailJS"],
      github: "https://github.com/aderajew/portfolio",
      demo: "https://aderajewtilahun.github.io/portfolio"
    },
    {
      title: "Tsedey Bank Websites",
      description: "Multiple internal websites and web applications developed for Tsedey Bank including dashboards and management systems.",
      technologies: ["React", "Node.js", "MySQL"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="section-header">
        <h2>Featured Projects</h2>
        <div className="section-line"></div>
      </div>
      
      <div className="projects">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <div className="project-placeholder">
                <span className="project-initials">{project.title.charAt(0)}</span>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub /> Code
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
