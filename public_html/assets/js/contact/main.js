$(function(){
    $('.file-upload').each(function(){
        var fileUpload = $(this);

        $('input[type="file"]', this).on('change', function() {
            var fileName = $(this).prop('files')[0].name;
            $('> p ' ,fileUpload).text(fileName);
        });
    });
});