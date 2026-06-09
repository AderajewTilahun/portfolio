import { FaCalendar, FaTag, FaArrowRight } from "react-icons/fa";

const Blog = () => {
  const blogPosts = [
    {
      title: "Building Secure Web Applications",
      excerpt: "Essential security practices for web development including authentication, data validation, and protection against common vulnerabilities.",
      date: "June 2024",
      tags: ["Security", "Web Development", "Best Practices"],
      readTime: "8 min read",
      link: "#"
    },
    {
      title: "Full-Stack Development with React and Node.js",
      excerpt: "Complete guide to building full-stack applications using React for frontend and Node.js for backend with RESTful APIs.",
      date: "May 2024",
      tags: ["React", "Node.js", "Full-Stack"],
      readTime: "10 min read",
      link: "#"
    },
    {
      title: "Database Design: MySQL vs PostgreSQL",
      excerpt: "Comparing MySQL and PostgreSQL for different use cases, including performance, features, and when to choose each database.",
      date: "April 2024",
      tags: ["Database", "MySQL", "PostgreSQL"],
      readTime: "7 min read",
      link: "#"
    },
    {
      title: "Building Face Recognition Systems with Python",
      excerpt: "Introduction to computer vision using Python, OpenCV, and TensorFlow for building face recognition applications.",
      date: "March 2024",
      tags: ["Python", "AI", "Computer Vision"],
      readTime: "12 min read",
      link: "#"
    },
    {
      title: "Real-Time Applications with Socket.io",
      excerpt: "Learn how to build real-time messaging and collaboration applications using Socket.io and Node.js.",
      date: "February 2024",
      tags: ["Socket.io", "Real-Time", "Node.js"],
      readTime: "9 min read",
      link: "#"
    },
    {
      title: "Information Security in Banking Systems",
      excerpt: "Understanding security requirements for banking applications, including encryption, access control, and compliance.",
      date: "January 2024",
      tags: ["Security", "Banking", "Cyber Security"],
      readTime: "11 min read",
      link: "#"
    }
  ];

  return (
    <section id="blog" className="section">
      <div className="section-header">
        <h2>Blog</h2>
        <div className="section-line"></div>
      </div>

      <div className="blog-container">
        {blogPosts.map((post, index) => (
          <article key={index} className="blog-card">
            <div className="blog-content">
              <div className="blog-meta">
                <span className="blog-date">
                  <FaCalendar /> {post.date}
                </span>
                <span className="blog-read-time">{post.readTime}</span>
              </div>

              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>

              <div className="blog-tags">
                {post.tags.map((tag, i) => (
                  <span key={i} className="blog-tag">
                    <FaTag /> {tag}
                  </span>
                ))}
              </div>

              <a href={post.link} className="blog-link">
                Read More <FaArrowRight />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
