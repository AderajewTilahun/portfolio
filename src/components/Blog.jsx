import { FaCalendar, FaTag, FaArrowRight } from "react-icons/fa";

const Blog = () => {
  const blogPosts = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Learn the best practices for building large-scale React applications with proper state management, code organization, and performance optimization techniques.",
      date: "June 2024",
      tags: ["React", "JavaScript", "Best Practices"],
      readTime: "8 min read",
      link: "#"
    },
    {
      title: "Mastering CSS Grid and Flexbox",
      excerpt: "A comprehensive guide to modern CSS layout techniques. Learn when to use Grid vs Flexbox and how to create responsive layouts with ease.",
      date: "May 2024",
      tags: ["CSS", "Web Design", "Responsive"],
      readTime: "6 min read",
      link: "#"
    },
    {
      title: "Node.js Performance Optimization",
      excerpt: "Discover techniques to optimize your Node.js applications for better performance, including caching strategies, database optimization, and async operations.",
      date: "April 2024",
      tags: ["Node.js", "Backend", "Performance"],
      readTime: "10 min read",
      link: "#"
    },
    {
      title: "Introduction to TypeScript",
      excerpt: "Get started with TypeScript and learn how it can improve your JavaScript development with type safety and better developer experience.",
      date: "March 2024",
      tags: ["TypeScript", "JavaScript", "Tutorial"],
      readTime: "7 min read",
      link: "#"
    },
    {
      title: "Building RESTful APIs with Express",
      excerpt: "Learn how to build robust RESTful APIs using Express.js, including routing, middleware, error handling, and authentication.",
      date: "February 2024",
      tags: ["Express", "API", "Backend"],
      readTime: "9 min read",
      link: "#"
    },
    {
      title: "Modern JavaScript Features You Should Know",
      excerpt: "Explore the latest JavaScript features including async/await, destructuring, spread operator, and more to write cleaner, more efficient code.",
      date: "January 2024",
      tags: ["JavaScript", "ES6+", "Tutorial"],
      readTime: "5 min read",
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
