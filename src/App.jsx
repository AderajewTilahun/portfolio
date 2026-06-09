import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CaseStudies from "./components/CaseStudies";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import BackToTop from "./components/BackToTop";
import { ThemeProvider } from "./context/ThemeContext";
import "./styles.css";

const App = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll(".section");
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <ThemeProvider>
      <Sidebar />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CaseStudies />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
      <BackToTop />
    </ThemeProvider>
  );
};

export default App;
