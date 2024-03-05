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