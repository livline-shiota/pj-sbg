$(function(){
    $('.vision-next30-accordion > dl').each(function(){
        var accordion = $(this);

        $('.btn', accordion).on('click', function(){
            accordion.toggleClass('open');
            $(this).toggleClass('open');
            $('> dd', accordion).slideToggle();
            return false;
        });
    });

    $('.article-head-right-m').each(function(){
        var img = $('.article-pic > img', this).clone();
        $('.article-text', this).after(img);
    });
});