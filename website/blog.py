from flask import Blueprint , render_template , request , jsonify

blogs = Blueprint('blog' , __name__)



@blogs.route('/blogs')
def view():
    return render_template("blogs.html")


@blogs.route('/blogs/view')
def blog():
    blog_id = request.args.get('id')
    return render_template("blog.html" , id = blog_id)
