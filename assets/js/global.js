import HOME from "./pages/HOME";

let init = null;

switch (global.vars.page) {
    case 'home_page':
        init = HOME.init.bind(HOME);
        break;
    default:
        init = () => {
            console.log('default init');
        };
}

$(document).ready(init());

$(window).on('resize', function() {
	if ($(window).width() >= 1024) {
		var maxHeight = -1;
		if ($('.contacts-title').length != 0) {
			$('.contacts-title').each(function() {
				$(this).removeAttr('style');
				maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
			});

			$('.contacts-title').each(function() {
				$(this).height(maxHeight);
			});
		}
	} else {
		if ($('.contacts-title').length != 0) {
			$('.contacts-title').each(function() {
				$(this).removeAttr('style');
			});
		}
	}
});

$(window).on('scroll', function() {

});

$(window).on('load', function () {

});