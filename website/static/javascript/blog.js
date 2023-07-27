window.onload = (e) => {
    let blogs_div = document.querySelector("#blogs-container");
    console.log(document.querySelector("#blogs-container"))
    var html = ""
    for (var i in blogs){
        html += "<div class = \"post-box\"> <img src = \"{{ url_for('static', filename='uploads/topic-" + i + ".webp') }}\" class = \"post-img\"></img> <a href = \"/blogs/view?id=" + i + "\" class = \"post-title\"><script>document.write(blogs[" + i + "][\"title\"]);</script></a> <span class = \"post-date\"><script>document.write(blogs[" + i + "][\"date\"]);</script></span> <p class = \"post-description\"><script>document.write(blogs[" + i + "][\"desc\"]);</script></p> </div>";
       
    }
    blogs_div.innerHTML = html;
}

/**




 */