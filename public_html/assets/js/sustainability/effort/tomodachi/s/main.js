$(function() {
    var footer = $('#footer');
    var footerNav = $('.footer-nav', footer);

    $(window).on('resize orientationchange', function(){
        $('> dl', footerNav).removeClass('accordion-none');
    }).trigger('resize');
});