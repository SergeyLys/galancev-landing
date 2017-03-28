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

$(window).on('resize', function () {
	if ($(window).width() >= 1024) {
		var maxHeight = -1;
		if ($('.contacts-title').length != 0) {
			$('.contacts-title').each(function () {
				$(this).removeAttr('style');
				maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
			});

			$('.contacts-title').each(function () {
				$(this).height(maxHeight);
			});
		}
	} else {
		if ($('.contacts-title').length != 0) {
			$('.contacts-title').each(function () {
				$(this).removeAttr('style');
			});
		}
	}
});

$(window).on('scroll', function () {});

$(window).on('load', function () {});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./pages/HOME":10}],2:[function(require,module,exports){
"use strict";

/*! lightgallery - v1.2.12 - 2016-01-03
* http://sachinchoolur.github.io/lightGallery/
* Copyright (c) 2016 Sachin N; Licensed Apache 2.0 */
!function (a, b, c, d) {
  "use strict";
  var e = { fullScreen: !0 },
      f = function f(b) {
    return this.core = a(b).data("lightGallery"), this.$el = a(b), this.core.s = a.extend({}, e, this.core.s), this.init(), this;
  };f.prototype.init = function () {
    var a = "";if (this.core.s.fullScreen) {
      if (!(c.fullscreenEnabled || c.webkitFullscreenEnabled || c.mozFullScreenEnabled || c.msFullscreenEnabled)) return;a = '<span class="lg-fullscreen lg-icon"></span>', this.core.$outer.find(".lg-toolbar").append(a), this.fullScreen();
    }
  }, f.prototype.requestFullscreen = function () {
    var a = c.documentElement;a.requestFullscreen ? a.requestFullscreen() : a.msRequestFullscreen ? a.msRequestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.webkitRequestFullscreen && a.webkitRequestFullscreen();
  }, f.prototype.exitFullscreen = function () {
    c.exitFullscreen ? c.exitFullscreen() : c.msExitFullscreen ? c.msExitFullscreen() : c.mozCancelFullScreen ? c.mozCancelFullScreen() : c.webkitExitFullscreen && c.webkitExitFullscreen();
  }, f.prototype.fullScreen = function () {
    var b = this;a(c).on("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg", function () {
      b.core.$outer.toggleClass("lg-fullscreen-on");
    }), this.core.$outer.find(".lg-fullscreen").on("click.lg", function () {
      c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement || c.msFullscreenElement ? b.exitFullscreen() : b.requestFullscreen();
    });
  }, f.prototype.destroy = function () {
    this.exitFullscreen(), a(c).off("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg");
  }, a.fn.lightGallery.modules.fullscreen = f;
}(jQuery, window, document);

},{}],3:[function(require,module,exports){
"use strict";

/*! lightgallery - v1.2.12 - 2016-01-03
* http://sachinchoolur.github.io/lightGallery/
* Copyright (c) 2016 Sachin N; Licensed Apache 2.0 */
!function (a, b, c, d) {
  "use strict";
  var e = { thumbnail: !0, animateThumb: !0, currentPagerPosition: "middle", thumbWidth: 100, thumbContHeight: 100, thumbMargin: 5, exThumbImage: !1, showThumbByDefault: !0, toogleThumb: !0, pullCaptionUp: !0, enableThumbDrag: !0, enableThumbSwipe: !0, swipeThreshold: 50, loadYoutubeThumbnail: !0, youtubeThumbSize: 1, loadVimeoThumbnail: !0, vimeoThumbSize: "thumbnail_small", loadDailymotionThumbnail: !0 },
      f = function f(b) {
    return this.core = a(b).data("lightGallery"), this.core.s = a.extend({}, e, this.core.s), this.$el = a(b), this.$thumbOuter = null, this.thumbOuterWidth = 0, this.thumbTotalWidth = this.core.$items.length * (this.core.s.thumbWidth + this.core.s.thumbMargin), this.thumbIndex = this.core.index, this.left = 0, this.init(), this;
  };f.prototype.init = function () {
    var a = this;this.core.s.thumbnail && this.core.$items.length > 1 && (this.core.s.showThumbByDefault && setTimeout(function () {
      a.core.$outer.addClass("lg-thumb-open");
    }, 700), this.core.s.pullCaptionUp && this.core.$outer.addClass("lg-pull-caption-up"), this.build(), this.core.s.animateThumb ? (this.core.s.enableThumbDrag && !this.core.isTouch && this.core.doCss() && this.enableThumbDrag(), this.core.s.enableThumbSwipe && this.core.isTouch && this.core.doCss() && this.enableThumbSwipe(), this.thumbClickable = !1) : this.thumbClickable = !0, this.toogle(), this.thumbkeyPress());
  }, f.prototype.build = function () {
    function c(a, b, c) {
      var d,
          h = e.core.isVideo(a, c) || {},
          i = "";h.youtube || h.vimeo || h.dailymotion ? h.youtube ? d = e.core.s.loadYoutubeThumbnail ? "//img.youtube.com/vi/" + h.youtube[1] + "/" + e.core.s.youtubeThumbSize + ".jpg" : b : h.vimeo ? e.core.s.loadVimeoThumbnail ? (d = "//i.vimeocdn.com/video/error_" + g + ".jpg", i = h.vimeo[1]) : d = b : h.dailymotion && (d = e.core.s.loadDailymotionThumbnail ? "//www.dailymotion.com/thumbnail/video/" + h.dailymotion[1] : b) : d = b, f += '<div data-vimeo-id="' + i + '" class="lg-thumb-item" style="width:' + e.core.s.thumbWidth + "px; margin-right: " + e.core.s.thumbMargin + 'px"><img src="' + d + '" /></div>', i = "";
    }var d,
        e = this,
        f = "",
        g = "",
        h = '<div class="lg-thumb-outer"><div class="lg-thumb group"></div></div>';switch (this.core.s.vimeoThumbSize) {case "thumbnail_large":
        g = "640";break;case "thumbnail_medium":
        g = "200x150";break;case "thumbnail_small":
        g = "100x75";}if (e.core.$outer.addClass("lg-has-thumb"), e.core.$outer.find(".lg").append(h), e.$thumbOuter = e.core.$outer.find(".lg-thumb-outer"), e.thumbOuterWidth = e.$thumbOuter.width(), e.core.s.animateThumb && e.core.$outer.find(".lg-thumb").css({ width: e.thumbTotalWidth + "px", position: "relative" }), this.core.s.animateThumb && e.$thumbOuter.css("height", e.core.s.thumbContHeight + "px"), e.core.s.dynamic) for (var i = 0; i < e.core.s.dynamicEl.length; i++) {
      c(e.core.s.dynamicEl[i].src, e.core.s.dynamicEl[i].thumb, i);
    } else e.core.$items.each(function (b) {
      e.core.s.exThumbImage ? c(a(this).attr("href") || a(this).attr("data-src"), a(this).attr(e.core.s.exThumbImage), b) : c(a(this).attr("href") || a(this).attr("data-src"), a(this).find("img").attr("src"), b);
    });e.core.$outer.find(".lg-thumb").html(f), d = e.core.$outer.find(".lg-thumb-item"), d.each(function () {
      var b = a(this),
          c = b.attr("data-vimeo-id");c && a.getJSON("http://www.vimeo.com/api/v2/video/" + c + ".json?callback=?", { format: "json" }, function (a) {
        b.find("img").attr("src", a[0][e.core.s.vimeoThumbSize]);
      });
    }), d.eq(e.core.index).addClass("active"), e.core.$el.on("onBeforeSlide.lg.tm", function () {
      d.removeClass("active"), d.eq(e.core.index).addClass("active");
    }), d.on("click.lg touchend.lg", function () {
      var b = a(this);setTimeout(function () {
        (e.thumbClickable && !e.core.lgBusy || !e.core.doCss()) && (e.core.index = b.index(), e.core.slide(e.core.index, !1, !0));
      }, 50);
    }), e.core.$el.on("onBeforeSlide.lg.tm", function () {
      e.animateThumb(e.core.index);
    }), a(b).on("resize.lg.thumb orientationchange.lg.thumb", function () {
      setTimeout(function () {
        e.animateThumb(e.core.index), e.thumbOuterWidth = e.$thumbOuter.width();
      }, 200);
    });
  }, f.prototype.setTranslate = function (a) {
    this.core.$outer.find(".lg-thumb").css({ transform: "translate3d(-" + a + "px, 0px, 0px)" });
  }, f.prototype.animateThumb = function (a) {
    var b = this.core.$outer.find(".lg-thumb");if (this.core.s.animateThumb) {
      var c;switch (this.core.s.currentPagerPosition) {case "left":
          c = 0;break;case "middle":
          c = this.thumbOuterWidth / 2 - this.core.s.thumbWidth / 2;break;case "right":
          c = this.thumbOuterWidth - this.core.s.thumbWidth;}this.left = (this.core.s.thumbWidth + this.core.s.thumbMargin) * a - 1 - c, this.left > this.thumbTotalWidth - this.thumbOuterWidth && (this.left = this.thumbTotalWidth - this.thumbOuterWidth), this.left < 0 && (this.left = 0), this.core.lGalleryOn ? (b.hasClass("on") || this.core.$outer.find(".lg-thumb").css("transition-duration", this.core.s.speed + "ms"), this.core.doCss() || b.animate({ left: -this.left + "px" }, this.core.s.speed)) : this.core.doCss() || b.css("left", -this.left + "px"), this.setTranslate(this.left);
    }
  }, f.prototype.enableThumbDrag = function () {
    var c = this,
        d = 0,
        e = 0,
        f = !1,
        g = !1,
        h = 0;c.$thumbOuter.addClass("lg-grab"), c.core.$outer.find(".lg-thumb").on("mousedown.lg.thumb", function (a) {
      c.thumbTotalWidth > c.thumbOuterWidth && (a.preventDefault(), d = a.pageX, f = !0, c.core.$outer.scrollLeft += 1, c.core.$outer.scrollLeft -= 1, c.thumbClickable = !1, c.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"));
    }), a(b).on("mousemove.lg.thumb", function (a) {
      f && (h = c.left, g = !0, e = a.pageX, c.$thumbOuter.addClass("lg-dragging"), h -= e - d, h > c.thumbTotalWidth - c.thumbOuterWidth && (h = c.thumbTotalWidth - c.thumbOuterWidth), 0 > h && (h = 0), c.setTranslate(h));
    }), a(b).on("mouseup.lg.thumb", function () {
      g ? (g = !1, c.$thumbOuter.removeClass("lg-dragging"), c.left = h, Math.abs(e - d) < c.core.s.swipeThreshold && (c.thumbClickable = !0)) : c.thumbClickable = !0, f && (f = !1, c.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab"));
    });
  }, f.prototype.enableThumbSwipe = function () {
    var a = this,
        b = 0,
        c = 0,
        d = !1,
        e = 0;a.core.$outer.find(".lg-thumb").on("touchstart.lg", function (c) {
      a.thumbTotalWidth > a.thumbOuterWidth && (c.preventDefault(), b = c.originalEvent.targetTouches[0].pageX, a.thumbClickable = !1);
    }), a.core.$outer.find(".lg-thumb").on("touchmove.lg", function (f) {
      a.thumbTotalWidth > a.thumbOuterWidth && (f.preventDefault(), c = f.originalEvent.targetTouches[0].pageX, d = !0, a.$thumbOuter.addClass("lg-dragging"), e = a.left, e -= c - b, e > a.thumbTotalWidth - a.thumbOuterWidth && (e = a.thumbTotalWidth - a.thumbOuterWidth), 0 > e && (e = 0), a.setTranslate(e));
    }), a.core.$outer.find(".lg-thumb").on("touchend.lg", function () {
      a.thumbTotalWidth > a.thumbOuterWidth && d ? (d = !1, a.$thumbOuter.removeClass("lg-dragging"), Math.abs(c - b) < a.core.s.swipeThreshold && (a.thumbClickable = !0), a.left = e) : a.thumbClickable = !0;
    });
  }, f.prototype.toogle = function () {
    var a = this;a.core.s.toogleThumb && (a.core.$outer.addClass("lg-can-toggle"), a.$thumbOuter.append('<span class="lg-toogle-thumb lg-icon"></span>'), a.core.$outer.find(".lg-toogle-thumb").on("click.lg", function () {
      a.core.$outer.toggleClass("lg-thumb-open");
    }));
  }, f.prototype.thumbkeyPress = function () {
    var c = this;a(b).on("keydown.lg.thumb", function (a) {
      38 === a.keyCode ? (a.preventDefault(), c.core.$outer.addClass("lg-thumb-open")) : 40 === a.keyCode && (a.preventDefault(), c.core.$outer.removeClass("lg-thumb-open"));
    });
  }, f.prototype.destroy = function () {
    this.core.s.thumbnail && this.core.$items.length > 1 && (a(b).off("resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb"), this.$thumbOuter.remove(), this.core.$outer.removeClass("lg-has-thumb"));
  }, a.fn.lightGallery.modules.Thumbnail = f;
}(jQuery, window, document);

},{}],4:[function(require,module,exports){
"use strict";

/*! lightgallery - v1.2.12 - 2016-01-03
* http://sachinchoolur.github.io/lightGallery/
* Copyright (c) 2016 Sachin N; Licensed Apache 2.0 */
!function (a, b, c, d) {
  "use strict";
  function e(b, d) {
    if (this.el = b, this.$el = a(b), this.s = a.extend({}, f, d), this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) throw "When using dynamic mode, you must also define dynamicEl as an Array.";return this.modules = {}, this.lGalleryOn = !1, this.lgBusy = !1, this.hideBartimeout = !1, this.isTouch = "ontouchstart" in c.documentElement, this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1), this.s.dynamic ? this.$items = this.s.dynamicEl : "this" === this.s.selector ? this.$items = this.$el : "" !== this.s.selector ? this.s.selectWithin ? this.$items = a(this.s.selectWithin).find(this.s.selector) : this.$items = this.$el.find(a(this.s.selector)) : this.$items = this.$el.children(), this.$slide = "", this.$outer = "", this.init(), this;
  }var f = { mode: "lg-slide", cssEasing: "ease", easing: "linear", speed: 600, height: "100%", width: "100%", addClass: "", startClass: "lg-start-zoom", backdropDuration: 150, hideBarsDelay: 6e3, useLeft: !1, closable: !0, loop: !0, escKey: !0, keyPress: !0, controls: !0, slideEndAnimatoin: !0, hideControlOnEnd: !1, mousewheel: !0, appendSubHtmlTo: ".lg-sub-html", preload: 1, showAfterLoad: !0, selector: "", selectWithin: "", nextHtml: "", prevHtml: "", index: !1, iframeMaxWidth: "100%", download: !0, counter: !0, appendCounterTo: ".lg-toolbar", swipeThreshold: 50, enableSwipe: !0, enableDrag: !0, dynamic: !1, dynamicEl: [], galleryId: 1 };e.prototype.init = function () {
    var c = this;c.s.preload > c.$items.length && (c.s.preload = c.$items.length);var d = b.location.hash;d.indexOf("lg=" + this.s.galleryId) > 0 && (c.index = parseInt(d.split("&slide=")[1], 10), a("body").addClass("lg-from-hash"), a("body").hasClass("lg-on") || setTimeout(function () {
      c.build(c.index), a("body").addClass("lg-on");
    })), c.s.dynamic ? (c.$el.trigger("onBeforeOpen.lg"), c.index = c.s.index || 0, a("body").hasClass("lg-on") || setTimeout(function () {
      c.build(c.index), a("body").addClass("lg-on");
    })) : c.$items.on("click.lgcustom", function (b) {
      try {
        b.preventDefault(), b.preventDefault();
      } catch (d) {
        b.returnValue = !1;
      }c.$el.trigger("onBeforeOpen.lg"), c.index = c.s.index || c.$items.index(this), a("body").hasClass("lg-on") || (c.build(c.index), a("body").addClass("lg-on"));
    });
  }, e.prototype.build = function (b) {
    var c = this;c.structure(), a.each(a.fn.lightGallery.modules, function (b) {
      c.modules[b] = new a.fn.lightGallery.modules[b](c.el);
    }), c.slide(b, !1, !1), c.s.keyPress && c.keyPress(), c.$items.length > 1 && (c.arrow(), setTimeout(function () {
      c.enableDrag(), c.enableSwipe();
    }, 50), c.s.mousewheel && c.mousewheel()), c.counter(), c.closeGallery(), c.$el.trigger("onAfterOpen.lg"), c.$outer.on("mousemove.lg click.lg touchstart.lg", function () {
      c.$outer.removeClass("lg-hide-items"), clearTimeout(c.hideBartimeout), c.hideBartimeout = setTimeout(function () {
        c.$outer.addClass("lg-hide-items");
      }, c.s.hideBarsDelay);
    });
  }, e.prototype.structure = function () {
    var c,
        d = "",
        e = "",
        f = 0,
        g = "",
        h = this;for (a("body").append('<div class="lg-backdrop"></div>'), a(".lg-backdrop").css("transition-duration", this.s.backdropDuration + "ms"), f = 0; f < this.$items.length; f++) {
      d += '<div class="lg-item"></div>';
    }if (this.s.controls && this.$items.length > 1 && (e = '<div class="lg-actions"><div class="lg-prev lg-icon">' + this.s.prevHtml + '</div><div class="lg-next lg-icon">' + this.s.nextHtml + "</div></div>"), ".lg-sub-html" === this.s.appendSubHtmlTo && (g = '<div class="lg-sub-html"></div>'), c = '<div class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + d + '</div><div class="lg-toolbar group"><span class="lg-close lg-icon"></span></div>' + e + g + "</div></div>", a("body").append(c), this.$outer = a(".lg-outer"), this.$slide = this.$outer.find(".lg-item"), this.s.useLeft ? (this.$outer.addClass("lg-use-left"), this.s.mode = "lg-slide") : this.$outer.addClass("lg-use-css3"), h.setTop(), a(b).on("resize.lg orientationchange.lg", function () {
      setTimeout(function () {
        h.setTop();
      }, 100);
    }), this.$slide.eq(this.index).addClass("lg-current"), this.doCss() ? this.$outer.addClass("lg-css3") : (this.$outer.addClass("lg-css"), this.s.speed = 0), this.$outer.addClass(this.s.mode), this.s.enableDrag && this.$items.length > 1 && this.$outer.addClass("lg-grab"), this.s.showAfterLoad && this.$outer.addClass("lg-show-after-load"), this.doCss()) {
      var i = this.$outer.find(".lg-inner");i.css("transition-timing-function", this.s.cssEasing), i.css("transition-duration", this.s.speed + "ms");
    }a(".lg-backdrop").addClass("in"), setTimeout(function () {
      h.$outer.addClass("lg-visible");
    }, this.s.backdropDuration), this.s.download && this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'), this.prevScrollTop = a(b).scrollTop();
  }, e.prototype.setTop = function () {
    if ("100%" !== this.s.height) {
      var c = a(b).height(),
          d = (c - parseInt(this.s.height, 10)) / 2,
          e = this.$outer.find(".lg");c >= parseInt(this.s.height, 10) ? e.css("top", d + "px") : e.css("top", "0px");
    }
  }, e.prototype.doCss = function () {
    var a = function a() {
      var a = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"],
          b = c.documentElement,
          d = 0;for (d = 0; d < a.length; d++) {
        if (a[d] in b.style) return !0;
      }
    };return a() ? !0 : !1;
  }, e.prototype.isVideo = function (a, b) {
    var c;if (c = this.s.dynamic ? this.s.dynamicEl[b].html : this.$items.eq(b).attr("data-html"), !a && c) return { html5: !0 };var d = a.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),
        e = a.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
        f = a.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i);return d ? { youtube: d } : e ? { vimeo: e } : f ? { dailymotion: f } : void 0;
  }, e.prototype.counter = function () {
    this.s.counter && a(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + "</span></div>");
  }, e.prototype.addHtml = function (b) {
    var c,
        d = null;if (this.s.dynamic ? this.s.dynamicEl[b].subHtmlUrl ? c = this.s.dynamicEl[b].subHtmlUrl : d = this.s.dynamicEl[b].subHtml : this.$items.eq(b).attr("data-sub-html-url") ? c = this.$items.eq(b).attr("data-sub-html-url") : d = this.$items.eq(b).attr("data-sub-html"), !c) if ("undefined" != typeof d && null !== d) {
      var e = d.substring(0, 1);d = "." === e || "#" === e ? a(d).html() : d;
    } else d = "";".lg-sub-html" === this.s.appendSubHtmlTo ? c ? this.$outer.find(this.s.appendSubHtmlTo).load(c) : this.$outer.find(this.s.appendSubHtmlTo).html(d) : c ? this.$slide.eq(b).load(c) : this.$slide.eq(b).append(d), "undefined" != typeof d && null !== d && ("" === d ? this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html") : this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")), this.$el.trigger("onAfterAppendSubHtml.lg", [b]);
  }, e.prototype.preload = function (a) {
    var b = 1,
        c = 1;for (b = 1; b <= this.s.preload && !(b >= this.$items.length - a); b++) {
      this.loadContent(a + b, !1, 0);
    }for (c = 1; c <= this.s.preload && !(0 > a - c); c++) {
      this.loadContent(a - c, !1, 0);
    }
  }, e.prototype.loadContent = function (c, d, e) {
    var f,
        g,
        h,
        i,
        j,
        k,
        l = this,
        m = !1,
        n = function n(c) {
      for (var d = [], e = [], f = 0; f < c.length; f++) {
        var h = c[f].split(" ");"" === h[0] && h.splice(0, 1), e.push(h[0]), d.push(h[1]);
      }for (var i = a(b).width(), j = 0; j < d.length; j++) {
        if (parseInt(d[j], 10) > i) {
          g = e[j];break;
        }
      }
    };if (l.s.dynamic) {
      if (l.s.dynamicEl[c].poster && (m = !0, h = l.s.dynamicEl[c].poster), k = l.s.dynamicEl[c].html, g = l.s.dynamicEl[c].src, l.s.dynamicEl[c].responsive) {
        var o = l.s.dynamicEl[c].responsive.split(",");n(o);
      }i = l.s.dynamicEl[c].srcset, j = l.s.dynamicEl[c].sizes;
    } else {
      if (l.$items.eq(c).attr("data-poster") && (m = !0, h = l.$items.eq(c).attr("data-poster")), k = l.$items.eq(c).attr("data-html"), g = l.$items.eq(c).attr("href") || l.$items.eq(c).attr("data-src"), l.$items.eq(c).attr("data-responsive")) {
        var p = l.$items.eq(c).attr("data-responsive").split(",");n(p);
      }i = l.$items.eq(c).attr("data-srcset"), j = l.$items.eq(c).attr("data-sizes");
    }var q = !1;l.s.dynamic ? l.s.dynamicEl[c].iframe && (q = !0) : "true" === l.$items.eq(c).attr("data-iframe") && (q = !0);var r = l.isVideo(g, c);if (!l.$slide.eq(c).hasClass("lg-loaded")) {
      if (q) l.$slide.eq(c).prepend('<div class="lg-video-cont" style="max-width:' + l.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + g + '"  allowfullscreen="true"></iframe></div></div>');else if (m) {
        var s = "";s = r && r.youtube ? "lg-has-youtube" : r && r.vimeo ? "lg-has-vimeo" : "lg-has-html5", l.$slide.eq(c).prepend('<div class="lg-video-cont ' + s + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + h + '" /></div></div>');
      } else r ? (l.$slide.eq(c).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'), l.$el.trigger("hasVideo.lg", [c, g, k])) : l.$slide.eq(c).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + g + '" /></div>');if (l.$el.trigger("onAferAppendSlide.lg", [c]), f = l.$slide.eq(c).find(".lg-object"), j && f.attr("sizes", j), i) {
        f.attr("srcset", i);try {
          picturefill({ elements: [f[0]] });
        } catch (t) {
          console.error("Make sure you have included Picturefill version 2");
        }
      }".lg-sub-html" !== this.s.appendSubHtmlTo && l.addHtml(c), l.$slide.eq(c).addClass("lg-loaded");
    }l.$slide.eq(c).find(".lg-object").on("load.lg error.lg", function () {
      var b = 0;e && !a("body").hasClass("lg-from-hash") && (b = e), setTimeout(function () {
        l.$slide.eq(c).addClass("lg-complete"), l.$el.trigger("onSlideItemLoad.lg", [c, e || 0]);
      }, b);
    }), r && r.html5 && !m && l.$slide.eq(c).addClass("lg-complete"), d === !0 && (l.$slide.eq(c).hasClass("lg-complete") ? l.preload(c) : l.$slide.eq(c).find(".lg-object").on("load.lg error.lg", function () {
      l.preload(c);
    }));
  }, e.prototype.slide = function (b, c, d) {
    var e = this.$outer.find(".lg-current").index(),
        f = this;if (!f.lGalleryOn || e !== b) {
      var g = this.$slide.length,
          h = f.lGalleryOn ? this.s.speed : 0,
          i = !1,
          j = !1;if (!f.lgBusy) {
        if (this.s.download) {
          var k;k = f.s.dynamic ? f.s.dynamicEl[b].downloadUrl !== !1 && (f.s.dynamicEl[b].downloadUrl || f.s.dynamicEl[b].src) : "false" !== f.$items.eq(b).attr("data-download-url") && (f.$items.eq(b).attr("data-download-url") || f.$items.eq(b).attr("href") || f.$items.eq(b).attr("data-src")), k ? (a("#lg-download").attr("href", k), f.$outer.removeClass("lg-hide-download")) : f.$outer.addClass("lg-hide-download");
        }if (this.$el.trigger("onBeforeSlide.lg", [e, b, c, d]), f.lgBusy = !0, clearTimeout(f.hideBartimeout), ".lg-sub-html" === this.s.appendSubHtmlTo && setTimeout(function () {
          f.addHtml(b);
        }, h), this.arrowDisable(b), c) {
          var l = b - 1,
              m = b + 1;0 === b && e === g - 1 ? (m = 0, l = g - 1) : b === g - 1 && 0 === e && (m = 0, l = g - 1), this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide"), f.$slide.eq(l).addClass("lg-prev-slide"), f.$slide.eq(m).addClass("lg-next-slide"), f.$slide.eq(b).addClass("lg-current");
        } else f.$outer.addClass("lg-no-trans"), this.$slide.removeClass("lg-prev-slide lg-next-slide"), e > b ? (j = !0, 0 !== b || e !== g - 1 || d || (j = !1, i = !0)) : b > e && (i = !0, b !== g - 1 || 0 !== e || d || (j = !0, i = !1)), j ? (this.$slide.eq(b).addClass("lg-prev-slide"), this.$slide.eq(e).addClass("lg-next-slide")) : i && (this.$slide.eq(b).addClass("lg-next-slide"), this.$slide.eq(e).addClass("lg-prev-slide")), setTimeout(function () {
          f.$slide.removeClass("lg-current"), f.$slide.eq(b).addClass("lg-current"), f.$outer.removeClass("lg-no-trans");
        }, 50);f.lGalleryOn ? (setTimeout(function () {
          f.loadContent(b, !0, 0);
        }, this.s.speed + 50), setTimeout(function () {
          f.lgBusy = !1, f.$el.trigger("onAfterSlide.lg", [e, b, c, d]);
        }, this.s.speed)) : (f.loadContent(b, !0, f.s.backdropDuration), f.lgBusy = !1, f.$el.trigger("onAfterSlide.lg", [e, b, c, d])), f.lGalleryOn = !0, this.s.counter && a("#lg-counter-current").text(b + 1);
      }
    }
  }, e.prototype.goToNextSlide = function (a) {
    var b = this;b.lgBusy || (b.index + 1 < b.$slide.length ? (b.index++, b.$el.trigger("onBeforeNextSlide.lg", [b.index]), b.slide(b.index, a, !1)) : b.s.loop ? (b.index = 0, b.$el.trigger("onBeforeNextSlide.lg", [b.index]), b.slide(b.index, a, !1)) : b.s.slideEndAnimatoin && (b.$outer.addClass("lg-right-end"), setTimeout(function () {
      b.$outer.removeClass("lg-right-end");
    }, 400)));
  }, e.prototype.goToPrevSlide = function (a) {
    var b = this;b.lgBusy || (b.index > 0 ? (b.index--, b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]), b.slide(b.index, a, !1)) : b.s.loop ? (b.index = b.$items.length - 1, b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]), b.slide(b.index, a, !1)) : b.s.slideEndAnimatoin && (b.$outer.addClass("lg-left-end"), setTimeout(function () {
      b.$outer.removeClass("lg-left-end");
    }, 400)));
  }, e.prototype.keyPress = function () {
    var c = this;this.$items.length > 1 && a(b).on("keyup.lg", function (a) {
      c.$items.length > 1 && (37 === a.keyCode && (a.preventDefault(), c.goToPrevSlide()), 39 === a.keyCode && (a.preventDefault(), c.goToNextSlide()));
    }), a(b).on("keydown.lg", function (a) {
      c.s.escKey === !0 && 27 === a.keyCode && (a.preventDefault(), c.$outer.hasClass("lg-thumb-open") ? c.$outer.removeClass("lg-thumb-open") : c.destroy());
    });
  }, e.prototype.arrow = function () {
    var a = this;this.$outer.find(".lg-prev").on("click.lg", function () {
      a.goToPrevSlide();
    }), this.$outer.find(".lg-next").on("click.lg", function () {
      a.goToNextSlide();
    });
  }, e.prototype.arrowDisable = function (a) {
    !this.s.loop && this.s.hideControlOnEnd && (a + 1 < this.$slide.length ? this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-next").attr("disabled", "disabled").addClass("disabled"), a > 0 ? this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-prev").attr("disabled", "disabled").addClass("disabled"));
  }, e.prototype.setTranslate = function (a, b, c) {
    this.s.useLeft ? a.css("left", b) : a.css({ transform: "translate3d(" + b + "px, " + c + "px, 0px)" });
  }, e.prototype.touchMove = function (b, c) {
    var d = c - b;this.$outer.addClass("lg-dragging"), this.setTranslate(this.$slide.eq(this.index), d, 0), this.setTranslate(a(".lg-prev-slide"), -this.$slide.eq(this.index).width() + d, 0), this.setTranslate(a(".lg-next-slide"), this.$slide.eq(this.index).width() + d, 0);
  }, e.prototype.touchEnd = function (a) {
    var b = this;"lg-slide" !== b.s.mode && b.$outer.addClass("lg-slide"), this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity", "0"), setTimeout(function () {
      b.$outer.removeClass("lg-dragging"), 0 > a && Math.abs(a) > b.s.swipeThreshold ? b.goToNextSlide(!0) : a > 0 && Math.abs(a) > b.s.swipeThreshold ? b.goToPrevSlide(!0) : Math.abs(a) < 5 && b.$el.trigger("onSlideClick.lg"), b.$slide.removeAttr("style");
    }), setTimeout(function () {
      b.$outer.hasClass("lg-dragging") || "lg-slide" === b.s.mode || b.$outer.removeClass("lg-slide");
    }, b.s.speed + 100);
  }, e.prototype.enableSwipe = function () {
    var a = this,
        b = 0,
        c = 0,
        d = !1;a.s.enableSwipe && a.isTouch && a.doCss() && (a.$slide.on("touchstart.lg", function (c) {
      a.$outer.hasClass("lg-zoomed") || a.lgBusy || (c.preventDefault(), a.manageSwipeClass(), b = c.originalEvent.targetTouches[0].pageX);
    }), a.$slide.on("touchmove.lg", function (e) {
      a.$outer.hasClass("lg-zoomed") || (e.preventDefault(), c = e.originalEvent.targetTouches[0].pageX, a.touchMove(b, c), d = !0);
    }), a.$slide.on("touchend.lg", function () {
      a.$outer.hasClass("lg-zoomed") || (d ? (d = !1, a.touchEnd(c - b)) : a.$el.trigger("onSlideClick.lg"));
    }));
  }, e.prototype.enableDrag = function () {
    var c = this,
        d = 0,
        e = 0,
        f = !1,
        g = !1;c.s.enableDrag && !c.isTouch && c.doCss() && (c.$slide.on("mousedown.lg", function (b) {
      c.$outer.hasClass("lg-zoomed") || (a(b.target).hasClass("lg-object") || a(b.target).hasClass("lg-video-play")) && (b.preventDefault(), c.lgBusy || (c.manageSwipeClass(), d = b.pageX, f = !0, c.$outer.scrollLeft += 1, c.$outer.scrollLeft -= 1, c.$outer.removeClass("lg-grab").addClass("lg-grabbing"), c.$el.trigger("onDragstart.lg")));
    }), a(b).on("mousemove.lg", function (a) {
      f && (g = !0, e = a.pageX, c.touchMove(d, e), c.$el.trigger("onDragmove.lg"));
    }), a(b).on("mouseup.lg", function (b) {
      g ? (g = !1, c.touchEnd(e - d), c.$el.trigger("onDragend.lg")) : (a(b.target).hasClass("lg-object") || a(b.target).hasClass("lg-video-play")) && c.$el.trigger("onSlideClick.lg"), f && (f = !1, c.$outer.removeClass("lg-grabbing").addClass("lg-grab"));
    }));
  }, e.prototype.manageSwipeClass = function () {
    var a = this.index + 1,
        b = this.index - 1,
        c = this.$slide.length;this.s.loop && (0 === this.index ? b = c - 1 : this.index === c - 1 && (a = 0)), this.$slide.removeClass("lg-next-slide lg-prev-slide"), b > -1 && this.$slide.eq(b).addClass("lg-prev-slide"), this.$slide.eq(a).addClass("lg-next-slide");
  }, e.prototype.mousewheel = function () {
    var a = this;a.$outer.on("mousewheel.lg", function (b) {
      b.deltaY && (b.deltaY > 0 ? a.goToPrevSlide() : a.goToNextSlide(), b.preventDefault());
    });
  }, e.prototype.closeGallery = function () {
    var b = this,
        c = !1;this.$outer.find(".lg-close").on("click.lg", function () {
      b.destroy();
    }), b.s.closable && (b.$outer.on("mousedown.lg", function (b) {
      c = a(b.target).is(".lg-outer") || a(b.target).is(".lg-item ") || a(b.target).is(".lg-img-wrap") ? !0 : !1;
    }), b.$outer.on("mouseup.lg", function (d) {
      (a(d.target).is(".lg-outer") || a(d.target).is(".lg-item ") || a(d.target).is(".lg-img-wrap") && c) && (b.$outer.hasClass("lg-dragging") || b.destroy());
    }));
  }, e.prototype.destroy = function (c) {
    var d = this;c || d.$el.trigger("onBeforeClose.lg"), a(b).scrollTop(d.prevScrollTop), c && (d.s.dynamic || this.$items.off("click.lg click.lgcustom"), a.removeData(d.el, "lightGallery")), this.$el.off(".lg.tm"), a.each(a.fn.lightGallery.modules, function (a) {
      d.modules[a] && d.modules[a].destroy();
    }), this.lGalleryOn = !1, clearTimeout(d.hideBartimeout), this.hideBartimeout = !1, a(b).off(".lg"), a("body").removeClass("lg-on lg-from-hash"), d.$outer && d.$outer.removeClass("lg-visible"), a(".lg-backdrop").removeClass("in"), setTimeout(function () {
      d.$outer && d.$outer.remove(), a(".lg-backdrop").remove(), c || d.$el.trigger("onCloseAfter.lg");
    }, d.s.backdropDuration + 50);
  }, a.fn.lightGallery = function (b) {
    return this.each(function () {
      if (a.data(this, "lightGallery")) try {
        a(this).data("lightGallery").init();
      } catch (c) {
        console.error("lightGallery has not initiated properly");
      } else a.data(this, "lightGallery", new e(this, b));
    });
  }, a.fn.lightGallery.modules = {};
}(jQuery, window, document);

},{}],5:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
(function (factory) {
    'use strict';

    factory(jQuery);
})(function ($) {
    'use strict';

    var Slick = window.Slick || {};

    Slick = function () {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this,
                dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function customPaging(slider, i) {
                    return $('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;

            _.registerBreakpoints();
            _.init(true);
        }

        return Slick;
    }();

    Slick.prototype.activateADA = function () {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });
    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function (markup, index, addBefore) {

        var _ = this;

        if (typeof index === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || index >= _.slideCount) {
            return false;
        }

        _.unload();

        if (typeof index === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function (index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();
    };

    Slick.prototype.animateHeight = function () {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function (targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }
        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -_.currentLeft;
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function step(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' + now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' + now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function complete() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });
            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function () {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }
            }
        }
    };

    Slick.prototype.getNavTarget = function () {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if (asNavFor && asNavFor !== null) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;
    };

    Slick.prototype.asNavFor = function (index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if (asNavFor !== null && (typeof asNavFor === 'undefined' ? 'undefined' : _typeof(asNavFor)) === 'object') {
            asNavFor.each(function () {
                var target = $(this).slick('getSlick');
                if (!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }
    };

    Slick.prototype.applyTransition = function (slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }
    };

    Slick.prototype.autoPlay = function () {

        var _ = this;

        _.autoPlayClear();

        if (_.slideCount > _.options.slidesToShow) {
            _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
        }
    };

    Slick.prototype.autoPlayClear = function () {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }
    };

    Slick.prototype.autoPlayIterator = function () {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if (!_.paused && !_.interrupted && !_.focussed) {

            if (_.options.infinite === false) {

                if (_.direction === 1 && _.currentSlide + 1 === _.slideCount - 1) {
                    _.direction = 0;
                } else if (_.direction === 0) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if (_.currentSlide - 1 === 0) {
                        _.direction = 1;
                    }
                }
            }

            _.slideHandler(slideTo);
        }
    };

    Slick.prototype.buildArrows = function () {

        var _ = this;

        if (_.options.arrows === true) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if (_.slideCount > _.options.slidesToShow) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                }
            } else {

                _.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({
                    'aria-disabled': 'true',
                    'tabindex': '-1'
                });
            }
        }
    };

    Slick.prototype.buildDots = function () {

        var _ = this,
            i,
            dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');
        }
    };

    Slick.prototype.buildOut = function () {

        var _ = this;

        _.$slides = _.$slider.children(_.options.slide + ':not(.slick-cloned)').addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function (index, element) {
            $(element).attr('data-slick-index', index).data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = _.slideCount === 0 ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }
    };

    Slick.prototype.buildRows = function () {

        var _ = this,
            a,
            b,
            c,
            newSlides,
            numOfSlides,
            originalSlides,
            slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if (_.options.rows > 1) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);

            for (a = 0; a < numOfSlides; a++) {
                var slide = document.createElement('div');
                for (b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for (c = 0; c < _.options.slidesPerRow; c++) {
                        var target = a * slidesPerSection + (b * _.options.slidesPerRow + c);
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children().css({
                'width': 100 / _.options.slidesPerRow + '%',
                'display': 'inline-block'
            });
        }
    };

    Slick.prototype.checkResponsive = function (initial, forceUpdate) {

        var _ = this,
            breakpoint,
            targetBreakpoint,
            respondToWidth,
            triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint = targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if (!initial && triggerBreakpoint !== false) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }
    };

    Slick.prototype.changeSlide = function (event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset,
            slideOffset,
            unevenOffset;

        // If target is a link, prevent default action.
        if ($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if (!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = _.slideCount % _.options.slidesToScroll !== 0;
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }
    };

    Slick.prototype.checkNavigable = function (index) {

        var _ = this,
            navigables,
            prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function () {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots).off('click.slick', _.changeSlide).off('mouseenter.slick', $.proxy(_.interrupt, _, true)).off('mouseleave.slick', $.proxy(_.interrupt, _, false));
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);
    };

    Slick.prototype.cleanUpSlideEvents = function () {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));
    };

    Slick.prototype.cleanUpRows = function () {

        var _ = this,
            originalSlides;

        if (_.options.rows > 1) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }
    };

    Slick.prototype.clickHandler = function (event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }
    };

    Slick.prototype.destroy = function (refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.$prevArrow.length) {

            _.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');

            if (_.htmlExpr.test(_.options.prevArrow)) {
                _.$prevArrow.remove();
            }
        }

        if (_.$nextArrow && _.$nextArrow.length) {

            _.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');

            if (_.htmlExpr.test(_.options.nextArrow)) {
                _.$nextArrow.remove();
            }
        }

        if (_.$slides) {

            _.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function () {
                $(this).attr('style', $(this).data('originalStyling'));
            });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if (!refresh) {
            _.$slider.trigger('destroy', [_]);
        }
    };

    Slick.prototype.disableTransition = function (slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }
    };

    Slick.prototype.fadeSlide = function (slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);
        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function () {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }
        }
    };

    Slick.prototype.fadeSlideOut = function (slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);
        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });
        }
    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();
        }
    };

    Slick.prototype.focusHandler = function () {

        var _ = this;

        _.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick', '*:not(.slick-arrow)', function (event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function () {

                if (_.options.pauseOnFocus) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }
            }, 0);
        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {

        var _ = this;
        return _.currentSlide;
    };

    Slick.prototype.getDotCount = function () {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if (!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        } else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;
    };

    Slick.prototype.getLeft = function (slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = _.slideWidth * _.options.slidesToShow * -1;
                verticalOffset = verticalHeight * _.options.slidesToShow * -1;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth * -1;
                        verticalOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight * -1;
                    } else {
                        _.slideOffset = _.slideCount % _.options.slidesToScroll * _.slideWidth * -1;
                        verticalOffset = _.slideCount % _.options.slidesToScroll * verticalHeight * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth;
                verticalOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset;
        } else {
            targetLeft = slideIndex * verticalHeight * -1 + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft = 0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft = 0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;
    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function (option) {

        var _ = this;

        return _.options[option];
    };

    Slick.prototype.getNavigableIndexes = function () {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;
    };

    Slick.prototype.getSlick = function () {

        return this;
    };

    Slick.prototype.getSlideCount = function () {

        var _ = this,
            slidesTraversed,
            swipedSlide,
            centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function (index, slide) {
                if (slide.offsetLeft - centerOffset + $(slide).outerWidth() / 2 > _.swipeLeft * -1) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;
        } else {
            return _.options.slidesToScroll;
        }
    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function (slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);
    };

    Slick.prototype.init = function (creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();
        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if (_.options.autoplay) {

            _.paused = false;
            _.autoPlay();
        }
    };

    Slick.prototype.initADA = function () {
        var _ = this;
        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        _.$slideTrack.attr('role', 'listbox');

        _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function (i) {
            $(this).attr({
                'role': 'option',
                'aria-describedby': 'slick-slide' + _.instanceUid + i + ''
            });
        });

        if (_.$dots !== null) {
            _.$dots.attr('role', 'tablist').find('li').each(function (i) {
                $(this).attr({
                    'role': 'presentation',
                    'aria-selected': 'false',
                    'aria-controls': 'navigation' + _.instanceUid + i + '',
                    'id': 'slick-slide' + _.instanceUid + i + ''
                });
            }).first().attr('aria-selected', 'true').end().find('button').attr('role', 'button').end().closest('div').attr('role', 'toolbar');
        }
        _.activateADA();
    };

    Slick.prototype.initArrowEvents = function () {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.off('click.slick').on('click.slick', {
                message: 'previous'
            }, _.changeSlide);
            _.$nextArrow.off('click.slick').on('click.slick', {
                message: 'next'
            }, _.changeSlide);
        }
    };

    Slick.prototype.initDotEvents = function () {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true) {

            $('li', _.$dots).on('mouseenter.slick', $.proxy(_.interrupt, _, true)).on('mouseleave.slick', $.proxy(_.interrupt, _, false));
        }
    };

    Slick.prototype.initSlideEvents = function () {

        var _ = this;

        if (_.options.pauseOnHover) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));
        }
    };

    Slick.prototype.initializeEvents = function () {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);
    };

    Slick.prototype.initUI = function () {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();
        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();
        }
    };

    Slick.prototype.keyHandler = function (event) {

        var _ = this;
        //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' : 'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }
    };

    Slick.prototype.lazyLoad = function () {

        var _ = this,
            loadRange,
            cloneRange,
            rangeStart,
            rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function () {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function () {

                    image.animate({ opacity: 0 }, 100, function () {
                        image.attr('src', imageSource).animate({ opacity: 1 }, 200, function () {
                            image.removeAttr('data-lazy').removeClass('slick-loading');
                        });
                        _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                    });
                };

                imageToLoad.onerror = function () {

                    image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');

                    _.$slider.trigger('lazyLoadError', [_, image, imageSource]);
                };

                imageToLoad.src = imageSource;
            });
        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }
    };

    Slick.prototype.loadSlider = function () {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }
    };

    Slick.prototype.next = Slick.prototype.slickNext = function () {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });
    };

    Slick.prototype.orientationChange = function () {

        var _ = this;

        _.checkResponsive();
        _.setPosition();
    };

    Slick.prototype.pause = Slick.prototype.slickPause = function () {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;
    };

    Slick.prototype.play = Slick.prototype.slickPlay = function () {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;
    };

    Slick.prototype.postSlide = function (index) {

        var _ = this;

        if (!_.unslicked) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            _.setPosition();

            _.swipeLeft = null;

            if (_.options.autoplay) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();
            }
        }
    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function () {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });
    };

    Slick.prototype.preventDefault = function (event) {

        event.preventDefault();
    };

    Slick.prototype.progressiveLazyLoad = function (tryCount) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $('img[data-lazy]', _.$slider),
            image,
            imageSource,
            imageToLoad;

        if ($imgsToLoad.length) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function () {

                image.attr('src', imageSource).removeAttr('data-lazy').removeClass('slick-loading');

                if (_.options.adaptiveHeight === true) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                _.progressiveLazyLoad();
            };

            imageToLoad.onerror = function () {

                if (tryCount < 3) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout(function () {
                        _.progressiveLazyLoad(tryCount + 1);
                    }, 500);
                } else {

                    image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');

                    _.$slider.trigger('lazyLoadError', [_, image, imageSource]);

                    _.progressiveLazyLoad();
                }
            };

            imageToLoad.src = imageSource;
        } else {

            _.$slider.trigger('allImagesLoaded', [_]);
        }
    };

    Slick.prototype.refresh = function (initializing) {

        var _ = this,
            currentSlide,
            lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if (!_.options.infinite && _.currentSlide > lastVisibleIndex) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if (!initializing) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);
        }
    };

    Slick.prototype.registerBreakpoints = function () {

        var _ = this,
            breakpoint,
            currentBreakpoint,
            l,
            responsiveSettings = _.options.responsive || null;

        if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {

            _.respondTo = _.options.respondTo || 'window';

            for (breakpoint in responsiveSettings) {

                l = _.breakpoints.length - 1;
                currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while (l >= 0) {
                        if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
                            _.breakpoints.splice(l, 1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
                }
            }

            _.breakpoints.sort(function (a, b) {
                return _.options.mobileFirst ? a - b : b - a;
            });
        }
    };

    Slick.prototype.reinit = function () {

        var _ = this;

        _.$slides = _.$slideTrack.children(_.options.slide).addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);
    };

    Slick.prototype.resize = function () {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function () {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if (!_.unslicked) {
                    _.setPosition();
                }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (index, removeBefore, removeAll) {

        var _ = this;

        if (typeof index === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();
    };

    Slick.prototype.setCSS = function (position) {

        var _ = this,
            positionProps = {},
            x,
            y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }
    };

    Slick.prototype.setDimensions = function () {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: '0px ' + _.options.centerPadding
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: _.options.centerPadding + ' 0px'
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();

        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children('.slick-slide').length));
        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
    };

    Slick.prototype.setFade = function () {

        var _ = this,
            targetLeft;

        _.$slides.each(function (index, element) {
            targetLeft = _.slideWidth * index * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });
    };

    Slick.prototype.setHeight = function () {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }
    };

    Slick.prototype.setOption = Slick.prototype.slickSetOption = function () {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this,
            l,
            item,
            option,
            value,
            refresh = false,
            type;

        if ($.type(arguments[0]) === 'object') {

            option = arguments[0];
            refresh = arguments[1];
            type = 'multiple';
        } else if ($.type(arguments[0]) === 'string') {

            option = arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if (arguments[0] === 'responsive' && $.type(arguments[1]) === 'array') {

                type = 'responsive';
            } else if (typeof arguments[1] !== 'undefined') {

                type = 'single';
            }
        }

        if (type === 'single') {

            _.options[option] = value;
        } else if (type === 'multiple') {

            $.each(option, function (opt, val) {

                _.options[opt] = val;
            });
        } else if (type === 'responsive') {

            for (item in value) {

                if ($.type(_.options.responsive) !== 'array') {

                    _.options.responsive = [value[item]];
                } else {

                    l = _.options.responsive.length - 1;

                    // loop through the responsive object and splice out duplicates.
                    while (l >= 0) {

                        if (_.options.responsive[l].breakpoint === value[item].breakpoint) {

                            _.options.responsive.splice(l, 1);
                        }

                        l--;
                    }

                    _.options.responsive.push(value[item]);
                }
            }
        }

        if (refresh) {

            _.unload();
            _.reinit();
        }
    };

    Slick.prototype.setPosition = function () {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);
    };

    Slick.prototype.setProps = function () {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if (_.options.fade) {
            if (typeof _.options.zIndex === 'number') {
                if (_.options.zIndex < 3) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && _.animType !== null && _.animType !== false;
    };

    Slick.prototype.setSlideClasses = function (index) {

        var _ = this,
            centerOffset,
            allSlides,
            indexOffset,
            remainder;

        allSlides = _.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden', 'true');

        _.$slides.eq(index).addClass('slick-current');

        if (_.options.centerMode === true) {

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) {

                    _.$slides.slice(index - centerOffset, index + centerOffset + 1).addClass('slick-active').attr('aria-hidden', 'false');
                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides.slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2).addClass('slick-active').attr('aria-hidden', 'false');
                }

                if (index === 0) {

                    allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass('slick-center');
                } else if (index === _.slideCount - 1) {

                    allSlides.eq(_.options.slidesToShow).addClass('slick-center');
                }
            }

            _.$slides.eq(index).addClass('slick-center');
        } else {

            if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) {

                _.$slides.slice(index, index + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides.addClass('slick-active').attr('aria-hidden', 'false');
            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow) {

                    allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass('slick-active').attr('aria-hidden', 'false');
                } else {

                    allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
                }
            }
        }

        if (_.options.lazyLoad === 'ondemand') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function () {

        var _ = this,
            i,
            slideIndex,
            infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function () {
                    $(this).attr('id', '');
                });
            }
        }
    };

    Slick.prototype.interrupt = function (toggle) {

        var _ = this;

        if (!toggle) {
            _.autoPlay();
        }
        _.interrupted = toggle;
    };

    Slick.prototype.selectHandler = function (event) {

        var _ = this;

        var targetElement = $(event.target).is('.slick-slide') ? $(event.target) : $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.setSlideClasses(index);
            _.asNavFor(index);
            return;
        }

        _.slideHandler(index);
    };

    Slick.prototype.slideHandler = function (index, sync, dontAnimate) {

        var targetSlide,
            animSlide,
            oldSlide,
            slideLeft,
            targetLeft = null,
            _ = this,
            navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function () {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > _.slideCount - _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function () {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if (_.options.autoplay) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - _.slideCount % _.options.slidesToScroll;
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if (_.options.asNavFor) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if (navTarget.slideCount <= navTarget.options.slidesToShow) {
                navTarget.setSlideClasses(_.currentSlide);
            }
        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function () {
                    _.postSlide(animSlide);
                });
            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true) {
            _.animateSlide(targetLeft, function () {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }
    };

    Slick.prototype.startLoad = function () {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();
        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();
        }

        _.$slider.addClass('slick-loading');
    };

    Slick.prototype.swipeDirection = function () {

        var xDist,
            yDist,
            r,
            swipeAngle,
            _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if (swipeAngle <= 45 && swipeAngle >= 0) {
            return _.options.rtl === false ? 'left' : 'right';
        }
        if (swipeAngle <= 360 && swipeAngle >= 315) {
            return _.options.rtl === false ? 'left' : 'right';
        }
        if (swipeAngle >= 135 && swipeAngle <= 225) {
            return _.options.rtl === false ? 'right' : 'left';
        }
        if (_.options.verticalSwiping === true) {
            if (swipeAngle >= 35 && swipeAngle <= 135) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';
    };

    Slick.prototype.swipeEnd = function (event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.interrupted = false;
        _.shouldClick = _.touchObject.swipeLength > 10 ? false : true;

        if (_.touchObject.curX === undefined) {
            return false;
        }

        if (_.touchObject.edgeHit === true) {
            _.$slider.trigger('edge', [_, _.swipeDirection()]);
        }

        if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {

            direction = _.swipeDirection();

            switch (direction) {

                case 'left':
                case 'down':

                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:

            }

            if (direction != 'vertical') {

                _.slideHandler(slideCount);
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction]);
            }
        } else {

            if (_.touchObject.startX !== _.touchObject.curX) {

                _.slideHandler(_.currentSlide);
                _.touchObject = {};
            }
        }
    };

    Slick.prototype.swipeHandler = function (event) {

        var _ = this;

        if (_.options.swipe === false || 'ontouchend' in document && _.options.swipe === false) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }
    };

    Slick.prototype.swipeMove = function (event) {

        var _ = this,
            edgeWasHit = false,
            curLeft,
            swipeDirection,
            swipeLength,
            positionOffset,
            touches;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
        }

        swipeDirection = _.swipeDirection();

        if (swipeDirection === 'vertical') {
            return;
        }

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }

        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if (_.currentSlide === 0 && swipeDirection === 'right' || _.currentSlide >= _.getDotCount() && swipeDirection === 'left') {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + swipeLength * (_.$list.height() / _.listWidth) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);
    };

    Slick.prototype.swipeStart = function (event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;
    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();
        }
    };

    Slick.prototype.unload = function () {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden', 'true').css('width', '');
    };

    Slick.prototype.unslick = function (fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();
    };

    Slick.prototype.updateArrows = function () {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            }
        }
    };

    Slick.prototype.updateDots = function () {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots.find('li').removeClass('slick-active').attr('aria-hidden', 'true');

            _.$dots.find('li').eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass('slick-active').attr('aria-hidden', 'false');
        }
    };

    Slick.prototype.visibility = function () {

        var _ = this;

        if (_.options.autoplay) {

            if (document[_.hidden]) {

                _.interrupted = true;
            } else {

                _.interrupted = false;
            }
        }
    };

    $.fn.slick = function () {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if ((typeof opt === 'undefined' ? 'undefined' : _typeof(opt)) == 'object' || typeof opt == 'undefined') _[i].slick = new Slick(_[i], opt);else ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };
});

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    init: function init() {
        this.headerFunctions();
        this.oneHeight();
    },
    headerFunctions: function headerFunctions() {
        $('body').css({
            'padding-top': $('.site-header').height()
        });

        $('.menu-button').on('click', function () {
            $(this).toggleClass('active');
            $('.site-nav').toggleClass('active');
        });

        $('.site-nav a').on('click', function () {
            if ($($(this).attr('href')).length != 0) {
                var anchor = $(this).attr('href');

                $('body, html').animate({
                    scrollTop: $(anchor).offset().top
                });
            }
        });
    },
    oneHeight: function oneHeight() {
        if ($(window).width() >= 1024) {
            var maxHeight = -1;

            if ($('.contacts-title').length != 0) {
                $('.contacts-title').each(function () {
                    maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
                });

                $('.contacts-title').each(function () {
                    $(this).height(maxHeight);
                });
            }
        }
    }
};

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});
exports.default = {
		init: function init() {
				this.initMap();
		},
		initMap: function initMap() {

				$.getScript("http://maps.google.com/maps/api/js?key=AIzaSyC1mu5p7L3KMHnWQXTk4LTWR3BSiaQtdW8&sensor=true").done(function () {
						var mapId = $('#map');
						var dataLat = parseFloat(mapId.attr('data-lat'));
						var dataLng = parseFloat(mapId.attr('data-lng'));
						var center = { lat: dataLat, lng: dataLng };

						var map = new google.maps.Map(document.getElementById("map"), {
								zoom: 16,
								center: center,
								scrollwheel: false,
								draggable: true,
								zoomControl: false,
								zoomControlOptions: {
										position: google.maps.ControlPosition.TOP_RIGHT
								},
								panControl: false,
								mapTypeControl: false,
								streetViewControl: false
						});

						var marker = new google.maps.Marker({
								position: center,
								map: map,
								title: "my place"
						});
				});
		}
};

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

require("../libs/slick");

require("../libs/light-gallery/lightgallery.min.js");

require("../libs/light-gallery/lg-thumbnail.min.js");

require("../libs/light-gallery/lg-fullscreen.min.js");

exports.default = {
    init: function init() {
        this.sliders();
    },
    sliders: function sliders() {
        $('.testimonial-slider').slick();

        $('.popup-link').lightGallery({
            subHtmlSelectorRelative: true,
            counter: false
        });
    }
};

},{"../libs/light-gallery/lg-fullscreen.min.js":2,"../libs/light-gallery/lg-thumbnail.min.js":3,"../libs/light-gallery/lightgallery.min.js":4,"../libs/slick":5}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    init: function init() {
        this.tabSwitcher();
    },
    tabSwitcher: function tabSwitcher() {
        $('.tab-wrapper').each(function () {
            var activeTab = $(this).find('.tab-link.active').attr('data-link');
            $(this).find('[data-tab=\'' + activeTab + '\']').addClass('active');
        });

        $('.tab-link').on('click', function (e) {
            e.preventDefault();
            var tab = $(this).attr('data-link');

            $(e.target).closest('.tab-list').find('.tab-link').removeClass('active');
            console.log($(e.target).closest('.tab-list').find('.tab-link'));
            $(this).addClass('active');

            if ($('[data-tab=' + tab + ']').length != 0) {
                $(e.target).closest('.tab-wrapper').find('[data-tab]').removeClass('active');
                $('[data-tab=\'' + tab + '\']').addClass('active');
            }
        });
    }
};

},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _headerFunctions = require("../modules/headerFunctions");

var _headerFunctions2 = _interopRequireDefault(_headerFunctions);

var _tabSwitcher = require("../modules/tabSwitcher");

var _tabSwitcher2 = _interopRequireDefault(_tabSwitcher);

var _sliders = require("../modules/sliders.js");

var _sliders2 = _interopRequireDefault(_sliders);

var _map = require("../modules/map.js");

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    init: function init() {
        _headerFunctions2.default.init();
        _tabSwitcher2.default.init();
        _sliders2.default.init();
        _map2.default.init();
    }
};

},{"../modules/headerFunctions":6,"../modules/map.js":7,"../modules/sliders.js":8,"../modules/tabSwitcher":9}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHNcXGpzXFxhc3NldHNcXGpzXFxnbG9iYWwuanMiLCJhc3NldHNcXGpzXFxsaWJzXFxsaWdodC1nYWxsZXJ5XFxsZy1mdWxsc2NyZWVuLm1pbi5qcyIsImFzc2V0c1xcanNcXGxpYnNcXGxpZ2h0LWdhbGxlcnlcXGxnLXRodW1ibmFpbC5taW4uanMiLCJhc3NldHNcXGpzXFxsaWJzXFxsaWdodC1nYWxsZXJ5XFxsaWdodGdhbGxlcnkubWluLmpzIiwiYXNzZXRzXFxqc1xcbGlic1xcc2xpY2suanMiLCJhc3NldHNcXGpzXFxtb2R1bGVzXFxoZWFkZXJGdW5jdGlvbnMuanMiLCJhc3NldHNcXGpzXFxtb2R1bGVzXFxtYXAuanMiLCJhc3NldHNcXGpzXFxtb2R1bGVzXFxzbGlkZXJzLmpzIiwiYXNzZXRzXFxqc1xcbW9kdWxlc1xcdGFiU3dpdGNoZXIuanMiLCJhc3NldHNcXGpzXFxwYWdlc1xcSE9NRS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQ0FBOzs7Ozs7QUFFQSxJQUFJLE9BQU8sSUFBWDs7QUFFQSxRQUFRLE9BQU8sSUFBUCxDQUFZLElBQXBCO0FBQ0ksTUFBSyxXQUFMO0FBQ0ksU0FBTyxlQUFLLElBQUwsQ0FBVSxJQUFWLGdCQUFQO0FBQ0E7QUFDSjtBQUNJLFNBQU8sZ0JBQU07QUFDVCxXQUFRLEdBQVIsQ0FBWSxjQUFaO0FBQ0gsR0FGRDtBQUxSOztBQVVBLEVBQUUsUUFBRixFQUFZLEtBQVosQ0FBa0IsTUFBbEI7O0FBRUEsRUFBRSxNQUFGLEVBQVUsRUFBVixDQUFhLFFBQWIsRUFBdUIsWUFBVztBQUNqQyxLQUFJLEVBQUUsTUFBRixFQUFVLEtBQVYsTUFBcUIsSUFBekIsRUFBK0I7QUFDOUIsTUFBSSxZQUFZLENBQUMsQ0FBakI7QUFDQSxNQUFJLEVBQUUsaUJBQUYsRUFBcUIsTUFBckIsSUFBK0IsQ0FBbkMsRUFBc0M7QUFDckMsS0FBRSxpQkFBRixFQUFxQixJQUFyQixDQUEwQixZQUFXO0FBQ3BDLE1BQUUsSUFBRixFQUFRLFVBQVIsQ0FBbUIsT0FBbkI7QUFDQSxnQkFBWSxZQUFZLEVBQUUsSUFBRixFQUFRLE1BQVIsRUFBWixHQUErQixTQUEvQixHQUEyQyxFQUFFLElBQUYsRUFBUSxNQUFSLEVBQXZEO0FBQ0EsSUFIRDs7QUFLQSxLQUFFLGlCQUFGLEVBQXFCLElBQXJCLENBQTBCLFlBQVc7QUFDcEMsTUFBRSxJQUFGLEVBQVEsTUFBUixDQUFlLFNBQWY7QUFDQSxJQUZEO0FBR0E7QUFDRCxFQVpELE1BWU87QUFDTixNQUFJLEVBQUUsaUJBQUYsRUFBcUIsTUFBckIsSUFBK0IsQ0FBbkMsRUFBc0M7QUFDckMsS0FBRSxpQkFBRixFQUFxQixJQUFyQixDQUEwQixZQUFXO0FBQ3BDLE1BQUUsSUFBRixFQUFRLFVBQVIsQ0FBbUIsT0FBbkI7QUFDQSxJQUZEO0FBR0E7QUFDRDtBQUNELENBcEJEOztBQXNCQSxFQUFFLE1BQUYsRUFBVSxFQUFWLENBQWEsUUFBYixFQUF1QixZQUFXLENBRWpDLENBRkQ7O0FBSUEsRUFBRSxNQUFGLEVBQVUsRUFBVixDQUFhLE1BQWIsRUFBcUIsWUFBWSxDQUVoQyxDQUZEOzs7Ozs7O0FDMUNBOzs7QUFHQSxDQUFDLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQjtBQUFDO0FBQWEsTUFBSSxJQUFFLEVBQUMsWUFBVyxDQUFDLENBQWIsRUFBTjtBQUFBLE1BQXNCLElBQUUsU0FBRixDQUFFLENBQVMsQ0FBVCxFQUFXO0FBQUMsV0FBTyxLQUFLLElBQUwsR0FBVSxFQUFFLENBQUYsRUFBSyxJQUFMLENBQVUsY0FBVixDQUFWLEVBQW9DLEtBQUssR0FBTCxHQUFTLEVBQUUsQ0FBRixDQUE3QyxFQUFrRCxLQUFLLElBQUwsQ0FBVSxDQUFWLEdBQVksRUFBRSxNQUFGLENBQVMsRUFBVCxFQUFZLENBQVosRUFBYyxLQUFLLElBQUwsQ0FBVSxDQUF4QixDQUE5RCxFQUF5RixLQUFLLElBQUwsRUFBekYsRUFBcUcsSUFBNUc7QUFBaUgsR0FBckosQ0FBc0osRUFBRSxTQUFGLENBQVksSUFBWixHQUFpQixZQUFVO0FBQUMsUUFBSSxJQUFFLEVBQU4sQ0FBUyxJQUFHLEtBQUssSUFBTCxDQUFVLENBQVYsQ0FBWSxVQUFmLEVBQTBCO0FBQUMsVUFBRyxFQUFFLEVBQUUsaUJBQUYsSUFBcUIsRUFBRSx1QkFBdkIsSUFBZ0QsRUFBRSxvQkFBbEQsSUFBd0UsRUFBRSxtQkFBNUUsQ0FBSCxFQUFvRyxPQUFPLElBQUUsNkNBQUYsRUFBZ0QsS0FBSyxJQUFMLENBQVUsTUFBVixDQUFpQixJQUFqQixDQUFzQixhQUF0QixFQUFxQyxNQUFyQyxDQUE0QyxDQUE1QyxDQUFoRCxFQUErRixLQUFLLFVBQUwsRUFBL0Y7QUFBaUg7QUFBQyxHQUE3UixFQUE4UixFQUFFLFNBQUYsQ0FBWSxpQkFBWixHQUE4QixZQUFVO0FBQUMsUUFBSSxJQUFFLEVBQUUsZUFBUixDQUF3QixFQUFFLGlCQUFGLEdBQW9CLEVBQUUsaUJBQUYsRUFBcEIsR0FBMEMsRUFBRSxtQkFBRixHQUFzQixFQUFFLG1CQUFGLEVBQXRCLEdBQThDLEVBQUUsb0JBQUYsR0FBdUIsRUFBRSxvQkFBRixFQUF2QixHQUFnRCxFQUFFLHVCQUFGLElBQTJCLEVBQUUsdUJBQUYsRUFBbks7QUFBK0wsR0FBOWhCLEVBQStoQixFQUFFLFNBQUYsQ0FBWSxjQUFaLEdBQTJCLFlBQVU7QUFBQyxNQUFFLGNBQUYsR0FBaUIsRUFBRSxjQUFGLEVBQWpCLEdBQW9DLEVBQUUsZ0JBQUYsR0FBbUIsRUFBRSxnQkFBRixFQUFuQixHQUF3QyxFQUFFLG1CQUFGLEdBQXNCLEVBQUUsbUJBQUYsRUFBdEIsR0FBOEMsRUFBRSxvQkFBRixJQUF3QixFQUFFLG9CQUFGLEVBQWxKO0FBQTJLLEdBQWh2QixFQUFpdkIsRUFBRSxTQUFGLENBQVksVUFBWixHQUF1QixZQUFVO0FBQUMsUUFBSSxJQUFFLElBQU4sQ0FBVyxFQUFFLENBQUYsRUFBSyxFQUFMLENBQVEsNEZBQVIsRUFBcUcsWUFBVTtBQUFDLFFBQUUsSUFBRixDQUFPLE1BQVAsQ0FBYyxXQUFkLENBQTBCLGtCQUExQjtBQUE4QyxLQUE5SixHQUFnSyxLQUFLLElBQUwsQ0FBVSxNQUFWLENBQWlCLElBQWpCLENBQXNCLGdCQUF0QixFQUF3QyxFQUF4QyxDQUEyQyxVQUEzQyxFQUFzRCxZQUFVO0FBQUMsUUFBRSxpQkFBRixJQUFxQixFQUFFLG9CQUF2QixJQUE2QyxFQUFFLHVCQUEvQyxJQUF3RSxFQUFFLG1CQUExRSxHQUE4RixFQUFFLGNBQUYsRUFBOUYsR0FBaUgsRUFBRSxpQkFBRixFQUFqSDtBQUF1SSxLQUF4TSxDQUFoSztBQUEwVyxHQUF4b0MsRUFBeW9DLEVBQUUsU0FBRixDQUFZLE9BQVosR0FBb0IsWUFBVTtBQUFDLFNBQUssY0FBTCxJQUFzQixFQUFFLENBQUYsRUFBSyxHQUFMLENBQVMsNEZBQVQsQ0FBdEI7QUFBNkgsR0FBcnlDLEVBQXN5QyxFQUFFLEVBQUYsQ0FBSyxZQUFMLENBQWtCLE9BQWxCLENBQTBCLFVBQTFCLEdBQXFDLENBQTMwQztBQUE2MEMsQ0FBbGdELENBQW1nRCxNQUFuZ0QsRUFBMGdELE1BQTFnRCxFQUFpaEQsUUFBamhELENBQUQ7Ozs7O0FDSEE7OztBQUdBLENBQUMsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCO0FBQUM7QUFBYSxNQUFJLElBQUUsRUFBQyxXQUFVLENBQUMsQ0FBWixFQUFjLGNBQWEsQ0FBQyxDQUE1QixFQUE4QixzQkFBcUIsUUFBbkQsRUFBNEQsWUFBVyxHQUF2RSxFQUEyRSxpQkFBZ0IsR0FBM0YsRUFBK0YsYUFBWSxDQUEzRyxFQUE2RyxjQUFhLENBQUMsQ0FBM0gsRUFBNkgsb0JBQW1CLENBQUMsQ0FBakosRUFBbUosYUFBWSxDQUFDLENBQWhLLEVBQWtLLGVBQWMsQ0FBQyxDQUFqTCxFQUFtTCxpQkFBZ0IsQ0FBQyxDQUFwTSxFQUFzTSxrQkFBaUIsQ0FBQyxDQUF4TixFQUEwTixnQkFBZSxFQUF6TyxFQUE0TyxzQkFBcUIsQ0FBQyxDQUFsUSxFQUFvUSxrQkFBaUIsQ0FBclIsRUFBdVIsb0JBQW1CLENBQUMsQ0FBM1MsRUFBNlMsZ0JBQWUsaUJBQTVULEVBQThVLDBCQUF5QixDQUFDLENBQXhXLEVBQU47QUFBQSxNQUFpWCxJQUFFLFNBQUYsQ0FBRSxDQUFTLENBQVQsRUFBVztBQUFDLFdBQU8sS0FBSyxJQUFMLEdBQVUsRUFBRSxDQUFGLEVBQUssSUFBTCxDQUFVLGNBQVYsQ0FBVixFQUFvQyxLQUFLLElBQUwsQ0FBVSxDQUFWLEdBQVksRUFBRSxNQUFGLENBQVMsRUFBVCxFQUFZLENBQVosRUFBYyxLQUFLLElBQUwsQ0FBVSxDQUF4QixDQUFoRCxFQUEyRSxLQUFLLEdBQUwsR0FBUyxFQUFFLENBQUYsQ0FBcEYsRUFBeUYsS0FBSyxXQUFMLEdBQWlCLElBQTFHLEVBQStHLEtBQUssZUFBTCxHQUFxQixDQUFwSSxFQUFzSSxLQUFLLGVBQUwsR0FBcUIsS0FBSyxJQUFMLENBQVUsTUFBVixDQUFpQixNQUFqQixJQUF5QixLQUFLLElBQUwsQ0FBVSxDQUFWLENBQVksVUFBWixHQUF1QixLQUFLLElBQUwsQ0FBVSxDQUFWLENBQVksV0FBNUQsQ0FBM0osRUFBb08sS0FBSyxVQUFMLEdBQWdCLEtBQUssSUFBTCxDQUFVLEtBQTlQLEVBQW9RLEtBQUssSUFBTCxHQUFVLENBQTlRLEVBQWdSLEtBQUssSUFBTCxFQUFoUixFQUE0UixJQUFuUztBQUF3UyxHQUF2cUIsQ0FBd3FCLEVBQUUsU0FBRixDQUFZLElBQVosR0FBaUIsWUFBVTtBQUFDLFFBQUksSUFBRSxJQUFOLENBQVcsS0FBSyxJQUFMLENBQVUsQ0FBVixDQUFZLFNBQVosSUFBdUIsS0FBSyxJQUFMLENBQVUsTUFBVixDQUFpQixNQUFqQixHQUF3QixDQUEvQyxLQUFtRCxLQUFLLElBQUwsQ0FBVSxDQUFWLENBQVksa0JBQVosSUFBZ0MsV0FBVyxZQUFVO0FBQUMsUUFBRSxJQUFGLENBQU8sTUFBUCxDQUFjLFFBQWQsQ0FBdUIsZUFBdkI7QUFBd0MsS0FBOUQsRUFBK0QsR0FBL0QsQ0FBaEMsRUFBb0csS0FBSyxJQUFMLENBQVUsQ0FBVixDQUFZLGFBQVosSUFBMkIsS0FBSyxJQUFMLENBQVUsTUFBVixDQUFpQixRQUFqQixDQUEwQixvQkFBMUIsQ0FBL0gsRUFBK0ssS0FBSyxLQUFMLEVBQS9LLEVBQTRMLEtBQUssSUFBTCxDQUFVLENBQVYsQ0FBWSxZQUFaLElBQTBCLEtBQUssSUFBTCxDQUFVLENBQVYsQ0FBWSxlQUFaLElBQTZCLENBQUMsS0FBSyxJQUFMLENBQVUsT0FBeEMsSUFBaUQsS0FBSyxJQUFMLENBQVUsS0FBVixFQUFqRCxJQUFvRSxLQUFLLGVBQUwsRUFBcEUsRUFBMkYsS0FBSyxJQUFMLENBQVUsQ0FBVixDQUFZLGdCQUFaLElBQThCLEtBQUssSUFBTCxDQUFVLE9BQXhDLElBQWlELEtBQUssSUFBTCxDQUFVLEtBQVYsRUFBakQsSUFBb0UsS0FBSyxnQkFBTCxFQUEvSixFQUF1TCxLQUFLLGNBQUwsR0FBb0IsQ0FBQyxDQUF0TyxJQUF5TyxLQUFLLGNBQUwsR0FBb0IsQ0FBQyxDQUExYixFQUE0YixLQUFLLE1BQUwsRUFBNWIsRUFBMGMsS0FBSyxhQUFMLEVBQTdmO0FBQW1oQixHQUExakIsRUFBMmpCLEVBQUUsU0FBRixDQUFZLEtBQVosR0FBa0IsWUFBVTtBQUFDLGFBQVMsQ0FBVCxDQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQjtBQUFDLFVBQUksQ0FBSjtBQUFBLFVBQU0sSUFBRSxFQUFFLElBQUYsQ0FBTyxPQUFQLENBQWUsQ0FBZixFQUFpQixDQUFqQixLQUFxQixFQUE3QjtBQUFBLFVBQWdDLElBQUUsRUFBbEMsQ0FBcUMsRUFBRSxPQUFGLElBQVcsRUFBRSxLQUFiLElBQW9CLEVBQUUsV0FBdEIsR0FBa0MsRUFBRSxPQUFGLEdBQVUsSUFBRSxFQUFFLElBQUYsQ0FBTyxDQUFQLENBQVMsb0JBQVQsR0FBOEIsMEJBQXdCLEVBQUUsT0FBRixDQUFVLENBQVYsQ0FBeEIsR0FBcUMsR0FBckMsR0FBeUMsRUFBRSxJQUFGLENBQU8sQ0FBUCxDQUFTLGdCQUFsRCxHQUFtRSxNQUFqRyxHQUF3RyxDQUFwSCxHQUFzSCxFQUFFLEtBQUYsR0FBUSxFQUFFLElBQUYsQ0FBTyxDQUFQLENBQVMsa0JBQVQsSUFBNkIsSUFBRSxrQ0FBZ0MsQ0FBaEMsR0FBa0MsTUFBcEMsRUFBMkMsSUFBRSxFQUFFLEtBQUYsQ0FBUSxDQUFSLENBQTFFLElBQXNGLElBQUUsQ0FBaEcsR0FBa0csRUFBRSxXQUFGLEtBQWdCLElBQUUsRUFBRSxJQUFGLENBQU8sQ0FBUCxDQUFTLHdCQUFULEdBQWtDLDJDQUF5QyxFQUFFLFdBQUYsQ0FBYyxDQUFkLENBQTNFLEdBQTRGLENBQTlHLENBQTFQLEdBQTJXLElBQUUsQ0FBN1csRUFBK1csS0FBRyx5QkFBdUIsQ0FBdkIsR0FBeUIsdUNBQXpCLEdBQWlFLEVBQUUsSUFBRixDQUFPLENBQVAsQ0FBUyxVQUExRSxHQUFxRixvQkFBckYsR0FBMEcsRUFBRSxJQUFGLENBQU8sQ0FBUCxDQUFTLFdBQW5ILEdBQStILGdCQUEvSCxHQUFnSixDQUFoSixHQUFrSixZQUFwZ0IsRUFBaWhCLElBQUUsRUFBbmhCO0FBQXNoQixTQUFJLENBQUo7QUFBQSxRQUFNLElBQUUsSUFBUjtBQUFBLFFBQWEsSUFBRSxFQUFmO0FBQUEsUUFBa0IsSUFBRSxFQUFwQjtBQUFBLFFBQXVCLElBQUUsc0VBQXpCLENBQWdHLFFBQU8sS0FBSyxJQUFMLENBQVUsQ0FBVixDQUFZLGNBQW5CLEdBQW1DLEtBQUksaUJBQUo7QUFBc0IsWUFBRSxLQUFGLENBQVEsTUFBTSxLQUFJLGtCQUFKO0FBQXVCLFlBQUUsU0FBRixDQUFZLE1BQU0sS0FBSSxpQkFBSjtBQUFzQixZQUFFLFFBQUYsQ0FBdEksQ0FBaUosSUFBRyxFQUFFLElBQUYsQ0FBTyxNQUFQLENBQWMsUUFBZCxDQUF1QixjQUF2QixHQUF1QyxFQUFFLElBQUYsQ0FBTyxNQUFQLENBQWMsSUFBZCxDQUFtQixLQUFuQixFQUEwQixNQUExQixDQUFpQyxDQUFqQyxDQUF2QyxFQUEyRSxFQUFFLFdBQUYsR0FBYyxFQUFFLElBQUYsQ0FBTyxNQUFQLENBQWMsSUFBZCxDQUFtQixpQkFBbkIsQ0FBekYsRUFBK0gsRUFBRSxlQUFGLEdBQWtCLEVBQUUsV0FBRixDQUFjLEtBQWQsRUFBakosRUFBdUssRUFBRSxJQUFGLENBQU8sQ0FBUCxDQUFTLFlBQVQsSUFBdUIsRUFBRSxJQUFGLENBQU8sTUFBUCxDQUFjLElBQWQsQ0FBbUIsV0FBbkIsRUFBZ0MsR0FBaEMsQ0FBb0MsRUFBQyxPQUFNLEVBQUUsZUFBRixHQUFrQixJQUF6QixFQUE4QixVQUFTLFVBQXZDLEVBQXBDLENBQTlMLEVBQXNSLEtBQUssSUFBTCxDQUFVLENBQVYsQ0FBWSxZQUFaLElBQTBCLEVBQUUsV0FBRixDQUFjLEdBQWQsQ0FBa0IsUUFBbEIsRUFBMkIsRUFBRSxJQUFGLENBQU8sQ0FBUCxDQUFTLGVBQVQsR0FBeUIsSUFBcEQsQ0FBaFQsRUFBMFcsRUFBRSxJQUFGLENBQU8sQ0FBUCxDQUFTLE9BQXRYLEVBQThYLEtBQUksSUFBSSxJQUFFLENBQVYsRUFBWSxJQUFFLEVBQUUsSUFBRixDQUFPLENBQVAsQ0FBUyxTQUFULENBQW1CLE1BQWpDLEVBQXdDLEdBQXhDO0FBQTRDLFFBQUUsRUFBRSxJQUFGLENBQU8sQ0FBUCxDQUFTLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsR0FBeEIsRUFBNEIsRUFBRSxJQUFGLENBQU8sQ0FBUCxDQUFTLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsS0FBbEQsRUFBd0QsQ0FBeEQ7QUFBNUMsS0FBOVgsTUFBMGUsRUFBRSxJQUFGLENBQU8sTUFBUCxDQUFjLElBQWQsQ0FBbUIsVUFBUyxDQUFULEVBQVc7QUFBQyxRQUFFLElBQUYsQ0FBTyxDQUFQLENBQVMsWUFBVCxHQUFzQixFQUFFLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxNQUFiLEtBQXNCLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxVQUFiLENBQXhCLEVBQWlELEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxFQUFFLElBQUYsQ0FBTyxDQUFQLENBQVMsWUFBdEIsQ0FBakQsRUFBcUYsQ0FBckYsQ0FBdEIsR0FBOEcsRUFBRSxFQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsTUFBYixLQUFzQixFQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsVUFBYixDQUF4QixFQUFpRCxFQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsS0FBYixFQUFvQixJQUFwQixDQUF5QixLQUF6QixDQUFqRCxFQUFpRixDQUFqRixDQUE5RztBQUFrTSxLQUFqTyxFQUFtTyxFQUFFLElBQUYsQ0FBTyxNQUFQLENBQWMsSUFBZCxDQUFtQixXQUFuQixFQUFnQyxJQUFoQyxDQUFxQyxDQUFyQyxHQUF3QyxJQUFFLEVBQUUsSUFBRixDQUFPLE1BQVAsQ0FBYyxJQUFkLENBQW1CLGdCQUFuQixDQUExQyxFQUErRSxFQUFFLElBQUYsQ0FBTyxZQUFVO0FBQUMsVUFBSSxJQUFFLEVBQUUsSUFBRixDQUFOO0FBQUEsVUFBYyxJQUFFLEVBQUUsSUFBRixDQUFPLGVBQVAsQ0FBaEIsQ0FBd0MsS0FBRyxFQUFFLE9BQUYsQ0FBVSx1Q0FBcUMsQ0FBckMsR0FBdUMsa0JBQWpELEVBQW9FLEVBQUMsUUFBTyxNQUFSLEVBQXBFLEVBQW9GLFVBQVMsQ0FBVCxFQUFXO0FBQUMsVUFBRSxJQUFGLENBQU8sS0FBUCxFQUFjLElBQWQsQ0FBbUIsS0FBbkIsRUFBeUIsRUFBRSxDQUFGLEVBQUssRUFBRSxJQUFGLENBQU8sQ0FBUCxDQUFTLGNBQWQsQ0FBekI7QUFBd0QsT0FBeEosQ0FBSDtBQUE2SixLQUF2TixDQUEvRSxFQUF3UyxFQUFFLEVBQUYsQ0FBSyxFQUFFLElBQUYsQ0FBTyxLQUFaLEVBQW1CLFFBQW5CLENBQTRCLFFBQTVCLENBQXhTLEVBQThVLEVBQUUsSUFBRixDQUFPLEdBQVAsQ0FBVyxFQUFYLENBQWMscUJBQWQsRUFBb0MsWUFBVTtBQUFDLFFBQUUsV0FBRixDQUFjLFFBQWQsR0FBd0IsRUFBRSxFQUFGLENBQUssRUFBRSxJQUFGLENBQU8sS0FBWixFQUFtQixRQUFuQixDQUE0QixRQUE1QixDQUF4QjtBQUE4RCxLQUE3RyxDQUE5VSxFQUE2YixFQUFFLEVBQUYsQ0FBSyxzQkFBTCxFQUE0QixZQUFVO0FBQUMsVUFBSSxJQUFFLEVBQUUsSUFBRixDQUFOLENBQWMsV0FBVyxZQUFVO0FBQUMsU0FBQyxFQUFFLGNBQUYsSUFBa0IsQ0FBQyxFQUFFLElBQUYsQ0FBTyxNQUExQixJQUFrQyxDQUFDLEVBQUUsSUFBRixDQUFPLEtBQVAsRUFBcEMsTUFBc0QsRUFBRSxJQUFGLENBQU8sS0FBUCxHQUFhLEVBQUUsS0FBRixFQUFiLEVBQXVCLEVBQUUsSUFBRixDQUFPLEtBQVAsQ0FBYSxFQUFFLElBQUYsQ0FBTyxLQUFwQixFQUEwQixDQUFDLENBQTNCLEVBQTZCLENBQUMsQ0FBOUIsQ0FBN0U7QUFBK0csT0FBckksRUFBc0ksRUFBdEk7QUFBMEksS0FBL0wsQ0FBN2IsRUFBOG5CLEVBQUUsSUFBRixDQUFPLEdBQVAsQ0FBVyxFQUFYLENBQWMscUJBQWQsRUFBb0MsWUFBVTtBQUFDLFFBQUUsWUFBRixDQUFlLEVBQUUsSUFBRixDQUFPLEtBQXRCO0FBQTZCLEtBQTVFLENBQTluQixFQUE0c0IsRUFBRSxDQUFGLEVBQUssRUFBTCxDQUFRLDRDQUFSLEVBQXFELFlBQVU7QUFBQyxpQkFBVyxZQUFVO0FBQUMsVUFBRSxZQUFGLENBQWUsRUFBRSxJQUFGLENBQU8sS0FBdEIsR0FBNkIsRUFBRSxlQUFGLEdBQWtCLEVBQUUsV0FBRixDQUFjLEtBQWQsRUFBL0M7QUFBcUUsT0FBM0YsRUFBNEYsR0FBNUY7QUFBaUcsS0FBakssQ0FBNXNCO0FBQSsyQixHQUFsOUYsRUFBbTlGLEVBQUUsU0FBRixDQUFZLFlBQVosR0FBeUIsVUFBUyxDQUFULEVBQVc7QUFBQyxTQUFLLElBQUwsQ0FBVSxNQUFWLENBQWlCLElBQWpCLENBQXNCLFdBQXRCLEVBQW1DLEdBQW5DLENBQXVDLEVBQUMsV0FBVSxrQkFBZ0IsQ0FBaEIsR0FBa0IsZUFBN0IsRUFBdkM7QUFBc0YsR0FBOWtHLEVBQStrRyxFQUFFLFNBQUYsQ0FBWSxZQUFaLEdBQXlCLFVBQVMsQ0FBVCxFQUFXO0FBQUMsUUFBSSxJQUFFLEtBQUssSUFBTCxDQUFVLE1BQVYsQ0FBaUIsSUFBakIsQ0FBc0IsV0FBdEIsQ0FBTixDQUF5QyxJQUFHLEtBQUssSUFBTCxDQUFVLENBQVYsQ0FBWSxZQUFmLEVBQTRCO0FBQUMsVUFBSSxDQUFKLENBQU0sUUFBTyxLQUFLLElBQUwsQ0FBVSxDQUFWLENBQVksb0JBQW5CLEdBQXlDLEtBQUksTUFBSjtBQUFXLGNBQUUsQ0FBRixDQUFJLE1BQU0sS0FBSSxRQUFKO0FBQWEsY0FBRSxLQUFLLGVBQUwsR0FBcUIsQ0FBckIsR0FBdUIsS0FBSyxJQUFMLENBQVUsQ0FBVixDQUFZLFVBQVosR0FBdUIsQ0FBaEQsQ0FBa0QsTUFBTSxLQUFJLE9BQUo7QUFBWSxjQUFFLEtBQUssZUFBTCxHQUFxQixLQUFLLElBQUwsQ0FBVSxDQUFWLENBQVksVUFBbkMsQ0FBL0ksQ0FBNkwsS0FBSyxJQUFMLEdBQVUsQ0FBQyxLQUFLLElBQUwsQ0FBVSxDQUFWLENBQVksVUFBWixHQUF1QixLQUFLLElBQUwsQ0FBVSxDQUFWLENBQVksV0FBcEMsSUFBaUQsQ0FBakQsR0FBbUQsQ0FBbkQsR0FBcUQsQ0FBL0QsRUFBaUUsS0FBSyxJQUFMLEdBQVUsS0FBSyxlQUFMLEdBQXFCLEtBQUssZUFBcEMsS0FBc0QsS0FBSyxJQUFMLEdBQVUsS0FBSyxlQUFMLEdBQXFCLEtBQUssZUFBMUYsQ0FBakUsRUFBNEssS0FBSyxJQUFMLEdBQVUsQ0FBVixLQUFjLEtBQUssSUFBTCxHQUFVLENBQXhCLENBQTVLLEVBQXVNLEtBQUssSUFBTCxDQUFVLFVBQVYsSUFBc0IsRUFBRSxRQUFGLENBQVcsSUFBWCxLQUFrQixLQUFLLElBQUwsQ0FBVSxNQUFWLENBQWlCLElBQWpCLENBQXNCLFdBQXRCLEVBQW1DLEdBQW5DLENBQXVDLHFCQUF2QyxFQUE2RCxLQUFLLElBQUwsQ0FBVSxDQUFWLENBQVksS0FBWixHQUFrQixJQUEvRSxDQUFsQixFQUF1RyxLQUFLLElBQUwsQ0FBVSxLQUFWLE1BQW1CLEVBQUUsT0FBRixDQUFVLEVBQUMsTUFBSyxDQUFDLEtBQUssSUFBTixHQUFXLElBQWpCLEVBQVYsRUFBaUMsS0FBSyxJQUFMLENBQVUsQ0FBVixDQUFZLEtBQTdDLENBQWhKLElBQXFNLEtBQUssSUFBTCxDQUFVLEtBQVYsTUFBbUIsRUFBRSxHQUFGLENBQU0sTUFBTixFQUFhLENBQUMsS0FBSyxJQUFOLEdBQVcsSUFBeEIsQ0FBL1osRUFBNmIsS0FBSyxZQUFMLENBQWtCLEtBQUssSUFBdkIsQ0FBN2I7QUFBMGQ7QUFBQyxHQUF4MUgsRUFBeTFILEVBQUUsU0FBRixDQUFZLGVBQVosR0FBNEIsWUFBVTtBQUFDLFFBQUksSUFBRSxJQUFOO0FBQUEsUUFBVyxJQUFFLENBQWI7QUFBQSxRQUFlLElBQUUsQ0FBakI7QUFBQSxRQUFtQixJQUFFLENBQUMsQ0FBdEI7QUFBQSxRQUF3QixJQUFFLENBQUMsQ0FBM0I7QUFBQSxRQUE2QixJQUFFLENBQS9CLENBQWlDLEVBQUUsV0FBRixDQUFjLFFBQWQsQ0FBdUIsU0FBdkIsR0FBa0MsRUFBRSxJQUFGLENBQU8sTUFBUCxDQUFjLElBQWQsQ0FBbUIsV0FBbkIsRUFBZ0MsRUFBaEMsQ0FBbUMsb0JBQW5DLEVBQXdELFVBQVMsQ0FBVCxFQUFXO0FBQUMsUUFBRSxlQUFGLEdBQWtCLEVBQUUsZUFBcEIsS0FBc0MsRUFBRSxjQUFGLElBQW1CLElBQUUsRUFBRSxLQUF2QixFQUE2QixJQUFFLENBQUMsQ0FBaEMsRUFBa0MsRUFBRSxJQUFGLENBQU8sTUFBUCxDQUFjLFVBQWQsSUFBMEIsQ0FBNUQsRUFBOEQsRUFBRSxJQUFGLENBQU8sTUFBUCxDQUFjLFVBQWQsSUFBMEIsQ0FBeEYsRUFBMEYsRUFBRSxjQUFGLEdBQWlCLENBQUMsQ0FBNUcsRUFBOEcsRUFBRSxXQUFGLENBQWMsV0FBZCxDQUEwQixTQUExQixFQUFxQyxRQUFyQyxDQUE4QyxhQUE5QyxDQUFwSjtBQUFrTixLQUF0UixDQUFsQyxFQUEwVCxFQUFFLENBQUYsRUFBSyxFQUFMLENBQVEsb0JBQVIsRUFBNkIsVUFBUyxDQUFULEVBQVc7QUFBQyxZQUFJLElBQUUsRUFBRSxJQUFKLEVBQVMsSUFBRSxDQUFDLENBQVosRUFBYyxJQUFFLEVBQUUsS0FBbEIsRUFBd0IsRUFBRSxXQUFGLENBQWMsUUFBZCxDQUF1QixhQUF2QixDQUF4QixFQUE4RCxLQUFHLElBQUUsQ0FBbkUsRUFBcUUsSUFBRSxFQUFFLGVBQUYsR0FBa0IsRUFBRSxlQUF0QixLQUF3QyxJQUFFLEVBQUUsZUFBRixHQUFrQixFQUFFLGVBQTlELENBQXJFLEVBQW9KLElBQUUsQ0FBRixLQUFNLElBQUUsQ0FBUixDQUFwSixFQUErSixFQUFFLFlBQUYsQ0FBZSxDQUFmLENBQW5LO0FBQXNMLEtBQS9OLENBQTFULEVBQTJoQixFQUFFLENBQUYsRUFBSyxFQUFMLENBQVEsa0JBQVIsRUFBMkIsWUFBVTtBQUFDLFdBQUcsSUFBRSxDQUFDLENBQUgsRUFBSyxFQUFFLFdBQUYsQ0FBYyxXQUFkLENBQTBCLGFBQTFCLENBQUwsRUFBOEMsRUFBRSxJQUFGLEdBQU8sQ0FBckQsRUFBdUQsS0FBSyxHQUFMLENBQVMsSUFBRSxDQUFYLElBQWMsRUFBRSxJQUFGLENBQU8sQ0FBUCxDQUFTLGNBQXZCLEtBQXdDLEVBQUUsY0FBRixHQUFpQixDQUFDLENBQTFELENBQTFELElBQXdILEVBQUUsY0FBRixHQUFpQixDQUFDLENBQTFJLEVBQTRJLE1BQUksSUFBRSxDQUFDLENBQUgsRUFBSyxFQUFFLFdBQUYsQ0FBYyxXQUFkLENBQTBCLGFBQTFCLEVBQXlDLFFBQXpDLENBQWtELFNBQWxELENBQVQsQ0FBNUk7QUFBbU4sS0FBelAsQ0FBM2hCO0FBQXN4QixHQUF2ckosRUFBd3JKLEVBQUUsU0FBRixDQUFZLGdCQUFaLEdBQTZCLFlBQVU7QUFBQyxRQUFJLElBQUUsSUFBTjtBQUFBLFFBQVcsSUFBRSxDQUFiO0FBQUEsUUFBZSxJQUFFLENBQWpCO0FBQUEsUUFBbUIsSUFBRSxDQUFDLENBQXRCO0FBQUEsUUFBd0IsSUFBRSxDQUExQixDQUE0QixFQUFFLElBQUYsQ0FBTyxNQUFQLENBQWMsSUFBZCxDQUFtQixXQUFuQixFQUFnQyxFQUFoQyxDQUFtQyxlQUFuQyxFQUFtRCxVQUFTLENBQVQsRUFBVztBQUFDLFFBQUUsZUFBRixHQUFrQixFQUFFLGVBQXBCLEtBQXNDLEVBQUUsY0FBRixJQUFtQixJQUFFLEVBQUUsYUFBRixDQUFnQixhQUFoQixDQUE4QixDQUE5QixFQUFpQyxLQUF0RCxFQUE0RCxFQUFFLGNBQUYsR0FBaUIsQ0FBQyxDQUFwSDtBQUF1SCxLQUF0TCxHQUF3TCxFQUFFLElBQUYsQ0FBTyxNQUFQLENBQWMsSUFBZCxDQUFtQixXQUFuQixFQUFnQyxFQUFoQyxDQUFtQyxjQUFuQyxFQUFrRCxVQUFTLENBQVQsRUFBVztBQUFDLFFBQUUsZUFBRixHQUFrQixFQUFFLGVBQXBCLEtBQXNDLEVBQUUsY0FBRixJQUFtQixJQUFFLEVBQUUsYUFBRixDQUFnQixhQUFoQixDQUE4QixDQUE5QixFQUFpQyxLQUF0RCxFQUE0RCxJQUFFLENBQUMsQ0FBL0QsRUFBaUUsRUFBRSxXQUFGLENBQWMsUUFBZCxDQUF1QixhQUF2QixDQUFqRSxFQUF1RyxJQUFFLEVBQUUsSUFBM0csRUFBZ0gsS0FBRyxJQUFFLENBQXJILEVBQXVILElBQUUsRUFBRSxlQUFGLEdBQWtCLEVBQUUsZUFBdEIsS0FBd0MsSUFBRSxFQUFFLGVBQUYsR0FBa0IsRUFBRSxlQUE5RCxDQUF2SCxFQUFzTSxJQUFFLENBQUYsS0FBTSxJQUFFLENBQVIsQ0FBdE0sRUFBaU4sRUFBRSxZQUFGLENBQWUsQ0FBZixDQUF2UDtBQUEwUSxLQUF4VSxDQUF4TCxFQUFrZ0IsRUFBRSxJQUFGLENBQU8sTUFBUCxDQUFjLElBQWQsQ0FBbUIsV0FBbkIsRUFBZ0MsRUFBaEMsQ0FBbUMsYUFBbkMsRUFBaUQsWUFBVTtBQUFDLFFBQUUsZUFBRixHQUFrQixFQUFFLGVBQXBCLElBQXFDLENBQXJDLElBQXdDLElBQUUsQ0FBQyxDQUFILEVBQUssRUFBRSxXQUFGLENBQWMsV0FBZCxDQUEwQixhQUExQixDQUFMLEVBQThDLEtBQUssR0FBTCxDQUFTLElBQUUsQ0FBWCxJQUFjLEVBQUUsSUFBRixDQUFPLENBQVAsQ0FBUyxjQUF2QixLQUF3QyxFQUFFLGNBQUYsR0FBaUIsQ0FBQyxDQUExRCxDQUE5QyxFQUEyRyxFQUFFLElBQUYsR0FBTyxDQUExSixJQUE2SixFQUFFLGNBQUYsR0FBaUIsQ0FBQyxDQUEvSztBQUFpTCxLQUE3TyxDQUFsZ0I7QUFBaXZCLEdBQTcrSyxFQUE4K0ssRUFBRSxTQUFGLENBQVksTUFBWixHQUFtQixZQUFVO0FBQUMsUUFBSSxJQUFFLElBQU4sQ0FBVyxFQUFFLElBQUYsQ0FBTyxDQUFQLENBQVMsV0FBVCxLQUF1QixFQUFFLElBQUYsQ0FBTyxNQUFQLENBQWMsUUFBZCxDQUF1QixlQUF2QixHQUF3QyxFQUFFLFdBQUYsQ0FBYyxNQUFkLENBQXFCLCtDQUFyQixDQUF4QyxFQUE4RyxFQUFFLElBQUYsQ0FBTyxNQUFQLENBQWMsSUFBZCxDQUFtQixrQkFBbkIsRUFBdUMsRUFBdkMsQ0FBMEMsVUFBMUMsRUFBcUQsWUFBVTtBQUFDLFFBQUUsSUFBRixDQUFPLE1BQVAsQ0FBYyxXQUFkLENBQTBCLGVBQTFCO0FBQTJDLEtBQTNHLENBQXJJO0FBQW1QLEdBQTF3TCxFQUEyd0wsRUFBRSxTQUFGLENBQVksYUFBWixHQUEwQixZQUFVO0FBQUMsUUFBSSxJQUFFLElBQU4sQ0FBVyxFQUFFLENBQUYsRUFBSyxFQUFMLENBQVEsa0JBQVIsRUFBMkIsVUFBUyxDQUFULEVBQVc7QUFBQyxhQUFLLEVBQUUsT0FBUCxJQUFnQixFQUFFLGNBQUYsSUFBbUIsRUFBRSxJQUFGLENBQU8sTUFBUCxDQUFjLFFBQWQsQ0FBdUIsZUFBdkIsQ0FBbkMsSUFBNEUsT0FBSyxFQUFFLE9BQVAsS0FBaUIsRUFBRSxjQUFGLElBQW1CLEVBQUUsSUFBRixDQUFPLE1BQVAsQ0FBYyxXQUFkLENBQTBCLGVBQTFCLENBQXBDLENBQTVFO0FBQTRKLEtBQW5NO0FBQXFNLEdBQWhnTSxFQUFpZ00sRUFBRSxTQUFGLENBQVksT0FBWixHQUFvQixZQUFVO0FBQUMsU0FBSyxJQUFMLENBQVUsQ0FBVixDQUFZLFNBQVosSUFBdUIsS0FBSyxJQUFMLENBQVUsTUFBVixDQUFpQixNQUFqQixHQUF3QixDQUEvQyxLQUFtRCxFQUFFLENBQUYsRUFBSyxHQUFMLENBQVMsNkRBQVQsR0FBd0UsS0FBSyxXQUFMLENBQWlCLE1BQWpCLEVBQXhFLEVBQWtHLEtBQUssSUFBTCxDQUFVLE1BQVYsQ0FBaUIsV0FBakIsQ0FBNkIsY0FBN0IsQ0FBcko7QUFBbU0sR0FBbnVNLEVBQW91TSxFQUFFLEVBQUYsQ0FBSyxZQUFMLENBQWtCLE9BQWxCLENBQTBCLFNBQTFCLEdBQW9DLENBQXh3TTtBQUEwd00sQ0FBajlOLENBQWs5TixNQUFsOU4sRUFBeTlOLE1BQXo5TixFQUFnK04sUUFBaCtOLENBQUQ7Ozs7O0FDSEE7OztBQUdBLENBQUMsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCO0FBQUM7QUFBYSxXQUFTLENBQVQsQ0FBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsUUFBRyxLQUFLLEVBQUwsR0FBUSxDQUFSLEVBQVUsS0FBSyxHQUFMLEdBQVMsRUFBRSxDQUFGLENBQW5CLEVBQXdCLEtBQUssQ0FBTCxHQUFPLEVBQUUsTUFBRixDQUFTLEVBQVQsRUFBWSxDQUFaLEVBQWMsQ0FBZCxDQUEvQixFQUFnRCxLQUFLLENBQUwsQ0FBTyxPQUFQLElBQWdCLGdCQUFjLEtBQUssQ0FBTCxDQUFPLFNBQXJDLElBQWdELEtBQUssQ0FBTCxDQUFPLFNBQVAsQ0FBaUIsV0FBakIsS0FBK0IsS0FBL0UsSUFBc0YsQ0FBQyxLQUFLLENBQUwsQ0FBTyxTQUFQLENBQWlCLE1BQTNKLEVBQWtLLE1BQUssc0VBQUwsQ0FBNEUsT0FBTyxLQUFLLE9BQUwsR0FBYSxFQUFiLEVBQWdCLEtBQUssVUFBTCxHQUFnQixDQUFDLENBQWpDLEVBQW1DLEtBQUssTUFBTCxHQUFZLENBQUMsQ0FBaEQsRUFBa0QsS0FBSyxjQUFMLEdBQW9CLENBQUMsQ0FBdkUsRUFBeUUsS0FBSyxPQUFMLEdBQWEsa0JBQWlCLEVBQUUsZUFBekcsRUFBeUgsS0FBSyxDQUFMLENBQU8saUJBQVAsS0FBMkIsS0FBSyxDQUFMLENBQU8sZ0JBQVAsR0FBd0IsQ0FBQyxDQUFwRCxDQUF6SCxFQUFnTCxLQUFLLENBQUwsQ0FBTyxPQUFQLEdBQWUsS0FBSyxNQUFMLEdBQVksS0FBSyxDQUFMLENBQU8sU0FBbEMsR0FBNEMsV0FBUyxLQUFLLENBQUwsQ0FBTyxRQUFoQixHQUF5QixLQUFLLE1BQUwsR0FBWSxLQUFLLEdBQTFDLEdBQThDLE9BQUssS0FBSyxDQUFMLENBQU8sUUFBWixHQUFxQixLQUFLLENBQUwsQ0FBTyxZQUFQLEdBQW9CLEtBQUssTUFBTCxHQUFZLEVBQUUsS0FBSyxDQUFMLENBQU8sWUFBVCxFQUF1QixJQUF2QixDQUE0QixLQUFLLENBQUwsQ0FBTyxRQUFuQyxDQUFoQyxHQUE2RSxLQUFLLE1BQUwsR0FBWSxLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsRUFBRSxLQUFLLENBQUwsQ0FBTyxRQUFULENBQWQsQ0FBOUcsR0FBZ0osS0FBSyxNQUFMLEdBQVksS0FBSyxHQUFMLENBQVMsUUFBVCxFQUF0YSxFQUEwYixLQUFLLE1BQUwsR0FBWSxFQUF0YyxFQUF5YyxLQUFLLE1BQUwsR0FBWSxFQUFyZCxFQUF3ZCxLQUFLLElBQUwsRUFBeGQsRUFBb2UsSUFBM2U7QUFBZ2YsT0FBSSxJQUFFLEVBQUMsTUFBSyxVQUFOLEVBQWlCLFdBQVUsTUFBM0IsRUFBa0MsUUFBTyxRQUF6QyxFQUFrRCxPQUFNLEdBQXhELEVBQTRELFFBQU8sTUFBbkUsRUFBMEUsT0FBTSxNQUFoRixFQUF1RixVQUFTLEVBQWhHLEVBQW1HLFlBQVcsZUFBOUcsRUFBOEgsa0JBQWlCLEdBQS9JLEVBQW1KLGVBQWMsR0FBakssRUFBcUssU0FBUSxDQUFDLENBQTlLLEVBQWdMLFVBQVMsQ0FBQyxDQUExTCxFQUE0TCxNQUFLLENBQUMsQ0FBbE0sRUFBb00sUUFBTyxDQUFDLENBQTVNLEVBQThNLFVBQVMsQ0FBQyxDQUF4TixFQUEwTixVQUFTLENBQUMsQ0FBcE8sRUFBc08sbUJBQWtCLENBQUMsQ0FBelAsRUFBMlAsa0JBQWlCLENBQUMsQ0FBN1EsRUFBK1EsWUFBVyxDQUFDLENBQTNSLEVBQTZSLGlCQUFnQixjQUE3UyxFQUE0VCxTQUFRLENBQXBVLEVBQXNVLGVBQWMsQ0FBQyxDQUFyVixFQUF1VixVQUFTLEVBQWhXLEVBQW1XLGNBQWEsRUFBaFgsRUFBbVgsVUFBUyxFQUE1WCxFQUErWCxVQUFTLEVBQXhZLEVBQTJZLE9BQU0sQ0FBQyxDQUFsWixFQUFvWixnQkFBZSxNQUFuYSxFQUEwYSxVQUFTLENBQUMsQ0FBcGIsRUFBc2IsU0FBUSxDQUFDLENBQS9iLEVBQWljLGlCQUFnQixhQUFqZCxFQUErZCxnQkFBZSxFQUE5ZSxFQUFpZixhQUFZLENBQUMsQ0FBOWYsRUFBZ2dCLFlBQVcsQ0FBQyxDQUE1Z0IsRUFBOGdCLFNBQVEsQ0FBQyxDQUF2aEIsRUFBeWhCLFdBQVUsRUFBbmlCLEVBQXNpQixXQUFVLENBQWhqQixFQUFOLENBQXlqQixFQUFFLFNBQUYsQ0FBWSxJQUFaLEdBQWlCLFlBQVU7QUFBQyxRQUFJLElBQUUsSUFBTixDQUFXLEVBQUUsQ0FBRixDQUFJLE9BQUosR0FBWSxFQUFFLE1BQUYsQ0FBUyxNQUFyQixLQUE4QixFQUFFLENBQUYsQ0FBSSxPQUFKLEdBQVksRUFBRSxNQUFGLENBQVMsTUFBbkQsRUFBMkQsSUFBSSxJQUFFLEVBQUUsUUFBRixDQUFXLElBQWpCLENBQXNCLEVBQUUsT0FBRixDQUFVLFFBQU0sS0FBSyxDQUFMLENBQU8sU0FBdkIsSUFBa0MsQ0FBbEMsS0FBc0MsRUFBRSxLQUFGLEdBQVEsU0FBUyxFQUFFLEtBQUYsQ0FBUSxTQUFSLEVBQW1CLENBQW5CLENBQVQsRUFBK0IsRUFBL0IsQ0FBUixFQUEyQyxFQUFFLE1BQUYsRUFBVSxRQUFWLENBQW1CLGNBQW5CLENBQTNDLEVBQThFLEVBQUUsTUFBRixFQUFVLFFBQVYsQ0FBbUIsT0FBbkIsS0FBNkIsV0FBVyxZQUFVO0FBQUMsUUFBRSxLQUFGLENBQVEsRUFBRSxLQUFWLEdBQWlCLEVBQUUsTUFBRixFQUFVLFFBQVYsQ0FBbUIsT0FBbkIsQ0FBakI7QUFBNkMsS0FBbkUsQ0FBakosR0FBdU4sRUFBRSxDQUFGLENBQUksT0FBSixJQUFhLEVBQUUsR0FBRixDQUFNLE9BQU4sQ0FBYyxpQkFBZCxHQUFpQyxFQUFFLEtBQUYsR0FBUSxFQUFFLENBQUYsQ0FBSSxLQUFKLElBQVcsQ0FBcEQsRUFBc0QsRUFBRSxNQUFGLEVBQVUsUUFBVixDQUFtQixPQUFuQixLQUE2QixXQUFXLFlBQVU7QUFBQyxRQUFFLEtBQUYsQ0FBUSxFQUFFLEtBQVYsR0FBaUIsRUFBRSxNQUFGLEVBQVUsUUFBVixDQUFtQixPQUFuQixDQUFqQjtBQUE2QyxLQUFuRSxDQUFoRyxJQUFzSyxFQUFFLE1BQUYsQ0FBUyxFQUFULENBQVksZ0JBQVosRUFBNkIsVUFBUyxDQUFULEVBQVc7QUFBQyxVQUFHO0FBQUMsVUFBRSxjQUFGLElBQW1CLEVBQUUsY0FBRixFQUFuQjtBQUFzQyxPQUExQyxDQUEwQyxPQUFNLENBQU4sRUFBUTtBQUFDLFVBQUUsV0FBRixHQUFjLENBQUMsQ0FBZjtBQUFpQixTQUFFLEdBQUYsQ0FBTSxPQUFOLENBQWMsaUJBQWQsR0FBaUMsRUFBRSxLQUFGLEdBQVEsRUFBRSxDQUFGLENBQUksS0FBSixJQUFXLEVBQUUsTUFBRixDQUFTLEtBQVQsQ0FBZSxJQUFmLENBQXBELEVBQXlFLEVBQUUsTUFBRixFQUFVLFFBQVYsQ0FBbUIsT0FBbkIsTUFBOEIsRUFBRSxLQUFGLENBQVEsRUFBRSxLQUFWLEdBQWlCLEVBQUUsTUFBRixFQUFVLFFBQVYsQ0FBbUIsT0FBbkIsQ0FBL0MsQ0FBekU7QUFBcUosS0FBbFEsQ0FBN1g7QUFBaW9CLEdBQXp2QixFQUEwdkIsRUFBRSxTQUFGLENBQVksS0FBWixHQUFrQixVQUFTLENBQVQsRUFBVztBQUFDLFFBQUksSUFBRSxJQUFOLENBQVcsRUFBRSxTQUFGLElBQWMsRUFBRSxJQUFGLENBQU8sRUFBRSxFQUFGLENBQUssWUFBTCxDQUFrQixPQUF6QixFQUFpQyxVQUFTLENBQVQsRUFBVztBQUFDLFFBQUUsT0FBRixDQUFVLENBQVYsSUFBYSxJQUFJLEVBQUUsRUFBRixDQUFLLFlBQUwsQ0FBa0IsT0FBbEIsQ0FBMEIsQ0FBMUIsQ0FBSixDQUFpQyxFQUFFLEVBQW5DLENBQWI7QUFBb0QsS0FBakcsQ0FBZCxFQUFpSCxFQUFFLEtBQUYsQ0FBUSxDQUFSLEVBQVUsQ0FBQyxDQUFYLEVBQWEsQ0FBQyxDQUFkLENBQWpILEVBQWtJLEVBQUUsQ0FBRixDQUFJLFFBQUosSUFBYyxFQUFFLFFBQUYsRUFBaEosRUFBNkosRUFBRSxNQUFGLENBQVMsTUFBVCxHQUFnQixDQUFoQixLQUFvQixFQUFFLEtBQUYsSUFBVSxXQUFXLFlBQVU7QUFBQyxRQUFFLFVBQUYsSUFBZSxFQUFFLFdBQUYsRUFBZjtBQUErQixLQUFyRCxFQUFzRCxFQUF0RCxDQUFWLEVBQW9FLEVBQUUsQ0FBRixDQUFJLFVBQUosSUFBZ0IsRUFBRSxVQUFGLEVBQXhHLENBQTdKLEVBQXFSLEVBQUUsT0FBRixFQUFyUixFQUFpUyxFQUFFLFlBQUYsRUFBalMsRUFBa1QsRUFBRSxHQUFGLENBQU0sT0FBTixDQUFjLGdCQUFkLENBQWxULEVBQWtWLEVBQUUsTUFBRixDQUFTLEVBQVQsQ0FBWSxxQ0FBWixFQUFrRCxZQUFVO0FBQUMsUUFBRSxNQUFGLENBQVMsV0FBVCxDQUFxQixlQUFyQixHQUFzQyxhQUFhLEVBQUUsY0FBZixDQUF0QyxFQUFxRSxFQUFFLGNBQUYsR0FBaUIsV0FBVyxZQUFVO0FBQUMsVUFBRSxNQUFGLENBQVMsUUFBVCxDQUFrQixlQUFsQjtBQUFtQyxPQUF6RCxFQUEwRCxFQUFFLENBQUYsQ0FBSSxhQUE5RCxDQUF0RjtBQUFtSyxLQUFoTyxDQUFsVjtBQUFvakIsR0FBdjFDLEVBQXcxQyxFQUFFLFNBQUYsQ0FBWSxTQUFaLEdBQXNCLFlBQVU7QUFBQyxRQUFJLENBQUo7QUFBQSxRQUFNLElBQUUsRUFBUjtBQUFBLFFBQVcsSUFBRSxFQUFiO0FBQUEsUUFBZ0IsSUFBRSxDQUFsQjtBQUFBLFFBQW9CLElBQUUsRUFBdEI7QUFBQSxRQUF5QixJQUFFLElBQTNCLENBQWdDLEtBQUksRUFBRSxNQUFGLEVBQVUsTUFBVixDQUFpQixpQ0FBakIsR0FBb0QsRUFBRSxjQUFGLEVBQWtCLEdBQWxCLENBQXNCLHFCQUF0QixFQUE0QyxLQUFLLENBQUwsQ0FBTyxnQkFBUCxHQUF3QixJQUFwRSxDQUFwRCxFQUE4SCxJQUFFLENBQXBJLEVBQXNJLElBQUUsS0FBSyxNQUFMLENBQVksTUFBcEosRUFBMkosR0FBM0o7QUFBK0osV0FBRyw2QkFBSDtBQUEvSixLQUFnTSxJQUFHLEtBQUssQ0FBTCxDQUFPLFFBQVAsSUFBaUIsS0FBSyxNQUFMLENBQVksTUFBWixHQUFtQixDQUFwQyxLQUF3QyxJQUFFLDBEQUF3RCxLQUFLLENBQUwsQ0FBTyxRQUEvRCxHQUF3RSxxQ0FBeEUsR0FBOEcsS0FBSyxDQUFMLENBQU8sUUFBckgsR0FBOEgsY0FBeEssR0FBd0wsbUJBQWlCLEtBQUssQ0FBTCxDQUFPLGVBQXhCLEtBQTBDLElBQUUsaUNBQTVDLENBQXhMLEVBQXVRLElBQUUsMEJBQXdCLEtBQUssQ0FBTCxDQUFPLFFBQS9CLEdBQXdDLEdBQXhDLEdBQTRDLEtBQUssQ0FBTCxDQUFPLFVBQW5ELEdBQThELGlDQUE5RCxHQUFnRyxLQUFLLENBQUwsQ0FBTyxLQUF2RyxHQUE2RyxXQUE3RyxHQUF5SCxLQUFLLENBQUwsQ0FBTyxNQUFoSSxHQUF1SSwwQkFBdkksR0FBa0ssQ0FBbEssR0FBb0ssa0ZBQXBLLEdBQXVQLENBQXZQLEdBQXlQLENBQXpQLEdBQTJQLGNBQXBnQixFQUFtaEIsRUFBRSxNQUFGLEVBQVUsTUFBVixDQUFpQixDQUFqQixDQUFuaEIsRUFBdWlCLEtBQUssTUFBTCxHQUFZLEVBQUUsV0FBRixDQUFuakIsRUFBa2tCLEtBQUssTUFBTCxHQUFZLEtBQUssTUFBTCxDQUFZLElBQVosQ0FBaUIsVUFBakIsQ0FBOWtCLEVBQTJtQixLQUFLLENBQUwsQ0FBTyxPQUFQLElBQWdCLEtBQUssTUFBTCxDQUFZLFFBQVosQ0FBcUIsYUFBckIsR0FBb0MsS0FBSyxDQUFMLENBQU8sSUFBUCxHQUFZLFVBQWhFLElBQTRFLEtBQUssTUFBTCxDQUFZLFFBQVosQ0FBcUIsYUFBckIsQ0FBdnJCLEVBQTJ0QixFQUFFLE1BQUYsRUFBM3RCLEVBQXN1QixFQUFFLENBQUYsRUFBSyxFQUFMLENBQVEsZ0NBQVIsRUFBeUMsWUFBVTtBQUFDLGlCQUFXLFlBQVU7QUFBQyxVQUFFLE1BQUY7QUFBVyxPQUFqQyxFQUFrQyxHQUFsQztBQUF1QyxLQUEzRixDQUF0dUIsRUFBbTBCLEtBQUssTUFBTCxDQUFZLEVBQVosQ0FBZSxLQUFLLEtBQXBCLEVBQTJCLFFBQTNCLENBQW9DLFlBQXBDLENBQW4wQixFQUFxM0IsS0FBSyxLQUFMLEtBQWEsS0FBSyxNQUFMLENBQVksUUFBWixDQUFxQixTQUFyQixDQUFiLElBQThDLEtBQUssTUFBTCxDQUFZLFFBQVosQ0FBcUIsUUFBckIsR0FBK0IsS0FBSyxDQUFMLENBQU8sS0FBUCxHQUFhLENBQTFGLENBQXIzQixFQUFrOUIsS0FBSyxNQUFMLENBQVksUUFBWixDQUFxQixLQUFLLENBQUwsQ0FBTyxJQUE1QixDQUFsOUIsRUFBby9CLEtBQUssQ0FBTCxDQUFPLFVBQVAsSUFBbUIsS0FBSyxNQUFMLENBQVksTUFBWixHQUFtQixDQUF0QyxJQUF5QyxLQUFLLE1BQUwsQ0FBWSxRQUFaLENBQXFCLFNBQXJCLENBQTdoQyxFQUE2akMsS0FBSyxDQUFMLENBQU8sYUFBUCxJQUFzQixLQUFLLE1BQUwsQ0FBWSxRQUFaLENBQXFCLG9CQUFyQixDQUFubEMsRUFBOG5DLEtBQUssS0FBTCxFQUFqb0MsRUFBOG9DO0FBQUMsVUFBSSxJQUFFLEtBQUssTUFBTCxDQUFZLElBQVosQ0FBaUIsV0FBakIsQ0FBTixDQUFvQyxFQUFFLEdBQUYsQ0FBTSw0QkFBTixFQUFtQyxLQUFLLENBQUwsQ0FBTyxTQUExQyxHQUFxRCxFQUFFLEdBQUYsQ0FBTSxxQkFBTixFQUE0QixLQUFLLENBQUwsQ0FBTyxLQUFQLEdBQWEsSUFBekMsQ0FBckQ7QUFBb0csT0FBRSxjQUFGLEVBQWtCLFFBQWxCLENBQTJCLElBQTNCLEdBQWlDLFdBQVcsWUFBVTtBQUFDLFFBQUUsTUFBRixDQUFTLFFBQVQsQ0FBa0IsWUFBbEI7QUFBZ0MsS0FBdEQsRUFBdUQsS0FBSyxDQUFMLENBQU8sZ0JBQTlELENBQWpDLEVBQWlILEtBQUssQ0FBTCxDQUFPLFFBQVAsSUFBaUIsS0FBSyxNQUFMLENBQVksSUFBWixDQUFpQixhQUFqQixFQUFnQyxNQUFoQyxDQUF1QywrRUFBdkMsQ0FBbEksRUFBMFAsS0FBSyxhQUFMLEdBQW1CLEVBQUUsQ0FBRixFQUFLLFNBQUwsRUFBN1E7QUFBOFIsR0FBOW9HLEVBQStvRyxFQUFFLFNBQUYsQ0FBWSxNQUFaLEdBQW1CLFlBQVU7QUFBQyxRQUFHLFdBQVMsS0FBSyxDQUFMLENBQU8sTUFBbkIsRUFBMEI7QUFBQyxVQUFJLElBQUUsRUFBRSxDQUFGLEVBQUssTUFBTCxFQUFOO0FBQUEsVUFBb0IsSUFBRSxDQUFDLElBQUUsU0FBUyxLQUFLLENBQUwsQ0FBTyxNQUFoQixFQUF1QixFQUF2QixDQUFILElBQStCLENBQXJEO0FBQUEsVUFBdUQsSUFBRSxLQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWlCLEtBQWpCLENBQXpELENBQWlGLEtBQUcsU0FBUyxLQUFLLENBQUwsQ0FBTyxNQUFoQixFQUF1QixFQUF2QixDQUFILEdBQThCLEVBQUUsR0FBRixDQUFNLEtBQU4sRUFBWSxJQUFFLElBQWQsQ0FBOUIsR0FBa0QsRUFBRSxHQUFGLENBQU0sS0FBTixFQUFZLEtBQVosQ0FBbEQ7QUFBcUU7QUFBQyxHQUEvMUcsRUFBZzJHLEVBQUUsU0FBRixDQUFZLEtBQVosR0FBa0IsWUFBVTtBQUFDLFFBQUksSUFBRSxhQUFVO0FBQUMsVUFBSSxJQUFFLENBQUMsWUFBRCxFQUFjLGVBQWQsRUFBOEIsa0JBQTlCLEVBQWlELGFBQWpELEVBQStELGNBQS9ELEVBQThFLGlCQUE5RSxDQUFOO0FBQUEsVUFBdUcsSUFBRSxFQUFFLGVBQTNHO0FBQUEsVUFBMkgsSUFBRSxDQUE3SCxDQUErSCxLQUFJLElBQUUsQ0FBTixFQUFRLElBQUUsRUFBRSxNQUFaLEVBQW1CLEdBQW5CO0FBQXVCLFlBQUcsRUFBRSxDQUFGLEtBQU8sRUFBRSxLQUFaLEVBQWtCLE9BQU0sQ0FBQyxDQUFQO0FBQXpDO0FBQWtELEtBQWxNLENBQW1NLE9BQU8sTUFBSSxDQUFDLENBQUwsR0FBTyxDQUFDLENBQWY7QUFBaUIsR0FBamxILEVBQWtsSCxFQUFFLFNBQUYsQ0FBWSxPQUFaLEdBQW9CLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLFFBQUksQ0FBSixDQUFNLElBQUcsSUFBRSxLQUFLLENBQUwsQ0FBTyxPQUFQLEdBQWUsS0FBSyxDQUFMLENBQU8sU0FBUCxDQUFpQixDQUFqQixFQUFvQixJQUFuQyxHQUF3QyxLQUFLLE1BQUwsQ0FBWSxFQUFaLENBQWUsQ0FBZixFQUFrQixJQUFsQixDQUF1QixXQUF2QixDQUExQyxFQUE4RSxDQUFDLENBQUQsSUFBSSxDQUFyRixFQUF1RixPQUFNLEVBQUMsT0FBTSxDQUFDLENBQVIsRUFBTixDQUFpQixJQUFJLElBQUUsRUFBRSxLQUFGLENBQVEsK0VBQVIsQ0FBTjtBQUFBLFFBQStGLElBQUUsRUFBRSxLQUFGLENBQVEsMENBQVIsQ0FBakc7QUFBQSxRQUFxSixJQUFFLEVBQUUsS0FBRixDQUFRLHVDQUFSLENBQXZKLENBQXdNLE9BQU8sSUFBRSxFQUFDLFNBQVEsQ0FBVCxFQUFGLEdBQWMsSUFBRSxFQUFDLE9BQU0sQ0FBUCxFQUFGLEdBQVksSUFBRSxFQUFDLGFBQVksQ0FBYixFQUFGLEdBQWtCLEtBQUssQ0FBeEQ7QUFBMEQsR0FBcCtILEVBQXErSCxFQUFFLFNBQUYsQ0FBWSxPQUFaLEdBQW9CLFlBQVU7QUFBQyxTQUFLLENBQUwsQ0FBTyxPQUFQLElBQWdCLEVBQUUsS0FBSyxDQUFMLENBQU8sZUFBVCxFQUEwQixNQUExQixDQUFpQyx5REFBdUQsU0FBUyxLQUFLLEtBQWQsRUFBb0IsRUFBcEIsSUFBd0IsQ0FBL0UsSUFBa0Ysc0NBQWxGLEdBQXlILEtBQUssTUFBTCxDQUFZLE1BQXJJLEdBQTRJLGVBQTdLLENBQWhCO0FBQThNLEdBQWx0SSxFQUFtdEksRUFBRSxTQUFGLENBQVksT0FBWixHQUFvQixVQUFTLENBQVQsRUFBVztBQUFDLFFBQUksQ0FBSjtBQUFBLFFBQU0sSUFBRSxJQUFSLENBQWEsSUFBRyxLQUFLLENBQUwsQ0FBTyxPQUFQLEdBQWUsS0FBSyxDQUFMLENBQU8sU0FBUCxDQUFpQixDQUFqQixFQUFvQixVQUFwQixHQUErQixJQUFFLEtBQUssQ0FBTCxDQUFPLFNBQVAsQ0FBaUIsQ0FBakIsRUFBb0IsVUFBckQsR0FBZ0UsSUFBRSxLQUFLLENBQUwsQ0FBTyxTQUFQLENBQWlCLENBQWpCLEVBQW9CLE9BQXJHLEdBQTZHLEtBQUssTUFBTCxDQUFZLEVBQVosQ0FBZSxDQUFmLEVBQWtCLElBQWxCLENBQXVCLG1CQUF2QixJQUE0QyxJQUFFLEtBQUssTUFBTCxDQUFZLEVBQVosQ0FBZSxDQUFmLEVBQWtCLElBQWxCLENBQXVCLG1CQUF2QixDQUE5QyxHQUEwRixJQUFFLEtBQUssTUFBTCxDQUFZLEVBQVosQ0FBZSxDQUFmLEVBQWtCLElBQWxCLENBQXVCLGVBQXZCLENBQXpNLEVBQWlQLENBQUMsQ0FBclAsRUFBdVAsSUFBRyxlQUFhLE9BQU8sQ0FBcEIsSUFBdUIsU0FBTyxDQUFqQyxFQUFtQztBQUFDLFVBQUksSUFBRSxFQUFFLFNBQUYsQ0FBWSxDQUFaLEVBQWMsQ0FBZCxDQUFOLENBQXVCLElBQUUsUUFBTSxDQUFOLElBQVMsUUFBTSxDQUFmLEdBQWlCLEVBQUUsQ0FBRixFQUFLLElBQUwsRUFBakIsR0FBNkIsQ0FBL0I7QUFBaUMsS0FBNUYsTUFBaUcsSUFBRSxFQUFGLENBQUssbUJBQWlCLEtBQUssQ0FBTCxDQUFPLGVBQXhCLEdBQXdDLElBQUUsS0FBSyxNQUFMLENBQVksSUFBWixDQUFpQixLQUFLLENBQUwsQ0FBTyxlQUF4QixFQUF5QyxJQUF6QyxDQUE4QyxDQUE5QyxDQUFGLEdBQW1ELEtBQUssTUFBTCxDQUFZLElBQVosQ0FBaUIsS0FBSyxDQUFMLENBQU8sZUFBeEIsRUFBeUMsSUFBekMsQ0FBOEMsQ0FBOUMsQ0FBM0YsR0FBNEksSUFBRSxLQUFLLE1BQUwsQ0FBWSxFQUFaLENBQWUsQ0FBZixFQUFrQixJQUFsQixDQUF1QixDQUF2QixDQUFGLEdBQTRCLEtBQUssTUFBTCxDQUFZLEVBQVosQ0FBZSxDQUFmLEVBQWtCLE1BQWxCLENBQXlCLENBQXpCLENBQXhLLEVBQW9NLGVBQWEsT0FBTyxDQUFwQixJQUF1QixTQUFPLENBQTlCLEtBQWtDLE9BQUssQ0FBTCxHQUFPLEtBQUssTUFBTCxDQUFZLElBQVosQ0FBaUIsS0FBSyxDQUFMLENBQU8sZUFBeEIsRUFBeUMsUUFBekMsQ0FBa0QsZUFBbEQsQ0FBUCxHQUEwRSxLQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWlCLEtBQUssQ0FBTCxDQUFPLGVBQXhCLEVBQXlDLFdBQXpDLENBQXFELGVBQXJELENBQTVHLENBQXBNLEVBQXVYLEtBQUssR0FBTCxDQUFTLE9BQVQsQ0FBaUIseUJBQWpCLEVBQTJDLENBQUMsQ0FBRCxDQUEzQyxDQUF2WDtBQUF1YSxHQUFwZ0ssRUFBcWdLLEVBQUUsU0FBRixDQUFZLE9BQVosR0FBb0IsVUFBUyxDQUFULEVBQVc7QUFBQyxRQUFJLElBQUUsQ0FBTjtBQUFBLFFBQVEsSUFBRSxDQUFWLENBQVksS0FBSSxJQUFFLENBQU4sRUFBUSxLQUFHLEtBQUssQ0FBTCxDQUFPLE9BQVYsSUFBbUIsRUFBRSxLQUFHLEtBQUssTUFBTCxDQUFZLE1BQVosR0FBbUIsQ0FBeEIsQ0FBM0IsRUFBc0QsR0FBdEQ7QUFBMEQsV0FBSyxXQUFMLENBQWlCLElBQUUsQ0FBbkIsRUFBcUIsQ0FBQyxDQUF0QixFQUF3QixDQUF4QjtBQUExRCxLQUFxRixLQUFJLElBQUUsQ0FBTixFQUFRLEtBQUcsS0FBSyxDQUFMLENBQU8sT0FBVixJQUFtQixFQUFFLElBQUUsSUFBRSxDQUFOLENBQTNCLEVBQW9DLEdBQXBDO0FBQXdDLFdBQUssV0FBTCxDQUFpQixJQUFFLENBQW5CLEVBQXFCLENBQUMsQ0FBdEIsRUFBd0IsQ0FBeEI7QUFBeEM7QUFBbUUsR0FBenNLLEVBQTBzSyxFQUFFLFNBQUYsQ0FBWSxXQUFaLEdBQXdCLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQyxRQUFJLENBQUo7QUFBQSxRQUFNLENBQU47QUFBQSxRQUFRLENBQVI7QUFBQSxRQUFVLENBQVY7QUFBQSxRQUFZLENBQVo7QUFBQSxRQUFjLENBQWQ7QUFBQSxRQUFnQixJQUFFLElBQWxCO0FBQUEsUUFBdUIsSUFBRSxDQUFDLENBQTFCO0FBQUEsUUFBNEIsSUFBRSxTQUFGLENBQUUsQ0FBUyxDQUFULEVBQVc7QUFBQyxXQUFJLElBQUksSUFBRSxFQUFOLEVBQVMsSUFBRSxFQUFYLEVBQWMsSUFBRSxDQUFwQixFQUFzQixJQUFFLEVBQUUsTUFBMUIsRUFBaUMsR0FBakMsRUFBcUM7QUFBQyxZQUFJLElBQUUsRUFBRSxDQUFGLEVBQUssS0FBTCxDQUFXLEdBQVgsQ0FBTixDQUFzQixPQUFLLEVBQUUsQ0FBRixDQUFMLElBQVcsRUFBRSxNQUFGLENBQVMsQ0FBVCxFQUFXLENBQVgsQ0FBWCxFQUF5QixFQUFFLElBQUYsQ0FBTyxFQUFFLENBQUYsQ0FBUCxDQUF6QixFQUFzQyxFQUFFLElBQUYsQ0FBTyxFQUFFLENBQUYsQ0FBUCxDQUF0QztBQUFtRCxZQUFJLElBQUksSUFBRSxFQUFFLENBQUYsRUFBSyxLQUFMLEVBQU4sRUFBbUIsSUFBRSxDQUF6QixFQUEyQixJQUFFLEVBQUUsTUFBL0IsRUFBc0MsR0FBdEM7QUFBMEMsWUFBRyxTQUFTLEVBQUUsQ0FBRixDQUFULEVBQWMsRUFBZCxJQUFrQixDQUFyQixFQUF1QjtBQUFDLGNBQUUsRUFBRSxDQUFGLENBQUYsQ0FBTztBQUFNO0FBQS9FO0FBQWdGLEtBQXpPLENBQTBPLElBQUcsRUFBRSxDQUFGLENBQUksT0FBUCxFQUFlO0FBQUMsVUFBRyxFQUFFLENBQUYsQ0FBSSxTQUFKLENBQWMsQ0FBZCxFQUFpQixNQUFqQixLQUEwQixJQUFFLENBQUMsQ0FBSCxFQUFLLElBQUUsRUFBRSxDQUFGLENBQUksU0FBSixDQUFjLENBQWQsRUFBaUIsTUFBbEQsR0FBMEQsSUFBRSxFQUFFLENBQUYsQ0FBSSxTQUFKLENBQWMsQ0FBZCxFQUFpQixJQUE3RSxFQUFrRixJQUFFLEVBQUUsQ0FBRixDQUFJLFNBQUosQ0FBYyxDQUFkLEVBQWlCLEdBQXJHLEVBQXlHLEVBQUUsQ0FBRixDQUFJLFNBQUosQ0FBYyxDQUFkLEVBQWlCLFVBQTdILEVBQXdJO0FBQUMsWUFBSSxJQUFFLEVBQUUsQ0FBRixDQUFJLFNBQUosQ0FBYyxDQUFkLEVBQWlCLFVBQWpCLENBQTRCLEtBQTVCLENBQWtDLEdBQWxDLENBQU4sQ0FBNkMsRUFBRSxDQUFGO0FBQUssV0FBRSxFQUFFLENBQUYsQ0FBSSxTQUFKLENBQWMsQ0FBZCxFQUFpQixNQUFuQixFQUEwQixJQUFFLEVBQUUsQ0FBRixDQUFJLFNBQUosQ0FBYyxDQUFkLEVBQWlCLEtBQTdDO0FBQW1ELEtBQTlQLE1BQWtRO0FBQUMsVUFBRyxFQUFFLE1BQUYsQ0FBUyxFQUFULENBQVksQ0FBWixFQUFlLElBQWYsQ0FBb0IsYUFBcEIsTUFBcUMsSUFBRSxDQUFDLENBQUgsRUFBSyxJQUFFLEVBQUUsTUFBRixDQUFTLEVBQVQsQ0FBWSxDQUFaLEVBQWUsSUFBZixDQUFvQixhQUFwQixDQUE1QyxHQUFnRixJQUFFLEVBQUUsTUFBRixDQUFTLEVBQVQsQ0FBWSxDQUFaLEVBQWUsSUFBZixDQUFvQixXQUFwQixDQUFsRixFQUFtSCxJQUFFLEVBQUUsTUFBRixDQUFTLEVBQVQsQ0FBWSxDQUFaLEVBQWUsSUFBZixDQUFvQixNQUFwQixLQUE2QixFQUFFLE1BQUYsQ0FBUyxFQUFULENBQVksQ0FBWixFQUFlLElBQWYsQ0FBb0IsVUFBcEIsQ0FBbEosRUFBa0wsRUFBRSxNQUFGLENBQVMsRUFBVCxDQUFZLENBQVosRUFBZSxJQUFmLENBQW9CLGlCQUFwQixDQUFyTCxFQUE0TjtBQUFDLFlBQUksSUFBRSxFQUFFLE1BQUYsQ0FBUyxFQUFULENBQVksQ0FBWixFQUFlLElBQWYsQ0FBb0IsaUJBQXBCLEVBQXVDLEtBQXZDLENBQTZDLEdBQTdDLENBQU4sQ0FBd0QsRUFBRSxDQUFGO0FBQUssV0FBRSxFQUFFLE1BQUYsQ0FBUyxFQUFULENBQVksQ0FBWixFQUFlLElBQWYsQ0FBb0IsYUFBcEIsQ0FBRixFQUFxQyxJQUFFLEVBQUUsTUFBRixDQUFTLEVBQVQsQ0FBWSxDQUFaLEVBQWUsSUFBZixDQUFvQixZQUFwQixDQUF2QztBQUF5RSxTQUFJLElBQUUsQ0FBQyxDQUFQLENBQVMsRUFBRSxDQUFGLENBQUksT0FBSixHQUFZLEVBQUUsQ0FBRixDQUFJLFNBQUosQ0FBYyxDQUFkLEVBQWlCLE1BQWpCLEtBQTBCLElBQUUsQ0FBQyxDQUE3QixDQUFaLEdBQTRDLFdBQVMsRUFBRSxNQUFGLENBQVMsRUFBVCxDQUFZLENBQVosRUFBZSxJQUFmLENBQW9CLGFBQXBCLENBQVQsS0FBOEMsSUFBRSxDQUFDLENBQWpELENBQTVDLENBQWdHLElBQUksSUFBRSxFQUFFLE9BQUYsQ0FBVSxDQUFWLEVBQVksQ0FBWixDQUFOLENBQXFCLElBQUcsQ0FBQyxFQUFFLE1BQUYsQ0FBUyxFQUFULENBQVksQ0FBWixFQUFlLFFBQWYsQ0FBd0IsV0FBeEIsQ0FBSixFQUF5QztBQUFDLFVBQUcsQ0FBSCxFQUFLLEVBQUUsTUFBRixDQUFTLEVBQVQsQ0FBWSxDQUFaLEVBQWUsT0FBZixDQUF1QixpREFBK0MsRUFBRSxDQUFGLENBQUksY0FBbkQsR0FBa0UseUVBQWxFLEdBQTRJLENBQTVJLEdBQThJLGlEQUFySyxFQUFMLEtBQWtPLElBQUcsQ0FBSCxFQUFLO0FBQUMsWUFBSSxJQUFFLEVBQU4sQ0FBUyxJQUFFLEtBQUcsRUFBRSxPQUFMLEdBQWEsZ0JBQWIsR0FBOEIsS0FBRyxFQUFFLEtBQUwsR0FBVyxjQUFYLEdBQTBCLGNBQTFELEVBQXlFLEVBQUUsTUFBRixDQUFTLEVBQVQsQ0FBWSxDQUFaLEVBQWUsT0FBZixDQUF1QiwrQkFBNkIsQ0FBN0IsR0FBK0Isd0dBQS9CLEdBQXdJLENBQXhJLEdBQTBJLGtCQUFqSyxDQUF6RTtBQUE4UCxPQUE3USxNQUFrUixLQUFHLEVBQUUsTUFBRixDQUFTLEVBQVQsQ0FBWSxDQUFaLEVBQWUsT0FBZixDQUF1QixnRUFBdkIsR0FBeUYsRUFBRSxHQUFGLENBQU0sT0FBTixDQUFjLGFBQWQsRUFBNEIsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsQ0FBNUIsQ0FBNUYsSUFBa0ksRUFBRSxNQUFGLENBQVMsRUFBVCxDQUFZLENBQVosRUFBZSxPQUFmLENBQXVCLG1FQUFpRSxDQUFqRSxHQUFtRSxZQUExRixDQUFsSSxDQUEwTyxJQUFHLEVBQUUsR0FBRixDQUFNLE9BQU4sQ0FBYyxzQkFBZCxFQUFxQyxDQUFDLENBQUQsQ0FBckMsR0FBMEMsSUFBRSxFQUFFLE1BQUYsQ0FBUyxFQUFULENBQVksQ0FBWixFQUFlLElBQWYsQ0FBb0IsWUFBcEIsQ0FBNUMsRUFBOEUsS0FBRyxFQUFFLElBQUYsQ0FBTyxPQUFQLEVBQWUsQ0FBZixDQUFqRixFQUFtRyxDQUF0RyxFQUF3RztBQUFDLFVBQUUsSUFBRixDQUFPLFFBQVAsRUFBZ0IsQ0FBaEIsRUFBbUIsSUFBRztBQUFDLHNCQUFZLEVBQUMsVUFBUyxDQUFDLEVBQUUsQ0FBRixDQUFELENBQVYsRUFBWjtBQUErQixTQUFuQyxDQUFtQyxPQUFNLENBQU4sRUFBUTtBQUFDLGtCQUFRLEtBQVIsQ0FBYyxtREFBZDtBQUFtRTtBQUFDLDBCQUFpQixLQUFLLENBQUwsQ0FBTyxlQUF4QixJQUF5QyxFQUFFLE9BQUYsQ0FBVSxDQUFWLENBQXpDLEVBQXNELEVBQUUsTUFBRixDQUFTLEVBQVQsQ0FBWSxDQUFaLEVBQWUsUUFBZixDQUF3QixXQUF4QixDQUF0RDtBQUEyRixPQUFFLE1BQUYsQ0FBUyxFQUFULENBQVksQ0FBWixFQUFlLElBQWYsQ0FBb0IsWUFBcEIsRUFBa0MsRUFBbEMsQ0FBcUMsa0JBQXJDLEVBQXdELFlBQVU7QUFBQyxVQUFJLElBQUUsQ0FBTixDQUFRLEtBQUcsQ0FBQyxFQUFFLE1BQUYsRUFBVSxRQUFWLENBQW1CLGNBQW5CLENBQUosS0FBeUMsSUFBRSxDQUEzQyxHQUE4QyxXQUFXLFlBQVU7QUFBQyxVQUFFLE1BQUYsQ0FBUyxFQUFULENBQVksQ0FBWixFQUFlLFFBQWYsQ0FBd0IsYUFBeEIsR0FBdUMsRUFBRSxHQUFGLENBQU0sT0FBTixDQUFjLG9CQUFkLEVBQW1DLENBQUMsQ0FBRCxFQUFHLEtBQUcsQ0FBTixDQUFuQyxDQUF2QztBQUFvRixPQUExRyxFQUEyRyxDQUEzRyxDQUE5QztBQUE0SixLQUF2TyxHQUF5TyxLQUFHLEVBQUUsS0FBTCxJQUFZLENBQUMsQ0FBYixJQUFnQixFQUFFLE1BQUYsQ0FBUyxFQUFULENBQVksQ0FBWixFQUFlLFFBQWYsQ0FBd0IsYUFBeEIsQ0FBelAsRUFBZ1MsTUFBSSxDQUFDLENBQUwsS0FBUyxFQUFFLE1BQUYsQ0FBUyxFQUFULENBQVksQ0FBWixFQUFlLFFBQWYsQ0FBd0IsYUFBeEIsSUFBdUMsRUFBRSxPQUFGLENBQVUsQ0FBVixDQUF2QyxHQUFvRCxFQUFFLE1BQUYsQ0FBUyxFQUFULENBQVksQ0FBWixFQUFlLElBQWYsQ0FBb0IsWUFBcEIsRUFBa0MsRUFBbEMsQ0FBcUMsa0JBQXJDLEVBQXdELFlBQVU7QUFBQyxRQUFFLE9BQUYsQ0FBVSxDQUFWO0FBQWEsS0FBaEYsQ0FBN0QsQ0FBaFM7QUFBZ2IsR0FBL3JQLEVBQWdzUCxFQUFFLFNBQUYsQ0FBWSxLQUFaLEdBQWtCLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQyxRQUFJLElBQUUsS0FBSyxNQUFMLENBQVksSUFBWixDQUFpQixhQUFqQixFQUFnQyxLQUFoQyxFQUFOO0FBQUEsUUFBOEMsSUFBRSxJQUFoRCxDQUFxRCxJQUFHLENBQUMsRUFBRSxVQUFILElBQWUsTUFBSSxDQUF0QixFQUF3QjtBQUFDLFVBQUksSUFBRSxLQUFLLE1BQUwsQ0FBWSxNQUFsQjtBQUFBLFVBQXlCLElBQUUsRUFBRSxVQUFGLEdBQWEsS0FBSyxDQUFMLENBQU8sS0FBcEIsR0FBMEIsQ0FBckQ7QUFBQSxVQUF1RCxJQUFFLENBQUMsQ0FBMUQ7QUFBQSxVQUE0RCxJQUFFLENBQUMsQ0FBL0QsQ0FBaUUsSUFBRyxDQUFDLEVBQUUsTUFBTixFQUFhO0FBQUMsWUFBRyxLQUFLLENBQUwsQ0FBTyxRQUFWLEVBQW1CO0FBQUMsY0FBSSxDQUFKLENBQU0sSUFBRSxFQUFFLENBQUYsQ0FBSSxPQUFKLEdBQVksRUFBRSxDQUFGLENBQUksU0FBSixDQUFjLENBQWQsRUFBaUIsV0FBakIsS0FBK0IsQ0FBQyxDQUFoQyxLQUFvQyxFQUFFLENBQUYsQ0FBSSxTQUFKLENBQWMsQ0FBZCxFQUFpQixXQUFqQixJQUE4QixFQUFFLENBQUYsQ0FBSSxTQUFKLENBQWMsQ0FBZCxFQUFpQixHQUFuRixDQUFaLEdBQW9HLFlBQVUsRUFBRSxNQUFGLENBQVMsRUFBVCxDQUFZLENBQVosRUFBZSxJQUFmLENBQW9CLG1CQUFwQixDQUFWLEtBQXFELEVBQUUsTUFBRixDQUFTLEVBQVQsQ0FBWSxDQUFaLEVBQWUsSUFBZixDQUFvQixtQkFBcEIsS0FBMEMsRUFBRSxNQUFGLENBQVMsRUFBVCxDQUFZLENBQVosRUFBZSxJQUFmLENBQW9CLE1BQXBCLENBQTFDLElBQXVFLEVBQUUsTUFBRixDQUFTLEVBQVQsQ0FBWSxDQUFaLEVBQWUsSUFBZixDQUFvQixVQUFwQixDQUE1SCxDQUF0RyxFQUFtUSxLQUFHLEVBQUUsY0FBRixFQUFrQixJQUFsQixDQUF1QixNQUF2QixFQUE4QixDQUE5QixHQUFpQyxFQUFFLE1BQUYsQ0FBUyxXQUFULENBQXFCLGtCQUFyQixDQUFwQyxJQUE4RSxFQUFFLE1BQUYsQ0FBUyxRQUFULENBQWtCLGtCQUFsQixDQUFqVjtBQUF1WCxhQUFHLEtBQUssR0FBTCxDQUFTLE9BQVQsQ0FBaUIsa0JBQWpCLEVBQW9DLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxDQUFwQyxHQUErQyxFQUFFLE1BQUYsR0FBUyxDQUFDLENBQXpELEVBQTJELGFBQWEsRUFBRSxjQUFmLENBQTNELEVBQTBGLG1CQUFpQixLQUFLLENBQUwsQ0FBTyxlQUF4QixJQUF5QyxXQUFXLFlBQVU7QUFBQyxZQUFFLE9BQUYsQ0FBVSxDQUFWO0FBQWEsU0FBbkMsRUFBb0MsQ0FBcEMsQ0FBbkksRUFBMEssS0FBSyxZQUFMLENBQWtCLENBQWxCLENBQTFLLEVBQStMLENBQWxNLEVBQW9NO0FBQUMsY0FBSSxJQUFFLElBQUUsQ0FBUjtBQUFBLGNBQVUsSUFBRSxJQUFFLENBQWQsQ0FBZ0IsTUFBSSxDQUFKLElBQU8sTUFBSSxJQUFFLENBQWIsSUFBZ0IsSUFBRSxDQUFGLEVBQUksSUFBRSxJQUFFLENBQXhCLElBQTJCLE1BQUksSUFBRSxDQUFOLElBQVMsTUFBSSxDQUFiLEtBQWlCLElBQUUsQ0FBRixFQUFJLElBQUUsSUFBRSxDQUF6QixDQUEzQixFQUF1RCxLQUFLLE1BQUwsQ0FBWSxXQUFaLENBQXdCLHdDQUF4QixDQUF2RCxFQUF5SCxFQUFFLE1BQUYsQ0FBUyxFQUFULENBQVksQ0FBWixFQUFlLFFBQWYsQ0FBd0IsZUFBeEIsQ0FBekgsRUFBa0ssRUFBRSxNQUFGLENBQVMsRUFBVCxDQUFZLENBQVosRUFBZSxRQUFmLENBQXdCLGVBQXhCLENBQWxLLEVBQTJNLEVBQUUsTUFBRixDQUFTLEVBQVQsQ0FBWSxDQUFaLEVBQWUsUUFBZixDQUF3QixZQUF4QixDQUEzTTtBQUFpUCxTQUF0YyxNQUEyYyxFQUFFLE1BQUYsQ0FBUyxRQUFULENBQWtCLGFBQWxCLEdBQWlDLEtBQUssTUFBTCxDQUFZLFdBQVosQ0FBd0IsNkJBQXhCLENBQWpDLEVBQXdGLElBQUUsQ0FBRixJQUFLLElBQUUsQ0FBQyxDQUFILEVBQUssTUFBSSxDQUFKLElBQU8sTUFBSSxJQUFFLENBQWIsSUFBZ0IsQ0FBaEIsS0FBb0IsSUFBRSxDQUFDLENBQUgsRUFBSyxJQUFFLENBQUMsQ0FBNUIsQ0FBVixJQUEwQyxJQUFFLENBQUYsS0FBTSxJQUFFLENBQUMsQ0FBSCxFQUFLLE1BQUksSUFBRSxDQUFOLElBQVMsTUFBSSxDQUFiLElBQWdCLENBQWhCLEtBQW9CLElBQUUsQ0FBQyxDQUFILEVBQUssSUFBRSxDQUFDLENBQTVCLENBQVgsQ0FBbEksRUFBNkssS0FBRyxLQUFLLE1BQUwsQ0FBWSxFQUFaLENBQWUsQ0FBZixFQUFrQixRQUFsQixDQUEyQixlQUEzQixHQUE0QyxLQUFLLE1BQUwsQ0FBWSxFQUFaLENBQWUsQ0FBZixFQUFrQixRQUFsQixDQUEyQixlQUEzQixDQUEvQyxJQUE0RixNQUFJLEtBQUssTUFBTCxDQUFZLEVBQVosQ0FBZSxDQUFmLEVBQWtCLFFBQWxCLENBQTJCLGVBQTNCLEdBQTRDLEtBQUssTUFBTCxDQUFZLEVBQVosQ0FBZSxDQUFmLEVBQWtCLFFBQWxCLENBQTJCLGVBQTNCLENBQWhELENBQXpRLEVBQXNXLFdBQVcsWUFBVTtBQUFDLFlBQUUsTUFBRixDQUFTLFdBQVQsQ0FBcUIsWUFBckIsR0FBbUMsRUFBRSxNQUFGLENBQVMsRUFBVCxDQUFZLENBQVosRUFBZSxRQUFmLENBQXdCLFlBQXhCLENBQW5DLEVBQXlFLEVBQUUsTUFBRixDQUFTLFdBQVQsQ0FBcUIsYUFBckIsQ0FBekU7QUFBNkcsU0FBbkksRUFBb0ksRUFBcEksQ0FBdFcsQ0FBOGUsRUFBRSxVQUFGLElBQWMsV0FBVyxZQUFVO0FBQUMsWUFBRSxXQUFGLENBQWMsQ0FBZCxFQUFnQixDQUFDLENBQWpCLEVBQW1CLENBQW5CO0FBQXNCLFNBQTVDLEVBQTZDLEtBQUssQ0FBTCxDQUFPLEtBQVAsR0FBYSxFQUExRCxHQUE4RCxXQUFXLFlBQVU7QUFBQyxZQUFFLE1BQUYsR0FBUyxDQUFDLENBQVYsRUFBWSxFQUFFLEdBQUYsQ0FBTSxPQUFOLENBQWMsaUJBQWQsRUFBZ0MsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLENBQWhDLENBQVo7QUFBdUQsU0FBN0UsRUFBOEUsS0FBSyxDQUFMLENBQU8sS0FBckYsQ0FBNUUsS0FBMEssRUFBRSxXQUFGLENBQWMsQ0FBZCxFQUFnQixDQUFDLENBQWpCLEVBQW1CLEVBQUUsQ0FBRixDQUFJLGdCQUF2QixHQUF5QyxFQUFFLE1BQUYsR0FBUyxDQUFDLENBQW5ELEVBQXFELEVBQUUsR0FBRixDQUFNLE9BQU4sQ0FBYyxpQkFBZCxFQUFnQyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsQ0FBaEMsQ0FBL04sR0FBMlEsRUFBRSxVQUFGLEdBQWEsQ0FBQyxDQUF6UixFQUEyUixLQUFLLENBQUwsQ0FBTyxPQUFQLElBQWdCLEVBQUUscUJBQUYsRUFBeUIsSUFBekIsQ0FBOEIsSUFBRSxDQUFoQyxDQUEzUztBQUE4VTtBQUFDO0FBQUMsR0FBemhULEVBQTBoVCxFQUFFLFNBQUYsQ0FBWSxhQUFaLEdBQTBCLFVBQVMsQ0FBVCxFQUFXO0FBQUMsUUFBSSxJQUFFLElBQU4sQ0FBVyxFQUFFLE1BQUYsS0FBVyxFQUFFLEtBQUYsR0FBUSxDQUFSLEdBQVUsRUFBRSxNQUFGLENBQVMsTUFBbkIsSUFBMkIsRUFBRSxLQUFGLElBQVUsRUFBRSxHQUFGLENBQU0sT0FBTixDQUFjLHNCQUFkLEVBQXFDLENBQUMsRUFBRSxLQUFILENBQXJDLENBQVYsRUFBMEQsRUFBRSxLQUFGLENBQVEsRUFBRSxLQUFWLEVBQWdCLENBQWhCLEVBQWtCLENBQUMsQ0FBbkIsQ0FBckYsSUFBNEcsRUFBRSxDQUFGLENBQUksSUFBSixJQUFVLEVBQUUsS0FBRixHQUFRLENBQVIsRUFBVSxFQUFFLEdBQUYsQ0FBTSxPQUFOLENBQWMsc0JBQWQsRUFBcUMsQ0FBQyxFQUFFLEtBQUgsQ0FBckMsQ0FBVixFQUEwRCxFQUFFLEtBQUYsQ0FBUSxFQUFFLEtBQVYsRUFBZ0IsQ0FBaEIsRUFBa0IsQ0FBQyxDQUFuQixDQUFwRSxJQUEyRixFQUFFLENBQUYsQ0FBSSxpQkFBSixLQUF3QixFQUFFLE1BQUYsQ0FBUyxRQUFULENBQWtCLGNBQWxCLEdBQWtDLFdBQVcsWUFBVTtBQUFDLFFBQUUsTUFBRixDQUFTLFdBQVQsQ0FBcUIsY0FBckI7QUFBcUMsS0FBM0QsRUFBNEQsR0FBNUQsQ0FBMUQsQ0FBbE47QUFBK1UsR0FBMTVULEVBQTI1VCxFQUFFLFNBQUYsQ0FBWSxhQUFaLEdBQTBCLFVBQVMsQ0FBVCxFQUFXO0FBQUMsUUFBSSxJQUFFLElBQU4sQ0FBVyxFQUFFLE1BQUYsS0FBVyxFQUFFLEtBQUYsR0FBUSxDQUFSLElBQVcsRUFBRSxLQUFGLElBQVUsRUFBRSxHQUFGLENBQU0sT0FBTixDQUFjLHNCQUFkLEVBQXFDLENBQUMsRUFBRSxLQUFILEVBQVMsQ0FBVCxDQUFyQyxDQUFWLEVBQTRELEVBQUUsS0FBRixDQUFRLEVBQUUsS0FBVixFQUFnQixDQUFoQixFQUFrQixDQUFDLENBQW5CLENBQXZFLElBQThGLEVBQUUsQ0FBRixDQUFJLElBQUosSUFBVSxFQUFFLEtBQUYsR0FBUSxFQUFFLE1BQUYsQ0FBUyxNQUFULEdBQWdCLENBQXhCLEVBQTBCLEVBQUUsR0FBRixDQUFNLE9BQU4sQ0FBYyxzQkFBZCxFQUFxQyxDQUFDLEVBQUUsS0FBSCxFQUFTLENBQVQsQ0FBckMsQ0FBMUIsRUFBNEUsRUFBRSxLQUFGLENBQVEsRUFBRSxLQUFWLEVBQWdCLENBQWhCLEVBQWtCLENBQUMsQ0FBbkIsQ0FBdEYsSUFBNkcsRUFBRSxDQUFGLENBQUksaUJBQUosS0FBd0IsRUFBRSxNQUFGLENBQVMsUUFBVCxDQUFrQixhQUFsQixHQUFpQyxXQUFXLFlBQVU7QUFBQyxRQUFFLE1BQUYsQ0FBUyxXQUFULENBQXFCLGFBQXJCO0FBQW9DLEtBQTFELEVBQTJELEdBQTNELENBQXpELENBQXROO0FBQWlWLEdBQTd4VSxFQUE4eFUsRUFBRSxTQUFGLENBQVksUUFBWixHQUFxQixZQUFVO0FBQUMsUUFBSSxJQUFFLElBQU4sQ0FBVyxLQUFLLE1BQUwsQ0FBWSxNQUFaLEdBQW1CLENBQW5CLElBQXNCLEVBQUUsQ0FBRixFQUFLLEVBQUwsQ0FBUSxVQUFSLEVBQW1CLFVBQVMsQ0FBVCxFQUFXO0FBQUMsUUFBRSxNQUFGLENBQVMsTUFBVCxHQUFnQixDQUFoQixLQUFvQixPQUFLLEVBQUUsT0FBUCxLQUFpQixFQUFFLGNBQUYsSUFBbUIsRUFBRSxhQUFGLEVBQXBDLEdBQXVELE9BQUssRUFBRSxPQUFQLEtBQWlCLEVBQUUsY0FBRixJQUFtQixFQUFFLGFBQUYsRUFBcEMsQ0FBM0U7QUFBbUksS0FBbEssQ0FBdEIsRUFBMEwsRUFBRSxDQUFGLEVBQUssRUFBTCxDQUFRLFlBQVIsRUFBcUIsVUFBUyxDQUFULEVBQVc7QUFBQyxRQUFFLENBQUYsQ0FBSSxNQUFKLEtBQWEsQ0FBQyxDQUFkLElBQWlCLE9BQUssRUFBRSxPQUF4QixLQUFrQyxFQUFFLGNBQUYsSUFBbUIsRUFBRSxNQUFGLENBQVMsUUFBVCxDQUFrQixlQUFsQixJQUFtQyxFQUFFLE1BQUYsQ0FBUyxXQUFULENBQXFCLGVBQXJCLENBQW5DLEdBQXlFLEVBQUUsT0FBRixFQUE5SDtBQUEySSxLQUE1SyxDQUExTDtBQUF3VyxHQUFqclYsRUFBa3JWLEVBQUUsU0FBRixDQUFZLEtBQVosR0FBa0IsWUFBVTtBQUFDLFFBQUksSUFBRSxJQUFOLENBQVcsS0FBSyxNQUFMLENBQVksSUFBWixDQUFpQixVQUFqQixFQUE2QixFQUE3QixDQUFnQyxVQUFoQyxFQUEyQyxZQUFVO0FBQUMsUUFBRSxhQUFGO0FBQWtCLEtBQXhFLEdBQTBFLEtBQUssTUFBTCxDQUFZLElBQVosQ0FBaUIsVUFBakIsRUFBNkIsRUFBN0IsQ0FBZ0MsVUFBaEMsRUFBMkMsWUFBVTtBQUFDLFFBQUUsYUFBRjtBQUFrQixLQUF4RSxDQUExRTtBQUFvSixHQUE5MlYsRUFBKzJWLEVBQUUsU0FBRixDQUFZLFlBQVosR0FBeUIsVUFBUyxDQUFULEVBQVc7QUFBQyxLQUFDLEtBQUssQ0FBTCxDQUFPLElBQVIsSUFBYyxLQUFLLENBQUwsQ0FBTyxnQkFBckIsS0FBd0MsSUFBRSxDQUFGLEdBQUksS0FBSyxNQUFMLENBQVksTUFBaEIsR0FBdUIsS0FBSyxNQUFMLENBQVksSUFBWixDQUFpQixVQUFqQixFQUE2QixVQUE3QixDQUF3QyxVQUF4QyxFQUFvRCxXQUFwRCxDQUFnRSxVQUFoRSxDQUF2QixHQUFtRyxLQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWlCLFVBQWpCLEVBQTZCLElBQTdCLENBQWtDLFVBQWxDLEVBQTZDLFVBQTdDLEVBQXlELFFBQXpELENBQWtFLFVBQWxFLENBQW5HLEVBQWlMLElBQUUsQ0FBRixHQUFJLEtBQUssTUFBTCxDQUFZLElBQVosQ0FBaUIsVUFBakIsRUFBNkIsVUFBN0IsQ0FBd0MsVUFBeEMsRUFBb0QsV0FBcEQsQ0FBZ0UsVUFBaEUsQ0FBSixHQUFnRixLQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWlCLFVBQWpCLEVBQTZCLElBQTdCLENBQWtDLFVBQWxDLEVBQTZDLFVBQTdDLEVBQXlELFFBQXpELENBQWtFLFVBQWxFLENBQXpTO0FBQXdYLEdBQTV3VyxFQUE2d1csRUFBRSxTQUFGLENBQVksWUFBWixHQUF5QixVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsU0FBSyxDQUFMLENBQU8sT0FBUCxHQUFlLEVBQUUsR0FBRixDQUFNLE1BQU4sRUFBYSxDQUFiLENBQWYsR0FBK0IsRUFBRSxHQUFGLENBQU0sRUFBQyxXQUFVLGlCQUFlLENBQWYsR0FBaUIsTUFBakIsR0FBd0IsQ0FBeEIsR0FBMEIsVUFBckMsRUFBTixDQUEvQjtBQUF1RixHQUE3NFcsRUFBODRXLEVBQUUsU0FBRixDQUFZLFNBQVosR0FBc0IsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsUUFBSSxJQUFFLElBQUUsQ0FBUixDQUFVLEtBQUssTUFBTCxDQUFZLFFBQVosQ0FBcUIsYUFBckIsR0FBb0MsS0FBSyxZQUFMLENBQWtCLEtBQUssTUFBTCxDQUFZLEVBQVosQ0FBZSxLQUFLLEtBQXBCLENBQWxCLEVBQTZDLENBQTdDLEVBQStDLENBQS9DLENBQXBDLEVBQXNGLEtBQUssWUFBTCxDQUFrQixFQUFFLGdCQUFGLENBQWxCLEVBQXNDLENBQUMsS0FBSyxNQUFMLENBQVksRUFBWixDQUFlLEtBQUssS0FBcEIsRUFBMkIsS0FBM0IsRUFBRCxHQUFvQyxDQUExRSxFQUE0RSxDQUE1RSxDQUF0RixFQUFxSyxLQUFLLFlBQUwsQ0FBa0IsRUFBRSxnQkFBRixDQUFsQixFQUFzQyxLQUFLLE1BQUwsQ0FBWSxFQUFaLENBQWUsS0FBSyxLQUFwQixFQUEyQixLQUEzQixLQUFtQyxDQUF6RSxFQUEyRSxDQUEzRSxDQUFySztBQUFtUCxHQUEvcVgsRUFBZ3JYLEVBQUUsU0FBRixDQUFZLFFBQVosR0FBcUIsVUFBUyxDQUFULEVBQVc7QUFBQyxRQUFJLElBQUUsSUFBTixDQUFXLGVBQWEsRUFBRSxDQUFGLENBQUksSUFBakIsSUFBdUIsRUFBRSxNQUFGLENBQVMsUUFBVCxDQUFrQixVQUFsQixDQUF2QixFQUFxRCxLQUFLLE1BQUwsQ0FBWSxHQUFaLENBQWdCLDZDQUFoQixFQUErRCxHQUEvRCxDQUFtRSxTQUFuRSxFQUE2RSxHQUE3RSxDQUFyRCxFQUF1SSxXQUFXLFlBQVU7QUFBQyxRQUFFLE1BQUYsQ0FBUyxXQUFULENBQXFCLGFBQXJCLEdBQW9DLElBQUUsQ0FBRixJQUFLLEtBQUssR0FBTCxDQUFTLENBQVQsSUFBWSxFQUFFLENBQUYsQ0FBSSxjQUFyQixHQUFvQyxFQUFFLGFBQUYsQ0FBZ0IsQ0FBQyxDQUFqQixDQUFwQyxHQUF3RCxJQUFFLENBQUYsSUFBSyxLQUFLLEdBQUwsQ0FBUyxDQUFULElBQVksRUFBRSxDQUFGLENBQUksY0FBckIsR0FBb0MsRUFBRSxhQUFGLENBQWdCLENBQUMsQ0FBakIsQ0FBcEMsR0FBd0QsS0FBSyxHQUFMLENBQVMsQ0FBVCxJQUFZLENBQVosSUFBZSxFQUFFLEdBQUYsQ0FBTSxPQUFOLENBQWMsaUJBQWQsQ0FBbkssRUFBb00sRUFBRSxNQUFGLENBQVMsVUFBVCxDQUFvQixPQUFwQixDQUFwTTtBQUFpTyxLQUF2UCxDQUF2SSxFQUFnWSxXQUFXLFlBQVU7QUFBQyxRQUFFLE1BQUYsQ0FBUyxRQUFULENBQWtCLGFBQWxCLEtBQWtDLGVBQWEsRUFBRSxDQUFGLENBQUksSUFBbkQsSUFBeUQsRUFBRSxNQUFGLENBQVMsV0FBVCxDQUFxQixVQUFyQixDQUF6RDtBQUEwRixLQUFoSCxFQUFpSCxFQUFFLENBQUYsQ0FBSSxLQUFKLEdBQVUsR0FBM0gsQ0FBaFk7QUFBZ2dCLEdBQTV0WSxFQUE2dFksRUFBRSxTQUFGLENBQVksV0FBWixHQUF3QixZQUFVO0FBQUMsUUFBSSxJQUFFLElBQU47QUFBQSxRQUFXLElBQUUsQ0FBYjtBQUFBLFFBQWUsSUFBRSxDQUFqQjtBQUFBLFFBQW1CLElBQUUsQ0FBQyxDQUF0QixDQUF3QixFQUFFLENBQUYsQ0FBSSxXQUFKLElBQWlCLEVBQUUsT0FBbkIsSUFBNEIsRUFBRSxLQUFGLEVBQTVCLEtBQXdDLEVBQUUsTUFBRixDQUFTLEVBQVQsQ0FBWSxlQUFaLEVBQTRCLFVBQVMsQ0FBVCxFQUFXO0FBQUMsUUFBRSxNQUFGLENBQVMsUUFBVCxDQUFrQixXQUFsQixLQUFnQyxFQUFFLE1BQWxDLEtBQTJDLEVBQUUsY0FBRixJQUFtQixFQUFFLGdCQUFGLEVBQW5CLEVBQXdDLElBQUUsRUFBRSxhQUFGLENBQWdCLGFBQWhCLENBQThCLENBQTlCLEVBQWlDLEtBQXRIO0FBQTZILEtBQXJLLEdBQXVLLEVBQUUsTUFBRixDQUFTLEVBQVQsQ0FBWSxjQUFaLEVBQTJCLFVBQVMsQ0FBVCxFQUFXO0FBQUMsUUFBRSxNQUFGLENBQVMsUUFBVCxDQUFrQixXQUFsQixNQUFpQyxFQUFFLGNBQUYsSUFBbUIsSUFBRSxFQUFFLGFBQUYsQ0FBZ0IsYUFBaEIsQ0FBOEIsQ0FBOUIsRUFBaUMsS0FBdEQsRUFBNEQsRUFBRSxTQUFGLENBQVksQ0FBWixFQUFjLENBQWQsQ0FBNUQsRUFBNkUsSUFBRSxDQUFDLENBQWpIO0FBQW9ILEtBQTNKLENBQXZLLEVBQW9VLEVBQUUsTUFBRixDQUFTLEVBQVQsQ0FBWSxhQUFaLEVBQTBCLFlBQVU7QUFBQyxRQUFFLE1BQUYsQ0FBUyxRQUFULENBQWtCLFdBQWxCLE1BQWlDLEtBQUcsSUFBRSxDQUFDLENBQUgsRUFBSyxFQUFFLFFBQUYsQ0FBVyxJQUFFLENBQWIsQ0FBUixJQUF5QixFQUFFLEdBQUYsQ0FBTSxPQUFOLENBQWMsaUJBQWQsQ0FBMUQ7QUFBNEYsS0FBakksQ0FBNVc7QUFBZ2YsR0FBeHdaLEVBQXl3WixFQUFFLFNBQUYsQ0FBWSxVQUFaLEdBQXVCLFlBQVU7QUFBQyxRQUFJLElBQUUsSUFBTjtBQUFBLFFBQVcsSUFBRSxDQUFiO0FBQUEsUUFBZSxJQUFFLENBQWpCO0FBQUEsUUFBbUIsSUFBRSxDQUFDLENBQXRCO0FBQUEsUUFBd0IsSUFBRSxDQUFDLENBQTNCLENBQTZCLEVBQUUsQ0FBRixDQUFJLFVBQUosSUFBZ0IsQ0FBQyxFQUFFLE9BQW5CLElBQTRCLEVBQUUsS0FBRixFQUE1QixLQUF3QyxFQUFFLE1BQUYsQ0FBUyxFQUFULENBQVksY0FBWixFQUEyQixVQUFTLENBQVQsRUFBVztBQUFDLFFBQUUsTUFBRixDQUFTLFFBQVQsQ0FBa0IsV0FBbEIsS0FBZ0MsQ0FBQyxFQUFFLEVBQUUsTUFBSixFQUFZLFFBQVosQ0FBcUIsV0FBckIsS0FBbUMsRUFBRSxFQUFFLE1BQUosRUFBWSxRQUFaLENBQXFCLGVBQXJCLENBQXBDLE1BQTZFLEVBQUUsY0FBRixJQUFtQixFQUFFLE1BQUYsS0FBVyxFQUFFLGdCQUFGLElBQXFCLElBQUUsRUFBRSxLQUF6QixFQUErQixJQUFFLENBQUMsQ0FBbEMsRUFBb0MsRUFBRSxNQUFGLENBQVMsVUFBVCxJQUFxQixDQUF6RCxFQUEyRCxFQUFFLE1BQUYsQ0FBUyxVQUFULElBQXFCLENBQWhGLEVBQWtGLEVBQUUsTUFBRixDQUFTLFdBQVQsQ0FBcUIsU0FBckIsRUFBZ0MsUUFBaEMsQ0FBeUMsYUFBekMsQ0FBbEYsRUFBMEksRUFBRSxHQUFGLENBQU0sT0FBTixDQUFjLGdCQUFkLENBQXJKLENBQWhHLENBQWhDO0FBQXVULEtBQTlWLEdBQWdXLEVBQUUsQ0FBRixFQUFLLEVBQUwsQ0FBUSxjQUFSLEVBQXVCLFVBQVMsQ0FBVCxFQUFXO0FBQUMsWUFBSSxJQUFFLENBQUMsQ0FBSCxFQUFLLElBQUUsRUFBRSxLQUFULEVBQWUsRUFBRSxTQUFGLENBQVksQ0FBWixFQUFjLENBQWQsQ0FBZixFQUFnQyxFQUFFLEdBQUYsQ0FBTSxPQUFOLENBQWMsZUFBZCxDQUFwQztBQUFvRSxLQUF2RyxDQUFoVyxFQUF5YyxFQUFFLENBQUYsRUFBSyxFQUFMLENBQVEsWUFBUixFQUFxQixVQUFTLENBQVQsRUFBVztBQUFDLFdBQUcsSUFBRSxDQUFDLENBQUgsRUFBSyxFQUFFLFFBQUYsQ0FBVyxJQUFFLENBQWIsQ0FBTCxFQUFxQixFQUFFLEdBQUYsQ0FBTSxPQUFOLENBQWMsY0FBZCxDQUF4QixJQUF1RCxDQUFDLEVBQUUsRUFBRSxNQUFKLEVBQVksUUFBWixDQUFxQixXQUFyQixLQUFtQyxFQUFFLEVBQUUsTUFBSixFQUFZLFFBQVosQ0FBcUIsZUFBckIsQ0FBcEMsS0FBNEUsRUFBRSxHQUFGLENBQU0sT0FBTixDQUFjLGlCQUFkLENBQW5JLEVBQW9LLE1BQUksSUFBRSxDQUFDLENBQUgsRUFBSyxFQUFFLE1BQUYsQ0FBUyxXQUFULENBQXFCLGFBQXJCLEVBQW9DLFFBQXBDLENBQTZDLFNBQTdDLENBQVQsQ0FBcEs7QUFBc08sS0FBdlEsQ0FBamY7QUFBMnZCLEdBQW5rYixFQUFva2IsRUFBRSxTQUFGLENBQVksZ0JBQVosR0FBNkIsWUFBVTtBQUFDLFFBQUksSUFBRSxLQUFLLEtBQUwsR0FBVyxDQUFqQjtBQUFBLFFBQW1CLElBQUUsS0FBSyxLQUFMLEdBQVcsQ0FBaEM7QUFBQSxRQUFrQyxJQUFFLEtBQUssTUFBTCxDQUFZLE1BQWhELENBQXVELEtBQUssQ0FBTCxDQUFPLElBQVAsS0FBYyxNQUFJLEtBQUssS0FBVCxHQUFlLElBQUUsSUFBRSxDQUFuQixHQUFxQixLQUFLLEtBQUwsS0FBYSxJQUFFLENBQWYsS0FBbUIsSUFBRSxDQUFyQixDQUFuQyxHQUE0RCxLQUFLLE1BQUwsQ0FBWSxXQUFaLENBQXdCLDZCQUF4QixDQUE1RCxFQUFtSCxJQUFFLENBQUMsQ0FBSCxJQUFNLEtBQUssTUFBTCxDQUFZLEVBQVosQ0FBZSxDQUFmLEVBQWtCLFFBQWxCLENBQTJCLGVBQTNCLENBQXpILEVBQXFLLEtBQUssTUFBTCxDQUFZLEVBQVosQ0FBZSxDQUFmLEVBQWtCLFFBQWxCLENBQTJCLGVBQTNCLENBQXJLO0FBQWlOLEdBQXAzYixFQUFxM2IsRUFBRSxTQUFGLENBQVksVUFBWixHQUF1QixZQUFVO0FBQUMsUUFBSSxJQUFFLElBQU4sQ0FBVyxFQUFFLE1BQUYsQ0FBUyxFQUFULENBQVksZUFBWixFQUE0QixVQUFTLENBQVQsRUFBVztBQUFDLFFBQUUsTUFBRixLQUFXLEVBQUUsTUFBRixHQUFTLENBQVQsR0FBVyxFQUFFLGFBQUYsRUFBWCxHQUE2QixFQUFFLGFBQUYsRUFBN0IsRUFBK0MsRUFBRSxjQUFGLEVBQTFEO0FBQThFLEtBQXRIO0FBQXdILEdBQTFoYyxFQUEyaGMsRUFBRSxTQUFGLENBQVksWUFBWixHQUF5QixZQUFVO0FBQUMsUUFBSSxJQUFFLElBQU47QUFBQSxRQUFXLElBQUUsQ0FBQyxDQUFkLENBQWdCLEtBQUssTUFBTCxDQUFZLElBQVosQ0FBaUIsV0FBakIsRUFBOEIsRUFBOUIsQ0FBaUMsVUFBakMsRUFBNEMsWUFBVTtBQUFDLFFBQUUsT0FBRjtBQUFZLEtBQW5FLEdBQXFFLEVBQUUsQ0FBRixDQUFJLFFBQUosS0FBZSxFQUFFLE1BQUYsQ0FBUyxFQUFULENBQVksY0FBWixFQUEyQixVQUFTLENBQVQsRUFBVztBQUFDLFVBQUUsRUFBRSxFQUFFLE1BQUosRUFBWSxFQUFaLENBQWUsV0FBZixLQUE2QixFQUFFLEVBQUUsTUFBSixFQUFZLEVBQVosQ0FBZSxXQUFmLENBQTdCLElBQTBELEVBQUUsRUFBRSxNQUFKLEVBQVksRUFBWixDQUFlLGNBQWYsQ0FBMUQsR0FBeUYsQ0FBQyxDQUExRixHQUE0RixDQUFDLENBQS9GO0FBQWlHLEtBQXhJLEdBQTBJLEVBQUUsTUFBRixDQUFTLEVBQVQsQ0FBWSxZQUFaLEVBQXlCLFVBQVMsQ0FBVCxFQUFXO0FBQUMsT0FBQyxFQUFFLEVBQUUsTUFBSixFQUFZLEVBQVosQ0FBZSxXQUFmLEtBQTZCLEVBQUUsRUFBRSxNQUFKLEVBQVksRUFBWixDQUFlLFdBQWYsQ0FBN0IsSUFBMEQsRUFBRSxFQUFFLE1BQUosRUFBWSxFQUFaLENBQWUsY0FBZixLQUFnQyxDQUEzRixNQUFnRyxFQUFFLE1BQUYsQ0FBUyxRQUFULENBQWtCLGFBQWxCLEtBQWtDLEVBQUUsT0FBRixFQUFsSTtBQUErSSxLQUFwTCxDQUF6SixDQUFyRTtBQUFxWixHQUFwK2MsRUFBcStjLEVBQUUsU0FBRixDQUFZLE9BQVosR0FBb0IsVUFBUyxDQUFULEVBQVc7QUFBQyxRQUFJLElBQUUsSUFBTixDQUFXLEtBQUcsRUFBRSxHQUFGLENBQU0sT0FBTixDQUFjLGtCQUFkLENBQUgsRUFBcUMsRUFBRSxDQUFGLEVBQUssU0FBTCxDQUFlLEVBQUUsYUFBakIsQ0FBckMsRUFBcUUsTUFBSSxFQUFFLENBQUYsQ0FBSSxPQUFKLElBQWEsS0FBSyxNQUFMLENBQVksR0FBWixDQUFnQix5QkFBaEIsQ0FBYixFQUF3RCxFQUFFLFVBQUYsQ0FBYSxFQUFFLEVBQWYsRUFBa0IsY0FBbEIsQ0FBNUQsQ0FBckUsRUFBb0ssS0FBSyxHQUFMLENBQVMsR0FBVCxDQUFhLFFBQWIsQ0FBcEssRUFBMkwsRUFBRSxJQUFGLENBQU8sRUFBRSxFQUFGLENBQUssWUFBTCxDQUFrQixPQUF6QixFQUFpQyxVQUFTLENBQVQsRUFBVztBQUFDLFFBQUUsT0FBRixDQUFVLENBQVYsS0FBYyxFQUFFLE9BQUYsQ0FBVSxDQUFWLEVBQWEsT0FBYixFQUFkO0FBQXFDLEtBQWxGLENBQTNMLEVBQStRLEtBQUssVUFBTCxHQUFnQixDQUFDLENBQWhTLEVBQWtTLGFBQWEsRUFBRSxjQUFmLENBQWxTLEVBQWlVLEtBQUssY0FBTCxHQUFvQixDQUFDLENBQXRWLEVBQXdWLEVBQUUsQ0FBRixFQUFLLEdBQUwsQ0FBUyxLQUFULENBQXhWLEVBQXdXLEVBQUUsTUFBRixFQUFVLFdBQVYsQ0FBc0Isb0JBQXRCLENBQXhXLEVBQW9aLEVBQUUsTUFBRixJQUFVLEVBQUUsTUFBRixDQUFTLFdBQVQsQ0FBcUIsWUFBckIsQ0FBOVosRUFBaWMsRUFBRSxjQUFGLEVBQWtCLFdBQWxCLENBQThCLElBQTlCLENBQWpjLEVBQXFlLFdBQVcsWUFBVTtBQUFDLFFBQUUsTUFBRixJQUFVLEVBQUUsTUFBRixDQUFTLE1BQVQsRUFBVixFQUE0QixFQUFFLGNBQUYsRUFBa0IsTUFBbEIsRUFBNUIsRUFBdUQsS0FBRyxFQUFFLEdBQUYsQ0FBTSxPQUFOLENBQWMsaUJBQWQsQ0FBMUQ7QUFBMkYsS0FBakgsRUFBa0gsRUFBRSxDQUFGLENBQUksZ0JBQUosR0FBcUIsRUFBdkksQ0FBcmU7QUFBZ25CLEdBQWhvZSxFQUFpb2UsRUFBRSxFQUFGLENBQUssWUFBTCxHQUFrQixVQUFTLENBQVQsRUFBVztBQUFDLFdBQU8sS0FBSyxJQUFMLENBQVUsWUFBVTtBQUFDLFVBQUcsRUFBRSxJQUFGLENBQU8sSUFBUCxFQUFZLGNBQVosQ0FBSCxFQUErQixJQUFHO0FBQUMsVUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLGNBQWIsRUFBNkIsSUFBN0I7QUFBb0MsT0FBeEMsQ0FBd0MsT0FBTSxDQUFOLEVBQVE7QUFBQyxnQkFBUSxLQUFSLENBQWMseUNBQWQ7QUFBeUQsT0FBekksTUFBOEksRUFBRSxJQUFGLENBQU8sSUFBUCxFQUFZLGNBQVosRUFBMkIsSUFBSSxDQUFKLENBQU0sSUFBTixFQUFXLENBQVgsQ0FBM0I7QUFBMEMsS0FBN00sQ0FBUDtBQUFzTixHQUFyM2UsRUFBczNlLEVBQUUsRUFBRixDQUFLLFlBQUwsQ0FBa0IsT0FBbEIsR0FBMEIsRUFBaDVlO0FBQW01ZSxDQUF6dGhCLENBQTB0aEIsTUFBMXRoQixFQUFpdWhCLE1BQWp1aEIsRUFBd3VoQixRQUF4dWhCLENBQUQ7Ozs7Ozs7QUNIQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUNDLFdBQVMsT0FBVCxFQUFrQjtBQUNmOztBQUNBLFlBQVEsTUFBUjtBQUVILENBSkEsRUFJQyxVQUFTLENBQVQsRUFBWTtBQUNWOztBQUNBLFFBQUksUUFBUSxPQUFPLEtBQVAsSUFBZ0IsRUFBNUI7O0FBRUEsWUFBUyxZQUFXOztBQUVoQixZQUFJLGNBQWMsQ0FBbEI7O0FBRUEsaUJBQVMsS0FBVCxDQUFlLE9BQWYsRUFBd0IsUUFBeEIsRUFBa0M7O0FBRTlCLGdCQUFJLElBQUksSUFBUjtBQUFBLGdCQUFjLFlBQWQ7O0FBRUEsY0FBRSxRQUFGLEdBQWE7QUFDVCwrQkFBZSxJQUROO0FBRVQsZ0NBQWdCLEtBRlA7QUFHVCw4QkFBYyxFQUFFLE9BQUYsQ0FITDtBQUlULDRCQUFZLEVBQUUsT0FBRixDQUpIO0FBS1Qsd0JBQVEsSUFMQztBQU1ULDBCQUFVLElBTkQ7QUFPVCwyQkFBVyw4SEFQRjtBQVFULDJCQUFXLHNIQVJGO0FBU1QsMEJBQVUsS0FURDtBQVVULCtCQUFlLElBVk47QUFXVCw0QkFBWSxLQVhIO0FBWVQsK0JBQWUsTUFaTjtBQWFULHlCQUFTLE1BYkE7QUFjVCw4QkFBYyxzQkFBUyxNQUFULEVBQWlCLENBQWpCLEVBQW9CO0FBQzlCLDJCQUFPLEVBQUUsc0VBQUYsRUFBMEUsSUFBMUUsQ0FBK0UsSUFBSSxDQUFuRixDQUFQO0FBQ0gsaUJBaEJRO0FBaUJULHNCQUFNLEtBakJHO0FBa0JULDJCQUFXLFlBbEJGO0FBbUJULDJCQUFXLElBbkJGO0FBb0JULHdCQUFRLFFBcEJDO0FBcUJULDhCQUFjLElBckJMO0FBc0JULHNCQUFNLEtBdEJHO0FBdUJULCtCQUFlLEtBdkJOO0FBd0JULDBCQUFVLElBeEJEO0FBeUJULDhCQUFjLENBekJMO0FBMEJULDBCQUFVLFVBMUJEO0FBMkJULDZCQUFhLEtBM0JKO0FBNEJULDhCQUFjLElBNUJMO0FBNkJULDhCQUFjLElBN0JMO0FBOEJULGtDQUFrQixLQTlCVDtBQStCVCwyQkFBVyxRQS9CRjtBQWdDVCw0QkFBWSxJQWhDSDtBQWlDVCxzQkFBTSxDQWpDRztBQWtDVCxxQkFBSyxLQWxDSTtBQW1DVCx1QkFBTyxFQW5DRTtBQW9DVCw4QkFBYyxDQXBDTDtBQXFDVCw4QkFBYyxDQXJDTDtBQXNDVCxnQ0FBZ0IsQ0F0Q1A7QUF1Q1QsdUJBQU8sR0F2Q0U7QUF3Q1QsdUJBQU8sSUF4Q0U7QUF5Q1QsOEJBQWMsS0F6Q0w7QUEwQ1QsMkJBQVcsSUExQ0Y7QUEyQ1QsZ0NBQWdCLENBM0NQO0FBNENULHdCQUFRLElBNUNDO0FBNkNULDhCQUFjLElBN0NMO0FBOENULCtCQUFlLEtBOUNOO0FBK0NULDBCQUFVLEtBL0NEO0FBZ0RULGlDQUFpQixLQWhEUjtBQWlEVCxnQ0FBZ0IsSUFqRFA7QUFrRFQsd0JBQVE7QUFsREMsYUFBYjs7QUFxREEsY0FBRSxRQUFGLEdBQWE7QUFDVCwyQkFBVyxLQURGO0FBRVQsMEJBQVUsS0FGRDtBQUdULCtCQUFlLElBSE47QUFJVCxrQ0FBa0IsQ0FKVDtBQUtULDZCQUFhLElBTEo7QUFNVCw4QkFBYyxDQU5MO0FBT1QsMkJBQVcsQ0FQRjtBQVFULHVCQUFPLElBUkU7QUFTVCwyQkFBVyxJQVRGO0FBVVQsNEJBQVksSUFWSDtBQVdULDJCQUFXLENBWEY7QUFZVCw0QkFBWSxJQVpIO0FBYVQsNEJBQVksSUFiSDtBQWNULDRCQUFZLElBZEg7QUFlVCw0QkFBWSxJQWZIO0FBZ0JULDZCQUFhLElBaEJKO0FBaUJULHlCQUFTLElBakJBO0FBa0JULHlCQUFTLEtBbEJBO0FBbUJULDZCQUFhLENBbkJKO0FBb0JULDJCQUFXLElBcEJGO0FBcUJULHVCQUFPLElBckJFO0FBc0JULDZCQUFhLEVBdEJKO0FBdUJULG1DQUFtQixLQXZCVjtBQXdCVCwyQkFBVztBQXhCRixhQUFiOztBQTJCQSxjQUFFLE1BQUYsQ0FBUyxDQUFULEVBQVksRUFBRSxRQUFkOztBQUVBLGNBQUUsZ0JBQUYsR0FBcUIsSUFBckI7QUFDQSxjQUFFLFFBQUYsR0FBYSxJQUFiO0FBQ0EsY0FBRSxRQUFGLEdBQWEsSUFBYjtBQUNBLGNBQUUsV0FBRixHQUFnQixFQUFoQjtBQUNBLGNBQUUsa0JBQUYsR0FBdUIsRUFBdkI7QUFDQSxjQUFFLGNBQUYsR0FBbUIsS0FBbkI7QUFDQSxjQUFFLFFBQUYsR0FBYSxLQUFiO0FBQ0EsY0FBRSxXQUFGLEdBQWdCLEtBQWhCO0FBQ0EsY0FBRSxNQUFGLEdBQVcsUUFBWDtBQUNBLGNBQUUsTUFBRixHQUFXLElBQVg7QUFDQSxjQUFFLFlBQUYsR0FBaUIsSUFBakI7QUFDQSxjQUFFLFNBQUYsR0FBYyxJQUFkO0FBQ0EsY0FBRSxRQUFGLEdBQWEsQ0FBYjtBQUNBLGNBQUUsV0FBRixHQUFnQixJQUFoQjtBQUNBLGNBQUUsT0FBRixHQUFZLEVBQUUsT0FBRixDQUFaO0FBQ0EsY0FBRSxZQUFGLEdBQWlCLElBQWpCO0FBQ0EsY0FBRSxhQUFGLEdBQWtCLElBQWxCO0FBQ0EsY0FBRSxjQUFGLEdBQW1CLElBQW5CO0FBQ0EsY0FBRSxnQkFBRixHQUFxQixrQkFBckI7QUFDQSxjQUFFLFdBQUYsR0FBZ0IsQ0FBaEI7QUFDQSxjQUFFLFdBQUYsR0FBZ0IsSUFBaEI7O0FBRUEsMkJBQWUsRUFBRSxPQUFGLEVBQVcsSUFBWCxDQUFnQixPQUFoQixLQUE0QixFQUEzQzs7QUFFQSxjQUFFLE9BQUYsR0FBWSxFQUFFLE1BQUYsQ0FBUyxFQUFULEVBQWEsRUFBRSxRQUFmLEVBQXlCLFFBQXpCLEVBQW1DLFlBQW5DLENBQVo7O0FBRUEsY0FBRSxZQUFGLEdBQWlCLEVBQUUsT0FBRixDQUFVLFlBQTNCOztBQUVBLGNBQUUsZ0JBQUYsR0FBcUIsRUFBRSxPQUF2Qjs7QUFFQSxnQkFBSSxPQUFPLFNBQVMsU0FBaEIsS0FBOEIsV0FBbEMsRUFBK0M7QUFDM0Msa0JBQUUsTUFBRixHQUFXLFdBQVg7QUFDQSxrQkFBRSxnQkFBRixHQUFxQixxQkFBckI7QUFDSCxhQUhELE1BR08sSUFBSSxPQUFPLFNBQVMsWUFBaEIsS0FBaUMsV0FBckMsRUFBa0Q7QUFDckQsa0JBQUUsTUFBRixHQUFXLGNBQVg7QUFDQSxrQkFBRSxnQkFBRixHQUFxQix3QkFBckI7QUFDSDs7QUFFRCxjQUFFLFFBQUYsR0FBYSxFQUFFLEtBQUYsQ0FBUSxFQUFFLFFBQVYsRUFBb0IsQ0FBcEIsQ0FBYjtBQUNBLGNBQUUsYUFBRixHQUFrQixFQUFFLEtBQUYsQ0FBUSxFQUFFLGFBQVYsRUFBeUIsQ0FBekIsQ0FBbEI7QUFDQSxjQUFFLGdCQUFGLEdBQXFCLEVBQUUsS0FBRixDQUFRLEVBQUUsZ0JBQVYsRUFBNEIsQ0FBNUIsQ0FBckI7QUFDQSxjQUFFLFdBQUYsR0FBZ0IsRUFBRSxLQUFGLENBQVEsRUFBRSxXQUFWLEVBQXVCLENBQXZCLENBQWhCO0FBQ0EsY0FBRSxZQUFGLEdBQWlCLEVBQUUsS0FBRixDQUFRLEVBQUUsWUFBVixFQUF3QixDQUF4QixDQUFqQjtBQUNBLGNBQUUsYUFBRixHQUFrQixFQUFFLEtBQUYsQ0FBUSxFQUFFLGFBQVYsRUFBeUIsQ0FBekIsQ0FBbEI7QUFDQSxjQUFFLFdBQUYsR0FBZ0IsRUFBRSxLQUFGLENBQVEsRUFBRSxXQUFWLEVBQXVCLENBQXZCLENBQWhCO0FBQ0EsY0FBRSxZQUFGLEdBQWlCLEVBQUUsS0FBRixDQUFRLEVBQUUsWUFBVixFQUF3QixDQUF4QixDQUFqQjtBQUNBLGNBQUUsV0FBRixHQUFnQixFQUFFLEtBQUYsQ0FBUSxFQUFFLFdBQVYsRUFBdUIsQ0FBdkIsQ0FBaEI7QUFDQSxjQUFFLFVBQUYsR0FBZSxFQUFFLEtBQUYsQ0FBUSxFQUFFLFVBQVYsRUFBc0IsQ0FBdEIsQ0FBZjs7QUFFQSxjQUFFLFdBQUYsR0FBZ0IsYUFBaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBRSxRQUFGLEdBQWEsMkJBQWI7O0FBR0EsY0FBRSxtQkFBRjtBQUNBLGNBQUUsSUFBRixDQUFPLElBQVA7QUFFSDs7QUFFRCxlQUFPLEtBQVA7QUFFSCxLQTFKUSxFQUFUOztBQTRKQSxVQUFNLFNBQU4sQ0FBZ0IsV0FBaEIsR0FBOEIsWUFBVztBQUNyQyxZQUFJLElBQUksSUFBUjs7QUFFQSxVQUFFLFdBQUYsQ0FBYyxJQUFkLENBQW1CLGVBQW5CLEVBQW9DLElBQXBDLENBQXlDO0FBQ3JDLDJCQUFlO0FBRHNCLFNBQXpDLEVBRUcsSUFGSCxDQUVRLDBCQUZSLEVBRW9DLElBRnBDLENBRXlDO0FBQ3JDLHdCQUFZO0FBRHlCLFNBRnpDO0FBTUgsS0FURDs7QUFXQSxVQUFNLFNBQU4sQ0FBZ0IsUUFBaEIsR0FBMkIsTUFBTSxTQUFOLENBQWdCLFFBQWhCLEdBQTJCLFVBQVMsTUFBVCxFQUFpQixLQUFqQixFQUF3QixTQUF4QixFQUFtQzs7QUFFckYsWUFBSSxJQUFJLElBQVI7O0FBRUEsWUFBSSxPQUFPLEtBQVAsS0FBa0IsU0FBdEIsRUFBaUM7QUFDN0Isd0JBQVksS0FBWjtBQUNBLG9CQUFRLElBQVI7QUFDSCxTQUhELE1BR08sSUFBSSxRQUFRLENBQVIsSUFBYyxTQUFTLEVBQUUsVUFBN0IsRUFBMEM7QUFDN0MsbUJBQU8sS0FBUDtBQUNIOztBQUVELFVBQUUsTUFBRjs7QUFFQSxZQUFJLE9BQU8sS0FBUCxLQUFrQixRQUF0QixFQUFnQztBQUM1QixnQkFBSSxVQUFVLENBQVYsSUFBZSxFQUFFLE9BQUYsQ0FBVSxNQUFWLEtBQXFCLENBQXhDLEVBQTJDO0FBQ3ZDLGtCQUFFLE1BQUYsRUFBVSxRQUFWLENBQW1CLEVBQUUsV0FBckI7QUFDSCxhQUZELE1BRU8sSUFBSSxTQUFKLEVBQWU7QUFDbEIsa0JBQUUsTUFBRixFQUFVLFlBQVYsQ0FBdUIsRUFBRSxPQUFGLENBQVUsRUFBVixDQUFhLEtBQWIsQ0FBdkI7QUFDSCxhQUZNLE1BRUE7QUFDSCxrQkFBRSxNQUFGLEVBQVUsV0FBVixDQUFzQixFQUFFLE9BQUYsQ0FBVSxFQUFWLENBQWEsS0FBYixDQUF0QjtBQUNIO0FBQ0osU0FSRCxNQVFPO0FBQ0gsZ0JBQUksY0FBYyxJQUFsQixFQUF3QjtBQUNwQixrQkFBRSxNQUFGLEVBQVUsU0FBVixDQUFvQixFQUFFLFdBQXRCO0FBQ0gsYUFGRCxNQUVPO0FBQ0gsa0JBQUUsTUFBRixFQUFVLFFBQVYsQ0FBbUIsRUFBRSxXQUFyQjtBQUNIO0FBQ0o7O0FBRUQsVUFBRSxPQUFGLEdBQVksRUFBRSxXQUFGLENBQWMsUUFBZCxDQUF1QixLQUFLLE9BQUwsQ0FBYSxLQUFwQyxDQUFaOztBQUVBLFVBQUUsV0FBRixDQUFjLFFBQWQsQ0FBdUIsS0FBSyxPQUFMLENBQWEsS0FBcEMsRUFBMkMsTUFBM0M7O0FBRUEsVUFBRSxXQUFGLENBQWMsTUFBZCxDQUFxQixFQUFFLE9BQXZCOztBQUVBLFVBQUUsT0FBRixDQUFVLElBQVYsQ0FBZSxVQUFTLEtBQVQsRUFBZ0IsT0FBaEIsRUFBeUI7QUFDcEMsY0FBRSxPQUFGLEVBQVcsSUFBWCxDQUFnQixrQkFBaEIsRUFBb0MsS0FBcEM7QUFDSCxTQUZEOztBQUlBLFVBQUUsWUFBRixHQUFpQixFQUFFLE9BQW5COztBQUVBLFVBQUUsTUFBRjtBQUVILEtBM0NEOztBQTZDQSxVQUFNLFNBQU4sQ0FBZ0IsYUFBaEIsR0FBZ0MsWUFBVztBQUN2QyxZQUFJLElBQUksSUFBUjtBQUNBLFlBQUksRUFBRSxPQUFGLENBQVUsWUFBVixLQUEyQixDQUEzQixJQUFnQyxFQUFFLE9BQUYsQ0FBVSxjQUFWLEtBQTZCLElBQTdELElBQXFFLEVBQUUsT0FBRixDQUFVLFFBQVYsS0FBdUIsS0FBaEcsRUFBdUc7QUFDbkcsZ0JBQUksZUFBZSxFQUFFLE9BQUYsQ0FBVSxFQUFWLENBQWEsRUFBRSxZQUFmLEVBQTZCLFdBQTdCLENBQXlDLElBQXpDLENBQW5CO0FBQ0EsY0FBRSxLQUFGLENBQVEsT0FBUixDQUFnQjtBQUNaLHdCQUFRO0FBREksYUFBaEIsRUFFRyxFQUFFLE9BQUYsQ0FBVSxLQUZiO0FBR0g7QUFDSixLQVJEOztBQVVBLFVBQU0sU0FBTixDQUFnQixZQUFoQixHQUErQixVQUFTLFVBQVQsRUFBcUIsUUFBckIsRUFBK0I7O0FBRTFELFlBQUksWUFBWSxFQUFoQjtBQUFBLFlBQ0ksSUFBSSxJQURSOztBQUdBLFVBQUUsYUFBRjs7QUFFQSxZQUFJLEVBQUUsT0FBRixDQUFVLEdBQVYsS0FBa0IsSUFBbEIsSUFBMEIsRUFBRSxPQUFGLENBQVUsUUFBVixLQUF1QixLQUFyRCxFQUE0RDtBQUN4RCx5QkFBYSxDQUFDLFVBQWQ7QUFDSDtBQUNELFlBQUksRUFBRSxpQkFBRixLQUF3QixLQUE1QixFQUFtQztBQUMvQixnQkFBSSxFQUFFLE9BQUYsQ0FBVSxRQUFWLEtBQXVCLEtBQTNCLEVBQWtDO0FBQzlCLGtCQUFFLFdBQUYsQ0FBYyxPQUFkLENBQXNCO0FBQ2xCLDBCQUFNO0FBRFksaUJBQXRCLEVBRUcsRUFBRSxPQUFGLENBQVUsS0FGYixFQUVvQixFQUFFLE9BQUYsQ0FBVSxNQUY5QixFQUVzQyxRQUZ0QztBQUdILGFBSkQsTUFJTztBQUNILGtCQUFFLFdBQUYsQ0FBYyxPQUFkLENBQXNCO0FBQ2xCLHlCQUFLO0FBRGEsaUJBQXRCLEVBRUcsRUFBRSxPQUFGLENBQVUsS0FGYixFQUVvQixFQUFFLE9BQUYsQ0FBVSxNQUY5QixFQUVzQyxRQUZ0QztBQUdIO0FBRUosU0FYRCxNQVdPOztBQUVILGdCQUFJLEVBQUUsY0FBRixLQUFxQixLQUF6QixFQUFnQztBQUM1QixvQkFBSSxFQUFFLE9BQUYsQ0FBVSxHQUFWLEtBQWtCLElBQXRCLEVBQTRCO0FBQ3hCLHNCQUFFLFdBQUYsR0FBZ0IsQ0FBRSxFQUFFLFdBQXBCO0FBQ0g7QUFDRCxrQkFBRTtBQUNFLCtCQUFXLEVBQUU7QUFEZixpQkFBRixFQUVHLE9BRkgsQ0FFVztBQUNQLCtCQUFXO0FBREosaUJBRlgsRUFJRztBQUNDLDhCQUFVLEVBQUUsT0FBRixDQUFVLEtBRHJCO0FBRUMsNEJBQVEsRUFBRSxPQUFGLENBQVUsTUFGbkI7QUFHQywwQkFBTSxjQUFTLEdBQVQsRUFBYztBQUNoQiw4QkFBTSxLQUFLLElBQUwsQ0FBVSxHQUFWLENBQU47QUFDQSw0QkFBSSxFQUFFLE9BQUYsQ0FBVSxRQUFWLEtBQXVCLEtBQTNCLEVBQWtDO0FBQzlCLHNDQUFVLEVBQUUsUUFBWixJQUF3QixlQUNwQixHQURvQixHQUNkLFVBRFY7QUFFQSw4QkFBRSxXQUFGLENBQWMsR0FBZCxDQUFrQixTQUFsQjtBQUNILHlCQUpELE1BSU87QUFDSCxzQ0FBVSxFQUFFLFFBQVosSUFBd0IsbUJBQ3BCLEdBRG9CLEdBQ2QsS0FEVjtBQUVBLDhCQUFFLFdBQUYsQ0FBYyxHQUFkLENBQWtCLFNBQWxCO0FBQ0g7QUFDSixxQkFkRjtBQWVDLDhCQUFVLG9CQUFXO0FBQ2pCLDRCQUFJLFFBQUosRUFBYztBQUNWLHFDQUFTLElBQVQ7QUFDSDtBQUNKO0FBbkJGLGlCQUpIO0FBMEJILGFBOUJELE1BOEJPOztBQUVILGtCQUFFLGVBQUY7QUFDQSw2QkFBYSxLQUFLLElBQUwsQ0FBVSxVQUFWLENBQWI7O0FBRUEsb0JBQUksRUFBRSxPQUFGLENBQVUsUUFBVixLQUF1QixLQUEzQixFQUFrQztBQUM5Qiw4QkFBVSxFQUFFLFFBQVosSUFBd0IsaUJBQWlCLFVBQWpCLEdBQThCLGVBQXREO0FBQ0gsaUJBRkQsTUFFTztBQUNILDhCQUFVLEVBQUUsUUFBWixJQUF3QixxQkFBcUIsVUFBckIsR0FBa0MsVUFBMUQ7QUFDSDtBQUNELGtCQUFFLFdBQUYsQ0FBYyxHQUFkLENBQWtCLFNBQWxCOztBQUVBLG9CQUFJLFFBQUosRUFBYztBQUNWLCtCQUFXLFlBQVc7O0FBRWxCLDBCQUFFLGlCQUFGOztBQUVBLGlDQUFTLElBQVQ7QUFDSCxxQkFMRCxFQUtHLEVBQUUsT0FBRixDQUFVLEtBTGI7QUFNSDtBQUVKO0FBRUo7QUFFSixLQTlFRDs7QUFnRkEsVUFBTSxTQUFOLENBQWdCLFlBQWhCLEdBQStCLFlBQVc7O0FBRXRDLFlBQUksSUFBSSxJQUFSO0FBQUEsWUFDSSxXQUFXLEVBQUUsT0FBRixDQUFVLFFBRHpCOztBQUdBLFlBQUssWUFBWSxhQUFhLElBQTlCLEVBQXFDO0FBQ2pDLHVCQUFXLEVBQUUsUUFBRixFQUFZLEdBQVosQ0FBZ0IsRUFBRSxPQUFsQixDQUFYO0FBQ0g7O0FBRUQsZUFBTyxRQUFQO0FBRUgsS0FYRDs7QUFhQSxVQUFNLFNBQU4sQ0FBZ0IsUUFBaEIsR0FBMkIsVUFBUyxLQUFULEVBQWdCOztBQUV2QyxZQUFJLElBQUksSUFBUjtBQUFBLFlBQ0ksV0FBVyxFQUFFLFlBQUYsRUFEZjs7QUFHQSxZQUFLLGFBQWEsSUFBYixJQUFxQixRQUFPLFFBQVAseUNBQU8sUUFBUCxPQUFvQixRQUE5QyxFQUF5RDtBQUNyRCxxQkFBUyxJQUFULENBQWMsWUFBVztBQUNyQixvQkFBSSxTQUFTLEVBQUUsSUFBRixFQUFRLEtBQVIsQ0FBYyxVQUFkLENBQWI7QUFDQSxvQkFBRyxDQUFDLE9BQU8sU0FBWCxFQUFzQjtBQUNsQiwyQkFBTyxZQUFQLENBQW9CLEtBQXBCLEVBQTJCLElBQTNCO0FBQ0g7QUFDSixhQUxEO0FBTUg7QUFFSixLQWREOztBQWdCQSxVQUFNLFNBQU4sQ0FBZ0IsZUFBaEIsR0FBa0MsVUFBUyxLQUFULEVBQWdCOztBQUU5QyxZQUFJLElBQUksSUFBUjtBQUFBLFlBQ0ksYUFBYSxFQURqQjs7QUFHQSxZQUFJLEVBQUUsT0FBRixDQUFVLElBQVYsS0FBbUIsS0FBdkIsRUFBOEI7QUFDMUIsdUJBQVcsRUFBRSxjQUFiLElBQStCLEVBQUUsYUFBRixHQUFrQixHQUFsQixHQUF3QixFQUFFLE9BQUYsQ0FBVSxLQUFsQyxHQUEwQyxLQUExQyxHQUFrRCxFQUFFLE9BQUYsQ0FBVSxPQUEzRjtBQUNILFNBRkQsTUFFTztBQUNILHVCQUFXLEVBQUUsY0FBYixJQUErQixhQUFhLEVBQUUsT0FBRixDQUFVLEtBQXZCLEdBQStCLEtBQS9CLEdBQXVDLEVBQUUsT0FBRixDQUFVLE9BQWhGO0FBQ0g7O0FBRUQsWUFBSSxFQUFFLE9BQUYsQ0FBVSxJQUFWLEtBQW1CLEtBQXZCLEVBQThCO0FBQzFCLGNBQUUsV0FBRixDQUFjLEdBQWQsQ0FBa0IsVUFBbEI7QUFDSCxTQUZELE1BRU87QUFDSCxjQUFFLE9BQUYsQ0FBVSxFQUFWLENBQWEsS0FBYixFQUFvQixHQUFwQixDQUF3QixVQUF4QjtBQUNIO0FBRUosS0FqQkQ7O0FBbUJBLFVBQU0sU0FBTixDQUFnQixRQUFoQixHQUEyQixZQUFXOztBQUVsQyxZQUFJLElBQUksSUFBUjs7QUFFQSxVQUFFLGFBQUY7O0FBRUEsWUFBSyxFQUFFLFVBQUYsR0FBZSxFQUFFLE9BQUYsQ0FBVSxZQUE5QixFQUE2QztBQUN6QyxjQUFFLGFBQUYsR0FBa0IsWUFBYSxFQUFFLGdCQUFmLEVBQWlDLEVBQUUsT0FBRixDQUFVLGFBQTNDLENBQWxCO0FBQ0g7QUFFSixLQVZEOztBQVlBLFVBQU0sU0FBTixDQUFnQixhQUFoQixHQUFnQyxZQUFXOztBQUV2QyxZQUFJLElBQUksSUFBUjs7QUFFQSxZQUFJLEVBQUUsYUFBTixFQUFxQjtBQUNqQiwwQkFBYyxFQUFFLGFBQWhCO0FBQ0g7QUFFSixLQVJEOztBQVVBLFVBQU0sU0FBTixDQUFnQixnQkFBaEIsR0FBbUMsWUFBVzs7QUFFMUMsWUFBSSxJQUFJLElBQVI7QUFBQSxZQUNJLFVBQVUsRUFBRSxZQUFGLEdBQWlCLEVBQUUsT0FBRixDQUFVLGNBRHpDOztBQUdBLFlBQUssQ0FBQyxFQUFFLE1BQUgsSUFBYSxDQUFDLEVBQUUsV0FBaEIsSUFBK0IsQ0FBQyxFQUFFLFFBQXZDLEVBQWtEOztBQUU5QyxnQkFBSyxFQUFFLE9BQUYsQ0FBVSxRQUFWLEtBQXVCLEtBQTVCLEVBQW9DOztBQUVoQyxvQkFBSyxFQUFFLFNBQUYsS0FBZ0IsQ0FBaEIsSUFBdUIsRUFBRSxZQUFGLEdBQWlCLENBQW5CLEtBQTZCLEVBQUUsVUFBRixHQUFlLENBQXRFLEVBQTJFO0FBQ3ZFLHNCQUFFLFNBQUYsR0FBYyxDQUFkO0FBQ0gsaUJBRkQsTUFJSyxJQUFLLEVBQUUsU0FBRixLQUFnQixDQUFyQixFQUF5Qjs7QUFFMUIsOEJBQVUsRUFBRSxZQUFGLEdBQWlCLEVBQUUsT0FBRixDQUFVLGNBQXJDOztBQUVBLHdCQUFLLEVBQUUsWUFBRixHQUFpQixDQUFqQixLQUF1QixDQUE1QixFQUFnQztBQUM1QiwwQkFBRSxTQUFGLEdBQWMsQ0FBZDtBQUNIO0FBRUo7QUFFSjs7QUFFRCxjQUFFLFlBQUYsQ0FBZ0IsT0FBaEI7QUFFSDtBQUVKLEtBN0JEOztBQStCQSxVQUFNLFNBQU4sQ0FBZ0IsV0FBaEIsR0FBOEIsWUFBVzs7QUFFckMsWUFBSSxJQUFJLElBQVI7O0FBRUEsWUFBSSxFQUFFLE9BQUYsQ0FBVSxNQUFWLEtBQXFCLElBQXpCLEVBQWdDOztBQUU1QixjQUFFLFVBQUYsR0FBZSxFQUFFLEVBQUUsT0FBRixDQUFVLFNBQVosRUFBdUIsUUFBdkIsQ0FBZ0MsYUFBaEMsQ0FBZjtBQUNBLGNBQUUsVUFBRixHQUFlLEVBQUUsRUFBRSxPQUFGLENBQVUsU0FBWixFQUF1QixRQUF2QixDQUFnQyxhQUFoQyxDQUFmOztBQUVBLGdCQUFJLEVBQUUsVUFBRixHQUFlLEVBQUUsT0FBRixDQUFVLFlBQTdCLEVBQTRDOztBQUV4QyxrQkFBRSxVQUFGLENBQWEsV0FBYixDQUF5QixjQUF6QixFQUF5QyxVQUF6QyxDQUFvRCxzQkFBcEQ7QUFDQSxrQkFBRSxVQUFGLENBQWEsV0FBYixDQUF5QixjQUF6QixFQUF5QyxVQUF6QyxDQUFvRCxzQkFBcEQ7O0FBRUEsb0JBQUksRUFBRSxRQUFGLENBQVcsSUFBWCxDQUFnQixFQUFFLE9BQUYsQ0FBVSxTQUExQixDQUFKLEVBQTBDO0FBQ3RDLHNCQUFFLFVBQUYsQ0FBYSxTQUFiLENBQXVCLEVBQUUsT0FBRixDQUFVLFlBQWpDO0FBQ0g7O0FBRUQsb0JBQUksRUFBRSxRQUFGLENBQVcsSUFBWCxDQUFnQixFQUFFLE9BQUYsQ0FBVSxTQUExQixDQUFKLEVBQTBDO0FBQ3RDLHNCQUFFLFVBQUYsQ0FBYSxRQUFiLENBQXNCLEVBQUUsT0FBRixDQUFVLFlBQWhDO0FBQ0g7O0FBRUQsb0JBQUksRUFBRSxPQUFGLENBQVUsUUFBVixLQUF1QixJQUEzQixFQUFpQztBQUM3QixzQkFBRSxVQUFGLENBQ0ssUUFETCxDQUNjLGdCQURkLEVBRUssSUFGTCxDQUVVLGVBRlYsRUFFMkIsTUFGM0I7QUFHSDtBQUVKLGFBbkJELE1BbUJPOztBQUVILGtCQUFFLFVBQUYsQ0FBYSxHQUFiLENBQWtCLEVBQUUsVUFBcEIsRUFFSyxRQUZMLENBRWMsY0FGZCxFQUdLLElBSEwsQ0FHVTtBQUNGLHFDQUFpQixNQURmO0FBRUYsZ0NBQVk7QUFGVixpQkFIVjtBQVFIO0FBRUo7QUFFSixLQTFDRDs7QUE0Q0EsVUFBTSxTQUFOLENBQWdCLFNBQWhCLEdBQTRCLFlBQVc7O0FBRW5DLFlBQUksSUFBSSxJQUFSO0FBQUEsWUFDSSxDQURKO0FBQUEsWUFDTyxHQURQOztBQUdBLFlBQUksRUFBRSxPQUFGLENBQVUsSUFBVixLQUFtQixJQUFuQixJQUEyQixFQUFFLFVBQUYsR0FBZSxFQUFFLE9BQUYsQ0FBVSxZQUF4RCxFQUFzRTs7QUFFbEUsY0FBRSxPQUFGLENBQVUsUUFBVixDQUFtQixjQUFuQjs7QUFFQSxrQkFBTSxFQUFFLFFBQUYsRUFBWSxRQUFaLENBQXFCLEVBQUUsT0FBRixDQUFVLFNBQS9CLENBQU47O0FBRUEsaUJBQUssSUFBSSxDQUFULEVBQVksS0FBSyxFQUFFLFdBQUYsRUFBakIsRUFBa0MsS0FBSyxDQUF2QyxFQUEwQztBQUN0QyxvQkFBSSxNQUFKLENBQVcsRUFBRSxRQUFGLEVBQVksTUFBWixDQUFtQixFQUFFLE9BQUYsQ0FBVSxZQUFWLENBQXVCLElBQXZCLENBQTRCLElBQTVCLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQW5CLENBQVg7QUFDSDs7QUFFRCxjQUFFLEtBQUYsR0FBVSxJQUFJLFFBQUosQ0FBYSxFQUFFLE9BQUYsQ0FBVSxVQUF2QixDQUFWOztBQUVBLGNBQUUsS0FBRixDQUFRLElBQVIsQ0FBYSxJQUFiLEVBQW1CLEtBQW5CLEdBQTJCLFFBQTNCLENBQW9DLGNBQXBDLEVBQW9ELElBQXBELENBQXlELGFBQXpELEVBQXdFLE9BQXhFO0FBRUg7QUFFSixLQXJCRDs7QUF1QkEsVUFBTSxTQUFOLENBQWdCLFFBQWhCLEdBQTJCLFlBQVc7O0FBRWxDLFlBQUksSUFBSSxJQUFSOztBQUVBLFVBQUUsT0FBRixHQUNJLEVBQUUsT0FBRixDQUNLLFFBREwsQ0FDZSxFQUFFLE9BQUYsQ0FBVSxLQUFWLEdBQWtCLHFCQURqQyxFQUVLLFFBRkwsQ0FFYyxhQUZkLENBREo7O0FBS0EsVUFBRSxVQUFGLEdBQWUsRUFBRSxPQUFGLENBQVUsTUFBekI7O0FBRUEsVUFBRSxPQUFGLENBQVUsSUFBVixDQUFlLFVBQVMsS0FBVCxFQUFnQixPQUFoQixFQUF5QjtBQUNwQyxjQUFFLE9BQUYsRUFDSyxJQURMLENBQ1Usa0JBRFYsRUFDOEIsS0FEOUIsRUFFSyxJQUZMLENBRVUsaUJBRlYsRUFFNkIsRUFBRSxPQUFGLEVBQVcsSUFBWCxDQUFnQixPQUFoQixLQUE0QixFQUZ6RDtBQUdILFNBSkQ7O0FBTUEsVUFBRSxPQUFGLENBQVUsUUFBVixDQUFtQixjQUFuQjs7QUFFQSxVQUFFLFdBQUYsR0FBaUIsRUFBRSxVQUFGLEtBQWlCLENBQWxCLEdBQ1osRUFBRSw0QkFBRixFQUFnQyxRQUFoQyxDQUF5QyxFQUFFLE9BQTNDLENBRFksR0FFWixFQUFFLE9BQUYsQ0FBVSxPQUFWLENBQWtCLDRCQUFsQixFQUFnRCxNQUFoRCxFQUZKOztBQUlBLFVBQUUsS0FBRixHQUFVLEVBQUUsV0FBRixDQUFjLElBQWQsQ0FDTiw4Q0FETSxFQUMwQyxNQUQxQyxFQUFWO0FBRUEsVUFBRSxXQUFGLENBQWMsR0FBZCxDQUFrQixTQUFsQixFQUE2QixDQUE3Qjs7QUFFQSxZQUFJLEVBQUUsT0FBRixDQUFVLFVBQVYsS0FBeUIsSUFBekIsSUFBaUMsRUFBRSxPQUFGLENBQVUsWUFBVixLQUEyQixJQUFoRSxFQUFzRTtBQUNsRSxjQUFFLE9BQUYsQ0FBVSxjQUFWLEdBQTJCLENBQTNCO0FBQ0g7O0FBRUQsVUFBRSxnQkFBRixFQUFvQixFQUFFLE9BQXRCLEVBQStCLEdBQS9CLENBQW1DLE9BQW5DLEVBQTRDLFFBQTVDLENBQXFELGVBQXJEOztBQUVBLFVBQUUsYUFBRjs7QUFFQSxVQUFFLFdBQUY7O0FBRUEsVUFBRSxTQUFGOztBQUVBLFVBQUUsVUFBRjs7QUFHQSxVQUFFLGVBQUYsQ0FBa0IsT0FBTyxFQUFFLFlBQVQsS0FBMEIsUUFBMUIsR0FBcUMsRUFBRSxZQUF2QyxHQUFzRCxDQUF4RTs7QUFFQSxZQUFJLEVBQUUsT0FBRixDQUFVLFNBQVYsS0FBd0IsSUFBNUIsRUFBa0M7QUFDOUIsY0FBRSxLQUFGLENBQVEsUUFBUixDQUFpQixXQUFqQjtBQUNIO0FBRUosS0FoREQ7O0FBa0RBLFVBQU0sU0FBTixDQUFnQixTQUFoQixHQUE0QixZQUFXOztBQUVuQyxZQUFJLElBQUksSUFBUjtBQUFBLFlBQWMsQ0FBZDtBQUFBLFlBQWlCLENBQWpCO0FBQUEsWUFBb0IsQ0FBcEI7QUFBQSxZQUF1QixTQUF2QjtBQUFBLFlBQWtDLFdBQWxDO0FBQUEsWUFBK0MsY0FBL0M7QUFBQSxZQUE4RCxnQkFBOUQ7O0FBRUEsb0JBQVksU0FBUyxzQkFBVCxFQUFaO0FBQ0EseUJBQWlCLEVBQUUsT0FBRixDQUFVLFFBQVYsRUFBakI7O0FBRUEsWUFBRyxFQUFFLE9BQUYsQ0FBVSxJQUFWLEdBQWlCLENBQXBCLEVBQXVCOztBQUVuQiwrQkFBbUIsRUFBRSxPQUFGLENBQVUsWUFBVixHQUF5QixFQUFFLE9BQUYsQ0FBVSxJQUF0RDtBQUNBLDBCQUFjLEtBQUssSUFBTCxDQUNWLGVBQWUsTUFBZixHQUF3QixnQkFEZCxDQUFkOztBQUlBLGlCQUFJLElBQUksQ0FBUixFQUFXLElBQUksV0FBZixFQUE0QixHQUE1QixFQUFnQztBQUM1QixvQkFBSSxRQUFRLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBQ0EscUJBQUksSUFBSSxDQUFSLEVBQVcsSUFBSSxFQUFFLE9BQUYsQ0FBVSxJQUF6QixFQUErQixHQUEvQixFQUFvQztBQUNoQyx3QkFBSSxNQUFNLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFWO0FBQ0EseUJBQUksSUFBSSxDQUFSLEVBQVcsSUFBSSxFQUFFLE9BQUYsQ0FBVSxZQUF6QixFQUF1QyxHQUF2QyxFQUE0QztBQUN4Qyw0QkFBSSxTQUFVLElBQUksZ0JBQUosSUFBeUIsSUFBSSxFQUFFLE9BQUYsQ0FBVSxZQUFmLEdBQStCLENBQXZELENBQWQ7QUFDQSw0QkFBSSxlQUFlLEdBQWYsQ0FBbUIsTUFBbkIsQ0FBSixFQUFnQztBQUM1QixnQ0FBSSxXQUFKLENBQWdCLGVBQWUsR0FBZixDQUFtQixNQUFuQixDQUFoQjtBQUNIO0FBQ0o7QUFDRCwwQkFBTSxXQUFOLENBQWtCLEdBQWxCO0FBQ0g7QUFDRCwwQkFBVSxXQUFWLENBQXNCLEtBQXRCO0FBQ0g7O0FBRUQsY0FBRSxPQUFGLENBQVUsS0FBVixHQUFrQixNQUFsQixDQUF5QixTQUF6QjtBQUNBLGNBQUUsT0FBRixDQUFVLFFBQVYsR0FBcUIsUUFBckIsR0FBZ0MsUUFBaEMsR0FDSyxHQURMLENBQ1M7QUFDRCx5QkFBUyxNQUFNLEVBQUUsT0FBRixDQUFVLFlBQWpCLEdBQWlDLEdBRHhDO0FBRUQsMkJBQVc7QUFGVixhQURUO0FBTUg7QUFFSixLQXRDRDs7QUF3Q0EsVUFBTSxTQUFOLENBQWdCLGVBQWhCLEdBQWtDLFVBQVMsT0FBVCxFQUFrQixXQUFsQixFQUErQjs7QUFFN0QsWUFBSSxJQUFJLElBQVI7QUFBQSxZQUNJLFVBREo7QUFBQSxZQUNnQixnQkFEaEI7QUFBQSxZQUNrQyxjQURsQztBQUFBLFlBQ2tELG9CQUFvQixLQUR0RTtBQUVBLFlBQUksY0FBYyxFQUFFLE9BQUYsQ0FBVSxLQUFWLEVBQWxCO0FBQ0EsWUFBSSxjQUFjLE9BQU8sVUFBUCxJQUFxQixFQUFFLE1BQUYsRUFBVSxLQUFWLEVBQXZDOztBQUVBLFlBQUksRUFBRSxTQUFGLEtBQWdCLFFBQXBCLEVBQThCO0FBQzFCLDZCQUFpQixXQUFqQjtBQUNILFNBRkQsTUFFTyxJQUFJLEVBQUUsU0FBRixLQUFnQixRQUFwQixFQUE4QjtBQUNqQyw2QkFBaUIsV0FBakI7QUFDSCxTQUZNLE1BRUEsSUFBSSxFQUFFLFNBQUYsS0FBZ0IsS0FBcEIsRUFBMkI7QUFDOUIsNkJBQWlCLEtBQUssR0FBTCxDQUFTLFdBQVQsRUFBc0IsV0FBdEIsQ0FBakI7QUFDSDs7QUFFRCxZQUFLLEVBQUUsT0FBRixDQUFVLFVBQVYsSUFDRCxFQUFFLE9BQUYsQ0FBVSxVQUFWLENBQXFCLE1BRHBCLElBRUQsRUFBRSxPQUFGLENBQVUsVUFBVixLQUF5QixJQUY3QixFQUVtQzs7QUFFL0IsK0JBQW1CLElBQW5COztBQUVBLGlCQUFLLFVBQUwsSUFBbUIsRUFBRSxXQUFyQixFQUFrQztBQUM5QixvQkFBSSxFQUFFLFdBQUYsQ0FBYyxjQUFkLENBQTZCLFVBQTdCLENBQUosRUFBOEM7QUFDMUMsd0JBQUksRUFBRSxnQkFBRixDQUFtQixXQUFuQixLQUFtQyxLQUF2QyxFQUE4QztBQUMxQyw0QkFBSSxpQkFBaUIsRUFBRSxXQUFGLENBQWMsVUFBZCxDQUFyQixFQUFnRDtBQUM1QywrQ0FBbUIsRUFBRSxXQUFGLENBQWMsVUFBZCxDQUFuQjtBQUNIO0FBQ0oscUJBSkQsTUFJTztBQUNILDRCQUFJLGlCQUFpQixFQUFFLFdBQUYsQ0FBYyxVQUFkLENBQXJCLEVBQWdEO0FBQzVDLCtDQUFtQixFQUFFLFdBQUYsQ0FBYyxVQUFkLENBQW5CO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7O0FBRUQsZ0JBQUkscUJBQXFCLElBQXpCLEVBQStCO0FBQzNCLG9CQUFJLEVBQUUsZ0JBQUYsS0FBdUIsSUFBM0IsRUFBaUM7QUFDN0Isd0JBQUkscUJBQXFCLEVBQUUsZ0JBQXZCLElBQTJDLFdBQS9DLEVBQTREO0FBQ3hELDBCQUFFLGdCQUFGLEdBQ0ksZ0JBREo7QUFFQSw0QkFBSSxFQUFFLGtCQUFGLENBQXFCLGdCQUFyQixNQUEyQyxTQUEvQyxFQUEwRDtBQUN0RCw4QkFBRSxPQUFGLENBQVUsZ0JBQVY7QUFDSCx5QkFGRCxNQUVPO0FBQ0gsOEJBQUUsT0FBRixHQUFZLEVBQUUsTUFBRixDQUFTLEVBQVQsRUFBYSxFQUFFLGdCQUFmLEVBQ1IsRUFBRSxrQkFBRixDQUNJLGdCQURKLENBRFEsQ0FBWjtBQUdBLGdDQUFJLFlBQVksSUFBaEIsRUFBc0I7QUFDbEIsa0NBQUUsWUFBRixHQUFpQixFQUFFLE9BQUYsQ0FBVSxZQUEzQjtBQUNIO0FBQ0QsOEJBQUUsT0FBRixDQUFVLE9BQVY7QUFDSDtBQUNELDRDQUFvQixnQkFBcEI7QUFDSDtBQUNKLGlCQWpCRCxNQWlCTztBQUNILHNCQUFFLGdCQUFGLEdBQXFCLGdCQUFyQjtBQUNBLHdCQUFJLEVBQUUsa0JBQUYsQ0FBcUIsZ0JBQXJCLE1BQTJDLFNBQS9DLEVBQTBEO0FBQ3RELDBCQUFFLE9BQUYsQ0FBVSxnQkFBVjtBQUNILHFCQUZELE1BRU87QUFDSCwwQkFBRSxPQUFGLEdBQVksRUFBRSxNQUFGLENBQVMsRUFBVCxFQUFhLEVBQUUsZ0JBQWYsRUFDUixFQUFFLGtCQUFGLENBQ0ksZ0JBREosQ0FEUSxDQUFaO0FBR0EsNEJBQUksWUFBWSxJQUFoQixFQUFzQjtBQUNsQiw4QkFBRSxZQUFGLEdBQWlCLEVBQUUsT0FBRixDQUFVLFlBQTNCO0FBQ0g7QUFDRCwwQkFBRSxPQUFGLENBQVUsT0FBVjtBQUNIO0FBQ0Qsd0NBQW9CLGdCQUFwQjtBQUNIO0FBQ0osYUFqQ0QsTUFpQ087QUFDSCxvQkFBSSxFQUFFLGdCQUFGLEtBQXVCLElBQTNCLEVBQWlDO0FBQzdCLHNCQUFFLGdCQUFGLEdBQXFCLElBQXJCO0FBQ0Esc0JBQUUsT0FBRixHQUFZLEVBQUUsZ0JBQWQ7QUFDQSx3QkFBSSxZQUFZLElBQWhCLEVBQXNCO0FBQ2xCLDBCQUFFLFlBQUYsR0FBaUIsRUFBRSxPQUFGLENBQVUsWUFBM0I7QUFDSDtBQUNELHNCQUFFLE9BQUYsQ0FBVSxPQUFWO0FBQ0Esd0NBQW9CLGdCQUFwQjtBQUNIO0FBQ0o7O0FBRUQ7QUFDQSxnQkFBSSxDQUFDLE9BQUQsSUFBWSxzQkFBc0IsS0FBdEMsRUFBOEM7QUFDMUMsa0JBQUUsT0FBRixDQUFVLE9BQVYsQ0FBa0IsWUFBbEIsRUFBZ0MsQ0FBQyxDQUFELEVBQUksaUJBQUosQ0FBaEM7QUFDSDtBQUNKO0FBRUosS0F0RkQ7O0FBd0ZBLFVBQU0sU0FBTixDQUFnQixXQUFoQixHQUE4QixVQUFTLEtBQVQsRUFBZ0IsV0FBaEIsRUFBNkI7O0FBRXZELFlBQUksSUFBSSxJQUFSO0FBQUEsWUFDSSxVQUFVLEVBQUUsTUFBTSxhQUFSLENBRGQ7QUFBQSxZQUVJLFdBRko7QUFBQSxZQUVpQixXQUZqQjtBQUFBLFlBRThCLFlBRjlCOztBQUlBO0FBQ0EsWUFBRyxRQUFRLEVBQVIsQ0FBVyxHQUFYLENBQUgsRUFBb0I7QUFDaEIsa0JBQU0sY0FBTjtBQUNIOztBQUVEO0FBQ0EsWUFBRyxDQUFDLFFBQVEsRUFBUixDQUFXLElBQVgsQ0FBSixFQUFzQjtBQUNsQixzQkFBVSxRQUFRLE9BQVIsQ0FBZ0IsSUFBaEIsQ0FBVjtBQUNIOztBQUVELHVCQUFnQixFQUFFLFVBQUYsR0FBZSxFQUFFLE9BQUYsQ0FBVSxjQUF6QixLQUE0QyxDQUE1RDtBQUNBLHNCQUFjLGVBQWUsQ0FBZixHQUFtQixDQUFDLEVBQUUsVUFBRixHQUFlLEVBQUUsWUFBbEIsSUFBa0MsRUFBRSxPQUFGLENBQVUsY0FBN0U7O0FBRUEsZ0JBQVEsTUFBTSxJQUFOLENBQVcsT0FBbkI7O0FBRUksaUJBQUssVUFBTDtBQUNJLDhCQUFjLGdCQUFnQixDQUFoQixHQUFvQixFQUFFLE9BQUYsQ0FBVSxjQUE5QixHQUErQyxFQUFFLE9BQUYsQ0FBVSxZQUFWLEdBQXlCLFdBQXRGO0FBQ0Esb0JBQUksRUFBRSxVQUFGLEdBQWUsRUFBRSxPQUFGLENBQVUsWUFBN0IsRUFBMkM7QUFDdkMsc0JBQUUsWUFBRixDQUFlLEVBQUUsWUFBRixHQUFpQixXQUFoQyxFQUE2QyxLQUE3QyxFQUFvRCxXQUFwRDtBQUNIO0FBQ0Q7O0FBRUosaUJBQUssTUFBTDtBQUNJLDhCQUFjLGdCQUFnQixDQUFoQixHQUFvQixFQUFFLE9BQUYsQ0FBVSxjQUE5QixHQUErQyxXQUE3RDtBQUNBLG9CQUFJLEVBQUUsVUFBRixHQUFlLEVBQUUsT0FBRixDQUFVLFlBQTdCLEVBQTJDO0FBQ3ZDLHNCQUFFLFlBQUYsQ0FBZSxFQUFFLFlBQUYsR0FBaUIsV0FBaEMsRUFBNkMsS0FBN0MsRUFBb0QsV0FBcEQ7QUFDSDtBQUNEOztBQUVKLGlCQUFLLE9BQUw7QUFDSSxvQkFBSSxRQUFRLE1BQU0sSUFBTixDQUFXLEtBQVgsS0FBcUIsQ0FBckIsR0FBeUIsQ0FBekIsR0FDUixNQUFNLElBQU4sQ0FBVyxLQUFYLElBQW9CLFFBQVEsS0FBUixLQUFrQixFQUFFLE9BQUYsQ0FBVSxjQURwRDs7QUFHQSxrQkFBRSxZQUFGLENBQWUsRUFBRSxjQUFGLENBQWlCLEtBQWpCLENBQWYsRUFBd0MsS0FBeEMsRUFBK0MsV0FBL0M7QUFDQSx3QkFBUSxRQUFSLEdBQW1CLE9BQW5CLENBQTJCLE9BQTNCO0FBQ0E7O0FBRUo7QUFDSTtBQXpCUjtBQTRCSCxLQS9DRDs7QUFpREEsVUFBTSxTQUFOLENBQWdCLGNBQWhCLEdBQWlDLFVBQVMsS0FBVCxFQUFnQjs7QUFFN0MsWUFBSSxJQUFJLElBQVI7QUFBQSxZQUNJLFVBREo7QUFBQSxZQUNnQixhQURoQjs7QUFHQSxxQkFBYSxFQUFFLG1CQUFGLEVBQWI7QUFDQSx3QkFBZ0IsQ0FBaEI7QUFDQSxZQUFJLFFBQVEsV0FBVyxXQUFXLE1BQVgsR0FBb0IsQ0FBL0IsQ0FBWixFQUErQztBQUMzQyxvQkFBUSxXQUFXLFdBQVcsTUFBWCxHQUFvQixDQUEvQixDQUFSO0FBQ0gsU0FGRCxNQUVPO0FBQ0gsaUJBQUssSUFBSSxDQUFULElBQWMsVUFBZCxFQUEwQjtBQUN0QixvQkFBSSxRQUFRLFdBQVcsQ0FBWCxDQUFaLEVBQTJCO0FBQ3ZCLDRCQUFRLGFBQVI7QUFDQTtBQUNIO0FBQ0QsZ0NBQWdCLFdBQVcsQ0FBWCxDQUFoQjtBQUNIO0FBQ0o7O0FBRUQsZUFBTyxLQUFQO0FBQ0gsS0FwQkQ7O0FBc0JBLFVBQU0sU0FBTixDQUFnQixhQUFoQixHQUFnQyxZQUFXOztBQUV2QyxZQUFJLElBQUksSUFBUjs7QUFFQSxZQUFJLEVBQUUsT0FBRixDQUFVLElBQVYsSUFBa0IsRUFBRSxLQUFGLEtBQVksSUFBbEMsRUFBd0M7O0FBRXBDLGNBQUUsSUFBRixFQUFRLEVBQUUsS0FBVixFQUNLLEdBREwsQ0FDUyxhQURULEVBQ3dCLEVBQUUsV0FEMUIsRUFFSyxHQUZMLENBRVMsa0JBRlQsRUFFNkIsRUFBRSxLQUFGLENBQVEsRUFBRSxTQUFWLEVBQXFCLENBQXJCLEVBQXdCLElBQXhCLENBRjdCLEVBR0ssR0FITCxDQUdTLGtCQUhULEVBRzZCLEVBQUUsS0FBRixDQUFRLEVBQUUsU0FBVixFQUFxQixDQUFyQixFQUF3QixLQUF4QixDQUg3QjtBQUtIOztBQUVELFVBQUUsT0FBRixDQUFVLEdBQVYsQ0FBYyx3QkFBZDs7QUFFQSxZQUFJLEVBQUUsT0FBRixDQUFVLE1BQVYsS0FBcUIsSUFBckIsSUFBNkIsRUFBRSxVQUFGLEdBQWUsRUFBRSxPQUFGLENBQVUsWUFBMUQsRUFBd0U7QUFDcEUsY0FBRSxVQUFGLElBQWdCLEVBQUUsVUFBRixDQUFhLEdBQWIsQ0FBaUIsYUFBakIsRUFBZ0MsRUFBRSxXQUFsQyxDQUFoQjtBQUNBLGNBQUUsVUFBRixJQUFnQixFQUFFLFVBQUYsQ0FBYSxHQUFiLENBQWlCLGFBQWpCLEVBQWdDLEVBQUUsV0FBbEMsQ0FBaEI7QUFDSDs7QUFFRCxVQUFFLEtBQUYsQ0FBUSxHQUFSLENBQVksa0NBQVosRUFBZ0QsRUFBRSxZQUFsRDtBQUNBLFVBQUUsS0FBRixDQUFRLEdBQVIsQ0FBWSxpQ0FBWixFQUErQyxFQUFFLFlBQWpEO0FBQ0EsVUFBRSxLQUFGLENBQVEsR0FBUixDQUFZLDhCQUFaLEVBQTRDLEVBQUUsWUFBOUM7QUFDQSxVQUFFLEtBQUYsQ0FBUSxHQUFSLENBQVksb0NBQVosRUFBa0QsRUFBRSxZQUFwRDs7QUFFQSxVQUFFLEtBQUYsQ0FBUSxHQUFSLENBQVksYUFBWixFQUEyQixFQUFFLFlBQTdCOztBQUVBLFVBQUUsUUFBRixFQUFZLEdBQVosQ0FBZ0IsRUFBRSxnQkFBbEIsRUFBb0MsRUFBRSxVQUF0Qzs7QUFFQSxVQUFFLGtCQUFGOztBQUVBLFlBQUksRUFBRSxPQUFGLENBQVUsYUFBVixLQUE0QixJQUFoQyxFQUFzQztBQUNsQyxjQUFFLEtBQUYsQ0FBUSxHQUFSLENBQVksZUFBWixFQUE2QixFQUFFLFVBQS9CO0FBQ0g7O0FBRUQsWUFBSSxFQUFFLE9BQUYsQ0FBVSxhQUFWLEtBQTRCLElBQWhDLEVBQXNDO0FBQ2xDLGNBQUUsRUFBRSxXQUFKLEVBQWlCLFFBQWpCLEdBQTRCLEdBQTVCLENBQWdDLGFBQWhDLEVBQStDLEVBQUUsYUFBakQ7QUFDSDs7QUFFRCxVQUFFLE1BQUYsRUFBVSxHQUFWLENBQWMsbUNBQW1DLEVBQUUsV0FBbkQsRUFBZ0UsRUFBRSxpQkFBbEU7O0FBRUEsVUFBRSxNQUFGLEVBQVUsR0FBVixDQUFjLHdCQUF3QixFQUFFLFdBQXhDLEVBQXFELEVBQUUsTUFBdkQ7O0FBRUEsVUFBRSxtQkFBRixFQUF1QixFQUFFLFdBQXpCLEVBQXNDLEdBQXRDLENBQTBDLFdBQTFDLEVBQXVELEVBQUUsY0FBekQ7O0FBRUEsVUFBRSxNQUFGLEVBQVUsR0FBVixDQUFjLHNCQUFzQixFQUFFLFdBQXRDLEVBQW1ELEVBQUUsV0FBckQ7QUFDQSxVQUFFLFFBQUYsRUFBWSxHQUFaLENBQWdCLHVCQUF1QixFQUFFLFdBQXpDLEVBQXNELEVBQUUsV0FBeEQ7QUFFSCxLQWhERDs7QUFrREEsVUFBTSxTQUFOLENBQWdCLGtCQUFoQixHQUFxQyxZQUFXOztBQUU1QyxZQUFJLElBQUksSUFBUjs7QUFFQSxVQUFFLEtBQUYsQ0FBUSxHQUFSLENBQVksa0JBQVosRUFBZ0MsRUFBRSxLQUFGLENBQVEsRUFBRSxTQUFWLEVBQXFCLENBQXJCLEVBQXdCLElBQXhCLENBQWhDO0FBQ0EsVUFBRSxLQUFGLENBQVEsR0FBUixDQUFZLGtCQUFaLEVBQWdDLEVBQUUsS0FBRixDQUFRLEVBQUUsU0FBVixFQUFxQixDQUFyQixFQUF3QixLQUF4QixDQUFoQztBQUVILEtBUEQ7O0FBU0EsVUFBTSxTQUFOLENBQWdCLFdBQWhCLEdBQThCLFlBQVc7O0FBRXJDLFlBQUksSUFBSSxJQUFSO0FBQUEsWUFBYyxjQUFkOztBQUVBLFlBQUcsRUFBRSxPQUFGLENBQVUsSUFBVixHQUFpQixDQUFwQixFQUF1QjtBQUNuQiw2QkFBaUIsRUFBRSxPQUFGLENBQVUsUUFBVixHQUFxQixRQUFyQixFQUFqQjtBQUNBLDJCQUFlLFVBQWYsQ0FBMEIsT0FBMUI7QUFDQSxjQUFFLE9BQUYsQ0FBVSxLQUFWLEdBQWtCLE1BQWxCLENBQXlCLGNBQXpCO0FBQ0g7QUFFSixLQVZEOztBQVlBLFVBQU0sU0FBTixDQUFnQixZQUFoQixHQUErQixVQUFTLEtBQVQsRUFBZ0I7O0FBRTNDLFlBQUksSUFBSSxJQUFSOztBQUVBLFlBQUksRUFBRSxXQUFGLEtBQWtCLEtBQXRCLEVBQTZCO0FBQ3pCLGtCQUFNLHdCQUFOO0FBQ0Esa0JBQU0sZUFBTjtBQUNBLGtCQUFNLGNBQU47QUFDSDtBQUVKLEtBVkQ7O0FBWUEsVUFBTSxTQUFOLENBQWdCLE9BQWhCLEdBQTBCLFVBQVMsT0FBVCxFQUFrQjs7QUFFeEMsWUFBSSxJQUFJLElBQVI7O0FBRUEsVUFBRSxhQUFGOztBQUVBLFVBQUUsV0FBRixHQUFnQixFQUFoQjs7QUFFQSxVQUFFLGFBQUY7O0FBRUEsVUFBRSxlQUFGLEVBQW1CLEVBQUUsT0FBckIsRUFBOEIsTUFBOUI7O0FBRUEsWUFBSSxFQUFFLEtBQU4sRUFBYTtBQUNULGNBQUUsS0FBRixDQUFRLE1BQVI7QUFDSDs7QUFHRCxZQUFLLEVBQUUsVUFBRixJQUFnQixFQUFFLFVBQUYsQ0FBYSxNQUFsQyxFQUEyQzs7QUFFdkMsY0FBRSxVQUFGLENBQ0ssV0FETCxDQUNpQix5Q0FEakIsRUFFSyxVQUZMLENBRWdCLG9DQUZoQixFQUdLLEdBSEwsQ0FHUyxTQUhULEVBR21CLEVBSG5COztBQUtBLGdCQUFLLEVBQUUsUUFBRixDQUFXLElBQVgsQ0FBaUIsRUFBRSxPQUFGLENBQVUsU0FBM0IsQ0FBTCxFQUE2QztBQUN6QyxrQkFBRSxVQUFGLENBQWEsTUFBYjtBQUNIO0FBQ0o7O0FBRUQsWUFBSyxFQUFFLFVBQUYsSUFBZ0IsRUFBRSxVQUFGLENBQWEsTUFBbEMsRUFBMkM7O0FBRXZDLGNBQUUsVUFBRixDQUNLLFdBREwsQ0FDaUIseUNBRGpCLEVBRUssVUFGTCxDQUVnQixvQ0FGaEIsRUFHSyxHQUhMLENBR1MsU0FIVCxFQUdtQixFQUhuQjs7QUFLQSxnQkFBSyxFQUFFLFFBQUYsQ0FBVyxJQUFYLENBQWlCLEVBQUUsT0FBRixDQUFVLFNBQTNCLENBQUwsRUFBNkM7QUFDekMsa0JBQUUsVUFBRixDQUFhLE1BQWI7QUFDSDtBQUVKOztBQUdELFlBQUksRUFBRSxPQUFOLEVBQWU7O0FBRVgsY0FBRSxPQUFGLENBQ0ssV0FETCxDQUNpQixtRUFEakIsRUFFSyxVQUZMLENBRWdCLGFBRmhCLEVBR0ssVUFITCxDQUdnQixrQkFIaEIsRUFJSyxJQUpMLENBSVUsWUFBVTtBQUNaLGtCQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsT0FBYixFQUFzQixFQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsaUJBQWIsQ0FBdEI7QUFDSCxhQU5MOztBQVFBLGNBQUUsV0FBRixDQUFjLFFBQWQsQ0FBdUIsS0FBSyxPQUFMLENBQWEsS0FBcEMsRUFBMkMsTUFBM0M7O0FBRUEsY0FBRSxXQUFGLENBQWMsTUFBZDs7QUFFQSxjQUFFLEtBQUYsQ0FBUSxNQUFSOztBQUVBLGNBQUUsT0FBRixDQUFVLE1BQVYsQ0FBaUIsRUFBRSxPQUFuQjtBQUNIOztBQUVELFVBQUUsV0FBRjs7QUFFQSxVQUFFLE9BQUYsQ0FBVSxXQUFWLENBQXNCLGNBQXRCO0FBQ0EsVUFBRSxPQUFGLENBQVUsV0FBVixDQUFzQixtQkFBdEI7QUFDQSxVQUFFLE9BQUYsQ0FBVSxXQUFWLENBQXNCLGNBQXRCOztBQUVBLFVBQUUsU0FBRixHQUFjLElBQWQ7O0FBRUEsWUFBRyxDQUFDLE9BQUosRUFBYTtBQUNULGNBQUUsT0FBRixDQUFVLE9BQVYsQ0FBa0IsU0FBbEIsRUFBNkIsQ0FBQyxDQUFELENBQTdCO0FBQ0g7QUFFSixLQTFFRDs7QUE0RUEsVUFBTSxTQUFOLENBQWdCLGlCQUFoQixHQUFvQyxVQUFTLEtBQVQsRUFBZ0I7O0FBRWhELFlBQUksSUFBSSxJQUFSO0FBQUEsWUFDSSxhQUFhLEVBRGpCOztBQUdBLG1CQUFXLEVBQUUsY0FBYixJQUErQixFQUEvQjs7QUFFQSxZQUFJLEVBQUUsT0FBRixDQUFVLElBQVYsS0FBbUIsS0FBdkIsRUFBOEI7QUFDMUIsY0FBRSxXQUFGLENBQWMsR0FBZCxDQUFrQixVQUFsQjtBQUNILFNBRkQsTUFFTztBQUNILGNBQUUsT0FBRixDQUFVLEVBQVYsQ0FBYSxLQUFiLEVBQW9CLEdBQXBCLENBQXdCLFVBQXhCO0FBQ0g7QUFFSixLQWJEOztBQWVBLFVBQU0sU0FBTixDQUFnQixTQUFoQixHQUE0QixVQUFTLFVBQVQsRUFBcUIsUUFBckIsRUFBK0I7O0FBRXZELFlBQUksSUFBSSxJQUFSOztBQUVBLFlBQUksRUFBRSxjQUFGLEtBQXFCLEtBQXpCLEVBQWdDOztBQUU1QixjQUFFLE9BQUYsQ0FBVSxFQUFWLENBQWEsVUFBYixFQUF5QixHQUF6QixDQUE2QjtBQUN6Qix3QkFBUSxFQUFFLE9BQUYsQ0FBVTtBQURPLGFBQTdCOztBQUlBLGNBQUUsT0FBRixDQUFVLEVBQVYsQ0FBYSxVQUFiLEVBQXlCLE9BQXpCLENBQWlDO0FBQzdCLHlCQUFTO0FBRG9CLGFBQWpDLEVBRUcsRUFBRSxPQUFGLENBQVUsS0FGYixFQUVvQixFQUFFLE9BQUYsQ0FBVSxNQUY5QixFQUVzQyxRQUZ0QztBQUlILFNBVkQsTUFVTzs7QUFFSCxjQUFFLGVBQUYsQ0FBa0IsVUFBbEI7O0FBRUEsY0FBRSxPQUFGLENBQVUsRUFBVixDQUFhLFVBQWIsRUFBeUIsR0FBekIsQ0FBNkI7QUFDekIseUJBQVMsQ0FEZ0I7QUFFekIsd0JBQVEsRUFBRSxPQUFGLENBQVU7QUFGTyxhQUE3Qjs7QUFLQSxnQkFBSSxRQUFKLEVBQWM7QUFDViwyQkFBVyxZQUFXOztBQUVsQixzQkFBRSxpQkFBRixDQUFvQixVQUFwQjs7QUFFQSw2QkFBUyxJQUFUO0FBQ0gsaUJBTEQsRUFLRyxFQUFFLE9BQUYsQ0FBVSxLQUxiO0FBTUg7QUFFSjtBQUVKLEtBbENEOztBQW9DQSxVQUFNLFNBQU4sQ0FBZ0IsWUFBaEIsR0FBK0IsVUFBUyxVQUFULEVBQXFCOztBQUVoRCxZQUFJLElBQUksSUFBUjs7QUFFQSxZQUFJLEVBQUUsY0FBRixLQUFxQixLQUF6QixFQUFnQzs7QUFFNUIsY0FBRSxPQUFGLENBQVUsRUFBVixDQUFhLFVBQWIsRUFBeUIsT0FBekIsQ0FBaUM7QUFDN0IseUJBQVMsQ0FEb0I7QUFFN0Isd0JBQVEsRUFBRSxPQUFGLENBQVUsTUFBVixHQUFtQjtBQUZFLGFBQWpDLEVBR0csRUFBRSxPQUFGLENBQVUsS0FIYixFQUdvQixFQUFFLE9BQUYsQ0FBVSxNQUg5QjtBQUtILFNBUEQsTUFPTzs7QUFFSCxjQUFFLGVBQUYsQ0FBa0IsVUFBbEI7O0FBRUEsY0FBRSxPQUFGLENBQVUsRUFBVixDQUFhLFVBQWIsRUFBeUIsR0FBekIsQ0FBNkI7QUFDekIseUJBQVMsQ0FEZ0I7QUFFekIsd0JBQVEsRUFBRSxPQUFGLENBQVUsTUFBVixHQUFtQjtBQUZGLGFBQTdCO0FBS0g7QUFFSixLQXRCRDs7QUF3QkEsVUFBTSxTQUFOLENBQWdCLFlBQWhCLEdBQStCLE1BQU0sU0FBTixDQUFnQixXQUFoQixHQUE4QixVQUFTLE1BQVQsRUFBaUI7O0FBRTFFLFlBQUksSUFBSSxJQUFSOztBQUVBLFlBQUksV0FBVyxJQUFmLEVBQXFCOztBQUVqQixjQUFFLFlBQUYsR0FBaUIsRUFBRSxPQUFuQjs7QUFFQSxjQUFFLE1BQUY7O0FBRUEsY0FBRSxXQUFGLENBQWMsUUFBZCxDQUF1QixLQUFLLE9BQUwsQ0FBYSxLQUFwQyxFQUEyQyxNQUEzQzs7QUFFQSxjQUFFLFlBQUYsQ0FBZSxNQUFmLENBQXNCLE1BQXRCLEVBQThCLFFBQTlCLENBQXVDLEVBQUUsV0FBekM7O0FBRUEsY0FBRSxNQUFGO0FBRUg7QUFFSixLQWxCRDs7QUFvQkEsVUFBTSxTQUFOLENBQWdCLFlBQWhCLEdBQStCLFlBQVc7O0FBRXRDLFlBQUksSUFBSSxJQUFSOztBQUVBLFVBQUUsT0FBRixDQUNLLEdBREwsQ0FDUyx3QkFEVCxFQUVLLEVBRkwsQ0FFUSx3QkFGUixFQUdRLHFCQUhSLEVBRytCLFVBQVMsS0FBVCxFQUFnQjs7QUFFM0Msa0JBQU0sd0JBQU47QUFDQSxnQkFBSSxNQUFNLEVBQUUsSUFBRixDQUFWOztBQUVBLHVCQUFXLFlBQVc7O0FBRWxCLG9CQUFJLEVBQUUsT0FBRixDQUFVLFlBQWQsRUFBNkI7QUFDekIsc0JBQUUsUUFBRixHQUFhLElBQUksRUFBSixDQUFPLFFBQVAsQ0FBYjtBQUNBLHNCQUFFLFFBQUY7QUFDSDtBQUVKLGFBUEQsRUFPRyxDQVBIO0FBU0gsU0FqQkQ7QUFrQkgsS0F0QkQ7O0FBd0JBLFVBQU0sU0FBTixDQUFnQixVQUFoQixHQUE2QixNQUFNLFNBQU4sQ0FBZ0IsaUJBQWhCLEdBQW9DLFlBQVc7O0FBRXhFLFlBQUksSUFBSSxJQUFSO0FBQ0EsZUFBTyxFQUFFLFlBQVQ7QUFFSCxLQUxEOztBQU9BLFVBQU0sU0FBTixDQUFnQixXQUFoQixHQUE4QixZQUFXOztBQUVyQyxZQUFJLElBQUksSUFBUjs7QUFFQSxZQUFJLGFBQWEsQ0FBakI7QUFDQSxZQUFJLFVBQVUsQ0FBZDtBQUNBLFlBQUksV0FBVyxDQUFmOztBQUVBLFlBQUksRUFBRSxPQUFGLENBQVUsUUFBVixLQUF1QixJQUEzQixFQUFpQztBQUM3QixtQkFBTyxhQUFhLEVBQUUsVUFBdEIsRUFBa0M7QUFDOUIsa0JBQUUsUUFBRjtBQUNBLDZCQUFhLFVBQVUsRUFBRSxPQUFGLENBQVUsY0FBakM7QUFDQSwyQkFBVyxFQUFFLE9BQUYsQ0FBVSxjQUFWLElBQTRCLEVBQUUsT0FBRixDQUFVLFlBQXRDLEdBQXFELEVBQUUsT0FBRixDQUFVLGNBQS9ELEdBQWdGLEVBQUUsT0FBRixDQUFVLFlBQXJHO0FBQ0g7QUFDSixTQU5ELE1BTU8sSUFBSSxFQUFFLE9BQUYsQ0FBVSxVQUFWLEtBQXlCLElBQTdCLEVBQW1DO0FBQ3RDLHVCQUFXLEVBQUUsVUFBYjtBQUNILFNBRk0sTUFFQSxJQUFHLENBQUMsRUFBRSxPQUFGLENBQVUsUUFBZCxFQUF3QjtBQUMzQix1QkFBVyxJQUFJLEtBQUssSUFBTCxDQUFVLENBQUMsRUFBRSxVQUFGLEdBQWUsRUFBRSxPQUFGLENBQVUsWUFBMUIsSUFBMEMsRUFBRSxPQUFGLENBQVUsY0FBOUQsQ0FBZjtBQUNILFNBRk0sTUFFRDtBQUNGLG1CQUFPLGFBQWEsRUFBRSxVQUF0QixFQUFrQztBQUM5QixrQkFBRSxRQUFGO0FBQ0EsNkJBQWEsVUFBVSxFQUFFLE9BQUYsQ0FBVSxjQUFqQztBQUNBLDJCQUFXLEVBQUUsT0FBRixDQUFVLGNBQVYsSUFBNEIsRUFBRSxPQUFGLENBQVUsWUFBdEMsR0FBcUQsRUFBRSxPQUFGLENBQVUsY0FBL0QsR0FBZ0YsRUFBRSxPQUFGLENBQVUsWUFBckc7QUFDSDtBQUNKOztBQUVELGVBQU8sV0FBVyxDQUFsQjtBQUVILEtBNUJEOztBQThCQSxVQUFNLFNBQU4sQ0FBZ0IsT0FBaEIsR0FBMEIsVUFBUyxVQUFULEVBQXFCOztBQUUzQyxZQUFJLElBQUksSUFBUjtBQUFBLFlBQ0ksVUFESjtBQUFBLFlBRUksY0FGSjtBQUFBLFlBR0ksaUJBQWlCLENBSHJCO0FBQUEsWUFJSSxXQUpKOztBQU1BLFVBQUUsV0FBRixHQUFnQixDQUFoQjtBQUNBLHlCQUFpQixFQUFFLE9BQUYsQ0FBVSxLQUFWLEdBQWtCLFdBQWxCLENBQThCLElBQTlCLENBQWpCOztBQUVBLFlBQUksRUFBRSxPQUFGLENBQVUsUUFBVixLQUF1QixJQUEzQixFQUFpQztBQUM3QixnQkFBSSxFQUFFLFVBQUYsR0FBZSxFQUFFLE9BQUYsQ0FBVSxZQUE3QixFQUEyQztBQUN2QyxrQkFBRSxXQUFGLEdBQWlCLEVBQUUsVUFBRixHQUFlLEVBQUUsT0FBRixDQUFVLFlBQTFCLEdBQTBDLENBQUMsQ0FBM0Q7QUFDQSxpQ0FBa0IsaUJBQWlCLEVBQUUsT0FBRixDQUFVLFlBQTVCLEdBQTRDLENBQUMsQ0FBOUQ7QUFDSDtBQUNELGdCQUFJLEVBQUUsVUFBRixHQUFlLEVBQUUsT0FBRixDQUFVLGNBQXpCLEtBQTRDLENBQWhELEVBQW1EO0FBQy9DLG9CQUFJLGFBQWEsRUFBRSxPQUFGLENBQVUsY0FBdkIsR0FBd0MsRUFBRSxVQUExQyxJQUF3RCxFQUFFLFVBQUYsR0FBZSxFQUFFLE9BQUYsQ0FBVSxZQUFyRixFQUFtRztBQUMvRix3QkFBSSxhQUFhLEVBQUUsVUFBbkIsRUFBK0I7QUFDM0IsMEJBQUUsV0FBRixHQUFpQixDQUFDLEVBQUUsT0FBRixDQUFVLFlBQVYsSUFBMEIsYUFBYSxFQUFFLFVBQXpDLENBQUQsSUFBeUQsRUFBRSxVQUE1RCxHQUEwRSxDQUFDLENBQTNGO0FBQ0EseUNBQWtCLENBQUMsRUFBRSxPQUFGLENBQVUsWUFBVixJQUEwQixhQUFhLEVBQUUsVUFBekMsQ0FBRCxJQUF5RCxjQUExRCxHQUE0RSxDQUFDLENBQTlGO0FBQ0gscUJBSEQsTUFHTztBQUNILDBCQUFFLFdBQUYsR0FBa0IsRUFBRSxVQUFGLEdBQWUsRUFBRSxPQUFGLENBQVUsY0FBMUIsR0FBNEMsRUFBRSxVQUEvQyxHQUE2RCxDQUFDLENBQTlFO0FBQ0EseUNBQW1CLEVBQUUsVUFBRixHQUFlLEVBQUUsT0FBRixDQUFVLGNBQTFCLEdBQTRDLGNBQTdDLEdBQStELENBQUMsQ0FBakY7QUFDSDtBQUNKO0FBQ0o7QUFDSixTQWhCRCxNQWdCTztBQUNILGdCQUFJLGFBQWEsRUFBRSxPQUFGLENBQVUsWUFBdkIsR0FBc0MsRUFBRSxVQUE1QyxFQUF3RDtBQUNwRCxrQkFBRSxXQUFGLEdBQWdCLENBQUUsYUFBYSxFQUFFLE9BQUYsQ0FBVSxZQUF4QixHQUF3QyxFQUFFLFVBQTNDLElBQXlELEVBQUUsVUFBM0U7QUFDQSxpQ0FBaUIsQ0FBRSxhQUFhLEVBQUUsT0FBRixDQUFVLFlBQXhCLEdBQXdDLEVBQUUsVUFBM0MsSUFBeUQsY0FBMUU7QUFDSDtBQUNKOztBQUVELFlBQUksRUFBRSxVQUFGLElBQWdCLEVBQUUsT0FBRixDQUFVLFlBQTlCLEVBQTRDO0FBQ3hDLGNBQUUsV0FBRixHQUFnQixDQUFoQjtBQUNBLDZCQUFpQixDQUFqQjtBQUNIOztBQUVELFlBQUksRUFBRSxPQUFGLENBQVUsVUFBVixLQUF5QixJQUF6QixJQUFpQyxFQUFFLE9BQUYsQ0FBVSxRQUFWLEtBQXVCLElBQTVELEVBQWtFO0FBQzlELGNBQUUsV0FBRixJQUFpQixFQUFFLFVBQUYsR0FBZSxLQUFLLEtBQUwsQ0FBVyxFQUFFLE9BQUYsQ0FBVSxZQUFWLEdBQXlCLENBQXBDLENBQWYsR0FBd0QsRUFBRSxVQUEzRTtBQUNILFNBRkQsTUFFTyxJQUFJLEVBQUUsT0FBRixDQUFVLFVBQVYsS0FBeUIsSUFBN0IsRUFBbUM7QUFDdEMsY0FBRSxXQUFGLEdBQWdCLENBQWhCO0FBQ0EsY0FBRSxXQUFGLElBQWlCLEVBQUUsVUFBRixHQUFlLEtBQUssS0FBTCxDQUFXLEVBQUUsT0FBRixDQUFVLFlBQVYsR0FBeUIsQ0FBcEMsQ0FBaEM7QUFDSDs7QUFFRCxZQUFJLEVBQUUsT0FBRixDQUFVLFFBQVYsS0FBdUIsS0FBM0IsRUFBa0M7QUFDOUIseUJBQWUsYUFBYSxFQUFFLFVBQWhCLEdBQThCLENBQUMsQ0FBaEMsR0FBcUMsRUFBRSxXQUFwRDtBQUNILFNBRkQsTUFFTztBQUNILHlCQUFlLGFBQWEsY0FBZCxHQUFnQyxDQUFDLENBQWxDLEdBQXVDLGNBQXBEO0FBQ0g7O0FBRUQsWUFBSSxFQUFFLE9BQUYsQ0FBVSxhQUFWLEtBQTRCLElBQWhDLEVBQXNDOztBQUVsQyxnQkFBSSxFQUFFLFVBQUYsSUFBZ0IsRUFBRSxPQUFGLENBQVUsWUFBMUIsSUFBMEMsRUFBRSxPQUFGLENBQVUsUUFBVixLQUF1QixLQUFyRSxFQUE0RTtBQUN4RSw4QkFBYyxFQUFFLFdBQUYsQ0FBYyxRQUFkLENBQXVCLGNBQXZCLEVBQXVDLEVBQXZDLENBQTBDLFVBQTFDLENBQWQ7QUFDSCxhQUZELE1BRU87QUFDSCw4QkFBYyxFQUFFLFdBQUYsQ0FBYyxRQUFkLENBQXVCLGNBQXZCLEVBQXVDLEVBQXZDLENBQTBDLGFBQWEsRUFBRSxPQUFGLENBQVUsWUFBakUsQ0FBZDtBQUNIOztBQUVELGdCQUFJLEVBQUUsT0FBRixDQUFVLEdBQVYsS0FBa0IsSUFBdEIsRUFBNEI7QUFDeEIsb0JBQUksWUFBWSxDQUFaLENBQUosRUFBb0I7QUFDaEIsaUNBQWEsQ0FBQyxFQUFFLFdBQUYsQ0FBYyxLQUFkLEtBQXdCLFlBQVksQ0FBWixFQUFlLFVBQXZDLEdBQW9ELFlBQVksS0FBWixFQUFyRCxJQUE0RSxDQUFDLENBQTFGO0FBQ0gsaUJBRkQsTUFFTztBQUNILGlDQUFjLENBQWQ7QUFDSDtBQUNKLGFBTkQsTUFNTztBQUNILDZCQUFhLFlBQVksQ0FBWixJQUFpQixZQUFZLENBQVosRUFBZSxVQUFmLEdBQTRCLENBQUMsQ0FBOUMsR0FBa0QsQ0FBL0Q7QUFDSDs7QUFFRCxnQkFBSSxFQUFFLE9BQUYsQ0FBVSxVQUFWLEtBQXlCLElBQTdCLEVBQW1DO0FBQy9CLG9CQUFJLEVBQUUsVUFBRixJQUFnQixFQUFFLE9BQUYsQ0FBVSxZQUExQixJQUEwQyxFQUFFLE9BQUYsQ0FBVSxRQUFWLEtBQXVCLEtBQXJFLEVBQTRFO0FBQ3hFLGtDQUFjLEVBQUUsV0FBRixDQUFjLFFBQWQsQ0FBdUIsY0FBdkIsRUFBdUMsRUFBdkMsQ0FBMEMsVUFBMUMsQ0FBZDtBQUNILGlCQUZELE1BRU87QUFDSCxrQ0FBYyxFQUFFLFdBQUYsQ0FBYyxRQUFkLENBQXVCLGNBQXZCLEVBQXVDLEVBQXZDLENBQTBDLGFBQWEsRUFBRSxPQUFGLENBQVUsWUFBdkIsR0FBc0MsQ0FBaEYsQ0FBZDtBQUNIOztBQUVELG9CQUFJLEVBQUUsT0FBRixDQUFVLEdBQVYsS0FBa0IsSUFBdEIsRUFBNEI7QUFDeEIsd0JBQUksWUFBWSxDQUFaLENBQUosRUFBb0I7QUFDaEIscUNBQWEsQ0FBQyxFQUFFLFdBQUYsQ0FBYyxLQUFkLEtBQXdCLFlBQVksQ0FBWixFQUFlLFVBQXZDLEdBQW9ELFlBQVksS0FBWixFQUFyRCxJQUE0RSxDQUFDLENBQTFGO0FBQ0gscUJBRkQsTUFFTztBQUNILHFDQUFjLENBQWQ7QUFDSDtBQUNKLGlCQU5ELE1BTU87QUFDSCxpQ0FBYSxZQUFZLENBQVosSUFBaUIsWUFBWSxDQUFaLEVBQWUsVUFBZixHQUE0QixDQUFDLENBQTlDLEdBQWtELENBQS9EO0FBQ0g7O0FBRUQsOEJBQWMsQ0FBQyxFQUFFLEtBQUYsQ0FBUSxLQUFSLEtBQWtCLFlBQVksVUFBWixFQUFuQixJQUErQyxDQUE3RDtBQUNIO0FBQ0o7O0FBRUQsZUFBTyxVQUFQO0FBRUgsS0E3RkQ7O0FBK0ZBLFVBQU0sU0FBTixDQUFnQixTQUFoQixHQUE0QixNQUFNLFNBQU4sQ0FBZ0IsY0FBaEIsR0FBaUMsVUFBUyxNQUFULEVBQWlCOztBQUUxRSxZQUFJLElBQUksSUFBUjs7QUFFQSxlQUFPLEVBQUUsT0FBRixDQUFVLE1BQVYsQ0FBUDtBQUVILEtBTkQ7O0FBUUEsVUFBTSxTQUFOLENBQWdCLG1CQUFoQixHQUFzQyxZQUFXOztBQUU3QyxZQUFJLElBQUksSUFBUjtBQUFBLFlBQ0ksYUFBYSxDQURqQjtBQUFBLFlBRUksVUFBVSxDQUZkO0FBQUEsWUFHSSxVQUFVLEVBSGQ7QUFBQSxZQUlJLEdBSko7O0FBTUEsWUFBSSxFQUFFLE9BQUYsQ0FBVSxRQUFWLEtBQXVCLEtBQTNCLEVBQWtDO0FBQzlCLGtCQUFNLEVBQUUsVUFBUjtBQUNILFNBRkQsTUFFTztBQUNILHlCQUFhLEVBQUUsT0FBRixDQUFVLGNBQVYsR0FBMkIsQ0FBQyxDQUF6QztBQUNBLHNCQUFVLEVBQUUsT0FBRixDQUFVLGNBQVYsR0FBMkIsQ0FBQyxDQUF0QztBQUNBLGtCQUFNLEVBQUUsVUFBRixHQUFlLENBQXJCO0FBQ0g7O0FBRUQsZUFBTyxhQUFhLEdBQXBCLEVBQXlCO0FBQ3JCLG9CQUFRLElBQVIsQ0FBYSxVQUFiO0FBQ0EseUJBQWEsVUFBVSxFQUFFLE9BQUYsQ0FBVSxjQUFqQztBQUNBLHVCQUFXLEVBQUUsT0FBRixDQUFVLGNBQVYsSUFBNEIsRUFBRSxPQUFGLENBQVUsWUFBdEMsR0FBcUQsRUFBRSxPQUFGLENBQVUsY0FBL0QsR0FBZ0YsRUFBRSxPQUFGLENBQVUsWUFBckc7QUFDSDs7QUFFRCxlQUFPLE9BQVA7QUFFSCxLQXhCRDs7QUEwQkEsVUFBTSxTQUFOLENBQWdCLFFBQWhCLEdBQTJCLFlBQVc7O0FBRWxDLGVBQU8sSUFBUDtBQUVILEtBSkQ7O0FBTUEsVUFBTSxTQUFOLENBQWdCLGFBQWhCLEdBQWdDLFlBQVc7O0FBRXZDLFlBQUksSUFBSSxJQUFSO0FBQUEsWUFDSSxlQURKO0FBQUEsWUFDcUIsV0FEckI7QUFBQSxZQUNrQyxZQURsQzs7QUFHQSx1QkFBZSxFQUFFLE9BQUYsQ0FBVSxVQUFWLEtBQXlCLElBQXpCLEdBQWdDLEVBQUUsVUFBRixHQUFlLEtBQUssS0FBTCxDQUFXLEVBQUUsT0FBRixDQUFVLFlBQVYsR0FBeUIsQ0FBcEMsQ0FBL0MsR0FBd0YsQ0FBdkc7O0FBRUEsWUFBSSxFQUFFLE9BQUYsQ0FBVSxZQUFWLEtBQTJCLElBQS9CLEVBQXFDO0FBQ2pDLGNBQUUsV0FBRixDQUFjLElBQWQsQ0FBbUIsY0FBbkIsRUFBbUMsSUFBbkMsQ0FBd0MsVUFBUyxLQUFULEVBQWdCLEtBQWhCLEVBQXVCO0FBQzNELG9CQUFJLE1BQU0sVUFBTixHQUFtQixZQUFuQixHQUFtQyxFQUFFLEtBQUYsRUFBUyxVQUFULEtBQXdCLENBQTNELEdBQWlFLEVBQUUsU0FBRixHQUFjLENBQUMsQ0FBcEYsRUFBd0Y7QUFDcEYsa0NBQWMsS0FBZDtBQUNBLDJCQUFPLEtBQVA7QUFDSDtBQUNKLGFBTEQ7O0FBT0EsOEJBQWtCLEtBQUssR0FBTCxDQUFTLEVBQUUsV0FBRixFQUFlLElBQWYsQ0FBb0Isa0JBQXBCLElBQTBDLEVBQUUsWUFBckQsS0FBc0UsQ0FBeEY7O0FBRUEsbUJBQU8sZUFBUDtBQUVILFNBWkQsTUFZTztBQUNILG1CQUFPLEVBQUUsT0FBRixDQUFVLGNBQWpCO0FBQ0g7QUFFSixLQXZCRDs7QUF5QkEsVUFBTSxTQUFOLENBQWdCLElBQWhCLEdBQXVCLE1BQU0sU0FBTixDQUFnQixTQUFoQixHQUE0QixVQUFTLEtBQVQsRUFBZ0IsV0FBaEIsRUFBNkI7O0FBRTVFLFlBQUksSUFBSSxJQUFSOztBQUVBLFVBQUUsV0FBRixDQUFjO0FBQ1Ysa0JBQU07QUFDRix5QkFBUyxPQURQO0FBRUYsdUJBQU8sU0FBUyxLQUFUO0FBRkw7QUFESSxTQUFkLEVBS0csV0FMSDtBQU9ILEtBWEQ7O0FBYUEsVUFBTSxTQUFOLENBQWdCLElBQWhCLEdBQXVCLFVBQVMsUUFBVCxFQUFtQjs7QUFFdEMsWUFBSSxJQUFJLElBQVI7O0FBRUEsWUFBSSxDQUFDLEVBQUUsRUFBRSxPQUFKLEVBQWEsUUFBYixDQUFzQixtQkFBdEIsQ0FBTCxFQUFpRDs7QUFFN0MsY0FBRSxFQUFFLE9BQUosRUFBYSxRQUFiLENBQXNCLG1CQUF0Qjs7QUFFQSxjQUFFLFNBQUY7QUFDQSxjQUFFLFFBQUY7QUFDQSxjQUFFLFFBQUY7QUFDQSxjQUFFLFNBQUY7QUFDQSxjQUFFLFVBQUY7QUFDQSxjQUFFLGdCQUFGO0FBQ0EsY0FBRSxZQUFGO0FBQ0EsY0FBRSxVQUFGO0FBQ0EsY0FBRSxlQUFGLENBQWtCLElBQWxCO0FBQ0EsY0FBRSxZQUFGO0FBRUg7O0FBRUQsWUFBSSxRQUFKLEVBQWM7QUFDVixjQUFFLE9BQUYsQ0FBVSxPQUFWLENBQWtCLE1BQWxCLEVBQTBCLENBQUMsQ0FBRCxDQUExQjtBQUNIOztBQUVELFlBQUksRUFBRSxPQUFGLENBQVUsYUFBVixLQUE0QixJQUFoQyxFQUFzQztBQUNsQyxjQUFFLE9BQUY7QUFDSDs7QUFFRCxZQUFLLEVBQUUsT0FBRixDQUFVLFFBQWYsRUFBMEI7O0FBRXRCLGNBQUUsTUFBRixHQUFXLEtBQVg7QUFDQSxjQUFFLFFBQUY7QUFFSDtBQUVKLEtBcENEOztBQXNDQSxVQUFNLFNBQU4sQ0FBZ0IsT0FBaEIsR0FBMEIsWUFBVztBQUNqQyxZQUFJLElBQUksSUFBUjtBQUNBLFVBQUUsT0FBRixDQUFVLEdBQVYsQ0FBYyxFQUFFLFdBQUYsQ0FBYyxJQUFkLENBQW1CLGVBQW5CLENBQWQsRUFBbUQsSUFBbkQsQ0FBd0Q7QUFDcEQsMkJBQWUsTUFEcUM7QUFFcEQsd0JBQVk7QUFGd0MsU0FBeEQsRUFHRyxJQUhILENBR1EsMEJBSFIsRUFHb0MsSUFIcEMsQ0FHeUM7QUFDckMsd0JBQVk7QUFEeUIsU0FIekM7O0FBT0EsVUFBRSxXQUFGLENBQWMsSUFBZCxDQUFtQixNQUFuQixFQUEyQixTQUEzQjs7QUFFQSxVQUFFLE9BQUYsQ0FBVSxHQUFWLENBQWMsRUFBRSxXQUFGLENBQWMsSUFBZCxDQUFtQixlQUFuQixDQUFkLEVBQW1ELElBQW5ELENBQXdELFVBQVMsQ0FBVCxFQUFZO0FBQ2hFLGNBQUUsSUFBRixFQUFRLElBQVIsQ0FBYTtBQUNULHdCQUFRLFFBREM7QUFFVCxvQ0FBb0IsZ0JBQWdCLEVBQUUsV0FBbEIsR0FBZ0MsQ0FBaEMsR0FBb0M7QUFGL0MsYUFBYjtBQUlILFNBTEQ7O0FBT0EsWUFBSSxFQUFFLEtBQUYsS0FBWSxJQUFoQixFQUFzQjtBQUNsQixjQUFFLEtBQUYsQ0FBUSxJQUFSLENBQWEsTUFBYixFQUFxQixTQUFyQixFQUFnQyxJQUFoQyxDQUFxQyxJQUFyQyxFQUEyQyxJQUEzQyxDQUFnRCxVQUFTLENBQVQsRUFBWTtBQUN4RCxrQkFBRSxJQUFGLEVBQVEsSUFBUixDQUFhO0FBQ1QsNEJBQVEsY0FEQztBQUVULHFDQUFpQixPQUZSO0FBR1QscUNBQWlCLGVBQWUsRUFBRSxXQUFqQixHQUErQixDQUEvQixHQUFtQyxFQUgzQztBQUlULDBCQUFNLGdCQUFnQixFQUFFLFdBQWxCLEdBQWdDLENBQWhDLEdBQW9DO0FBSmpDLGlCQUFiO0FBTUgsYUFQRCxFQVFLLEtBUkwsR0FRYSxJQVJiLENBUWtCLGVBUmxCLEVBUW1DLE1BUm5DLEVBUTJDLEdBUjNDLEdBU0ssSUFUTCxDQVNVLFFBVFYsRUFTb0IsSUFUcEIsQ0FTeUIsTUFUekIsRUFTaUMsUUFUakMsRUFTMkMsR0FUM0MsR0FVSyxPQVZMLENBVWEsS0FWYixFQVVvQixJQVZwQixDQVV5QixNQVZ6QixFQVVpQyxTQVZqQztBQVdIO0FBQ0QsVUFBRSxXQUFGO0FBRUgsS0FqQ0Q7O0FBbUNBLFVBQU0sU0FBTixDQUFnQixlQUFoQixHQUFrQyxZQUFXOztBQUV6QyxZQUFJLElBQUksSUFBUjs7QUFFQSxZQUFJLEVBQUUsT0FBRixDQUFVLE1BQVYsS0FBcUIsSUFBckIsSUFBNkIsRUFBRSxVQUFGLEdBQWUsRUFBRSxPQUFGLENBQVUsWUFBMUQsRUFBd0U7QUFDcEUsY0FBRSxVQUFGLENBQ0ksR0FESixDQUNRLGFBRFIsRUFFSSxFQUZKLENBRU8sYUFGUCxFQUVzQjtBQUNkLHlCQUFTO0FBREssYUFGdEIsRUFJTSxFQUFFLFdBSlI7QUFLQSxjQUFFLFVBQUYsQ0FDSSxHQURKLENBQ1EsYUFEUixFQUVJLEVBRkosQ0FFTyxhQUZQLEVBRXNCO0FBQ2QseUJBQVM7QUFESyxhQUZ0QixFQUlNLEVBQUUsV0FKUjtBQUtIO0FBRUosS0FqQkQ7O0FBbUJBLFVBQU0sU0FBTixDQUFnQixhQUFoQixHQUFnQyxZQUFXOztBQUV2QyxZQUFJLElBQUksSUFBUjs7QUFFQSxZQUFJLEVBQUUsT0FBRixDQUFVLElBQVYsS0FBbUIsSUFBbkIsSUFBMkIsRUFBRSxVQUFGLEdBQWUsRUFBRSxPQUFGLENBQVUsWUFBeEQsRUFBc0U7QUFDbEUsY0FBRSxJQUFGLEVBQVEsRUFBRSxLQUFWLEVBQWlCLEVBQWpCLENBQW9CLGFBQXBCLEVBQW1DO0FBQy9CLHlCQUFTO0FBRHNCLGFBQW5DLEVBRUcsRUFBRSxXQUZMO0FBR0g7O0FBRUQsWUFBSyxFQUFFLE9BQUYsQ0FBVSxJQUFWLEtBQW1CLElBQW5CLElBQTJCLEVBQUUsT0FBRixDQUFVLGdCQUFWLEtBQStCLElBQS9ELEVBQXNFOztBQUVsRSxjQUFFLElBQUYsRUFBUSxFQUFFLEtBQVYsRUFDSyxFQURMLENBQ1Esa0JBRFIsRUFDNEIsRUFBRSxLQUFGLENBQVEsRUFBRSxTQUFWLEVBQXFCLENBQXJCLEVBQXdCLElBQXhCLENBRDVCLEVBRUssRUFGTCxDQUVRLGtCQUZSLEVBRTRCLEVBQUUsS0FBRixDQUFRLEVBQUUsU0FBVixFQUFxQixDQUFyQixFQUF3QixLQUF4QixDQUY1QjtBQUlIO0FBRUosS0FsQkQ7O0FBb0JBLFVBQU0sU0FBTixDQUFnQixlQUFoQixHQUFrQyxZQUFXOztBQUV6QyxZQUFJLElBQUksSUFBUjs7QUFFQSxZQUFLLEVBQUUsT0FBRixDQUFVLFlBQWYsRUFBOEI7O0FBRTFCLGNBQUUsS0FBRixDQUFRLEVBQVIsQ0FBVyxrQkFBWCxFQUErQixFQUFFLEtBQUYsQ0FBUSxFQUFFLFNBQVYsRUFBcUIsQ0FBckIsRUFBd0IsSUFBeEIsQ0FBL0I7QUFDQSxjQUFFLEtBQUYsQ0FBUSxFQUFSLENBQVcsa0JBQVgsRUFBK0IsRUFBRSxLQUFGLENBQVEsRUFBRSxTQUFWLEVBQXFCLENBQXJCLEVBQXdCLEtBQXhCLENBQS9CO0FBRUg7QUFFSixLQVhEOztBQWFBLFVBQU0sU0FBTixDQUFnQixnQkFBaEIsR0FBbUMsWUFBVzs7QUFFMUMsWUFBSSxJQUFJLElBQVI7O0FBRUEsVUFBRSxlQUFGOztBQUVBLFVBQUUsYUFBRjtBQUNBLFVBQUUsZUFBRjs7QUFFQSxVQUFFLEtBQUYsQ0FBUSxFQUFSLENBQVcsa0NBQVgsRUFBK0M7QUFDM0Msb0JBQVE7QUFEbUMsU0FBL0MsRUFFRyxFQUFFLFlBRkw7QUFHQSxVQUFFLEtBQUYsQ0FBUSxFQUFSLENBQVcsaUNBQVgsRUFBOEM7QUFDMUMsb0JBQVE7QUFEa0MsU0FBOUMsRUFFRyxFQUFFLFlBRkw7QUFHQSxVQUFFLEtBQUYsQ0FBUSxFQUFSLENBQVcsOEJBQVgsRUFBMkM7QUFDdkMsb0JBQVE7QUFEK0IsU0FBM0MsRUFFRyxFQUFFLFlBRkw7QUFHQSxVQUFFLEtBQUYsQ0FBUSxFQUFSLENBQVcsb0NBQVgsRUFBaUQ7QUFDN0Msb0JBQVE7QUFEcUMsU0FBakQsRUFFRyxFQUFFLFlBRkw7O0FBSUEsVUFBRSxLQUFGLENBQVEsRUFBUixDQUFXLGFBQVgsRUFBMEIsRUFBRSxZQUE1Qjs7QUFFQSxVQUFFLFFBQUYsRUFBWSxFQUFaLENBQWUsRUFBRSxnQkFBakIsRUFBbUMsRUFBRSxLQUFGLENBQVEsRUFBRSxVQUFWLEVBQXNCLENBQXRCLENBQW5DOztBQUVBLFlBQUksRUFBRSxPQUFGLENBQVUsYUFBVixLQUE0QixJQUFoQyxFQUFzQztBQUNsQyxjQUFFLEtBQUYsQ0FBUSxFQUFSLENBQVcsZUFBWCxFQUE0QixFQUFFLFVBQTlCO0FBQ0g7O0FBRUQsWUFBSSxFQUFFLE9BQUYsQ0FBVSxhQUFWLEtBQTRCLElBQWhDLEVBQXNDO0FBQ2xDLGNBQUUsRUFBRSxXQUFKLEVBQWlCLFFBQWpCLEdBQTRCLEVBQTVCLENBQStCLGFBQS9CLEVBQThDLEVBQUUsYUFBaEQ7QUFDSDs7QUFFRCxVQUFFLE1BQUYsRUFBVSxFQUFWLENBQWEsbUNBQW1DLEVBQUUsV0FBbEQsRUFBK0QsRUFBRSxLQUFGLENBQVEsRUFBRSxpQkFBVixFQUE2QixDQUE3QixDQUEvRDs7QUFFQSxVQUFFLE1BQUYsRUFBVSxFQUFWLENBQWEsd0JBQXdCLEVBQUUsV0FBdkMsRUFBb0QsRUFBRSxLQUFGLENBQVEsRUFBRSxNQUFWLEVBQWtCLENBQWxCLENBQXBEOztBQUVBLFVBQUUsbUJBQUYsRUFBdUIsRUFBRSxXQUF6QixFQUFzQyxFQUF0QyxDQUF5QyxXQUF6QyxFQUFzRCxFQUFFLGNBQXhEOztBQUVBLFVBQUUsTUFBRixFQUFVLEVBQVYsQ0FBYSxzQkFBc0IsRUFBRSxXQUFyQyxFQUFrRCxFQUFFLFdBQXBEO0FBQ0EsVUFBRSxRQUFGLEVBQVksRUFBWixDQUFlLHVCQUF1QixFQUFFLFdBQXhDLEVBQXFELEVBQUUsV0FBdkQ7QUFFSCxLQTNDRDs7QUE2Q0EsVUFBTSxTQUFOLENBQWdCLE1BQWhCLEdBQXlCLFlBQVc7O0FBRWhDLFlBQUksSUFBSSxJQUFSOztBQUVBLFlBQUksRUFBRSxPQUFGLENBQVUsTUFBVixLQUFxQixJQUFyQixJQUE2QixFQUFFLFVBQUYsR0FBZSxFQUFFLE9BQUYsQ0FBVSxZQUExRCxFQUF3RTs7QUFFcEUsY0FBRSxVQUFGLENBQWEsSUFBYjtBQUNBLGNBQUUsVUFBRixDQUFhLElBQWI7QUFFSDs7QUFFRCxZQUFJLEVBQUUsT0FBRixDQUFVLElBQVYsS0FBbUIsSUFBbkIsSUFBMkIsRUFBRSxVQUFGLEdBQWUsRUFBRSxPQUFGLENBQVUsWUFBeEQsRUFBc0U7O0FBRWxFLGNBQUUsS0FBRixDQUFRLElBQVI7QUFFSDtBQUVKLEtBakJEOztBQW1CQSxVQUFNLFNBQU4sQ0FBZ0IsVUFBaEIsR0FBNkIsVUFBUyxLQUFULEVBQWdCOztBQUV6QyxZQUFJLElBQUksSUFBUjtBQUNDO0FBQ0QsWUFBRyxDQUFDLE1BQU0sTUFBTixDQUFhLE9BQWIsQ0FBcUIsS0FBckIsQ0FBMkIsdUJBQTNCLENBQUosRUFBeUQ7QUFDckQsZ0JBQUksTUFBTSxPQUFOLEtBQWtCLEVBQWxCLElBQXdCLEVBQUUsT0FBRixDQUFVLGFBQVYsS0FBNEIsSUFBeEQsRUFBOEQ7QUFDMUQsa0JBQUUsV0FBRixDQUFjO0FBQ1YsMEJBQU07QUFDRixpQ0FBUyxFQUFFLE9BQUYsQ0FBVSxHQUFWLEtBQWtCLElBQWxCLEdBQXlCLE1BQXpCLEdBQW1DO0FBRDFDO0FBREksaUJBQWQ7QUFLSCxhQU5ELE1BTU8sSUFBSSxNQUFNLE9BQU4sS0FBa0IsRUFBbEIsSUFBd0IsRUFBRSxPQUFGLENBQVUsYUFBVixLQUE0QixJQUF4RCxFQUE4RDtBQUNqRSxrQkFBRSxXQUFGLENBQWM7QUFDViwwQkFBTTtBQUNGLGlDQUFTLEVBQUUsT0FBRixDQUFVLEdBQVYsS0FBa0IsSUFBbEIsR0FBeUIsVUFBekIsR0FBc0M7QUFEN0M7QUFESSxpQkFBZDtBQUtIO0FBQ0o7QUFFSixLQXBCRDs7QUFzQkEsVUFBTSxTQUFOLENBQWdCLFFBQWhCLEdBQTJCLFlBQVc7O0FBRWxDLFlBQUksSUFBSSxJQUFSO0FBQUEsWUFDSSxTQURKO0FBQUEsWUFDZSxVQURmO0FBQUEsWUFDMkIsVUFEM0I7QUFBQSxZQUN1QyxRQUR2Qzs7QUFHQSxpQkFBUyxVQUFULENBQW9CLFdBQXBCLEVBQWlDOztBQUU3QixjQUFFLGdCQUFGLEVBQW9CLFdBQXBCLEVBQWlDLElBQWpDLENBQXNDLFlBQVc7O0FBRTdDLG9CQUFJLFFBQVEsRUFBRSxJQUFGLENBQVo7QUFBQSxvQkFDSSxjQUFjLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxXQUFiLENBRGxCO0FBQUEsb0JBRUksY0FBYyxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FGbEI7O0FBSUEsNEJBQVksTUFBWixHQUFxQixZQUFXOztBQUU1QiwwQkFDSyxPQURMLENBQ2EsRUFBRSxTQUFTLENBQVgsRUFEYixFQUM2QixHQUQ3QixFQUNrQyxZQUFXO0FBQ3JDLDhCQUNLLElBREwsQ0FDVSxLQURWLEVBQ2lCLFdBRGpCLEVBRUssT0FGTCxDQUVhLEVBQUUsU0FBUyxDQUFYLEVBRmIsRUFFNkIsR0FGN0IsRUFFa0MsWUFBVztBQUNyQyxrQ0FDSyxVQURMLENBQ2dCLFdBRGhCLEVBRUssV0FGTCxDQUVpQixlQUZqQjtBQUdILHlCQU5MO0FBT0EsMEJBQUUsT0FBRixDQUFVLE9BQVYsQ0FBa0IsWUFBbEIsRUFBZ0MsQ0FBQyxDQUFELEVBQUksS0FBSixFQUFXLFdBQVgsQ0FBaEM7QUFDSCxxQkFWTDtBQVlILGlCQWREOztBQWdCQSw0QkFBWSxPQUFaLEdBQXNCLFlBQVc7O0FBRTdCLDBCQUNLLFVBREwsQ0FDaUIsV0FEakIsRUFFSyxXQUZMLENBRWtCLGVBRmxCLEVBR0ssUUFITCxDQUdlLHNCQUhmOztBQUtBLHNCQUFFLE9BQUYsQ0FBVSxPQUFWLENBQWtCLGVBQWxCLEVBQW1DLENBQUUsQ0FBRixFQUFLLEtBQUwsRUFBWSxXQUFaLENBQW5DO0FBRUgsaUJBVEQ7O0FBV0EsNEJBQVksR0FBWixHQUFrQixXQUFsQjtBQUVILGFBbkNEO0FBcUNIOztBQUVELFlBQUksRUFBRSxPQUFGLENBQVUsVUFBVixLQUF5QixJQUE3QixFQUFtQztBQUMvQixnQkFBSSxFQUFFLE9BQUYsQ0FBVSxRQUFWLEtBQXVCLElBQTNCLEVBQWlDO0FBQzdCLDZCQUFhLEVBQUUsWUFBRixJQUFrQixFQUFFLE9BQUYsQ0FBVSxZQUFWLEdBQXlCLENBQXpCLEdBQTZCLENBQS9DLENBQWI7QUFDQSwyQkFBVyxhQUFhLEVBQUUsT0FBRixDQUFVLFlBQXZCLEdBQXNDLENBQWpEO0FBQ0gsYUFIRCxNQUdPO0FBQ0gsNkJBQWEsS0FBSyxHQUFMLENBQVMsQ0FBVCxFQUFZLEVBQUUsWUFBRixJQUFrQixFQUFFLE9BQUYsQ0FBVSxZQUFWLEdBQXlCLENBQXpCLEdBQTZCLENBQS9DLENBQVosQ0FBYjtBQUNBLDJCQUFXLEtBQUssRUFBRSxPQUFGLENBQVUsWUFBVixHQUF5QixDQUF6QixHQUE2QixDQUFsQyxJQUF1QyxFQUFFLFlBQXBEO0FBQ0g7QUFDSixTQVJELE1BUU87QUFDSCx5QkFBYSxFQUFFLE9BQUYsQ0FBVSxRQUFWLEdBQXFCLEVBQUUsT0FBRixDQUFVLFlBQVYsR0FBeUIsRUFBRSxZQUFoRCxHQUErRCxFQUFFLFlBQTlFO0FBQ0EsdUJBQVcsS0FBSyxJQUFMLENBQVUsYUFBYSxFQUFFLE9BQUYsQ0FBVSxZQUFqQyxDQUFYO0FBQ0EsZ0JBQUksRUFBRSxPQUFGLENBQVUsSUFBVixLQUFtQixJQUF2QixFQUE2QjtBQUN6QixvQkFBSSxhQUFhLENBQWpCLEVBQW9CO0FBQ3BCLG9CQUFJLFlBQVksRUFBRSxVQUFsQixFQUE4QjtBQUNqQztBQUNKOztBQUVELG9CQUFZLEVBQUUsT0FBRixDQUFVLElBQVYsQ0FBZSxjQUFmLEVBQStCLEtBQS9CLENBQXFDLFVBQXJDLEVBQWlELFFBQWpELENBQVo7QUFDQSxtQkFBVyxTQUFYOztBQUVBLFlBQUksRUFBRSxVQUFGLElBQWdCLEVBQUUsT0FBRixDQUFVLFlBQTlCLEVBQTRDO0FBQ3hDLHlCQUFhLEVBQUUsT0FBRixDQUFVLElBQVYsQ0FBZSxjQUFmLENBQWI7QUFDQSx1QkFBVyxVQUFYO0FBQ0gsU0FIRCxNQUlBLElBQUksRUFBRSxZQUFGLElBQWtCLEVBQUUsVUFBRixHQUFlLEVBQUUsT0FBRixDQUFVLFlBQS9DLEVBQTZEO0FBQ3pELHlCQUFhLEVBQUUsT0FBRixDQUFVLElBQVYsQ0FBZSxlQUFmLEVBQWdDLEtBQWhDLENBQXNDLENBQXRDLEVBQXlDLEVBQUUsT0FBRixDQUFVLFlBQW5ELENBQWI7QUFDQSx1QkFBVyxVQUFYO0FBQ0gsU0FIRCxNQUdPLElBQUksRUFBRSxZQUFGLEtBQW1CLENBQXZCLEVBQTBCO0FBQzdCLHlCQUFhLEVBQUUsT0FBRixDQUFVLElBQVYsQ0FBZSxlQUFmLEVBQWdDLEtBQWhDLENBQXNDLEVBQUUsT0FBRixDQUFVLFlBQVYsR0FBeUIsQ0FBQyxDQUFoRSxDQUFiO0FBQ0EsdUJBQVcsVUFBWDtBQUNIO0FBRUosS0E5RUQ7O0FBZ0ZBLFVBQU0sU0FBTixDQUFnQixVQUFoQixHQUE2QixZQUFXOztBQUVwQyxZQUFJLElBQUksSUFBUjs7QUFFQSxVQUFFLFdBQUY7O0FBRUEsVUFBRSxXQUFGLENBQWMsR0FBZCxDQUFrQjtBQUNkLHFCQUFTO0FBREssU0FBbEI7O0FBSUEsVUFBRSxPQUFGLENBQVUsV0FBVixDQUFzQixlQUF0Qjs7QUFFQSxVQUFFLE1BQUY7O0FBRUEsWUFBSSxFQUFFLE9BQUYsQ0FBVSxRQUFWLEtBQXVCLGFBQTNCLEVBQTBDO0FBQ3RDLGNBQUUsbUJBQUY7QUFDSDtBQUVKLEtBbEJEOztBQW9CQSxVQUFNLFNBQU4sQ0FBZ0IsSUFBaEIsR0FBdUIsTUFBTSxTQUFOLENBQWdCLFNBQWhCLEdBQTRCLFlBQVc7O0FBRTFELFlBQUksSUFBSSxJQUFSOztBQUVBLFVBQUUsV0FBRixDQUFjO0FBQ1Ysa0JBQU07QUFDRix5QkFBUztBQURQO0FBREksU0FBZDtBQU1ILEtBVkQ7O0FBWUEsVUFBTSxTQUFOLENBQWdCLGlCQUFoQixHQUFvQyxZQUFXOztBQUUzQyxZQUFJLElBQUksSUFBUjs7QUFFQSxVQUFFLGVBQUY7QUFDQSxVQUFFLFdBQUY7QUFFSCxLQVBEOztBQVNBLFVBQU0sU0FBTixDQUFnQixLQUFoQixHQUF3QixNQUFNLFNBQU4sQ0FBZ0IsVUFBaEIsR0FBNkIsWUFBVzs7QUFFNUQsWUFBSSxJQUFJLElBQVI7O0FBRUEsVUFBRSxhQUFGO0FBQ0EsVUFBRSxNQUFGLEdBQVcsSUFBWDtBQUVILEtBUEQ7O0FBU0EsVUFBTSxTQUFOLENBQWdCLElBQWhCLEdBQXVCLE1BQU0sU0FBTixDQUFnQixTQUFoQixHQUE0QixZQUFXOztBQUUxRCxZQUFJLElBQUksSUFBUjs7QUFFQSxVQUFFLFFBQUY7QUFDQSxVQUFFLE9BQUYsQ0FBVSxRQUFWLEdBQXFCLElBQXJCO0FBQ0EsVUFBRSxNQUFGLEdBQVcsS0FBWDtBQUNBLFVBQUUsUUFBRixHQUFhLEtBQWI7QUFDQSxVQUFFLFdBQUYsR0FBZ0IsS0FBaEI7QUFFSCxLQVZEOztBQVlBLFVBQU0sU0FBTixDQUFnQixTQUFoQixHQUE0QixVQUFTLEtBQVQsRUFBZ0I7O0FBRXhDLFlBQUksSUFBSSxJQUFSOztBQUVBLFlBQUksQ0FBQyxFQUFFLFNBQVAsRUFBbUI7O0FBRWYsY0FBRSxPQUFGLENBQVUsT0FBVixDQUFrQixhQUFsQixFQUFpQyxDQUFDLENBQUQsRUFBSSxLQUFKLENBQWpDOztBQUVBLGNBQUUsU0FBRixHQUFjLEtBQWQ7O0FBRUEsY0FBRSxXQUFGOztBQUVBLGNBQUUsU0FBRixHQUFjLElBQWQ7O0FBRUEsZ0JBQUssRUFBRSxPQUFGLENBQVUsUUFBZixFQUEwQjtBQUN0QixrQkFBRSxRQUFGO0FBQ0g7O0FBRUQsZ0JBQUksRUFBRSxPQUFGLENBQVUsYUFBVixLQUE0QixJQUFoQyxFQUFzQztBQUNsQyxrQkFBRSxPQUFGO0FBQ0g7QUFFSjtBQUVKLEtBeEJEOztBQTBCQSxVQUFNLFNBQU4sQ0FBZ0IsSUFBaEIsR0FBdUIsTUFBTSxTQUFOLENBQWdCLFNBQWhCLEdBQTRCLFlBQVc7O0FBRTFELFlBQUksSUFBSSxJQUFSOztBQUVBLFVBQUUsV0FBRixDQUFjO0FBQ1Ysa0JBQU07QUFDRix5QkFBUztBQURQO0FBREksU0FBZDtBQU1ILEtBVkQ7O0FBWUEsVUFBTSxTQUFOLENBQWdCLGNBQWhCLEdBQWlDLFVBQVMsS0FBVCxFQUFnQjs7QUFFN0MsY0FBTSxjQUFOO0FBRUgsS0FKRDs7QUFNQSxVQUFNLFNBQU4sQ0FBZ0IsbUJBQWhCLEdBQXNDLFVBQVUsUUFBVixFQUFxQjs7QUFFdkQsbUJBQVcsWUFBWSxDQUF2Qjs7QUFFQSxZQUFJLElBQUksSUFBUjtBQUFBLFlBQ0ksY0FBYyxFQUFHLGdCQUFILEVBQXFCLEVBQUUsT0FBdkIsQ0FEbEI7QUFBQSxZQUVJLEtBRko7QUFBQSxZQUdJLFdBSEo7QUFBQSxZQUlJLFdBSko7O0FBTUEsWUFBSyxZQUFZLE1BQWpCLEVBQTBCOztBQUV0QixvQkFBUSxZQUFZLEtBQVosRUFBUjtBQUNBLDBCQUFjLE1BQU0sSUFBTixDQUFXLFdBQVgsQ0FBZDtBQUNBLDBCQUFjLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFkOztBQUVBLHdCQUFZLE1BQVosR0FBcUIsWUFBVzs7QUFFNUIsc0JBQ0ssSUFETCxDQUNXLEtBRFgsRUFDa0IsV0FEbEIsRUFFSyxVQUZMLENBRWdCLFdBRmhCLEVBR0ssV0FITCxDQUdpQixlQUhqQjs7QUFLQSxvQkFBSyxFQUFFLE9BQUYsQ0FBVSxjQUFWLEtBQTZCLElBQWxDLEVBQXlDO0FBQ3JDLHNCQUFFLFdBQUY7QUFDSDs7QUFFRCxrQkFBRSxPQUFGLENBQVUsT0FBVixDQUFrQixZQUFsQixFQUFnQyxDQUFFLENBQUYsRUFBSyxLQUFMLEVBQVksV0FBWixDQUFoQztBQUNBLGtCQUFFLG1CQUFGO0FBRUgsYUFkRDs7QUFnQkEsd0JBQVksT0FBWixHQUFzQixZQUFXOztBQUU3QixvQkFBSyxXQUFXLENBQWhCLEVBQW9COztBQUVoQjs7Ozs7QUFLQSwrQkFBWSxZQUFXO0FBQ25CLDBCQUFFLG1CQUFGLENBQXVCLFdBQVcsQ0FBbEM7QUFDSCxxQkFGRCxFQUVHLEdBRkg7QUFJSCxpQkFYRCxNQVdPOztBQUVILDBCQUNLLFVBREwsQ0FDaUIsV0FEakIsRUFFSyxXQUZMLENBRWtCLGVBRmxCLEVBR0ssUUFITCxDQUdlLHNCQUhmOztBQUtBLHNCQUFFLE9BQUYsQ0FBVSxPQUFWLENBQWtCLGVBQWxCLEVBQW1DLENBQUUsQ0FBRixFQUFLLEtBQUwsRUFBWSxXQUFaLENBQW5DOztBQUVBLHNCQUFFLG1CQUFGO0FBRUg7QUFFSixhQTFCRDs7QUE0QkEsd0JBQVksR0FBWixHQUFrQixXQUFsQjtBQUVILFNBcERELE1Bb0RPOztBQUVILGNBQUUsT0FBRixDQUFVLE9BQVYsQ0FBa0IsaUJBQWxCLEVBQXFDLENBQUUsQ0FBRixDQUFyQztBQUVIO0FBRUosS0FwRUQ7O0FBc0VBLFVBQU0sU0FBTixDQUFnQixPQUFoQixHQUEwQixVQUFVLFlBQVYsRUFBeUI7O0FBRS9DLFlBQUksSUFBSSxJQUFSO0FBQUEsWUFBYyxZQUFkO0FBQUEsWUFBNEIsZ0JBQTVCOztBQUVBLDJCQUFtQixFQUFFLFVBQUYsR0FBZSxFQUFFLE9BQUYsQ0FBVSxZQUE1Qzs7QUFFQTtBQUNBO0FBQ0EsWUFBSSxDQUFDLEVBQUUsT0FBRixDQUFVLFFBQVgsSUFBeUIsRUFBRSxZQUFGLEdBQWlCLGdCQUE5QyxFQUFrRTtBQUM5RCxjQUFFLFlBQUYsR0FBaUIsZ0JBQWpCO0FBQ0g7O0FBRUQ7QUFDQSxZQUFLLEVBQUUsVUFBRixJQUFnQixFQUFFLE9BQUYsQ0FBVSxZQUEvQixFQUE4QztBQUMxQyxjQUFFLFlBQUYsR0FBaUIsQ0FBakI7QUFFSDs7QUFFRCx1QkFBZSxFQUFFLFlBQWpCOztBQUVBLFVBQUUsT0FBRixDQUFVLElBQVY7O0FBRUEsVUFBRSxNQUFGLENBQVMsQ0FBVCxFQUFZLEVBQUUsUUFBZCxFQUF3QixFQUFFLGNBQWMsWUFBaEIsRUFBeEI7O0FBRUEsVUFBRSxJQUFGOztBQUVBLFlBQUksQ0FBQyxZQUFMLEVBQW9COztBQUVoQixjQUFFLFdBQUYsQ0FBYztBQUNWLHNCQUFNO0FBQ0YsNkJBQVMsT0FEUDtBQUVGLDJCQUFPO0FBRkw7QUFESSxhQUFkLEVBS0csS0FMSDtBQU9IO0FBRUosS0FyQ0Q7O0FBdUNBLFVBQU0sU0FBTixDQUFnQixtQkFBaEIsR0FBc0MsWUFBVzs7QUFFN0MsWUFBSSxJQUFJLElBQVI7QUFBQSxZQUFjLFVBQWQ7QUFBQSxZQUEwQixpQkFBMUI7QUFBQSxZQUE2QyxDQUE3QztBQUFBLFlBQ0kscUJBQXFCLEVBQUUsT0FBRixDQUFVLFVBQVYsSUFBd0IsSUFEakQ7O0FBR0EsWUFBSyxFQUFFLElBQUYsQ0FBTyxrQkFBUCxNQUErQixPQUEvQixJQUEwQyxtQkFBbUIsTUFBbEUsRUFBMkU7O0FBRXZFLGNBQUUsU0FBRixHQUFjLEVBQUUsT0FBRixDQUFVLFNBQVYsSUFBdUIsUUFBckM7O0FBRUEsaUJBQU0sVUFBTixJQUFvQixrQkFBcEIsRUFBeUM7O0FBRXJDLG9CQUFJLEVBQUUsV0FBRixDQUFjLE1BQWQsR0FBcUIsQ0FBekI7QUFDQSxvQ0FBb0IsbUJBQW1CLFVBQW5CLEVBQStCLFVBQW5EOztBQUVBLG9CQUFJLG1CQUFtQixjQUFuQixDQUFrQyxVQUFsQyxDQUFKLEVBQW1EOztBQUUvQztBQUNBO0FBQ0EsMkJBQU8sS0FBSyxDQUFaLEVBQWdCO0FBQ1osNEJBQUksRUFBRSxXQUFGLENBQWMsQ0FBZCxLQUFvQixFQUFFLFdBQUYsQ0FBYyxDQUFkLE1BQXFCLGlCQUE3QyxFQUFpRTtBQUM3RCw4QkFBRSxXQUFGLENBQWMsTUFBZCxDQUFxQixDQUFyQixFQUF1QixDQUF2QjtBQUNIO0FBQ0Q7QUFDSDs7QUFFRCxzQkFBRSxXQUFGLENBQWMsSUFBZCxDQUFtQixpQkFBbkI7QUFDQSxzQkFBRSxrQkFBRixDQUFxQixpQkFBckIsSUFBMEMsbUJBQW1CLFVBQW5CLEVBQStCLFFBQXpFO0FBRUg7QUFFSjs7QUFFRCxjQUFFLFdBQUYsQ0FBYyxJQUFkLENBQW1CLFVBQVMsQ0FBVCxFQUFZLENBQVosRUFBZTtBQUM5Qix1QkFBUyxFQUFFLE9BQUYsQ0FBVSxXQUFaLEdBQTRCLElBQUUsQ0FBOUIsR0FBa0MsSUFBRSxDQUEzQztBQUNILGFBRkQ7QUFJSDtBQUVKLEtBdENEOztBQXdDQSxVQUFNLFNBQU4sQ0FBZ0IsTUFBaEIsR0FBeUIsWUFBVzs7QUFFaEMsWUFBSSxJQUFJLElBQVI7O0FBRUEsVUFBRSxPQUFGLEdBQ0ksRUFBRSxXQUFGLENBQ0ssUUFETCxDQUNjLEVBQUUsT0FBRixDQUFVLEtBRHhCLEVBRUssUUFGTCxDQUVjLGFBRmQsQ0FESjs7QUFLQSxVQUFFLFVBQUYsR0FBZSxFQUFFLE9BQUYsQ0FBVSxNQUF6Qjs7QUFFQSxZQUFJLEVBQUUsWUFBRixJQUFrQixFQUFFLFVBQXBCLElBQWtDLEVBQUUsWUFBRixLQUFtQixDQUF6RCxFQUE0RDtBQUN4RCxjQUFFLFlBQUYsR0FBaUIsRUFBRSxZQUFGLEdBQWlCLEVBQUUsT0FBRixDQUFVLGNBQTVDO0FBQ0g7O0FBRUQsWUFBSSxFQUFFLFVBQUYsSUFBZ0IsRUFBRSxPQUFGLENBQVUsWUFBOUIsRUFBNEM7QUFDeEMsY0FBRSxZQUFGLEdBQWlCLENBQWpCO0FBQ0g7O0FBRUQsVUFBRSxtQkFBRjs7QUFFQSxVQUFFLFFBQUY7QUFDQSxVQUFFLGFBQUY7QUFDQSxVQUFFLFdBQUY7QUFDQSxVQUFFLFlBQUY7QUFDQSxVQUFFLGVBQUY7QUFDQSxVQUFFLFNBQUY7QUFDQSxVQUFFLFVBQUY7QUFDQSxVQUFFLGFBQUY7QUFDQSxVQUFFLGtCQUFGO0FBQ0EsVUFBRSxlQUFGOztBQUVBLFVBQUUsZUFBRixDQUFrQixLQUFsQixFQUF5QixJQUF6Qjs7QUFFQSxZQUFJLEVBQUUsT0FBRixDQUFVLGFBQVYsS0FBNEIsSUFBaEMsRUFBc0M7QUFDbEMsY0FBRSxFQUFFLFdBQUosRUFBaUIsUUFBakIsR0FBNEIsRUFBNUIsQ0FBK0IsYUFBL0IsRUFBOEMsRUFBRSxhQUFoRDtBQUNIOztBQUVELFVBQUUsZUFBRixDQUFrQixPQUFPLEVBQUUsWUFBVCxLQUEwQixRQUExQixHQUFxQyxFQUFFLFlBQXZDLEdBQXNELENBQXhFOztBQUVBLFVBQUUsV0FBRjtBQUNBLFVBQUUsWUFBRjs7QUFFQSxVQUFFLE1BQUYsR0FBVyxDQUFDLEVBQUUsT0FBRixDQUFVLFFBQXRCO0FBQ0EsVUFBRSxRQUFGOztBQUVBLFVBQUUsT0FBRixDQUFVLE9BQVYsQ0FBa0IsUUFBbEIsRUFBNEIsQ0FBQyxDQUFELENBQTVCO0FBRUgsS0FoREQ7O0FBa0RBLFVBQU0sU0FBTixDQUFnQixNQUFoQixHQUF5QixZQUFXOztBQUVoQyxZQUFJLElBQUksSUFBUjs7QUFFQSxZQUFJLEVBQUUsTUFBRixFQUFVLEtBQVYsT0FBc0IsRUFBRSxXQUE1QixFQUF5QztBQUNyQyx5QkFBYSxFQUFFLFdBQWY7QUFDQSxjQUFFLFdBQUYsR0FBZ0IsT0FBTyxVQUFQLENBQWtCLFlBQVc7QUFDekMsa0JBQUUsV0FBRixHQUFnQixFQUFFLE1BQUYsRUFBVSxLQUFWLEVBQWhCO0FBQ0Esa0JBQUUsZUFBRjtBQUNBLG9CQUFJLENBQUMsRUFBRSxTQUFQLEVBQW1CO0FBQUUsc0JBQUUsV0FBRjtBQUFrQjtBQUMxQyxhQUplLEVBSWIsRUFKYSxDQUFoQjtBQUtIO0FBQ0osS0FaRDs7QUFjQSxVQUFNLFNBQU4sQ0FBZ0IsV0FBaEIsR0FBOEIsTUFBTSxTQUFOLENBQWdCLFdBQWhCLEdBQThCLFVBQVMsS0FBVCxFQUFnQixZQUFoQixFQUE4QixTQUE5QixFQUF5Qzs7QUFFakcsWUFBSSxJQUFJLElBQVI7O0FBRUEsWUFBSSxPQUFPLEtBQVAsS0FBa0IsU0FBdEIsRUFBaUM7QUFDN0IsMkJBQWUsS0FBZjtBQUNBLG9CQUFRLGlCQUFpQixJQUFqQixHQUF3QixDQUF4QixHQUE0QixFQUFFLFVBQUYsR0FBZSxDQUFuRDtBQUNILFNBSEQsTUFHTztBQUNILG9CQUFRLGlCQUFpQixJQUFqQixHQUF3QixFQUFFLEtBQTFCLEdBQWtDLEtBQTFDO0FBQ0g7O0FBRUQsWUFBSSxFQUFFLFVBQUYsR0FBZSxDQUFmLElBQW9CLFFBQVEsQ0FBNUIsSUFBaUMsUUFBUSxFQUFFLFVBQUYsR0FBZSxDQUE1RCxFQUErRDtBQUMzRCxtQkFBTyxLQUFQO0FBQ0g7O0FBRUQsVUFBRSxNQUFGOztBQUVBLFlBQUksY0FBYyxJQUFsQixFQUF3QjtBQUNwQixjQUFFLFdBQUYsQ0FBYyxRQUFkLEdBQXlCLE1BQXpCO0FBQ0gsU0FGRCxNQUVPO0FBQ0gsY0FBRSxXQUFGLENBQWMsUUFBZCxDQUF1QixLQUFLLE9BQUwsQ0FBYSxLQUFwQyxFQUEyQyxFQUEzQyxDQUE4QyxLQUE5QyxFQUFxRCxNQUFyRDtBQUNIOztBQUVELFVBQUUsT0FBRixHQUFZLEVBQUUsV0FBRixDQUFjLFFBQWQsQ0FBdUIsS0FBSyxPQUFMLENBQWEsS0FBcEMsQ0FBWjs7QUFFQSxVQUFFLFdBQUYsQ0FBYyxRQUFkLENBQXVCLEtBQUssT0FBTCxDQUFhLEtBQXBDLEVBQTJDLE1BQTNDOztBQUVBLFVBQUUsV0FBRixDQUFjLE1BQWQsQ0FBcUIsRUFBRSxPQUF2Qjs7QUFFQSxVQUFFLFlBQUYsR0FBaUIsRUFBRSxPQUFuQjs7QUFFQSxVQUFFLE1BQUY7QUFFSCxLQWpDRDs7QUFtQ0EsVUFBTSxTQUFOLENBQWdCLE1BQWhCLEdBQXlCLFVBQVMsUUFBVCxFQUFtQjs7QUFFeEMsWUFBSSxJQUFJLElBQVI7QUFBQSxZQUNJLGdCQUFnQixFQURwQjtBQUFBLFlBRUksQ0FGSjtBQUFBLFlBRU8sQ0FGUDs7QUFJQSxZQUFJLEVBQUUsT0FBRixDQUFVLEdBQVYsS0FBa0IsSUFBdEIsRUFBNEI7QUFDeEIsdUJBQVcsQ0FBQyxRQUFaO0FBQ0g7QUFDRCxZQUFJLEVBQUUsWUFBRixJQUFrQixNQUFsQixHQUEyQixLQUFLLElBQUwsQ0FBVSxRQUFWLElBQXNCLElBQWpELEdBQXdELEtBQTVEO0FBQ0EsWUFBSSxFQUFFLFlBQUYsSUFBa0IsS0FBbEIsR0FBMEIsS0FBSyxJQUFMLENBQVUsUUFBVixJQUFzQixJQUFoRCxHQUF1RCxLQUEzRDs7QUFFQSxzQkFBYyxFQUFFLFlBQWhCLElBQWdDLFFBQWhDOztBQUVBLFlBQUksRUFBRSxpQkFBRixLQUF3QixLQUE1QixFQUFtQztBQUMvQixjQUFFLFdBQUYsQ0FBYyxHQUFkLENBQWtCLGFBQWxCO0FBQ0gsU0FGRCxNQUVPO0FBQ0gsNEJBQWdCLEVBQWhCO0FBQ0EsZ0JBQUksRUFBRSxjQUFGLEtBQXFCLEtBQXpCLEVBQWdDO0FBQzVCLDhCQUFjLEVBQUUsUUFBaEIsSUFBNEIsZUFBZSxDQUFmLEdBQW1CLElBQW5CLEdBQTBCLENBQTFCLEdBQThCLEdBQTFEO0FBQ0Esa0JBQUUsV0FBRixDQUFjLEdBQWQsQ0FBa0IsYUFBbEI7QUFDSCxhQUhELE1BR087QUFDSCw4QkFBYyxFQUFFLFFBQWhCLElBQTRCLGlCQUFpQixDQUFqQixHQUFxQixJQUFyQixHQUE0QixDQUE1QixHQUFnQyxRQUE1RDtBQUNBLGtCQUFFLFdBQUYsQ0FBYyxHQUFkLENBQWtCLGFBQWxCO0FBQ0g7QUFDSjtBQUVKLEtBM0JEOztBQTZCQSxVQUFNLFNBQU4sQ0FBZ0IsYUFBaEIsR0FBZ0MsWUFBVzs7QUFFdkMsWUFBSSxJQUFJLElBQVI7O0FBRUEsWUFBSSxFQUFFLE9BQUYsQ0FBVSxRQUFWLEtBQXVCLEtBQTNCLEVBQWtDO0FBQzlCLGdCQUFJLEVBQUUsT0FBRixDQUFVLFVBQVYsS0FBeUIsSUFBN0IsRUFBbUM7QUFDL0Isa0JBQUUsS0FBRixDQUFRLEdBQVIsQ0FBWTtBQUNSLDZCQUFVLFNBQVMsRUFBRSxPQUFGLENBQVU7QUFEckIsaUJBQVo7QUFHSDtBQUNKLFNBTkQsTUFNTztBQUNILGNBQUUsS0FBRixDQUFRLE1BQVIsQ0FBZSxFQUFFLE9BQUYsQ0FBVSxLQUFWLEdBQWtCLFdBQWxCLENBQThCLElBQTlCLElBQXNDLEVBQUUsT0FBRixDQUFVLFlBQS9EO0FBQ0EsZ0JBQUksRUFBRSxPQUFGLENBQVUsVUFBVixLQUF5QixJQUE3QixFQUFtQztBQUMvQixrQkFBRSxLQUFGLENBQVEsR0FBUixDQUFZO0FBQ1IsNkJBQVUsRUFBRSxPQUFGLENBQVUsYUFBVixHQUEwQjtBQUQ1QixpQkFBWjtBQUdIO0FBQ0o7O0FBRUQsVUFBRSxTQUFGLEdBQWMsRUFBRSxLQUFGLENBQVEsS0FBUixFQUFkO0FBQ0EsVUFBRSxVQUFGLEdBQWUsRUFBRSxLQUFGLENBQVEsTUFBUixFQUFmOztBQUdBLFlBQUksRUFBRSxPQUFGLENBQVUsUUFBVixLQUF1QixLQUF2QixJQUFnQyxFQUFFLE9BQUYsQ0FBVSxhQUFWLEtBQTRCLEtBQWhFLEVBQXVFO0FBQ25FLGNBQUUsVUFBRixHQUFlLEtBQUssSUFBTCxDQUFVLEVBQUUsU0FBRixHQUFjLEVBQUUsT0FBRixDQUFVLFlBQWxDLENBQWY7QUFDQSxjQUFFLFdBQUYsQ0FBYyxLQUFkLENBQW9CLEtBQUssSUFBTCxDQUFXLEVBQUUsVUFBRixHQUFlLEVBQUUsV0FBRixDQUFjLFFBQWQsQ0FBdUIsY0FBdkIsRUFBdUMsTUFBakUsQ0FBcEI7QUFFSCxTQUpELE1BSU8sSUFBSSxFQUFFLE9BQUYsQ0FBVSxhQUFWLEtBQTRCLElBQWhDLEVBQXNDO0FBQ3pDLGNBQUUsV0FBRixDQUFjLEtBQWQsQ0FBb0IsT0FBTyxFQUFFLFVBQTdCO0FBQ0gsU0FGTSxNQUVBO0FBQ0gsY0FBRSxVQUFGLEdBQWUsS0FBSyxJQUFMLENBQVUsRUFBRSxTQUFaLENBQWY7QUFDQSxjQUFFLFdBQUYsQ0FBYyxNQUFkLENBQXFCLEtBQUssSUFBTCxDQUFXLEVBQUUsT0FBRixDQUFVLEtBQVYsR0FBa0IsV0FBbEIsQ0FBOEIsSUFBOUIsSUFBc0MsRUFBRSxXQUFGLENBQWMsUUFBZCxDQUF1QixjQUF2QixFQUF1QyxNQUF4RixDQUFyQjtBQUNIOztBQUVELFlBQUksU0FBUyxFQUFFLE9BQUYsQ0FBVSxLQUFWLEdBQWtCLFVBQWxCLENBQTZCLElBQTdCLElBQXFDLEVBQUUsT0FBRixDQUFVLEtBQVYsR0FBa0IsS0FBbEIsRUFBbEQ7QUFDQSxZQUFJLEVBQUUsT0FBRixDQUFVLGFBQVYsS0FBNEIsS0FBaEMsRUFBdUMsRUFBRSxXQUFGLENBQWMsUUFBZCxDQUF1QixjQUF2QixFQUF1QyxLQUF2QyxDQUE2QyxFQUFFLFVBQUYsR0FBZSxNQUE1RDtBQUUxQyxLQXJDRDs7QUF1Q0EsVUFBTSxTQUFOLENBQWdCLE9BQWhCLEdBQTBCLFlBQVc7O0FBRWpDLFlBQUksSUFBSSxJQUFSO0FBQUEsWUFDSSxVQURKOztBQUdBLFVBQUUsT0FBRixDQUFVLElBQVYsQ0FBZSxVQUFTLEtBQVQsRUFBZ0IsT0FBaEIsRUFBeUI7QUFDcEMseUJBQWMsRUFBRSxVQUFGLEdBQWUsS0FBaEIsR0FBeUIsQ0FBQyxDQUF2QztBQUNBLGdCQUFJLEVBQUUsT0FBRixDQUFVLEdBQVYsS0FBa0IsSUFBdEIsRUFBNEI7QUFDeEIsa0JBQUUsT0FBRixFQUFXLEdBQVgsQ0FBZTtBQUNYLDhCQUFVLFVBREM7QUFFWCwyQkFBTyxVQUZJO0FBR1gseUJBQUssQ0FITTtBQUlYLDRCQUFRLEVBQUUsT0FBRixDQUFVLE1BQVYsR0FBbUIsQ0FKaEI7QUFLWCw2QkFBUztBQUxFLGlCQUFmO0FBT0gsYUFSRCxNQVFPO0FBQ0gsa0JBQUUsT0FBRixFQUFXLEdBQVgsQ0FBZTtBQUNYLDhCQUFVLFVBREM7QUFFWCwwQkFBTSxVQUZLO0FBR1gseUJBQUssQ0FITTtBQUlYLDRCQUFRLEVBQUUsT0FBRixDQUFVLE1BQVYsR0FBbUIsQ0FKaEI7QUFLWCw2QkFBUztBQUxFLGlCQUFmO0FBT0g7QUFDSixTQW5CRDs7QUFxQkEsVUFBRSxPQUFGLENBQVUsRUFBVixDQUFhLEVBQUUsWUFBZixFQUE2QixHQUE3QixDQUFpQztBQUM3QixvQkFBUSxFQUFFLE9BQUYsQ0FBVSxNQUFWLEdBQW1CLENBREU7QUFFN0IscUJBQVM7QUFGb0IsU0FBakM7QUFLSCxLQS9CRDs7QUFpQ0EsVUFBTSxTQUFOLENBQWdCLFNBQWhCLEdBQTRCLFlBQVc7O0FBRW5DLFlBQUksSUFBSSxJQUFSOztBQUVBLFlBQUksRUFBRSxPQUFGLENBQVUsWUFBVixLQUEyQixDQUEzQixJQUFnQyxFQUFFLE9BQUYsQ0FBVSxjQUFWLEtBQTZCLElBQTdELElBQXFFLEVBQUUsT0FBRixDQUFVLFFBQVYsS0FBdUIsS0FBaEcsRUFBdUc7QUFDbkcsZ0JBQUksZUFBZSxFQUFFLE9BQUYsQ0FBVSxFQUFWLENBQWEsRUFBRSxZQUFmLEVBQTZCLFdBQTdCLENBQXlDLElBQXpDLENBQW5CO0FBQ0EsY0FBRSxLQUFGLENBQVEsR0FBUixDQUFZLFFBQVosRUFBc0IsWUFBdEI7QUFDSDtBQUVKLEtBVEQ7O0FBV0EsVUFBTSxTQUFOLENBQWdCLFNBQWhCLEdBQ0EsTUFBTSxTQUFOLENBQWdCLGNBQWhCLEdBQWlDLFlBQVc7O0FBRXhDOzs7Ozs7Ozs7Ozs7O0FBYUEsWUFBSSxJQUFJLElBQVI7QUFBQSxZQUFjLENBQWQ7QUFBQSxZQUFpQixJQUFqQjtBQUFBLFlBQXVCLE1BQXZCO0FBQUEsWUFBK0IsS0FBL0I7QUFBQSxZQUFzQyxVQUFVLEtBQWhEO0FBQUEsWUFBdUQsSUFBdkQ7O0FBRUEsWUFBSSxFQUFFLElBQUYsQ0FBUSxVQUFVLENBQVYsQ0FBUixNQUEyQixRQUEvQixFQUEwQzs7QUFFdEMscUJBQVUsVUFBVSxDQUFWLENBQVY7QUFDQSxzQkFBVSxVQUFVLENBQVYsQ0FBVjtBQUNBLG1CQUFPLFVBQVA7QUFFSCxTQU5ELE1BTU8sSUFBSyxFQUFFLElBQUYsQ0FBUSxVQUFVLENBQVYsQ0FBUixNQUEyQixRQUFoQyxFQUEyQzs7QUFFOUMscUJBQVUsVUFBVSxDQUFWLENBQVY7QUFDQSxvQkFBUSxVQUFVLENBQVYsQ0FBUjtBQUNBLHNCQUFVLFVBQVUsQ0FBVixDQUFWOztBQUVBLGdCQUFLLFVBQVUsQ0FBVixNQUFpQixZQUFqQixJQUFpQyxFQUFFLElBQUYsQ0FBUSxVQUFVLENBQVYsQ0FBUixNQUEyQixPQUFqRSxFQUEyRTs7QUFFdkUsdUJBQU8sWUFBUDtBQUVILGFBSkQsTUFJTyxJQUFLLE9BQU8sVUFBVSxDQUFWLENBQVAsS0FBd0IsV0FBN0IsRUFBMkM7O0FBRTlDLHVCQUFPLFFBQVA7QUFFSDtBQUVKOztBQUVELFlBQUssU0FBUyxRQUFkLEVBQXlCOztBQUVyQixjQUFFLE9BQUYsQ0FBVSxNQUFWLElBQW9CLEtBQXBCO0FBR0gsU0FMRCxNQUtPLElBQUssU0FBUyxVQUFkLEVBQTJCOztBQUU5QixjQUFFLElBQUYsQ0FBUSxNQUFSLEVBQWlCLFVBQVUsR0FBVixFQUFlLEdBQWYsRUFBcUI7O0FBRWxDLGtCQUFFLE9BQUYsQ0FBVSxHQUFWLElBQWlCLEdBQWpCO0FBRUgsYUFKRDtBQU9ILFNBVE0sTUFTQSxJQUFLLFNBQVMsWUFBZCxFQUE2Qjs7QUFFaEMsaUJBQU0sSUFBTixJQUFjLEtBQWQsRUFBc0I7O0FBRWxCLG9CQUFJLEVBQUUsSUFBRixDQUFRLEVBQUUsT0FBRixDQUFVLFVBQWxCLE1BQW1DLE9BQXZDLEVBQWlEOztBQUU3QyxzQkFBRSxPQUFGLENBQVUsVUFBVixHQUF1QixDQUFFLE1BQU0sSUFBTixDQUFGLENBQXZCO0FBRUgsaUJBSkQsTUFJTzs7QUFFSCx3QkFBSSxFQUFFLE9BQUYsQ0FBVSxVQUFWLENBQXFCLE1BQXJCLEdBQTRCLENBQWhDOztBQUVBO0FBQ0EsMkJBQU8sS0FBSyxDQUFaLEVBQWdCOztBQUVaLDRCQUFJLEVBQUUsT0FBRixDQUFVLFVBQVYsQ0FBcUIsQ0FBckIsRUFBd0IsVUFBeEIsS0FBdUMsTUFBTSxJQUFOLEVBQVksVUFBdkQsRUFBb0U7O0FBRWhFLDhCQUFFLE9BQUYsQ0FBVSxVQUFWLENBQXFCLE1BQXJCLENBQTRCLENBQTVCLEVBQThCLENBQTlCO0FBRUg7O0FBRUQ7QUFFSDs7QUFFRCxzQkFBRSxPQUFGLENBQVUsVUFBVixDQUFxQixJQUFyQixDQUEyQixNQUFNLElBQU4sQ0FBM0I7QUFFSDtBQUVKO0FBRUo7O0FBRUQsWUFBSyxPQUFMLEVBQWU7O0FBRVgsY0FBRSxNQUFGO0FBQ0EsY0FBRSxNQUFGO0FBRUg7QUFFSixLQWhHRDs7QUFrR0EsVUFBTSxTQUFOLENBQWdCLFdBQWhCLEdBQThCLFlBQVc7O0FBRXJDLFlBQUksSUFBSSxJQUFSOztBQUVBLFVBQUUsYUFBRjs7QUFFQSxVQUFFLFNBQUY7O0FBRUEsWUFBSSxFQUFFLE9BQUYsQ0FBVSxJQUFWLEtBQW1CLEtBQXZCLEVBQThCO0FBQzFCLGNBQUUsTUFBRixDQUFTLEVBQUUsT0FBRixDQUFVLEVBQUUsWUFBWixDQUFUO0FBQ0gsU0FGRCxNQUVPO0FBQ0gsY0FBRSxPQUFGO0FBQ0g7O0FBRUQsVUFBRSxPQUFGLENBQVUsT0FBVixDQUFrQixhQUFsQixFQUFpQyxDQUFDLENBQUQsQ0FBakM7QUFFSCxLQWhCRDs7QUFrQkEsVUFBTSxTQUFOLENBQWdCLFFBQWhCLEdBQTJCLFlBQVc7O0FBRWxDLFlBQUksSUFBSSxJQUFSO0FBQUEsWUFDSSxZQUFZLFNBQVMsSUFBVCxDQUFjLEtBRDlCOztBQUdBLFVBQUUsWUFBRixHQUFpQixFQUFFLE9BQUYsQ0FBVSxRQUFWLEtBQXVCLElBQXZCLEdBQThCLEtBQTlCLEdBQXNDLE1BQXZEOztBQUVBLFlBQUksRUFBRSxZQUFGLEtBQW1CLEtBQXZCLEVBQThCO0FBQzFCLGNBQUUsT0FBRixDQUFVLFFBQVYsQ0FBbUIsZ0JBQW5CO0FBQ0gsU0FGRCxNQUVPO0FBQ0gsY0FBRSxPQUFGLENBQVUsV0FBVixDQUFzQixnQkFBdEI7QUFDSDs7QUFFRCxZQUFJLFVBQVUsZ0JBQVYsS0FBK0IsU0FBL0IsSUFDQSxVQUFVLGFBQVYsS0FBNEIsU0FENUIsSUFFQSxVQUFVLFlBQVYsS0FBMkIsU0FGL0IsRUFFMEM7QUFDdEMsZ0JBQUksRUFBRSxPQUFGLENBQVUsTUFBVixLQUFxQixJQUF6QixFQUErQjtBQUMzQixrQkFBRSxjQUFGLEdBQW1CLElBQW5CO0FBQ0g7QUFDSjs7QUFFRCxZQUFLLEVBQUUsT0FBRixDQUFVLElBQWYsRUFBc0I7QUFDbEIsZ0JBQUssT0FBTyxFQUFFLE9BQUYsQ0FBVSxNQUFqQixLQUE0QixRQUFqQyxFQUE0QztBQUN4QyxvQkFBSSxFQUFFLE9BQUYsQ0FBVSxNQUFWLEdBQW1CLENBQXZCLEVBQTJCO0FBQ3ZCLHNCQUFFLE9BQUYsQ0FBVSxNQUFWLEdBQW1CLENBQW5CO0FBQ0g7QUFDSixhQUpELE1BSU87QUFDSCxrQkFBRSxPQUFGLENBQVUsTUFBVixHQUFtQixFQUFFLFFBQUYsQ0FBVyxNQUE5QjtBQUNIO0FBQ0o7O0FBRUQsWUFBSSxVQUFVLFVBQVYsS0FBeUIsU0FBN0IsRUFBd0M7QUFDcEMsY0FBRSxRQUFGLEdBQWEsWUFBYjtBQUNBLGNBQUUsYUFBRixHQUFrQixjQUFsQjtBQUNBLGNBQUUsY0FBRixHQUFtQixhQUFuQjtBQUNBLGdCQUFJLFVBQVUsbUJBQVYsS0FBa0MsU0FBbEMsSUFBK0MsVUFBVSxpQkFBVixLQUFnQyxTQUFuRixFQUE4RixFQUFFLFFBQUYsR0FBYSxLQUFiO0FBQ2pHO0FBQ0QsWUFBSSxVQUFVLFlBQVYsS0FBMkIsU0FBL0IsRUFBMEM7QUFDdEMsY0FBRSxRQUFGLEdBQWEsY0FBYjtBQUNBLGNBQUUsYUFBRixHQUFrQixnQkFBbEI7QUFDQSxjQUFFLGNBQUYsR0FBbUIsZUFBbkI7QUFDQSxnQkFBSSxVQUFVLG1CQUFWLEtBQWtDLFNBQWxDLElBQStDLFVBQVUsY0FBVixLQUE2QixTQUFoRixFQUEyRixFQUFFLFFBQUYsR0FBYSxLQUFiO0FBQzlGO0FBQ0QsWUFBSSxVQUFVLGVBQVYsS0FBOEIsU0FBbEMsRUFBNkM7QUFDekMsY0FBRSxRQUFGLEdBQWEsaUJBQWI7QUFDQSxjQUFFLGFBQUYsR0FBa0IsbUJBQWxCO0FBQ0EsY0FBRSxjQUFGLEdBQW1CLGtCQUFuQjtBQUNBLGdCQUFJLFVBQVUsbUJBQVYsS0FBa0MsU0FBbEMsSUFBK0MsVUFBVSxpQkFBVixLQUFnQyxTQUFuRixFQUE4RixFQUFFLFFBQUYsR0FBYSxLQUFiO0FBQ2pHO0FBQ0QsWUFBSSxVQUFVLFdBQVYsS0FBMEIsU0FBOUIsRUFBeUM7QUFDckMsY0FBRSxRQUFGLEdBQWEsYUFBYjtBQUNBLGNBQUUsYUFBRixHQUFrQixlQUFsQjtBQUNBLGNBQUUsY0FBRixHQUFtQixjQUFuQjtBQUNBLGdCQUFJLFVBQVUsV0FBVixLQUEwQixTQUE5QixFQUF5QyxFQUFFLFFBQUYsR0FBYSxLQUFiO0FBQzVDO0FBQ0QsWUFBSSxVQUFVLFNBQVYsS0FBd0IsU0FBeEIsSUFBcUMsRUFBRSxRQUFGLEtBQWUsS0FBeEQsRUFBK0Q7QUFDM0QsY0FBRSxRQUFGLEdBQWEsV0FBYjtBQUNBLGNBQUUsYUFBRixHQUFrQixXQUFsQjtBQUNBLGNBQUUsY0FBRixHQUFtQixZQUFuQjtBQUNIO0FBQ0QsVUFBRSxpQkFBRixHQUFzQixFQUFFLE9BQUYsQ0FBVSxZQUFWLElBQTJCLEVBQUUsUUFBRixLQUFlLElBQWYsSUFBdUIsRUFBRSxRQUFGLEtBQWUsS0FBdkY7QUFDSCxLQTdERDs7QUFnRUEsVUFBTSxTQUFOLENBQWdCLGVBQWhCLEdBQWtDLFVBQVMsS0FBVCxFQUFnQjs7QUFFOUMsWUFBSSxJQUFJLElBQVI7QUFBQSxZQUNJLFlBREo7QUFBQSxZQUNrQixTQURsQjtBQUFBLFlBQzZCLFdBRDdCO0FBQUEsWUFDMEMsU0FEMUM7O0FBR0Esb0JBQVksRUFBRSxPQUFGLENBQ1AsSUFETyxDQUNGLGNBREUsRUFFUCxXQUZPLENBRUsseUNBRkwsRUFHUCxJQUhPLENBR0YsYUFIRSxFQUdhLE1BSGIsQ0FBWjs7QUFLQSxVQUFFLE9BQUYsQ0FDSyxFQURMLENBQ1EsS0FEUixFQUVLLFFBRkwsQ0FFYyxlQUZkOztBQUlBLFlBQUksRUFBRSxPQUFGLENBQVUsVUFBVixLQUF5QixJQUE3QixFQUFtQzs7QUFFL0IsMkJBQWUsS0FBSyxLQUFMLENBQVcsRUFBRSxPQUFGLENBQVUsWUFBVixHQUF5QixDQUFwQyxDQUFmOztBQUVBLGdCQUFJLEVBQUUsT0FBRixDQUFVLFFBQVYsS0FBdUIsSUFBM0IsRUFBaUM7O0FBRTdCLG9CQUFJLFNBQVMsWUFBVCxJQUF5QixTQUFVLEVBQUUsVUFBRixHQUFlLENBQWhCLEdBQXFCLFlBQTNELEVBQXlFOztBQUVyRSxzQkFBRSxPQUFGLENBQ0ssS0FETCxDQUNXLFFBQVEsWUFEbkIsRUFDaUMsUUFBUSxZQUFSLEdBQXVCLENBRHhELEVBRUssUUFGTCxDQUVjLGNBRmQsRUFHSyxJQUhMLENBR1UsYUFIVixFQUd5QixPQUh6QjtBQUtILGlCQVBELE1BT087O0FBRUgsa0NBQWMsRUFBRSxPQUFGLENBQVUsWUFBVixHQUF5QixLQUF2QztBQUNBLDhCQUNLLEtBREwsQ0FDVyxjQUFjLFlBQWQsR0FBNkIsQ0FEeEMsRUFDMkMsY0FBYyxZQUFkLEdBQTZCLENBRHhFLEVBRUssUUFGTCxDQUVjLGNBRmQsRUFHSyxJQUhMLENBR1UsYUFIVixFQUd5QixPQUh6QjtBQUtIOztBQUVELG9CQUFJLFVBQVUsQ0FBZCxFQUFpQjs7QUFFYiw4QkFDSyxFQURMLENBQ1EsVUFBVSxNQUFWLEdBQW1CLENBQW5CLEdBQXVCLEVBQUUsT0FBRixDQUFVLFlBRHpDLEVBRUssUUFGTCxDQUVjLGNBRmQ7QUFJSCxpQkFORCxNQU1PLElBQUksVUFBVSxFQUFFLFVBQUYsR0FBZSxDQUE3QixFQUFnQzs7QUFFbkMsOEJBQ0ssRUFETCxDQUNRLEVBQUUsT0FBRixDQUFVLFlBRGxCLEVBRUssUUFGTCxDQUVjLGNBRmQ7QUFJSDtBQUVKOztBQUVELGNBQUUsT0FBRixDQUNLLEVBREwsQ0FDUSxLQURSLEVBRUssUUFGTCxDQUVjLGNBRmQ7QUFJSCxTQTNDRCxNQTJDTzs7QUFFSCxnQkFBSSxTQUFTLENBQVQsSUFBYyxTQUFVLEVBQUUsVUFBRixHQUFlLEVBQUUsT0FBRixDQUFVLFlBQXJELEVBQW9FOztBQUVoRSxrQkFBRSxPQUFGLENBQ0ssS0FETCxDQUNXLEtBRFgsRUFDa0IsUUFBUSxFQUFFLE9BQUYsQ0FBVSxZQURwQyxFQUVLLFFBRkwsQ0FFYyxjQUZkLEVBR0ssSUFITCxDQUdVLGFBSFYsRUFHeUIsT0FIekI7QUFLSCxhQVBELE1BT08sSUFBSSxVQUFVLE1BQVYsSUFBb0IsRUFBRSxPQUFGLENBQVUsWUFBbEMsRUFBZ0Q7O0FBRW5ELDBCQUNLLFFBREwsQ0FDYyxjQURkLEVBRUssSUFGTCxDQUVVLGFBRlYsRUFFeUIsT0FGekI7QUFJSCxhQU5NLE1BTUE7O0FBRUgsNEJBQVksRUFBRSxVQUFGLEdBQWUsRUFBRSxPQUFGLENBQVUsWUFBckM7QUFDQSw4QkFBYyxFQUFFLE9BQUYsQ0FBVSxRQUFWLEtBQXVCLElBQXZCLEdBQThCLEVBQUUsT0FBRixDQUFVLFlBQVYsR0FBeUIsS0FBdkQsR0FBK0QsS0FBN0U7O0FBRUEsb0JBQUksRUFBRSxPQUFGLENBQVUsWUFBVixJQUEwQixFQUFFLE9BQUYsQ0FBVSxjQUFwQyxJQUF1RCxFQUFFLFVBQUYsR0FBZSxLQUFoQixHQUF5QixFQUFFLE9BQUYsQ0FBVSxZQUE3RixFQUEyRzs7QUFFdkcsOEJBQ0ssS0FETCxDQUNXLGVBQWUsRUFBRSxPQUFGLENBQVUsWUFBVixHQUF5QixTQUF4QyxDQURYLEVBQytELGNBQWMsU0FEN0UsRUFFSyxRQUZMLENBRWMsY0FGZCxFQUdLLElBSEwsQ0FHVSxhQUhWLEVBR3lCLE9BSHpCO0FBS0gsaUJBUEQsTUFPTzs7QUFFSCw4QkFDSyxLQURMLENBQ1csV0FEWCxFQUN3QixjQUFjLEVBQUUsT0FBRixDQUFVLFlBRGhELEVBRUssUUFGTCxDQUVjLGNBRmQsRUFHSyxJQUhMLENBR1UsYUFIVixFQUd5QixPQUh6QjtBQUtIO0FBRUo7QUFFSjs7QUFFRCxZQUFJLEVBQUUsT0FBRixDQUFVLFFBQVYsS0FBdUIsVUFBM0IsRUFBdUM7QUFDbkMsY0FBRSxRQUFGO0FBQ0g7QUFFSixLQXJHRDs7QUF1R0EsVUFBTSxTQUFOLENBQWdCLGFBQWhCLEdBQWdDLFlBQVc7O0FBRXZDLFlBQUksSUFBSSxJQUFSO0FBQUEsWUFDSSxDQURKO0FBQUEsWUFDTyxVQURQO0FBQUEsWUFDbUIsYUFEbkI7O0FBR0EsWUFBSSxFQUFFLE9BQUYsQ0FBVSxJQUFWLEtBQW1CLElBQXZCLEVBQTZCO0FBQ3pCLGNBQUUsT0FBRixDQUFVLFVBQVYsR0FBdUIsS0FBdkI7QUFDSDs7QUFFRCxZQUFJLEVBQUUsT0FBRixDQUFVLFFBQVYsS0FBdUIsSUFBdkIsSUFBK0IsRUFBRSxPQUFGLENBQVUsSUFBVixLQUFtQixLQUF0RCxFQUE2RDs7QUFFekQseUJBQWEsSUFBYjs7QUFFQSxnQkFBSSxFQUFFLFVBQUYsR0FBZSxFQUFFLE9BQUYsQ0FBVSxZQUE3QixFQUEyQzs7QUFFdkMsb0JBQUksRUFBRSxPQUFGLENBQVUsVUFBVixLQUF5QixJQUE3QixFQUFtQztBQUMvQixvQ0FBZ0IsRUFBRSxPQUFGLENBQVUsWUFBVixHQUF5QixDQUF6QztBQUNILGlCQUZELE1BRU87QUFDSCxvQ0FBZ0IsRUFBRSxPQUFGLENBQVUsWUFBMUI7QUFDSDs7QUFFRCxxQkFBSyxJQUFJLEVBQUUsVUFBWCxFQUF1QixJQUFLLEVBQUUsVUFBRixHQUNwQixhQURSLEVBQ3dCLEtBQUssQ0FEN0IsRUFDZ0M7QUFDNUIsaUNBQWEsSUFBSSxDQUFqQjtBQUNBLHNCQUFFLEVBQUUsT0FBRixDQUFVLFVBQVYsQ0FBRixFQUF5QixLQUF6QixDQUErQixJQUEvQixFQUFxQyxJQUFyQyxDQUEwQyxJQUExQyxFQUFnRCxFQUFoRCxFQUNLLElBREwsQ0FDVSxrQkFEVixFQUM4QixhQUFhLEVBQUUsVUFEN0MsRUFFSyxTQUZMLENBRWUsRUFBRSxXQUZqQixFQUU4QixRQUY5QixDQUV1QyxjQUZ2QztBQUdIO0FBQ0QscUJBQUssSUFBSSxDQUFULEVBQVksSUFBSSxhQUFoQixFQUErQixLQUFLLENBQXBDLEVBQXVDO0FBQ25DLGlDQUFhLENBQWI7QUFDQSxzQkFBRSxFQUFFLE9BQUYsQ0FBVSxVQUFWLENBQUYsRUFBeUIsS0FBekIsQ0FBK0IsSUFBL0IsRUFBcUMsSUFBckMsQ0FBMEMsSUFBMUMsRUFBZ0QsRUFBaEQsRUFDSyxJQURMLENBQ1Usa0JBRFYsRUFDOEIsYUFBYSxFQUFFLFVBRDdDLEVBRUssUUFGTCxDQUVjLEVBQUUsV0FGaEIsRUFFNkIsUUFGN0IsQ0FFc0MsY0FGdEM7QUFHSDtBQUNELGtCQUFFLFdBQUYsQ0FBYyxJQUFkLENBQW1CLGVBQW5CLEVBQW9DLElBQXBDLENBQXlDLE1BQXpDLEVBQWlELElBQWpELENBQXNELFlBQVc7QUFDN0Qsc0JBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxJQUFiLEVBQW1CLEVBQW5CO0FBQ0gsaUJBRkQ7QUFJSDtBQUVKO0FBRUosS0ExQ0Q7O0FBNENBLFVBQU0sU0FBTixDQUFnQixTQUFoQixHQUE0QixVQUFVLE1BQVYsRUFBbUI7O0FBRTNDLFlBQUksSUFBSSxJQUFSOztBQUVBLFlBQUksQ0FBQyxNQUFMLEVBQWM7QUFDVixjQUFFLFFBQUY7QUFDSDtBQUNELFVBQUUsV0FBRixHQUFnQixNQUFoQjtBQUVILEtBVEQ7O0FBV0EsVUFBTSxTQUFOLENBQWdCLGFBQWhCLEdBQWdDLFVBQVMsS0FBVCxFQUFnQjs7QUFFNUMsWUFBSSxJQUFJLElBQVI7O0FBRUEsWUFBSSxnQkFDQSxFQUFFLE1BQU0sTUFBUixFQUFnQixFQUFoQixDQUFtQixjQUFuQixJQUNJLEVBQUUsTUFBTSxNQUFSLENBREosR0FFSSxFQUFFLE1BQU0sTUFBUixFQUFnQixPQUFoQixDQUF3QixjQUF4QixDQUhSOztBQUtBLFlBQUksUUFBUSxTQUFTLGNBQWMsSUFBZCxDQUFtQixrQkFBbkIsQ0FBVCxDQUFaOztBQUVBLFlBQUksQ0FBQyxLQUFMLEVBQVksUUFBUSxDQUFSOztBQUVaLFlBQUksRUFBRSxVQUFGLElBQWdCLEVBQUUsT0FBRixDQUFVLFlBQTlCLEVBQTRDOztBQUV4QyxjQUFFLGVBQUYsQ0FBa0IsS0FBbEI7QUFDQSxjQUFFLFFBQUYsQ0FBVyxLQUFYO0FBQ0E7QUFFSDs7QUFFRCxVQUFFLFlBQUYsQ0FBZSxLQUFmO0FBRUgsS0F2QkQ7O0FBeUJBLFVBQU0sU0FBTixDQUFnQixZQUFoQixHQUErQixVQUFTLEtBQVQsRUFBZ0IsSUFBaEIsRUFBc0IsV0FBdEIsRUFBbUM7O0FBRTlELFlBQUksV0FBSjtBQUFBLFlBQWlCLFNBQWpCO0FBQUEsWUFBNEIsUUFBNUI7QUFBQSxZQUFzQyxTQUF0QztBQUFBLFlBQWlELGFBQWEsSUFBOUQ7QUFBQSxZQUNJLElBQUksSUFEUjtBQUFBLFlBQ2MsU0FEZDs7QUFHQSxlQUFPLFFBQVEsS0FBZjs7QUFFQSxZQUFJLEVBQUUsU0FBRixLQUFnQixJQUFoQixJQUF3QixFQUFFLE9BQUYsQ0FBVSxjQUFWLEtBQTZCLElBQXpELEVBQStEO0FBQzNEO0FBQ0g7O0FBRUQsWUFBSSxFQUFFLE9BQUYsQ0FBVSxJQUFWLEtBQW1CLElBQW5CLElBQTJCLEVBQUUsWUFBRixLQUFtQixLQUFsRCxFQUF5RDtBQUNyRDtBQUNIOztBQUVELFlBQUksRUFBRSxVQUFGLElBQWdCLEVBQUUsT0FBRixDQUFVLFlBQTlCLEVBQTRDO0FBQ3hDO0FBQ0g7O0FBRUQsWUFBSSxTQUFTLEtBQWIsRUFBb0I7QUFDaEIsY0FBRSxRQUFGLENBQVcsS0FBWDtBQUNIOztBQUVELHNCQUFjLEtBQWQ7QUFDQSxxQkFBYSxFQUFFLE9BQUYsQ0FBVSxXQUFWLENBQWI7QUFDQSxvQkFBWSxFQUFFLE9BQUYsQ0FBVSxFQUFFLFlBQVosQ0FBWjs7QUFFQSxVQUFFLFdBQUYsR0FBZ0IsRUFBRSxTQUFGLEtBQWdCLElBQWhCLEdBQXVCLFNBQXZCLEdBQW1DLEVBQUUsU0FBckQ7O0FBRUEsWUFBSSxFQUFFLE9BQUYsQ0FBVSxRQUFWLEtBQXVCLEtBQXZCLElBQWdDLEVBQUUsT0FBRixDQUFVLFVBQVYsS0FBeUIsS0FBekQsS0FBbUUsUUFBUSxDQUFSLElBQWEsUUFBUSxFQUFFLFdBQUYsS0FBa0IsRUFBRSxPQUFGLENBQVUsY0FBcEgsQ0FBSixFQUF5STtBQUNySSxnQkFBSSxFQUFFLE9BQUYsQ0FBVSxJQUFWLEtBQW1CLEtBQXZCLEVBQThCO0FBQzFCLDhCQUFjLEVBQUUsWUFBaEI7QUFDQSxvQkFBSSxnQkFBZ0IsSUFBcEIsRUFBMEI7QUFDdEIsc0JBQUUsWUFBRixDQUFlLFNBQWYsRUFBMEIsWUFBVztBQUNqQywwQkFBRSxTQUFGLENBQVksV0FBWjtBQUNILHFCQUZEO0FBR0gsaUJBSkQsTUFJTztBQUNILHNCQUFFLFNBQUYsQ0FBWSxXQUFaO0FBQ0g7QUFDSjtBQUNEO0FBQ0gsU0FaRCxNQVlPLElBQUksRUFBRSxPQUFGLENBQVUsUUFBVixLQUF1QixLQUF2QixJQUFnQyxFQUFFLE9BQUYsQ0FBVSxVQUFWLEtBQXlCLElBQXpELEtBQWtFLFFBQVEsQ0FBUixJQUFhLFFBQVMsRUFBRSxVQUFGLEdBQWUsRUFBRSxPQUFGLENBQVUsY0FBakgsQ0FBSixFQUF1STtBQUMxSSxnQkFBSSxFQUFFLE9BQUYsQ0FBVSxJQUFWLEtBQW1CLEtBQXZCLEVBQThCO0FBQzFCLDhCQUFjLEVBQUUsWUFBaEI7QUFDQSxvQkFBSSxnQkFBZ0IsSUFBcEIsRUFBMEI7QUFDdEIsc0JBQUUsWUFBRixDQUFlLFNBQWYsRUFBMEIsWUFBVztBQUNqQywwQkFBRSxTQUFGLENBQVksV0FBWjtBQUNILHFCQUZEO0FBR0gsaUJBSkQsTUFJTztBQUNILHNCQUFFLFNBQUYsQ0FBWSxXQUFaO0FBQ0g7QUFDSjtBQUNEO0FBQ0g7O0FBRUQsWUFBSyxFQUFFLE9BQUYsQ0FBVSxRQUFmLEVBQTBCO0FBQ3RCLDBCQUFjLEVBQUUsYUFBaEI7QUFDSDs7QUFFRCxZQUFJLGNBQWMsQ0FBbEIsRUFBcUI7QUFDakIsZ0JBQUksRUFBRSxVQUFGLEdBQWUsRUFBRSxPQUFGLENBQVUsY0FBekIsS0FBNEMsQ0FBaEQsRUFBbUQ7QUFDL0MsNEJBQVksRUFBRSxVQUFGLEdBQWdCLEVBQUUsVUFBRixHQUFlLEVBQUUsT0FBRixDQUFVLGNBQXJEO0FBQ0gsYUFGRCxNQUVPO0FBQ0gsNEJBQVksRUFBRSxVQUFGLEdBQWUsV0FBM0I7QUFDSDtBQUNKLFNBTkQsTUFNTyxJQUFJLGVBQWUsRUFBRSxVQUFyQixFQUFpQztBQUNwQyxnQkFBSSxFQUFFLFVBQUYsR0FBZSxFQUFFLE9BQUYsQ0FBVSxjQUF6QixLQUE0QyxDQUFoRCxFQUFtRDtBQUMvQyw0QkFBWSxDQUFaO0FBQ0gsYUFGRCxNQUVPO0FBQ0gsNEJBQVksY0FBYyxFQUFFLFVBQTVCO0FBQ0g7QUFDSixTQU5NLE1BTUE7QUFDSCx3QkFBWSxXQUFaO0FBQ0g7O0FBRUQsVUFBRSxTQUFGLEdBQWMsSUFBZDs7QUFFQSxVQUFFLE9BQUYsQ0FBVSxPQUFWLENBQWtCLGNBQWxCLEVBQWtDLENBQUMsQ0FBRCxFQUFJLEVBQUUsWUFBTixFQUFvQixTQUFwQixDQUFsQzs7QUFFQSxtQkFBVyxFQUFFLFlBQWI7QUFDQSxVQUFFLFlBQUYsR0FBaUIsU0FBakI7O0FBRUEsVUFBRSxlQUFGLENBQWtCLEVBQUUsWUFBcEI7O0FBRUEsWUFBSyxFQUFFLE9BQUYsQ0FBVSxRQUFmLEVBQTBCOztBQUV0Qix3QkFBWSxFQUFFLFlBQUYsRUFBWjtBQUNBLHdCQUFZLFVBQVUsS0FBVixDQUFnQixVQUFoQixDQUFaOztBQUVBLGdCQUFLLFVBQVUsVUFBVixJQUF3QixVQUFVLE9BQVYsQ0FBa0IsWUFBL0MsRUFBOEQ7QUFDMUQsMEJBQVUsZUFBVixDQUEwQixFQUFFLFlBQTVCO0FBQ0g7QUFFSjs7QUFFRCxVQUFFLFVBQUY7QUFDQSxVQUFFLFlBQUY7O0FBRUEsWUFBSSxFQUFFLE9BQUYsQ0FBVSxJQUFWLEtBQW1CLElBQXZCLEVBQTZCO0FBQ3pCLGdCQUFJLGdCQUFnQixJQUFwQixFQUEwQjs7QUFFdEIsa0JBQUUsWUFBRixDQUFlLFFBQWY7O0FBRUEsa0JBQUUsU0FBRixDQUFZLFNBQVosRUFBdUIsWUFBVztBQUM5QixzQkFBRSxTQUFGLENBQVksU0FBWjtBQUNILGlCQUZEO0FBSUgsYUFSRCxNQVFPO0FBQ0gsa0JBQUUsU0FBRixDQUFZLFNBQVo7QUFDSDtBQUNELGNBQUUsYUFBRjtBQUNBO0FBQ0g7O0FBRUQsWUFBSSxnQkFBZ0IsSUFBcEIsRUFBMEI7QUFDdEIsY0FBRSxZQUFGLENBQWUsVUFBZixFQUEyQixZQUFXO0FBQ2xDLGtCQUFFLFNBQUYsQ0FBWSxTQUFaO0FBQ0gsYUFGRDtBQUdILFNBSkQsTUFJTztBQUNILGNBQUUsU0FBRixDQUFZLFNBQVo7QUFDSDtBQUVKLEtBMUhEOztBQTRIQSxVQUFNLFNBQU4sQ0FBZ0IsU0FBaEIsR0FBNEIsWUFBVzs7QUFFbkMsWUFBSSxJQUFJLElBQVI7O0FBRUEsWUFBSSxFQUFFLE9BQUYsQ0FBVSxNQUFWLEtBQXFCLElBQXJCLElBQTZCLEVBQUUsVUFBRixHQUFlLEVBQUUsT0FBRixDQUFVLFlBQTFELEVBQXdFOztBQUVwRSxjQUFFLFVBQUYsQ0FBYSxJQUFiO0FBQ0EsY0FBRSxVQUFGLENBQWEsSUFBYjtBQUVIOztBQUVELFlBQUksRUFBRSxPQUFGLENBQVUsSUFBVixLQUFtQixJQUFuQixJQUEyQixFQUFFLFVBQUYsR0FBZSxFQUFFLE9BQUYsQ0FBVSxZQUF4RCxFQUFzRTs7QUFFbEUsY0FBRSxLQUFGLENBQVEsSUFBUjtBQUVIOztBQUVELFVBQUUsT0FBRixDQUFVLFFBQVYsQ0FBbUIsZUFBbkI7QUFFSCxLQW5CRDs7QUFxQkEsVUFBTSxTQUFOLENBQWdCLGNBQWhCLEdBQWlDLFlBQVc7O0FBRXhDLFlBQUksS0FBSjtBQUFBLFlBQVcsS0FBWDtBQUFBLFlBQWtCLENBQWxCO0FBQUEsWUFBcUIsVUFBckI7QUFBQSxZQUFpQyxJQUFJLElBQXJDOztBQUVBLGdCQUFRLEVBQUUsV0FBRixDQUFjLE1BQWQsR0FBdUIsRUFBRSxXQUFGLENBQWMsSUFBN0M7QUFDQSxnQkFBUSxFQUFFLFdBQUYsQ0FBYyxNQUFkLEdBQXVCLEVBQUUsV0FBRixDQUFjLElBQTdDO0FBQ0EsWUFBSSxLQUFLLEtBQUwsQ0FBVyxLQUFYLEVBQWtCLEtBQWxCLENBQUo7O0FBRUEscUJBQWEsS0FBSyxLQUFMLENBQVcsSUFBSSxHQUFKLEdBQVUsS0FBSyxFQUExQixDQUFiO0FBQ0EsWUFBSSxhQUFhLENBQWpCLEVBQW9CO0FBQ2hCLHlCQUFhLE1BQU0sS0FBSyxHQUFMLENBQVMsVUFBVCxDQUFuQjtBQUNIOztBQUVELFlBQUssY0FBYyxFQUFmLElBQXVCLGNBQWMsQ0FBekMsRUFBNkM7QUFDekMsbUJBQVEsRUFBRSxPQUFGLENBQVUsR0FBVixLQUFrQixLQUFsQixHQUEwQixNQUExQixHQUFtQyxPQUEzQztBQUNIO0FBQ0QsWUFBSyxjQUFjLEdBQWYsSUFBd0IsY0FBYyxHQUExQyxFQUFnRDtBQUM1QyxtQkFBUSxFQUFFLE9BQUYsQ0FBVSxHQUFWLEtBQWtCLEtBQWxCLEdBQTBCLE1BQTFCLEdBQW1DLE9BQTNDO0FBQ0g7QUFDRCxZQUFLLGNBQWMsR0FBZixJQUF3QixjQUFjLEdBQTFDLEVBQWdEO0FBQzVDLG1CQUFRLEVBQUUsT0FBRixDQUFVLEdBQVYsS0FBa0IsS0FBbEIsR0FBMEIsT0FBMUIsR0FBb0MsTUFBNUM7QUFDSDtBQUNELFlBQUksRUFBRSxPQUFGLENBQVUsZUFBVixLQUE4QixJQUFsQyxFQUF3QztBQUNwQyxnQkFBSyxjQUFjLEVBQWYsSUFBdUIsY0FBYyxHQUF6QyxFQUErQztBQUMzQyx1QkFBTyxNQUFQO0FBQ0gsYUFGRCxNQUVPO0FBQ0gsdUJBQU8sSUFBUDtBQUNIO0FBQ0o7O0FBRUQsZUFBTyxVQUFQO0FBRUgsS0FoQ0Q7O0FBa0NBLFVBQU0sU0FBTixDQUFnQixRQUFoQixHQUEyQixVQUFTLEtBQVQsRUFBZ0I7O0FBRXZDLFlBQUksSUFBSSxJQUFSO0FBQUEsWUFDSSxVQURKO0FBQUEsWUFFSSxTQUZKOztBQUlBLFVBQUUsUUFBRixHQUFhLEtBQWI7QUFDQSxVQUFFLFdBQUYsR0FBZ0IsS0FBaEI7QUFDQSxVQUFFLFdBQUYsR0FBa0IsRUFBRSxXQUFGLENBQWMsV0FBZCxHQUE0QixFQUE5QixHQUFxQyxLQUFyQyxHQUE2QyxJQUE3RDs7QUFFQSxZQUFLLEVBQUUsV0FBRixDQUFjLElBQWQsS0FBdUIsU0FBNUIsRUFBd0M7QUFDcEMsbUJBQU8sS0FBUDtBQUNIOztBQUVELFlBQUssRUFBRSxXQUFGLENBQWMsT0FBZCxLQUEwQixJQUEvQixFQUFzQztBQUNsQyxjQUFFLE9BQUYsQ0FBVSxPQUFWLENBQWtCLE1BQWxCLEVBQTBCLENBQUMsQ0FBRCxFQUFJLEVBQUUsY0FBRixFQUFKLENBQTFCO0FBQ0g7O0FBRUQsWUFBSyxFQUFFLFdBQUYsQ0FBYyxXQUFkLElBQTZCLEVBQUUsV0FBRixDQUFjLFFBQWhELEVBQTJEOztBQUV2RCx3QkFBWSxFQUFFLGNBQUYsRUFBWjs7QUFFQSxvQkFBUyxTQUFUOztBQUVJLHFCQUFLLE1BQUw7QUFDQSxxQkFBSyxNQUFMOztBQUVJLGlDQUNJLEVBQUUsT0FBRixDQUFVLFlBQVYsR0FDSSxFQUFFLGNBQUYsQ0FBa0IsRUFBRSxZQUFGLEdBQWlCLEVBQUUsYUFBRixFQUFuQyxDQURKLEdBRUksRUFBRSxZQUFGLEdBQWlCLEVBQUUsYUFBRixFQUh6Qjs7QUFLQSxzQkFBRSxnQkFBRixHQUFxQixDQUFyQjs7QUFFQTs7QUFFSixxQkFBSyxPQUFMO0FBQ0EscUJBQUssSUFBTDs7QUFFSSxpQ0FDSSxFQUFFLE9BQUYsQ0FBVSxZQUFWLEdBQ0ksRUFBRSxjQUFGLENBQWtCLEVBQUUsWUFBRixHQUFpQixFQUFFLGFBQUYsRUFBbkMsQ0FESixHQUVJLEVBQUUsWUFBRixHQUFpQixFQUFFLGFBQUYsRUFIekI7O0FBS0Esc0JBQUUsZ0JBQUYsR0FBcUIsQ0FBckI7O0FBRUE7O0FBRUo7O0FBMUJKOztBQStCQSxnQkFBSSxhQUFhLFVBQWpCLEVBQThCOztBQUUxQixrQkFBRSxZQUFGLENBQWdCLFVBQWhCO0FBQ0Esa0JBQUUsV0FBRixHQUFnQixFQUFoQjtBQUNBLGtCQUFFLE9BQUYsQ0FBVSxPQUFWLENBQWtCLE9BQWxCLEVBQTJCLENBQUMsQ0FBRCxFQUFJLFNBQUosQ0FBM0I7QUFFSDtBQUVKLFNBM0NELE1BMkNPOztBQUVILGdCQUFLLEVBQUUsV0FBRixDQUFjLE1BQWQsS0FBeUIsRUFBRSxXQUFGLENBQWMsSUFBNUMsRUFBbUQ7O0FBRS9DLGtCQUFFLFlBQUYsQ0FBZ0IsRUFBRSxZQUFsQjtBQUNBLGtCQUFFLFdBQUYsR0FBZ0IsRUFBaEI7QUFFSDtBQUVKO0FBRUosS0F4RUQ7O0FBMEVBLFVBQU0sU0FBTixDQUFnQixZQUFoQixHQUErQixVQUFTLEtBQVQsRUFBZ0I7O0FBRTNDLFlBQUksSUFBSSxJQUFSOztBQUVBLFlBQUssRUFBRSxPQUFGLENBQVUsS0FBVixLQUFvQixLQUFyQixJQUFnQyxnQkFBZ0IsUUFBaEIsSUFBNEIsRUFBRSxPQUFGLENBQVUsS0FBVixLQUFvQixLQUFwRixFQUE0RjtBQUN4RjtBQUNILFNBRkQsTUFFTyxJQUFJLEVBQUUsT0FBRixDQUFVLFNBQVYsS0FBd0IsS0FBeEIsSUFBaUMsTUFBTSxJQUFOLENBQVcsT0FBWCxDQUFtQixPQUFuQixNQUFnQyxDQUFDLENBQXRFLEVBQXlFO0FBQzVFO0FBQ0g7O0FBRUQsVUFBRSxXQUFGLENBQWMsV0FBZCxHQUE0QixNQUFNLGFBQU4sSUFBdUIsTUFBTSxhQUFOLENBQW9CLE9BQXBCLEtBQWdDLFNBQXZELEdBQ3hCLE1BQU0sYUFBTixDQUFvQixPQUFwQixDQUE0QixNQURKLEdBQ2EsQ0FEekM7O0FBR0EsVUFBRSxXQUFGLENBQWMsUUFBZCxHQUF5QixFQUFFLFNBQUYsR0FBYyxFQUFFLE9BQUYsQ0FDbEMsY0FETDs7QUFHQSxZQUFJLEVBQUUsT0FBRixDQUFVLGVBQVYsS0FBOEIsSUFBbEMsRUFBd0M7QUFDcEMsY0FBRSxXQUFGLENBQWMsUUFBZCxHQUF5QixFQUFFLFVBQUYsR0FBZSxFQUFFLE9BQUYsQ0FDbkMsY0FETDtBQUVIOztBQUVELGdCQUFRLE1BQU0sSUFBTixDQUFXLE1BQW5COztBQUVJLGlCQUFLLE9BQUw7QUFDSSxrQkFBRSxVQUFGLENBQWEsS0FBYjtBQUNBOztBQUVKLGlCQUFLLE1BQUw7QUFDSSxrQkFBRSxTQUFGLENBQVksS0FBWjtBQUNBOztBQUVKLGlCQUFLLEtBQUw7QUFDSSxrQkFBRSxRQUFGLENBQVcsS0FBWDtBQUNBOztBQVpSO0FBZ0JILEtBckNEOztBQXVDQSxVQUFNLFNBQU4sQ0FBZ0IsU0FBaEIsR0FBNEIsVUFBUyxLQUFULEVBQWdCOztBQUV4QyxZQUFJLElBQUksSUFBUjtBQUFBLFlBQ0ksYUFBYSxLQURqQjtBQUFBLFlBRUksT0FGSjtBQUFBLFlBRWEsY0FGYjtBQUFBLFlBRTZCLFdBRjdCO0FBQUEsWUFFMEMsY0FGMUM7QUFBQSxZQUUwRCxPQUYxRDs7QUFJQSxrQkFBVSxNQUFNLGFBQU4sS0FBd0IsU0FBeEIsR0FBb0MsTUFBTSxhQUFOLENBQW9CLE9BQXhELEdBQWtFLElBQTVFOztBQUVBLFlBQUksQ0FBQyxFQUFFLFFBQUgsSUFBZSxXQUFXLFFBQVEsTUFBUixLQUFtQixDQUFqRCxFQUFvRDtBQUNoRCxtQkFBTyxLQUFQO0FBQ0g7O0FBRUQsa0JBQVUsRUFBRSxPQUFGLENBQVUsRUFBRSxZQUFaLENBQVY7O0FBRUEsVUFBRSxXQUFGLENBQWMsSUFBZCxHQUFxQixZQUFZLFNBQVosR0FBd0IsUUFBUSxDQUFSLEVBQVcsS0FBbkMsR0FBMkMsTUFBTSxPQUF0RTtBQUNBLFVBQUUsV0FBRixDQUFjLElBQWQsR0FBcUIsWUFBWSxTQUFaLEdBQXdCLFFBQVEsQ0FBUixFQUFXLEtBQW5DLEdBQTJDLE1BQU0sT0FBdEU7O0FBRUEsVUFBRSxXQUFGLENBQWMsV0FBZCxHQUE0QixLQUFLLEtBQUwsQ0FBVyxLQUFLLElBQUwsQ0FDbkMsS0FBSyxHQUFMLENBQVMsRUFBRSxXQUFGLENBQWMsSUFBZCxHQUFxQixFQUFFLFdBQUYsQ0FBYyxNQUE1QyxFQUFvRCxDQUFwRCxDQURtQyxDQUFYLENBQTVCOztBQUdBLFlBQUksRUFBRSxPQUFGLENBQVUsZUFBVixLQUE4QixJQUFsQyxFQUF3QztBQUNwQyxjQUFFLFdBQUYsQ0FBYyxXQUFkLEdBQTRCLEtBQUssS0FBTCxDQUFXLEtBQUssSUFBTCxDQUNuQyxLQUFLLEdBQUwsQ0FBUyxFQUFFLFdBQUYsQ0FBYyxJQUFkLEdBQXFCLEVBQUUsV0FBRixDQUFjLE1BQTVDLEVBQW9ELENBQXBELENBRG1DLENBQVgsQ0FBNUI7QUFFSDs7QUFFRCx5QkFBaUIsRUFBRSxjQUFGLEVBQWpCOztBQUVBLFlBQUksbUJBQW1CLFVBQXZCLEVBQW1DO0FBQy9CO0FBQ0g7O0FBRUQsWUFBSSxNQUFNLGFBQU4sS0FBd0IsU0FBeEIsSUFBcUMsRUFBRSxXQUFGLENBQWMsV0FBZCxHQUE0QixDQUFyRSxFQUF3RTtBQUNwRSxrQkFBTSxjQUFOO0FBQ0g7O0FBRUQseUJBQWlCLENBQUMsRUFBRSxPQUFGLENBQVUsR0FBVixLQUFrQixLQUFsQixHQUEwQixDQUExQixHQUE4QixDQUFDLENBQWhDLEtBQXNDLEVBQUUsV0FBRixDQUFjLElBQWQsR0FBcUIsRUFBRSxXQUFGLENBQWMsTUFBbkMsR0FBNEMsQ0FBNUMsR0FBZ0QsQ0FBQyxDQUF2RixDQUFqQjtBQUNBLFlBQUksRUFBRSxPQUFGLENBQVUsZUFBVixLQUE4QixJQUFsQyxFQUF3QztBQUNwQyw2QkFBaUIsRUFBRSxXQUFGLENBQWMsSUFBZCxHQUFxQixFQUFFLFdBQUYsQ0FBYyxNQUFuQyxHQUE0QyxDQUE1QyxHQUFnRCxDQUFDLENBQWxFO0FBQ0g7O0FBR0Qsc0JBQWMsRUFBRSxXQUFGLENBQWMsV0FBNUI7O0FBRUEsVUFBRSxXQUFGLENBQWMsT0FBZCxHQUF3QixLQUF4Qjs7QUFFQSxZQUFJLEVBQUUsT0FBRixDQUFVLFFBQVYsS0FBdUIsS0FBM0IsRUFBa0M7QUFDOUIsZ0JBQUssRUFBRSxZQUFGLEtBQW1CLENBQW5CLElBQXdCLG1CQUFtQixPQUE1QyxJQUF5RCxFQUFFLFlBQUYsSUFBa0IsRUFBRSxXQUFGLEVBQWxCLElBQXFDLG1CQUFtQixNQUFySCxFQUE4SDtBQUMxSCw4QkFBYyxFQUFFLFdBQUYsQ0FBYyxXQUFkLEdBQTRCLEVBQUUsT0FBRixDQUFVLFlBQXBEO0FBQ0Esa0JBQUUsV0FBRixDQUFjLE9BQWQsR0FBd0IsSUFBeEI7QUFDSDtBQUNKOztBQUVELFlBQUksRUFBRSxPQUFGLENBQVUsUUFBVixLQUF1QixLQUEzQixFQUFrQztBQUM5QixjQUFFLFNBQUYsR0FBYyxVQUFVLGNBQWMsY0FBdEM7QUFDSCxTQUZELE1BRU87QUFDSCxjQUFFLFNBQUYsR0FBYyxVQUFXLGVBQWUsRUFBRSxLQUFGLENBQVEsTUFBUixLQUFtQixFQUFFLFNBQXBDLENBQUQsR0FBbUQsY0FBM0U7QUFDSDtBQUNELFlBQUksRUFBRSxPQUFGLENBQVUsZUFBVixLQUE4QixJQUFsQyxFQUF3QztBQUNwQyxjQUFFLFNBQUYsR0FBYyxVQUFVLGNBQWMsY0FBdEM7QUFDSDs7QUFFRCxZQUFJLEVBQUUsT0FBRixDQUFVLElBQVYsS0FBbUIsSUFBbkIsSUFBMkIsRUFBRSxPQUFGLENBQVUsU0FBVixLQUF3QixLQUF2RCxFQUE4RDtBQUMxRCxtQkFBTyxLQUFQO0FBQ0g7O0FBRUQsWUFBSSxFQUFFLFNBQUYsS0FBZ0IsSUFBcEIsRUFBMEI7QUFDdEIsY0FBRSxTQUFGLEdBQWMsSUFBZDtBQUNBLG1CQUFPLEtBQVA7QUFDSDs7QUFFRCxVQUFFLE1BQUYsQ0FBUyxFQUFFLFNBQVg7QUFFSCxLQXhFRDs7QUEwRUEsVUFBTSxTQUFOLENBQWdCLFVBQWhCLEdBQTZCLFVBQVMsS0FBVCxFQUFnQjs7QUFFekMsWUFBSSxJQUFJLElBQVI7QUFBQSxZQUNJLE9BREo7O0FBR0EsVUFBRSxXQUFGLEdBQWdCLElBQWhCOztBQUVBLFlBQUksRUFBRSxXQUFGLENBQWMsV0FBZCxLQUE4QixDQUE5QixJQUFtQyxFQUFFLFVBQUYsSUFBZ0IsRUFBRSxPQUFGLENBQVUsWUFBakUsRUFBK0U7QUFDM0UsY0FBRSxXQUFGLEdBQWdCLEVBQWhCO0FBQ0EsbUJBQU8sS0FBUDtBQUNIOztBQUVELFlBQUksTUFBTSxhQUFOLEtBQXdCLFNBQXhCLElBQXFDLE1BQU0sYUFBTixDQUFvQixPQUFwQixLQUFnQyxTQUF6RSxFQUFvRjtBQUNoRixzQkFBVSxNQUFNLGFBQU4sQ0FBb0IsT0FBcEIsQ0FBNEIsQ0FBNUIsQ0FBVjtBQUNIOztBQUVELFVBQUUsV0FBRixDQUFjLE1BQWQsR0FBdUIsRUFBRSxXQUFGLENBQWMsSUFBZCxHQUFxQixZQUFZLFNBQVosR0FBd0IsUUFBUSxLQUFoQyxHQUF3QyxNQUFNLE9BQTFGO0FBQ0EsVUFBRSxXQUFGLENBQWMsTUFBZCxHQUF1QixFQUFFLFdBQUYsQ0FBYyxJQUFkLEdBQXFCLFlBQVksU0FBWixHQUF3QixRQUFRLEtBQWhDLEdBQXdDLE1BQU0sT0FBMUY7O0FBRUEsVUFBRSxRQUFGLEdBQWEsSUFBYjtBQUVILEtBckJEOztBQXVCQSxVQUFNLFNBQU4sQ0FBZ0IsY0FBaEIsR0FBaUMsTUFBTSxTQUFOLENBQWdCLGFBQWhCLEdBQWdDLFlBQVc7O0FBRXhFLFlBQUksSUFBSSxJQUFSOztBQUVBLFlBQUksRUFBRSxZQUFGLEtBQW1CLElBQXZCLEVBQTZCOztBQUV6QixjQUFFLE1BQUY7O0FBRUEsY0FBRSxXQUFGLENBQWMsUUFBZCxDQUF1QixLQUFLLE9BQUwsQ0FBYSxLQUFwQyxFQUEyQyxNQUEzQzs7QUFFQSxjQUFFLFlBQUYsQ0FBZSxRQUFmLENBQXdCLEVBQUUsV0FBMUI7O0FBRUEsY0FBRSxNQUFGO0FBRUg7QUFFSixLQWhCRDs7QUFrQkEsVUFBTSxTQUFOLENBQWdCLE1BQWhCLEdBQXlCLFlBQVc7O0FBRWhDLFlBQUksSUFBSSxJQUFSOztBQUVBLFVBQUUsZUFBRixFQUFtQixFQUFFLE9BQXJCLEVBQThCLE1BQTlCOztBQUVBLFlBQUksRUFBRSxLQUFOLEVBQWE7QUFDVCxjQUFFLEtBQUYsQ0FBUSxNQUFSO0FBQ0g7O0FBRUQsWUFBSSxFQUFFLFVBQUYsSUFBZ0IsRUFBRSxRQUFGLENBQVcsSUFBWCxDQUFnQixFQUFFLE9BQUYsQ0FBVSxTQUExQixDQUFwQixFQUEwRDtBQUN0RCxjQUFFLFVBQUYsQ0FBYSxNQUFiO0FBQ0g7O0FBRUQsWUFBSSxFQUFFLFVBQUYsSUFBZ0IsRUFBRSxRQUFGLENBQVcsSUFBWCxDQUFnQixFQUFFLE9BQUYsQ0FBVSxTQUExQixDQUFwQixFQUEwRDtBQUN0RCxjQUFFLFVBQUYsQ0FBYSxNQUFiO0FBQ0g7O0FBRUQsVUFBRSxPQUFGLENBQ0ssV0FETCxDQUNpQixzREFEakIsRUFFSyxJQUZMLENBRVUsYUFGVixFQUV5QixNQUZ6QixFQUdLLEdBSEwsQ0FHUyxPQUhULEVBR2tCLEVBSGxCO0FBS0gsS0F2QkQ7O0FBeUJBLFVBQU0sU0FBTixDQUFnQixPQUFoQixHQUEwQixVQUFTLGNBQVQsRUFBeUI7O0FBRS9DLFlBQUksSUFBSSxJQUFSO0FBQ0EsVUFBRSxPQUFGLENBQVUsT0FBVixDQUFrQixTQUFsQixFQUE2QixDQUFDLENBQUQsRUFBSSxjQUFKLENBQTdCO0FBQ0EsVUFBRSxPQUFGO0FBRUgsS0FORDs7QUFRQSxVQUFNLFNBQU4sQ0FBZ0IsWUFBaEIsR0FBK0IsWUFBVzs7QUFFdEMsWUFBSSxJQUFJLElBQVI7QUFBQSxZQUNJLFlBREo7O0FBR0EsdUJBQWUsS0FBSyxLQUFMLENBQVcsRUFBRSxPQUFGLENBQVUsWUFBVixHQUF5QixDQUFwQyxDQUFmOztBQUVBLFlBQUssRUFBRSxPQUFGLENBQVUsTUFBVixLQUFxQixJQUFyQixJQUNELEVBQUUsVUFBRixHQUFlLEVBQUUsT0FBRixDQUFVLFlBRHhCLElBRUQsQ0FBQyxFQUFFLE9BQUYsQ0FBVSxRQUZmLEVBRTBCOztBQUV0QixjQUFFLFVBQUYsQ0FBYSxXQUFiLENBQXlCLGdCQUF6QixFQUEyQyxJQUEzQyxDQUFnRCxlQUFoRCxFQUFpRSxPQUFqRTtBQUNBLGNBQUUsVUFBRixDQUFhLFdBQWIsQ0FBeUIsZ0JBQXpCLEVBQTJDLElBQTNDLENBQWdELGVBQWhELEVBQWlFLE9BQWpFOztBQUVBLGdCQUFJLEVBQUUsWUFBRixLQUFtQixDQUF2QixFQUEwQjs7QUFFdEIsa0JBQUUsVUFBRixDQUFhLFFBQWIsQ0FBc0IsZ0JBQXRCLEVBQXdDLElBQXhDLENBQTZDLGVBQTdDLEVBQThELE1BQTlEO0FBQ0Esa0JBQUUsVUFBRixDQUFhLFdBQWIsQ0FBeUIsZ0JBQXpCLEVBQTJDLElBQTNDLENBQWdELGVBQWhELEVBQWlFLE9BQWpFO0FBRUgsYUFMRCxNQUtPLElBQUksRUFBRSxZQUFGLElBQWtCLEVBQUUsVUFBRixHQUFlLEVBQUUsT0FBRixDQUFVLFlBQTNDLElBQTJELEVBQUUsT0FBRixDQUFVLFVBQVYsS0FBeUIsS0FBeEYsRUFBK0Y7O0FBRWxHLGtCQUFFLFVBQUYsQ0FBYSxRQUFiLENBQXNCLGdCQUF0QixFQUF3QyxJQUF4QyxDQUE2QyxlQUE3QyxFQUE4RCxNQUE5RDtBQUNBLGtCQUFFLFVBQUYsQ0FBYSxXQUFiLENBQXlCLGdCQUF6QixFQUEyQyxJQUEzQyxDQUFnRCxlQUFoRCxFQUFpRSxPQUFqRTtBQUVILGFBTE0sTUFLQSxJQUFJLEVBQUUsWUFBRixJQUFrQixFQUFFLFVBQUYsR0FBZSxDQUFqQyxJQUFzQyxFQUFFLE9BQUYsQ0FBVSxVQUFWLEtBQXlCLElBQW5FLEVBQXlFOztBQUU1RSxrQkFBRSxVQUFGLENBQWEsUUFBYixDQUFzQixnQkFBdEIsRUFBd0MsSUFBeEMsQ0FBNkMsZUFBN0MsRUFBOEQsTUFBOUQ7QUFDQSxrQkFBRSxVQUFGLENBQWEsV0FBYixDQUF5QixnQkFBekIsRUFBMkMsSUFBM0MsQ0FBZ0QsZUFBaEQsRUFBaUUsT0FBakU7QUFFSDtBQUVKO0FBRUosS0FqQ0Q7O0FBbUNBLFVBQU0sU0FBTixDQUFnQixVQUFoQixHQUE2QixZQUFXOztBQUVwQyxZQUFJLElBQUksSUFBUjs7QUFFQSxZQUFJLEVBQUUsS0FBRixLQUFZLElBQWhCLEVBQXNCOztBQUVsQixjQUFFLEtBQUYsQ0FDSyxJQURMLENBQ1UsSUFEVixFQUVLLFdBRkwsQ0FFaUIsY0FGakIsRUFHSyxJQUhMLENBR1UsYUFIVixFQUd5QixNQUh6Qjs7QUFLQSxjQUFFLEtBQUYsQ0FDSyxJQURMLENBQ1UsSUFEVixFQUVLLEVBRkwsQ0FFUSxLQUFLLEtBQUwsQ0FBVyxFQUFFLFlBQUYsR0FBaUIsRUFBRSxPQUFGLENBQVUsY0FBdEMsQ0FGUixFQUdLLFFBSEwsQ0FHYyxjQUhkLEVBSUssSUFKTCxDQUlVLGFBSlYsRUFJeUIsT0FKekI7QUFNSDtBQUVKLEtBbkJEOztBQXFCQSxVQUFNLFNBQU4sQ0FBZ0IsVUFBaEIsR0FBNkIsWUFBVzs7QUFFcEMsWUFBSSxJQUFJLElBQVI7O0FBRUEsWUFBSyxFQUFFLE9BQUYsQ0FBVSxRQUFmLEVBQTBCOztBQUV0QixnQkFBSyxTQUFTLEVBQUUsTUFBWCxDQUFMLEVBQTBCOztBQUV0QixrQkFBRSxXQUFGLEdBQWdCLElBQWhCO0FBRUgsYUFKRCxNQUlPOztBQUVILGtCQUFFLFdBQUYsR0FBZ0IsS0FBaEI7QUFFSDtBQUVKO0FBRUosS0FsQkQ7O0FBb0JBLE1BQUUsRUFBRixDQUFLLEtBQUwsR0FBYSxZQUFXO0FBQ3BCLFlBQUksSUFBSSxJQUFSO0FBQUEsWUFDSSxNQUFNLFVBQVUsQ0FBVixDQURWO0FBQUEsWUFFSSxPQUFPLE1BQU0sU0FBTixDQUFnQixLQUFoQixDQUFzQixJQUF0QixDQUEyQixTQUEzQixFQUFzQyxDQUF0QyxDQUZYO0FBQUEsWUFHSSxJQUFJLEVBQUUsTUFIVjtBQUFBLFlBSUksQ0FKSjtBQUFBLFlBS0ksR0FMSjtBQU1BLGFBQUssSUFBSSxDQUFULEVBQVksSUFBSSxDQUFoQixFQUFtQixHQUFuQixFQUF3QjtBQUNwQixnQkFBSSxRQUFPLEdBQVAseUNBQU8sR0FBUCxNQUFjLFFBQWQsSUFBMEIsT0FBTyxHQUFQLElBQWMsV0FBNUMsRUFDSSxFQUFFLENBQUYsRUFBSyxLQUFMLEdBQWEsSUFBSSxLQUFKLENBQVUsRUFBRSxDQUFGLENBQVYsRUFBZ0IsR0FBaEIsQ0FBYixDQURKLEtBR0ksTUFBTSxFQUFFLENBQUYsRUFBSyxLQUFMLENBQVcsR0FBWCxFQUFnQixLQUFoQixDQUFzQixFQUFFLENBQUYsRUFBSyxLQUEzQixFQUFrQyxJQUFsQyxDQUFOO0FBQ0osZ0JBQUksT0FBTyxHQUFQLElBQWMsV0FBbEIsRUFBK0IsT0FBTyxHQUFQO0FBQ2xDO0FBQ0QsZUFBTyxDQUFQO0FBQ0gsS0FmRDtBQWlCSCxDQXB6RkEsQ0FBRDs7Ozs7Ozs7a0JDaEJlO0FBRVgsUUFGVyxrQkFFTDtBQUNGLGFBQUssZUFBTDtBQUNBLGFBQUssU0FBTDtBQUNILEtBTFU7QUFPWCxtQkFQVyw2QkFPUTtBQUNmLFVBQUUsTUFBRixFQUFVLEdBQVYsQ0FBYztBQUNWLDJCQUFlLEVBQUUsY0FBRixFQUFrQixNQUFsQjtBQURMLFNBQWQ7O0FBSUEsVUFBRSxjQUFGLEVBQWtCLEVBQWxCLENBQXFCLE9BQXJCLEVBQThCLFlBQVk7QUFDdEMsY0FBRSxJQUFGLEVBQVEsV0FBUixDQUFvQixRQUFwQjtBQUNBLGNBQUUsV0FBRixFQUFlLFdBQWYsQ0FBMkIsUUFBM0I7QUFDSCxTQUhEOztBQUtBLFVBQUUsYUFBRixFQUFpQixFQUFqQixDQUFvQixPQUFwQixFQUE2QixZQUFXO0FBQ3BDLGdCQUFJLEVBQUUsRUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLE1BQWIsQ0FBRixFQUF3QixNQUF4QixJQUFrQyxDQUF0QyxFQUF5QztBQUNyQyxvQkFBSSxTQUFTLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxNQUFiLENBQWI7O0FBRUEsa0JBQUUsWUFBRixFQUFnQixPQUFoQixDQUF3QjtBQUNwQiwrQkFBVyxFQUFFLE1BQUYsRUFBVSxNQUFWLEdBQW1CO0FBRFYsaUJBQXhCO0FBR0g7QUFDSixTQVJEO0FBU0gsS0ExQlU7QUE0QlgsYUE1QlcsdUJBNEJDO0FBQ1IsWUFBSSxFQUFFLE1BQUYsRUFBVSxLQUFWLE1BQXFCLElBQXpCLEVBQStCO0FBQzNCLGdCQUFJLFlBQVksQ0FBQyxDQUFqQjs7QUFFQSxnQkFBSSxFQUFFLGlCQUFGLEVBQXFCLE1BQXJCLElBQStCLENBQW5DLEVBQXNDO0FBQ2xDLGtCQUFFLGlCQUFGLEVBQXFCLElBQXJCLENBQTBCLFlBQVc7QUFDakMsZ0NBQVksWUFBWSxFQUFFLElBQUYsRUFBUSxNQUFSLEVBQVosR0FBK0IsU0FBL0IsR0FBMkMsRUFBRSxJQUFGLEVBQVEsTUFBUixFQUF2RDtBQUNILGlCQUZEOztBQUlBLGtCQUFFLGlCQUFGLEVBQXFCLElBQXJCLENBQTBCLFlBQVc7QUFDakMsc0JBQUUsSUFBRixFQUFRLE1BQVIsQ0FBZSxTQUFmO0FBQ0gsaUJBRkQ7QUFHSDtBQUNKO0FBQ0o7QUExQ1UsQzs7Ozs7Ozs7a0JDREE7QUFDZCxNQURjLGtCQUNQO0FBQ04sU0FBSyxPQUFMO0FBQ0EsR0FIYTtBQUtkLFNBTGMscUJBS0o7O0FBRVAsTUFBRSxTQUFGLENBQVksNEZBQVosRUFBMEcsSUFBMUcsQ0FBK0csWUFBWTtBQUN6SCxVQUFNLFFBQVEsRUFBRSxNQUFGLENBQWQ7QUFDQSxVQUFNLFVBQVUsV0FBVyxNQUFNLElBQU4sQ0FBVyxVQUFYLENBQVgsQ0FBaEI7QUFDQSxVQUFNLFVBQVUsV0FBVyxNQUFNLElBQU4sQ0FBVyxVQUFYLENBQVgsQ0FBaEI7QUFDQSxVQUFNLFNBQVMsRUFBQyxLQUFLLE9BQU4sRUFBZSxLQUFLLE9BQXBCLEVBQWY7O0FBRUEsVUFBSSxNQUFNLElBQUksT0FBTyxJQUFQLENBQVksR0FBaEIsQ0FBb0IsU0FBUyxjQUFULENBQXdCLEtBQXhCLENBQXBCLEVBQW9EO0FBQzVELGNBQU0sRUFEc0Q7QUFFNUQsZ0JBQVEsTUFGb0Q7QUFHNUQscUJBQWEsS0FIK0M7QUFJNUQsbUJBQVcsSUFKaUQ7QUFLNUQscUJBQWEsS0FMK0M7QUFNNUQsNEJBQW9CO0FBQ2xCLG9CQUFVLE9BQU8sSUFBUCxDQUFZLGVBQVosQ0FBNEI7QUFEcEIsU0FOd0M7QUFTNUQsb0JBQVksS0FUZ0Q7QUFVNUQsd0JBQWdCLEtBVjRDO0FBVzVELDJCQUFtQjtBQVh5QyxPQUFwRCxDQUFWOztBQWNBLFVBQUksU0FBUyxJQUFJLE9BQU8sSUFBUCxDQUFZLE1BQWhCLENBQXVCO0FBQ2xDLGtCQUFVLE1BRHdCO0FBRWxDLGFBQUssR0FGNkI7QUFHbEMsZUFBTztBQUgyQixPQUF2QixDQUFiO0FBS0QsS0F6QkQ7QUEwQkQ7QUFqQ1ksQzs7Ozs7Ozs7O0FDQWY7O0FBQ0E7O0FBQ0E7O0FBQ0E7O2tCQUVlO0FBQ1gsUUFEVyxrQkFDSjtBQUNILGFBQUssT0FBTDtBQUNILEtBSFU7QUFLWCxXQUxXLHFCQUtEO0FBQ04sVUFBRSxxQkFBRixFQUF5QixLQUF6Qjs7QUFFQSxVQUFFLGFBQUYsRUFBaUIsWUFBakIsQ0FBOEI7QUFDNUIscUNBQXlCLElBREc7QUFFNUIscUJBQVM7QUFGbUIsU0FBOUI7QUFJSDtBQVpVLEM7Ozs7Ozs7O2tCQ0xBO0FBQ1gsUUFEVyxrQkFDSjtBQUNILGFBQUssV0FBTDtBQUNILEtBSFU7QUFLWCxlQUxXLHlCQUtHO0FBQ1YsVUFBRSxjQUFGLEVBQWtCLElBQWxCLENBQXVCLFlBQVc7QUFDOUIsZ0JBQUksWUFBWSxFQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsa0JBQWIsRUFBaUMsSUFBakMsQ0FBc0MsV0FBdEMsQ0FBaEI7QUFDQSxjQUFFLElBQUYsRUFBUSxJQUFSLGtCQUEyQixTQUEzQixVQUEwQyxRQUExQyxDQUFtRCxRQUFuRDtBQUNILFNBSEQ7O0FBS0EsVUFBRSxXQUFGLEVBQWUsRUFBZixDQUFrQixPQUFsQixFQUEyQixVQUFTLENBQVQsRUFBWTtBQUNuQyxjQUFFLGNBQUY7QUFDQSxnQkFBSSxNQUFNLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxXQUFiLENBQVY7O0FBRUEsY0FBRSxFQUFFLE1BQUosRUFBWSxPQUFaLENBQW9CLFdBQXBCLEVBQWlDLElBQWpDLENBQXNDLFdBQXRDLEVBQW1ELFdBQW5ELENBQStELFFBQS9EO0FBQ0Esb0JBQVEsR0FBUixDQUFZLEVBQUUsRUFBRSxNQUFKLEVBQVksT0FBWixDQUFvQixXQUFwQixFQUFpQyxJQUFqQyxDQUFzQyxXQUF0QyxDQUFaO0FBQ0EsY0FBRSxJQUFGLEVBQVEsUUFBUixDQUFpQixRQUFqQjs7QUFFQSxnQkFBSSxpQkFBZSxHQUFmLFFBQXVCLE1BQXZCLElBQWlDLENBQXJDLEVBQXdDO0FBQ3BDLGtCQUFFLEVBQUUsTUFBSixFQUFZLE9BQVosQ0FBb0IsY0FBcEIsRUFBb0MsSUFBcEMsQ0FBeUMsWUFBekMsRUFBdUQsV0FBdkQsQ0FBbUUsUUFBbkU7QUFDQSxtQ0FBZ0IsR0FBaEIsVUFBeUIsUUFBekIsQ0FBa0MsUUFBbEM7QUFDSDtBQUNKLFNBWkQ7QUFhSDtBQXhCVSxDOzs7Ozs7Ozs7QUNBZjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQUVlO0FBQ1gsUUFEVyxrQkFDTDtBQUNGLGtDQUFnQixJQUFoQjtBQUNBLDhCQUFLLElBQUw7QUFDQSwwQkFBUSxJQUFSO0FBQ0Esc0JBQVEsSUFBUjtBQUNIO0FBTlUsQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgSE9NRSBmcm9tIFwiLi9wYWdlcy9IT01FXCI7XHJcblxyXG5sZXQgaW5pdCA9IG51bGw7XHJcblxyXG5zd2l0Y2ggKGdsb2JhbC52YXJzLnBhZ2UpIHtcclxuICAgIGNhc2UgJ2hvbWVfcGFnZSc6XHJcbiAgICAgICAgaW5pdCA9IEhPTUUuaW5pdC5iaW5kKEhPTUUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgICBpbml0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGVmYXVsdCBpbml0Jyk7XHJcbiAgICAgICAgfTtcclxufVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoaW5pdCgpKTtcclxuXHJcbiQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24oKSB7XHJcblx0aWYgKCQod2luZG93KS53aWR0aCgpID49IDEwMjQpIHtcclxuXHRcdHZhciBtYXhIZWlnaHQgPSAtMTtcclxuXHRcdGlmICgkKCcuY29udGFjdHMtdGl0bGUnKS5sZW5ndGggIT0gMCkge1xyXG5cdFx0XHQkKCcuY29udGFjdHMtdGl0bGUnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCQodGhpcykucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuXHRcdFx0XHRtYXhIZWlnaHQgPSBtYXhIZWlnaHQgPiAkKHRoaXMpLmhlaWdodCgpID8gbWF4SGVpZ2h0IDogJCh0aGlzKS5oZWlnaHQoKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQkKCcuY29udGFjdHMtdGl0bGUnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCQodGhpcykuaGVpZ2h0KG1heEhlaWdodCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH0gZWxzZSB7XHJcblx0XHRpZiAoJCgnLmNvbnRhY3RzLXRpdGxlJykubGVuZ3RoICE9IDApIHtcclxuXHRcdFx0JCgnLmNvbnRhY3RzLXRpdGxlJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQkKHRoaXMpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxufSk7XHJcblxyXG4kKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xyXG5cclxufSk7XHJcblxyXG4kKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcblxyXG59KTsiLCIvKiEgbGlnaHRnYWxsZXJ5IC0gdjEuMi4xMiAtIDIwMTYtMDEtMDNcclxuKiBodHRwOi8vc2FjaGluY2hvb2x1ci5naXRodWIuaW8vbGlnaHRHYWxsZXJ5L1xyXG4qIENvcHlyaWdodCAoYykgMjAxNiBTYWNoaW4gTjsgTGljZW5zZWQgQXBhY2hlIDIuMCAqL1xyXG4hZnVuY3Rpb24oYSxiLGMsZCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9e2Z1bGxTY3JlZW46ITB9LGY9ZnVuY3Rpb24oYil7cmV0dXJuIHRoaXMuY29yZT1hKGIpLmRhdGEoXCJsaWdodEdhbGxlcnlcIiksdGhpcy4kZWw9YShiKSx0aGlzLmNvcmUucz1hLmV4dGVuZCh7fSxlLHRoaXMuY29yZS5zKSx0aGlzLmluaXQoKSx0aGlzfTtmLnByb3RvdHlwZS5pbml0PWZ1bmN0aW9uKCl7dmFyIGE9XCJcIjtpZih0aGlzLmNvcmUucy5mdWxsU2NyZWVuKXtpZighKGMuZnVsbHNjcmVlbkVuYWJsZWR8fGMud2Via2l0RnVsbHNjcmVlbkVuYWJsZWR8fGMubW96RnVsbFNjcmVlbkVuYWJsZWR8fGMubXNGdWxsc2NyZWVuRW5hYmxlZCkpcmV0dXJuO2E9JzxzcGFuIGNsYXNzPVwibGctZnVsbHNjcmVlbiBsZy1pY29uXCI+PC9zcGFuPicsdGhpcy5jb3JlLiRvdXRlci5maW5kKFwiLmxnLXRvb2xiYXJcIikuYXBwZW5kKGEpLHRoaXMuZnVsbFNjcmVlbigpfX0sZi5wcm90b3R5cGUucmVxdWVzdEZ1bGxzY3JlZW49ZnVuY3Rpb24oKXt2YXIgYT1jLmRvY3VtZW50RWxlbWVudDthLnJlcXVlc3RGdWxsc2NyZWVuP2EucmVxdWVzdEZ1bGxzY3JlZW4oKTphLm1zUmVxdWVzdEZ1bGxzY3JlZW4/YS5tc1JlcXVlc3RGdWxsc2NyZWVuKCk6YS5tb3pSZXF1ZXN0RnVsbFNjcmVlbj9hLm1velJlcXVlc3RGdWxsU2NyZWVuKCk6YS53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbiYmYS53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpfSxmLnByb3RvdHlwZS5leGl0RnVsbHNjcmVlbj1mdW5jdGlvbigpe2MuZXhpdEZ1bGxzY3JlZW4/Yy5leGl0RnVsbHNjcmVlbigpOmMubXNFeGl0RnVsbHNjcmVlbj9jLm1zRXhpdEZ1bGxzY3JlZW4oKTpjLm1vekNhbmNlbEZ1bGxTY3JlZW4/Yy5tb3pDYW5jZWxGdWxsU2NyZWVuKCk6Yy53ZWJraXRFeGl0RnVsbHNjcmVlbiYmYy53ZWJraXRFeGl0RnVsbHNjcmVlbigpfSxmLnByb3RvdHlwZS5mdWxsU2NyZWVuPWZ1bmN0aW9uKCl7dmFyIGI9dGhpczthKGMpLm9uKFwiZnVsbHNjcmVlbmNoYW5nZS5sZyB3ZWJraXRmdWxsc2NyZWVuY2hhbmdlLmxnIG1vemZ1bGxzY3JlZW5jaGFuZ2UubGcgTVNGdWxsc2NyZWVuQ2hhbmdlLmxnXCIsZnVuY3Rpb24oKXtiLmNvcmUuJG91dGVyLnRvZ2dsZUNsYXNzKFwibGctZnVsbHNjcmVlbi1vblwiKX0pLHRoaXMuY29yZS4kb3V0ZXIuZmluZChcIi5sZy1mdWxsc2NyZWVuXCIpLm9uKFwiY2xpY2subGdcIixmdW5jdGlvbigpe2MuZnVsbHNjcmVlbkVsZW1lbnR8fGMubW96RnVsbFNjcmVlbkVsZW1lbnR8fGMud2Via2l0RnVsbHNjcmVlbkVsZW1lbnR8fGMubXNGdWxsc2NyZWVuRWxlbWVudD9iLmV4aXRGdWxsc2NyZWVuKCk6Yi5yZXF1ZXN0RnVsbHNjcmVlbigpfSl9LGYucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oKXt0aGlzLmV4aXRGdWxsc2NyZWVuKCksYShjKS5vZmYoXCJmdWxsc2NyZWVuY2hhbmdlLmxnIHdlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UubGcgbW96ZnVsbHNjcmVlbmNoYW5nZS5sZyBNU0Z1bGxzY3JlZW5DaGFuZ2UubGdcIil9LGEuZm4ubGlnaHRHYWxsZXJ5Lm1vZHVsZXMuZnVsbHNjcmVlbj1mfShqUXVlcnksd2luZG93LGRvY3VtZW50KTsiLCIvKiEgbGlnaHRnYWxsZXJ5IC0gdjEuMi4xMiAtIDIwMTYtMDEtMDNcclxuKiBodHRwOi8vc2FjaGluY2hvb2x1ci5naXRodWIuaW8vbGlnaHRHYWxsZXJ5L1xyXG4qIENvcHlyaWdodCAoYykgMjAxNiBTYWNoaW4gTjsgTGljZW5zZWQgQXBhY2hlIDIuMCAqL1xyXG4hZnVuY3Rpb24oYSxiLGMsZCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9e3RodW1ibmFpbDohMCxhbmltYXRlVGh1bWI6ITAsY3VycmVudFBhZ2VyUG9zaXRpb246XCJtaWRkbGVcIix0aHVtYldpZHRoOjEwMCx0aHVtYkNvbnRIZWlnaHQ6MTAwLHRodW1iTWFyZ2luOjUsZXhUaHVtYkltYWdlOiExLHNob3dUaHVtYkJ5RGVmYXVsdDohMCx0b29nbGVUaHVtYjohMCxwdWxsQ2FwdGlvblVwOiEwLGVuYWJsZVRodW1iRHJhZzohMCxlbmFibGVUaHVtYlN3aXBlOiEwLHN3aXBlVGhyZXNob2xkOjUwLGxvYWRZb3V0dWJlVGh1bWJuYWlsOiEwLHlvdXR1YmVUaHVtYlNpemU6MSxsb2FkVmltZW9UaHVtYm5haWw6ITAsdmltZW9UaHVtYlNpemU6XCJ0aHVtYm5haWxfc21hbGxcIixsb2FkRGFpbHltb3Rpb25UaHVtYm5haWw6ITB9LGY9ZnVuY3Rpb24oYil7cmV0dXJuIHRoaXMuY29yZT1hKGIpLmRhdGEoXCJsaWdodEdhbGxlcnlcIiksdGhpcy5jb3JlLnM9YS5leHRlbmQoe30sZSx0aGlzLmNvcmUucyksdGhpcy4kZWw9YShiKSx0aGlzLiR0aHVtYk91dGVyPW51bGwsdGhpcy50aHVtYk91dGVyV2lkdGg9MCx0aGlzLnRodW1iVG90YWxXaWR0aD10aGlzLmNvcmUuJGl0ZW1zLmxlbmd0aCoodGhpcy5jb3JlLnMudGh1bWJXaWR0aCt0aGlzLmNvcmUucy50aHVtYk1hcmdpbiksdGhpcy50aHVtYkluZGV4PXRoaXMuY29yZS5pbmRleCx0aGlzLmxlZnQ9MCx0aGlzLmluaXQoKSx0aGlzfTtmLnByb3RvdHlwZS5pbml0PWZ1bmN0aW9uKCl7dmFyIGE9dGhpczt0aGlzLmNvcmUucy50aHVtYm5haWwmJnRoaXMuY29yZS4kaXRlbXMubGVuZ3RoPjEmJih0aGlzLmNvcmUucy5zaG93VGh1bWJCeURlZmF1bHQmJnNldFRpbWVvdXQoZnVuY3Rpb24oKXthLmNvcmUuJG91dGVyLmFkZENsYXNzKFwibGctdGh1bWItb3BlblwiKX0sNzAwKSx0aGlzLmNvcmUucy5wdWxsQ2FwdGlvblVwJiZ0aGlzLmNvcmUuJG91dGVyLmFkZENsYXNzKFwibGctcHVsbC1jYXB0aW9uLXVwXCIpLHRoaXMuYnVpbGQoKSx0aGlzLmNvcmUucy5hbmltYXRlVGh1bWI/KHRoaXMuY29yZS5zLmVuYWJsZVRodW1iRHJhZyYmIXRoaXMuY29yZS5pc1RvdWNoJiZ0aGlzLmNvcmUuZG9Dc3MoKSYmdGhpcy5lbmFibGVUaHVtYkRyYWcoKSx0aGlzLmNvcmUucy5lbmFibGVUaHVtYlN3aXBlJiZ0aGlzLmNvcmUuaXNUb3VjaCYmdGhpcy5jb3JlLmRvQ3NzKCkmJnRoaXMuZW5hYmxlVGh1bWJTd2lwZSgpLHRoaXMudGh1bWJDbGlja2FibGU9ITEpOnRoaXMudGh1bWJDbGlja2FibGU9ITAsdGhpcy50b29nbGUoKSx0aGlzLnRodW1ia2V5UHJlc3MoKSl9LGYucHJvdG90eXBlLmJ1aWxkPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYyhhLGIsYyl7dmFyIGQsaD1lLmNvcmUuaXNWaWRlbyhhLGMpfHx7fSxpPVwiXCI7aC55b3V0dWJlfHxoLnZpbWVvfHxoLmRhaWx5bW90aW9uP2gueW91dHViZT9kPWUuY29yZS5zLmxvYWRZb3V0dWJlVGh1bWJuYWlsP1wiLy9pbWcueW91dHViZS5jb20vdmkvXCIraC55b3V0dWJlWzFdK1wiL1wiK2UuY29yZS5zLnlvdXR1YmVUaHVtYlNpemUrXCIuanBnXCI6YjpoLnZpbWVvP2UuY29yZS5zLmxvYWRWaW1lb1RodW1ibmFpbD8oZD1cIi8vaS52aW1lb2Nkbi5jb20vdmlkZW8vZXJyb3JfXCIrZytcIi5qcGdcIixpPWgudmltZW9bMV0pOmQ9YjpoLmRhaWx5bW90aW9uJiYoZD1lLmNvcmUucy5sb2FkRGFpbHltb3Rpb25UaHVtYm5haWw/XCIvL3d3dy5kYWlseW1vdGlvbi5jb20vdGh1bWJuYWlsL3ZpZGVvL1wiK2guZGFpbHltb3Rpb25bMV06Yik6ZD1iLGYrPSc8ZGl2IGRhdGEtdmltZW8taWQ9XCInK2krJ1wiIGNsYXNzPVwibGctdGh1bWItaXRlbVwiIHN0eWxlPVwid2lkdGg6JytlLmNvcmUucy50aHVtYldpZHRoK1wicHg7IG1hcmdpbi1yaWdodDogXCIrZS5jb3JlLnMudGh1bWJNYXJnaW4rJ3B4XCI+PGltZyBzcmM9XCInK2QrJ1wiIC8+PC9kaXY+JyxpPVwiXCJ9dmFyIGQsZT10aGlzLGY9XCJcIixnPVwiXCIsaD0nPGRpdiBjbGFzcz1cImxnLXRodW1iLW91dGVyXCI+PGRpdiBjbGFzcz1cImxnLXRodW1iIGdyb3VwXCI+PC9kaXY+PC9kaXY+Jztzd2l0Y2godGhpcy5jb3JlLnMudmltZW9UaHVtYlNpemUpe2Nhc2VcInRodW1ibmFpbF9sYXJnZVwiOmc9XCI2NDBcIjticmVhaztjYXNlXCJ0aHVtYm5haWxfbWVkaXVtXCI6Zz1cIjIwMHgxNTBcIjticmVhaztjYXNlXCJ0aHVtYm5haWxfc21hbGxcIjpnPVwiMTAweDc1XCJ9aWYoZS5jb3JlLiRvdXRlci5hZGRDbGFzcyhcImxnLWhhcy10aHVtYlwiKSxlLmNvcmUuJG91dGVyLmZpbmQoXCIubGdcIikuYXBwZW5kKGgpLGUuJHRodW1iT3V0ZXI9ZS5jb3JlLiRvdXRlci5maW5kKFwiLmxnLXRodW1iLW91dGVyXCIpLGUudGh1bWJPdXRlcldpZHRoPWUuJHRodW1iT3V0ZXIud2lkdGgoKSxlLmNvcmUucy5hbmltYXRlVGh1bWImJmUuY29yZS4kb3V0ZXIuZmluZChcIi5sZy10aHVtYlwiKS5jc3Moe3dpZHRoOmUudGh1bWJUb3RhbFdpZHRoK1wicHhcIixwb3NpdGlvbjpcInJlbGF0aXZlXCJ9KSx0aGlzLmNvcmUucy5hbmltYXRlVGh1bWImJmUuJHRodW1iT3V0ZXIuY3NzKFwiaGVpZ2h0XCIsZS5jb3JlLnMudGh1bWJDb250SGVpZ2h0K1wicHhcIiksZS5jb3JlLnMuZHluYW1pYylmb3IodmFyIGk9MDtpPGUuY29yZS5zLmR5bmFtaWNFbC5sZW5ndGg7aSsrKWMoZS5jb3JlLnMuZHluYW1pY0VsW2ldLnNyYyxlLmNvcmUucy5keW5hbWljRWxbaV0udGh1bWIsaSk7ZWxzZSBlLmNvcmUuJGl0ZW1zLmVhY2goZnVuY3Rpb24oYil7ZS5jb3JlLnMuZXhUaHVtYkltYWdlP2MoYSh0aGlzKS5hdHRyKFwiaHJlZlwiKXx8YSh0aGlzKS5hdHRyKFwiZGF0YS1zcmNcIiksYSh0aGlzKS5hdHRyKGUuY29yZS5zLmV4VGh1bWJJbWFnZSksYik6YyhhKHRoaXMpLmF0dHIoXCJocmVmXCIpfHxhKHRoaXMpLmF0dHIoXCJkYXRhLXNyY1wiKSxhKHRoaXMpLmZpbmQoXCJpbWdcIikuYXR0cihcInNyY1wiKSxiKX0pO2UuY29yZS4kb3V0ZXIuZmluZChcIi5sZy10aHVtYlwiKS5odG1sKGYpLGQ9ZS5jb3JlLiRvdXRlci5maW5kKFwiLmxnLXRodW1iLWl0ZW1cIiksZC5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9YSh0aGlzKSxjPWIuYXR0cihcImRhdGEtdmltZW8taWRcIik7YyYmYS5nZXRKU09OKFwiaHR0cDovL3d3dy52aW1lby5jb20vYXBpL3YyL3ZpZGVvL1wiK2MrXCIuanNvbj9jYWxsYmFjaz0/XCIse2Zvcm1hdDpcImpzb25cIn0sZnVuY3Rpb24oYSl7Yi5maW5kKFwiaW1nXCIpLmF0dHIoXCJzcmNcIixhWzBdW2UuY29yZS5zLnZpbWVvVGh1bWJTaXplXSl9KX0pLGQuZXEoZS5jb3JlLmluZGV4KS5hZGRDbGFzcyhcImFjdGl2ZVwiKSxlLmNvcmUuJGVsLm9uKFwib25CZWZvcmVTbGlkZS5sZy50bVwiLGZ1bmN0aW9uKCl7ZC5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxkLmVxKGUuY29yZS5pbmRleCkuYWRkQ2xhc3MoXCJhY3RpdmVcIil9KSxkLm9uKFwiY2xpY2subGcgdG91Y2hlbmQubGdcIixmdW5jdGlvbigpe3ZhciBiPWEodGhpcyk7c2V0VGltZW91dChmdW5jdGlvbigpeyhlLnRodW1iQ2xpY2thYmxlJiYhZS5jb3JlLmxnQnVzeXx8IWUuY29yZS5kb0NzcygpKSYmKGUuY29yZS5pbmRleD1iLmluZGV4KCksZS5jb3JlLnNsaWRlKGUuY29yZS5pbmRleCwhMSwhMCkpfSw1MCl9KSxlLmNvcmUuJGVsLm9uKFwib25CZWZvcmVTbGlkZS5sZy50bVwiLGZ1bmN0aW9uKCl7ZS5hbmltYXRlVGh1bWIoZS5jb3JlLmluZGV4KX0pLGEoYikub24oXCJyZXNpemUubGcudGh1bWIgb3JpZW50YXRpb25jaGFuZ2UubGcudGh1bWJcIixmdW5jdGlvbigpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXtlLmFuaW1hdGVUaHVtYihlLmNvcmUuaW5kZXgpLGUudGh1bWJPdXRlcldpZHRoPWUuJHRodW1iT3V0ZXIud2lkdGgoKX0sMjAwKX0pfSxmLnByb3RvdHlwZS5zZXRUcmFuc2xhdGU9ZnVuY3Rpb24oYSl7dGhpcy5jb3JlLiRvdXRlci5maW5kKFwiLmxnLXRodW1iXCIpLmNzcyh7dHJhbnNmb3JtOlwidHJhbnNsYXRlM2QoLVwiK2ErXCJweCwgMHB4LCAwcHgpXCJ9KX0sZi5wcm90b3R5cGUuYW5pbWF0ZVRodW1iPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuY29yZS4kb3V0ZXIuZmluZChcIi5sZy10aHVtYlwiKTtpZih0aGlzLmNvcmUucy5hbmltYXRlVGh1bWIpe3ZhciBjO3N3aXRjaCh0aGlzLmNvcmUucy5jdXJyZW50UGFnZXJQb3NpdGlvbil7Y2FzZVwibGVmdFwiOmM9MDticmVhaztjYXNlXCJtaWRkbGVcIjpjPXRoaXMudGh1bWJPdXRlcldpZHRoLzItdGhpcy5jb3JlLnMudGh1bWJXaWR0aC8yO2JyZWFrO2Nhc2VcInJpZ2h0XCI6Yz10aGlzLnRodW1iT3V0ZXJXaWR0aC10aGlzLmNvcmUucy50aHVtYldpZHRofXRoaXMubGVmdD0odGhpcy5jb3JlLnMudGh1bWJXaWR0aCt0aGlzLmNvcmUucy50aHVtYk1hcmdpbikqYS0xLWMsdGhpcy5sZWZ0PnRoaXMudGh1bWJUb3RhbFdpZHRoLXRoaXMudGh1bWJPdXRlcldpZHRoJiYodGhpcy5sZWZ0PXRoaXMudGh1bWJUb3RhbFdpZHRoLXRoaXMudGh1bWJPdXRlcldpZHRoKSx0aGlzLmxlZnQ8MCYmKHRoaXMubGVmdD0wKSx0aGlzLmNvcmUubEdhbGxlcnlPbj8oYi5oYXNDbGFzcyhcIm9uXCIpfHx0aGlzLmNvcmUuJG91dGVyLmZpbmQoXCIubGctdGh1bWJcIikuY3NzKFwidHJhbnNpdGlvbi1kdXJhdGlvblwiLHRoaXMuY29yZS5zLnNwZWVkK1wibXNcIiksdGhpcy5jb3JlLmRvQ3NzKCl8fGIuYW5pbWF0ZSh7bGVmdDotdGhpcy5sZWZ0K1wicHhcIn0sdGhpcy5jb3JlLnMuc3BlZWQpKTp0aGlzLmNvcmUuZG9Dc3MoKXx8Yi5jc3MoXCJsZWZ0XCIsLXRoaXMubGVmdCtcInB4XCIpLHRoaXMuc2V0VHJhbnNsYXRlKHRoaXMubGVmdCl9fSxmLnByb3RvdHlwZS5lbmFibGVUaHVtYkRyYWc9ZnVuY3Rpb24oKXt2YXIgYz10aGlzLGQ9MCxlPTAsZj0hMSxnPSExLGg9MDtjLiR0aHVtYk91dGVyLmFkZENsYXNzKFwibGctZ3JhYlwiKSxjLmNvcmUuJG91dGVyLmZpbmQoXCIubGctdGh1bWJcIikub24oXCJtb3VzZWRvd24ubGcudGh1bWJcIixmdW5jdGlvbihhKXtjLnRodW1iVG90YWxXaWR0aD5jLnRodW1iT3V0ZXJXaWR0aCYmKGEucHJldmVudERlZmF1bHQoKSxkPWEucGFnZVgsZj0hMCxjLmNvcmUuJG91dGVyLnNjcm9sbExlZnQrPTEsYy5jb3JlLiRvdXRlci5zY3JvbGxMZWZ0LT0xLGMudGh1bWJDbGlja2FibGU9ITEsYy4kdGh1bWJPdXRlci5yZW1vdmVDbGFzcyhcImxnLWdyYWJcIikuYWRkQ2xhc3MoXCJsZy1ncmFiYmluZ1wiKSl9KSxhKGIpLm9uKFwibW91c2Vtb3ZlLmxnLnRodW1iXCIsZnVuY3Rpb24oYSl7ZiYmKGg9Yy5sZWZ0LGc9ITAsZT1hLnBhZ2VYLGMuJHRodW1iT3V0ZXIuYWRkQ2xhc3MoXCJsZy1kcmFnZ2luZ1wiKSxoLT1lLWQsaD5jLnRodW1iVG90YWxXaWR0aC1jLnRodW1iT3V0ZXJXaWR0aCYmKGg9Yy50aHVtYlRvdGFsV2lkdGgtYy50aHVtYk91dGVyV2lkdGgpLDA+aCYmKGg9MCksYy5zZXRUcmFuc2xhdGUoaCkpfSksYShiKS5vbihcIm1vdXNldXAubGcudGh1bWJcIixmdW5jdGlvbigpe2c/KGc9ITEsYy4kdGh1bWJPdXRlci5yZW1vdmVDbGFzcyhcImxnLWRyYWdnaW5nXCIpLGMubGVmdD1oLE1hdGguYWJzKGUtZCk8Yy5jb3JlLnMuc3dpcGVUaHJlc2hvbGQmJihjLnRodW1iQ2xpY2thYmxlPSEwKSk6Yy50aHVtYkNsaWNrYWJsZT0hMCxmJiYoZj0hMSxjLiR0aHVtYk91dGVyLnJlbW92ZUNsYXNzKFwibGctZ3JhYmJpbmdcIikuYWRkQ2xhc3MoXCJsZy1ncmFiXCIpKX0pfSxmLnByb3RvdHlwZS5lbmFibGVUaHVtYlN3aXBlPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcyxiPTAsYz0wLGQ9ITEsZT0wO2EuY29yZS4kb3V0ZXIuZmluZChcIi5sZy10aHVtYlwiKS5vbihcInRvdWNoc3RhcnQubGdcIixmdW5jdGlvbihjKXthLnRodW1iVG90YWxXaWR0aD5hLnRodW1iT3V0ZXJXaWR0aCYmKGMucHJldmVudERlZmF1bHQoKSxiPWMub3JpZ2luYWxFdmVudC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYLGEudGh1bWJDbGlja2FibGU9ITEpfSksYS5jb3JlLiRvdXRlci5maW5kKFwiLmxnLXRodW1iXCIpLm9uKFwidG91Y2htb3ZlLmxnXCIsZnVuY3Rpb24oZil7YS50aHVtYlRvdGFsV2lkdGg+YS50aHVtYk91dGVyV2lkdGgmJihmLnByZXZlbnREZWZhdWx0KCksYz1mLm9yaWdpbmFsRXZlbnQudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCxkPSEwLGEuJHRodW1iT3V0ZXIuYWRkQ2xhc3MoXCJsZy1kcmFnZ2luZ1wiKSxlPWEubGVmdCxlLT1jLWIsZT5hLnRodW1iVG90YWxXaWR0aC1hLnRodW1iT3V0ZXJXaWR0aCYmKGU9YS50aHVtYlRvdGFsV2lkdGgtYS50aHVtYk91dGVyV2lkdGgpLDA+ZSYmKGU9MCksYS5zZXRUcmFuc2xhdGUoZSkpfSksYS5jb3JlLiRvdXRlci5maW5kKFwiLmxnLXRodW1iXCIpLm9uKFwidG91Y2hlbmQubGdcIixmdW5jdGlvbigpe2EudGh1bWJUb3RhbFdpZHRoPmEudGh1bWJPdXRlcldpZHRoJiZkPyhkPSExLGEuJHRodW1iT3V0ZXIucmVtb3ZlQ2xhc3MoXCJsZy1kcmFnZ2luZ1wiKSxNYXRoLmFicyhjLWIpPGEuY29yZS5zLnN3aXBlVGhyZXNob2xkJiYoYS50aHVtYkNsaWNrYWJsZT0hMCksYS5sZWZ0PWUpOmEudGh1bWJDbGlja2FibGU9ITB9KX0sZi5wcm90b3R5cGUudG9vZ2xlPWZ1bmN0aW9uKCl7dmFyIGE9dGhpczthLmNvcmUucy50b29nbGVUaHVtYiYmKGEuY29yZS4kb3V0ZXIuYWRkQ2xhc3MoXCJsZy1jYW4tdG9nZ2xlXCIpLGEuJHRodW1iT3V0ZXIuYXBwZW5kKCc8c3BhbiBjbGFzcz1cImxnLXRvb2dsZS10aHVtYiBsZy1pY29uXCI+PC9zcGFuPicpLGEuY29yZS4kb3V0ZXIuZmluZChcIi5sZy10b29nbGUtdGh1bWJcIikub24oXCJjbGljay5sZ1wiLGZ1bmN0aW9uKCl7YS5jb3JlLiRvdXRlci50b2dnbGVDbGFzcyhcImxnLXRodW1iLW9wZW5cIil9KSl9LGYucHJvdG90eXBlLnRodW1ia2V5UHJlc3M9ZnVuY3Rpb24oKXt2YXIgYz10aGlzO2EoYikub24oXCJrZXlkb3duLmxnLnRodW1iXCIsZnVuY3Rpb24oYSl7Mzg9PT1hLmtleUNvZGU/KGEucHJldmVudERlZmF1bHQoKSxjLmNvcmUuJG91dGVyLmFkZENsYXNzKFwibGctdGh1bWItb3BlblwiKSk6NDA9PT1hLmtleUNvZGUmJihhLnByZXZlbnREZWZhdWx0KCksYy5jb3JlLiRvdXRlci5yZW1vdmVDbGFzcyhcImxnLXRodW1iLW9wZW5cIikpfSl9LGYucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oKXt0aGlzLmNvcmUucy50aHVtYm5haWwmJnRoaXMuY29yZS4kaXRlbXMubGVuZ3RoPjEmJihhKGIpLm9mZihcInJlc2l6ZS5sZy50aHVtYiBvcmllbnRhdGlvbmNoYW5nZS5sZy50aHVtYiBrZXlkb3duLmxnLnRodW1iXCIpLHRoaXMuJHRodW1iT3V0ZXIucmVtb3ZlKCksdGhpcy5jb3JlLiRvdXRlci5yZW1vdmVDbGFzcyhcImxnLWhhcy10aHVtYlwiKSl9LGEuZm4ubGlnaHRHYWxsZXJ5Lm1vZHVsZXMuVGh1bWJuYWlsPWZ9KGpRdWVyeSx3aW5kb3csZG9jdW1lbnQpOyIsIi8qISBsaWdodGdhbGxlcnkgLSB2MS4yLjEyIC0gMjAxNi0wMS0wM1xyXG4qIGh0dHA6Ly9zYWNoaW5jaG9vbHVyLmdpdGh1Yi5pby9saWdodEdhbGxlcnkvXHJcbiogQ29weXJpZ2h0IChjKSAyMDE2IFNhY2hpbiBOOyBMaWNlbnNlZCBBcGFjaGUgMi4wICovXHJcbiFmdW5jdGlvbihhLGIsYyxkKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKGIsZCl7aWYodGhpcy5lbD1iLHRoaXMuJGVsPWEoYiksdGhpcy5zPWEuZXh0ZW5kKHt9LGYsZCksdGhpcy5zLmR5bmFtaWMmJlwidW5kZWZpbmVkXCIhPT10aGlzLnMuZHluYW1pY0VsJiZ0aGlzLnMuZHluYW1pY0VsLmNvbnN0cnVjdG9yPT09QXJyYXkmJiF0aGlzLnMuZHluYW1pY0VsLmxlbmd0aCl0aHJvd1wiV2hlbiB1c2luZyBkeW5hbWljIG1vZGUsIHlvdSBtdXN0IGFsc28gZGVmaW5lIGR5bmFtaWNFbCBhcyBhbiBBcnJheS5cIjtyZXR1cm4gdGhpcy5tb2R1bGVzPXt9LHRoaXMubEdhbGxlcnlPbj0hMSx0aGlzLmxnQnVzeT0hMSx0aGlzLmhpZGVCYXJ0aW1lb3V0PSExLHRoaXMuaXNUb3VjaD1cIm9udG91Y2hzdGFydFwiaW4gYy5kb2N1bWVudEVsZW1lbnQsdGhpcy5zLnNsaWRlRW5kQW5pbWF0b2luJiYodGhpcy5zLmhpZGVDb250cm9sT25FbmQ9ITEpLHRoaXMucy5keW5hbWljP3RoaXMuJGl0ZW1zPXRoaXMucy5keW5hbWljRWw6XCJ0aGlzXCI9PT10aGlzLnMuc2VsZWN0b3I/dGhpcy4kaXRlbXM9dGhpcy4kZWw6XCJcIiE9PXRoaXMucy5zZWxlY3Rvcj90aGlzLnMuc2VsZWN0V2l0aGluP3RoaXMuJGl0ZW1zPWEodGhpcy5zLnNlbGVjdFdpdGhpbikuZmluZCh0aGlzLnMuc2VsZWN0b3IpOnRoaXMuJGl0ZW1zPXRoaXMuJGVsLmZpbmQoYSh0aGlzLnMuc2VsZWN0b3IpKTp0aGlzLiRpdGVtcz10aGlzLiRlbC5jaGlsZHJlbigpLHRoaXMuJHNsaWRlPVwiXCIsdGhpcy4kb3V0ZXI9XCJcIix0aGlzLmluaXQoKSx0aGlzfXZhciBmPXttb2RlOlwibGctc2xpZGVcIixjc3NFYXNpbmc6XCJlYXNlXCIsZWFzaW5nOlwibGluZWFyXCIsc3BlZWQ6NjAwLGhlaWdodDpcIjEwMCVcIix3aWR0aDpcIjEwMCVcIixhZGRDbGFzczpcIlwiLHN0YXJ0Q2xhc3M6XCJsZy1zdGFydC16b29tXCIsYmFja2Ryb3BEdXJhdGlvbjoxNTAsaGlkZUJhcnNEZWxheTo2ZTMsdXNlTGVmdDohMSxjbG9zYWJsZTohMCxsb29wOiEwLGVzY0tleTohMCxrZXlQcmVzczohMCxjb250cm9sczohMCxzbGlkZUVuZEFuaW1hdG9pbjohMCxoaWRlQ29udHJvbE9uRW5kOiExLG1vdXNld2hlZWw6ITAsYXBwZW5kU3ViSHRtbFRvOlwiLmxnLXN1Yi1odG1sXCIscHJlbG9hZDoxLHNob3dBZnRlckxvYWQ6ITAsc2VsZWN0b3I6XCJcIixzZWxlY3RXaXRoaW46XCJcIixuZXh0SHRtbDpcIlwiLHByZXZIdG1sOlwiXCIsaW5kZXg6ITEsaWZyYW1lTWF4V2lkdGg6XCIxMDAlXCIsZG93bmxvYWQ6ITAsY291bnRlcjohMCxhcHBlbmRDb3VudGVyVG86XCIubGctdG9vbGJhclwiLHN3aXBlVGhyZXNob2xkOjUwLGVuYWJsZVN3aXBlOiEwLGVuYWJsZURyYWc6ITAsZHluYW1pYzohMSxkeW5hbWljRWw6W10sZ2FsbGVyeUlkOjF9O2UucHJvdG90eXBlLmluaXQ9ZnVuY3Rpb24oKXt2YXIgYz10aGlzO2Mucy5wcmVsb2FkPmMuJGl0ZW1zLmxlbmd0aCYmKGMucy5wcmVsb2FkPWMuJGl0ZW1zLmxlbmd0aCk7dmFyIGQ9Yi5sb2NhdGlvbi5oYXNoO2QuaW5kZXhPZihcImxnPVwiK3RoaXMucy5nYWxsZXJ5SWQpPjAmJihjLmluZGV4PXBhcnNlSW50KGQuc3BsaXQoXCImc2xpZGU9XCIpWzFdLDEwKSxhKFwiYm9keVwiKS5hZGRDbGFzcyhcImxnLWZyb20taGFzaFwiKSxhKFwiYm9keVwiKS5oYXNDbGFzcyhcImxnLW9uXCIpfHxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Yy5idWlsZChjLmluZGV4KSxhKFwiYm9keVwiKS5hZGRDbGFzcyhcImxnLW9uXCIpfSkpLGMucy5keW5hbWljPyhjLiRlbC50cmlnZ2VyKFwib25CZWZvcmVPcGVuLmxnXCIpLGMuaW5kZXg9Yy5zLmluZGV4fHwwLGEoXCJib2R5XCIpLmhhc0NsYXNzKFwibGctb25cIil8fHNldFRpbWVvdXQoZnVuY3Rpb24oKXtjLmJ1aWxkKGMuaW5kZXgpLGEoXCJib2R5XCIpLmFkZENsYXNzKFwibGctb25cIil9KSk6Yy4kaXRlbXMub24oXCJjbGljay5sZ2N1c3RvbVwiLGZ1bmN0aW9uKGIpe3RyeXtiLnByZXZlbnREZWZhdWx0KCksYi5wcmV2ZW50RGVmYXVsdCgpfWNhdGNoKGQpe2IucmV0dXJuVmFsdWU9ITF9Yy4kZWwudHJpZ2dlcihcIm9uQmVmb3JlT3Blbi5sZ1wiKSxjLmluZGV4PWMucy5pbmRleHx8Yy4kaXRlbXMuaW5kZXgodGhpcyksYShcImJvZHlcIikuaGFzQ2xhc3MoXCJsZy1vblwiKXx8KGMuYnVpbGQoYy5pbmRleCksYShcImJvZHlcIikuYWRkQ2xhc3MoXCJsZy1vblwiKSl9KX0sZS5wcm90b3R5cGUuYnVpbGQ9ZnVuY3Rpb24oYil7dmFyIGM9dGhpcztjLnN0cnVjdHVyZSgpLGEuZWFjaChhLmZuLmxpZ2h0R2FsbGVyeS5tb2R1bGVzLGZ1bmN0aW9uKGIpe2MubW9kdWxlc1tiXT1uZXcgYS5mbi5saWdodEdhbGxlcnkubW9kdWxlc1tiXShjLmVsKX0pLGMuc2xpZGUoYiwhMSwhMSksYy5zLmtleVByZXNzJiZjLmtleVByZXNzKCksYy4kaXRlbXMubGVuZ3RoPjEmJihjLmFycm93KCksc2V0VGltZW91dChmdW5jdGlvbigpe2MuZW5hYmxlRHJhZygpLGMuZW5hYmxlU3dpcGUoKX0sNTApLGMucy5tb3VzZXdoZWVsJiZjLm1vdXNld2hlZWwoKSksYy5jb3VudGVyKCksYy5jbG9zZUdhbGxlcnkoKSxjLiRlbC50cmlnZ2VyKFwib25BZnRlck9wZW4ubGdcIiksYy4kb3V0ZXIub24oXCJtb3VzZW1vdmUubGcgY2xpY2subGcgdG91Y2hzdGFydC5sZ1wiLGZ1bmN0aW9uKCl7Yy4kb3V0ZXIucmVtb3ZlQ2xhc3MoXCJsZy1oaWRlLWl0ZW1zXCIpLGNsZWFyVGltZW91dChjLmhpZGVCYXJ0aW1lb3V0KSxjLmhpZGVCYXJ0aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtjLiRvdXRlci5hZGRDbGFzcyhcImxnLWhpZGUtaXRlbXNcIil9LGMucy5oaWRlQmFyc0RlbGF5KX0pfSxlLnByb3RvdHlwZS5zdHJ1Y3R1cmU9ZnVuY3Rpb24oKXt2YXIgYyxkPVwiXCIsZT1cIlwiLGY9MCxnPVwiXCIsaD10aGlzO2ZvcihhKFwiYm9keVwiKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJsZy1iYWNrZHJvcFwiPjwvZGl2PicpLGEoXCIubGctYmFja2Ryb3BcIikuY3NzKFwidHJhbnNpdGlvbi1kdXJhdGlvblwiLHRoaXMucy5iYWNrZHJvcER1cmF0aW9uK1wibXNcIiksZj0wO2Y8dGhpcy4kaXRlbXMubGVuZ3RoO2YrKylkKz0nPGRpdiBjbGFzcz1cImxnLWl0ZW1cIj48L2Rpdj4nO2lmKHRoaXMucy5jb250cm9scyYmdGhpcy4kaXRlbXMubGVuZ3RoPjEmJihlPSc8ZGl2IGNsYXNzPVwibGctYWN0aW9uc1wiPjxkaXYgY2xhc3M9XCJsZy1wcmV2IGxnLWljb25cIj4nK3RoaXMucy5wcmV2SHRtbCsnPC9kaXY+PGRpdiBjbGFzcz1cImxnLW5leHQgbGctaWNvblwiPicrdGhpcy5zLm5leHRIdG1sK1wiPC9kaXY+PC9kaXY+XCIpLFwiLmxnLXN1Yi1odG1sXCI9PT10aGlzLnMuYXBwZW5kU3ViSHRtbFRvJiYoZz0nPGRpdiBjbGFzcz1cImxnLXN1Yi1odG1sXCI+PC9kaXY+JyksYz0nPGRpdiBjbGFzcz1cImxnLW91dGVyICcrdGhpcy5zLmFkZENsYXNzK1wiIFwiK3RoaXMucy5zdGFydENsYXNzKydcIj48ZGl2IGNsYXNzPVwibGdcIiBzdHlsZT1cIndpZHRoOicrdGhpcy5zLndpZHRoK1wiOyBoZWlnaHQ6XCIrdGhpcy5zLmhlaWdodCsnXCI+PGRpdiBjbGFzcz1cImxnLWlubmVyXCI+JytkKyc8L2Rpdj48ZGl2IGNsYXNzPVwibGctdG9vbGJhciBncm91cFwiPjxzcGFuIGNsYXNzPVwibGctY2xvc2UgbGctaWNvblwiPjwvc3Bhbj48L2Rpdj4nK2UrZytcIjwvZGl2PjwvZGl2PlwiLGEoXCJib2R5XCIpLmFwcGVuZChjKSx0aGlzLiRvdXRlcj1hKFwiLmxnLW91dGVyXCIpLHRoaXMuJHNsaWRlPXRoaXMuJG91dGVyLmZpbmQoXCIubGctaXRlbVwiKSx0aGlzLnMudXNlTGVmdD8odGhpcy4kb3V0ZXIuYWRkQ2xhc3MoXCJsZy11c2UtbGVmdFwiKSx0aGlzLnMubW9kZT1cImxnLXNsaWRlXCIpOnRoaXMuJG91dGVyLmFkZENsYXNzKFwibGctdXNlLWNzczNcIiksaC5zZXRUb3AoKSxhKGIpLm9uKFwicmVzaXplLmxnIG9yaWVudGF0aW9uY2hhbmdlLmxnXCIsZnVuY3Rpb24oKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aC5zZXRUb3AoKX0sMTAwKX0pLHRoaXMuJHNsaWRlLmVxKHRoaXMuaW5kZXgpLmFkZENsYXNzKFwibGctY3VycmVudFwiKSx0aGlzLmRvQ3NzKCk/dGhpcy4kb3V0ZXIuYWRkQ2xhc3MoXCJsZy1jc3MzXCIpOih0aGlzLiRvdXRlci5hZGRDbGFzcyhcImxnLWNzc1wiKSx0aGlzLnMuc3BlZWQ9MCksdGhpcy4kb3V0ZXIuYWRkQ2xhc3ModGhpcy5zLm1vZGUpLHRoaXMucy5lbmFibGVEcmFnJiZ0aGlzLiRpdGVtcy5sZW5ndGg+MSYmdGhpcy4kb3V0ZXIuYWRkQ2xhc3MoXCJsZy1ncmFiXCIpLHRoaXMucy5zaG93QWZ0ZXJMb2FkJiZ0aGlzLiRvdXRlci5hZGRDbGFzcyhcImxnLXNob3ctYWZ0ZXItbG9hZFwiKSx0aGlzLmRvQ3NzKCkpe3ZhciBpPXRoaXMuJG91dGVyLmZpbmQoXCIubGctaW5uZXJcIik7aS5jc3MoXCJ0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvblwiLHRoaXMucy5jc3NFYXNpbmcpLGkuY3NzKFwidHJhbnNpdGlvbi1kdXJhdGlvblwiLHRoaXMucy5zcGVlZCtcIm1zXCIpfWEoXCIubGctYmFja2Ryb3BcIikuYWRkQ2xhc3MoXCJpblwiKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aC4kb3V0ZXIuYWRkQ2xhc3MoXCJsZy12aXNpYmxlXCIpfSx0aGlzLnMuYmFja2Ryb3BEdXJhdGlvbiksdGhpcy5zLmRvd25sb2FkJiZ0aGlzLiRvdXRlci5maW5kKFwiLmxnLXRvb2xiYXJcIikuYXBwZW5kKCc8YSBpZD1cImxnLWRvd25sb2FkXCIgdGFyZ2V0PVwiX2JsYW5rXCIgZG93bmxvYWQgY2xhc3M9XCJsZy1kb3dubG9hZCBsZy1pY29uXCI+PC9hPicpLHRoaXMucHJldlNjcm9sbFRvcD1hKGIpLnNjcm9sbFRvcCgpfSxlLnByb3RvdHlwZS5zZXRUb3A9ZnVuY3Rpb24oKXtpZihcIjEwMCVcIiE9PXRoaXMucy5oZWlnaHQpe3ZhciBjPWEoYikuaGVpZ2h0KCksZD0oYy1wYXJzZUludCh0aGlzLnMuaGVpZ2h0LDEwKSkvMixlPXRoaXMuJG91dGVyLmZpbmQoXCIubGdcIik7Yz49cGFyc2VJbnQodGhpcy5zLmhlaWdodCwxMCk/ZS5jc3MoXCJ0b3BcIixkK1wicHhcIik6ZS5jc3MoXCJ0b3BcIixcIjBweFwiKX19LGUucHJvdG90eXBlLmRvQ3NzPWZ1bmN0aW9uKCl7dmFyIGE9ZnVuY3Rpb24oKXt2YXIgYT1bXCJ0cmFuc2l0aW9uXCIsXCJNb3pUcmFuc2l0aW9uXCIsXCJXZWJraXRUcmFuc2l0aW9uXCIsXCJPVHJhbnNpdGlvblwiLFwibXNUcmFuc2l0aW9uXCIsXCJLaHRtbFRyYW5zaXRpb25cIl0sYj1jLmRvY3VtZW50RWxlbWVudCxkPTA7Zm9yKGQ9MDtkPGEubGVuZ3RoO2QrKylpZihhW2RdaW4gYi5zdHlsZSlyZXR1cm4hMH07cmV0dXJuIGEoKT8hMDohMX0sZS5wcm90b3R5cGUuaXNWaWRlbz1mdW5jdGlvbihhLGIpe3ZhciBjO2lmKGM9dGhpcy5zLmR5bmFtaWM/dGhpcy5zLmR5bmFtaWNFbFtiXS5odG1sOnRoaXMuJGl0ZW1zLmVxKGIpLmF0dHIoXCJkYXRhLWh0bWxcIiksIWEmJmMpcmV0dXJue2h0bWw1OiEwfTt2YXIgZD1hLm1hdGNoKC9cXC9cXC8oPzp3d3dcXC4pP3lvdXR1KD86XFwuYmV8YmVcXC5jb20pXFwvKD86d2F0Y2hcXD92PXxlbWJlZFxcLyk/KFthLXowLTlcXC1cXF9cXCVdKykvaSksZT1hLm1hdGNoKC9cXC9cXC8oPzp3d3dcXC4pP3ZpbWVvLmNvbVxcLyhbMC05YS16XFwtX10rKS9pKSxmPWEubWF0Y2goL1xcL1xcLyg/Ond3d1xcLik/ZGFpLmx5XFwvKFswLTlhLXpcXC1fXSspL2kpO3JldHVybiBkP3t5b3V0dWJlOmR9OmU/e3ZpbWVvOmV9OmY/e2RhaWx5bW90aW9uOmZ9OnZvaWQgMH0sZS5wcm90b3R5cGUuY291bnRlcj1mdW5jdGlvbigpe3RoaXMucy5jb3VudGVyJiZhKHRoaXMucy5hcHBlbmRDb3VudGVyVG8pLmFwcGVuZCgnPGRpdiBpZD1cImxnLWNvdW50ZXJcIj48c3BhbiBpZD1cImxnLWNvdW50ZXItY3VycmVudFwiPicrKHBhcnNlSW50KHRoaXMuaW5kZXgsMTApKzEpKyc8L3NwYW4+IC8gPHNwYW4gaWQ9XCJsZy1jb3VudGVyLWFsbFwiPicrdGhpcy4kaXRlbXMubGVuZ3RoK1wiPC9zcGFuPjwvZGl2PlwiKX0sZS5wcm90b3R5cGUuYWRkSHRtbD1mdW5jdGlvbihiKXt2YXIgYyxkPW51bGw7aWYodGhpcy5zLmR5bmFtaWM/dGhpcy5zLmR5bmFtaWNFbFtiXS5zdWJIdG1sVXJsP2M9dGhpcy5zLmR5bmFtaWNFbFtiXS5zdWJIdG1sVXJsOmQ9dGhpcy5zLmR5bmFtaWNFbFtiXS5zdWJIdG1sOnRoaXMuJGl0ZW1zLmVxKGIpLmF0dHIoXCJkYXRhLXN1Yi1odG1sLXVybFwiKT9jPXRoaXMuJGl0ZW1zLmVxKGIpLmF0dHIoXCJkYXRhLXN1Yi1odG1sLXVybFwiKTpkPXRoaXMuJGl0ZW1zLmVxKGIpLmF0dHIoXCJkYXRhLXN1Yi1odG1sXCIpLCFjKWlmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBkJiZudWxsIT09ZCl7dmFyIGU9ZC5zdWJzdHJpbmcoMCwxKTtkPVwiLlwiPT09ZXx8XCIjXCI9PT1lP2EoZCkuaHRtbCgpOmR9ZWxzZSBkPVwiXCI7XCIubGctc3ViLWh0bWxcIj09PXRoaXMucy5hcHBlbmRTdWJIdG1sVG8/Yz90aGlzLiRvdXRlci5maW5kKHRoaXMucy5hcHBlbmRTdWJIdG1sVG8pLmxvYWQoYyk6dGhpcy4kb3V0ZXIuZmluZCh0aGlzLnMuYXBwZW5kU3ViSHRtbFRvKS5odG1sKGQpOmM/dGhpcy4kc2xpZGUuZXEoYikubG9hZChjKTp0aGlzLiRzbGlkZS5lcShiKS5hcHBlbmQoZCksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGQmJm51bGwhPT1kJiYoXCJcIj09PWQ/dGhpcy4kb3V0ZXIuZmluZCh0aGlzLnMuYXBwZW5kU3ViSHRtbFRvKS5hZGRDbGFzcyhcImxnLWVtcHR5LWh0bWxcIik6dGhpcy4kb3V0ZXIuZmluZCh0aGlzLnMuYXBwZW5kU3ViSHRtbFRvKS5yZW1vdmVDbGFzcyhcImxnLWVtcHR5LWh0bWxcIikpLHRoaXMuJGVsLnRyaWdnZXIoXCJvbkFmdGVyQXBwZW5kU3ViSHRtbC5sZ1wiLFtiXSl9LGUucHJvdG90eXBlLnByZWxvYWQ9ZnVuY3Rpb24oYSl7dmFyIGI9MSxjPTE7Zm9yKGI9MTtiPD10aGlzLnMucHJlbG9hZCYmIShiPj10aGlzLiRpdGVtcy5sZW5ndGgtYSk7YisrKXRoaXMubG9hZENvbnRlbnQoYStiLCExLDApO2ZvcihjPTE7Yzw9dGhpcy5zLnByZWxvYWQmJiEoMD5hLWMpO2MrKyl0aGlzLmxvYWRDb250ZW50KGEtYywhMSwwKX0sZS5wcm90b3R5cGUubG9hZENvbnRlbnQ9ZnVuY3Rpb24oYyxkLGUpe3ZhciBmLGcsaCxpLGosayxsPXRoaXMsbT0hMSxuPWZ1bmN0aW9uKGMpe2Zvcih2YXIgZD1bXSxlPVtdLGY9MDtmPGMubGVuZ3RoO2YrKyl7dmFyIGg9Y1tmXS5zcGxpdChcIiBcIik7XCJcIj09PWhbMF0mJmguc3BsaWNlKDAsMSksZS5wdXNoKGhbMF0pLGQucHVzaChoWzFdKX1mb3IodmFyIGk9YShiKS53aWR0aCgpLGo9MDtqPGQubGVuZ3RoO2orKylpZihwYXJzZUludChkW2pdLDEwKT5pKXtnPWVbal07YnJlYWt9fTtpZihsLnMuZHluYW1pYyl7aWYobC5zLmR5bmFtaWNFbFtjXS5wb3N0ZXImJihtPSEwLGg9bC5zLmR5bmFtaWNFbFtjXS5wb3N0ZXIpLGs9bC5zLmR5bmFtaWNFbFtjXS5odG1sLGc9bC5zLmR5bmFtaWNFbFtjXS5zcmMsbC5zLmR5bmFtaWNFbFtjXS5yZXNwb25zaXZlKXt2YXIgbz1sLnMuZHluYW1pY0VsW2NdLnJlc3BvbnNpdmUuc3BsaXQoXCIsXCIpO24obyl9aT1sLnMuZHluYW1pY0VsW2NdLnNyY3NldCxqPWwucy5keW5hbWljRWxbY10uc2l6ZXN9ZWxzZXtpZihsLiRpdGVtcy5lcShjKS5hdHRyKFwiZGF0YS1wb3N0ZXJcIikmJihtPSEwLGg9bC4kaXRlbXMuZXEoYykuYXR0cihcImRhdGEtcG9zdGVyXCIpKSxrPWwuJGl0ZW1zLmVxKGMpLmF0dHIoXCJkYXRhLWh0bWxcIiksZz1sLiRpdGVtcy5lcShjKS5hdHRyKFwiaHJlZlwiKXx8bC4kaXRlbXMuZXEoYykuYXR0cihcImRhdGEtc3JjXCIpLGwuJGl0ZW1zLmVxKGMpLmF0dHIoXCJkYXRhLXJlc3BvbnNpdmVcIikpe3ZhciBwPWwuJGl0ZW1zLmVxKGMpLmF0dHIoXCJkYXRhLXJlc3BvbnNpdmVcIikuc3BsaXQoXCIsXCIpO24ocCl9aT1sLiRpdGVtcy5lcShjKS5hdHRyKFwiZGF0YS1zcmNzZXRcIiksaj1sLiRpdGVtcy5lcShjKS5hdHRyKFwiZGF0YS1zaXplc1wiKX12YXIgcT0hMTtsLnMuZHluYW1pYz9sLnMuZHluYW1pY0VsW2NdLmlmcmFtZSYmKHE9ITApOlwidHJ1ZVwiPT09bC4kaXRlbXMuZXEoYykuYXR0cihcImRhdGEtaWZyYW1lXCIpJiYocT0hMCk7dmFyIHI9bC5pc1ZpZGVvKGcsYyk7aWYoIWwuJHNsaWRlLmVxKGMpLmhhc0NsYXNzKFwibGctbG9hZGVkXCIpKXtpZihxKWwuJHNsaWRlLmVxKGMpLnByZXBlbmQoJzxkaXYgY2xhc3M9XCJsZy12aWRlby1jb250XCIgc3R5bGU9XCJtYXgtd2lkdGg6JytsLnMuaWZyYW1lTWF4V2lkdGgrJ1wiPjxkaXYgY2xhc3M9XCJsZy12aWRlb1wiPjxpZnJhbWUgY2xhc3M9XCJsZy1vYmplY3RcIiBmcmFtZWJvcmRlcj1cIjBcIiBzcmM9XCInK2crJ1wiICBhbGxvd2Z1bGxzY3JlZW49XCJ0cnVlXCI+PC9pZnJhbWU+PC9kaXY+PC9kaXY+Jyk7ZWxzZSBpZihtKXt2YXIgcz1cIlwiO3M9ciYmci55b3V0dWJlP1wibGctaGFzLXlvdXR1YmVcIjpyJiZyLnZpbWVvP1wibGctaGFzLXZpbWVvXCI6XCJsZy1oYXMtaHRtbDVcIixsLiRzbGlkZS5lcShjKS5wcmVwZW5kKCc8ZGl2IGNsYXNzPVwibGctdmlkZW8tY29udCAnK3MrJyBcIj48ZGl2IGNsYXNzPVwibGctdmlkZW9cIj48c3BhbiBjbGFzcz1cImxnLXZpZGVvLXBsYXlcIj48L3NwYW4+PGltZyBjbGFzcz1cImxnLW9iamVjdCBsZy1oYXMtcG9zdGVyXCIgc3JjPVwiJytoKydcIiAvPjwvZGl2PjwvZGl2PicpfWVsc2Ugcj8obC4kc2xpZGUuZXEoYykucHJlcGVuZCgnPGRpdiBjbGFzcz1cImxnLXZpZGVvLWNvbnQgXCI+PGRpdiBjbGFzcz1cImxnLXZpZGVvXCI+PC9kaXY+PC9kaXY+JyksbC4kZWwudHJpZ2dlcihcImhhc1ZpZGVvLmxnXCIsW2MsZyxrXSkpOmwuJHNsaWRlLmVxKGMpLnByZXBlbmQoJzxkaXYgY2xhc3M9XCJsZy1pbWctd3JhcFwiPjxpbWcgY2xhc3M9XCJsZy1vYmplY3QgbGctaW1hZ2VcIiBzcmM9XCInK2crJ1wiIC8+PC9kaXY+Jyk7aWYobC4kZWwudHJpZ2dlcihcIm9uQWZlckFwcGVuZFNsaWRlLmxnXCIsW2NdKSxmPWwuJHNsaWRlLmVxKGMpLmZpbmQoXCIubGctb2JqZWN0XCIpLGomJmYuYXR0cihcInNpemVzXCIsaiksaSl7Zi5hdHRyKFwic3Jjc2V0XCIsaSk7dHJ5e3BpY3R1cmVmaWxsKHtlbGVtZW50czpbZlswXV19KX1jYXRjaCh0KXtjb25zb2xlLmVycm9yKFwiTWFrZSBzdXJlIHlvdSBoYXZlIGluY2x1ZGVkIFBpY3R1cmVmaWxsIHZlcnNpb24gMlwiKX19XCIubGctc3ViLWh0bWxcIiE9PXRoaXMucy5hcHBlbmRTdWJIdG1sVG8mJmwuYWRkSHRtbChjKSxsLiRzbGlkZS5lcShjKS5hZGRDbGFzcyhcImxnLWxvYWRlZFwiKX1sLiRzbGlkZS5lcShjKS5maW5kKFwiLmxnLW9iamVjdFwiKS5vbihcImxvYWQubGcgZXJyb3IubGdcIixmdW5jdGlvbigpe3ZhciBiPTA7ZSYmIWEoXCJib2R5XCIpLmhhc0NsYXNzKFwibGctZnJvbS1oYXNoXCIpJiYoYj1lKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bC4kc2xpZGUuZXEoYykuYWRkQ2xhc3MoXCJsZy1jb21wbGV0ZVwiKSxsLiRlbC50cmlnZ2VyKFwib25TbGlkZUl0ZW1Mb2FkLmxnXCIsW2MsZXx8MF0pfSxiKX0pLHImJnIuaHRtbDUmJiFtJiZsLiRzbGlkZS5lcShjKS5hZGRDbGFzcyhcImxnLWNvbXBsZXRlXCIpLGQ9PT0hMCYmKGwuJHNsaWRlLmVxKGMpLmhhc0NsYXNzKFwibGctY29tcGxldGVcIik/bC5wcmVsb2FkKGMpOmwuJHNsaWRlLmVxKGMpLmZpbmQoXCIubGctb2JqZWN0XCIpLm9uKFwibG9hZC5sZyBlcnJvci5sZ1wiLGZ1bmN0aW9uKCl7bC5wcmVsb2FkKGMpfSkpfSxlLnByb3RvdHlwZS5zbGlkZT1mdW5jdGlvbihiLGMsZCl7dmFyIGU9dGhpcy4kb3V0ZXIuZmluZChcIi5sZy1jdXJyZW50XCIpLmluZGV4KCksZj10aGlzO2lmKCFmLmxHYWxsZXJ5T258fGUhPT1iKXt2YXIgZz10aGlzLiRzbGlkZS5sZW5ndGgsaD1mLmxHYWxsZXJ5T24/dGhpcy5zLnNwZWVkOjAsaT0hMSxqPSExO2lmKCFmLmxnQnVzeSl7aWYodGhpcy5zLmRvd25sb2FkKXt2YXIgaztrPWYucy5keW5hbWljP2Yucy5keW5hbWljRWxbYl0uZG93bmxvYWRVcmwhPT0hMSYmKGYucy5keW5hbWljRWxbYl0uZG93bmxvYWRVcmx8fGYucy5keW5hbWljRWxbYl0uc3JjKTpcImZhbHNlXCIhPT1mLiRpdGVtcy5lcShiKS5hdHRyKFwiZGF0YS1kb3dubG9hZC11cmxcIikmJihmLiRpdGVtcy5lcShiKS5hdHRyKFwiZGF0YS1kb3dubG9hZC11cmxcIil8fGYuJGl0ZW1zLmVxKGIpLmF0dHIoXCJocmVmXCIpfHxmLiRpdGVtcy5lcShiKS5hdHRyKFwiZGF0YS1zcmNcIikpLGs/KGEoXCIjbGctZG93bmxvYWRcIikuYXR0cihcImhyZWZcIixrKSxmLiRvdXRlci5yZW1vdmVDbGFzcyhcImxnLWhpZGUtZG93bmxvYWRcIikpOmYuJG91dGVyLmFkZENsYXNzKFwibGctaGlkZS1kb3dubG9hZFwiKX1pZih0aGlzLiRlbC50cmlnZ2VyKFwib25CZWZvcmVTbGlkZS5sZ1wiLFtlLGIsYyxkXSksZi5sZ0J1c3k9ITAsY2xlYXJUaW1lb3V0KGYuaGlkZUJhcnRpbWVvdXQpLFwiLmxnLXN1Yi1odG1sXCI9PT10aGlzLnMuYXBwZW5kU3ViSHRtbFRvJiZzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Zi5hZGRIdG1sKGIpfSxoKSx0aGlzLmFycm93RGlzYWJsZShiKSxjKXt2YXIgbD1iLTEsbT1iKzE7MD09PWImJmU9PT1nLTE/KG09MCxsPWctMSk6Yj09PWctMSYmMD09PWUmJihtPTAsbD1nLTEpLHRoaXMuJHNsaWRlLnJlbW92ZUNsYXNzKFwibGctcHJldi1zbGlkZSBsZy1jdXJyZW50IGxnLW5leHQtc2xpZGVcIiksZi4kc2xpZGUuZXEobCkuYWRkQ2xhc3MoXCJsZy1wcmV2LXNsaWRlXCIpLGYuJHNsaWRlLmVxKG0pLmFkZENsYXNzKFwibGctbmV4dC1zbGlkZVwiKSxmLiRzbGlkZS5lcShiKS5hZGRDbGFzcyhcImxnLWN1cnJlbnRcIil9ZWxzZSBmLiRvdXRlci5hZGRDbGFzcyhcImxnLW5vLXRyYW5zXCIpLHRoaXMuJHNsaWRlLnJlbW92ZUNsYXNzKFwibGctcHJldi1zbGlkZSBsZy1uZXh0LXNsaWRlXCIpLGU+Yj8oaj0hMCwwIT09Ynx8ZSE9PWctMXx8ZHx8KGo9ITEsaT0hMCkpOmI+ZSYmKGk9ITAsYiE9PWctMXx8MCE9PWV8fGR8fChqPSEwLGk9ITEpKSxqPyh0aGlzLiRzbGlkZS5lcShiKS5hZGRDbGFzcyhcImxnLXByZXYtc2xpZGVcIiksdGhpcy4kc2xpZGUuZXEoZSkuYWRkQ2xhc3MoXCJsZy1uZXh0LXNsaWRlXCIpKTppJiYodGhpcy4kc2xpZGUuZXEoYikuYWRkQ2xhc3MoXCJsZy1uZXh0LXNsaWRlXCIpLHRoaXMuJHNsaWRlLmVxKGUpLmFkZENsYXNzKFwibGctcHJldi1zbGlkZVwiKSksc2V0VGltZW91dChmdW5jdGlvbigpe2YuJHNsaWRlLnJlbW92ZUNsYXNzKFwibGctY3VycmVudFwiKSxmLiRzbGlkZS5lcShiKS5hZGRDbGFzcyhcImxnLWN1cnJlbnRcIiksZi4kb3V0ZXIucmVtb3ZlQ2xhc3MoXCJsZy1uby10cmFuc1wiKX0sNTApO2YubEdhbGxlcnlPbj8oc2V0VGltZW91dChmdW5jdGlvbigpe2YubG9hZENvbnRlbnQoYiwhMCwwKX0sdGhpcy5zLnNwZWVkKzUwKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Zi5sZ0J1c3k9ITEsZi4kZWwudHJpZ2dlcihcIm9uQWZ0ZXJTbGlkZS5sZ1wiLFtlLGIsYyxkXSl9LHRoaXMucy5zcGVlZCkpOihmLmxvYWRDb250ZW50KGIsITAsZi5zLmJhY2tkcm9wRHVyYXRpb24pLGYubGdCdXN5PSExLGYuJGVsLnRyaWdnZXIoXCJvbkFmdGVyU2xpZGUubGdcIixbZSxiLGMsZF0pKSxmLmxHYWxsZXJ5T249ITAsdGhpcy5zLmNvdW50ZXImJmEoXCIjbGctY291bnRlci1jdXJyZW50XCIpLnRleHQoYisxKX19fSxlLnByb3RvdHlwZS5nb1RvTmV4dFNsaWRlPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7Yi5sZ0J1c3l8fChiLmluZGV4KzE8Yi4kc2xpZGUubGVuZ3RoPyhiLmluZGV4KyssYi4kZWwudHJpZ2dlcihcIm9uQmVmb3JlTmV4dFNsaWRlLmxnXCIsW2IuaW5kZXhdKSxiLnNsaWRlKGIuaW5kZXgsYSwhMSkpOmIucy5sb29wPyhiLmluZGV4PTAsYi4kZWwudHJpZ2dlcihcIm9uQmVmb3JlTmV4dFNsaWRlLmxnXCIsW2IuaW5kZXhdKSxiLnNsaWRlKGIuaW5kZXgsYSwhMSkpOmIucy5zbGlkZUVuZEFuaW1hdG9pbiYmKGIuJG91dGVyLmFkZENsYXNzKFwibGctcmlnaHQtZW5kXCIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtiLiRvdXRlci5yZW1vdmVDbGFzcyhcImxnLXJpZ2h0LWVuZFwiKX0sNDAwKSkpfSxlLnByb3RvdHlwZS5nb1RvUHJldlNsaWRlPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7Yi5sZ0J1c3l8fChiLmluZGV4PjA/KGIuaW5kZXgtLSxiLiRlbC50cmlnZ2VyKFwib25CZWZvcmVQcmV2U2xpZGUubGdcIixbYi5pbmRleCxhXSksYi5zbGlkZShiLmluZGV4LGEsITEpKTpiLnMubG9vcD8oYi5pbmRleD1iLiRpdGVtcy5sZW5ndGgtMSxiLiRlbC50cmlnZ2VyKFwib25CZWZvcmVQcmV2U2xpZGUubGdcIixbYi5pbmRleCxhXSksYi5zbGlkZShiLmluZGV4LGEsITEpKTpiLnMuc2xpZGVFbmRBbmltYXRvaW4mJihiLiRvdXRlci5hZGRDbGFzcyhcImxnLWxlZnQtZW5kXCIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtiLiRvdXRlci5yZW1vdmVDbGFzcyhcImxnLWxlZnQtZW5kXCIpfSw0MDApKSl9LGUucHJvdG90eXBlLmtleVByZXNzPWZ1bmN0aW9uKCl7dmFyIGM9dGhpczt0aGlzLiRpdGVtcy5sZW5ndGg+MSYmYShiKS5vbihcImtleXVwLmxnXCIsZnVuY3Rpb24oYSl7Yy4kaXRlbXMubGVuZ3RoPjEmJigzNz09PWEua2V5Q29kZSYmKGEucHJldmVudERlZmF1bHQoKSxjLmdvVG9QcmV2U2xpZGUoKSksMzk9PT1hLmtleUNvZGUmJihhLnByZXZlbnREZWZhdWx0KCksYy5nb1RvTmV4dFNsaWRlKCkpKX0pLGEoYikub24oXCJrZXlkb3duLmxnXCIsZnVuY3Rpb24oYSl7Yy5zLmVzY0tleT09PSEwJiYyNz09PWEua2V5Q29kZSYmKGEucHJldmVudERlZmF1bHQoKSxjLiRvdXRlci5oYXNDbGFzcyhcImxnLXRodW1iLW9wZW5cIik/Yy4kb3V0ZXIucmVtb3ZlQ2xhc3MoXCJsZy10aHVtYi1vcGVuXCIpOmMuZGVzdHJveSgpKX0pfSxlLnByb3RvdHlwZS5hcnJvdz1mdW5jdGlvbigpe3ZhciBhPXRoaXM7dGhpcy4kb3V0ZXIuZmluZChcIi5sZy1wcmV2XCIpLm9uKFwiY2xpY2subGdcIixmdW5jdGlvbigpe2EuZ29Ub1ByZXZTbGlkZSgpfSksdGhpcy4kb3V0ZXIuZmluZChcIi5sZy1uZXh0XCIpLm9uKFwiY2xpY2subGdcIixmdW5jdGlvbigpe2EuZ29Ub05leHRTbGlkZSgpfSl9LGUucHJvdG90eXBlLmFycm93RGlzYWJsZT1mdW5jdGlvbihhKXshdGhpcy5zLmxvb3AmJnRoaXMucy5oaWRlQ29udHJvbE9uRW5kJiYoYSsxPHRoaXMuJHNsaWRlLmxlbmd0aD90aGlzLiRvdXRlci5maW5kKFwiLmxnLW5leHRcIikucmVtb3ZlQXR0cihcImRpc2FibGVkXCIpLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik6dGhpcy4kb3V0ZXIuZmluZChcIi5sZy1uZXh0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLFwiZGlzYWJsZWRcIikuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKSxhPjA/dGhpcy4kb3V0ZXIuZmluZChcIi5sZy1wcmV2XCIpLnJlbW92ZUF0dHIoXCJkaXNhYmxlZFwiKS5yZW1vdmVDbGFzcyhcImRpc2FibGVkXCIpOnRoaXMuJG91dGVyLmZpbmQoXCIubGctcHJldlwiKS5hdHRyKFwiZGlzYWJsZWRcIixcImRpc2FibGVkXCIpLmFkZENsYXNzKFwiZGlzYWJsZWRcIikpfSxlLnByb3RvdHlwZS5zZXRUcmFuc2xhdGU9ZnVuY3Rpb24oYSxiLGMpe3RoaXMucy51c2VMZWZ0P2EuY3NzKFwibGVmdFwiLGIpOmEuY3NzKHt0cmFuc2Zvcm06XCJ0cmFuc2xhdGUzZChcIitiK1wicHgsIFwiK2MrXCJweCwgMHB4KVwifSl9LGUucHJvdG90eXBlLnRvdWNoTW92ZT1mdW5jdGlvbihiLGMpe3ZhciBkPWMtYjt0aGlzLiRvdXRlci5hZGRDbGFzcyhcImxnLWRyYWdnaW5nXCIpLHRoaXMuc2V0VHJhbnNsYXRlKHRoaXMuJHNsaWRlLmVxKHRoaXMuaW5kZXgpLGQsMCksdGhpcy5zZXRUcmFuc2xhdGUoYShcIi5sZy1wcmV2LXNsaWRlXCIpLC10aGlzLiRzbGlkZS5lcSh0aGlzLmluZGV4KS53aWR0aCgpK2QsMCksdGhpcy5zZXRUcmFuc2xhdGUoYShcIi5sZy1uZXh0LXNsaWRlXCIpLHRoaXMuJHNsaWRlLmVxKHRoaXMuaW5kZXgpLndpZHRoKCkrZCwwKX0sZS5wcm90b3R5cGUudG91Y2hFbmQ9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcztcImxnLXNsaWRlXCIhPT1iLnMubW9kZSYmYi4kb3V0ZXIuYWRkQ2xhc3MoXCJsZy1zbGlkZVwiKSx0aGlzLiRzbGlkZS5ub3QoXCIubGctY3VycmVudCwgLmxnLXByZXYtc2xpZGUsIC5sZy1uZXh0LXNsaWRlXCIpLmNzcyhcIm9wYWNpdHlcIixcIjBcIiksc2V0VGltZW91dChmdW5jdGlvbigpe2IuJG91dGVyLnJlbW92ZUNsYXNzKFwibGctZHJhZ2dpbmdcIiksMD5hJiZNYXRoLmFicyhhKT5iLnMuc3dpcGVUaHJlc2hvbGQ/Yi5nb1RvTmV4dFNsaWRlKCEwKTphPjAmJk1hdGguYWJzKGEpPmIucy5zd2lwZVRocmVzaG9sZD9iLmdvVG9QcmV2U2xpZGUoITApOk1hdGguYWJzKGEpPDUmJmIuJGVsLnRyaWdnZXIoXCJvblNsaWRlQ2xpY2subGdcIiksYi4kc2xpZGUucmVtb3ZlQXR0cihcInN0eWxlXCIpfSksc2V0VGltZW91dChmdW5jdGlvbigpe2IuJG91dGVyLmhhc0NsYXNzKFwibGctZHJhZ2dpbmdcIil8fFwibGctc2xpZGVcIj09PWIucy5tb2RlfHxiLiRvdXRlci5yZW1vdmVDbGFzcyhcImxnLXNsaWRlXCIpfSxiLnMuc3BlZWQrMTAwKX0sZS5wcm90b3R5cGUuZW5hYmxlU3dpcGU9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLGI9MCxjPTAsZD0hMTthLnMuZW5hYmxlU3dpcGUmJmEuaXNUb3VjaCYmYS5kb0NzcygpJiYoYS4kc2xpZGUub24oXCJ0b3VjaHN0YXJ0LmxnXCIsZnVuY3Rpb24oYyl7YS4kb3V0ZXIuaGFzQ2xhc3MoXCJsZy16b29tZWRcIil8fGEubGdCdXN5fHwoYy5wcmV2ZW50RGVmYXVsdCgpLGEubWFuYWdlU3dpcGVDbGFzcygpLGI9Yy5vcmlnaW5hbEV2ZW50LnRhcmdldFRvdWNoZXNbMF0ucGFnZVgpfSksYS4kc2xpZGUub24oXCJ0b3VjaG1vdmUubGdcIixmdW5jdGlvbihlKXthLiRvdXRlci5oYXNDbGFzcyhcImxnLXpvb21lZFwiKXx8KGUucHJldmVudERlZmF1bHQoKSxjPWUub3JpZ2luYWxFdmVudC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYLGEudG91Y2hNb3ZlKGIsYyksZD0hMCl9KSxhLiRzbGlkZS5vbihcInRvdWNoZW5kLmxnXCIsZnVuY3Rpb24oKXthLiRvdXRlci5oYXNDbGFzcyhcImxnLXpvb21lZFwiKXx8KGQ/KGQ9ITEsYS50b3VjaEVuZChjLWIpKTphLiRlbC50cmlnZ2VyKFwib25TbGlkZUNsaWNrLmxnXCIpKX0pKX0sZS5wcm90b3R5cGUuZW5hYmxlRHJhZz1mdW5jdGlvbigpe3ZhciBjPXRoaXMsZD0wLGU9MCxmPSExLGc9ITE7Yy5zLmVuYWJsZURyYWcmJiFjLmlzVG91Y2gmJmMuZG9Dc3MoKSYmKGMuJHNsaWRlLm9uKFwibW91c2Vkb3duLmxnXCIsZnVuY3Rpb24oYil7Yy4kb3V0ZXIuaGFzQ2xhc3MoXCJsZy16b29tZWRcIil8fChhKGIudGFyZ2V0KS5oYXNDbGFzcyhcImxnLW9iamVjdFwiKXx8YShiLnRhcmdldCkuaGFzQ2xhc3MoXCJsZy12aWRlby1wbGF5XCIpKSYmKGIucHJldmVudERlZmF1bHQoKSxjLmxnQnVzeXx8KGMubWFuYWdlU3dpcGVDbGFzcygpLGQ9Yi5wYWdlWCxmPSEwLGMuJG91dGVyLnNjcm9sbExlZnQrPTEsYy4kb3V0ZXIuc2Nyb2xsTGVmdC09MSxjLiRvdXRlci5yZW1vdmVDbGFzcyhcImxnLWdyYWJcIikuYWRkQ2xhc3MoXCJsZy1ncmFiYmluZ1wiKSxjLiRlbC50cmlnZ2VyKFwib25EcmFnc3RhcnQubGdcIikpKX0pLGEoYikub24oXCJtb3VzZW1vdmUubGdcIixmdW5jdGlvbihhKXtmJiYoZz0hMCxlPWEucGFnZVgsYy50b3VjaE1vdmUoZCxlKSxjLiRlbC50cmlnZ2VyKFwib25EcmFnbW92ZS5sZ1wiKSl9KSxhKGIpLm9uKFwibW91c2V1cC5sZ1wiLGZ1bmN0aW9uKGIpe2c/KGc9ITEsYy50b3VjaEVuZChlLWQpLGMuJGVsLnRyaWdnZXIoXCJvbkRyYWdlbmQubGdcIikpOihhKGIudGFyZ2V0KS5oYXNDbGFzcyhcImxnLW9iamVjdFwiKXx8YShiLnRhcmdldCkuaGFzQ2xhc3MoXCJsZy12aWRlby1wbGF5XCIpKSYmYy4kZWwudHJpZ2dlcihcIm9uU2xpZGVDbGljay5sZ1wiKSxmJiYoZj0hMSxjLiRvdXRlci5yZW1vdmVDbGFzcyhcImxnLWdyYWJiaW5nXCIpLmFkZENsYXNzKFwibGctZ3JhYlwiKSl9KSl9LGUucHJvdG90eXBlLm1hbmFnZVN3aXBlQ2xhc3M9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmluZGV4KzEsYj10aGlzLmluZGV4LTEsYz10aGlzLiRzbGlkZS5sZW5ndGg7dGhpcy5zLmxvb3AmJigwPT09dGhpcy5pbmRleD9iPWMtMTp0aGlzLmluZGV4PT09Yy0xJiYoYT0wKSksdGhpcy4kc2xpZGUucmVtb3ZlQ2xhc3MoXCJsZy1uZXh0LXNsaWRlIGxnLXByZXYtc2xpZGVcIiksYj4tMSYmdGhpcy4kc2xpZGUuZXEoYikuYWRkQ2xhc3MoXCJsZy1wcmV2LXNsaWRlXCIpLHRoaXMuJHNsaWRlLmVxKGEpLmFkZENsYXNzKFwibGctbmV4dC1zbGlkZVwiKX0sZS5wcm90b3R5cGUubW91c2V3aGVlbD1mdW5jdGlvbigpe3ZhciBhPXRoaXM7YS4kb3V0ZXIub24oXCJtb3VzZXdoZWVsLmxnXCIsZnVuY3Rpb24oYil7Yi5kZWx0YVkmJihiLmRlbHRhWT4wP2EuZ29Ub1ByZXZTbGlkZSgpOmEuZ29Ub05leHRTbGlkZSgpLGIucHJldmVudERlZmF1bHQoKSl9KX0sZS5wcm90b3R5cGUuY2xvc2VHYWxsZXJ5PWZ1bmN0aW9uKCl7dmFyIGI9dGhpcyxjPSExO3RoaXMuJG91dGVyLmZpbmQoXCIubGctY2xvc2VcIikub24oXCJjbGljay5sZ1wiLGZ1bmN0aW9uKCl7Yi5kZXN0cm95KCl9KSxiLnMuY2xvc2FibGUmJihiLiRvdXRlci5vbihcIm1vdXNlZG93bi5sZ1wiLGZ1bmN0aW9uKGIpe2M9YShiLnRhcmdldCkuaXMoXCIubGctb3V0ZXJcIil8fGEoYi50YXJnZXQpLmlzKFwiLmxnLWl0ZW0gXCIpfHxhKGIudGFyZ2V0KS5pcyhcIi5sZy1pbWctd3JhcFwiKT8hMDohMX0pLGIuJG91dGVyLm9uKFwibW91c2V1cC5sZ1wiLGZ1bmN0aW9uKGQpeyhhKGQudGFyZ2V0KS5pcyhcIi5sZy1vdXRlclwiKXx8YShkLnRhcmdldCkuaXMoXCIubGctaXRlbSBcIil8fGEoZC50YXJnZXQpLmlzKFwiLmxnLWltZy13cmFwXCIpJiZjKSYmKGIuJG91dGVyLmhhc0NsYXNzKFwibGctZHJhZ2dpbmdcIil8fGIuZGVzdHJveSgpKX0pKX0sZS5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbihjKXt2YXIgZD10aGlzO2N8fGQuJGVsLnRyaWdnZXIoXCJvbkJlZm9yZUNsb3NlLmxnXCIpLGEoYikuc2Nyb2xsVG9wKGQucHJldlNjcm9sbFRvcCksYyYmKGQucy5keW5hbWljfHx0aGlzLiRpdGVtcy5vZmYoXCJjbGljay5sZyBjbGljay5sZ2N1c3RvbVwiKSxhLnJlbW92ZURhdGEoZC5lbCxcImxpZ2h0R2FsbGVyeVwiKSksdGhpcy4kZWwub2ZmKFwiLmxnLnRtXCIpLGEuZWFjaChhLmZuLmxpZ2h0R2FsbGVyeS5tb2R1bGVzLGZ1bmN0aW9uKGEpe2QubW9kdWxlc1thXSYmZC5tb2R1bGVzW2FdLmRlc3Ryb3koKX0pLHRoaXMubEdhbGxlcnlPbj0hMSxjbGVhclRpbWVvdXQoZC5oaWRlQmFydGltZW91dCksdGhpcy5oaWRlQmFydGltZW91dD0hMSxhKGIpLm9mZihcIi5sZ1wiKSxhKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcImxnLW9uIGxnLWZyb20taGFzaFwiKSxkLiRvdXRlciYmZC4kb3V0ZXIucmVtb3ZlQ2xhc3MoXCJsZy12aXNpYmxlXCIpLGEoXCIubGctYmFja2Ryb3BcIikucmVtb3ZlQ2xhc3MoXCJpblwiKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZC4kb3V0ZXImJmQuJG91dGVyLnJlbW92ZSgpLGEoXCIubGctYmFja2Ryb3BcIikucmVtb3ZlKCksY3x8ZC4kZWwudHJpZ2dlcihcIm9uQ2xvc2VBZnRlci5sZ1wiKX0sZC5zLmJhY2tkcm9wRHVyYXRpb24rNTApfSxhLmZuLmxpZ2h0R2FsbGVyeT1mdW5jdGlvbihiKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7aWYoYS5kYXRhKHRoaXMsXCJsaWdodEdhbGxlcnlcIikpdHJ5e2EodGhpcykuZGF0YShcImxpZ2h0R2FsbGVyeVwiKS5pbml0KCl9Y2F0Y2goYyl7Y29uc29sZS5lcnJvcihcImxpZ2h0R2FsbGVyeSBoYXMgbm90IGluaXRpYXRlZCBwcm9wZXJseVwiKX1lbHNlIGEuZGF0YSh0aGlzLFwibGlnaHRHYWxsZXJ5XCIsbmV3IGUodGhpcyxiKSl9KX0sYS5mbi5saWdodEdhbGxlcnkubW9kdWxlcz17fX0oalF1ZXJ5LHdpbmRvdyxkb2N1bWVudCk7IiwiLypcclxuICAgICBfIF8gICAgICBfICAgICAgIF9cclxuIF9fX3wgKF8pIF9fX3wgfCBfXyAgKF8pX19fXHJcbi8gX198IHwgfC8gX198IHwvIC8gIHwgLyBfX3xcclxuXFxfXyBcXCB8IHwgKF9ffCAgIDwgXyB8IFxcX18gXFxcclxufF9fXy9ffF98XFxfX198X3xcXF8oXykvIHxfX18vXHJcbiAgICAgICAgICAgICAgICAgICB8X18vXHJcblxyXG4gVmVyc2lvbjogMS42LjBcclxuICBBdXRob3I6IEtlbiBXaGVlbGVyXHJcbiBXZWJzaXRlOiBodHRwOi8va2Vud2hlZWxlci5naXRodWIuaW9cclxuICAgIERvY3M6IGh0dHA6Ly9rZW53aGVlbGVyLmdpdGh1Yi5pby9zbGlja1xyXG4gICAgUmVwbzogaHR0cDovL2dpdGh1Yi5jb20va2Vud2hlZWxlci9zbGlja1xyXG4gIElzc3VlczogaHR0cDovL2dpdGh1Yi5jb20va2Vud2hlZWxlci9zbGljay9pc3N1ZXNcclxuXHJcbiAqL1xyXG4vKiBnbG9iYWwgd2luZG93LCBkb2N1bWVudCwgZGVmaW5lLCBqUXVlcnksIHNldEludGVydmFsLCBjbGVhckludGVydmFsICovXHJcbihmdW5jdGlvbihmYWN0b3J5KSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICBmYWN0b3J5KGpRdWVyeSk7XHJcblxyXG59KGZ1bmN0aW9uKCQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIHZhciBTbGljayA9IHdpbmRvdy5TbGljayB8fCB7fTtcclxuXHJcbiAgICBTbGljayA9IChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIGluc3RhbmNlVWlkID0gMDtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gU2xpY2soZWxlbWVudCwgc2V0dGluZ3MpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBfID0gdGhpcywgZGF0YVNldHRpbmdzO1xyXG5cclxuICAgICAgICAgICAgXy5kZWZhdWx0cyA9IHtcclxuICAgICAgICAgICAgICAgIGFjY2Vzc2liaWxpdHk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhcHBlbmRBcnJvd3M6ICQoZWxlbWVudCksXHJcbiAgICAgICAgICAgICAgICBhcHBlbmREb3RzOiAkKGVsZW1lbnQpLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXNOYXZGb3I6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkYXRhLXJvbGU9XCJub25lXCIgY2xhc3M9XCJzbGljay1wcmV2XCIgYXJpYS1sYWJlbD1cIlByZXZpb3VzXCIgdGFiaW5kZXg9XCIwXCIgcm9sZT1cImJ1dHRvblwiPlByZXZpb3VzPC9idXR0b24+JyxcclxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRhdGEtcm9sZT1cIm5vbmVcIiBjbGFzcz1cInNsaWNrLW5leHRcIiBhcmlhLWxhYmVsPVwiTmV4dFwiIHRhYmluZGV4PVwiMFwiIHJvbGU9XCJidXR0b25cIj5OZXh0PC9idXR0b24+JyxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXHJcbiAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICc1MHB4JyxcclxuICAgICAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlJyxcclxuICAgICAgICAgICAgICAgIGN1c3RvbVBhZ2luZzogZnVuY3Rpb24oc2xpZGVyLCBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQoJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRhdGEtcm9sZT1cIm5vbmVcIiByb2xlPVwiYnV0dG9uXCIgdGFiaW5kZXg9XCIwXCIgLz4nKS50ZXh0KGkgKyAxKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRvdHNDbGFzczogJ3NsaWNrLWRvdHMnLFxyXG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZWFzaW5nOiAnbGluZWFyJyxcclxuICAgICAgICAgICAgICAgIGVkZ2VGcmljdGlvbjogMC4zNSxcclxuICAgICAgICAgICAgICAgIGZhZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGluaXRpYWxTbGlkZTogMCxcclxuICAgICAgICAgICAgICAgIGxhenlMb2FkOiAnb25kZW1hbmQnLFxyXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcGF1c2VPbkZvY3VzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcGF1c2VPbkRvdHNIb3ZlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICByZXNwb25kVG86ICd3aW5kb3cnLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIHJvd3M6IDEsXHJcbiAgICAgICAgICAgICAgICBydGw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2xpZGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyUm93OiAxLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICBzcGVlZDogNTAwLFxyXG4gICAgICAgICAgICAgICAgc3dpcGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzd2lwZVRvU2xpZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdG91Y2hNb3ZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdG91Y2hUaHJlc2hvbGQ6IDUsXHJcbiAgICAgICAgICAgICAgICB1c2VDU1M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB1c2VUcmFuc2Zvcm06IHRydWUsXHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsU3dpcGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB3YWl0Rm9yQW5pbWF0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHpJbmRleDogMTAwMFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgXy5pbml0aWFscyA9IHtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkcmFnZ2luZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhdXRvUGxheVRpbWVyOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudERpcmVjdGlvbjogMCxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRMZWZ0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlOiAwLFxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAxLFxyXG4gICAgICAgICAgICAgICAgJGRvdHM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBsaXN0V2lkdGg6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBsaXN0SGVpZ2h0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgbG9hZEluZGV4OiAwLFxyXG4gICAgICAgICAgICAgICAgJG5leHRBcnJvdzogbnVsbCxcclxuICAgICAgICAgICAgICAgICRwcmV2QXJyb3c6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBzbGlkZUNvdW50OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVXaWR0aDogbnVsbCxcclxuICAgICAgICAgICAgICAgICRzbGlkZVRyYWNrOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgJHNsaWRlczogbnVsbCxcclxuICAgICAgICAgICAgICAgIHNsaWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVPZmZzZXQ6IDAsXHJcbiAgICAgICAgICAgICAgICBzd2lwZUxlZnQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAkbGlzdDogbnVsbCxcclxuICAgICAgICAgICAgICAgIHRvdWNoT2JqZWN0OiB7fSxcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybXNFbmFibGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHVuc2xpY2tlZDogZmFsc2VcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICQuZXh0ZW5kKF8sIF8uaW5pdGlhbHMpO1xyXG5cclxuICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID0gbnVsbDtcclxuICAgICAgICAgICAgXy5hbmltVHlwZSA9IG51bGw7XHJcbiAgICAgICAgICAgIF8uYW5pbVByb3AgPSBudWxsO1xyXG4gICAgICAgICAgICBfLmJyZWFrcG9pbnRzID0gW107XHJcbiAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzID0gW107XHJcbiAgICAgICAgICAgIF8uY3NzVHJhbnNpdGlvbnMgPSBmYWxzZTtcclxuICAgICAgICAgICAgXy5mb2N1c3NlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIF8uaGlkZGVuID0gJ2hpZGRlbic7XHJcbiAgICAgICAgICAgIF8ucGF1c2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgXy5wb3NpdGlvblByb3AgPSBudWxsO1xyXG4gICAgICAgICAgICBfLnJlc3BvbmRUbyA9IG51bGw7XHJcbiAgICAgICAgICAgIF8ucm93Q291bnQgPSAxO1xyXG4gICAgICAgICAgICBfLnNob3VsZENsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgXy4kc2xpZGVyID0gJChlbGVtZW50KTtcclxuICAgICAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBudWxsO1xyXG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSBudWxsO1xyXG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gbnVsbDtcclxuICAgICAgICAgICAgXy52aXNpYmlsaXR5Q2hhbmdlID0gJ3Zpc2liaWxpdHljaGFuZ2UnO1xyXG4gICAgICAgICAgICBfLndpbmRvd1dpZHRoID0gMDtcclxuICAgICAgICAgICAgXy53aW5kb3dUaW1lciA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBkYXRhU2V0dGluZ3MgPSAkKGVsZW1lbnQpLmRhdGEoJ3NsaWNrJykgfHwge307XHJcblxyXG4gICAgICAgICAgICBfLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgXy5kZWZhdWx0cywgc2V0dGluZ3MsIGRhdGFTZXR0aW5ncyk7XHJcblxyXG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XHJcblxyXG4gICAgICAgICAgICBfLm9yaWdpbmFsU2V0dGluZ3MgPSBfLm9wdGlvbnM7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50Lm1vekhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIF8uaGlkZGVuID0gJ21vekhpZGRlbic7XHJcbiAgICAgICAgICAgICAgICBfLnZpc2liaWxpdHlDaGFuZ2UgPSAnbW96dmlzaWJpbGl0eWNoYW5nZSc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50LndlYmtpdEhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIF8uaGlkZGVuID0gJ3dlYmtpdEhpZGRlbic7XHJcbiAgICAgICAgICAgICAgICBfLnZpc2liaWxpdHlDaGFuZ2UgPSAnd2Via2l0dmlzaWJpbGl0eWNoYW5nZSc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIF8uYXV0b1BsYXkgPSAkLnByb3h5KF8uYXV0b1BsYXksIF8pO1xyXG4gICAgICAgICAgICBfLmF1dG9QbGF5Q2xlYXIgPSAkLnByb3h5KF8uYXV0b1BsYXlDbGVhciwgXyk7XHJcbiAgICAgICAgICAgIF8uYXV0b1BsYXlJdGVyYXRvciA9ICQucHJveHkoXy5hdXRvUGxheUl0ZXJhdG9yLCBfKTtcclxuICAgICAgICAgICAgXy5jaGFuZ2VTbGlkZSA9ICQucHJveHkoXy5jaGFuZ2VTbGlkZSwgXyk7XHJcbiAgICAgICAgICAgIF8uY2xpY2tIYW5kbGVyID0gJC5wcm94eShfLmNsaWNrSGFuZGxlciwgXyk7XHJcbiAgICAgICAgICAgIF8uc2VsZWN0SGFuZGxlciA9ICQucHJveHkoXy5zZWxlY3RIYW5kbGVyLCBfKTtcclxuICAgICAgICAgICAgXy5zZXRQb3NpdGlvbiA9ICQucHJveHkoXy5zZXRQb3NpdGlvbiwgXyk7XHJcbiAgICAgICAgICAgIF8uc3dpcGVIYW5kbGVyID0gJC5wcm94eShfLnN3aXBlSGFuZGxlciwgXyk7XHJcbiAgICAgICAgICAgIF8uZHJhZ0hhbmRsZXIgPSAkLnByb3h5KF8uZHJhZ0hhbmRsZXIsIF8pO1xyXG4gICAgICAgICAgICBfLmtleUhhbmRsZXIgPSAkLnByb3h5KF8ua2V5SGFuZGxlciwgXyk7XHJcblxyXG4gICAgICAgICAgICBfLmluc3RhbmNlVWlkID0gaW5zdGFuY2VVaWQrKztcclxuXHJcbiAgICAgICAgICAgIC8vIEEgc2ltcGxlIHdheSB0byBjaGVjayBmb3IgSFRNTCBzdHJpbmdzXHJcbiAgICAgICAgICAgIC8vIFN0cmljdCBIVE1MIHJlY29nbml0aW9uIChtdXN0IHN0YXJ0IHdpdGggPClcclxuICAgICAgICAgICAgLy8gRXh0cmFjdGVkIGZyb20galF1ZXJ5IHYxLjExIHNvdXJjZVxyXG4gICAgICAgICAgICBfLmh0bWxFeHByID0gL14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qKSQvO1xyXG5cclxuXHJcbiAgICAgICAgICAgIF8ucmVnaXN0ZXJCcmVha3BvaW50cygpO1xyXG4gICAgICAgICAgICBfLmluaXQodHJ1ZSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFNsaWNrO1xyXG5cclxuICAgIH0oKSk7XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmFjdGl2YXRlQURBID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1hY3RpdmUnKS5hdHRyKHtcclxuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ2ZhbHNlJ1xyXG4gICAgICAgIH0pLmZpbmQoJ2EsIGlucHV0LCBidXR0b24sIHNlbGVjdCcpLmF0dHIoe1xyXG4gICAgICAgICAgICAndGFiaW5kZXgnOiAnMCdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5hZGRTbGlkZSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0FkZCA9IGZ1bmN0aW9uKG1hcmt1cCwgaW5kZXgsIGFkZEJlZm9yZSkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YoaW5kZXgpID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgYWRkQmVmb3JlID0gaW5kZXg7XHJcbiAgICAgICAgICAgIGluZGV4ID0gbnVsbDtcclxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4IDwgMCB8fCAoaW5kZXggPj0gXy5zbGlkZUNvdW50KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfLnVubG9hZCgpO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mKGluZGV4KSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwICYmIF8uJHNsaWRlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICQobWFya3VwKS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhZGRCZWZvcmUpIHtcclxuICAgICAgICAgICAgICAgICQobWFya3VwKS5pbnNlcnRCZWZvcmUoXy4kc2xpZGVzLmVxKGluZGV4KSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuaW5zZXJ0QWZ0ZXIoXy4kc2xpZGVzLmVxKGluZGV4KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoYWRkQmVmb3JlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkucHJlcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfLiRzbGlkZXMgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSk7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcclxuXHJcbiAgICAgICAgXy4kc2xpZGVUcmFjay5hcHBlbmQoXy4kc2xpZGVzKTtcclxuXHJcbiAgICAgICAgXy4kc2xpZGVzLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgJChlbGVtZW50KS5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JywgaW5kZXgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IF8uJHNsaWRlcztcclxuXHJcbiAgICAgICAgXy5yZWluaXQoKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5hbmltYXRlSGVpZ2h0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAxICYmIF8ub3B0aW9ucy5hZGFwdGl2ZUhlaWdodCA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXRIZWlnaHQgPSBfLiRzbGlkZXMuZXEoXy5jdXJyZW50U2xpZGUpLm91dGVySGVpZ2h0KHRydWUpO1xyXG4gICAgICAgICAgICBfLiRsaXN0LmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB0YXJnZXRIZWlnaHRcclxuICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5hbmltYXRlU2xpZGUgPSBmdW5jdGlvbih0YXJnZXRMZWZ0LCBjYWxsYmFjaykge1xyXG5cclxuICAgICAgICB2YXIgYW5pbVByb3BzID0ge30sXHJcbiAgICAgICAgICAgIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLmFuaW1hdGVIZWlnaHQoKTtcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUgJiYgXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0YXJnZXRMZWZ0ID0gLXRhcmdldExlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChfLnRyYW5zZm9ybXNFbmFibGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0YXJnZXRMZWZ0XHJcbiAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcsIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiB0YXJnZXRMZWZ0XHJcbiAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcsIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF8uY3VycmVudExlZnQgPSAtKF8uY3VycmVudExlZnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbVN0YXJ0OiBfLmN1cnJlbnRMZWZ0XHJcbiAgICAgICAgICAgICAgICB9KS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltU3RhcnQ6IHRhcmdldExlZnRcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogXy5vcHRpb25zLnNwZWVkLFxyXG4gICAgICAgICAgICAgICAgICAgIGVhc2luZzogXy5vcHRpb25zLmVhc2luZyxcclxuICAgICAgICAgICAgICAgICAgICBzdGVwOiBmdW5jdGlvbihub3cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm93ID0gTWF0aC5jZWlsKG5vdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlKCcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdyArICdweCwgMHB4KSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhhbmltUHJvcHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZSgwcHgsJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm93ICsgJ3B4KSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhhbmltUHJvcHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIF8uYXBwbHlUcmFuc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gTWF0aC5jZWlsKHRhcmdldExlZnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZTNkKCcgKyB0YXJnZXRMZWZ0ICsgJ3B4LCAwcHgsIDBweCknO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlM2QoMHB4LCcgKyB0YXJnZXRMZWZ0ICsgJ3B4LCAwcHgpJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKGFuaW1Qcm9wcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZGlzYWJsZVRyYW5zaXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuZ2V0TmF2VGFyZ2V0ID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgYXNOYXZGb3IgPSBfLm9wdGlvbnMuYXNOYXZGb3I7XHJcblxyXG4gICAgICAgIGlmICggYXNOYXZGb3IgJiYgYXNOYXZGb3IgIT09IG51bGwgKSB7XHJcbiAgICAgICAgICAgIGFzTmF2Rm9yID0gJChhc05hdkZvcikubm90KF8uJHNsaWRlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYXNOYXZGb3I7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuYXNOYXZGb3IgPSBmdW5jdGlvbihpbmRleCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIGFzTmF2Rm9yID0gXy5nZXROYXZUYXJnZXQoKTtcclxuXHJcbiAgICAgICAgaWYgKCBhc05hdkZvciAhPT0gbnVsbCAmJiB0eXBlb2YgYXNOYXZGb3IgPT09ICdvYmplY3QnICkge1xyXG4gICAgICAgICAgICBhc05hdkZvci5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQodGhpcykuc2xpY2soJ2dldFNsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICBpZighdGFyZ2V0LnVuc2xpY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5zbGlkZUhhbmRsZXIoaW5kZXgsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuYXBwbHlUcmFuc2l0aW9uID0gZnVuY3Rpb24oc2xpZGUpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uID0ge307XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbltfLnRyYW5zaXRpb25UeXBlXSA9IF8udHJhbnNmb3JtVHlwZSArICcgJyArIF8ub3B0aW9ucy5zcGVlZCArICdtcyAnICsgXy5vcHRpb25zLmNzc0Vhc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbltfLnRyYW5zaXRpb25UeXBlXSA9ICdvcGFjaXR5ICcgKyBfLm9wdGlvbnMuc3BlZWQgKyAnbXMgJyArIF8ub3B0aW9ucy5jc3NFYXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyh0cmFuc2l0aW9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGUpLmNzcyh0cmFuc2l0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuYXV0b1BsYXkgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLmF1dG9QbGF5Q2xlYXIoKTtcclxuXHJcbiAgICAgICAgaWYgKCBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xyXG4gICAgICAgICAgICBfLmF1dG9QbGF5VGltZXIgPSBzZXRJbnRlcnZhbCggXy5hdXRvUGxheUl0ZXJhdG9yLCBfLm9wdGlvbnMuYXV0b3BsYXlTcGVlZCApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5hdXRvUGxheUNsZWFyID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKF8uYXV0b1BsYXlUaW1lcikge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKF8uYXV0b1BsYXlUaW1lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmF1dG9QbGF5SXRlcmF0b3IgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICBzbGlkZVRvID0gXy5jdXJyZW50U2xpZGUgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XHJcblxyXG4gICAgICAgIGlmICggIV8ucGF1c2VkICYmICFfLmludGVycnVwdGVkICYmICFfLmZvY3Vzc2VkICkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggXy5kaXJlY3Rpb24gPT09IDEgJiYgKCBfLmN1cnJlbnRTbGlkZSArIDEgKSA9PT0gKCBfLnNsaWRlQ291bnQgLSAxICkpIHtcclxuICAgICAgICAgICAgICAgICAgICBfLmRpcmVjdGlvbiA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIF8uZGlyZWN0aW9uID09PSAwICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzbGlkZVRvID0gXy5jdXJyZW50U2xpZGUgLSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggXy5jdXJyZW50U2xpZGUgLSAxID09PSAwICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLmRpcmVjdGlvbiA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKCBzbGlkZVRvICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5idWlsZEFycm93cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICkge1xyXG5cclxuICAgICAgICAgICAgXy4kcHJldkFycm93ID0gJChfLm9wdGlvbnMucHJldkFycm93KS5hZGRDbGFzcygnc2xpY2stYXJyb3cnKTtcclxuICAgICAgICAgICAgXy4kbmV4dEFycm93ID0gJChfLm9wdGlvbnMubmV4dEFycm93KS5hZGRDbGFzcygnc2xpY2stYXJyb3cnKTtcclxuXHJcbiAgICAgICAgICAgIGlmKCBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xyXG5cclxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2staGlkZGVuJykucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gdGFiaW5kZXgnKTtcclxuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2staGlkZGVuJykucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gdGFiaW5kZXgnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5wcmV2QXJyb3cpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnByZXBlbmRUbyhfLm9wdGlvbnMuYXBwZW5kQXJyb3dzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5uZXh0QXJyb3cpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LmFwcGVuZFRvKF8ub3B0aW9ucy5hcHBlbmRBcnJvd3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1kaXNhYmxlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LmFkZCggXy4kbmV4dEFycm93IClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1oaWRkZW4nKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtZGlzYWJsZWQnOiAndHJ1ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkRG90cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIGksIGRvdDtcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuXHJcbiAgICAgICAgICAgIF8uJHNsaWRlci5hZGRDbGFzcygnc2xpY2stZG90dGVkJyk7XHJcblxyXG4gICAgICAgICAgICBkb3QgPSAkKCc8dWwgLz4nKS5hZGRDbGFzcyhfLm9wdGlvbnMuZG90c0NsYXNzKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPD0gXy5nZXREb3RDb3VudCgpOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgICAgIGRvdC5hcHBlbmQoJCgnPGxpIC8+JykuYXBwZW5kKF8ub3B0aW9ucy5jdXN0b21QYWdpbmcuY2FsbCh0aGlzLCBfLCBpKSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBfLiRkb3RzID0gZG90LmFwcGVuZFRvKF8ub3B0aW9ucy5hcHBlbmREb3RzKTtcclxuXHJcbiAgICAgICAgICAgIF8uJGRvdHMuZmluZCgnbGknKS5maXJzdCgpLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKS5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGRPdXQgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLiRzbGlkZXMgPVxyXG4gICAgICAgICAgICBfLiRzbGlkZXJcclxuICAgICAgICAgICAgICAgIC5jaGlsZHJlbiggXy5vcHRpb25zLnNsaWRlICsgJzpub3QoLnNsaWNrLWNsb25lZCknKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1zbGlkZScpO1xyXG5cclxuICAgICAgICBfLnNsaWRlQ291bnQgPSBfLiRzbGlkZXMubGVuZ3RoO1xyXG5cclxuICAgICAgICBfLiRzbGlkZXMuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xyXG4gICAgICAgICAgICAkKGVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zbGljay1pbmRleCcsIGluZGV4KVxyXG4gICAgICAgICAgICAgICAgLmRhdGEoJ29yaWdpbmFsU3R5bGluZycsICQoZWxlbWVudCkuYXR0cignc3R5bGUnKSB8fCAnJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlci5hZGRDbGFzcygnc2xpY2stc2xpZGVyJyk7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlVHJhY2sgPSAoXy5zbGlkZUNvdW50ID09PSAwKSA/XHJcbiAgICAgICAgICAgICQoJzxkaXYgY2xhc3M9XCJzbGljay10cmFja1wiLz4nKS5hcHBlbmRUbyhfLiRzbGlkZXIpIDpcclxuICAgICAgICAgICAgXy4kc2xpZGVzLndyYXBBbGwoJzxkaXYgY2xhc3M9XCJzbGljay10cmFja1wiLz4nKS5wYXJlbnQoKTtcclxuXHJcbiAgICAgICAgXy4kbGlzdCA9IF8uJHNsaWRlVHJhY2sud3JhcChcclxuICAgICAgICAgICAgJzxkaXYgYXJpYS1saXZlPVwicG9saXRlXCIgY2xhc3M9XCJzbGljay1saXN0XCIvPicpLnBhcmVudCgpO1xyXG4gICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKCdvcGFjaXR5JywgMCk7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSB8fCBfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA9IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCdpbWdbZGF0YS1sYXp5XScsIF8uJHNsaWRlcikubm90KCdbc3JjXScpLmFkZENsYXNzKCdzbGljay1sb2FkaW5nJyk7XHJcblxyXG4gICAgICAgIF8uc2V0dXBJbmZpbml0ZSgpO1xyXG5cclxuICAgICAgICBfLmJ1aWxkQXJyb3dzKCk7XHJcblxyXG4gICAgICAgIF8uYnVpbGREb3RzKCk7XHJcblxyXG4gICAgICAgIF8udXBkYXRlRG90cygpO1xyXG5cclxuXHJcbiAgICAgICAgXy5zZXRTbGlkZUNsYXNzZXModHlwZW9mIF8uY3VycmVudFNsaWRlID09PSAnbnVtYmVyJyA/IF8uY3VycmVudFNsaWRlIDogMCk7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZHJhZ2dhYmxlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIF8uJGxpc3QuYWRkQ2xhc3MoJ2RyYWdnYWJsZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5idWlsZFJvd3MgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLCBhLCBiLCBjLCBuZXdTbGlkZXMsIG51bU9mU2xpZGVzLCBvcmlnaW5hbFNsaWRlcyxzbGlkZXNQZXJTZWN0aW9uO1xyXG5cclxuICAgICAgICBuZXdTbGlkZXMgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgb3JpZ2luYWxTbGlkZXMgPSBfLiRzbGlkZXIuY2hpbGRyZW4oKTtcclxuXHJcbiAgICAgICAgaWYoXy5vcHRpb25zLnJvd3MgPiAxKSB7XHJcblxyXG4gICAgICAgICAgICBzbGlkZXNQZXJTZWN0aW9uID0gXy5vcHRpb25zLnNsaWRlc1BlclJvdyAqIF8ub3B0aW9ucy5yb3dzO1xyXG4gICAgICAgICAgICBudW1PZlNsaWRlcyA9IE1hdGguY2VpbChcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsU2xpZGVzLmxlbmd0aCAvIHNsaWRlc1BlclNlY3Rpb25cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGZvcihhID0gMDsgYSA8IG51bU9mU2xpZGVzOyBhKyspe1xyXG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBmb3IoYiA9IDA7IGIgPCBfLm9wdGlvbnMucm93czsgYisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihjID0gMDsgYyA8IF8ub3B0aW9ucy5zbGlkZXNQZXJSb3c7IGMrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gKGEgKiBzbGlkZXNQZXJTZWN0aW9uICsgKChiICogXy5vcHRpb25zLnNsaWRlc1BlclJvdykgKyBjKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcmlnaW5hbFNsaWRlcy5nZXQodGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKG9yaWdpbmFsU2xpZGVzLmdldCh0YXJnZXQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzbGlkZS5hcHBlbmRDaGlsZChyb3cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbmV3U2xpZGVzLmFwcGVuZENoaWxkKHNsaWRlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVyLmVtcHR5KCkuYXBwZW5kKG5ld1NsaWRlcyk7XHJcbiAgICAgICAgICAgIF8uJHNsaWRlci5jaGlsZHJlbigpLmNoaWxkcmVuKCkuY2hpbGRyZW4oKVxyXG4gICAgICAgICAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzooMTAwIC8gXy5vcHRpb25zLnNsaWRlc1BlclJvdykgKyAnJScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXknOiAnaW5saW5lLWJsb2NrJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5jaGVja1Jlc3BvbnNpdmUgPSBmdW5jdGlvbihpbml0aWFsLCBmb3JjZVVwZGF0ZSkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQsIHRhcmdldEJyZWFrcG9pbnQsIHJlc3BvbmRUb1dpZHRoLCB0cmlnZ2VyQnJlYWtwb2ludCA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBzbGlkZXJXaWR0aCA9IF8uJHNsaWRlci53aWR0aCgpO1xyXG4gICAgICAgIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIHx8ICQod2luZG93KS53aWR0aCgpO1xyXG5cclxuICAgICAgICBpZiAoXy5yZXNwb25kVG8gPT09ICd3aW5kb3cnKSB7XHJcbiAgICAgICAgICAgIHJlc3BvbmRUb1dpZHRoID0gd2luZG93V2lkdGg7XHJcbiAgICAgICAgfSBlbHNlIGlmIChfLnJlc3BvbmRUbyA9PT0gJ3NsaWRlcicpIHtcclxuICAgICAgICAgICAgcmVzcG9uZFRvV2lkdGggPSBzbGlkZXJXaWR0aDtcclxuICAgICAgICB9IGVsc2UgaWYgKF8ucmVzcG9uZFRvID09PSAnbWluJykge1xyXG4gICAgICAgICAgICByZXNwb25kVG9XaWR0aCA9IE1hdGgubWluKHdpbmRvd1dpZHRoLCBzbGlkZXJXaWR0aCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5yZXNwb25zaXZlICYmXHJcbiAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZSAhPT0gbnVsbCkge1xyXG5cclxuICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGJyZWFrcG9pbnQgaW4gXy5icmVha3BvaW50cykge1xyXG4gICAgICAgICAgICAgICAgaWYgKF8uYnJlYWtwb2ludHMuaGFzT3duUHJvcGVydHkoYnJlYWtwb2ludCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXy5vcmlnaW5hbFNldHRpbmdzLm1vYmlsZUZpcnN0ID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uZFRvV2lkdGggPCBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50ID0gXy5icmVha3BvaW50c1ticmVha3BvaW50XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25kVG9XaWR0aCA+IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQgPSBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0QnJlYWtwb2ludCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKF8uYWN0aXZlQnJlYWtwb2ludCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRCcmVha3BvaW50ICE9PSBfLmFjdGl2ZUJyZWFrcG9pbnQgfHwgZm9yY2VVcGRhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfLmJyZWFrcG9pbnRTZXR0aW5nc1t0YXJnZXRCcmVha3BvaW50XSA9PT0gJ3Vuc2xpY2snKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLnVuc2xpY2sodGFyZ2V0QnJlYWtwb2ludCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgXy5vcmlnaW5hbFNldHRpbmdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ucmVmcmVzaChpbml0aWFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfLmJyZWFrcG9pbnRTZXR0aW5nc1t0YXJnZXRCcmVha3BvaW50XSA9PT0gJ3Vuc2xpY2snKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF8udW5zbGljayh0YXJnZXRCcmVha3BvaW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgXy5vcmlnaW5hbFNldHRpbmdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3NbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucmVmcmVzaChpbml0aWFsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKF8uYWN0aXZlQnJlYWtwb2ludCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF8uYWN0aXZlQnJlYWtwb2ludCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zID0gXy5vcmlnaW5hbFNldHRpbmdzO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbml0aWFsID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXy5yZWZyZXNoKGluaXRpYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gb25seSB0cmlnZ2VyIGJyZWFrcG9pbnRzIGR1cmluZyBhbiBhY3R1YWwgYnJlYWsuIG5vdCBvbiBpbml0aWFsaXplLlxyXG4gICAgICAgICAgICBpZiggIWluaXRpYWwgJiYgdHJpZ2dlckJyZWFrcG9pbnQgIT09IGZhbHNlICkge1xyXG4gICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2JyZWFrcG9pbnQnLCBbXywgdHJpZ2dlckJyZWFrcG9pbnRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5jaGFuZ2VTbGlkZSA9IGZ1bmN0aW9uKGV2ZW50LCBkb250QW5pbWF0ZSkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLFxyXG4gICAgICAgICAgICBpbmRleE9mZnNldCwgc2xpZGVPZmZzZXQsIHVuZXZlbk9mZnNldDtcclxuXHJcbiAgICAgICAgLy8gSWYgdGFyZ2V0IGlzIGEgbGluaywgcHJldmVudCBkZWZhdWx0IGFjdGlvbi5cclxuICAgICAgICBpZigkdGFyZ2V0LmlzKCdhJykpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIHRhcmdldCBpcyBub3QgdGhlIDxsaT4gZWxlbWVudCAoaWU6IGEgY2hpbGQpLCBmaW5kIHRoZSA8bGk+LlxyXG4gICAgICAgIGlmKCEkdGFyZ2V0LmlzKCdsaScpKSB7XHJcbiAgICAgICAgICAgICR0YXJnZXQgPSAkdGFyZ2V0LmNsb3Nlc3QoJ2xpJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1bmV2ZW5PZmZzZXQgPSAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKTtcclxuICAgICAgICBpbmRleE9mZnNldCA9IHVuZXZlbk9mZnNldCA/IDAgOiAoXy5zbGlkZUNvdW50IC0gXy5jdXJyZW50U2xpZGUpICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmRhdGEubWVzc2FnZSkge1xyXG5cclxuICAgICAgICAgICAgY2FzZSAncHJldmlvdXMnOlxyXG4gICAgICAgICAgICAgICAgc2xpZGVPZmZzZXQgPSBpbmRleE9mZnNldCA9PT0gMCA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSBpbmRleE9mZnNldDtcclxuICAgICAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoXy5jdXJyZW50U2xpZGUgLSBzbGlkZU9mZnNldCwgZmFsc2UsIGRvbnRBbmltYXRlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnbmV4dCc6XHJcbiAgICAgICAgICAgICAgICBzbGlkZU9mZnNldCA9IGluZGV4T2Zmc2V0ID09PSAwID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogaW5kZXhPZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKF8uY3VycmVudFNsaWRlICsgc2xpZGVPZmZzZXQsIGZhbHNlLCBkb250QW5pbWF0ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2luZGV4JzpcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGV2ZW50LmRhdGEuaW5kZXggPT09IDAgPyAwIDpcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4IHx8ICR0YXJnZXQuaW5kZXgoKSAqIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcclxuXHJcbiAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlcihfLmNoZWNrTmF2aWdhYmxlKGluZGV4KSwgZmFsc2UsIGRvbnRBbmltYXRlKTtcclxuICAgICAgICAgICAgICAgICR0YXJnZXQuY2hpbGRyZW4oKS50cmlnZ2VyKCdmb2N1cycpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5jaGVja05hdmlnYWJsZSA9IGZ1bmN0aW9uKGluZGV4KSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgbmF2aWdhYmxlcywgcHJldk5hdmlnYWJsZTtcclxuXHJcbiAgICAgICAgbmF2aWdhYmxlcyA9IF8uZ2V0TmF2aWdhYmxlSW5kZXhlcygpO1xyXG4gICAgICAgIHByZXZOYXZpZ2FibGUgPSAwO1xyXG4gICAgICAgIGlmIChpbmRleCA+IG5hdmlnYWJsZXNbbmF2aWdhYmxlcy5sZW5ndGggLSAxXSkge1xyXG4gICAgICAgICAgICBpbmRleCA9IG5hdmlnYWJsZXNbbmF2aWdhYmxlcy5sZW5ndGggLSAxXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBuIGluIG5hdmlnYWJsZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IG5hdmlnYWJsZXNbbl0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IHByZXZOYXZpZ2FibGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwcmV2TmF2aWdhYmxlID0gbmF2aWdhYmxlc1tuXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuY2xlYW5VcEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyAmJiBfLiRkb3RzICE9PSBudWxsKSB7XHJcblxyXG4gICAgICAgICAgICAkKCdsaScsIF8uJGRvdHMpXHJcbiAgICAgICAgICAgICAgICAub2ZmKCdjbGljay5zbGljaycsIF8uY2hhbmdlU2xpZGUpXHJcbiAgICAgICAgICAgICAgICAub2ZmKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpXHJcbiAgICAgICAgICAgICAgICAub2ZmKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfLiRzbGlkZXIub2ZmKCdmb2N1cy5zbGljayBibHVyLnNsaWNrJyk7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuICAgICAgICAgICAgXy4kcHJldkFycm93ICYmIF8uJHByZXZBcnJvdy5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jaGFuZ2VTbGlkZSk7XHJcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdyAmJiBfLiRuZXh0QXJyb3cub2ZmKCdjbGljay5zbGljaycsIF8uY2hhbmdlU2xpZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNoc3RhcnQuc2xpY2sgbW91c2Vkb3duLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xyXG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaG1vdmUuc2xpY2sgbW91c2Vtb3ZlLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xyXG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaGVuZC5zbGljayBtb3VzZXVwLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xyXG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaGNhbmNlbC5zbGljayBtb3VzZWxlYXZlLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xyXG5cclxuICAgICAgICBfLiRsaXN0Lm9mZignY2xpY2suc2xpY2snLCBfLmNsaWNrSGFuZGxlcik7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9mZihfLnZpc2liaWxpdHlDaGFuZ2UsIF8udmlzaWJpbGl0eSk7XHJcblxyXG4gICAgICAgIF8uY2xlYW5VcFNsaWRlRXZlbnRzKCk7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBfLiRsaXN0Lm9mZigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25TZWxlY3QgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgJChfLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9mZignY2xpY2suc2xpY2snLCBfLnNlbGVjdEhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLm9mZignb3JpZW50YXRpb25jaGFuZ2Uuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8ub3JpZW50YXRpb25DaGFuZ2UpO1xyXG5cclxuICAgICAgICAkKHdpbmRvdykub2ZmKCdyZXNpemUuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8ucmVzaXplKTtcclxuXHJcbiAgICAgICAgJCgnW2RyYWdnYWJsZSE9dHJ1ZV0nLCBfLiRzbGlkZVRyYWNrKS5vZmYoJ2RyYWdzdGFydCcsIF8ucHJldmVudERlZmF1bHQpO1xyXG5cclxuICAgICAgICAkKHdpbmRvdykub2ZmKCdsb2FkLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLnNldFBvc2l0aW9uKTtcclxuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ3JlYWR5LnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLnNldFBvc2l0aW9uKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5jbGVhblVwU2xpZGVFdmVudHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLiRsaXN0Lm9mZignbW91c2VlbnRlci5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIHRydWUpKTtcclxuICAgICAgICBfLiRsaXN0Lm9mZignbW91c2VsZWF2ZS5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIGZhbHNlKSk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuY2xlYW5VcFJvd3MgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLCBvcmlnaW5hbFNsaWRlcztcclxuXHJcbiAgICAgICAgaWYoXy5vcHRpb25zLnJvd3MgPiAxKSB7XHJcbiAgICAgICAgICAgIG9yaWdpbmFsU2xpZGVzID0gXy4kc2xpZGVzLmNoaWxkcmVuKCkuY2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgb3JpZ2luYWxTbGlkZXMucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuICAgICAgICAgICAgXy4kc2xpZGVyLmVtcHR5KCkuYXBwZW5kKG9yaWdpbmFsU2xpZGVzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuY2xpY2tIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoXy5zaG91bGRDbGljayA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24ocmVmcmVzaCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIF8uYXV0b1BsYXlDbGVhcigpO1xyXG5cclxuICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XHJcblxyXG4gICAgICAgIF8uY2xlYW5VcEV2ZW50cygpO1xyXG5cclxuICAgICAgICAkKCcuc2xpY2stY2xvbmVkJywgXy4kc2xpZGVyKS5kZXRhY2goKTtcclxuXHJcbiAgICAgICAgaWYgKF8uJGRvdHMpIHtcclxuICAgICAgICAgICAgXy4kZG90cy5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZiAoIF8uJHByZXZBcnJvdyAmJiBfLiRwcmV2QXJyb3cubGVuZ3RoICkge1xyXG5cclxuICAgICAgICAgICAgXy4kcHJldkFycm93XHJcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkIHNsaWNrLWFycm93IHNsaWNrLWhpZGRlbicpXHJcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gYXJpYS1kaXNhYmxlZCB0YWJpbmRleCcpXHJcbiAgICAgICAgICAgICAgICAuY3NzKCdkaXNwbGF5JywnJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIF8uaHRtbEV4cHIudGVzdCggXy5vcHRpb25zLnByZXZBcnJvdyApKSB7XHJcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggXy4kbmV4dEFycm93ICYmIF8uJG5leHRBcnJvdy5sZW5ndGggKSB7XHJcblxyXG4gICAgICAgICAgICBfLiRuZXh0QXJyb3dcclxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQgc2xpY2stYXJyb3cgc2xpY2staGlkZGVuJylcclxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbiBhcmlhLWRpc2FibGVkIHRhYmluZGV4JylcclxuICAgICAgICAgICAgICAgIC5jc3MoJ2Rpc3BsYXknLCcnKTtcclxuXHJcbiAgICAgICAgICAgIGlmICggXy5odG1sRXhwci50ZXN0KCBfLm9wdGlvbnMubmV4dEFycm93ICkpIHtcclxuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZiAoXy4kc2xpZGVzKSB7XHJcblxyXG4gICAgICAgICAgICBfLiRzbGlkZXNcclxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stc2xpZGUgc2xpY2stYWN0aXZlIHNsaWNrLWNlbnRlciBzbGljay12aXNpYmxlIHNsaWNrLWN1cnJlbnQnKVxyXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuJylcclxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLXNsaWNrLWluZGV4JylcclxuICAgICAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdzdHlsZScsICQodGhpcykuZGF0YSgnb3JpZ2luYWxTdHlsaW5nJykpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XHJcblxyXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmRldGFjaCgpO1xyXG5cclxuICAgICAgICAgICAgXy4kbGlzdC5kZXRhY2goKTtcclxuXHJcbiAgICAgICAgICAgIF8uJHNsaWRlci5hcHBlbmQoXy4kc2xpZGVzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF8uY2xlYW5VcFJvd3MoKTtcclxuXHJcbiAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay1zbGlkZXInKTtcclxuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJyk7XHJcbiAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay1kb3R0ZWQnKTtcclxuXHJcbiAgICAgICAgXy51bnNsaWNrZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZighcmVmcmVzaCkge1xyXG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignZGVzdHJveScsIFtfXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmRpc2FibGVUcmFuc2l0aW9uID0gZnVuY3Rpb24oc2xpZGUpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uID0ge307XHJcblxyXG4gICAgICAgIHRyYW5zaXRpb25bXy50cmFuc2l0aW9uVHlwZV0gPSAnJztcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyh0cmFuc2l0aW9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGUpLmNzcyh0cmFuc2l0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuZmFkZVNsaWRlID0gZnVuY3Rpb24oc2xpZGVJbmRleCwgY2FsbGJhY2spIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcclxuXHJcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcsIGNhbGxiYWNrKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIF8uYXBwbHlUcmFuc2l0aW9uKHNsaWRlSW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBfLmRpc2FibGVUcmFuc2l0aW9uKHNsaWRlSW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKCk7XHJcbiAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5mYWRlU2xpZGVPdXQgPSBmdW5jdGlvbihzbGlkZUluZGV4KSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7XHJcblxyXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMlxyXG4gICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgXy5hcHBseVRyYW5zaXRpb24oc2xpZGVJbmRleCk7XHJcblxyXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuY3NzKHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuZmlsdGVyU2xpZGVzID0gU2xpY2sucHJvdG90eXBlLnNsaWNrRmlsdGVyID0gZnVuY3Rpb24oZmlsdGVyKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKGZpbHRlciAhPT0gbnVsbCkge1xyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBfLiRzbGlkZXM7XHJcblxyXG4gICAgICAgICAgICBfLnVubG9hZCgpO1xyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVzQ2FjaGUuZmlsdGVyKGZpbHRlcikuYXBwZW5kVG8oXy4kc2xpZGVUcmFjayk7XHJcblxyXG4gICAgICAgICAgICBfLnJlaW5pdCgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuZm9jdXNIYW5kbGVyID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgXy4kc2xpZGVyXHJcbiAgICAgICAgICAgIC5vZmYoJ2ZvY3VzLnNsaWNrIGJsdXIuc2xpY2snKVxyXG4gICAgICAgICAgICAub24oJ2ZvY3VzLnNsaWNrIGJsdXIuc2xpY2snLFxyXG4gICAgICAgICAgICAgICAgJyo6bm90KC5zbGljay1hcnJvdyknLCBmdW5jdGlvbihldmVudCkge1xyXG5cclxuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHZhciAkc2YgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiggXy5vcHRpb25zLnBhdXNlT25Gb2N1cyApIHtcclxuICAgICAgICAgICAgICAgICAgICBfLmZvY3Vzc2VkID0gJHNmLmlzKCc6Zm9jdXMnKTtcclxuICAgICAgICAgICAgICAgICAgICBfLmF1dG9QbGF5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9LCAwKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRDdXJyZW50ID0gU2xpY2sucHJvdG90eXBlLnNsaWNrQ3VycmVudFNsaWRlID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuICAgICAgICByZXR1cm4gXy5jdXJyZW50U2xpZGU7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuZ2V0RG90Q291bnQgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICB2YXIgYnJlYWtQb2ludCA9IDA7XHJcbiAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xyXG4gICAgICAgIHZhciBwYWdlclF0eSA9IDA7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgd2hpbGUgKGJyZWFrUG9pbnQgPCBfLnNsaWRlQ291bnQpIHtcclxuICAgICAgICAgICAgICAgICsrcGFnZXJRdHk7XHJcbiAgICAgICAgICAgICAgICBicmVha1BvaW50ID0gY291bnRlciArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIgKz0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBwYWdlclF0eSA9IF8uc2xpZGVDb3VudDtcclxuICAgICAgICB9IGVsc2UgaWYoIV8ub3B0aW9ucy5hc05hdkZvcikge1xyXG4gICAgICAgICAgICBwYWdlclF0eSA9IDEgKyBNYXRoLmNlaWwoKF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIC8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHdoaWxlIChicmVha1BvaW50IDwgXy5zbGlkZUNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICArK3BhZ2VyUXR5O1xyXG4gICAgICAgICAgICAgICAgYnJlYWtQb2ludCA9IGNvdW50ZXIgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyICs9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHBhZ2VyUXR5IC0gMTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRMZWZ0ID0gZnVuY3Rpb24oc2xpZGVJbmRleCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIHRhcmdldExlZnQsXHJcbiAgICAgICAgICAgIHZlcnRpY2FsSGVpZ2h0LFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9IDAsXHJcbiAgICAgICAgICAgIHRhcmdldFNsaWRlO1xyXG5cclxuICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gMDtcclxuICAgICAgICB2ZXJ0aWNhbEhlaWdodCA9IF8uJHNsaWRlcy5maXJzdCgpLm91dGVySGVpZ2h0KHRydWUpO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcbiAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKF8uc2xpZGVXaWR0aCAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpICogLTE7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICh2ZXJ0aWNhbEhlaWdodCAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpICogLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPiBfLnNsaWRlQ291bnQgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzbGlkZUluZGV4ID4gXy5zbGlkZUNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSAoc2xpZGVJbmRleCAtIF8uc2xpZGVDb3VudCkpICogXy5zbGlkZVdpZHRoKSAqIC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICgoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIChzbGlkZUluZGV4IC0gXy5zbGlkZUNvdW50KSkgKiB2ZXJ0aWNhbEhlaWdodCkgKiAtMTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpICogXy5zbGlkZVdpZHRoKSAqIC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICgoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSAqIHZlcnRpY2FsSGVpZ2h0KSAqIC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA+IF8uc2xpZGVDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIC0gXy5zbGlkZUNvdW50KSAqIF8uc2xpZGVXaWR0aDtcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgLSBfLnNsaWRlQ291bnQpICogdmVydGljYWxIZWlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gMDtcclxuICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlICYmIF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ICs9IF8uc2xpZGVXaWR0aCAqIE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpIC0gXy5zbGlkZVdpZHRoO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9IDA7XHJcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgKz0gXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKChzbGlkZUluZGV4ICogXy5zbGlkZVdpZHRoKSAqIC0xKSArIF8uc2xpZGVPZmZzZXQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICgoc2xpZGVJbmRleCAqIHZlcnRpY2FsSGVpZ2h0KSAqIC0xKSArIHZlcnRpY2FsT2Zmc2V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSB0cnVlKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgfHwgXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykuZXEoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldFNsaWRlWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IChfLiRzbGlkZVRyYWNrLndpZHRoKCkgLSB0YXJnZXRTbGlkZVswXS5vZmZzZXRMZWZ0IC0gdGFyZ2V0U2xpZGUud2lkdGgoKSkgKiAtMTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IHRhcmdldFNsaWRlWzBdID8gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAqIC0xIDogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgfHwgXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykuZXEoc2xpZGVJbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykuZXEoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRTbGlkZVswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKF8uJHNsaWRlVHJhY2sud2lkdGgoKSAtIHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgLSB0YXJnZXRTbGlkZS53aWR0aCgpKSAqIC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAgMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSB0YXJnZXRTbGlkZVswXSA/IHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgKiAtMSA6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCArPSAoXy4kbGlzdC53aWR0aCgpIC0gdGFyZ2V0U2xpZGUub3V0ZXJXaWR0aCgpKSAvIDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0YXJnZXRMZWZ0O1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmdldE9wdGlvbiA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0dldE9wdGlvbiA9IGZ1bmN0aW9uKG9wdGlvbikge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIHJldHVybiBfLm9wdGlvbnNbb3B0aW9uXTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXROYXZpZ2FibGVJbmRleGVzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgYnJlYWtQb2ludCA9IDAsXHJcbiAgICAgICAgICAgIGNvdW50ZXIgPSAwLFxyXG4gICAgICAgICAgICBpbmRleGVzID0gW10sXHJcbiAgICAgICAgICAgIG1heDtcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgbWF4ID0gXy5zbGlkZUNvdW50O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgKiAtMTtcclxuICAgICAgICAgICAgY291bnRlciA9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAqIC0xO1xyXG4gICAgICAgICAgICBtYXggPSBfLnNsaWRlQ291bnQgKiAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2hpbGUgKGJyZWFrUG9pbnQgPCBtYXgpIHtcclxuICAgICAgICAgICAgaW5kZXhlcy5wdXNoKGJyZWFrUG9pbnQpO1xyXG4gICAgICAgICAgICBicmVha1BvaW50ID0gY291bnRlciArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcclxuICAgICAgICAgICAgY291bnRlciArPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaW5kZXhlcztcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRTbGljayA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRTbGlkZUNvdW50ID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgc2xpZGVzVHJhdmVyc2VkLCBzd2lwZWRTbGlkZSwgY2VudGVyT2Zmc2V0O1xyXG5cclxuICAgICAgICBjZW50ZXJPZmZzZXQgPSBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSA/IF8uc2xpZGVXaWR0aCAqIE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpIDogMDtcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5zd2lwZVRvU2xpZGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stc2xpZGUnKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBzbGlkZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlLm9mZnNldExlZnQgLSBjZW50ZXJPZmZzZXQgKyAoJChzbGlkZSkub3V0ZXJXaWR0aCgpIC8gMikgPiAoXy5zd2lwZUxlZnQgKiAtMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2lwZWRTbGlkZSA9IHNsaWRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzbGlkZXNUcmF2ZXJzZWQgPSBNYXRoLmFicygkKHN3aXBlZFNsaWRlKS5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JykgLSBfLmN1cnJlbnRTbGlkZSkgfHwgMTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzbGlkZXNUcmF2ZXJzZWQ7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmdvVG8gPSBTbGljay5wcm90b3R5cGUuc2xpY2tHb1RvID0gZnVuY3Rpb24oc2xpZGUsIGRvbnRBbmltYXRlKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmRleCcsXHJcbiAgICAgICAgICAgICAgICBpbmRleDogcGFyc2VJbnQoc2xpZGUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBkb250QW5pbWF0ZSk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKGNyZWF0aW9uKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKCEkKF8uJHNsaWRlcikuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcclxuXHJcbiAgICAgICAgICAgICQoXy4kc2xpZGVyKS5hZGRDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKTtcclxuXHJcbiAgICAgICAgICAgIF8uYnVpbGRSb3dzKCk7XHJcbiAgICAgICAgICAgIF8uYnVpbGRPdXQoKTtcclxuICAgICAgICAgICAgXy5zZXRQcm9wcygpO1xyXG4gICAgICAgICAgICBfLnN0YXJ0TG9hZCgpO1xyXG4gICAgICAgICAgICBfLmxvYWRTbGlkZXIoKTtcclxuICAgICAgICAgICAgXy5pbml0aWFsaXplRXZlbnRzKCk7XHJcbiAgICAgICAgICAgIF8udXBkYXRlQXJyb3dzKCk7XHJcbiAgICAgICAgICAgIF8udXBkYXRlRG90cygpO1xyXG4gICAgICAgICAgICBfLmNoZWNrUmVzcG9uc2l2ZSh0cnVlKTtcclxuICAgICAgICAgICAgXy5mb2N1c0hhbmRsZXIoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY3JlYXRpb24pIHtcclxuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2luaXQnLCBbX10pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIF8uaW5pdEFEQSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XHJcblxyXG4gICAgICAgICAgICBfLnBhdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBfLmF1dG9QbGF5KCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0QURBID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG4gICAgICAgIF8uJHNsaWRlcy5hZGQoXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stY2xvbmVkJykpLmF0dHIoe1xyXG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXHJcbiAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcclxuICAgICAgICB9KS5maW5kKCdhLCBpbnB1dCwgYnV0dG9uLCBzZWxlY3QnKS5hdHRyKHtcclxuICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBfLiRzbGlkZVRyYWNrLmF0dHIoJ3JvbGUnLCAnbGlzdGJveCcpO1xyXG5cclxuICAgICAgICBfLiRzbGlkZXMubm90KF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWNsb25lZCcpKS5lYWNoKGZ1bmN0aW9uKGkpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hdHRyKHtcclxuICAgICAgICAgICAgICAgICdyb2xlJzogJ29wdGlvbicsXHJcbiAgICAgICAgICAgICAgICAnYXJpYS1kZXNjcmliZWRieSc6ICdzbGljay1zbGlkZScgKyBfLmluc3RhbmNlVWlkICsgaSArICcnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoXy4kZG90cyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBfLiRkb3RzLmF0dHIoJ3JvbGUnLCAndGFibGlzdCcpLmZpbmQoJ2xpJykuZWFjaChmdW5jdGlvbihpKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoe1xyXG4gICAgICAgICAgICAgICAgICAgICdyb2xlJzogJ3ByZXNlbnRhdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiAnZmFsc2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICdhcmlhLWNvbnRyb2xzJzogJ25hdmlnYXRpb24nICsgXy5pbnN0YW5jZVVpZCArIGkgKyAnJyxcclxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnc2xpY2stc2xpZGUnICsgXy5pbnN0YW5jZVVpZCArIGkgKyAnJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuZmlyc3QoKS5hdHRyKCdhcmlhLXNlbGVjdGVkJywgJ3RydWUnKS5lbmQoKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoJ2J1dHRvbicpLmF0dHIoJ3JvbGUnLCAnYnV0dG9uJykuZW5kKClcclxuICAgICAgICAgICAgICAgIC5jbG9zZXN0KCdkaXYnKS5hdHRyKCdyb2xlJywgJ3Rvb2xiYXInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXy5hY3RpdmF0ZUFEQSgpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRBcnJvd0V2ZW50cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuICAgICAgICAgICAgXy4kcHJldkFycm93XHJcbiAgICAgICAgICAgICAgIC5vZmYoJ2NsaWNrLnNsaWNrJylcclxuICAgICAgICAgICAgICAgLm9uKCdjbGljay5zbGljaycsIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAncHJldmlvdXMnXHJcbiAgICAgICAgICAgICAgIH0sIF8uY2hhbmdlU2xpZGUpO1xyXG4gICAgICAgICAgICBfLiRuZXh0QXJyb3dcclxuICAgICAgICAgICAgICAgLm9mZignY2xpY2suc2xpY2snKVxyXG4gICAgICAgICAgICAgICAub24oJ2NsaWNrLnNsaWNrJywge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICduZXh0J1xyXG4gICAgICAgICAgICAgICB9LCBfLmNoYW5nZVNsaWRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuaW5pdERvdEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcbiAgICAgICAgICAgICQoJ2xpJywgXy4kZG90cykub24oJ2NsaWNrLnNsaWNrJywge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ2luZGV4J1xyXG4gICAgICAgICAgICB9LCBfLmNoYW5nZVNsaWRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5vcHRpb25zLnBhdXNlT25Eb3RzSG92ZXIgPT09IHRydWUgKSB7XHJcblxyXG4gICAgICAgICAgICAkKCdsaScsIF8uJGRvdHMpXHJcbiAgICAgICAgICAgICAgICAub24oJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSlcclxuICAgICAgICAgICAgICAgIC5vbignbW91c2VsZWF2ZS5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIGZhbHNlKSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0U2xpZGVFdmVudHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5wYXVzZU9uSG92ZXIgKSB7XHJcblxyXG4gICAgICAgICAgICBfLiRsaXN0Lm9uKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpO1xyXG4gICAgICAgICAgICBfLiRsaXN0Lm9uKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRpYWxpemVFdmVudHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLmluaXRBcnJvd0V2ZW50cygpO1xyXG5cclxuICAgICAgICBfLmluaXREb3RFdmVudHMoKTtcclxuICAgICAgICBfLmluaXRTbGlkZUV2ZW50cygpO1xyXG5cclxuICAgICAgICBfLiRsaXN0Lm9uKCd0b3VjaHN0YXJ0LnNsaWNrIG1vdXNlZG93bi5zbGljaycsIHtcclxuICAgICAgICAgICAgYWN0aW9uOiAnc3RhcnQnXHJcbiAgICAgICAgfSwgXy5zd2lwZUhhbmRsZXIpO1xyXG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNobW92ZS5zbGljayBtb3VzZW1vdmUuc2xpY2snLCB7XHJcbiAgICAgICAgICAgIGFjdGlvbjogJ21vdmUnXHJcbiAgICAgICAgfSwgXy5zd2lwZUhhbmRsZXIpO1xyXG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNoZW5kLnNsaWNrIG1vdXNldXAuc2xpY2snLCB7XHJcbiAgICAgICAgICAgIGFjdGlvbjogJ2VuZCdcclxuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XHJcbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2hjYW5jZWwuc2xpY2sgbW91c2VsZWF2ZS5zbGljaycsIHtcclxuICAgICAgICAgICAgYWN0aW9uOiAnZW5kJ1xyXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgXy4kbGlzdC5vbignY2xpY2suc2xpY2snLCBfLmNsaWNrSGFuZGxlcik7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKF8udmlzaWJpbGl0eUNoYW5nZSwgJC5wcm94eShfLnZpc2liaWxpdHksIF8pKTtcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIF8uJGxpc3Qub24oJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uU2VsZWN0ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICQoXy4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vbignY2xpY2suc2xpY2snLCBfLnNlbGVjdEhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdvcmllbnRhdGlvbmNoYW5nZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgJC5wcm94eShfLm9yaWVudGF0aW9uQ2hhbmdlLCBfKSk7XHJcblxyXG4gICAgICAgICQod2luZG93KS5vbigncmVzaXplLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCAkLnByb3h5KF8ucmVzaXplLCBfKSk7XHJcblxyXG4gICAgICAgICQoJ1tkcmFnZ2FibGUhPXRydWVdJywgXy4kc2xpZGVUcmFjaykub24oJ2RyYWdzdGFydCcsIF8ucHJldmVudERlZmF1bHQpO1xyXG5cclxuICAgICAgICAkKHdpbmRvdykub24oJ2xvYWQuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8uc2V0UG9zaXRpb24pO1xyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdyZWFkeS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgXy5zZXRQb3NpdGlvbik7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuaW5pdFVJID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG5cclxuICAgICAgICAgICAgXy4kcHJldkFycm93LnNob3coKTtcclxuICAgICAgICAgICAgXy4kbmV4dEFycm93LnNob3coKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG5cclxuICAgICAgICAgICAgXy4kZG90cy5zaG93KCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5rZXlIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG4gICAgICAgICAvL0RvbnQgc2xpZGUgaWYgdGhlIGN1cnNvciBpcyBpbnNpZGUgdGhlIGZvcm0gZmllbGRzIGFuZCBhcnJvdyBrZXlzIGFyZSBwcmVzc2VkXHJcbiAgICAgICAgaWYoIWV2ZW50LnRhcmdldC50YWdOYW1lLm1hdGNoKCdURVhUQVJFQXxJTlBVVHxTRUxFQ1QnKSkge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcgJiYgXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSA/ICduZXh0JyA6ICAncHJldmlvdXMnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkgJiYgXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSA/ICdwcmV2aW91cycgOiAnbmV4dCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5sYXp5TG9hZCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIGxvYWRSYW5nZSwgY2xvbmVSYW5nZSwgcmFuZ2VTdGFydCwgcmFuZ2VFbmQ7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRJbWFnZXMoaW1hZ2VzU2NvcGUpIHtcclxuXHJcbiAgICAgICAgICAgICQoJ2ltZ1tkYXRhLWxhenldJywgaW1hZ2VzU2NvcGUpLmVhY2goZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGltYWdlID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZVNvdXJjZSA9ICQodGhpcykuYXR0cignZGF0YS1sYXp5JyksXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VUb0xvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUoeyBvcGFjaXR5OiAwIH0sIDEwMCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmMnLCBpbWFnZVNvdXJjZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7IG9wYWNpdHk6IDEgfSwgMjAwLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLWxhenknKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1sb2FkaW5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignbGF6eUxvYWRlZCcsIFtfLCBpbWFnZSwgaW1hZ2VTb3VyY2VdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCAnZGF0YS1sYXp5JyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyggJ3NsaWNrLWxvYWRpbmcnIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCAnc2xpY2stbGF6eWxvYWQtZXJyb3InICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZEVycm9yJywgWyBfLCBpbWFnZSwgaW1hZ2VTb3VyY2UgXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZC5zcmMgPSBpbWFnZVNvdXJjZTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICByYW5nZVN0YXJ0ID0gXy5jdXJyZW50U2xpZGUgKyAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIgKyAxKTtcclxuICAgICAgICAgICAgICAgIHJhbmdlRW5kID0gcmFuZ2VTdGFydCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyAyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmFuZ2VTdGFydCA9IE1hdGgubWF4KDAsIF8uY3VycmVudFNsaWRlIC0gKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyICsgMSkpO1xyXG4gICAgICAgICAgICAgICAgcmFuZ2VFbmQgPSAyICsgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyICsgMSkgKyBfLmN1cnJlbnRTbGlkZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJhbmdlU3RhcnQgPSBfLm9wdGlvbnMuaW5maW5pdGUgPyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgXy5jdXJyZW50U2xpZGUgOiBfLmN1cnJlbnRTbGlkZTtcclxuICAgICAgICAgICAgcmFuZ2VFbmQgPSBNYXRoLmNlaWwocmFuZ2VTdGFydCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xyXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyYW5nZVN0YXJ0ID4gMCkgcmFuZ2VTdGFydC0tO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlRW5kIDw9IF8uc2xpZGVDb3VudCkgcmFuZ2VFbmQrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbG9hZFJhbmdlID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1zbGlkZScpLnNsaWNlKHJhbmdlU3RhcnQsIHJhbmdlRW5kKTtcclxuICAgICAgICBsb2FkSW1hZ2VzKGxvYWRSYW5nZSk7XHJcblxyXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG4gICAgICAgICAgICBjbG9uZVJhbmdlID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1zbGlkZScpO1xyXG4gICAgICAgICAgICBsb2FkSW1hZ2VzKGNsb25lUmFuZ2UpO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIGlmIChfLmN1cnJlbnRTbGlkZSA+PSBfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcbiAgICAgICAgICAgIGNsb25lUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLWNsb25lZCcpLnNsaWNlKDAsIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xyXG4gICAgICAgICAgICBsb2FkSW1hZ2VzKGNsb25lUmFuZ2UpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXy5jdXJyZW50U2xpZGUgPT09IDApIHtcclxuICAgICAgICAgICAgY2xvbmVSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stY2xvbmVkJykuc2xpY2UoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAqIC0xKTtcclxuICAgICAgICAgICAgbG9hZEltYWdlcyhjbG9uZVJhbmdlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUubG9hZFNsaWRlciA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIF8uc2V0UG9zaXRpb24oKTtcclxuXHJcbiAgICAgICAgXy4kc2xpZGVUcmFjay5jc3Moe1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stbG9hZGluZycpO1xyXG5cclxuICAgICAgICBfLmluaXRVSSgpO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmxhenlMb2FkID09PSAncHJvZ3Jlc3NpdmUnKSB7XHJcbiAgICAgICAgICAgIF8ucHJvZ3Jlc3NpdmVMYXp5TG9hZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5uZXh0ID0gU2xpY2sucHJvdG90eXBlLnNsaWNrTmV4dCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIF8uY2hhbmdlU2xpZGUoe1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnbmV4dCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLm9yaWVudGF0aW9uQ2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUoKTtcclxuICAgICAgICBfLnNldFBvc2l0aW9uKCk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUucGF1c2UgPSBTbGljay5wcm90b3R5cGUuc2xpY2tQYXVzZSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIF8uYXV0b1BsYXlDbGVhcigpO1xyXG4gICAgICAgIF8ucGF1c2VkID0gdHJ1ZTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5wbGF5ID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUGxheSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIF8uYXV0b1BsYXkoKTtcclxuICAgICAgICBfLm9wdGlvbnMuYXV0b3BsYXkgPSB0cnVlO1xyXG4gICAgICAgIF8ucGF1c2VkID0gZmFsc2U7XHJcbiAgICAgICAgXy5mb2N1c3NlZCA9IGZhbHNlO1xyXG4gICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5wb3N0U2xpZGUgPSBmdW5jdGlvbihpbmRleCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmKCAhXy51bnNsaWNrZWQgKSB7XHJcblxyXG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignYWZ0ZXJDaGFuZ2UnLCBbXywgaW5kZXhdKTtcclxuXHJcbiAgICAgICAgICAgIF8uYW5pbWF0aW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBfLnNldFBvc2l0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcclxuICAgICAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBfLmluaXRBREEoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUucHJldiA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1ByZXYgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLmNoYW5nZVNsaWRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ3ByZXZpb3VzJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbihldmVudCkge1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnByb2dyZXNzaXZlTGF6eUxvYWQgPSBmdW5jdGlvbiggdHJ5Q291bnQgKSB7XHJcblxyXG4gICAgICAgIHRyeUNvdW50ID0gdHJ5Q291bnQgfHwgMTtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICAkaW1nc1RvTG9hZCA9ICQoICdpbWdbZGF0YS1sYXp5XScsIF8uJHNsaWRlciApLFxyXG4gICAgICAgICAgICBpbWFnZSxcclxuICAgICAgICAgICAgaW1hZ2VTb3VyY2UsXHJcbiAgICAgICAgICAgIGltYWdlVG9Mb2FkO1xyXG5cclxuICAgICAgICBpZiAoICRpbWdzVG9Mb2FkLmxlbmd0aCApIHtcclxuXHJcbiAgICAgICAgICAgIGltYWdlID0gJGltZ3NUb0xvYWQuZmlyc3QoKTtcclxuICAgICAgICAgICAgaW1hZ2VTb3VyY2UgPSBpbWFnZS5hdHRyKCdkYXRhLWxhenknKTtcclxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHJcbiAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoICdzcmMnLCBpbWFnZVNvdXJjZSApXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtbGF6eScpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1sb2FkaW5nJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBfLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQgPT09IHRydWUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZGVkJywgWyBfLCBpbWFnZSwgaW1hZ2VTb3VyY2UgXSk7XHJcbiAgICAgICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoKTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0cnlDb3VudCA8IDMgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgICAqIHRyeSB0byBsb2FkIHRoZSBpbWFnZSAzIHRpbWVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAqIGxlYXZlIGEgc2xpZ2h0IGRlbGF5IHNvIHdlIGRvbid0IGdldFxyXG4gICAgICAgICAgICAgICAgICAgICAqIHNlcnZlcnMgYmxvY2tpbmcgdGhlIHJlcXVlc3QuXHJcbiAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucHJvZ3Jlc3NpdmVMYXp5TG9hZCggdHJ5Q291bnQgKyAxICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoICdkYXRhLWxhenknIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCAnc2xpY2stbG9hZGluZycgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoICdzbGljay1sYXp5bG9hZC1lcnJvcicgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkRXJyb3InLCBbIF8sIGltYWdlLCBpbWFnZVNvdXJjZSBdKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGltYWdlVG9Mb2FkLnNyYyA9IGltYWdlU291cmNlO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2FsbEltYWdlc0xvYWRlZCcsIFsgXyBdKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiggaW5pdGlhbGl6aW5nICkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsIGN1cnJlbnRTbGlkZSwgbGFzdFZpc2libGVJbmRleDtcclxuXHJcbiAgICAgICAgbGFzdFZpc2libGVJbmRleCA9IF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XHJcblxyXG4gICAgICAgIC8vIGluIG5vbi1pbmZpbml0ZSBzbGlkZXJzLCB3ZSBkb24ndCB3YW50IHRvIGdvIHBhc3QgdGhlXHJcbiAgICAgICAgLy8gbGFzdCB2aXNpYmxlIGluZGV4LlxyXG4gICAgICAgIGlmKCAhXy5vcHRpb25zLmluZmluaXRlICYmICggXy5jdXJyZW50U2xpZGUgPiBsYXN0VmlzaWJsZUluZGV4ICkpIHtcclxuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBsYXN0VmlzaWJsZUluZGV4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgbGVzcyBzbGlkZXMgdGhhbiB0byBzaG93LCBnbyB0byBzdGFydC5cclxuICAgICAgICBpZiAoIF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xyXG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IDA7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3VycmVudFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XHJcblxyXG4gICAgICAgIF8uZGVzdHJveSh0cnVlKTtcclxuXHJcbiAgICAgICAgJC5leHRlbmQoXywgXy5pbml0aWFscywgeyBjdXJyZW50U2xpZGU6IGN1cnJlbnRTbGlkZSB9KTtcclxuXHJcbiAgICAgICAgXy5pbml0KCk7XHJcblxyXG4gICAgICAgIGlmKCAhaW5pdGlhbGl6aW5nICkge1xyXG5cclxuICAgICAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ2luZGV4JyxcclxuICAgICAgICAgICAgICAgICAgICBpbmRleDogY3VycmVudFNsaWRlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnJlZ2lzdGVyQnJlYWtwb2ludHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLCBicmVha3BvaW50LCBjdXJyZW50QnJlYWtwb2ludCwgbCxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZVNldHRpbmdzID0gXy5vcHRpb25zLnJlc3BvbnNpdmUgfHwgbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKCAkLnR5cGUocmVzcG9uc2l2ZVNldHRpbmdzKSA9PT0gJ2FycmF5JyAmJiByZXNwb25zaXZlU2V0dGluZ3MubGVuZ3RoICkge1xyXG5cclxuICAgICAgICAgICAgXy5yZXNwb25kVG8gPSBfLm9wdGlvbnMucmVzcG9uZFRvIHx8ICd3aW5kb3cnO1xyXG5cclxuICAgICAgICAgICAgZm9yICggYnJlYWtwb2ludCBpbiByZXNwb25zaXZlU2V0dGluZ3MgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbCA9IF8uYnJlYWtwb2ludHMubGVuZ3RoLTE7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50QnJlYWtwb2ludCA9IHJlc3BvbnNpdmVTZXR0aW5nc1ticmVha3BvaW50XS5icmVha3BvaW50O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zaXZlU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoYnJlYWtwb2ludCkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIHRoZSBicmVha3BvaW50cyBhbmQgY3V0IG91dCBhbnkgZXhpc3RpbmdcclxuICAgICAgICAgICAgICAgICAgICAvLyBvbmVzIHdpdGggdGhlIHNhbWUgYnJlYWtwb2ludCBudW1iZXIsIHdlIGRvbid0IHdhbnQgZHVwZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUoIGwgPj0gMCApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIF8uYnJlYWtwb2ludHNbbF0gJiYgXy5icmVha3BvaW50c1tsXSA9PT0gY3VycmVudEJyZWFrcG9pbnQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRzLnNwbGljZShsLDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGwtLTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludHMucHVzaChjdXJyZW50QnJlYWtwb2ludCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3NbY3VycmVudEJyZWFrcG9pbnRdID0gcmVzcG9uc2l2ZVNldHRpbmdzW2JyZWFrcG9pbnRdLnNldHRpbmdzO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIF8uYnJlYWtwb2ludHMuc29ydChmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKCBfLm9wdGlvbnMubW9iaWxlRmlyc3QgKSA/IGEtYiA6IGItYTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5yZWluaXQgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLiRzbGlkZXMgPVxyXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrXHJcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oXy5vcHRpb25zLnNsaWRlKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1zbGlkZScpO1xyXG5cclxuICAgICAgICBfLnNsaWRlQ291bnQgPSBfLiRzbGlkZXMubGVuZ3RoO1xyXG5cclxuICAgICAgICBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50ICYmIF8uY3VycmVudFNsaWRlICE9PSAwKSB7XHJcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5jdXJyZW50U2xpZGUgLSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXy5yZWdpc3RlckJyZWFrcG9pbnRzKCk7XHJcblxyXG4gICAgICAgIF8uc2V0UHJvcHMoKTtcclxuICAgICAgICBfLnNldHVwSW5maW5pdGUoKTtcclxuICAgICAgICBfLmJ1aWxkQXJyb3dzKCk7XHJcbiAgICAgICAgXy51cGRhdGVBcnJvd3MoKTtcclxuICAgICAgICBfLmluaXRBcnJvd0V2ZW50cygpO1xyXG4gICAgICAgIF8uYnVpbGREb3RzKCk7XHJcbiAgICAgICAgXy51cGRhdGVEb3RzKCk7XHJcbiAgICAgICAgXy5pbml0RG90RXZlbnRzKCk7XHJcbiAgICAgICAgXy5jbGVhblVwU2xpZGVFdmVudHMoKTtcclxuICAgICAgICBfLmluaXRTbGlkZUV2ZW50cygpO1xyXG5cclxuICAgICAgICBfLmNoZWNrUmVzcG9uc2l2ZShmYWxzZSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPblNlbGVjdCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAkKF8uJHNsaWRlVHJhY2spLmNoaWxkcmVuKCkub24oJ2NsaWNrLnNsaWNrJywgXy5zZWxlY3RIYW5kbGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF8uc2V0U2xpZGVDbGFzc2VzKHR5cGVvZiBfLmN1cnJlbnRTbGlkZSA9PT0gJ251bWJlcicgPyBfLmN1cnJlbnRTbGlkZSA6IDApO1xyXG5cclxuICAgICAgICBfLnNldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgXy5mb2N1c0hhbmRsZXIoKTtcclxuXHJcbiAgICAgICAgXy5wYXVzZWQgPSAhXy5vcHRpb25zLmF1dG9wbGF5O1xyXG4gICAgICAgIF8uYXV0b1BsYXkoKTtcclxuXHJcbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3JlSW5pdCcsIFtfXSk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpICE9PSBfLndpbmRvd1dpZHRoKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChfLndpbmRvd0RlbGF5KTtcclxuICAgICAgICAgICAgXy53aW5kb3dEZWxheSA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgXy53aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xyXG4gICAgICAgICAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUoKTtcclxuICAgICAgICAgICAgICAgIGlmKCAhXy51bnNsaWNrZWQgKSB7IF8uc2V0UG9zaXRpb24oKTsgfVxyXG4gICAgICAgICAgICB9LCA1MCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUucmVtb3ZlU2xpZGUgPSBTbGljay5wcm90b3R5cGUuc2xpY2tSZW1vdmUgPSBmdW5jdGlvbihpbmRleCwgcmVtb3ZlQmVmb3JlLCByZW1vdmVBbGwpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mKGluZGV4KSA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZUJlZm9yZSA9IGluZGV4O1xyXG4gICAgICAgICAgICBpbmRleCA9IHJlbW92ZUJlZm9yZSA9PT0gdHJ1ZSA/IDAgOiBfLnNsaWRlQ291bnQgLSAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGluZGV4ID0gcmVtb3ZlQmVmb3JlID09PSB0cnVlID8gLS1pbmRleCA6IGluZGV4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8IDEgfHwgaW5kZXggPCAwIHx8IGluZGV4ID4gXy5zbGlkZUNvdW50IC0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfLnVubG9hZCgpO1xyXG5cclxuICAgICAgICBpZiAocmVtb3ZlQWxsID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oKS5yZW1vdmUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZXEoaW5kZXgpLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXy4kc2xpZGVzID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpO1xyXG5cclxuICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlVHJhY2suYXBwZW5kKF8uJHNsaWRlcyk7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlc0NhY2hlID0gXy4kc2xpZGVzO1xyXG5cclxuICAgICAgICBfLnJlaW5pdCgpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnNldENTUyA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgcG9zaXRpb25Qcm9wcyA9IHt9LFxyXG4gICAgICAgICAgICB4LCB5O1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBwb3NpdGlvbiA9IC1wb3NpdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgeCA9IF8ucG9zaXRpb25Qcm9wID09ICdsZWZ0JyA/IE1hdGguY2VpbChwb3NpdGlvbikgKyAncHgnIDogJzBweCc7XHJcbiAgICAgICAgeSA9IF8ucG9zaXRpb25Qcm9wID09ICd0b3AnID8gTWF0aC5jZWlsKHBvc2l0aW9uKSArICdweCcgOiAnMHB4JztcclxuXHJcbiAgICAgICAgcG9zaXRpb25Qcm9wc1tfLnBvc2l0aW9uUHJvcF0gPSBwb3NpdGlvbjtcclxuXHJcbiAgICAgICAgaWYgKF8udHJhbnNmb3Jtc0VuYWJsZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHBvc2l0aW9uUHJvcHMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uUHJvcHMgPSB7fTtcclxuICAgICAgICAgICAgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvblByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZSgnICsgeCArICcsICcgKyB5ICsgJyknO1xyXG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MocG9zaXRpb25Qcm9wcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvblByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZTNkKCcgKyB4ICsgJywgJyArIHkgKyAnLCAwcHgpJztcclxuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHBvc2l0aW9uUHJvcHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnNldERpbWVuc2lvbnMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIF8uJGxpc3QuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAoJzBweCAnICsgXy5vcHRpb25zLmNlbnRlclBhZGRpbmcpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF8uJGxpc3QuaGVpZ2h0KF8uJHNsaWRlcy5maXJzdCgpLm91dGVySGVpZ2h0KHRydWUpICogXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XHJcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgXy4kbGlzdC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IChfLm9wdGlvbnMuY2VudGVyUGFkZGluZyArICcgMHB4JylcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfLmxpc3RXaWR0aCA9IF8uJGxpc3Qud2lkdGgoKTtcclxuICAgICAgICBfLmxpc3RIZWlnaHQgPSBfLiRsaXN0LmhlaWdodCgpO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UgJiYgXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIF8uc2xpZGVXaWR0aCA9IE1hdGguY2VpbChfLmxpc3RXaWR0aCAvIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xyXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLndpZHRoKE1hdGguY2VpbCgoXy5zbGlkZVdpZHRoICogXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykubGVuZ3RoKSkpO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2sud2lkdGgoNTAwMCAqIF8uc2xpZGVDb3VudCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgXy5zbGlkZVdpZHRoID0gTWF0aC5jZWlsKF8ubGlzdFdpZHRoKTtcclxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5oZWlnaHQoTWF0aC5jZWlsKChfLiRzbGlkZXMuZmlyc3QoKS5vdXRlckhlaWdodCh0cnVlKSAqIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmxlbmd0aCkpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBvZmZzZXQgPSBfLiRzbGlkZXMuZmlyc3QoKS5vdXRlcldpZHRoKHRydWUpIC0gXy4kc2xpZGVzLmZpcnN0KCkud2lkdGgoKTtcclxuICAgICAgICBpZiAoXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IGZhbHNlKSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS53aWR0aChfLnNsaWRlV2lkdGggLSBvZmZzZXQpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnNldEZhZGUgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICB0YXJnZXRMZWZ0O1xyXG5cclxuICAgICAgICBfLiRzbGlkZXMuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xyXG4gICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKF8uc2xpZGVXaWR0aCAqIGluZGV4KSAqIC0xO1xyXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiB0YXJnZXRMZWZ0LFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHRhcmdldExlZnQsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgXy4kc2xpZGVzLmVxKF8uY3VycmVudFNsaWRlKS5jc3Moe1xyXG4gICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAxLFxyXG4gICAgICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuc2V0SGVpZ2h0ID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT09IDEgJiYgXy5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0ID09PSB0cnVlICYmIF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdmFyIHRhcmdldEhlaWdodCA9IF8uJHNsaWRlcy5lcShfLmN1cnJlbnRTbGlkZSkub3V0ZXJIZWlnaHQodHJ1ZSk7XHJcbiAgICAgICAgICAgIF8uJGxpc3QuY3NzKCdoZWlnaHQnLCB0YXJnZXRIZWlnaHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRPcHRpb24gPVxyXG4gICAgU2xpY2sucHJvdG90eXBlLnNsaWNrU2V0T3B0aW9uID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGFjY2VwdHMgYXJndW1lbnRzIGluIGZvcm1hdCBvZjpcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqICAtIGZvciBjaGFuZ2luZyBhIHNpbmdsZSBvcHRpb24ncyB2YWx1ZTpcclxuICAgICAgICAgKiAgICAgLnNsaWNrKFwic2V0T3B0aW9uXCIsIG9wdGlvbiwgdmFsdWUsIHJlZnJlc2ggKVxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogIC0gZm9yIGNoYW5naW5nIGEgc2V0IG9mIHJlc3BvbnNpdmUgb3B0aW9uczpcclxuICAgICAgICAgKiAgICAgLnNsaWNrKFwic2V0T3B0aW9uXCIsICdyZXNwb25zaXZlJywgW3t9LCAuLi5dLCByZWZyZXNoIClcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqICAtIGZvciB1cGRhdGluZyBtdWx0aXBsZSB2YWx1ZXMgYXQgb25jZSAobm90IHJlc3BvbnNpdmUpXHJcbiAgICAgICAgICogICAgIC5zbGljayhcInNldE9wdGlvblwiLCB7ICdvcHRpb24nOiB2YWx1ZSwgLi4uIH0sIHJlZnJlc2ggKVxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsIGwsIGl0ZW0sIG9wdGlvbiwgdmFsdWUsIHJlZnJlc2ggPSBmYWxzZSwgdHlwZTtcclxuXHJcbiAgICAgICAgaWYoICQudHlwZSggYXJndW1lbnRzWzBdICkgPT09ICdvYmplY3QnICkge1xyXG5cclxuICAgICAgICAgICAgb3B0aW9uID0gIGFyZ3VtZW50c1swXTtcclxuICAgICAgICAgICAgcmVmcmVzaCA9IGFyZ3VtZW50c1sxXTtcclxuICAgICAgICAgICAgdHlwZSA9ICdtdWx0aXBsZSc7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoICQudHlwZSggYXJndW1lbnRzWzBdICkgPT09ICdzdHJpbmcnICkge1xyXG5cclxuICAgICAgICAgICAgb3B0aW9uID0gIGFyZ3VtZW50c1swXTtcclxuICAgICAgICAgICAgdmFsdWUgPSBhcmd1bWVudHNbMV07XHJcbiAgICAgICAgICAgIHJlZnJlc2ggPSBhcmd1bWVudHNbMl07XHJcblxyXG4gICAgICAgICAgICBpZiAoIGFyZ3VtZW50c1swXSA9PT0gJ3Jlc3BvbnNpdmUnICYmICQudHlwZSggYXJndW1lbnRzWzFdICkgPT09ICdhcnJheScgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdHlwZSA9ICdyZXNwb25zaXZlJztcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIHR5cGVvZiBhcmd1bWVudHNbMV0gIT09ICd1bmRlZmluZWQnICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHR5cGUgPSAnc2luZ2xlJztcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIHR5cGUgPT09ICdzaW5nbGUnICkge1xyXG5cclxuICAgICAgICAgICAgXy5vcHRpb25zW29wdGlvbl0gPSB2YWx1ZTtcclxuXHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoIHR5cGUgPT09ICdtdWx0aXBsZScgKSB7XHJcblxyXG4gICAgICAgICAgICAkLmVhY2goIG9wdGlvbiAsIGZ1bmN0aW9uKCBvcHQsIHZhbCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBfLm9wdGlvbnNbb3B0XSA9IHZhbDtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICggdHlwZSA9PT0gJ3Jlc3BvbnNpdmUnICkge1xyXG5cclxuICAgICAgICAgICAgZm9yICggaXRlbSBpbiB2YWx1ZSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiggJC50eXBlKCBfLm9wdGlvbnMucmVzcG9uc2l2ZSApICE9PSAnYXJyYXknICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZSA9IFsgdmFsdWVbaXRlbV0gXTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsID0gXy5vcHRpb25zLnJlc3BvbnNpdmUubGVuZ3RoLTE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCB0aGUgcmVzcG9uc2l2ZSBvYmplY3QgYW5kIHNwbGljZSBvdXQgZHVwbGljYXRlcy5cclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSggbCA+PSAwICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIF8ub3B0aW9ucy5yZXNwb25zaXZlW2xdLmJyZWFrcG9pbnQgPT09IHZhbHVlW2l0ZW1dLmJyZWFrcG9pbnQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUuc3BsaWNlKGwsMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsLS07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUucHVzaCggdmFsdWVbaXRlbV0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCByZWZyZXNoICkge1xyXG5cclxuICAgICAgICAgICAgXy51bmxvYWQoKTtcclxuICAgICAgICAgICAgXy5yZWluaXQoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnNldFBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgXy5zZXREaW1lbnNpb25zKCk7XHJcblxyXG4gICAgICAgIF8uc2V0SGVpZ2h0KCk7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgXy5zZXRDU1MoXy5nZXRMZWZ0KF8uY3VycmVudFNsaWRlKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgXy5zZXRGYWRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignc2V0UG9zaXRpb24nLCBbX10pO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnNldFByb3BzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgYm9keVN0eWxlID0gZG9jdW1lbnQuYm9keS5zdHlsZTtcclxuXHJcbiAgICAgICAgXy5wb3NpdGlvblByb3AgPSBfLm9wdGlvbnMudmVydGljYWwgPT09IHRydWUgPyAndG9wJyA6ICdsZWZ0JztcclxuXHJcbiAgICAgICAgaWYgKF8ucG9zaXRpb25Qcm9wID09PSAndG9wJykge1xyXG4gICAgICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLXZlcnRpY2FsJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay12ZXJ0aWNhbCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJvZHlTdHlsZS5XZWJraXRUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgYm9keVN0eWxlLk1velRyYW5zaXRpb24gIT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBib2R5U3R5bGUubXNUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy51c2VDU1MgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIF8uY3NzVHJhbnNpdGlvbnMgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5mYWRlICkge1xyXG4gICAgICAgICAgICBpZiAoIHR5cGVvZiBfLm9wdGlvbnMuekluZGV4ID09PSAnbnVtYmVyJyApIHtcclxuICAgICAgICAgICAgICAgIGlmKCBfLm9wdGlvbnMuekluZGV4IDwgMyApIHtcclxuICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMuekluZGV4ID0gMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIF8ub3B0aW9ucy56SW5kZXggPSBfLmRlZmF1bHRzLnpJbmRleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJvZHlTdHlsZS5PVHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICdPVHJhbnNmb3JtJztcclxuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy1vLXRyYW5zZm9ybSc7XHJcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnT1RyYW5zaXRpb24nO1xyXG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLnBlcnNwZWN0aXZlUHJvcGVydHkgPT09IHVuZGVmaW5lZCAmJiBib2R5U3R5bGUud2Via2l0UGVyc3BlY3RpdmUgPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYm9keVN0eWxlLk1velRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnTW96VHJhbnNmb3JtJztcclxuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy1tb3otdHJhbnNmb3JtJztcclxuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICdNb3pUcmFuc2l0aW9uJztcclxuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5wZXJzcGVjdGl2ZVByb3BlcnR5ID09PSB1bmRlZmluZWQgJiYgYm9keVN0eWxlLk1velBlcnNwZWN0aXZlID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJvZHlTdHlsZS53ZWJraXRUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ3dlYmtpdFRyYW5zZm9ybSc7XHJcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctd2Via2l0LXRyYW5zZm9ybSc7XHJcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnd2Via2l0VHJhbnNpdGlvbic7XHJcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUucGVyc3BlY3RpdmVQcm9wZXJ0eSA9PT0gdW5kZWZpbmVkICYmIGJvZHlTdHlsZS53ZWJraXRQZXJzcGVjdGl2ZSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChib2R5U3R5bGUubXNUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ21zVHJhbnNmb3JtJztcclxuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy1tcy10cmFuc2Zvcm0nO1xyXG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ21zVHJhbnNpdGlvbic7XHJcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUubXNUcmFuc2Zvcm0gPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYm9keVN0eWxlLnRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkICYmIF8uYW5pbVR5cGUgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAndHJhbnNmb3JtJztcclxuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJ3RyYW5zZm9ybSc7XHJcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAndHJhbnNpdGlvbic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF8udHJhbnNmb3Jtc0VuYWJsZWQgPSBfLm9wdGlvbnMudXNlVHJhbnNmb3JtICYmIChfLmFuaW1UeXBlICE9PSBudWxsICYmIF8uYW5pbVR5cGUgIT09IGZhbHNlKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRTbGlkZUNsYXNzZXMgPSBmdW5jdGlvbihpbmRleCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIGNlbnRlck9mZnNldCwgYWxsU2xpZGVzLCBpbmRleE9mZnNldCwgcmVtYWluZGVyO1xyXG5cclxuICAgICAgICBhbGxTbGlkZXMgPSBfLiRzbGlkZXJcclxuICAgICAgICAgICAgLmZpbmQoJy5zbGljay1zbGlkZScpXHJcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stYWN0aXZlIHNsaWNrLWNlbnRlciBzbGljay1jdXJyZW50JylcclxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcclxuXHJcbiAgICAgICAgXy4kc2xpZGVzXHJcbiAgICAgICAgICAgIC5lcShpbmRleClcclxuICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1jdXJyZW50Jyk7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xyXG5cclxuICAgICAgICAgICAgY2VudGVyT2Zmc2V0ID0gTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMik7XHJcblxyXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IGNlbnRlck9mZnNldCAmJiBpbmRleCA8PSAoXy5zbGlkZUNvdW50IC0gMSkgLSBjZW50ZXJPZmZzZXQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleCAtIGNlbnRlck9mZnNldCwgaW5kZXggKyBjZW50ZXJPZmZzZXQgKyAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4T2Zmc2V0ID0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIGluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXhPZmZzZXQgLSBjZW50ZXJPZmZzZXQgKyAxLCBpbmRleE9mZnNldCArIGNlbnRlck9mZnNldCArIDIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmVxKGFsbFNsaWRlcy5sZW5ndGggLSAxIC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1jZW50ZXInKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSBfLnNsaWRlQ291bnQgLSAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZXEoXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1jZW50ZXInKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBfLiRzbGlkZXNcclxuICAgICAgICAgICAgICAgIC5lcShpbmRleClcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY2VudGVyJyk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8PSAoXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBfLiRzbGlkZXNcclxuICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXgsIGluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcclxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFsbFNsaWRlcy5sZW5ndGggPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG5cclxuICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVtYWluZGVyID0gXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcclxuICAgICAgICAgICAgICAgIGluZGV4T2Zmc2V0ID0gXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlID8gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIGluZGV4IDogaW5kZXg7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICYmIChfLnNsaWRlQ291bnQgLSBpbmRleCkgPCBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXhPZmZzZXQgLSAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIHJlbWFpbmRlciksIGluZGV4T2Zmc2V0ICsgcmVtYWluZGVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXhPZmZzZXQsIGluZGV4T2Zmc2V0ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ29uZGVtYW5kJykge1xyXG4gICAgICAgICAgICBfLmxhenlMb2FkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnNldHVwSW5maW5pdGUgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICBpLCBzbGlkZUluZGV4LCBpbmZpbml0ZUNvdW50O1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgXy5vcHRpb25zLmNlbnRlck1vZGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUgJiYgXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XHJcblxyXG4gICAgICAgICAgICBzbGlkZUluZGV4ID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGVDb3VudCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyAxO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZUNvdW50ID0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBfLnNsaWRlQ291bnQ7IGkgPiAoXy5zbGlkZUNvdW50IC1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGVDb3VudCk7IGkgLT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlSW5kZXggPSBpIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICAkKF8uJHNsaWRlc1tzbGlkZUluZGV4XSkuY2xvbmUodHJ1ZSkuYXR0cignaWQnLCAnJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBzbGlkZUluZGV4IC0gXy5zbGlkZUNvdW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucHJlcGVuZFRvKF8uJHNsaWRlVHJhY2spLmFkZENsYXNzKCdzbGljay1jbG9uZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBpbmZpbml0ZUNvdW50OyBpICs9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZUluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgICAgICAkKF8uJHNsaWRlc1tzbGlkZUluZGV4XSkuY2xvbmUodHJ1ZSkuYXR0cignaWQnLCAnJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBzbGlkZUluZGV4ICsgXy5zbGlkZUNvdW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8oXy4kc2xpZGVUcmFjaykuYWRkQ2xhc3MoJ3NsaWNrLWNsb25lZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stY2xvbmVkJykuZmluZCgnW2lkXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdpZCcsICcnKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuaW50ZXJydXB0ID0gZnVuY3Rpb24oIHRvZ2dsZSApIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiggIXRvZ2dsZSApIHtcclxuICAgICAgICAgICAgXy5hdXRvUGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfLmludGVycnVwdGVkID0gdG9nZ2xlO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnNlbGVjdEhhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIHZhciB0YXJnZXRFbGVtZW50ID1cclxuICAgICAgICAgICAgJChldmVudC50YXJnZXQpLmlzKCcuc2xpY2stc2xpZGUnKSA/XHJcbiAgICAgICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkgOlxyXG4gICAgICAgICAgICAgICAgJChldmVudC50YXJnZXQpLnBhcmVudHMoJy5zbGljay1zbGlkZScpO1xyXG5cclxuICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludCh0YXJnZXRFbGVtZW50LmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnKSk7XHJcblxyXG4gICAgICAgIGlmICghaW5kZXgpIGluZGV4ID0gMDtcclxuXHJcbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcblxyXG4gICAgICAgICAgICBfLnNldFNsaWRlQ2xhc3NlcyhpbmRleCk7XHJcbiAgICAgICAgICAgIF8uYXNOYXZGb3IoaW5kZXgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXy5zbGlkZUhhbmRsZXIoaW5kZXgpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnNsaWRlSGFuZGxlciA9IGZ1bmN0aW9uKGluZGV4LCBzeW5jLCBkb250QW5pbWF0ZSkge1xyXG5cclxuICAgICAgICB2YXIgdGFyZ2V0U2xpZGUsIGFuaW1TbGlkZSwgb2xkU2xpZGUsIHNsaWRlTGVmdCwgdGFyZ2V0TGVmdCA9IG51bGwsXHJcbiAgICAgICAgICAgIF8gPSB0aGlzLCBuYXZUYXJnZXQ7XHJcblxyXG4gICAgICAgIHN5bmMgPSBzeW5jIHx8IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoXy5hbmltYXRpbmcgPT09IHRydWUgJiYgXy5vcHRpb25zLndhaXRGb3JBbmltYXRlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSAmJiBfLmN1cnJlbnRTbGlkZSA9PT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzeW5jID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBfLmFzTmF2Rm9yKGluZGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRhcmdldFNsaWRlID0gaW5kZXg7XHJcbiAgICAgICAgdGFyZ2V0TGVmdCA9IF8uZ2V0TGVmdCh0YXJnZXRTbGlkZSk7XHJcbiAgICAgICAgc2xpZGVMZWZ0ID0gXy5nZXRMZWZ0KF8uY3VycmVudFNsaWRlKTtcclxuXHJcbiAgICAgICAgXy5jdXJyZW50TGVmdCA9IF8uc3dpcGVMZWZ0ID09PSBudWxsID8gc2xpZGVMZWZ0IDogXy5zd2lwZUxlZnQ7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSBmYWxzZSAmJiAoaW5kZXggPCAwIHx8IGluZGV4ID4gXy5nZXREb3RDb3VudCgpICogXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSkge1xyXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXy5hbmltYXRlU2xpZGUoc2xpZGVMZWZ0LCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUodGFyZ2V0U2xpZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSAmJiAoaW5kZXggPCAwIHx8IGluZGV4ID4gKF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkpKSB7XHJcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBfLmFuaW1hdGVTbGlkZShzbGlkZUxlZnQsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChfLmF1dG9QbGF5VGltZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRhcmdldFNsaWRlIDwgMCkge1xyXG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSBfLnNsaWRlQ291bnQgLSAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IF8uc2xpZGVDb3VudCArIHRhcmdldFNsaWRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXRTbGlkZSA+PSBfLnNsaWRlQ291bnQpIHtcclxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgYW5pbVNsaWRlID0gMDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IHRhcmdldFNsaWRlIC0gXy5zbGlkZUNvdW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYW5pbVNsaWRlID0gdGFyZ2V0U2xpZGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfLmFuaW1hdGluZyA9IHRydWU7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdiZWZvcmVDaGFuZ2UnLCBbXywgXy5jdXJyZW50U2xpZGUsIGFuaW1TbGlkZV0pO1xyXG5cclxuICAgICAgICBvbGRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xyXG4gICAgICAgIF8uY3VycmVudFNsaWRlID0gYW5pbVNsaWRlO1xyXG5cclxuICAgICAgICBfLnNldFNsaWRlQ2xhc3NlcyhfLmN1cnJlbnRTbGlkZSk7XHJcblxyXG4gICAgICAgIGlmICggXy5vcHRpb25zLmFzTmF2Rm9yICkge1xyXG5cclxuICAgICAgICAgICAgbmF2VGFyZ2V0ID0gXy5nZXROYXZUYXJnZXQoKTtcclxuICAgICAgICAgICAgbmF2VGFyZ2V0ID0gbmF2VGFyZ2V0LnNsaWNrKCdnZXRTbGljaycpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBuYXZUYXJnZXQuc2xpZGVDb3VudCA8PSBuYXZUYXJnZXQub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XHJcbiAgICAgICAgICAgICAgICBuYXZUYXJnZXQuc2V0U2xpZGVDbGFzc2VzKF8uY3VycmVudFNsaWRlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF8udXBkYXRlRG90cygpO1xyXG4gICAgICAgIF8udXBkYXRlQXJyb3dzKCk7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBfLmZhZGVTbGlkZU91dChvbGRTbGlkZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgXy5mYWRlU2xpZGUoYW5pbVNsaWRlLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfLmFuaW1hdGVIZWlnaHQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIF8uYW5pbWF0ZVNsaWRlKHRhcmdldExlZnQsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuc3RhcnRMb2FkID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG5cclxuICAgICAgICAgICAgXy4kcHJldkFycm93LmhpZGUoKTtcclxuICAgICAgICAgICAgXy4kbmV4dEFycm93LmhpZGUoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG5cclxuICAgICAgICAgICAgXy4kZG90cy5oaWRlKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay1sb2FkaW5nJyk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVEaXJlY3Rpb24gPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIHhEaXN0LCB5RGlzdCwgciwgc3dpcGVBbmdsZSwgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIHhEaXN0ID0gXy50b3VjaE9iamVjdC5zdGFydFggLSBfLnRvdWNoT2JqZWN0LmN1clg7XHJcbiAgICAgICAgeURpc3QgPSBfLnRvdWNoT2JqZWN0LnN0YXJ0WSAtIF8udG91Y2hPYmplY3QuY3VyWTtcclxuICAgICAgICByID0gTWF0aC5hdGFuMih5RGlzdCwgeERpc3QpO1xyXG5cclxuICAgICAgICBzd2lwZUFuZ2xlID0gTWF0aC5yb3VuZChyICogMTgwIC8gTWF0aC5QSSk7XHJcbiAgICAgICAgaWYgKHN3aXBlQW5nbGUgPCAwKSB7XHJcbiAgICAgICAgICAgIHN3aXBlQW5nbGUgPSAzNjAgLSBNYXRoLmFicyhzd2lwZUFuZ2xlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgoc3dpcGVBbmdsZSA8PSA0NSkgJiYgKHN3aXBlQW5nbGUgPj0gMCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/ICdsZWZ0JyA6ICdyaWdodCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKHN3aXBlQW5nbGUgPD0gMzYwKSAmJiAoc3dpcGVBbmdsZSA+PSAzMTUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAnbGVmdCcgOiAncmlnaHQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKChzd2lwZUFuZ2xlID49IDEzNSkgJiYgKHN3aXBlQW5nbGUgPD0gMjI1KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gJ3JpZ2h0JyA6ICdsZWZ0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmICgoc3dpcGVBbmdsZSA+PSAzNSkgJiYgKHN3aXBlQW5nbGUgPD0gMTM1KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdkb3duJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAndXAnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gJ3ZlcnRpY2FsJztcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZUVuZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgc2xpZGVDb3VudCxcclxuICAgICAgICAgICAgZGlyZWN0aW9uO1xyXG5cclxuICAgICAgICBfLmRyYWdnaW5nID0gZmFsc2U7XHJcbiAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IGZhbHNlO1xyXG4gICAgICAgIF8uc2hvdWxkQ2xpY2sgPSAoIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPiAxMCApID8gZmFsc2UgOiB0cnVlO1xyXG5cclxuICAgICAgICBpZiAoIF8udG91Y2hPYmplY3QuY3VyWCA9PT0gdW5kZWZpbmVkICkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIF8udG91Y2hPYmplY3QuZWRnZUhpdCA9PT0gdHJ1ZSApIHtcclxuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2VkZ2UnLCBbXywgXy5zd2lwZURpcmVjdGlvbigpIF0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID49IF8udG91Y2hPYmplY3QubWluU3dpcGUgKSB7XHJcblxyXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBfLnN3aXBlRGlyZWN0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKCBkaXJlY3Rpb24gKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAnbGVmdCc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICdkb3duJzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVDb3VudCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5zd2lwZVRvU2xpZGUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jaGVja05hdmlnYWJsZSggXy5jdXJyZW50U2xpZGUgKyBfLmdldFNsaWRlQ291bnQoKSApIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlICsgXy5nZXRTbGlkZUNvdW50KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIF8uY3VycmVudERpcmVjdGlvbiA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3VwJzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVDb3VudCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5zd2lwZVRvU2xpZGUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jaGVja05hdmlnYWJsZSggXy5jdXJyZW50U2xpZGUgLSBfLmdldFNsaWRlQ291bnQoKSApIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlIC0gXy5nZXRTbGlkZUNvdW50KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIF8uY3VycmVudERpcmVjdGlvbiA9IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoIGRpcmVjdGlvbiAhPSAndmVydGljYWwnICkge1xyXG5cclxuICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKCBzbGlkZUNvdW50ICk7XHJcbiAgICAgICAgICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XHJcbiAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignc3dpcGUnLCBbXywgZGlyZWN0aW9uIF0pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBfLnRvdWNoT2JqZWN0LnN0YXJ0WCAhPT0gXy50b3VjaE9iamVjdC5jdXJYICkge1xyXG5cclxuICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKCBfLmN1cnJlbnRTbGlkZSApO1xyXG4gICAgICAgICAgICAgICAgXy50b3VjaE9iamVjdCA9IHt9O1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoKF8ub3B0aW9ucy5zd2lwZSA9PT0gZmFsc2UpIHx8ICgnb250b3VjaGVuZCcgaW4gZG9jdW1lbnQgJiYgXy5vcHRpb25zLnN3aXBlID09PSBmYWxzZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmRyYWdnYWJsZSA9PT0gZmFsc2UgJiYgZXZlbnQudHlwZS5pbmRleE9mKCdtb3VzZScpICE9PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfLnRvdWNoT2JqZWN0LmZpbmdlckNvdW50ID0gZXZlbnQub3JpZ2luYWxFdmVudCAmJiBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMgIT09IHVuZGVmaW5lZCA/XHJcbiAgICAgICAgICAgIGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcy5sZW5ndGggOiAxO1xyXG5cclxuICAgICAgICBfLnRvdWNoT2JqZWN0Lm1pblN3aXBlID0gXy5saXN0V2lkdGggLyBfLm9wdGlvbnNcclxuICAgICAgICAgICAgLnRvdWNoVGhyZXNob2xkO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBfLnRvdWNoT2JqZWN0Lm1pblN3aXBlID0gXy5saXN0SGVpZ2h0IC8gXy5vcHRpb25zXHJcbiAgICAgICAgICAgICAgICAudG91Y2hUaHJlc2hvbGQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmRhdGEuYWN0aW9uKSB7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdzdGFydCc6XHJcbiAgICAgICAgICAgICAgICBfLnN3aXBlU3RhcnQoZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdtb3ZlJzpcclxuICAgICAgICAgICAgICAgIF8uc3dpcGVNb3ZlKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnZW5kJzpcclxuICAgICAgICAgICAgICAgIF8uc3dpcGVFbmQoZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZU1vdmUgPSBmdW5jdGlvbihldmVudCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIGVkZ2VXYXNIaXQgPSBmYWxzZSxcclxuICAgICAgICAgICAgY3VyTGVmdCwgc3dpcGVEaXJlY3Rpb24sIHN3aXBlTGVuZ3RoLCBwb3NpdGlvbk9mZnNldCwgdG91Y2hlcztcclxuXHJcbiAgICAgICAgdG91Y2hlcyA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQgIT09IHVuZGVmaW5lZCA/IGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyA6IG51bGw7XHJcblxyXG4gICAgICAgIGlmICghXy5kcmFnZ2luZyB8fCB0b3VjaGVzICYmIHRvdWNoZXMubGVuZ3RoICE9PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGN1ckxlZnQgPSBfLmdldExlZnQoXy5jdXJyZW50U2xpZGUpO1xyXG5cclxuICAgICAgICBfLnRvdWNoT2JqZWN0LmN1clggPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzWzBdLnBhZ2VYIDogZXZlbnQuY2xpZW50WDtcclxuICAgICAgICBfLnRvdWNoT2JqZWN0LmN1clkgPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WTtcclxuXHJcbiAgICAgICAgXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA9IE1hdGgucm91bmQoTWF0aC5zcXJ0KFxyXG4gICAgICAgICAgICBNYXRoLnBvdyhfLnRvdWNoT2JqZWN0LmN1clggLSBfLnRvdWNoT2JqZWN0LnN0YXJ0WCwgMikpKTtcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA9IE1hdGgucm91bmQoTWF0aC5zcXJ0KFxyXG4gICAgICAgICAgICAgICAgTWF0aC5wb3coXy50b3VjaE9iamVjdC5jdXJZIC0gXy50b3VjaE9iamVjdC5zdGFydFksIDIpKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2lwZURpcmVjdGlvbiA9IF8uc3dpcGVEaXJlY3Rpb24oKTtcclxuXHJcbiAgICAgICAgaWYgKHN3aXBlRGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChldmVudC5vcmlnaW5hbEV2ZW50ICE9PSB1bmRlZmluZWQgJiYgXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA+IDQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBvc2l0aW9uT2Zmc2V0ID0gKF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gMSA6IC0xKSAqIChfLnRvdWNoT2JqZWN0LmN1clggPiBfLnRvdWNoT2JqZWN0LnN0YXJ0WCA/IDEgOiAtMSk7XHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgcG9zaXRpb25PZmZzZXQgPSBfLnRvdWNoT2JqZWN0LmN1clkgPiBfLnRvdWNoT2JqZWN0LnN0YXJ0WSA/IDEgOiAtMTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBzd2lwZUxlbmd0aCA9IF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGg7XHJcblxyXG4gICAgICAgIF8udG91Y2hPYmplY3QuZWRnZUhpdCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBpZiAoKF8uY3VycmVudFNsaWRlID09PSAwICYmIHN3aXBlRGlyZWN0aW9uID09PSAncmlnaHQnKSB8fCAoXy5jdXJyZW50U2xpZGUgPj0gXy5nZXREb3RDb3VudCgpICYmIHN3aXBlRGlyZWN0aW9uID09PSAnbGVmdCcpKSB7XHJcbiAgICAgICAgICAgICAgICBzd2lwZUxlbmd0aCA9IF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggKiBfLm9wdGlvbnMuZWRnZUZyaWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgXy50b3VjaE9iamVjdC5lZGdlSGl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBjdXJMZWZ0ICsgc3dpcGVMZW5ndGggKiBwb3NpdGlvbk9mZnNldDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IGN1ckxlZnQgKyAoc3dpcGVMZW5ndGggKiAoXy4kbGlzdC5oZWlnaHQoKSAvIF8ubGlzdFdpZHRoKSkgKiBwb3NpdGlvbk9mZnNldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBjdXJMZWZ0ICsgc3dpcGVMZW5ndGggKiBwb3NpdGlvbk9mZnNldDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSB8fCBfLm9wdGlvbnMudG91Y2hNb3ZlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXy5hbmltYXRpbmcgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBudWxsO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfLnNldENTUyhfLnN3aXBlTGVmdCk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVTdGFydCA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgdG91Y2hlcztcclxuXHJcbiAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmIChfLnRvdWNoT2JqZWN0LmZpbmdlckNvdW50ICE9PSAxIHx8IF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcbiAgICAgICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGV2ZW50Lm9yaWdpbmFsRXZlbnQgIT09IHVuZGVmaW5lZCAmJiBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0b3VjaGVzID0gZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXy50b3VjaE9iamVjdC5zdGFydFggPSBfLnRvdWNoT2JqZWN0LmN1clggPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzLnBhZ2VYIDogZXZlbnQuY2xpZW50WDtcclxuICAgICAgICBfLnRvdWNoT2JqZWN0LnN0YXJ0WSA9IF8udG91Y2hPYmplY3QuY3VyWSA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXMucGFnZVkgOiBldmVudC5jbGllbnRZO1xyXG5cclxuICAgICAgICBfLmRyYWdnaW5nID0gdHJ1ZTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS51bmZpbHRlclNsaWRlcyA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1VuZmlsdGVyID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKF8uJHNsaWRlc0NhY2hlICE9PSBudWxsKSB7XHJcblxyXG4gICAgICAgICAgICBfLnVubG9hZCgpO1xyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVzQ2FjaGUuYXBwZW5kVG8oXy4kc2xpZGVUcmFjayk7XHJcblxyXG4gICAgICAgICAgICBfLnJlaW5pdCgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUudW5sb2FkID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgJCgnLnNsaWNrLWNsb25lZCcsIF8uJHNsaWRlcikucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgIGlmIChfLiRkb3RzKSB7XHJcbiAgICAgICAgICAgIF8uJGRvdHMucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXy4kcHJldkFycm93ICYmIF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMucHJldkFycm93KSkge1xyXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXy4kbmV4dEFycm93ICYmIF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMubmV4dEFycm93KSkge1xyXG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfLiRzbGlkZXNcclxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1zbGlkZSBzbGljay1hY3RpdmUgc2xpY2stdmlzaWJsZSBzbGljay1jdXJyZW50JylcclxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxyXG4gICAgICAgICAgICAuY3NzKCd3aWR0aCcsICcnKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS51bnNsaWNrID0gZnVuY3Rpb24oZnJvbUJyZWFrcG9pbnQpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCd1bnNsaWNrJywgW18sIGZyb21CcmVha3BvaW50XSk7XHJcbiAgICAgICAgXy5kZXN0cm95KCk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUudXBkYXRlQXJyb3dzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgY2VudGVyT2Zmc2V0O1xyXG5cclxuICAgICAgICBjZW50ZXJPZmZzZXQgPSBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKTtcclxuXHJcbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmXHJcbiAgICAgICAgICAgIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgJiZcclxuICAgICAgICAgICAgIV8ub3B0aW9ucy5pbmZpbml0ZSApIHtcclxuXHJcbiAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XHJcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoXy5jdXJyZW50U2xpZGUgPT09IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cuYWRkQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XHJcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChfLmN1cnJlbnRTbGlkZSA+PSBfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSBmYWxzZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcclxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAtIDEgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cuYWRkQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XHJcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUudXBkYXRlRG90cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChfLiRkb3RzICE9PSBudWxsKSB7XHJcblxyXG4gICAgICAgICAgICBfLiRkb3RzXHJcbiAgICAgICAgICAgICAgICAuZmluZCgnbGknKVxyXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcclxuXHJcbiAgICAgICAgICAgIF8uJGRvdHNcclxuICAgICAgICAgICAgICAgIC5maW5kKCdsaScpXHJcbiAgICAgICAgICAgICAgICAuZXEoTWF0aC5mbG9vcihfLmN1cnJlbnRTbGlkZSAvIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkpXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnZpc2liaWxpdHkgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggZG9jdW1lbnRbXy5oaWRkZW5dICkge1xyXG5cclxuICAgICAgICAgICAgICAgIF8uaW50ZXJydXB0ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgICQuZm4uc2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIG9wdCA9IGFyZ3VtZW50c1swXSxcclxuICAgICAgICAgICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSksXHJcbiAgICAgICAgICAgIGwgPSBfLmxlbmd0aCxcclxuICAgICAgICAgICAgaSxcclxuICAgICAgICAgICAgcmV0O1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHQgPT0gJ29iamVjdCcgfHwgdHlwZW9mIG9wdCA9PSAndW5kZWZpbmVkJylcclxuICAgICAgICAgICAgICAgIF9baV0uc2xpY2sgPSBuZXcgU2xpY2soX1tpXSwgb3B0KTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0ID0gX1tpXS5zbGlja1tvcHRdLmFwcGx5KF9baV0uc2xpY2ssIGFyZ3MpO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJldCAhPSAndW5kZWZpbmVkJykgcmV0dXJuIHJldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF87XHJcbiAgICB9O1xyXG5cclxufSkpO1xyXG4iLCJcclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuICAgIGluaXQoKXtcclxuICAgICAgICB0aGlzLmhlYWRlckZ1bmN0aW9ucygpO1xyXG4gICAgICAgIHRoaXMub25lSGVpZ2h0KCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGhlYWRlckZ1bmN0aW9ucyAoKSB7XHJcbiAgICAgICAgJCgnYm9keScpLmNzcyh7XHJcbiAgICAgICAgICAgICdwYWRkaW5nLXRvcCc6ICQoJy5zaXRlLWhlYWRlcicpLmhlaWdodCgpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5tZW51LWJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJy5zaXRlLW5hdicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLnNpdGUtbmF2IGEnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKCQoJCh0aGlzKS5hdHRyKCdocmVmJykpLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYW5jaG9yID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnYm9keSwgaHRtbCcpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogJChhbmNob3IpLm9mZnNldCgpLnRvcFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgb25lSGVpZ2h0KCkge1xyXG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+PSAxMDI0KSB7XHJcbiAgICAgICAgICAgIHZhciBtYXhIZWlnaHQgPSAtMTtcclxuXHJcbiAgICAgICAgICAgIGlmICgkKCcuY29udGFjdHMtdGl0bGUnKS5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLmNvbnRhY3RzLXRpdGxlJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQgPSBtYXhIZWlnaHQgPiAkKHRoaXMpLmhlaWdodCgpID8gbWF4SGVpZ2h0IDogJCh0aGlzKS5oZWlnaHQoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICQoJy5jb250YWN0cy10aXRsZScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5oZWlnaHQobWF4SGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59OyIsImV4cG9ydCBkZWZhdWx0IHtcclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy5pbml0TWFwKCk7XHJcblx0fSxcclxuXHJcblx0aW5pdE1hcCgpIHtcclxuXHJcblx0XHRcdFx0JC5nZXRTY3JpcHQoXCJodHRwOi8vbWFwcy5nb29nbGUuY29tL21hcHMvYXBpL2pzP2tleT1BSXphU3lDMW11NXA3TDNLTUhuV1FYVGs0TFRXUjNCU2lhUXRkVzgmc2Vuc29yPXRydWVcIikuZG9uZShmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IG1hcElkID0gJCgnI21hcCcpO1xyXG5cdFx0XHRcdFx0XHRjb25zdCBkYXRhTGF0ID0gcGFyc2VGbG9hdChtYXBJZC5hdHRyKCdkYXRhLWxhdCcpKTtcclxuXHRcdFx0XHRcdFx0Y29uc3QgZGF0YUxuZyA9IHBhcnNlRmxvYXQobWFwSWQuYXR0cignZGF0YS1sbmcnKSk7XHJcblx0XHRcdFx0XHRcdGNvbnN0IGNlbnRlciA9IHtsYXQ6IGRhdGFMYXQsIGxuZzogZGF0YUxuZ307XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcFwiKSwge1xyXG5cdFx0XHRcdFx0XHRcdFx0em9vbTogMTYsXHJcblx0XHRcdFx0XHRcdFx0XHRjZW50ZXI6IGNlbnRlcixcclxuXHRcdFx0XHRcdFx0XHRcdHNjcm9sbHdoZWVsOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRcdGRyYWdnYWJsZTogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdHpvb21Db250cm9sOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRcdHpvb21Db250cm9sT3B0aW9uczoge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBnb29nbGUubWFwcy5Db250cm9sUG9zaXRpb24uVE9QX1JJR0hUXHJcblx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0cGFuQ29udHJvbDogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0XHRtYXBUeXBlQ29udHJvbDogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0XHRzdHJlZXRWaWV3Q29udHJvbDogZmFsc2VcclxuXHRcdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcblx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogY2VudGVyLFxyXG5cdFx0XHRcdFx0XHRcdFx0bWFwOiBtYXAsXHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogXCJteSBwbGFjZVwiXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fVxyXG59XHJcbiIsImltcG9ydCAnLi4vbGlicy9zbGljayc7XHJcbmltcG9ydCBcIi4uL2xpYnMvbGlnaHQtZ2FsbGVyeS9saWdodGdhbGxlcnkubWluLmpzXCI7XHJcbmltcG9ydCBcIi4uL2xpYnMvbGlnaHQtZ2FsbGVyeS9sZy10aHVtYm5haWwubWluLmpzXCI7XHJcbmltcG9ydCBcIi4uL2xpYnMvbGlnaHQtZ2FsbGVyeS9sZy1mdWxsc2NyZWVuLm1pbi5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLnNsaWRlcnMoKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2xpZGVycygpIHtcclxuICAgICAgICAkKCcudGVzdGltb25pYWwtc2xpZGVyJykuc2xpY2soKTtcclxuXHJcbiAgICAgICAgJCgnLnBvcHVwLWxpbmsnKS5saWdodEdhbGxlcnkoe1xyXG4gICAgICAgICAgc3ViSHRtbFNlbGVjdG9yUmVsYXRpdmU6IHRydWUsXHJcbiAgICAgICAgICBjb3VudGVyOiBmYWxzZVxyXG4gICAgICAgIH0pOyBcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy50YWJTd2l0Y2hlcigpO1xyXG4gICAgfSxcclxuXHJcbiAgICB0YWJTd2l0Y2hlcigpIHtcclxuICAgICAgICAkKCcudGFiLXdyYXBwZXInKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgYWN0aXZlVGFiID0gJCh0aGlzKS5maW5kKCcudGFiLWxpbmsuYWN0aXZlJykuYXR0cignZGF0YS1saW5rJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuZmluZChgW2RhdGEtdGFiPScke2FjdGl2ZVRhYn0nXWApLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLnRhYi1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGxldCB0YWIgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtbGluaycpO1xyXG5cclxuICAgICAgICAgICAgJChlLnRhcmdldCkuY2xvc2VzdCgnLnRhYi1saXN0JykuZmluZCgnLnRhYi1saW5rJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygkKGUudGFyZ2V0KS5jbG9zZXN0KCcudGFiLWxpc3QnKS5maW5kKCcudGFiLWxpbmsnKSk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCQoYFtkYXRhLXRhYj0ke3RhYn1dYCkubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgICAgICQoZS50YXJnZXQpLmNsb3Nlc3QoJy50YWItd3JhcHBlcicpLmZpbmQoJ1tkYXRhLXRhYl0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAkKGBbZGF0YS10YWI9JyR7dGFifSddYCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgSGVhZGVyRnVuY3Rpb25zIGZyb20gXCIuLi9tb2R1bGVzL2hlYWRlckZ1bmN0aW9uc1wiO1xyXG5pbXBvcnQgVGFicyBmcm9tIFwiLi4vbW9kdWxlcy90YWJTd2l0Y2hlclwiO1xyXG5pbXBvcnQgU2xpZGVycyBmcm9tIFwiLi4vbW9kdWxlcy9zbGlkZXJzLmpzXCI7XHJcbmltcG9ydCBNYXBJbml0IGZyb20gXCIuLi9tb2R1bGVzL21hcC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIEhlYWRlckZ1bmN0aW9ucy5pbml0KCk7XHJcbiAgICAgICAgVGFicy5pbml0KCk7XHJcbiAgICAgICAgU2xpZGVycy5pbml0KCk7XHJcbiAgICAgICAgTWFwSW5pdC5pbml0KCk7XHJcbiAgICB9XHJcbn07Il19
