import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mne405c", // ✅ Replace with your EmailJS Service ID
        "template_qenfqqe", // ✅ Replace with your EmailJS Template ID
        form.current,
        "uGw4RY1KcjgOFJ0w5"   // ✅ Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <div id="contact" className="contact-container">
      <h1 className="contact-heading">Contact Me</h1>

      <div className="contact-cards">
  <div className="contact-item">
    <FaEnvelope className="contact-icon personal" />
    <div>
      <h3>Personal Email</h3>
      <p>pavangudari@gmail.com</p>
    </div>
  </div>

  <div className="contact-item">
    <FaEnvelope className="contact-icon college" />
    <div>
      <h3>College Email</h3>
      <p>2200031956cseh@gmail.com</p>
    </div>
  </div>
</div>


      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <FaUser className="icon" />
          <input type="text" name="user_name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <FaEnvelope className="icon" />
          <input type="email" name="user_email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <FaPhone className="icon" />
          <input type="tel" name="user_phone" placeholder="Your Phone Number" />
        </div>
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit" className="send-btn">Send Message</button>
      </form>
    </div>
  );
}
