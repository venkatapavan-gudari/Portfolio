import React from "react";
import { FiFileText } from "react-icons/fi";
import { FaDownload } from "react-icons/fa";
import "./Resume.css";

export default function Resume() {
  // Place your PDF file in the public folder as resume.pdf
  const resumeUrl = "/resume.pdf";

  return (
    <section className="resume-section">
      <div id="resume" className="container">
        <h2 className="resume-heading">My Resume</h2>

        <div className="resume-card" role="region" aria-labelledby="resume-title">
          <div className="resume-icon" aria-hidden="true">
            <FiFileText />
          </div>

          <h3 id="resume-title" className="resume-title">Download my resume</h3>

          <p className="resume-text">
            Get a detailed overview of my skills, experience, and academic background.
          </p>

          <a
            className="resume-btn"
            href={resumeUrl}
            download
            aria-label="Download Resume PDF"
          >
            <FaDownload className="btn-icon" aria-hidden="true" />
            <span>Download Resume</span>
          </a>

          {/* Small line added below the button */}
          <p className="resume-note">Updated recently for 2025.</p>
        </div>
      </div>
    </section>
  );
}
