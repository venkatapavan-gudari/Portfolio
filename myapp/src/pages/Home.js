import React from "react";
import "./Home.css";
import UpendraPhoto from "./pavan.jpg"; // make sure the path is correct

export default function Home() {
  return (
    <section className="home" id="home">
      {/* Profile Photo */}
      <div className="profile-photo-container">
        <img src={UpendraPhoto} alt="Venkata Pavan Gudari" className="profile-photo" />
      </div>

      {/* Heading and Text */}
      <h1>
        Hi, I'm <span className="highlight">Venkata Pavan Gudari</span>
      </h1>
      <p>Frontend Developer | React Enthusiast | CSE Student</p>

      {/* Buttons */}
      <div className="buttons">
        <a href="#about">About Me</a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          Download Resume
        </a>
      </div>
    </section>
  );
}
