import "../libs/sharrre/jquery.sharrre.js";

export default {
    init() {
        this.sharrre();
    },

    sharrre() {
        if ($('.feed__list .icon-twitter').length) {
            $('.feed__list .icon-twitter').sharrre({
                share: {twitter: true},
                url: $(this).data('url') != 'undefined' ? $(this).data('url') : '',
                text: $(this).data('text') != 'undefined' ? $(this).data('text') : '',
                enableHover: false,
                enableCounter: false,
                template: '<span></span>',
                click: function (api, options) {
                    console.log($(this).data('url'));
                    console.log($(this).data('text'));
                    api.simulateClick();
                    api.openPopup('twitter');
                }
            });
        }
        if ($('.feed__list .icon-facebook').length) {
            $('.feed__list .icon-facebook').sharrre({
                share: {facebook: true},
                url: $(this).data('url') != 'undefined' ? $(this).data('url') : '',
                text: $(this).data('text') != 'undefined' ? $(this).data('text') : '',
                enableHover: false,
                enableCounter: false,
                template: '<span></span>',
                click: function (api, options) {
                    console.log($(this).data('url'));
                    api.simulateClick();
                    api.openPopup('facebook');
                }
            });
        }
        if ($('.n-vk').length) {
            $('.n-vk').html(VK.Share.button(window.location.href, {
                noparse: true,
                type: 'custom',
                text: '<span class="fa fa-vk">'+$('.n-vk').attr('data-content')+'</span>'
            }));
        }
        // if ($('.feed__list .fa-vk').length) {
        //  $('.feed__list .fa-vk').sharrre({
        //     share: {facebook: true},
        //     url: $(this).data('url') != 'undefined' ? $(this).data('url') : '',
        //     text: $(this).data('text') != 'undefined' ? $(this).data('text') : '',
        //     enableHover: false,
        //     enableCounter: false,
        //     template: '<span></span>',
        //     click: function (api, options) {
        //       api.simulateClick();
        //       api.openPopup('facebook');
        //     }
        //  })
        // }
    }
}