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
    </div>
  );
};

export default HomePage;
