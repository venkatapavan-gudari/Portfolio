import React from "react";
import "./About.css"; // Import CSS file

export default function About() {
  return (
    <div id="about" className="about">
      <div className="about-container">
        {/* Heading */}
        <h1 className="about-title">About Me</h1>
        <p className="about-description">
  Hi, I’m <span className="highlight">Venkata Pavan Gudari</span>, a 
  <span className="highlight-skill"> Full Stack Developer</span> and Computer Science student at KL University. 
  I specialize in <span className="highlight">React, SpringBoot, Java</span> and enjoy building modern, scalable, and user-friendly web applications.  

  I have hands-on experience in both frontend and backend development, creating responsive interfaces, robust servers, and seamless database integration. I love solving problems, learning new technologies, and delivering high-quality, maintainable solutions.
</p>


      </div>

      {/* Skills / Highlights Section */}
      <div className="about-grid">
        

        <div className="card">
          <h2 className="card-title">🎓 Education</h2>
          <p>
  Pursuing final year B.Tech in Computer Science and Engineerin at <span className="highlight">KL University</span>, Vijayawada | CGPA: 9.4/10
  
</p>

           
          
        </div>


        <div className="card">
  <h2 className="card-title">💻 Tech Stack</h2>
  <p className="tech-stack">
    HTML, CSS, JavaScript, React, Spring Boot, MySQL, MongoDB, Git, GitHub, TailwindCSS, AWS
  </p>
</div>



        <div className="card">
  <h2 className="card-title">🚦 Status</h2>
<p className="status-text">
  Actively looking for internships and jobs in the field of 
  <span className="highlight"> Software Development</span> and 
  <span className="highlight"> Full Stack Development</span>, 
  focused on delivering high-quality projects and learning new technologies.
</p>

</div>

      </div>

      {/* Call to Action */}
      <div className="about-cta">
        <a href="/contact" className="cta-btn">
          Let’s Connect
        </a>
      </div>
    </div>
  );
}
