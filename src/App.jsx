import React from "react";
import About from './components/AboutMe'
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
const App = () => {
  console.log("App is rendering");
  return (
      <div>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
          <BackToTop />
      </div>
  );
};

export default App
