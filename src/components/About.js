// About.js
import React from 'react';
import './styles/About.css';

function About({ language }) {
    const content = {
        es: {
            title: "Sobre Mí - Sitio ejemplo",
            description: `¡Hola! Soy Sebastian, un desarrollador apasionado por la tecnología y la creación de experiencias digitales. Desde sitios web hasta aplicaciones complejas. ¡Gracias por visitar mi sitio!`
        },
        en: {
            title: "About Me - Example site",
            description: `Hello there! I'm Sebastian, a developer passionate about technology and crafting exceptional digital. From websites to complex applications. Thanks for visiting my site!`
        }
    };

    return (
        <section>
            <section className="container" id="about">
                <h2>{content[language].title}</h2>
                <div className="about-content">
                    <p>{content[language].description}</p>
                </div>
            </section>
        </section>    
    );
}

export default About;
