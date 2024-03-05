$(function(){
    var topicsList = $('.vision-message-rn-topics-list');

    if(topicsList.length > 0) {
        var rows = parseInt(topicsList.data('rows'));

        $('> ul > li', topicsList).each(function(i){
            if(i > 0 && i % rows == 0) {
                topicsList.append($('<ul class="hide"></ul>').hide());
            }

            if(i >= rows) {
                $('> ul', topicsList).last().append($(this));
            }
        });

        var btn = $('+ .btn', topicsList);

        if($('> ul.hide', topicsList).length > 0) {
            $('> a', btn).on('click', function(){
                $('> ul.hide', topicsList).first().removeClass('hide').slideDown();

                if($('> ul.hide', topicsList).length == 0) {
                    btn.remove();
                }

                return false;
            });
        }
        else {
            btn.remove();
        }
    }
});