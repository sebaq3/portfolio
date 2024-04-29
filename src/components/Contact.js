// Contact.js
import React from 'react';

function Contact({language}) {
    return (
        <section className="container" id="contact">
            <h2>Contacto</h2>
            <p>¡Ponte en contacto conmigo para colaboraciones o cualquier pregunta!</p>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Mensaje:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </section>
    );
}

export default Contact;
