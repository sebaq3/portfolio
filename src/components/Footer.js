// Footer.js
import React from 'react';
import './styles/Footer.css';

function Footer({language}) {

    const aboutMe = {
        es: "Sobre mi",
        en: "About Me"
    };
    const projects = {
        es: "Mis Proyectos",
        en: "My Projects"
    };
    const skills = {
        es: "Skills",
        en: "Skills"
    };
    const cv = {
        es: "CV",
        en: "CV"
    };

    const contact = {
        es: "Contacto",
        en: "Contact"
    };
    const inicio = {
        es: "Inicio",
        en: "Index"
    };
    return (
        <footer>
            <div className="footer-content">
                <p>Derechos de autor © 2024 - Mi Portafolio</p>
                <ul className="footer-links">
                    <li><a href="#">{inicio[language]}</a></li>
                    <li><a href="#about">{aboutMe[language]}</a></li>
                    <li><a href="#projects">{projects[language]}</a></li>
                    <li><a href="#skills">{skills[language]}</a></li>
                    <li><a href="/CV_Scrosoppi_Sebastian.pdf" download>{cv[language]}</a></li>
                    <li><a href="#contact">{contact[language]}</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
