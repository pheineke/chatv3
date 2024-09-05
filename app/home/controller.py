from flask import Blueprint, render_template, request, jsonify

import app.home as home

bp = home.bp

@bp.route('/')
def index():
    return render_template('home/index.html')