import React from "react";
import { FaGithub } from "react-icons/fa"; // ✅ GitHub icon
import "./Projects.css"; // ✅ optional for extra styling

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "CineReserve",
      description: "A full-stack application for booking movie tickets online with seat selection and payment gateway.",
      technologies: ["JSP","Servlets", "MySQL"],
      github: "https://github.com/venkatapavan-gudari", // ✅ add GitHub link
    },
    {
      id: 2,
      title: "Online Job Portal",
      description: "A web application to search, apply, and manage job listings online with user authentication and admin dashboard.",
      technologies: ["JSP", "SpringBoot", "MySQL"],
      github: "https://github.com/venkatapavan-gudari", // ✅ add GitHub link
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my skills, projects, and contact details.",
      technologies: ["HTML", "CSS", "REACT"],
      github: "https://github.com/venkatapavan-gudari", // ✅ add GitHub link
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-heading">My Projects</h2>
      <div id="projects" className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              {/* Technologies badges */}
              <div className="technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-box">{tech}</span>
                ))}
              </div>

              {/* ✅ GitHub button instead of "View Project" */}
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn github-btn">
                <FaGithub className="github-icon" /> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
