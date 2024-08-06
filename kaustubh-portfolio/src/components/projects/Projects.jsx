import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Project 1',
    image: 'project1.jpg',
    liveLink: 'https://liveproject1.com',
    githubLink: 'https://github.com/user/project1',
  },
  {
    title: 'Project 2',
    image: 'project2.jpg',
    liveLink: 'https://liveproject2.com',
    githubLink: 'https://github.com/user/project2',
  },
  {
    title: 'Project 3',
    image: 'project3.jpg',
    liveLink: 'https://liveproject3.com',
    githubLink: 'https://github.com/user/project3',
  },
  {
    title: 'Project 4',
    image: 'project4.jpg',
    liveLink: 'https://liveproject4.com',
    githubLink: 'https://github.com/user/project4',
  },
  {
    title: 'Project 5',
    image: 'project5.jpg',
    liveLink: 'https://liveproject5.com',
    githubLink: 'https://github.com/user/project5',
  },
  {
    title: 'Project 6',
    image: 'project6.jpg',
    liveLink: 'https://liveproject6.com',
    githubLink: 'https://github.com/user/project6',
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-links">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live</a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
