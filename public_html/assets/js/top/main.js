$(function(){
    var initTopMv = function() {
        var topMv = $('.top-rn-mv').eq(0);

        if($('.swiper-slide', topMv).length > 1) {
            var isSp = null;
            var topMvSlide = $('.top-rn-mv-slide', topMv).clone();

            $(window).on('resize.mv', function(){
                if(isSp != Utility.isSp()) {
                    isSp = Utility.isSp();

                    $('.top-rn-mv-slide', topMv).remove();
                    topMv.prepend(topMvSlide.clone());

                    if(isSp) {
                        var maxHeight = 0;

                        $('.top-rn-mv-slide .swiper-slide').each(function(){
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
                            },
                        });
                    }
                    else {
                        $('.swiper-wrapper', topMv).addClass('swiper-no-swiping');

                        var mvSlideNum = $('.swiper-slide', topMv).length;
                        var mvSlideIdx = 0;

                        for(var i = 0; i < mvSlideNum; i++) {
                            $('.top-rn-mv-slide-dot > ul', topMv).append('<li>');
                        }

                        $('.top-rn-mv-slide-dot > ul > li', topMv).first().addClass('on');
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

                        var slideChangeTransitionEndTrigger = function() {
                            interval = setTimeout(function(){
                                mvSlideIdx = (mvSlideIdx + 1) % mvSlideNum;
                                $('.top-rn-mv-slide-dot > ul > li', topMv).eq(mvSlideIdx).trigger('click');
                            }, 5000);
                        };

                        $('.top-rn-mv-slide-dot > ul > li', topMv).on('click', function(){
                            clearTimeout(interval);
                            interval = null;

                            $('.top-rn-mv-slide-dot > ul > li', topMv).removeClass('on');
                            $(this).addClass('on');

                            mvSlideIdx = $('.top-rn-mv-slide-dot > ul > li', topMv).index($(this));

                            $('.swiper-slide-active .top-rn-mv-wide-info', topMv).removeClass('on');

                            setTimeout(function(){
                                $('.swiper-pagination > span', topMv).eq(mvSlideIdx).trigger('click');
                            }, 800);
                        });

                        mvSlide.on('slideChangeTransitionEnd', function () {
                            $('.swiper-slide-active .top-rn-mv-wide-info', topMv).addClass('on');
                            slideChangeTransitionEndTrigger();
                        });

                        slideChangeTransitionEndTrigger();
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