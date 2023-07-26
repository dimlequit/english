from flask import Flask

def create_app():
    app = Flask(__name__)
    
    from .views import views
    from .blog import blogs
    
    app.register_blueprint(views , url_prefix = "/")
    app.register_blueprint(blogs , url_prefix = "/")
    
    return app