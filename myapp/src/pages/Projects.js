import React from "react";
import "./Projects.css"; // ✅ optional for extra styling

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "CineReserve",
      description: "A full-stack application for booking movie tickets online with seat selection and payment gateway.",
      technologies: ["JSP","Servlets", "MySQL"], // ✅ added
      image: "https://via.placeholder.com/400x250", // replace with your project image
      link: "#"
    },
    {
      id: 2,
      title: "Online Job Portal",
      description: "A web application to search, apply, and manage job listings online with user authentication and admin dashboard.",
      technologies: ["JSP", "SpringBoot", "MySQL"], // ✅ added
      image: "https://via.placeholder.com/400x250",
      link: "#"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my skills, projects, and contact details.",
       technologies: ["HTML", "CSS", "REACT"],
      image: "https://via.placeholder.com/400x250",
      link: "#"
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

  
              <a href={project.link} className="btn">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
