// src/components/Contact.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus({
            type: "success",
            message: "Thanks! We’ll get back to you within one business day.",
          });
          formRef.current.reset();
        },
        () => {
          setStatus({
            type: "error",
            message: "Something went wrong. Please try again or email us directly.",
          });
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="contact" className="section">
      <div className="section-header">
        <h2>Tell us about your project</h2>
        <p>Share a bit about your use case and we’ll schedule a free 30‑minute consultation.</p>
      </div>

      <div className="contact-layout">
        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <div className="field-group">
            <label htmlFor="name">Name</label>
            <input id="name" name="user_name" required placeholder="Jane Doe" />
          </div>

          <div className="field-group">
            <label htmlFor="email">Work email</label>
            <input
              id="email"
              type="email"
              name="user_email"
              required
              placeholder="you@company.com"
            />
          </div>

          <div className="field-group">
            <label htmlFor="company">Company</label>
            <input id="company" name="user_company" placeholder="Acme Inc." />
          </div>

          <div className="field-group">
            <label htmlFor="budget">Rough budget</label>
            <select id="budget" name="user_budget" defaultValue="">
              <option value="" disabled>
                Select a range
              </option>
              <option value="<2L">Under ₹2L</option>
              <option value="2-5L">₹2L – ₹5L</option>
              <option value="5-10L">₹5L – ₹10L</option>
              <option value=">10L">₹10L+</option>
            </select>
          </div>

          <div className="field-group">
            <label htmlFor="message">What are you trying to build?</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Describe your current process and where you think AI could help..."
            />
          </div>

          <button className="btn primary full-width" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send message"}
          </button>

          {status.message && (
            <p className={`status ${status.type === "error" ? "status-error" : "status-success"}`}>
              {status.message}
            </p>
          )}
        </form>

        <div className="contact-aside">
          <h3>Prefer email?</h3>
          <p>Drop us a note directly and we’ll respond within one business day.</p>
          <p className="contact-email">hello@novaai.consulting</p>
          <p className="contact-note">Based in India • Available globally</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
