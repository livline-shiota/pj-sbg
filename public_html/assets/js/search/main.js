$(function(){
    var formCheckInterval = setInterval(function(){
        var ssForm = $('#ss-form');

        if(ssForm.length > 0) {
            clearInterval(formCheckInterval);
            formCheckInterval = null;

            $('.ss-category', ssForm).on('change', function(){
                if($(this).val() == 1 && $(this).prop('checked')) {
                    $('.ss-category', ssForm).prop('checked', true);
                }

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
            }).trigger('click');
        }
    }, 1);
});