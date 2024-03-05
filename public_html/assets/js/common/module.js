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

$(function(){
    var initHeader = function() {
        var header = $('#header');

        if(header.length > 0) {
            var headerNav = $('.header-nav', header);
            var headerMenu = $('.header-menu', headerNav);
            var headerSpMenuBtn = $('.header-sp-menu-open', header);
            var headerSpMenu = $('.header-sp-menu', header);

            var dir = location.pathname.split("/")[1];
            $('a[href="/' + dir + '/"]', headerNav).parent().addClass('current');
            

            var headerSearch = $('.header-search', header);
            $('.header-search-open', header).on('click', function(){
                var headerSearchInput = $('.header-search-input', header);

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

            var headerFunds = $('.header-funds', header);
            $('> dl > dt', headerFunds).on('click', function(){
                $('.header-funds-bg', headerFunds).toggle();
                headerFunds.toggleClass('on');
            });

            $('.header-funds-bg', headerFunds).on('click', function(){
                $('.header-funds-bg', headerFunds).hide();
                headerFunds.removeClass('on');
            });










            $('> ul > li', headerNav).on('mouseenter', function(){
                if(Utility.isTb() == false ||  Utility.isTouch() == false) {
                    $('> ul > li', headerNav).removeClass('on');
                    $(this).addClass('on');

                    var type = $('> a', this).data('type');

                    $('.header-menu-contents', headerMenu).stop(true, true).hide();
                    $('.header-menu-contents.' + type, headerMenu).stop(true, true).fadeIn();

                    headerMenu.fadeIn();
                }
            });

            headerNav.on('mouseleave', function(){
                if(Utility.isTb() == false ||  Utility.isTouch() == false) {
                    $('> ul > li', headerNav).removeClass('on');
                    headerMenu.stop(true, true).fadeOut();
                }
            });

            $('> ul > li', headerNav).on('click', function(){
                if(Utility.isTb() && Utility.isTouch()) {
                    if($(this).hasClass('on') == false) {
                        $('> ul > li', headerNav).removeClass('on');
                        $(this).addClass('on');

                        var type = $('> a', this).data('type');

                        $('.header-menu-contents', headerMenu).stop(true, true).hide();
                        $('.header-menu-contents.' + type, headerMenu).stop(true, true).fadeIn();

                        headerMenu.fadeIn();
                    }
                    else {
                        $('> ul > li', headerNav).removeClass('on');
                        headerMenu.stop(true, true).fadeOut();
                    }

                    return false;
                }
            });

            headerSpMenuBtn.on('click', function(){
                headerSpMenu.stop(true, true).fadeIn();
                headerSpMenuBtn.addClass('on');
                $('.header-sp-menu-close > div', headerSpMenu).addClass('on');

                if(headerSearch.is(':visible')) {
                    headerSearch.fadeOut();
                }
            });

            $('.header-sp-menu-close > div', headerSpMenu).on('click', function(){
                $(this).removeClass('on');
                headerSpMenuBtn.removeClass('on');

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
                if(footer.hasClass('init') == false) {
                    $('> dl', footerNav).each(function(){
                        var cols = Math.ceil(($('li', this).length / 8));
                        

                        if(cols > 1) {
                            var navOrg = footerNav.clone();
                            var node = $(this).clone();
                            var className = '.' + $(this).attr('class').replace(' ', '.');
                            

                            $(this).addClass('footer-nav-parent');
                            $('ul', this).html($('li', this).slice(0, 8));

                            for(var i = 1; i < cols; i++) {
                                var tpl = node.clone().addClass('footer-nav-child');

                                if(i == cols - 1)  {
                                    tpl.addClass('last');
                                }

                                $('ul', tpl).html($('li', tpl).slice(i * 8, (i + 1) * 8));

                                $(className).last().after(tpl);
                            }

                            footerNav.addClass('visible-pc');
                            footerNav.after(navOrg.addClass('visible-sp'));
                        }
                    });
                }

                if(Utility.isSp()) {
                    $('> dl', footerNav).removeClass('accordion-none');
                }
                else {
                    $('> dl', footerNav).addClass('accordion-none');
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

                $('dd > a', cookieAttention).on('click', function(){
                    cookieAttention.removeClass('on');

                    cookieAttention.on('transitionend webkitTransitionEnd', function(){
                        cookieAttention.remove();
                    });

                    return false;
                });
            }, 300);

            $('.cookie-attention-close').on('click', function(){
                cookieAttention.removeClass('on');

                cookieAttention.on('transitionend webkitTransitionEnd', function(){
                    cookieAttention.remove();
                });
            });
        }
    };

    var initAnchor = function() {
        $('.anchor').on('click', function(){
            var target = $(this).attr('href');

            var offset = $('#header').height();
            if(offset > 100) offset = 0;

            if($(target).length > 0) {
                var pos = $(target).offset().top - offset;
                $('html, body').animate({scrollTop: pos});
            }

            return false;
        });
    };

    var initPress = function() {
        if(Utility.isTouch()) {
            $('a, press-enable').on('touchstart', function(){
                $(this).addClass('press');
            });

            $('a, press-enable').on('touchend', function(){
                $(this).removeClass('press');
            });
        }
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

    Module.setAccordion = function(node, func) {
        var accordion = $(node);
        var accordionHead = $('.accordion-head', accordion);
        var accordionBody = $('.accordion-body', accordion);
        var accordionTime = accordion.data('accordion-time');

        if(typeof accordionTime === 'undefined') {
            accordionTime = 300;
        }
        else {
            accordionTime = parseInt(accordionTime);
        }

        accordionHead.on('click', function(){
            if(accordion.hasClass('accordion-none') == false) {
                if(accordion.hasClass('on') == false) {
                    accordionBody.show();
                    $(window).trigger('resize');
                    accordionBody.hide();
                }

                accordion.toggleClass('on');
                accordionBody.slideToggle(accordionTime);
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
        $('.tab-col2, .tab-col3').each(function() {
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

    $('.select').each(function(){
        var select = $(this);

        var openSelect = function() {
            select.addClass('on');
            $('> dl > dd', select).slideDown();
            $('.simplebar-content-wrapper', select).scrollTop(0);

            if($('.click-mask', select).length > 0) {
                $('.click-mask', select).show();
            }
            else {
                select.prepend($('<div class="click-mask">'));
                $('.click-mask', select).on('click', function(){
                    closeSelect();
                });
            }
        };

        var closeSelect = function() {
            select.removeClass('on');
            $('> dl > dd', select).slideUp();
            $('.click-mask', select).hide();
        };

        new SimpleBar($('> dl > dd', select)[0], {
            autoHide: false,
        });

        $('> dl > dt', select).on('click', function(){
            if(select.hasClass('on')) {
                closeSelect();
            }
            else {
                openSelect();
            }
        });

        $('.select-list a', select).on('click', function(){
            if($(this).hasClass('link') == false) {
                var val = $(this).text();
                $('> dl > dt', select).text(val);

                closeSelect();

                return false;
            }
        });
    });

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
                clipboard.select();
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

                $('> ul > li', slideList).remove();
                $('> ul', slideList).addClass('page1').fadeIn();
                for(var i = 0; i < slideInitNum; i++) {
                    var node = slideListNodes.eq(i).clone();
                    $('> ul', slideList).append(node);
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
                $('> ul', slideList).fadeIn();
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
    initGallery();
    initModalYt();
});