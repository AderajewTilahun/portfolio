import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Property Management System",
      description: "Full-stack system using React, Node.js, and MySQL for managing properties, tenants, and payments.",
      technologies: ["React", "Node.js", "MySQL", "Express"],
      github: "https://github.com/aderajew/property-management",
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
      title: "Portfolio Website",
      description: "Professional responsive portfolio website showcasing projects and skills with modern design.",
      technologies: ["React", "CSS3", "React Icons"],
      github: "https://github.com/aderajew/portfolio",
      demo: "#"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce platform with cart functionality, product management, and order processing.",
      technologies: ["React", "Node.js", "MongoDB", "Redux"],
      github: "https://github.com/aderajew/ecommerce",
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
