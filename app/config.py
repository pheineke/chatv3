class Config:
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = 'sqlite:///app.db'
    SECRET_KEY = 'your-secret-key'
    TEMPLATE_AUTO_RELOAD = True