import { FaLightbulb, FaCode, FaChartLine, FaCheckCircle } from "react-icons/fa";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "E-Commerce Platform Redesign",
      problem: "The existing e-commerce platform had a 40% cart abandonment rate and slow page load times, resulting in lost revenue and poor user experience.",
      solution: "Implemented a complete frontend overhaul using React with lazy loading, optimized images, and improved checkout flow. Added real-time inventory updates and payment gateway integration.",
      results: [
        "Reduced cart abandonment by 35%",
        "Improved page load speed by 60%",
        "Increased conversion rate by 25%",
        "Enhanced mobile user experience"
      ],
      technologies: ["React", "Redux", "Node.js", "MongoDB", "Stripe"]
    },
    {
      title: "Real-Time Collaboration Tool",
      problem: "Remote teams struggled with project coordination, leading to missed deadlines and communication gaps across different time zones.",
      solution: "Built a real-time collaboration platform with WebSocket integration, featuring live document editing, task management, and video conferencing capabilities.",
      results: [
        "Improved team productivity by 40%",
        "Reduced project delivery time by 30%",
        "Enhanced communication across teams",
        "Increased user adoption to 500+ active users"
      ],
      technologies: ["React", "Socket.io", "Express", "PostgreSQL", "WebRTC"]
    },
    {
      title: "Healthcare Data Analytics Dashboard",
      problem: "Healthcare providers needed a way to visualize patient data and track health trends, but existing solutions were complex and not user-friendly.",
      solution: "Developed an intuitive dashboard with interactive charts, real-time data visualization, and HIPAA-compliant data handling. Implemented predictive analytics for patient outcomes.",
      results: [
        "Improved patient care decisions by 45%",
        "Reduced data analysis time by 70%",
        "Enhanced data security compliance",
        "Adopted by 15+ healthcare facilities"
      ],
      technologies: ["React", "D3.js", "Python", "TensorFlow", "AWS"]
    }
  ];

  return (
    <section id="case-studies" className="section">
      <div className="section-header">
        <h2>Case Studies</h2>
        <div className="section-line"></div>
      </div>

      <div className="case-studies-container">
        {caseStudies.map((study, index) => (
          <div key={index} className="case-study-card">
            <div className="case-study-header">
              <h3>{study.title}</h3>
            </div>

            <div className="case-study-content">
              <div className="case-study-section">
                <div className="case-study-icon">
                  <FaLightbulb />
                </div>
                <div>
                  <h4>The Problem</h4>
                  <p>{study.problem}</p>
                </div>
              </div>

              <div className="case-study-section">
                <div className="case-study-icon">
                  <FaCode />
                </div>
                <div>
                  <h4>The Solution</h4>
                  <p>{study.solution}</p>
                </div>
              </div>

              <div className="case-study-section">
                <div className="case-study-icon">
                  <FaChartLine />
                </div>
                <div>
                  <h4>Results</h4>
                  <ul className="results-list">
                    {study.results.map((result, i) => (
                      <li key={i}>
                        <FaCheckCircle /> {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="case-study-technologies">
                <h4>Technologies Used</h4>
                <div className="tech-tags">
                  {study.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
