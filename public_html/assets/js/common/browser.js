var Browser;

if(typeof Browser === 'undefined') {
    Browser = {};
    Browser['option'] = [];
}

var CLIENT_WIDTH = document.documentElement.clientWidth;
var CLIENT_HEIGHT = window.innerHeight;

var checkUA = function() {
    var ua = navigator.userAgent;

    Browser['device'] = null;

    var viewport = document.querySelector("meta[name='viewport']");
    if(viewport != null) viewport.parentNode.removeChild(viewport);
    if(CLIENT_WIDTH > 768) {
        if (ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
            Browser['device'] = 'tb';
            document.write('<meta name="viewport" content="width=768, user-scalable=no, target-densitydpi=device-dpi"></meta>');
            Browser['option'].push('smooth-scroll');
        }
        else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
            Browser['device'] = 'tb';
            document.write('<meta name="viewport" content="width=1190, user-scalable=no, target-densitydpi=device-dpi"></meta>');
        }
        else {
            Browser['device'] = 'pc';
        }
    }
    else {
        Browser['device'] = 'sp';
        document.write('<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"></meta>');
    }

    Browser['os'] = null;

    if (ua.indexOf('iPhone') > 0) {
        Browser['os'] = 'iphone';
    }
    else if (ua.indexOf('Android') > 0) {
        Browser['os'] = 'android';
    }
}();

$(function () {

    if (Browser['device'] != null) {
        $('#wrapper').addClass('browser-device-' + Browser['device']);

    }

    if (Browser['os'] != null) {
        $('#wrapper').addClass('browser-os-' + Browser['os']);
    }

    Browser['enableTouch'] = false;

    if (('ontouchstart' in window || navigator.msPointerEnabled) && navigator.maxTouchPoints > 0 || Browser['device'] != 'pc') {
        Browser['enableTouch'] = true;
        $('#wrapper').addClass('touch-enable');
    }
    else {
        $('#wrapper').addClass('touch-disable');
    }

    var options = Browser['option'];
    for(var i = 0; i < options.length; i++) {
        $('#wrapper').addClass(options[i]);
    }

    $(window).on('orientationchange', function(){
        if(Browser['device'] != 'pc') {
            var reloadWidth = 715;

            setTimeout(function(){
                if(CLIENT_WIDTH > reloadWidth && CLIENT_HEIGHT <= reloadWidth || CLIENT_WIDTH <= reloadWidth && CLIENT_HEIGHT > reloadWidth) {
                    location.href = location.href;
                }
            }, 100);
        }
    });
});