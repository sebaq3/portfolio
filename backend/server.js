import express from 'express';
import sgMail from '@sendgrid/mail';
import cors from 'cors';
import dotenv from 'dotenv';

// Cargar variables de entorno desde el archivo .env
dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-email', (req, res) => {
    const { to, from, subject, text, html } = req.body;

    const msg = {
        to,
        from,
        subject,
        text,
        html,
    };

    sgMail
        .send(msg)
        .then(() => {
            res.status(200).send('Email sent');
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Error sending email');
        });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
