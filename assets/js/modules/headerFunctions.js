
export default {

    init(){
        this.headerFunctions();
        this.oneHeight();
        this.scrollToAnchor();
    },

    headerFunctions () {
        $('body').css({
            'padding-top': $('.site-header').height()
        });

        $('.menu-button').on('click', function () {
            $(this).toggleClass('active');
            $('.site-nav').toggleClass('active');
        });

        $('.site-nav a').on('click', function() {
            if ($($(this).attr('href')).length != 0) {
                let anchor = $(this).attr('href');

                $('body, html').animate({
                    scrollTop: $(anchor).offset().top
                });
            }
        });
    },

    oneHeight() {
        if ($(window).width() >= 1024) {
            var maxHeight = -1;

            if ($('.contacts-title').length != 0) {
                $('.contacts-title').each(function() {
                    maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
                });

                $('.contacts-title').each(function() {
                    $(this).height(maxHeight);
                });
            }
        }
    },

    scrollToAnchor() {
        $('.has-anchor').on('click', function(e) {
            e.preventDefault();
            let anchor = $(this).attr('href');

            if ($(anchor).length != 0) {
                $('body, html').animate({
                    scrollTop: $(anchor).offset().top
                }, 500);
            }
        });
    }
};