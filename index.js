$(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
        $("nav").css({ "background-color": "var(--bg-color)" });
    } else {
        $("nav").css({ "background-color": "" });
    }
});