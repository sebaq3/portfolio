// AboutMe.jsx
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/aboutme.css';


const AboutMe = ({ show }) => {
  const { language } = useLanguage();
  if (!show) {
    return null;
  }

  return (
    <>
      <div className= "about-me">        
        <div className="content">
        <h2>{language === 'es' ? 'Sobre mí' : 'About Me'}</h2>
          <p>{language === 'es' ? 'Soy un programador apasionado por las tecnologías web y móviles.' : 'I am a programmer passionate about web and mobile technologies.'}</p>
          <p>{language === 'es' ? 'Tengo amplia experiencia en el desarrollo con JavaScript, Node.js y Python.' : 'I have extensive experience in development with JavaScript, Node.js, and Python.'}</p>
          <p>{language === 'es' ? 'Me encanta aprender nuevas tecnologías y resolver problemas desafiantes.' : 'I love learning new technologies and solving challenging problems.'}</p>
          {/* Agregar más contenido aquí */}
        </div>  
        <img className="imagen" src="/linkedin.png" alt="ImgLinkedin" />        
      </div>
      
    </>
  );
}

export default AboutMe;
