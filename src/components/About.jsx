import React from "react";
import "../assets/css/About.css";

export default function About() {
  return (
    <section className="about" id="aboutme">
      <div className="about-container">
        {/* Left Side Image */}
        <div className="about-image">
          <img src="/src/assets/images/women.jpg" alt="About Image"></img>
        </div>

        {/* Right Side */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm a passionate Full Stack Developer and Mobile App Developer based
            in Indonesia. With a strong foundation in both front-end and
            back-end development, I specialize in creating dynamic and
            interactive web applications.
          </p>
          <p>
            In addition to my expertise in web development, I also have
            experience in mobile app development using Flutter, a cross-platform
            framework for building native mobile apps.
          </p>

          <a
            href="whatsapp://send?text=Hello! I'm interested in hiring you."
            className="btn primary"
            target="_blank"
          >
            Hire Me
            <i className="fab fa-whatsapp" style={{ marginLeft: 5 }}></i>
          </a>
        </div>
      </div>
    </section>
  );
}
