(function ($) {

    var Utility;

    if(typeof Utility === 'undefined') {
        Utility = {};
    }

    Utility.isPc = function() {
        return $('#wrapper').hasClass('browser-device-pc');
    }

    Utility.isSp = function() {
        return ($(window).width() <= 768);
    }

    Utility.isTb = function() {
        return $('#wrapper').hasClass('browser-device-tb');
    }

    Utility.isTouch = function() {
        return $('#wrapper').hasClass('touch-enable');
    }

    Utility.getScrollBarWidth = function() {
        return window.innerWidth - $(window).width();
    };

    var scroll_anim_cnt = 0;
    window.waitScrollAnim = false;
    window.addScrollAnim = function (nodes, callback) {
        // document.write('<style>' + nodes + '{visibility:hidden;}</style>');
        $(window).on('load', function () {
            (function () {
                nodes = $(nodes);
                var anim_id = scroll_anim_cnt;
                scroll_anim_cnt++;

                $(window).on('scroll.anim' + anim_id, function () {
                    var st = $(window).scrollTop();
                    var wh = $(window).height();

                    nodes.each(function () {
                        var node = $(this);

                        var top = node.offset().top;
                        var height = node.outerHeight(true);

                        if (typeof node.get(0).wait_timer != 'undefined')
                            clearTimeout(node.get(0).wait_timer);

                        if (top <= st + wh * 0.6) {
                            var show_func = function () {
                                node.css('visibility', 'visible');

                                callback.call(node);

                                nodes = nodes.not(node);
                                if (nodes.length == 0)
                                    $(window).off('scroll.anim' + anim_id);
                            };

                            if (!window.waitScrollAnim)
                                show_func();
                            else {
                                node.get(0).wait_timer = setInterval(function () {
                                    if (!window.waitScrollAnim) {
                                        clearTimeout(node.get(0).wait_timer);
                                        show_func();
                                    }
                                }, 1);
                            }
                        }
                    });
                }).trigger('scroll.anim' + anim_id);
            })();
        });
    };

    $(function(){
        $('.recruit-message-list div.cf').each(function(){
            var node = $(this);

            addScrollAnim($('> div:first', node), function(){
                $(this).css({'y': '5%', 'opacity' : 0}).transition({'y': '0%', 'opacity' : 1}, {'duration':1000, 'easing':'easeOutExpo'});
            });

            addScrollAnim($('> div:last', node), function(){
                $(this).css({'opacity' : 0}).transition({'opacity' : 1}, {'duration':1000, 'easing':'easeOutExpo'});
            });

            addScrollAnim($('> div:last .title', node), function(){
                $(this).css({'y': '50%', 'opacity' : 0}).transition({'y': '0%', 'opacity' : 1}, {'duration':1000, 'easing':'easeOutExpo'});
            });

            addScrollAnim($('> div:last .text', node), function(){
                $(this).css({'y': '5%', 'opacity' : 0}).transition({'y': '0%', 'opacity' : 1}, {'duration':1000, 'easing':'easeOutExpo'});
            });
        });

        const initMv = function() {
            const FADE_TIME = 3000;
            const WAIT_TIME = 3000 + FADE_TIME;

            const mvSection = $('.recruit-mv');
            const slides = $('> ul > li', mvSection);
            const slideNum = slides.length;
            let currentId = 0;

            const startMv = function() {
                return setInterval(function(){
                    let nextId = currentId + 1;
                    if(nextId >= slideNum) nextId = 0;

                    slides.eq(nextId).fadeIn(FADE_TIME);
                    slides.eq(currentId).fadeOut(FADE_TIME);

                    currentId = nextId;
                }, WAIT_TIME);
            };

            let interval = startMv();

            $('.recruit-mv > button').on('click', function(){
                $(this).toggleClass('pause');

                if($(this).hasClass('pause')) {
                    clearInterval(interval);
                    interval = null;
                    $(this).attr('aria-label', 'スライド再開')
                }
                else {
                    interval = startMv();
                    $(this).attr('aria-label', 'スライド停止')
                }
            });
        }

        initMv();

        $('.recruit-modal').each(function(){
            var modal = $(this);

            $('.bg, .btnModalClose', modal).on('click', function(){
                modal.fadeOut();
            });
        });

        $('.showModal').each(function(){
            $(this).on('click', function(){
                var id = $(this).attr('href');
                var modal = $(id);

                modal.fadeIn();

                var windowHeight = window.innerHeight;
                var modalHeight = $('> .inner .recruit-modal-contents', modal).height();

                if(id == '#recruit-modal-faq' || Utility.isSp()) {
                    var modalHead = $('> .inner .recruit-modal-contents-head', modal);
                    var modalBody = $('> .inner .recruit-modal-contents-body', modal);

                    $('.recruit-modal-contents', modalBody).removeClass('on');
                    $('.recruit-modal-contents-body', modalBody).hide();

                    var vMargin = 160;
                    if(modal.hasClass('sp')) vMargin = 120;

                    modalBody.outerHeight(windowHeight - modalHead.height() - vMargin);
                    modalBody.css('overflow-y', 'auto');

                    modalHeight = $('> .inner .recruit-modal-contents', modal).height();
                    var offset = (windowHeight - modalHeight) / 2;

                    var pos = $(window).scrollTop() + offset;

                    modal.css('padding-top', pos + 'px');
                }
                else {
                    var offset = (windowHeight - modalHeight) / 2;

                    var pos = $(window).scrollTop() + offset;

                    modal.css('padding-top', pos + 'px');
                }

                return false;
            });
        });
    });
})(jQuery);