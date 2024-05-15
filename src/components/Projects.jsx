import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/projects.css';

const Projects = ({ show }) => {
  const { language } = useLanguage();
  if (!show) {
    return null;
  }

  const projectsData = [
    {
      id: 1,
      title: language === 'es' ? 'Este proyecto React-Vite' : 'This project React-Vite',
      imageUrl: 'https://raw.githubusercontent.com/leungwensen/svg-icon/8b84d725b0d2be8f5d87cac7f2c386682ce43563/dist/svg/logos/react.svg',
      link: 'https://github.com/sebaq3/portfolio'
    },
    {
      id: 2,
      title: language === 'es' ? 'Python ALPR' : 'Python ALPR',
      imageUrl: 'https://icon.icepanel.io/Technology/svg/TensorFlow.svg',
      link: 'https://github.com/sebaq3/anlpr'
    },
    {
      id: 3,
      title: language === 'es' ? 'Proyecto Personal C++' : 'Personal Project C++',
      imageUrl: 'https://icon.icepanel.io/Technology/svg/C%2B%2B-%28CPlusPlus%29.svg',
      link: 'https://github.com/sebaq3/cortina'
    }
  ];

  return (
    <div className="projects">
      <h2>{language === 'es' ? 'Proyectos' : 'Projects'}</h2>
      <div className="content">
        <div className="project-container">
          {projectsData.map(project => (
            <div key={project.id} className="project">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img className="project-image" src={project.imageUrl} alt={project.title} />
              </a>
              <p>{project.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;

