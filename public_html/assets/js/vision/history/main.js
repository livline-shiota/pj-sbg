$(function(){
    var initKv = function(){
        var SCROLL_SPD = 1;

        var tileList = $('.vision-history-rn-kv-bg > ul').clone();
        $('.vision-history-rn-kv-bg').append(tileList);

        var setRandomTile = function(node) {
            var tileNum = $('> li', node).length;

            var tileOrg = $('> li', node).clone();
            $('> li', node).remove();

            var randAry = [];

            for(var i = 0; i < tileNum; i++) {
                randAry.push(i);
            }

            while(randAry.length > 0) {
                var r = Math.floor(Math.random() * randAry.length);
                node.append(tileOrg.eq(randAry[r]).clone());

                randAry.splice(r, 1);
            }
        };

        $('.vision-history-rn-kv-bg > ul').each(function(i){
            var node = $(this);

            setRandomTile(node);

            var tile = $('> li', node).remove();
            var tileNum = tile.length;

            var tileWidth = 220;
            var windowWidth = 1920;

            if(Utility.isSp()) {
                tileWidth = 130;
                windowWidth = window.innerHeight;
            }

            var loopNum = parseInt(windowWidth / (tileWidth * tileNum)) + 2;

            for(var j = 0; j < loopNum; j++) {
                for(var k = 0; k < tile.length; k++) {
                    node.append(tile.eq(k).clone());
                }
            }

            node.width(tileWidth * tileNum * loopNum);

            if(i % 2 == 0) {
                node.css('left', '0px');
            }
            else {
                node.css('left', -(tileWidth * tileNum) + 'px');
            }

            setInterval(function(){
                var x = node.position().left;

                if(i % 2 == 0) {
                    x += SCROLL_SPD;

                    if(x >= 0) {
                        x -= tileWidth * tileNum;
                    }
                }
                else {
                    x -= SCROLL_SPD;

                    if(x <= -tileWidth * tileNum) {
                        x += tileWidth * tileNum;
                    }
                }

                node.css('left', x + 'px');
            }, 20);
        });

        $('.vision-history-rn-kv-anchor a').on('click', function(){
            var href= $(this).attr("href");
            var target = $(href == "#" || href == "" ? 'html' : href);
            var position = target.offset().top - $('#header').height();

            $('html, body').animate({scrollTop:position});

            return false;
        });
    };

    var initNav = function() {
        $('.vision-history-rn-nav a').on('click', function(){
            $('.vision-history-rn-nav a').removeClass('on');
            $(this).addClass('on');

            var href= $(this).attr("href");
            var target = $(href == "#" || href == "" ? 'html' : href);
            var position = target.offset().top - $('#header').height();

            if(Utility.isSp()) position -= 44;

            $('html, body').animate({scrollTop:position});

            return false;
        });

        $(window).on('scroll.his-nav', function(){
            var scrollPos = $(this).scrollTop();
            var mvPos = $('.vision-history-rn-kv').offset().top + $('.vision-history-rn-kv').height() - $('#header').height();
            var footerPos = $('.vision-history-rn-link').offset().top + $('.vision-history-rn-link').height();
            if(Utility.isSp()) scrollPos += 44;

            if(scrollPos >= mvPos && scrollPos + window.innerHeight <= footerPos) {
                $('.vision-history-rn-nav').addClass('on');
            }
            else {
                $('.vision-history-rn-nav').removeClass('on');
            }

            $($('.vision-history-rn-table').get().reverse()).each(function(){
                var tablePos = $(this).offset().top - $('#header').height() - 1;
                if(Utility.isSp()) tablePos -= 44;

                if(scrollPos >= tablePos) {
                    var id = $(this).attr('id');

                    $('.vision-history-rn-nav a').removeClass('on');
                    $('.vision-history-rn-nav a[href="#' + id + '"]').addClass('on');

                    return false;
                }
            });
        }).trigger('scroll.his-nav');
    };

    var initTable = function() {
        var addScrollEvent = function(id, node, callback) {
            if(node.length > 0) {
                var event = 'scroll.' + id;

                $(window).on(event, function(){
                    var pos = $(this).scrollTop() + this.innerHeight * 0.7;
                    var eventPos = node.offset().top;

                    if(pos > eventPos) {
                        $(window).off(event);

                        callback(node);
                    }
                }).trigger(event);

                
            }
        };

        $('.vision-history-rn-table').each(function(i){
            var head = $('.vision-history-rn-table-head', this);

            addScrollEvent('head' + i, head, function(node){
                node.addClass('anm');
            });

            $('.vision-history-rn-table-detail', this).each(function(j){
                addScrollEvent('detail' + i + '_' + j, $(this), function(node){
                    node.addClass('anm');
                });
            });
        });
    };

    initNav();
    initKv();
    initTable();
});