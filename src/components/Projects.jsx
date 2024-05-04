// Projects.jsx
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/projects.css';

const Projects = ({ show }) => {
  const { language } = useLanguage();

  const projectsData = [
    {
      id: 1,
      title: language === 'es' ? 'Este proyecto React-Vite' : 'This project React-Vite',
      imageUrl: 'https://icon.icepanel.io/Technology/svg/Vite.svg',
      link: 'https://github.com/sebaq3/portfolio'
    },
    {
      id: 2,
      title: language === 'es' ? 'Python alpr' : 'Python alpr',
      imageUrl: 'https://icon.icepanel.io/Technology/svg/TensorFlow.svg',
      link: 'https://github.com/sebaq3/anlpr'
    },
    {
      id: 3,
      title: language === 'es' ? 'Proyecto 3' : 'Project 3',
      imageUrl: 'https://icon.icepanel.io/Technology/svg/C%2B%2B-%28CPlusPlus%29.svg',
      link: 'https://github.com/sebaq3/cortina'
    }
  ];

  return (
    <div className={`projects ${show ? 'fade-in' : ''}`}>
      <h2>{language === 'es' ? 'Proyectos' : 'Projects'}</h2>
      <div className="content">
        {projectsData.map(project => (
          <div key={project.id} className="project-item">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.imageUrl} alt={project.title} className="project-image" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
