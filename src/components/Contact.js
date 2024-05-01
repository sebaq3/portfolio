import React , { useEffect } from 'react';
import './styles/Contact.css'; // Importa el archivo de estilos CSS

function Contact({language}) {
    
    return (
        <section className="container" id="contact">
            <h2>Contacto</h2>
            <p>¡Ponte en contacto conmigo para colaboraciones o cualquier pregunta!</p>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="name">Nombre:</label>
                            </td>
                            <td>
                                <input type="text" id="name" name="name" required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="email">Email:</label>
                            </td>
                            <td>
                                <input type="email" id="email" name="email" required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="message">Mensaje:</label>
                            </td>
                            <td>
                                <textarea id="message" name="message" rows="4" required></textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit">Enviar</button>
            </form>

        </section>

    );
}

export default Contact;
