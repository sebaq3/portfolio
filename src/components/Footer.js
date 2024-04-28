// Footer.js
import React from 'react';

function Footer({language}) {
    return (
        <footer>
            <div className="footer-content">
                <p>Derechos de autor © 2024 - Mi Portafolio</p>
                <ul className="footer-links">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#about">Sobre Mí</a></li>
                    <li><a href="#projects">Proyectos</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
