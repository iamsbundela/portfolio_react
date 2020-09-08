import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Techstack from "./components/Techstack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Techstack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
