// src/components/Process.jsx
import React from "react";
import Tilt from "./Tilt";

const steps = [
  {
    step: "01",
    title: "Discovery",
    description: "We map your current workflows, data, and constraints in a 60‑minute call.",
  },
  {
    step: "02",
    title: "Opportunity mapping",
    description: "We identify the top 2–3 AI use cases and define success metrics.",
  },
  {
    step: "03",
    title: "Prototype & iterate",
    description: "We ship a working pilot, then iterate with real user feedback. just adding some text to check",
  },
  {
    step: "04",
    title: "Scale & handover",
    description: "We harden, monitor, and document the solution for your team.its text is the main issue for this",
  },
];

const Process = () => (
  <section id="process" className="section section-alt">
    <div className="section-header">
      <h2>How we work</h2>
      <p>Clear, low‑risk engagement from first call to production rollout.</p>
    </div>
    <div className="process-grid">
      {steps.map((s) => (
        <Tilt key={s.step} maxTilt={18} glare className="tilt-wrapper">
          <div className="process-card">
            <span className="step-badge">{s.step}</span>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
          </div>
        </Tilt>
      ))}
    </div>
  </section>
);

export default Process;
