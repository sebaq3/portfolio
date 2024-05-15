import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useStateContext } from '../contexts/StateContext';
import '../styles/header.css';

const Header = ({ setShowAboutMe, setShowProjects, setInicio }) => {
  const { language, changeLanguage } = useLanguage();
  const { setShowInicio } = useStateContext(); // Cambia el nombre para evitar conflictos

  const handleLanguageChange = (e) => {
    changeLanguage(e.target.value);
  };

  const handleAboutMeClick = () => {
    setShowAboutMe(true);
    setShowProjects(false);
    setShowInicio(false); // Usamos el valor de contexto aquí
  };

  const handleProjectsClick = () => {
    setShowAboutMe(false);
    setShowProjects(true);
    setShowInicio(false); // Usamos el valor de contexto aquí
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
