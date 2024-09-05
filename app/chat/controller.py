from flask import Blueprint, render_template, request, jsonify

import app.chat as chat

bp = chat.bp

@bp.route('/')
def index():
    return render_template('chat/index.html')