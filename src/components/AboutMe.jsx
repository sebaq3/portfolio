import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/aboutme.css';

const AboutMe = () => {
  const { language } = useLanguage();

//https://www.youtube.com/results?search_query=mouredev+portfolio
  return (
    <>
      <div id="about-me" className="about-me">
        <div className="contenido1">
          <div className="izquierda">
            <p className="titulo">{language === 'es' ? 'Sobre mí' : 'About Me'}</p>
            <p>{language === 'es' ? 'Soy un programador apasionado por las tecnologías web y móviles.' : 'I am a programmer passionate about web and mobile technologies.'}</p>
            <p>{language === 'es' ? 'Tengo experiencia en el desarrollo con JavaScript, Node.js, React y Python.' : 'Have experience in development with JavaScript, Node.js, React, and Python.'}</p>
            <p>{language === 'es' ? 'Me encanta aprender nuevas tecnologías y resolver problemas desafiantes.' : 'Love learning new technologies and solving challenging problems.'}</p>         
          </div>
          <div className="derecha">
            <img className="imagen" src="/linkedin.png" alt="LinkedIn" /> 
          </div>  
        </div>  
        <div className="contenido2">
          <div className="izquierda">              
            <img className="imagen" src="/video.gif" alt="GitHub" />
          </div>  
          <div className="derecha">
            <p>{language === 'es' ? 'Además, tengo habilidades en el diseño de interfaces de usuario y experiencia con herramientas de desarrollo de software.' : 'Additionally, I have skills in user interface design and experience with software development tools.'}</p>
          </div>  
        </div>               
      </div>
    </>
  );
}

export default AboutMe;
