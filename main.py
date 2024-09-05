from flask import Flask

import app

app_ = app.create_app()

if __name__ == '__main__':
    app_.run(host='0.0.0.0', port=5000, debug=True)