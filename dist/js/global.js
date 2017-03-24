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
        $('body').css({
            'padding-top': $('.site-header').height()
        });

        $('.menu-button').on('click', function () {
            $(this).toggleClass('active');
            $('.site-nav').toggleClass('active');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvanMvZ2xvYmFsLmpzIiwiYXNzZXRzL2pzL21vZHVsZXMvaGVhZGVyRnVuY3Rpb25zLmpzIiwiYXNzZXRzL2pzL21vZHVsZXMvdGFiU3dpdGNoZXIuanMiLCJhc3NldHMvanMvcGFnZXMvSE9NRS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQ0FBOzs7Ozs7QUFFQSxJQUFJLE9BQU8sSUFBWDs7QUFFQSxRQUFRLE9BQU8sSUFBUCxDQUFZLElBQXBCO0FBQ0ksU0FBSyxXQUFMO0FBQ0ksZUFBTyxlQUFLLElBQUwsQ0FBVSxJQUFWLGdCQUFQO0FBQ0E7QUFDSjtBQUNJLGVBQU8sZ0JBQU07QUFDVCxvQkFBUSxHQUFSLENBQVksY0FBWjtBQUNILFNBRkQ7QUFMUjs7QUFVQSxFQUFFLFFBQUYsRUFBWSxLQUFaLENBQWtCLE1BQWxCOztBQUVBLEVBQUUsTUFBRixFQUFVLEVBQVYsQ0FBYSxRQUFiLEVBQXVCLFlBQVcsQ0FFakMsQ0FGRDs7QUFJQSxFQUFFLE1BQUYsRUFBVSxFQUFWLENBQWEsTUFBYixFQUFxQixZQUFZLENBRWhDLENBRkQ7Ozs7Ozs7Ozs7a0JDbkJlO0FBRVgsUUFGVyxrQkFFTDtBQUNGLGFBQUssZUFBTDtBQUNILEtBSlU7QUFNWCxtQkFOVyw2QkFNUTtBQUNmLFVBQUUsTUFBRixFQUFVLEdBQVYsQ0FBYztBQUNWLDJCQUFlLEVBQUUsY0FBRixFQUFrQixNQUFsQjtBQURMLFNBQWQ7O0FBSUEsVUFBRSxjQUFGLEVBQWtCLEVBQWxCLENBQXFCLE9BQXJCLEVBQThCLFlBQVk7QUFDdEMsY0FBRSxJQUFGLEVBQVEsV0FBUixDQUFvQixRQUFwQjtBQUNBLGNBQUUsV0FBRixFQUFlLFdBQWYsQ0FBMkIsUUFBM0I7QUFDSCxTQUhEO0FBSUg7QUFmVSxDOzs7Ozs7OztrQkNEQTtBQUNYLFFBRFcsa0JBQ0o7QUFDSCxhQUFLLFdBQUw7QUFDSCxLQUhVO0FBS1gsZUFMVyx5QkFLRztBQUNWLFVBQUUsYUFBRixFQUFpQixFQUFqQixDQUFvQixPQUFwQixFQUE2QixVQUFTLENBQVQsRUFBWTs7QUFFckMsZ0JBQUksRUFBRSxFQUFFLE1BQUosRUFBWSxJQUFaLENBQWlCLFNBQWpCLEtBQStCLE9BQW5DLEVBQTRDO0FBQ3hDLG9CQUFJLFNBQVMsRUFBRSxFQUFFLE1BQUosRUFBWSxNQUFaLEdBQXFCLE1BQXJCLEdBQThCLE1BQTlCLEdBQXVDLElBQXZDLENBQTRDLEtBQTVDLENBQWI7QUFDSCxhQUZELE1BRU87QUFDSCxvQkFBSSxTQUFTLEVBQUUsRUFBRSxNQUFKLEVBQVksTUFBWixHQUFxQixJQUFyQixDQUEwQixLQUExQixDQUFiO0FBQ0g7O0FBRUQsY0FBRSxJQUFGLEVBQVEsTUFBUixDQUFlLEtBQWYsRUFBc0IsUUFBdEIsQ0FBK0IsUUFBL0I7O0FBRUEsY0FBRSxhQUFGLEVBQWlCLFdBQWpCLENBQTZCLFFBQTdCO0FBQ0EsY0FBRSxXQUFGLEVBQWUsR0FBZixDQUFtQjtBQUNmLDJCQUFZO0FBREcsYUFBbkI7O0FBSUEsY0FBRSxJQUFGLEVBQVEsUUFBUixDQUFpQixRQUFqQjtBQUNBLGNBQUUsTUFBTSxNQUFSLEVBQWdCLEdBQWhCLENBQW9CO0FBQ2hCLDJCQUFZO0FBREksYUFBcEI7QUFHSCxTQW5CRDtBQW9CSDtBQTFCVSxDOzs7Ozs7Ozs7QUNBZjs7OztBQUNBOzs7Ozs7a0JBRWU7QUFDWCxRQURXLGtCQUNMO0FBQ0Ysa0NBQWdCLElBQWhCO0FBQ0EsOEJBQUssSUFBTDtBQUNIO0FBSlUsQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgSE9NRSBmcm9tIFwiLi9wYWdlcy9IT01FXCI7XG5cbmxldCBpbml0ID0gbnVsbDtcblxuc3dpdGNoIChnbG9iYWwudmFycy5wYWdlKSB7XG4gICAgY2FzZSAnaG9tZV9wYWdlJzpcbiAgICAgICAgaW5pdCA9IEhPTUUuaW5pdC5iaW5kKEhPTUUpO1xuICAgICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgICBpbml0ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlZmF1bHQgaW5pdCcpO1xuICAgICAgICB9O1xufVxuXG4kKGRvY3VtZW50KS5yZWFkeShpbml0KCkpO1xuXG4kKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xuXG59KTtcblxuJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuXG59KTsiLCJcbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIGluaXQoKXtcbiAgICAgICAgdGhpcy5oZWFkZXJGdW5jdGlvbnMoKTtcbiAgICB9LFxuXG4gICAgaGVhZGVyRnVuY3Rpb25zICgpIHtcbiAgICAgICAgJCgnYm9keScpLmNzcyh7XG4gICAgICAgICAgICAncGFkZGluZy10b3AnOiAkKCcuc2l0ZS1oZWFkZXInKS5oZWlnaHQoKVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcubWVudS1idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICQoJy5zaXRlLW5hdicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTsiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy50YWJTd2l0Y2hlcigpO1xuICAgIH0sXG5cbiAgICB0YWJTd2l0Y2hlcigpIHtcbiAgICAgICAgJCgnI2RpYWdyYW1tIGcnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cbiAgICAgICAgICAgIGlmICgkKGUudGFyZ2V0KS5wcm9wKCd0YWdOYW1lJykgPT0gJ3RzcGFuJykge1xuICAgICAgICAgICAgICAgIHZhciBhbmNob3IgPSAkKGUudGFyZ2V0KS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5kYXRhKCd0YWInKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGFuY2hvciA9ICQoZS50YXJnZXQpLnBhcmVudCgpLmRhdGEoJ3RhYicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgnc3ZnJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICAkKCcjZGlhZ3JhbW0gZycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICQoJy50YWItaXRlbScpLmNzcyh7XG4gICAgICAgICAgICAgICAgJ2Rpc3BsYXknIDogJ25vbmUnXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAkKCcjJyArIGFuY2hvcikuY3NzKHtcbiAgICAgICAgICAgICAgICAnZGlzcGxheScgOiAnYmxvY2snXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCBIZWFkZXJGdW5jdGlvbnMgZnJvbSBcIi4uL21vZHVsZXMvaGVhZGVyRnVuY3Rpb25zXCI7XG5pbXBvcnQgVGFicyBmcm9tIFwiLi4vbW9kdWxlcy90YWJTd2l0Y2hlclwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdCgpe1xuICAgICAgICBIZWFkZXJGdW5jdGlvbnMuaW5pdCgpO1xuICAgICAgICBUYWJzLmluaXQoKTtcbiAgICB9XG59OyJdfQ==
