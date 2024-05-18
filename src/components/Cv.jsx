import React from 'react';
import { useLanguage } from '../contexts/LanguageContext'; 
import '../styles/cv.css'; 

const Cv = () => {
  const { language } = useLanguage();

  const fileName = language === 'es' ? 'CV_Scrosoppi_Sebastian.pdf' : 'CV_Scrosoppi_Sebastian.pdf';

  return (
    <div id="cv" className="cv-container"> 
      <a className="download-button" href={`/${fileName}`} download={fileName}>
        {language === 'es' ? 'Descargar' : 'Download'}
      </a>
      <img src="/CV_Scrosoppi_Sebastian_1.png" alt="Imagen 1" />
      <img src="/CV_Scrosoppi_Sebastian_2.png" alt="Imagen 2" />
      <a className="download-button" href={`/${fileName}`} download={fileName}>
        {language === 'es' ? 'Descargar' : 'Download'}
      </a>
    </div>
  );
}

export default Cv;
