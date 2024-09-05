from flask import Blueprint, render_template, request, jsonify

bp = Blueprint('home', __name__, url_prefix='/')