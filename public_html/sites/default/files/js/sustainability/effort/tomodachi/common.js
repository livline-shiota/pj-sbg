(function ($, Drupal, debounce, drupalSettings) {
    var Browser;

    if(typeof Browser === 'undefined') {
        Browser = {};
    }

    var CLIENT_WIDTH = document.documentElement.clientWidth;
    var CLIENT_HEIGHT = window.innerHeight;

    var checkUA = function() {
        var ua = navigator.userAgent;

        Browser['device'] = null;

        if(CLIENT_WIDTH > 768) {
            if (ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
                Browser['device'] = 'tb';
            }
            else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
                Browser['device'] = 'tb';
            }
            else {
                Browser['device'] = 'pc';
            }
        }
        else {
            Browser['device'] = 'sp';
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

        if ('ontouchstart' in window || navigator.msPointerEnabled) {
            Browser['enableTouch'] = true;
            $('#wrapper').addClass('touch-enable');
        }
        else {
            $('#wrapper').addClass('touch-disable');
        }
    });
});
