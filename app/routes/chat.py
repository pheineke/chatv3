from flask import Blueprint, render_template

chat = Blueprint('chat', __name__)

@chat.route('/')
def index():
    return render_template('chat/chat.html')


