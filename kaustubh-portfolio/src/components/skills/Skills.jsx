import React from 'react';
import './Skills.css'; // We'll create this CSS file next

const Skills = () => {
  return (
    <div className="skills">
      <h2>MY TECH STACK</h2>
      <div className="skills-category">
        <h3>Languages</h3>
        <ul>
          <li>JavaScript</li>
          <li>Python</li>
          <li>C++</li>
          <li>RustLang</li>
          <li>Solidity</li>
        </ul>
      </div>
      <div className="skills-category">
        <h3>Frameworks</h3>
        <ul>
            <li>HTML,CSS</li>
           <li>Chainlink</li>
          <li>React.js</li>
          <li>Express.js</li>
          <li>Node.js</li>
          <li>Hardhat</li>
          <li>Foundry</li>
          <li>Actix</li>
        </ul>
      </div>
      <div className="skills-category">
        <h3>Other Technologies</h3>
        <ul>
          <li>Git</li>
          <li>Neural Networks</li>
          <li>Dockers</li>
          <li>Redis</li>
          <li>GraphQL</li>
          <li>MYSQL</li>
          <li>MONGODB</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
