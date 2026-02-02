// src/components/Footer.jsx
import React from "react";

// Footer.jsx
const Footer = () => (
  <footer className="footer">
    <div className="footer-main">
      <div className="footer-brand">
        <div className="footer-logo">NA</div>
        <div>
          <p className="footer-title">NovaAI Consulting</p>
          <p className="footer-tagline">Applied AI for real-world teams.</p>
        </div>
      </div>

      <div className="footer-columns">
        <div className="footer-col">
          <p className="footer-heading">Navigate</p>
          <a href="#services">Services</a>
          <a href="#process">How we work</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-col">
          <p className="footer-heading">Contact</p>
          <p>hello@novaai.consulting</p>
          <p>India • Remote worldwide</p>
        </div>
        <div className="footer-col">
          <p className="footer-heading">Next step</p>
          <button
            className="footer-cta"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Book a 30‑min call
          </button>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© {new Date().getFullYear()} NovaAI Consulting. All rights reserved.</p>
      <div className="footer-bottom-links">
        <span>Privacy</span>
        <span>Terms</span>
      </div>
    </div>
  </footer>
);


export default Footer;
