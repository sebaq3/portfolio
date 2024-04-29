// About.js
import React from 'react';
import './styles/About.css'

function About({ language }) {
    const content = {
        es: {
            title: "Sobre Mí",
            description: "Mi nombre es [Tu Nombre]. Soy un desarrollador web apasionado por la creación de experiencias digitales increíbles. ..."
        },
        en: {
            title: "About Me",
            description: "My name is [Tu Nombre]. I am a web developer passionate about creating amazing digital experiences. ..."
        }
    };

    return (
        <section className="about-container">
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