
export default {

    init(){
        this.headerFunctions();
    },

    headerFunctions () {
        var trigger = $('.site-header').offset().top;

        if ($(window).width() >= 768) {
            $('.header-wrap').css({
                'min-height': $('.site-header').innerHeight()
            });
        }

        $('li.has-sub a').on('click', function(e) {
            if ($(this).parent().find('.sub-menu').length && $(window).width() <= 1023) {
                e.preventDefault();
                $(this).parent().find('.sub-menu').slideToggle();
            }
        });

        $('.burger').on('click', function() {
            $('.site-header').toggleClass('active');

            if($(window).width() <= 1023) {
                $('.header_menu').toggleClass('active');
                $('body').toggleClass('menu-open');
            }
        });

        $(window).on('scroll', function() {
            if ($('.header_menu').hasClass('active') && $(window).width() >= 1024 || $('.site-header').hasClass('active') && !$('.search-form').hasClass('active')) {
                $('.site-header').removeClass('active');
                $('.header_menu').removeClass('active');
            }
            if ($(window).scrollTop() > trigger) {
                $('.site-header').addClass('fixed');

                $('.notify-wrap').css({
                    'top': '-'+ $('.site-header').height() + 'px'
                });
            } else if ($(window).scrollTop() <= trigger) {
                $('.site-header').removeClass('fixed');
                $('body').css({
                    'padding-top': 0
                });
                $('.notify-wrap').css({
                    'top': 0
                });
            }
        });

        $(window).on('resize', function() {
            if ($(window).width() >= 768) {
                $('.header-wrap').css({
                    'min-height': $('.site-header').innerHeight()
                });
            }

            if($(window).width() <= 1023 && $('.site-header').hasClass('active')) {
                $('.header_menu').addClass('active');
                $('body').addClass('menu-open');
            } else if ($(window).width() >= 1024) {
                $('body').removeClass('menu-open');
            }
        });

        $('.b-search').on('click', function() {
            $(this).toggleClass('active');
            $('.search-form').toggleClass('active');

            if ($(window).width() >= 1024) {
                if ($('.site-header').hasClass('active') && $('.site-header').hasClass('search-open')) {
                    $('.site-header').removeClass('active').removeClass('search-open');
                } else {
                    $('.site-header').addClass('active').addClass('search-open');
                }
            } else {
                $('.site-header').toggleClass('search-open');
            }
        });
    }
};