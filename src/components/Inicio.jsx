import React, { useEffect, useState } from 'react';
import '../styles/inicio.css';
import { useLanguage } from '../contexts/LanguageContext';

const Inicio = () => {
  const { language } = useLanguage();
  const textsToType = ["|FullStack|", "|NodeJs, React|", "|Python, Django|"];
  const [typedText, setTypedText] = useState(textsToType[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeed = 100; // Velocidad de escritura (milisegundos)

  useEffect(() => {
    const interval = setInterval(() => {
      
      setCurrentIndex(prevIndex => (prevIndex + 1) % textsToType.length);
    }, 3000); // Cambia el intervalo de cambio de texto según lo necesites

    return () => clearInterval(interval);
  }, [textsToType.length]);

  useEffect(() => {
    setTypedText(textsToType[currentIndex]);
  }, [currentIndex, textsToType]);

  


  return (    
    <>      
      <div id="inicio" className="inicio">
        <div className="izquierda">
        
          <p className="titulo-inicio">{language === 'es' ? 'Hola! Soy Seba' : 'Hi! Im Seba'}</p>
          <p className="typed-text">{typedText}</p>
        </div>
        <div className="derecha">
          <video autoPlay muted loop className="video-background">
            <source src="https://qanplatform.com/_nuxt/qan-anim-02.bc047b0d.mp4" type="video/mp4" />
            Tu navegador no soporta videos HTML5.
          </video>
        </div>
        
      </div>

    </>
  );
}

export default Inicio;
