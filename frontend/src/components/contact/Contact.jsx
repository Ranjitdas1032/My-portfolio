import { useState } from "react";
import "./contact.css";
import { sendContactMessage } from "../../services/contactApi";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await sendContactMessage(formData);

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container contact-container">
        <div className="section-header">
          <p className="section-tag">Contact</p>
          <h2>Let’s build something useful together.</h2>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="text"
            name="company"
            placeholder="Company / Organization"
            value={formData.company}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Tell me about your opportunity or project..."
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="success-msg">Message sent successfully!</p>
          )}

          {status === "error" && (
            <p className="error-msg">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;