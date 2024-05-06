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
        <p>Email: <a href="mailto:sebaq3@gmail.com">sebaq3@gmail.com</a></p>
      </div>

      <div className="right">
        <a href="https://www.linkedin.com/in/sebastian-scrosoppi-709a3966"><img src={linkedinIcon} alt="LinkedIn" className="icon project-image" /></a>
        <a href="https://github.com/sebaq3"><img src={githubIcon} alt="GitHub" className="icon project-image" /></a>
      </div>
    </footer>
  );
}

export default Footer;

