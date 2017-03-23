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

$(window).on('scroll', function() {

});

$(window).on('load', function () {

});