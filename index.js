$(window).scroll(function() {
    if ($(window).scrollTop() > 60) {
        $("nav").css({ "background-color": "var(--bg-color)" });
    } else {
        $("nav").css({ "background-color": "" });
    }
});

$('.fa-cog').click(function() {
    $('.settings-menu').toggle(300);
    $('.menu-items').hide(100);
});

$('.fa-toggle-off').click(function() {
    $('.fa-toggle-off').toggleClass('fa-toggle-on');
});

$('.fa-bars').click(function() {
    $('.menu-items').toggle(250);
    $('.settings-menu').hide(100);
});