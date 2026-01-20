import React from "react";
import "../assets/css/Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>
          If you have any questions or inquiries, please don't hesitate to
          contact me.
        </p>

        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Name" required></input>
          </div>

          <div className="form-group">
            <input type="email" placeholder="Email" required></input>
          </div>

          <div className="form-group">
            <textarea placeholder="Message" required></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
