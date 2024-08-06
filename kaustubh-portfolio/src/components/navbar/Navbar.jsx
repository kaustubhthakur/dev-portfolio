import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import your CSS file for styling

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const handleDownload = () => {
    // Replace with your file URL
    const fileUrl = "https://example.com/resume.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "resume.pdf"; // Optional: Provide a default file name
    link.click();
  };
  const toggleTheme = () => {
    const newTheme =
      theme === "light" ? "dark" : theme === "dark" ? "light-blue" : "light";
    setTheme(newTheme);
    document.body.className = `${newTheme}-mode`;
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img
            className="img"
            src="data:image/jpeg;base64,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"
            alt="portfolio"
          />
        </Link>
      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        <span className="navbar-toggle-icon">☰</span>
      </button>
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
       
          <button className="download-button" onClick={handleDownload}>
            Resume
          </button>
        </li>
      </ul>

      <button onClick={toggleTheme} className="theme-toggle">
        {theme === "light" ? "Dark" : theme === "dark" ? "Blue" : "Light"}
      </button>
    </nav>
  );
};

export default Navbar;
