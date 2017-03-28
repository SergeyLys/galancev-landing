export default {
    init() {
        this.tabSwitcher();
    },

    tabSwitcher() {
        $('.tab-wrapper').each(function() {
            var activeTab = $(this).find('.tab-link.active').attr('data-link');
            $(this).find(`[data-tab='${activeTab}']`).addClass('active');
        });

        $('.tab-link').on('click', function(e) {
            e.preventDefault();
            let tab = $(this).attr('data-link');

            $(e.target).closest('.tab-list').find('.tab-link').removeClass('active');
            console.log($(e.target).closest('.tab-list').find('.tab-link'));
            $(this).addClass('active');

            if ($(`[data-tab=${tab}]`).length != 0) {
                $(e.target).closest('.tab-wrapper').find('[data-tab]').removeClass('active');
                $(`[data-tab='${tab}']`).addClass('active');
            }
        });
    }
}