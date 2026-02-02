// src/App.jsx
import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="app">
      
<header className="navbar">
  <div className="logo-wrap">
    <div className="logo-mark">NA</div>
    <div className="logo-text">
      <span className="logo-title">NovaAI</span>
      <span className="logo-subtitle">Consulting</span>
    </div>
  </div>

  <nav className="nav-links">
    <a href="#services">Services</a>
    <a href="#process">Process</a>
    <a href="#contact">Contact</a>
    <button
      className="nav-cta"
      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
    >
      Free strategy call
    </button>
  </nav>
</header>

      <main>
        <Hero />
        <Services />
        <Process />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
