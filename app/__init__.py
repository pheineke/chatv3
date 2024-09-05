from flask import Flask


def create_app():
    app = Flask(__name__)

    from app.home import bp as home_bp
    app.register_blueprint(home_bp, url_prefix='/')
    
    from app.chat import bp as chat_bp
    app.register_blueprint(chat_bp, url_prefix='/chat')

    return app