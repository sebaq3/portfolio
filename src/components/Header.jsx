// Header.jsx
import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useStateContext } from '../contexts/StateContext'; // Importa useStateContext
import '../styles/header.css';

const Header = ({ setShowAboutMe, setShowProjects, handleInicioFalse }) => {
  const { language, changeLanguage } = useLanguage();
  const { showInicio, setShowInicio } = useStateContext();

  const handleLanguageChange = (e) => {
    changeLanguage(e.target.value);
  };



  const handleAboutMeClick = () => {
    setShowAboutMe(true);
    setShowProjects(false);
    setShowInicio(false);
  };

  const handleProjectsClick = () => {
    setShowAboutMe(false);
    setShowProjects(true);
    setShowInicio(false); 
  };

  return (
    <header className="header">
      <div className="left">
        <a href="">SS</a>
      </div>
      <div className="right">
        <a href="#" onClick={handleAboutMeClick}>{language === 'es' ? 'Sobre mí' : 'About Me'}</a>
        <a href="#" onClick={handleProjectsClick}>{language === 'es' ? 'Proyectos' : 'Projects'}</a>
        <select value={language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="es">Español</option>          
        </select>
      </div>
    </header>
  );
}

export default Header;
