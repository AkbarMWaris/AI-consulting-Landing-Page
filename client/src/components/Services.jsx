// src/components/Services.jsx
import React from "react";

const services = [
  {
    title: "AI Strategy Sprint",
    description:
      "Identify high-ROI AI opportunities, prioritize use cases, and define a 90‑day roadmap.",
  },
  {
    title: "LLM Product Prototyping",
    description:
      "Design and build GPT-style copilots, chatbots, and assistants tailored to your workflows.",
  },
  {
    title: "Automation & Integration",
    description:
      "Automate repetitive operations by connecting your tools, CRMs, and internal systems.",
  },
  {
    title: "Team Enablement",
    description:
      "Train your team on prompt design, AI safety, and how to work with new AI tools.",
  },
];

const Services = () => (
  <section id="services" className="section">
    <div className="section-header">
      <h2>Services we offer</h2>
      <p>Engage us end‑to‑end or plug us into a specific phase of your AI journey.</p>
    </div>
    <div className="grid">
      {services.map((s) => (
        <div key={s.title} className="card">
          <h3>{s.title}</h3>
          <p>{s.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
