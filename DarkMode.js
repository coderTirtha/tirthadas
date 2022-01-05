$('.fa-toggle-off').click(function() {
    $('.top-banner').toggleClass('top-banner-dark');
    $('.menu-items').toggleClass('menu-items-dark');
    $('.settings-menu').toggleClass('settings-menu-dark');
    $('main').toggleClass('main-body');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 60) {
            $("nav").css({ "background-color": "var(--primary-color)" });
            $('nav').css('color', 'white');
            $('nav').css('box-shadow', '0 1px 5px white');
            $('.logo-part').addClass('logo-part-dark');
        } else {
            $("nav").css({ "background-color": "transparent" });
            $('nav').css('color', 'black');
            $('nav').css('box-shadow', '0 1px 5px black');
            $('.logo-part').removeClass('logo-part-dark');
        }
    });
    $('.settings-menu').toggle(200);
});