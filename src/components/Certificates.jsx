import { FaAward } from "react-icons/fa";
import cert1 from "../assets/certificate-1.PNG";
import cert2 from "../assets/certificate-2.PNG";
import cert3 from "../assets/certificate-3.PNG";
import cert4 from "../assets/certificate-4.PNG";
import cert5 from "../assets/certificate-5.PNG";
import cert6 from "../assets/certificate-6.PNG";
import cert7 from "../assets/certificate-7.PNG";

const Certificates = () => {
  const certificates = [
    {
      title: " fundamental of python programming ",
      issuer: "CAMBRIDGE INTERNATIONAL QUALIFICATION (CIQ)",
      date: "2026",
      description:
        "Successfully completed the Fundamentals of Python Programming certification, covering core Python concepts including variables, data types, operators, control structures, functions, modules, file handling, and object-oriented programming. Developed practical skills in writing efficient Python code, problem-solving, debugging, and building foundational applications for software development and automation.",
      credentialId: "CIQ-261745494.CR641",
      image: cert1,
    },
    {
      title: "Data Analysis with Python ",
      issuer: "UDACITY",
      date: "2026",
      description:
        "Successfully completed the Data Analysis with Python certification, covering core Python concepts including variables, data types, operators, control structures, functions, modules, file handling, and object-oriented programming. Developed practical skills in writing efficient Python code, problem-solving, debugging, and building foundational applications for software development and automation.",
      credentialId: "UDACITY-261745494.CR641",
      image: cert2,
    },
    {
      title: "Artificial Intelligence",
      issuer: "UDACITY",
      date: "2026",
      description:
        "Successfully completed the Artificial Intelligence certification, gaining knowledge in machine learning fundamentals, neural networks, natural language processing, computer vision, and AI-driven problem-solving techniques. Developed practical skills in building intelligent systems, analyzing data, and applying AI models to real-world applications.",
      credentialId: "UDACITY-AI-261745494",
      image: cert3,
    },
    {
      title: "Programming Fundamentals",
      issuer: "UDACITY",
      date: "2026",
      description:
        "Successfully completed the Programming Fundamentals certification, covering essential programming concepts including algorithms, data structures, variables, control flow, functions, object-oriented programming, debugging, and software development best practices. Strengthened problem-solving abilities and coding skills across modern programming environments.",
      credentialId: "UDACITY-PROG-261745494",
      image: cert4,
    },
    {
      title: "Android Development",
      issuer: "UDACITY",
      date: "2026",
      description:
        "Successfully completed the Android Development certification, focusing on designing and building mobile applications using Android Studio. Gained hands-on experience in user interface design, activities, intents, data storage, API integration, debugging, and deploying responsive Android applications following industry best practices.",
      credentialId: "UDACITY-ANDROID-261745494",
      image: cert5,
    },
    {
      title: "networking device and basic configuration",
      issuer: "Cisco",
      date: "2026",
      description:
        "Successfully completed the networking device and basic configuration certification.",
      image: cert6,
    },
    {
      title: "Networking basics",
      issuer: "Cisco",
      date: "2026",
      description:
        "Successfully completed the basics of networking certification.",
      image: cert7,
    },
  ];

  return (
    <section id="certificates" className="section">
      <div className="section-header">
        <h2>Certificates</h2>
        <div className="section-line"></div>
      </div>

      <div className="certificates-container">
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-card">
            <div className="certificate-image">
              {cert.image ? (
                <a href={cert.image} target="_blank" rel="noopener noreferrer">
                  <img src={cert.image} alt={cert.title} />
                </a>
              ) : (
                <div className="certificate-placeholder">
                  <FaAward />
                </div>
              )}
            </div>
            <div className="certificate-content">
              <h3>{cert.title}</h3>
              <div className="certificate-meta">
                <span className="certificate-issuer">{cert.issuer}</span>
                <span className="certificate-date">{cert.date}</span>
              </div>
              <p className="certificate-description">{cert.description}</p>
              <div className="certificate-footer">
                <span className="credential-id">ID: {cert.credentialId}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
