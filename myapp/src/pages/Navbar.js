import React, { useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa"; 
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu after clicking a link (for mobile only)
  const handleLinkClick = (e, targetId) => {
    e.preventDefault();

    // Smooth scroll to section
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }

    // Close menu if in mobile view
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  // Toggle dark/light mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <nav className={`navbar ${darkMode ? "dark" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <h1 className="logo">Venkata Pavan Gudari</h1>

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#home" onClick={(e) => handleLinkClick(e, "home")}>Home</a></li>
          <li><a href="#about" onClick={(e) => handleLinkClick(e, "about")}>About me</a></li>
          <li><a href="#projects" onClick={(e) => handleLinkClick(e, "projects")}>Projects</a></li>
          <li><a href="#certificates" onClick={(e) => handleLinkClick(e, "certificates")}>Certificates</a></li>
          <li><a href="#resume" onClick={(e) => handleLinkClick(e, "resume")}>Resume</a></li>
          <li><a href="#coding" onClick={(e) => handleLinkClick(e, "coding")}>Coding Platforms</a></li>
          <li><a href="#contact" onClick={(e) => handleLinkClick(e, "contact")}>Contact</a></li>
        </ul>

        {/* Dark Mode Toggle */}
        <div className="dark-toggle" onClick={toggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </div>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
}
