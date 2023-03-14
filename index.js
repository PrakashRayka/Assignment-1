document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll("nav a");
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function (e) {
            e.preventDefault();
            var target = this.getAttribute("href");
            var sections = document.querySelectorAll("section");
            for (var j = 0; j < sections.length; j++) {
                sections[j].style.display = "none";
            }
            document.querySelector(target).style.display = "block";
        });
    }
});
