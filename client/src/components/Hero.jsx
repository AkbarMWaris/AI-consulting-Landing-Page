// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-badge">AI Consulting for Modern Businesses</span>
        <h1>
          Turn your data into <span className="accent">decisions</span>, not dashboards.
        </h1>
        <p>
          We help teams design, build, and ship AI solutions that actually ship to production –
          from strategy to implementation.
        </p>
        <div className="hero-actions">
          <button className="btn primary" onClick={handleScrollToContact}>
            Book a strategy call
          </button>
          <button className="btn secondary" onClick={handleScrollToServices}>
            View services
          </button>
        </div>
        <ul className="hero-micro">
          <li>LLM-powered internal tools</li>
          <li>Process automation & copilots</li>
          <li>End-to-end AI product strategy</li>
        </ul>
      </div>

      <div className="hero-visual">
        <div className="hero-card">
          <p>Average response automation</p>
          <h3>+47%</h3>
        </div>
        <div className="hero-card">
          <p>Manual ops cost saved</p>
          <h3>30–60%</h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;
