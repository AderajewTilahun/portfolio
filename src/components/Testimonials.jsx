import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Teacher Abrham Belete",
      role: "Ict Director of Directorate",
      company: "Mekdela Amba University",
      content: "Aderajew is an exceptional student with a strong grasp of programming concepts. His dedication to learning and ability to apply theoretical knowledge to practical projects is outstanding. He consistently demonstrates excellent problem-solving skills in his coursework.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "Teacher Leweyew",
      role: "Department Head",
      company: "Computing and Informatics College, Mekdela Amba University",
      content: "Aderajew shows remarkable enthusiasm for web development. His final year project was one of the best in the class, showcasing his ability to build complete, functional applications. He is always eager to learn new technologies and help his peers.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "Teacher Melese Alemante",
      role: "College Director",
      company: "Computing and Informatics College, Mekdela Amba University",
      content: "Aderajew is a promising young developer with a bright future ahead. His academic performance has been consistently excellent, and he has shown great potential in full-stack development. I highly recommend him for any development opportunity.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/3.jpg"
    }
  ];

  return (
    <section id="testimonials" className="section">
      <div className="section-header">
        <h2>Testimonials</h2>
        <div className="section-line"></div>
      </div>

      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-icon">
              <FaQuoteLeft />
            </div>
            
            <div className="testimonial-content">
              <p className="testimonial-text">"{testimonial.content}"</p>
              
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="star" />
                ))}
              </div>
              
              <div className="testimonial-author">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="author-image"
                />
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                  <p className="author-company">{testimonial.company}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
