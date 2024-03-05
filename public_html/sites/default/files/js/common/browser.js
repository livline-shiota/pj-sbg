(function ($, Drupal, debounce, drupalSettings) {
    'use strict';
    var Browser;

    if (typeof Browser === 'undefined') {
        Browser = {};
    }

    var checkUA = function () {
        var ua = navigator.userAgent;

        Browser['device'] = null;

        if (ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
            Browser['device'] = 'sp';
            document.write('<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>');
        }
        else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
            Browser['device'] = 'tb';
            document.write('<meta name="viewport" content="width=1190px, user-scalable=no, target-densitydpi=device-dpi">');
        }
        else {
            Browser['device'] = 'pc';
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
})(jQuery, Drupal, Drupal.debounce, drupalSettings);
