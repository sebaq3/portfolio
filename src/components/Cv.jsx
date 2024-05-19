import React from 'react';
import { useLanguage } from '../contexts/LanguageContext'; 
import '../styles/cv.css'; 
import CvHtml from './CvHtml';

const Cv = () => {
  const { language } = useLanguage();

  const fileName = language === 'es' ? 'CV_Scrosoppi_Sebastian.pdf' : 'CV_Scrosoppi_Sebastian.pdf';

  return (
    <div id="cv" className="cv-container"> 
      <a className="download-button" href={`/${fileName}`} download={fileName}>
        {language === 'es' ? 'Descargar' : 'Download'}
      </a>
      <div className="imagenes"> 
        <CvHtml />        
      </div>
      <a className="download-button" href={`/${fileName}`} download={fileName}>
        {language === 'es' ? 'Descargar' : 'Download'}
      </a>
    </div>
  );
}

export default Cv;
