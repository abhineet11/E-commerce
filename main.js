$(document).ready(function () {
    var fixTop = $('.main-header').offset().top;
    var fixnav = $('.navigation').offset().top - $('.main-header').offset().top
    console.log(fixTop, fixnav)
    $(window).scroll(function () {
        var currentScroll = $(window).scrollTop();
        if (currentScroll >= fixTop) {
            $('.main-header').css({
                position: 'fixed',
                top: '0',
                left: '0'
            });
            $('.navigation').css({
                position: 'fixed',
                top: fixnav,
                left: '0'
            });
        } else {
            $('.main-header, .navigation').css({
                position: 'static'
            });
        }

    });
})

