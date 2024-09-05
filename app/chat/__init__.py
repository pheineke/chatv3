from flask import Blueprint, render_template, request, jsonify

bp = Blueprint('chat', __name__, url_prefix='/chat')