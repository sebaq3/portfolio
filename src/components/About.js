// About.js
import React from 'react';
import './styles/About.css';

function About({ language }) {
    const content = {
        es: {
            title: "Sobre Mí",
            description: `¡Hola! Soy Sebastian, un desarrollador web apasionado por la tecnología y la creación de experiencias digitales excepcionales. Desde sitios web intuitivos hasta aplicaciones complejas, mi objetivo es siempre combinar funcionalidad con un diseño atractivo. ¡Gracias por visitar mi sitio!`
        },
        en: {
            title: "About Me",
            description: `Hello there! I'm Sebastian, a web developer passionate about technology and crafting exceptional digital experiences. From intuitive websites to complex applications, my goal is always to combine functionality with appealing design. Thanks for visiting my site!`
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
