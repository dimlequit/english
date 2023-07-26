from flask import Blueprint

auth = Blueprint('view' , __name__)

@auth.route('/')
def home():
    pass