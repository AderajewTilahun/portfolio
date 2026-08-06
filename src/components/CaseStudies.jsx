import { FaLightbulb, FaCode, FaChartLine, FaCheckCircle } from "react-icons/fa";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Construction Information Management System",
      problem: "Construction companies needed a simple way to track projects, manage documents, and coordinate with contractors without using paper-based systems.",
      solution: "Built a web application using React and Node.js with MySQL database. Created features for adding projects, uploading documents, assigning contractors, and tracking progress. Made it responsive so users can access from any device.",
      results: [
        "Reduced paperwork by 70%",
        "Made project information accessible to all team members",
        "Simplified document sharing and tracking",
        "Helped complete projects on time"
      ],
      technologies: ["React", "Node.js", "MySQL", "Express"]
    },
    {
      title: "Attendance Management System",
      problem: "Schools needed a better way to track student and teacher attendance instead of using paper registers that were hard to maintain and analyze.",
      solution: "Developed a full-stack application with React frontend and Node.js backend. Added features for marking attendance, viewing reports, managing student/teacher records, and generating monthly attendance summaries.",
      results: [
        "Reduced attendance recording time by 50%",
        "Made it easy to view attendance history",
        "Helped teachers track student participation",
        "Simplified report generation for administrators"
      ],
      technologies: ["React", "Node.js", "MySQL", "Redux"]
    },
    {
      title: "Face Recognition System",
      problem: "Organizations needed an automated way to track attendance and verify identity without manual checking, which was time-consuming and prone to errors.",
      solution: "Built an AI-powered face recognition system using Python, OpenCV, and TensorFlow. Created a web interface with Flask for users to register faces and view recognition results. Made it work with standard webcams.",
      results: [
        "Automated attendance tracking",
        "Reduced manual verification time",
        "Improved accuracy in identification",
        "Made the system easy to use for non-technical staff"
      ],
      technologies: ["Python", "OpenCV", "TensorFlow", "Flask"]
    },
    {
      title: "Chatting Application",
      problem: "Teams needed a simple way to communicate in real-time without relying on external messaging apps that might not be suitable for work discussions.",
      solution: "Created a real-time messaging app using React, Node.js, and Socket.io. Implemented user login, group chat creation, direct messaging, and file sharing. Made it work smoothly on both desktop and mobile.",
      results: [
        "Improved team communication",
        "Made it easy to share files within the app",
        "Reduced dependency on external messaging platforms",
        "Provided a simple interface for all users"
      ],
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"]
    },
    {
      title: "School Management System",
      problem: "Schools needed a comprehensive system to manage student enrollment, grades, attendance, and parent communication instead of using separate spreadsheets and paper records.",
      solution: "Developed a full-featured school management system with React frontend and Node.js backend. Added modules for student registration, grade management, attendance tracking, and parent communication portal.",
      results: [
        "Centralized all school operations in one system",
        "Made it easy for parents to track student progress",
        "Reduced administrative workload",
        "Improved data accuracy and accessibility"
      ],
      technologies: ["React", "Node.js", "MySQL", "Express"]
    },

    {
      title: "Internal Websites for Tsedey Bank",
      problem: "Tsedey Bank needed internal web applications to help employees with night shifts view their schedules, manage data, and access reports efficiently.",
      solution: "Developed an internal website using React, Node.js, and MySQL. Created dashboards for data visualization, management systems for various departments, and reporting tools. Made it secure and user-friendly for bank employees.",
      results: [
        "Improved employee productivity",
        "Made data access faster and easier",
        "Reduced manual data entry work",
        "Provided better tools for decision making"
      ],
      technologies: ["React", "Node.js", "MySQL"]
    },
    {
      title: "Overtime Scheduling System",
      problem: "Organizations needed a better way to manage employee overtime shifts, track hours, and know who is working when without using paper forms or spreadsheets.",
      solution: "Built a web application with React and Node.js for managing overtime shifts. time tracking, and generating reports. Made it easy for managers and employees to manage overtime schedules.",
      results: [
        "Reduced paperwork and manual tracking",
        "Improved visibility of overtime hours"
      ],
      technologies: ["React", "Node.js", "MySQL", "Express"]
    },
    {
      title: "Summary preparation website for Tsedey Bank For SOC",
      problem: "Teams needed a centralized view of key metrics and data from multiple sources instead of checking different systems and spreadsheets.",
      solution: "Created a dashboard application using React and Node.js with Chart.js for data visualization. Integrated with multiple data sources to display summaries in one place. Made it customizable and easy to understand for users.",
      results: [
        "Centralized data from multiple sources",
        "Made it easier to track key metrics",
        "Reduced time spent on generating summaries",
        "Provided clear visual insights"
      ],
      technologies: ["React", "Node.js", "Chart.js", "MySQL"]
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
