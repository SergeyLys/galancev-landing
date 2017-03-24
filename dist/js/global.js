(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

var _HOME = require('./pages/HOME');

var _HOME2 = _interopRequireDefault(_HOME);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var init = null;

switch (global.vars.page) {
    case 'home_page':
        init = _HOME2.default.init.bind(_HOME2.default);
        break;
    default:
        init = function init() {
            console.log('default init');
        };
}

$(document).ready(init());

$(window).on('scroll', function () {});

$(window).on('load', function () {});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./pages/HOME":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    init: function init() {
        this.headerFunctions();
    },
    headerFunctions: function headerFunctions() {
        var trigger = $('.site-header').offset().top;

        if ($(window).width() >= 768) {
            $('.header-wrap').css({
                'min-height': $('.site-header').innerHeight()
            });
        }

        $('li.has-sub a').on('click', function (e) {
            if ($(this).parent().find('.sub-menu').length && $(window).width() <= 1023) {
                e.preventDefault();
                $(this).parent().find('.sub-menu').slideToggle();
            }
        });

        $('.burger').on('click', function () {
            $('.site-header').toggleClass('active');

            if ($(window).width() <= 1023) {
                $('.header_menu').toggleClass('active');
                $('body').toggleClass('menu-open');
            }
        });

        $(window).on('scroll', function () {
            if ($('.header_menu').hasClass('active') && $(window).width() >= 1024 || $('.site-header').hasClass('active') && !$('.search-form').hasClass('active')) {
                $('.site-header').removeClass('active');
                $('.header_menu').removeClass('active');
            }
            if ($(window).scrollTop() > trigger) {
                $('.site-header').addClass('fixed');

                $('.notify-wrap').css({
                    'top': '-' + $('.site-header').height() + 'px'
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

        $(window).on('resize', function () {
            if ($(window).width() >= 768) {
                $('.header-wrap').css({
                    'min-height': $('.site-header').innerHeight()
                });
            }

            if ($(window).width() <= 1023 && $('.site-header').hasClass('active')) {
                $('.header_menu').addClass('active');
                $('body').addClass('menu-open');
            } else if ($(window).width() >= 1024) {
                $('body').removeClass('menu-open');
            }
        });

        $('.b-search').on('click', function () {
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

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    init: function init() {
        this.tabSwitcher();
    },
    tabSwitcher: function tabSwitcher() {
        $('#diagramm g').on('click', function (e) {

            if ($(e.target).prop('tagName') == 'tspan') {
                var anchor = $(e.target).parent().parent().parent().data('tab');
            } else {
                var anchor = $(e.target).parent().data('tab');
            }

            $(this).parent('svg').addClass('active');

            $('#diagramm g').removeClass('active');
            $('.tab-item').css({
                'display': 'none'
            });

            $(this).addClass('active');
            $('#' + anchor).css({
                'display': 'block'
            });
        });
    }
};

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _headerFunctions = require("../modules/headerFunctions");

var _headerFunctions2 = _interopRequireDefault(_headerFunctions);

var _tabSwitcher = require("../modules/tabSwitcher");

var _tabSwitcher2 = _interopRequireDefault(_tabSwitcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    init: function init() {
        _headerFunctions2.default.init();
        _tabSwitcher2.default.init();
    }
};

},{"../modules/headerFunctions":2,"../modules/tabSwitcher":3}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvanMvZ2xvYmFsLmpzIiwiYXNzZXRzL2pzL21vZHVsZXMvaGVhZGVyRnVuY3Rpb25zLmpzIiwiYXNzZXRzL2pzL21vZHVsZXMvdGFiU3dpdGNoZXIuanMiLCJhc3NldHMvanMvcGFnZXMvSE9NRS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQ0FBOzs7Ozs7QUFFQSxJQUFJLE9BQU8sSUFBWDs7QUFFQSxRQUFRLE9BQU8sSUFBUCxDQUFZLElBQXBCO0FBQ0ksU0FBSyxXQUFMO0FBQ0ksZUFBTyxlQUFLLElBQUwsQ0FBVSxJQUFWLGdCQUFQO0FBQ0E7QUFDSjtBQUNJLGVBQU8sZ0JBQU07QUFDVCxvQkFBUSxHQUFSLENBQVksY0FBWjtBQUNILFNBRkQ7QUFMUjs7QUFVQSxFQUFFLFFBQUYsRUFBWSxLQUFaLENBQWtCLE1BQWxCOztBQUVBLEVBQUUsTUFBRixFQUFVLEVBQVYsQ0FBYSxRQUFiLEVBQXVCLFlBQVcsQ0FFakMsQ0FGRDs7QUFJQSxFQUFFLE1BQUYsRUFBVSxFQUFWLENBQWEsTUFBYixFQUFxQixZQUFZLENBRWhDLENBRkQ7Ozs7Ozs7Ozs7a0JDbkJlO0FBRVgsUUFGVyxrQkFFTDtBQUNGLGFBQUssZUFBTDtBQUNILEtBSlU7QUFNWCxtQkFOVyw2QkFNUTtBQUNmLFlBQUksVUFBVSxFQUFFLGNBQUYsRUFBa0IsTUFBbEIsR0FBMkIsR0FBekM7O0FBRUEsWUFBSSxFQUFFLE1BQUYsRUFBVSxLQUFWLE1BQXFCLEdBQXpCLEVBQThCO0FBQzFCLGNBQUUsY0FBRixFQUFrQixHQUFsQixDQUFzQjtBQUNsQiw4QkFBYyxFQUFFLGNBQUYsRUFBa0IsV0FBbEI7QUFESSxhQUF0QjtBQUdIOztBQUVELFVBQUUsY0FBRixFQUFrQixFQUFsQixDQUFxQixPQUFyQixFQUE4QixVQUFTLENBQVQsRUFBWTtBQUN0QyxnQkFBSSxFQUFFLElBQUYsRUFBUSxNQUFS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QU0sTUFBUixFQUFnQixHQUFoQixDQUFvQjtBQUNoQiwyQkFBWTtBQURJLGFBQXBCO0FBR0gsU0FuQkQ7QUFvQkg7QUExQlUsQzs7Ozs7Ozs7O0FDQWY7Ozs7QUFDQTs7Ozs7O2tCQUVlO0FBQ1gsUUFEVyxrQkFDTDtBQUNGLGtDQUFnQixJQUFoQjtBQUNBLDhCQUFLLElBQUw7QUFDSDtBQUpVLEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IEhPTUUgZnJvbSBcIi4vcGFnZXMvSE9NRVwiO1xuXG5sZXQgaW5pdCA9IG51bGw7XG5cbnN3aXRjaCAoZ2xvYmFsLnZhcnMucGFnZSkge1xuICAgIGNhc2UgJ2hvbWVfcGFnZSc6XG4gICAgICAgIGluaXQgPSBIT01FLmluaXQuYmluZChIT01FKTtcbiAgICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgICAgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWZhdWx0IGluaXQnKTtcbiAgICAgICAgfTtcbn1cblxuJChkb2N1bWVudCkucmVhZHkoaW5pdCgpKTtcblxuJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcblxufSk7XG5cbiQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcblxufSk7IiwiXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBpbml0KCl7XG4gICAgICAgIHRoaXMuaGVhZGVyRnVuY3Rpb25zKCk7XG4gICAgfSxcblxuICAgIGhlYWRlckZ1bmN0aW9ucyAoKSB7XG4gICAgICAgIHZhciB0cmlnZ2VyID0gJCgnLnNpdGUtaGVhZGVyJykub2Zmc2V0KCkudG9wO1xuXG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+PSA3NjgpIHtcbiAgICAgICAgICAgICQoJy5oZWFkZXItd3JhcCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgJ21pbi1oZWlnaHQnOiAkKCcuc2l0ZS1oZWFkZXInKS5pbm5lckhlaWdodCgpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJ2xpLmhhcy1zdWIgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy5zdWItbWVudScpLmxlbmd0aCAmJiAkKHdpbmRvdykud2lkdGgoKSA8PSAxMDIzKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuZmluZCgnLnN1Yi1tZW51Jykuc2xpZGVUb2dnbGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmJ1cmdlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnLnNpdGUtaGVhZGVyJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICBpZigkKHdpbmRvdykud2lkdGgoKSA8PSAxMDIzKSB7XG4gICAgICAgICAgICAgICAgJCgnLmhlYWRlcl9tZW51JykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnbWVudS1vcGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoJCgnLmhlYWRlcl9tZW51JykuaGFzQ2xhc3MoJ2FjdGl2ZScpICYmICQod2luZG93KS53aWR0aCgpID49IDEwMjQgfHwgJCgnLnNpdGUtaGVhZGVyJykuaGFzQ2xhc3MoJ2FjdGl2ZScpICYmICEkKCcuc2VhcmNoLWZvcm0nKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAkKCcuc2l0ZS1oZWFkZXInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJCgnLmhlYWRlcl9tZW51JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IHRyaWdnZXIpIHtcbiAgICAgICAgICAgICAgICAkKCcuc2l0ZS1oZWFkZXInKS5hZGRDbGFzcygnZml4ZWQnKTtcblxuICAgICAgICAgICAgICAgICQoJy5ub3RpZnktd3JhcCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0b3AnOiAnLScrICQoJy5zaXRlLWhlYWRlcicpLmhlaWdodCgpICsgJ3B4J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPD0gdHJpZ2dlcikge1xuICAgICAgICAgICAgICAgICQoJy5zaXRlLWhlYWRlcicpLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAncGFkZGluZy10b3AnOiAwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLm5vdGlmeS13cmFwJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RvcCc6IDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+PSA3NjgpIHtcbiAgICAgICAgICAgICAgICAkKCcuaGVhZGVyLXdyYXAnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAnbWluLWhlaWdodCc6ICQoJy5zaXRlLWhlYWRlcicpLmlubmVySGVpZ2h0KClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoJCh3aW5kb3cpLndpZHRoKCkgPD0gMTAyMyAmJiAkKCcuc2l0ZS1oZWFkZXInKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAkKCcuaGVhZGVyX21lbnUnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdtZW51LW9wZW4nKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPj0gMTAyNCkge1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbWVudS1vcGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5iLXNlYXJjaCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAkKCcuc2VhcmNoLWZvcm0nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+PSAxMDI0KSB7XG4gICAgICAgICAgICAgICAgaWYgKCQoJy5zaXRlLWhlYWRlcicpLmhhc0NsYXNzKCdhY3RpdmUnKSAmJiAkKCcuc2l0ZS1oZWFkZXInKS5oYXNDbGFzcygnc2VhcmNoLW9wZW4nKSkge1xuICAgICAgICAgICAgICAgICAgICAkKCcuc2l0ZS1oZWFkZXInKS5yZW1vdmVDbGFzcygnYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ3NlYXJjaC1vcGVuJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnNpdGUtaGVhZGVyJykuYWRkQ2xhc3MoJ2FjdGl2ZScpLmFkZENsYXNzKCdzZWFyY2gtb3BlbicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnLnNpdGUtaGVhZGVyJykudG9nZ2xlQ2xhc3MoJ3NlYXJjaC1vcGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMudGFiU3dpdGNoZXIoKTtcbiAgICB9LFxuXG4gICAgdGFiU3dpdGNoZXIoKSB7XG4gICAgICAgICQoJyNkaWFncmFtbSBnJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXG4gICAgICAgICAgICBpZiAoJChlLnRhcmdldCkucHJvcCgndGFnTmFtZScpID09ICd0c3BhbicpIHtcbiAgICAgICAgICAgICAgICB2YXIgYW5jaG9yID0gJChlLnRhcmdldCkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuZGF0YSgndGFiJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBhbmNob3IgPSAkKGUudGFyZ2V0KS5wYXJlbnQoKS5kYXRhKCd0YWInKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoJ3N2ZycpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICAgICAgJCgnI2RpYWdyYW1tIGcnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAkKCcudGFiLWl0ZW0nKS5jc3Moe1xuICAgICAgICAgICAgICAgICdkaXNwbGF5JyA6ICdub25lJ1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgJCgnIycgKyBhbmNob3IpLmNzcyh7XG4gICAgICAgICAgICAgICAgJ2Rpc3BsYXknIDogJ2Jsb2NrJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgSGVhZGVyRnVuY3Rpb25zIGZyb20gXCIuLi9tb2R1bGVzL2hlYWRlckZ1bmN0aW9uc1wiO1xuaW1wb3J0IFRhYnMgZnJvbSBcIi4uL21vZHVsZXMvdGFiU3dpdGNoZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQoKXtcbiAgICAgICAgSGVhZGVyRnVuY3Rpb25zLmluaXQoKTtcbiAgICAgICAgVGFicy5pbml0KCk7XG4gICAgfVxufTsiXX0=
