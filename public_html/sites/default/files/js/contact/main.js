(function ($, Drupal, debounce, drupalSettings) {
    $(function(){
        $('.file-upload').each(function(){
            var fileUpload = $(this);

            $('input[type="file"]', this).on('change', function() {
                var fileName = $(this).prop('files')[0].name;
                $('> p ' ,fileUpload).text(fileName);
            });
        });

        $('.contact-text-field').each(function(){
            $('input', this).on('blur', function(){
                if($(this).val().length == 0) {
                    $(this).addClass('input-error');
                }
                else {
                    $(this).removeClass('input-error');
                }
            });
        });

        $('.contact-textarea-field').each(function(){
            $('textarea', this).on('blur', function(){
                if($(this).val().length == 0) {
                    $(this).addClass('input-error');
                }
                else {
                    $(this).removeClass('input-error');
                }
            });
        });
    });
});
