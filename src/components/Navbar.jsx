import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useStateContext } from '../contexts/StateContext';
import '../styles/navbar.css';

const Navbar = () => {
  const { language, changeLanguage } = useLanguage();
  const { setShowInicio } = useStateContext(); 

  const handleLanguageChange = (e) => {
    changeLanguage(e.target.value);
  };
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const duration = 1000; // Duración del desplazamiento en milisegundos
    const start = window.pageYOffset; // Posición de inicio
    const end = element.getBoundingClientRect().top; // Posición final
    const startTime = performance.now(); // Marca de tiempo de inicio

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    const scroll = (timestamp) => {
      const currentTime = timestamp - startTime; // Tiempo transcurrido
      const newPosition = easeInOutQuad(currentTime, start, end, duration); // Nueva posición

      window.scrollTo(0, newPosition); // Desplaza a la nueva posición

      if (currentTime < duration) {
        requestAnimationFrame(scroll); // Sigue animando hasta que la duración se cumpla
      }
    };

    requestAnimationFrame(scroll); // Inicia la animación de desplazamiento
  };


  return (
    <header className="navbar">
      <div className="left">
        <a href="">SS</a>
      </div>
      <div className="right">
        <a href="#inicio" onClick={() => scrollToSection('inicio')}>{language === 'es' ? 'Inicio' : 'Home'}</a>
        <a href="#about-me" onClick={() => scrollToSection('about-me')}>{language === 'es' ? 'Sobre mí' : 'About Me'}</a>
        <a href="#projects" onClick={() => scrollToSection('projects')}>{language === 'es' ? 'Proyectos' : 'Projects'}</a>
        <a href="#cv" onClick={() => scrollToSection('cv')}>{language === 'es' ? 'CV' : 'CV'}</a>
        <select value={language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </div>
    </header>
  );
}

export default Navbar;
