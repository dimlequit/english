from flask import Blueprint , render_template

blogs = Blueprint('blog' , __name__)

@blogs.route('/blogs')
def view():
    return render_template("blogs.html")