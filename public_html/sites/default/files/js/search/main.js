(function ($, Drupal, debounce, drupalSettings) {
    $(function(){
        $('.search-result-box').each(function(){
            var text = $('.text-m > p', this).html();
            var clipText = '';
            var clipCnt = 0;
            var textCnt = 0;
            var cntStop = false;
            var textAry = text.split('');
            var tagOpen = false;



            for(var i = 0; i < textAry.length; i++) {
                clipCnt++;

                if(textAry[i] === '<') {
                    cntStop = true;
                    tagOpen = !tagOpen;
                }

                if(cntStop == false) {
                    textCnt++;

                    if(textCnt >= 120) {
                        break;
                    }
                }

                if(textAry[i] === '>') {
                    cntStop = false;
                }
            }

            if(textCnt >= 120) {
                clipText = text.slice(0, clipCnt);

                if(tagOpen) clipText += '</span>';
                clipText += '…';

                $('.text-m > p', this).html(clipText);
            }
        });
        var formCheckInterval = setInterval(function(){
            var ssForm = $('#ss-form');

            if(ssForm.length > 0) {
                clearInterval(formCheckInterval);
                formCheckInterval = null;



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
});
