from flask import Flask, request
from flask_cors import CORS
import smtplib

app = Flask(__name__)
CORS(app)

@app.route('/submit-form', methods=['POST'])
def submit_form():
    data = request.form
    name = data['name']
    email = data['email']
    message = data['message']

    # Envía el correo electrónico
    sender_email = 'sebaq3@gmail.com'
    receiver_email = 'sebaq3@gmail.com'
    subject = f'Nuevo mensaje de {name}'
    body = f'Nombre: {name}\nEmail: {email}\nMensaje: {message}'

    try:
        server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
        server.login(sender_email, 'tucontraseña')
        server.sendmail(sender_email, receiver_email, f'Subject: {subject}\n\n{body}')
        server.quit()
        return 'Formulario enviado exitosamente'
    except Exception as e:
        return f'Error al enviar el formulario: {str(e)}'

if __name__ == '__main__':
    app.run(debug=True)
