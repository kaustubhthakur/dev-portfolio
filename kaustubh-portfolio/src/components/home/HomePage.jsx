import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="profile-pic-container">
        <img 
          src="https://avatars.githubusercontent.com/u/93928807?s=400&u=055dae9688a9e62e98d85fb5365a8f84586f590d&v=4" 
          alt="Profile" 
          className="profile-pic" 
        />
      </div>
      <div className="about-section">
        <h1 className="about-title">About Me</h1>

        <p className="about-text">
          Hi, I'm Kaustubh Thakur, A passionate developer .I am currently in my 4th year of btech.
        </p>
        <p className="about-text">
          I have knowledge of various  technologies like Fullstack web development,blockchain development. I also enjoy doing competitive programming and data structures and algorithms.
        </p>
        <p className="about-text">
         I also love playing chess
        </p>
      </div>
      <footer className="footer">
        <h2 className="footer-title">Connect with me</h2>
        <div className="social-links">
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
            <img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="GitHub" className="social-icon" />
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
            <img src="https://image.flaticon.com/icons/png/512/733/733579.png" alt="Twitter" className="social-icon" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;