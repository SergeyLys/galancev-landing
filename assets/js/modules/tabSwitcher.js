export default {
    init() {
        this.tabSwitcher();
    },

    tabSwitcher() {
        $('#diagramm g').on('click', function(e) {

            if ($(e.target).prop('tagName') == 'tspan') {
                var anchor = $(e.target).parent().parent().parent().data('tab');
            } else {
                var anchor = $(e.target).parent().data('tab');
            }

            $(this).parent('svg').addClass('active');

            $('#diagramm g').removeClass('active');
            $('.tab-item').css({
                'display' : 'none'
            });

            $(this).addClass('active');
            $('#' + anchor).css({
                'display' : 'block'
            });
        });
    }
}