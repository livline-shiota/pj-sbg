$(function(){
    $('.news-search-category input').on('change', function(){
        var idx = $('.news-search-category input').index(this);

        if(idx == 0) {
            var checked = $(this).prop('checked');
            $('.news-search-category input').prop('checked', false);
            $(this).prop('checked', checked);
        }
        else {
            $('.news-search-category input').eq(0).prop('checked', false);
        }
    });

    $(window).on('resize.newsSearchCategory', function(){
        $('.news-search-category').each(function(){
            var node = $(this);

            $('li', node).matchHeight();
            $('li', node).each(function(){
                $('input + div', this).outerHeight($(this).height());
            });
        });
    }).trigger('resize.newsSearchCategory');
});