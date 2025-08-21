import React, { useState } from "react";
import { FaSearchPlus, FaTimes } from "react-icons/fa"; 
import { LuAward } from "react-icons/lu";  // ✅ Professional certificate badge icon
import "./Certificates.css";
import awsCert from "./AWS.png";
import javaCert from "./JAVA.png";
import redhatCert from "./REDHAT.png";
import aimlCert from "./AIML.png";
import salesCert from "./Salesforce.png";
import rpaCert from "./RPA.png";

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    {
      id: 1,
      name: "AWS Certified Cloud Practitioner",
      date: "May 2024",
      description:
        "Achieved AWS Certified Cloud Practitioner certification demonstrating knowledge of AWS cloud fundamentals, services, security, architecture, pricing, and support.",
      skills: ["AWS", "Cloud Computing", "Security", "Cloud Architecture"],
      image: awsCert,
    },
    {
      id: 2,
      name: "Red Hat Certified Enterprise Application Developer",
      date: "September 2024",
      description:
        "Earned Red Hat Certified Enterprise Application Developer certification, validating expertise in building and deploying enterprise Java applications using JEE, APIs, and modern development practices.",
      skills: ["Java", "Enterprise Applications", "JEE", "APIs"],
      image: redhatCert,
    },
    {
      id: 3,
      name: "AI - ML Virtual Internship (AICTE Eduskills)",
      date: "January 2024",
      description:
        "Gained hands-on experience in AI & ML concepts including model building and deployment.",
      skills: ["Artificial Intelligence", "Machine Learning", "Python"],
      image: aimlCert,
    },
    {
      id: 4,
      name: "Java Basic Certificate (HackerRank)",
      date: "September 2024",
      description:
        "Earned HackerRank Java Basic certificate by demonstrating problem-solving and OOP knowledge in Java.",
      skills: ["Java", "OOPs", "Problem Solving"],
      image: javaCert,
    },
    {
      id: 5,
      name: "Salesforce Certified AI Associate",
      date: "October 2024",
      description:
        "Achieved Salesforce AI Associate certification by demonstrating knowledge of AI concepts, responsible AI practices, and how AI can be applied within the Salesforce ecosystem.",
      skills: ["AI Concepts", "Responsible AI", "Salesforce Ecosystem"],
      image: salesCert,
    },

    {
  id: 6,
  name: "Automation Anywhere Certified RPA Professional",
  date: "October 2024",
  description:
    "Earned the Automation Anywhere RPA certification by showcasing skills in Robotic Process Automation, bot creation, and automation lifecycle management.",
  skills: ["RPA", "Bot Development", "Automation Lifecycle"],
  image: rpaCert, // 🔹 add your RPA certificate image path/import here
},

  ];

  return (
    <section className="certificates-section">
      <h2 className="certificates-heading">Certificates & Achievements</h2>
      <div id="certificates" className="certificates-container">
        {certificates.map((cert) => (
          <div className="certificate-card" key={cert.id}>
            {/* Certificate image */}
            <div className="certificate-img-wrapper">
              <img src={cert.image} alt={cert.name} className="certificate-img" />
              <button
                className="zoom-btn"
                onClick={() => setSelectedImage(cert.image)}
              >
                <FaSearchPlus />
              </button>
            </div>

            {/* Certificate content */}
            <div className="certificate-content">
              <h3 className="certificate-title">
                <LuAward className="cert-icon" /> {cert.name}  {/* ✅ Professional Badge Icon */}
              </h3>
              <p className="certificate-date">{cert.date}</p>
              <p className="certificate-desc">{cert.description}</p>

              <div className="certificate-skills">
                {cert.skills.map((skill, index) => (
                  <span key={index} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for zoomed image */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <button
              className="close-btn"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes />
            </button>
            <img src={selectedImage} alt="Certificate Full View" />
          </div>
        </div>
      )}
    </section>
  );
}
