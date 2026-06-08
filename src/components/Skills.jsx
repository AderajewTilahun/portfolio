import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from "react-icons/fa";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      icon: <FaReact />,
      skills: ["React.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"]
    },
    {
      category: "Backend",
      icon: <FaNodeJs />,
      skills: ["Node.js", "Express.js", "PHP", "REST APIs"]
    },
    {
      category: "Database",
      icon: <FaDatabase />,
      skills: ["MySQL", "MongoDB", "PostgreSQL"]
    },
    {
      category: "Tools",
      icon: <FaGitAlt />,
      skills: ["Git", "NPM", "VS Code", "Postman"]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="section-header">
        <h2>Skills & Technologies</h2>
        <div className="section-line"></div>
      </div>
      
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div className="skill-category" key={index}>
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h3>{category.category}</h3>
            </div>
            <div className="category-skills">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
