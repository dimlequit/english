window.onload = (e) => {
    let blogs_div = document.querySelector("#blogs-container");
    console.log(document.querySelector("#blogs-container"))
    var html = ""
    for (var i in blogs){
        html += "<a href = '/blogs/view?id=" + i + "'> topic " + i + "</a><br>";
        blogs_div.innerHTML = html;
    }
}

/**

    <div class = "post-box">
        <img src = "{{ url_for('static', filename='uploads/topic-" + i".webp') }}" class = "post-img"></img>  
        <a href = "/blogs/view?id=001" class = "post-title"><script>document.write(blogs["001"]["title"]);</script></a>
        <span class = "post-date"><script>document.write(blogs["001"]["date"]);</script></span>
        <p class = "post-description"><script>document.write(blogs["001"]["desc"]);</script></p>
    </div>


 */