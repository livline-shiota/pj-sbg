var Module;

if(typeof Module === 'undefined') {
    Module = {};
}

const tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
const firstScripttag = document.getElementsByTagName('script')[0];
firstScripttag.parentNode.insertBefore(tag, firstScripttag);

let modalYtPlayer;
function onYouTubePlayerAPIReady() {
    modalYtPlayer = new YT.Player('modal-yt-player', {
        height: '100%',
        width: '100%',
        playerVars: {
            'autoplay': 1,
            'controls': 1,
            'rel': 0,
            'showinfo': 0,
            'playsinline': 1,
            'origin': location.protocol + '//' + location.hostname + "/"
    }});
}

(function ($, Drupal, debounce, drupalSettings) {
    'use strict';
    var PAGE_MAX_WIDTH = 1920;
    var PAGE_MIN_WIDTH = 1024;
    var CONTENTS_WIDTH = 960;

        var Utility;

        if(typeof Utility === 'undefined') {
        Utility = {};
    }

        $(function(){

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
    });
    $(function(){
        var formCheckInterval = setInterval(function(){
            var ssForm = $('#ss-form');

                if(ssForm.length > 0) {
                clearInterval(formCheckInterval);
                formCheckInterval = null;

                    $('.ss-category[type="checkbox"]', ssForm).on('change', function(){

                        $('.ss-search-button', ssForm).trigger('click');
                });

                    $('.ss-category[type="radio"]', ssForm).on('change', function(){
                    $('.ss-search-button', ssForm).trigger('click');
                });

                    $('.ss-search-button', ssForm).on('click', function(){
                    var ssContent = $('#ss-content');

                        var contentCheckInterval = setInterval(function(){
                        if(ssContent.css('opacity') == 1) {
                            clearInterval(contentCheckInterval);
                            contentCheckInterval = null;

                                if(typeof FONTPLUS != 'undefined' && FONTPLUS != null) FONTPLUS.reload();
                        }
                    }, 1);
                    if($(location).attr('pathname') == '/full-search' || $(location).attr('pathname') == '/en/full-search'){
                        var val = $('.ss-search-input').val();
                        $(".header-lang .en a").attr('href','/en/full-search?query='+val+'&category=1&category=2&category=3&category=4&sort=date');
                        $(".header-lang .ja a").attr('href','/full-search?query='+val+'&category=1&category=2&category=3&category=4&sort=date');
                    }
                }).trigger('click');
            }
        }, 1);

            const initHeader = function() {
            const header = $('#header');

                if(header.length > 0) {
                const headerNav = $('.header-nav', header);
                const headerMenu = $('.header-menu', headerNav);
                const headerSpMenuBtn = $('.header-sp-menu-open', header);
                const headerSpMenu = $('.header-sp-menu', header);

                    const dir = location.pathname.split("/")[1];
                $('a[href="/' + dir + '"]', headerNav).parent().addClass('current');

                    if (document.documentElement.lang.toLowerCase() === 'en') {
                    const dir = location.pathname.split('/')[2];
                    $('a[href="/en/' + dir + '"]', headerNav).parent().addClass('current');
                }
                else {
                    const dir = location.pathname.split('/')[1];
                    $('a[href="/' + dir + '"]', headerNav).parent().addClass('current');
                }

                    const headerSearch = $('.header-search', header);
                $('.header-search-open', header).on('click', function(){
                    const headerSearchInput = $('.header-search-input', header);

                        if(headerSearch.is(':visible')) {
                        headerSearch.fadeOut();
                    }
                    else {
                        if($('.header-search-bg', header).length == 0) {
                            headerSearch.prepend($('<div class="header-search-bg">'));

                                $('.header-search-bg', header).on('click', function(){
                                headerSearch.fadeOut();
                            });
                        }

                            headerSearch.fadeIn();
                        headerSearchInput.val('');
                        headerSearchInput.focus();
                    }
                });

                    $('.header-search-close', header).on('click', function(){
                    headerSearch.fadeOut();
                });

                    const headerFunds = $('.header-funds', header);
                $('.header-funds-btn', headerFunds).on('click', function(){
                    $('.header-funds-bg', headerFunds).toggle();
                    headerFunds.toggleClass('on');
                });

                    $('.header-funds-bg', headerFunds).on('click', function(){
                    $('.header-funds-bg', headerFunds).hide();
                    headerFunds.removeClass('on');
                });






                    $('#block-sbg-main-menu-lg > ul > li > a', headerNav).on('click', function(){
                    if(Utility.isSp() == false) {
                        const parent = $(this).parent();

                            if(parent.hasClass('on') == false) {
                            $('#block-sbg-main-menu-lg > ul > li', headerNav).removeClass('on');
                            parent.addClass('on');

                                const type = $(this).data('type');

                                $('.header-menu-contents', headerMenu).stop(true, true).hide();
                            $('.header-menu-contents.' + type, headerMenu).stop(true, true).fadeIn();

                                headerMenu.stop(true, true).hide();
                            parent.find(headerMenu).delay(5).fadeIn();

                                $('.header-bg', header).fadeIn();
                        }
                        else {
                            $('.header-menu-close', header).trigger('click');
                        }

                            return false;
                    }
                });

                    $('.header-menu-close', header).on('click', function(){
                    $('#block-sbg-main-menu-lg > ul > li', headerNav).removeClass('on');
                    headerMenu.stop(true, true).fadeOut();
                    $('.header-bg', header).fadeOut();
                });

                    $('.header-bg', header).on('click', function(){
                    $('.header-menu-close', header).trigger('click');
                });

                    $(window).keyup(function(e){
                    if(e.keyCode == 27) {
                        $('.header-menu-close', header).trigger('click');
                    }
                });


                    headerSpMenuBtn.attr('aria-expanded', 'false');
                headerSpMenuBtn.attr('aria-controls', 'header-menu');
                headerSpMenu.attr('id', 'header-menu');

                    headerSpMenuBtn.on('click', function(){
                    headerSpMenu.stop(true, true).fadeIn();
                    headerSpMenuBtn.addClass('on');
                    $('.header-sp-menu-close > button', headerSpMenu).addClass('on');

                        if(headerSearch.is(':visible')) {
                        headerSearch.fadeOut();
                    }

                        headerSpMenuBtn.attr('aria-expanded', 'true');
                });

                    $('.header-sp-menu-close > button', headerSpMenu).on('click', function(){
                    $(this).removeClass('on');
                    headerSpMenuBtn.removeClass('on');
                    headerSpMenuBtn.attr('aria-expanded', 'false');

                        headerSpMenu.fadeOut(function() {
                        $('.accordion', headerSpMenu).removeClass('on');
                        $('.accordion .accordion-body', headerSpMenu).hide();
                    });

                        return false;
                });

                    $(window).on('resize.header', function(){
                    if($(window).width() > PAGE_MAX_WIDTH) {
                        header.addClass('max-width');
                    }
                    else {
                        header.removeClass('max-width');
                    }

                        if(Utility.isSp() == false) {
                        headerSpMenu.hide();
                        headerSpMenuBtn.removeClass('on');
                        $('.header-sp-menu-close > button', headerSpMenu).removeClass('on');

                            $('#wrapper').css('padding-top', '');
                    }
                    else {
                        $('#wrapper').css('padding-top', $('#header').outerHeight() + 'px');
                    }
                }).trigger('resize.header');

                    $(window).on('scroll.header', function(){
                    header.css('left', '');
                    headerMenu.css('left', '');

                        if(Utility.isPc()) {
                        if($(window).width() < PAGE_MIN_WIDTH) {
                            var pos = -$(this).scrollLeft();
                            header.css('left', pos + 'px');
                            headerMenu.css('left', pos + 'px');
                        }
                    }
                }).trigger('scroll.header');

                    setTimeout(function(){
                    header.addClass('on');

                        header.on('transitionend', function(){
                        header.css('transition', 'none');
                    });
                }, 100);
            }
        };

            var initFooter = function() {
            var footer = $('#footer');

                if(footer.length > 0) {
                var footerNav = $('.footer-nav', footer);

                    $('.footer-scale a', footer).on('click', function(){
                    var scale = $(this).attr('href');

                        $('html').removeClass('font-scale-small');
                    $('html').removeClass('font-scale-medium');
                    $('html').removeClass('font-scale-large');
                    $('html').addClass('font-scale-' + scale);

                        $('.footer-scale a', footer).removeClass('on');
                    $(this).addClass('on');

                        $('.text-overflow').each(function() {
                        Module.textOverflow($(this));
                    });

                        return false;
                });

                    $('.footer-print', footer).on('click', function(){
                    window.print();
                });

                    $(window).on('resize orientationchange', function(){









                        if(Utility.isSp()) {
                        $('.footer-nav-contents', footerNav).removeClass('accordion-none');
                    }
                    else {
                        $('.footer-nav-contents', footerNav).addClass('accordion-none');
                    }


                            footer.addClass('init');
                }).trigger('resize');
            }
        };

            var initCookieAttention = function() {
            var cookieAttention = $('#cookie-attention');

                if(cookieAttention.length > 0) {
                cookieAttention.show();

                    setTimeout(function(){
                    cookieAttention.addClass('on');

                        $('.agree-button, .decline-button', cookieAttention).on('click', function(){
                        cookieAttention.removeClass('on');

                            cookieAttention.on('transitionend webkitTransitionEnd', function(){
                            cookieAttention.remove();
                        });

                            return false;
                    });
                }, 300);
            }
        };

            var initAnchor = function() {



        };

            var initPress = function() {

        }

            var initLocalNav = function() {
            var isSp = null;

                $(window).on('resize.localNav', function(){
                if(isSp != Utility.isSp()) {
                    $('div[class^="local-nav"]').each(function(){
                        var localNav = $(this);

                            $('.local-nav-body', localNav).css('width', '');
                        $('.local-nav-body li', localNav).css('height', '');

                            if(isSp != Utility.isSp()) {

                                if(Utility.isSp()
                                && (localNav.hasClass('local-nav-col2')
                                || localNav.hasClass('local-nav-col3')
                                || localNav.hasClass('local-nav-col4'))) {
                                setTimeout(function(){
                                    var width = 0;

                                        $('ul', localNav).each(function(){
                                        var rect = $(this)[0].getBoundingClientRect();
                                        width += rect.width;
                                    });

                                        if(width > 320) {
                                        $('.local-nav-body', localNav).width(width);
                                    }
                                    else {
                                        $('.local-nav-body', localNav).css('width', '100%');
                                    }
                                }, 500);
                            }
                            else {
                                $('li', this).each(function(){
                                    if($('span', this).height() > 25 || $('span', this).width() > $('a', this).width() - $('.link-arrow', this).outerWidth(true)) {
                                        $(this).css('text-align', 'left');
                                    }
                                });

                                    if(Utility.isSp()) {
                                    $('li', this).matchHeight({
                                        remove: false
                                    });
                                }
                                else {
                                    $('li', this).matchHeight();
                                }
                            }

                                $('.local-nav-body', localNav).css('visibility', 'visible');
                        }
                    });

                        isSp = Utility.isSp();
                }
            }).trigger('resize.localNav');
        };

            var initBreadcrumb = function() {
            var breadcrumb = $('#breadcrumb');

                if(breadcrumb.length > 0) {
                $(window).on('resize.breadcrumb', function(){
                    if(Utility.isSp()) {
                        var width = 0;

                            $('li', breadcrumb).each(function(){
                            var rect = $(this)[0].getBoundingClientRect();
                            width += rect.width;
                        });

                            $('ul', breadcrumb).width(width);
                        breadcrumb.scrollLeft(width);

                            if($('ul', breadcrumb).css('opacity') != 1) {
                            $('ul', breadcrumb).css({
                                'visibility': 'visible',
                                'opacity': 1,
                                'transition': '0.3s'
                            });
                        }
                    }
                    else {
                        $('ul', breadcrumb).css({
                            'width': '',
                            'visibility': '',
                            'opacity': '',
                            'transition': ''
                        });
                    }
                });

                    $(window).on('load', function(){
                    $('ul', breadcrumb).css('width', '4000px');
                    setTimeout(function(){
                        $(window).trigger('resize.breadcrumb');
                    }, 300);
                });
            }
        };

            var initBtnPagetop = function() {
            var btnPagetop = $('#btn-pagetop');

                if(btnPagetop.length > 0) {
                $('> a', btnPagetop).on('click', function(){
                    $('html, body').animate({scrollTop:0});

                        return false;
                });

                    $(window).on('scroll', function(){
                    var scrollTop = $(this).scrollTop();
                    var pos = 1080;

                        if(Utility.isSp()) {
                        pos = window.innerHeight;
                    }

                        if(scrollTop > pos) {
                        btnPagetop.addClass('on');
                    }
                    else {
                        btnPagetop.removeClass('on');
                    }
                });
            }
        };

            Module.textOverflow = function(node) {
            var html = $(node).data('html');

                if(typeof html === 'undefined') {
                html = $(node).html();
                $(node).data('html', html);
            }
            else {
                $(node).html(html);
            }

                var height = $(node).data('overflow-height');
            if(typeof height !== 'undefined') {
                if(Utility.isSp()) {
                    $(node).css('height', height[1] + 'px');
                }
                else {
                    $(node).css('height', height[0] + 'px');
                }
            }

                var nodeCpy = $(node).clone();
            nodeCpy.css({
                display: 'none',
                position : 'absolute',
                overflow : 'visible'
            })
            .width($(node).width())
            .height('auto');

                $(node).after(nodeCpy);

                while((html.length > 0) && (nodeCpy.height() > $(node).height())) {
                html = html.substr(0, html.length - 1);
                nodeCpy.html(html + '…');
            }

                $(node).html(nodeCpy.html());

                if($(node).hasClass('auto')) {
                $(node).css({
                    'height': '',
                });
            }

                nodeCpy.remove();
        }

            var initTextOverflow = function () {
            $('.text-overflow').each(function() {
                Module.textOverflow($(this));
            });
        };

            let accordionId = 0;

            Module.setAccordion = function(node, func) {
            const accordion = $(node);
            const accordionHead = $('.accordion-head', accordion);
            const accordionBody = $('.accordion-body', accordion);
            let accordionTime = accordion.data('accordion-time');

                accordionHead.attr('aria-label', "開く");
            accordionHead.attr('aria-expanded', "false");
            accordionHead.attr('aria-controls', 'accordion_' + accordionId);
            accordionBody.attr('id', 'accordion_' + accordionId);
            accordionId++;

                if(typeof accordionTime === 'undefined') {
                accordionTime = 300;
            }
            else {
                accordionTime = parseInt(accordionTime);
            }

                accordionHead.off().on('click', function(){
                if(accordion.hasClass('accordion-none') == false) {
                    if(accordion.hasClass('on') == false) {
                        accordionBody.show();
                        $(window).trigger('resize');
                        accordionBody.hide();
                    }

                        accordion.toggleClass('on');
                    accordionBody.slideToggle(accordionTime);

                        accordionHead.attr('aria-label', accordion.hasClass('on') ? "閉じる" : "開く");
                    accordionHead.attr('aria-expanded', accordion.hasClass('on') ? "true" : "false");
                }
            });

                if(typeof func === 'function') {
                func(node);
            }
        };

            var initAccordion = function() {
            $('.accordion').each(function(){
                Module.setAccordion(this);
            });
        };

            var initTab = function() {
            $('.tab-col2, .tab-col3, .tab-col4').each(function() {
                var tab = $(this);
                var tabHead = $('.tab-head', tab);
                $('li', tabHead).on('click', function() {
                    if($(this).hasClass('on')) return false;
                    $('li', tabHead).removeClass('on');
                    $(this).addClass('on');
                    var idx = $('li', tabHead).index(this);
                    var target = $('.tab-body', tab).eq(idx);
                    $('.tab-body', tab).hide();
                    $(target).fadeIn();
                    return false;
                });
            });

                $('.page-tab-col2, .page-tab-col3, .page-tab-col4').each(function() {
                var tabHead = $('.tab-head', this);

                    $('a', tabHead).on('click', function() {
                    if($(this).hasClass('on')) return false;

                        var target = $(this).attr('href');

                        if($(target).length > 0) {
                        $('a', tabHead).removeClass('on');
                        $(this).addClass('on');

                            $('a', tabHead).each(function(){
                            $($(this).attr('href')).hide();
                        });

                            $(target).fadeIn();
                    }

                        return false;
                });
            });

                $(window).on('resize.tab', function() {
                $('.page-tab-col3, .page-tab-col4').each(function(){
                    var tabHead = $('.tab-head', this);

                        if(Utility.isSp()) {
                        var width = 0;

                            $('li', tabHead).each(function(){
                            width += $(this).outerWidth(true);
                        });

                            $('ul', tabHead).width(width).css('visibility', 'visible');
                    }
                    else {
                        $('ul', tabHead).css('width', '');
                    }
                });
            }).trigger('resize.tab');
        };


            var initFixHeight = function() {
            $(window).on('resize.fixHeight', function(){
                $('.fix-height-pc').each(function(){
                    var node = $(this);

                        if(Utility.isSp()) {
                        $('.fix-height-child', node).matchHeight({
                            remove: false
                        });
                    }
                    else {
                        $('.fix-height-child', node).matchHeight();
                    }
                });
            }).trigger('resize.fixHeight');
        };

            var initClickClipboard = function() {
            $('.click-clipboard').on('click', function(){
                if($('.copy-dialog').length > 0) return false;

                    var target = $($(this).attr('href'));

                    if(target.length > 0) {
                    var clipboard = $('<textarea></textarea>');
                    clipboard.addClass('clipboard');
                    clipboard.html(target.text().replace(/\r?\n/g, '').replace(/\s+/g, ''));
                    $(this).append(clipboard);
                    clipboard.trigger('select');
                    document.execCommand('copy');
                    clipboard.remove();

                        var tpl = $('<div>').addClass('copy-dialog').text('クリップボードへコピーしました');
                    tpl.on('animationend webkitAnimationEnd', function(){
                        $(this).remove();
                    });

                        $('#wrapper').append(tpl);
                }

                    return false;
            });
        };

            var initSlideList = function() {
            $('.slide-list').each(function(){
                var slideList = $(this);
                var slideListMore = $('.slide-list-more', slideList);

                    var slideListNodes = $('li', slideList).clone();
                var listNum = slideListNodes.length;

                    var pageMax = 1;
                var currentPage = 1;

                    var slideInitNum = $(this).data('slide-init');

                    if(typeof slideInitNum === 'undefined') {
                    slideInitNum = 10;
                }
                else {
                    slideInitNum = parseInt(slideInitNum);
                }

                    var slideMoreNum = $(this).data('slide-more');

                    if(typeof slideMoreNum === 'undefined') {
                    slideMoreNum = 10;
                }
                else {
                    slideMoreNum = parseInt(slideMoreNum);
                }

                    if(listNum > slideInitNum) {
                    pageMax = (listNum - slideInitNum) / slideMoreNum + 1;

                    $('#block-sbg-main-menu-lg > ul > li', slideList).remove();
                    $('#block-sbg-main-menu-lg > ul', slideList).addClass('page1').fadeIn();
                    for(var i = 0; i < slideInitNum; i++) {
                        var node = slideListNodes.eq(i).clone();
                        $('#block-sbg-main-menu-lg > ul', slideList).append(node);
                    }

                        for(var i = 1; i < pageMax; i++) {
                        var tpl = $('<ul>');
                        tpl.addClass('page' + (i + 1));
                        var offset = slideInitNum + slideMoreNum * (i - 1);

                            for(var j = 0; j < slideMoreNum; j++) {
                            var node = slideListNodes.eq(offset + j).clone();
                            tpl.append(node);
                        }

                            $('.page' + i, slideList).after(tpl);
                    }

                        slideListMore.show();

                        $('> a', slideListMore).on('click', function() {
                        currentPage++;
                        $('.page' + currentPage, slideList).slideDown();

                            if(currentPage >= pageMax) {
                            slideListMore.fadeOut();
                        }

                            return false;
                    });
                }
                else {
                    $('#block-sbg-main-menu-lg > ul', slideList).fadeIn();
                }
            });
        };

            var initSnsShare = function() {
            $('.share-sns').each(function(){
                var service = $(this).attr('href');
                var snsUrl = null;
                var params = [];
                var meta = $('meta');
                var url = meta.filter('[property="og:url"]').attr('content');
                var title = meta.filter('[property="og:title"]').attr('content');
                switch (service) {
                    case 'fb':
                        snsUrl = 'https://www.facebook.com/sharer.php';
                        params.push('u=' + encodeURIComponent(url));
                        break;
                    case 'tw':
                        snsUrl = 'https://twitter.com/share';
                        params.push('url=' + encodeURIComponent(url));
                        params.push('text=' + encodeURIComponent(title));
                        break;
                    case 'ln':
                        snsUrl = 'http://line.naver.jp/R/msg/text/';
                        params.push(encodeURIComponent(url));
                        break;
                    case 'li':
                        snsUrl = 'http://www.linkedin.com/shareArticle';
                        params.push('mini=true');
                        params.push('url=' + encodeURIComponent(url));
                        break;
                }
                snsUrl = snsUrl + '?' + params.join('&');
                $(this).attr('href', snsUrl);
                $(this).on('click', function(){
                    window.open($(this).attr('href'), 'share', 'width=540,height=325,status=0,toolbar=0,location=0,menubar=0,directories=0,resizable=0,scrollbars=0');
                    return false;
                });
            });
        };

            var initDocDownload = function() {
            $('.el-ir-doc-dl').each(function(){
                var doc = $(this);
                var btn = $('.btn ', this);
                $('input', doc).on('change', function(){
                    if($('input:checked', doc).length > 0) {
                        btn.removeClass('disable');
                    }
                    else {
                        btn.addClass('disable');
                    }
                }).trigger('change');
            });
        };

            var initOldNewsLayout = function() {
            $(function(){
                var newsOldLayout = $('.news-old-layout');
                if(newsOldLayout.length > 0) {
                    $('table', newsOldLayout).wrap('<div class="scroll-table">');
                }
            });
        }

            var initDocDlList = function() {
            $('.doc-dl-list').each(function(){
                var docDlList = $(this);
                $('> ul > li > dl > dt', docDlList).on('click', function(){
                    $(this).toggleClass('on');
                    if($('> ul > li > dl > dt.on', docDlList).length > 0) {
                        $('.btn', docDlList).removeClass('disable');
                    }
                    else {
                        $('.btn', docDlList).addClass('disable');
                    }
                });
            });
        };


                var initModalYt = function() {
            $('.modal-yt-open').on('click', function(){
                var id = $(this).attr('href');

                    modalYtPlayer.loadVideoById({
                    videoId: id,
                });

                    $('.modal-yt').fadeIn().css('display','flex');

                    return false;
            });

                $('.modal-yt-bg, .modal-yt-close').on('click', function(){
                $('.modal-yt').fadeOut(function(){
                    modalYtPlayer.stopVideo();
                });
            });
        };

            var initGallery = function() {
            $('.gallery').each(function(){
                var galleryThumb = $('.gallery-thumb', this);

                    var thumbSwiper = new Swiper($('.swiper-container', galleryThumb)[0], {
                    spaceBetween: 10,
                    slidesPerView: 6,
                    watchSlidesVisibility: true,
                    watchSlidesProgress: true,
                    grabCursor: true,
                    watchOverflow: true,

                        breakpoints: {
                        767: {
                            spaceBetween: 5,
                            slidesPerView: 4,
                        },
                    },

                        navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }
                });

                    galleryThumb.append($('.swiper-button-prev', galleryThumb));
                galleryThumb.append($('.swiper-button-next', galleryThumb));

                    var galleryMain = $('.gallery-main', this);

                    var mainSwiper = new Swiper($('.swiper-container', galleryMain)[0], {
                    watchOverflow: true,

                        navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },

                        thumbs: {
                        swiper: thumbSwiper
                    },
                });

                    $('.gallery-main-button', galleryMain).append($('.swiper-button-prev', galleryMain));
                $('.gallery-main-button', galleryMain).append($('.swiper-button-next', galleryMain));
            });
        };

            var initScrollTable = function() {
            if(Utility.isSp()) {
                var scrollTable = new ScrollHint('.scroll-table');

                    $('.scroll-table').each(function(){
                    $(this).wrap('<div class="scroll-table-wrapper">');
                    $(this).attr('tabindex', 0);

                        $(this).on({
                        'focusin': function(){
                            $(this).closest('.scroll-table-wrapper').addClass('focus');
                        },
                        'focusout': function(){
                            $(this).closest('.scroll-table-wrapper').removeClass('focus');
                        }
                    });

                        if($(this).outerHeight() < 120) {
                        $(this).addClass('hint-hidden');
                    }
                });
            }
        };

            $('.select').each(function () {
            $('.news-search-category').each(function () {
                if ($('li', this).length % 2) {
                    $(this).addClass('odd');
                }
                else {
                    $(this).addClass('even');
                }
            });
        });













            initHeader();
        initFooter();
        initCookieAttention();
        initBtnPagetop();
        initBreadcrumb();
        initLocalNav();
        initDocDownload();

            initAnchor();
        initTextOverflow();
        initAccordion();
        initTab();
        initPress();
        initFixHeight();
        initClickClipboard();
        initSlideList();
        initSnsShare();

            initOldNewsLayout();
        initDocDlList();
        initModalYt();
        initGallery();
        initScrollTable();
    });

    })(jQuery, Drupal, Drupal.debounce, drupalSettings);

const once = $;
