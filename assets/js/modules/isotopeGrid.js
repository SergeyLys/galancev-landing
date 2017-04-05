var jQueryBridget = require('jquery-bridget');
var Isotope = require('isotope-layout');
var imagesLoaded = require('imagesloaded');
jQueryBridget( 'isotope', Isotope, $ );


export default {
    init() {
        this.masonryGrid();
    },

    masonryGrid () {
        $(window).on('load', function() {
            $('.masonry:not(.noinit)').isotope({
                itemSelector: '.masonry-item',
                columnWidth: '.masonry-item',
                isResizable: true,
                isAnimatedFromBottom: true,
                animationOptions: {
                    duration: 250,
                    easing: "swing"
                },
                getSortData: {
                    time: function time(elem) {
                        return parseInt($(elem).attr('data-time'));
                    }
                }
            });

            $('.masonry').isotope({ filter: '.projects' });
        });



        $(window).on('load', function() {
            $('.masonry:not(.noinit)').on('masonry', function (e) {
                var html = $(e.detail.html);
                $('.masonry').append(html).isotope('appended', html).isotope('layout');
                setTimeout(function () {
                    $('.masonry').isotope({ sortBy: 'time', sortAscending: false });
                }, 0);
            });
        });

        $('#btn-more-articles').on('click', function (event) {
            event.preventDefault();
            var params = {
                ids: []
            };
            params.parents = $('.tab-item.active[data-filter]').attr('data-id');
            if (params.parents === '*') {
                params.parents = [];
                var category = $('.tab-item[data-filter]').not('.active');
                for (var i = 0; i < category.length; i++) {
                    params.parents.push($(category[i]).attr('data-id'));
                }
            }

            var masonry_items = $('.masonry .masonry-item');
            if (masonry_items) {
                for (var i = 0; i < masonry_items.length; i++) {
                    params.ids.push($(masonry_items[i]).attr('data-id'));
                }
            }

            $.post('/api/articles', params, function (response) {
                if (response && response['total']) {
                    var html = '';
                    for (var i = 0; i < response['total']; i++) {
                        var publishedon = new Date(parseInt(response.rows[i].publishedon) * 1e3);
                        var publishedon_formatter;
                        var now = Date.now();
                        var start_today = new Date();
                        start_today.setHours(0, 0, 0, 0);
                        var difference = now - publishedon;
                        switch (true) {
                            case difference < 6e4:
                                publishedon_formatter = Math.floor(difference / 1e3) + ' ' + formValidateSettings.sec_ago;
                                break;
                            case difference < 36e5:
                                publishedon_formatter = Math.floor(difference / 6e4) + ' ' + formValidateSettings.min_ago;
                                break;
                            case difference < 864e5 && start_today < publishedon:
                                publishedon_formatter = Math.floor(difference / 36e5) + ' ' + formValidateSettings.hour_ago;
                                break;
                            case difference < 864e5 && start_today > publishedon:
                                publishedon_formatter = formValidateSettings.yesterday + ' ' + publishedon.toLocaleString("ru", {
                                        hour: 'numeric',
                                        minute: 'numeric'
                                    });
                                break;
                            default:
                                publishedon_formatter = publishedon.toLocaleString("ru", {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                    hour: 'numeric',
                                    minute: 'numeric'
                                });

                        }
                        html += '<div data-id="' + response.rows[i].id + '" data-time="' + response.rows[i].publishedon + '" class="col-xs-12 col-sm-6 col-md-4 masonry-item" data-category="' + response.rows[i].parent + '"><article class="blocks__article">';
                        if (response.rows[i].img) html += '<div class="article__top"><div class="article__top-picture"><img src="' + response.rows[i].img + '" alt="' + response.rows[i].img_alt + '"></div><a href="' + response.rows[i].uri + '" rel="nofollow" class="article__top-link"></a></div>';
                        html += '<div class="article__bottom"><div class="story-top"><time class="story__time" datetime="' + publishedon.toISOString() + '">' + publishedon_formatter + '</time><a href="' + response.rows[i].category_uri + '" class="label">' + response.rows[i].category_menutitle + '</a></div><h3 class="article__title"><a href="' + response.rows[i].uri + '">' + response.rows[i].pagetitle + '</a></h3>';
                        if (response.rows[i].source_title && response.rows[i].source_link || response.rows[i].source_link && response.rows[i].source_img ) {
                            html += '<a href="' + response.rows[i].source_link + '" class="article__source">';
                            if(response.rows[i].source_img) html += '<img src="' + response.rows[i].source_img + '" alt="' + response.rows[i].source_img_alt + '" class="article__source-img">';
                            if(response.rows[i].source_title) html += '<span class="article__source-link">' + response.rows[i].source_title + '</span>';
                            html += '</a>';
                        }
                        html += '</div></article></div>';
                    }
                    html = $(html);

                    $('.masonry').append(html);
                    $('.masonry:not(.noinit)').imagesLoaded(function (e) {
                        $('.masonry').isotope('appended', html).isotope('layout');
                        setTimeout(function () {
                            if ($('.masonry .masonry-item:not(:has(form)):visible').length >= parseInt($('.tab-item.active[data-all]').attr('data-all'))) {
                                $('#btn-more-articles').hide();
                            }
                            $('.masonry').isotope({sortBy: 'time', sortAscending: false});
                        }, 0);
                    });
                }
            }, "json").fail(function (error) {});
        });

        $('[data-isotope-filter]').on('click', function() {
            var filterValue = $(this).attr('data-isotope-filter');
            $('.tabs .tab-item').removeClass('active');
            $(`.tabs [data-filter='${filterValue}']`).addClass('active');
            $('.masonry').isotope({ filter: filterValue });
        });

        $('.tabs .tab-item a').on('click', function (e) {
            e.preventDefault();
            var filterValue = $(this).parent().attr('data-filter');
            $('.masonry').isotope({ filter: filterValue });
            setTimeout(function () {
                $('.masonry').isotope({ sortBy: 'time', sortAscending: false });
            }, 0);

            $('.tabs .tab-item').removeClass('active');
            $(this).parent().addClass('active');

            if ($('.masonry .masonry-item'+filterValue+':not(:has(form))').length >= parseInt($(this).parent().attr('data-all'))) {
                $('#btn-more-articles').hide();
            } else {
                $('#btn-more-articles').show();
            }
        });

        $(window).on('load', function() {
            $('#btn-more-articles').trigger('click');
        });
    }
}