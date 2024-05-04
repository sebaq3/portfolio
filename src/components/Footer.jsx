// Footer.jsx
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import linkedinIcon from '../icons/linkedin.png';
import githubIcon from '../icons/github.png';
import '../styles/footer.css';

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="footer">
      <div className="left">
        <p>{language === 'es' ? 'Frase motivacional aquí' : 'Motivational phrase here'}</p>
        <p>Email: example@example.com</p>
      </div>
      <div className="right">
        <a href="www.linkedin.com/in/sebastian-scrosoppi-709a3966"><img src={linkedinIcon} alt="LinkedIn" className="icon" /></a>
        <a href="https://github.com/sebaq3"><img src={githubIcon} alt="GitHub" className="icon" /></a>
      </div>
    </footer>
  );
}

export default Footer;
