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
        document.write('<style>' + nodes + '{visibility:hidden;}</style>');
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

    $('.recruit-message-list dl').each(function(){
        var node = $(this);

        addScrollAnim($('> dt', node), function(){
            $(this).css({'y': '5%', 'opacity' : 0}).transition({'y': '0%', 'opacity' : 1}, {'duration':1000, 'easing':'easeOutExpo'});
        });

        addScrollAnim($('> dd', node), function(){
            $(this).css({'opacity' : 0}).transition({'opacity' : 1}, {'duration':1000, 'easing':'easeOutExpo'});
        });

        addScrollAnim($('> dd .title', node), function(){
            $(this).css({'y': '50%', 'opacity' : 0}).transition({'y': '0%', 'opacity' : 1}, {'duration':1000, 'easing':'easeOutExpo'});
        });

        addScrollAnim($('> dd .text', node), function(){
            $(this).css({'y': '5%', 'opacity' : 0}).transition({'y': '0%', 'opacity' : 1}, {'duration':1000, 'easing':'easeOutExpo'});
        });
    });

    $(function(){
        var startMv = function() {
            var FADE_TIME = 3000;
            var WAIT_TIME = 3000 + FADE_TIME;

            var mvSection = $('.recruit-mv');
            var slides = $('> ul > li', mvSection);
            var slideNum = slides.length;
            var currentId = 0;

            setInterval(function(){
                var nextId = currentId + 1;
                if(nextId >= slideNum) nextId = 0;

                slides.eq(nextId).fadeIn(FADE_TIME);
                slides.eq(currentId).fadeOut(FADE_TIME);

                currentId = nextId;
            }, WAIT_TIME);
        }
        startMv();

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
                var modalHeight = $('> .inner > dl', modal).height();

                if(id == '#recruit-modal-faq' || Utility.isSp()) {
                    var modalHead = $('> .inner > dl > dt', modal);
                    var modalBody = $('> .inner > dl > dd', modal);

                    $('dl', modalBody).removeClass('on');
                    $('dl dd', modalBody).hide();

                    var vMargin = 160;
                    if(modal.hasClass('sp')) vMargin = 120;

                    modalBody.outerHeight(windowHeight - modalHead.height() - vMargin);
                    modalBody.css('overflow-y', 'auto');

                    modalHeight = $('> .inner > dl', modal).height();
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
