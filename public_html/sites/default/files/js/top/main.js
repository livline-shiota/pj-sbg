(function ($, Drupal, debounce, drupalSettings) {
    'use strict';
    var Utility;
    var PAGE_MAX_WIDTH = 1920;
    var PAGE_MIN_WIDTH = 1024;
    var CONTENTS_WIDTH = 960;


    if (typeof Utility === 'undefined') {
        Utility = {};
    }

    $(function () {

        Utility.isPc = function () {
            return $('#wrapper').hasClass('browser-device-pc');
        }

        Utility.isSp = function () {
            return ($(window).width() <= 768);
        }

        Utility.isTb = function () {
            return $('#wrapper').hasClass('browser-device-tb');
        }

        Utility.isTouch = function () {
            return $('#wrapper').hasClass('touch-enable');
        }

        Utility.getScrollBarWidth = function () {
            return window.innerWidth - $(window).width();
        };
    });

    $(function () {
        var initTopMv = function () {
            var topMv = $('.top-rn-mv').eq(0);

            if ($('.swiper-slide', topMv).length > 1) {
                var isSp = null;
                var topMvSlide = $('.top-rn-mv-slide', topMv).clone();

                $(window).on('resize.mv', function () {
                    if (isSp != Utility.isSp()) {
                        isSp = Utility.isSp();

                        $('.top-rn-mv-slide', topMv).remove();
                        topMv.prepend(topMvSlide.clone());

                        if (isSp) {
                            var maxHeight = 0;

                            $('.top-rn-mv-slide .swiper-slide').each(function () {
                                var node = $(this);
                                maxHeight = Math.max($('.top-rn-mv-wide-info-body', node).height(), maxHeight);
                            });

                            $('.top-rn-mv-slide .swiper-slide .top-rn-mv-wide-info-body').height(maxHeight);

                            var mvSlide = new Swiper($('.swiper-container', topMv)[0], {
                                loop: true,
                                speed: 1000,
                                autoplay: {
                                    disableOnInteraction: false,
                                    delay: 5000,
                                },

                                pagination: {
                                    el: '.swiper-pagination',
                                    type: 'bullets',
                                    clickable: true,
                                    bulletElement: 'button'
                                },
                            });

                            $('.swiper-slide a', topMv).attr('tabindex', '-1');
                            $('.swiper-slide-active a', topMv).attr('tabindex', '');

                            mvSlide.on('slideChangeTransitionEnd', function () {
                                $('.swiper-slide a', topMv).attr('tabindex', '-1');
                                $('.swiper-slide-active a', topMv).attr('tabindex', '');
                            });

                            $('.swiper-pagination > button', topMv).attr('aria-label', 'スライド切り替え');
                            $('.top-rn-mv-slide-ctrl > button', topMv).attr('aria-label', 'スライド停止');

                            $('.top-rn-mv-slide-ctrl > button', topMv).on('click', function(){
                                $(this).toggleClass('off');

                                if($(this).hasClass('off')) {
                                    mvSlide.autoplay.stop();
                                    $(this).attr('aria-label', 'スライド再開');
                                }
                                else {
                                    mvSlide.autoplay.start();
                                    $(this).attr('aria-label', 'スライド停止');
                                }
                            });
                        }
                        else {
                            $('.swiper-wrapper', topMv).addClass('swiper-no-swiping');

                            var mvSlideNum = $('.swiper-slide', topMv).length;
                            var mvSlideIdx = 0;

                            for (var i = 0; i < mvSlideNum; i++) {
                                $('.top-rn-mv-slide-dot-inner', topMv).append('<button aria-label="スライド切り替え" role="button">' + (i + 1) + '</button>');
                            }

                            $('.top-rn-mv-slide-dot-inner > button', topMv).first().addClass('on');
                            $('.top-rn-mv-slide-dot', topMv).show();

                            $('.top-rn-mv-wide-info', $('.swiper-slide', topMv).first()).addClass('on');

                            var mvSlide = new Swiper($('.swiper-container', topMv)[0], {
                                loop: true,
                                speed: 1000,

                                pagination: {
                                    el: '.swiper-pagination',
                                    type: 'bullets',
                                    clickable: true,
                                },
                            });

                            var interval = null;

                            $('.swiper-slide a', topMv).attr('tabindex', '-1');
                            $('.swiper-slide-active a', topMv).attr('tabindex', '');

                            var slideChangeTransitionEndTrigger = function () {
                                mvSlide.off('slideChangeTransitionEnd').on('slideChangeTransitionEnd', function () {
                                    $('.swiper-slide-active .top-rn-mv-wide-info', topMv).addClass('on');
                                    $('.swiper-slide a', topMv).attr('tabindex', '-1');
                                    $('.swiper-slide-active a', topMv).attr('tabindex', '');

                                    slideChangeTransitionEndTrigger();
                                });

                                interval = setTimeout(function () {
                                    mvSlideIdx = (mvSlideIdx + 1) % mvSlideNum;
                                    $('.top-rn-mv-slide-dot-inner > button', topMv).eq(mvSlideIdx).trigger('click');
                                }, 5000);
                            };

                            $('.top-rn-mv-slide-dot-inner > button', topMv).on('click', function () {
                                clearTimeout(interval);
                                interval = null;

                                $('.top-rn-mv-slide-dot-inner > button', topMv).removeClass('on');
                                $(this).addClass('on');

                                mvSlideIdx = $('.top-rn-mv-slide-dot-inner > button', topMv).index($(this));

                                $('.swiper-slide-active .top-rn-mv-wide-info', topMv).removeClass('on');

                                setTimeout(function () {
                                    $('.swiper-pagination > span', topMv).eq(mvSlideIdx).trigger('click');
                                }, 800);
                            });

                            slideChangeTransitionEndTrigger();

                            $('.top-rn-mv-slide-dot > button', topMv).attr('aria-label', 'スライド停止');

                            $('.top-rn-mv-slide-dot > button', topMv).on('click', function(){
                                $(this).toggleClass('off');

                                if($(this).hasClass('off')) {
                                    clearTimeout(interval);
                                    interval = null;
                                    mvSlide.off('slideChangeTransitionEnd');
                                    $(this).attr('aria-label', 'スライド再開');
                                }
                                else {
                                    slideChangeTransitionEndTrigger();
                                    $(this).attr('aria-label', 'スライド停止');
                                }
                            });
                        }
                    };
                }).trigger('resize.mv');
            }
            else {
                $('.top-rn-mv-wide-info', topMv).addClass('on');
            }
        };

        initTopMv();
    });
})(jQuery, Drupal, Drupal.debounce, drupalSettings);
