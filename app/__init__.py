from flask import Flask
from app.routes.home import home as home_blueprint
from app.routes.chat import chat as chat_blueprint

def create_app():
    app = Flask(__name__)

    # Konfiguration laden
    app.config.from_object('app.config.Config')

    # Blueprints registrieren
    app.register_blueprint(home_blueprint, url_prefix='/')  # Home routes prefix
    app.register_blueprint(chat_blueprint, url_prefix='/chat')  # Chat routes prefix

    return app
