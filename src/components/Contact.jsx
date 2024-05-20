import React, { useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        mail: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    to: 'sebaq3@gmail.com', // Cambia a tu destinatario
                    from: 'sebaq3@gmail.com', // Cambia a tu remitente verificado
                    subject: `Message from ${formData.name}, ${formData.mail}`,
                    text: formData.message,
                    html: `<strong>${formData.message}</strong>`,
                }),
            });

            if (response.ok) {
                alert('Sent!');
                setFormData({ name: '', mail: '', message: '' }); // Limpiar el formulario después de enviar
            } else {
                alert('Error');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error');
        }
    };

    return (
        <div id="contact" className='contact'>
            <form onSubmit={sendEmail}>
                <p className='titulo'>Contact</p>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor='mail'>Mail:</label>
                    <input
                        type='email'
                        id='mail'
                        name='mail'
                        value={formData.mail}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea
                        id='message'
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type='submit'>Send Test Email</button>
            </form>
        </div>
    );
};

export default Contact;
