$(function(){
    $(window).on('resize.ir-bonds-value-calc', function(){
        $('.ir-bonds-value-calc > ul > li > div > dl > dt').matchHeight();

        if(Utility.isSp()) {
            $('.ir-bonds-value-calc > ul > li:first-of-type > div > dl > dt').css('height', '')
        }
    }).trigger('resize.ir-bonds-value-calc');
});