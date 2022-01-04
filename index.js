$(window).scroll(function() {
    if ($(window).scrollTop() > 60) {
        $("nav").css({ "background-color": "var(--bg-color)" });
    } else {
        $("nav").css({ "background-color": "" });
    }
});

$('.fa-cog').click(function() {
    $('.settings-menu').toggle(300);
})