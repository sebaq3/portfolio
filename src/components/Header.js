// Header.js
import React from 'react';

function Header({ language, onLanguageChange }) {
    const handleChange = (e) => {
        onLanguageChange(e.target.value);
    };

    const headerText = {
        es: "Mi Portafolio",
        en: "My Portfolio"
    };
    const aboutMe = {
        es: "Acerca de mi",
        en: "About Me"
    };
    const projects = {
        es: "Mis Proyectos",
        en: "My Projects"
    };
    const contact = {
        es: "Contacto",
        en: "Contact"
    };

    return (
        <header>
            <h1>{headerText[language]}</h1>
            <nav>
                <ul>
                    <li><a href="#about">{aboutMe[language]}</a></li>
                    <li><a href="#projects">{projects[language]}</a></li>
                    <li><a href="#contact">{contact[language]}</a></li>
                    <li>
                        <select onChange={handleChange}>
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
