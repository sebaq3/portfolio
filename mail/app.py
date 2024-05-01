from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import subprocess

# Carga las variables de entorno desde el archivo .env
EMAIL = os.getenv('EMAIL')

app = Flask(__name__)
CORS(app)

@app.route('/submit-form', methods=['POST'])
def submit_form():
    try:
        data = request.json
        name = data['name']
        email = data['email']
        message = data['message']

        # Construye el cuerpo del correo electrónico
        body = f"Nombre: {name}\nEmail: {email}\nMensaje: {message}"
        
        # Envía el correo electrónico usando Sendmail
        sendmail_command = f"echo '{body}' | sendmail -t -f {EMAIL}"
        subprocess.run(sendmail_command, shell=True)
        
        return jsonify({'message': 'Formulario enviado exitosamente'})
    except Exception as e:
        return jsonify({'error': f'Error al enviar el formulario: {str(e)}'})

if __name__ == '__main__':
    app.run(debug=True)
