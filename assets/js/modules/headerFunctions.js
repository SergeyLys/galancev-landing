
export default {

    init(){
        this.headerFunctions();
    },

    headerFunctions () {
        $('body').css({
            'padding-top': $('.site-header').height()
        });

        $('.menu-button').on('click', function () {
            $(this).toggleClass('active');
            $('.site-nav').toggleClass('active');
        });
    }
};