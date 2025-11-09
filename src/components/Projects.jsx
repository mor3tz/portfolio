import React, { useState, useEffect } from "react";
import "../assets/css/Projects.css";
import projectsData from "../data/projectsData";

// ===== ICON MAPPING =====
const badgeIcons = {
  React: "devicon-react-original colored",
  Bootstrap: "devicon-bootstrap-plain colored",
  Laravel: "devicon-laravel-plain colored",
  JavaScript: "devicon-javascript-plain colored",
  JQuery: "devicon-jquery-plain colored",
  Nodejs: "devicon-nodejs-plain colored",
  Firebase: "devicon-firebase-plain colored",
  CSS: "devicon-css3-plain colored",
  Flutter: "devicon-flutter-plain colored",
  PHP: "devicon-php-plain colored",
  MySQL: "devicon-mysql-plain colored",
  Tailwind: "devicon-tailwindcss-plain colored",
};

const labelIcons = {
  Web: "devicon-html5-plain colored",
  Mobile: "devicon-android-plain colored",
};

const mapBadgeIcon = (badge) => badgeIcons[badge] || "devicon-code-plain";
const mapLabelIcon = (label) => labelIcons[label] || "devicon-terminal-plain";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // simulasi fetch data
    setTimeout(() => {
      console.log("data: ", projectsData);
      setProjects(projectsData);
    }, 500);
  }, []);

  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">My Projects</h2>

      {projects.length === 0 ? (
        <div className="loading-placeholder"></div>
      ) : (
        <div className="projects-container">
          {projects.map(({ id, label, image, title, description, badge }) => (
            <div className="project-card" key={id}>
              {/* Label */}
              <div className="project-label">
                {label.map((lbl, index) => (
                  <span key={index} className="label">
                    <i className={mapLabelIcon(lbl)}></i>
                    {lbl}
                  </span>
                ))}
              </div>

              {/* Image */}
              <div className="project-image">
                <img src={image} alt={`Preview of ${title}`} loading="lazy" />
              </div>

              {/* Info */}
              <div className="project-info">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="project-badge">
                  {badge.map((b, index) => (
                    <span key={index} className="badge">
                      <i className={mapBadgeIcon(b)}></i>
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
