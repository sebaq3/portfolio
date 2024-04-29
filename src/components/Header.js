// Header.js
import React from 'react';
//import '.src/styles/Header.css'; // Importar los estilos CSS
import './styles/Header.css';




function Header({ language, onLanguageChange }) {
    const handleChange = (e) => {
        onLanguageChange(e.target.value);
    };
    const handleClick = (targetId) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetOffset = targetElement.offsetTop - headerHeight;
            window.scroll({
                top: targetOffset,
                behavior: 'auto'
            });
        }
    };

    const headerText = {
        es: "SS",
        en: "SS"
    };
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
    
    return (
        <header>
            <h1></h1>
            <nav>
                <ul>
                    <li><a href="#">{headerText[language]}</a></li>
                    <li><a href="#About" onClick={() => handleClick('about')}>{aboutMe[language]}</a></li>
                    <li><a href="#Projects" onClick={() => handleClick('projects')}>{projects[language]}</a></li>
                    <li><a href="#Skills" onClick={() => handleClick('skills')}>{skills[language]}</a></li>
                    <li><a href="/CV_Scrosoppi_Sebastian.pdf" download>{cv[language]}</a></li>
                    <li><a href="#Contact" onClick={() => handleClick('contact')}>{contact[language]}</a></li>
                    <li>
                        <select onChange={handleChange}>
                            <option value="" disabled selected>Languaje</option>
                            <option value="es">Español</option>
                            <option value="en">Inglés</option>
                        </select>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
