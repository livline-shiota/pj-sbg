(function ($) {
    $(function(){
      $(window).keydown(function (e) {
        if (e.keyCode == 27) {
          $('.menu a').blur();
        }
    });

    var w = $(window).width();
    var x = 720;

        // /スクロールに応じて要素をフェードイン
        $(window).scroll(function (){
          $('.fadein').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200){
              $(this).addClass('scrollin');
            }
          });
        });

        // SPグローバルメニュー開閉
        var state = false;
        var scrollpos;
        if (w < x) { //SP
            $('#localNavSection .toggle').on('click', function(){
              $('#localNavSection').toggleClass('open');
              if(state == false) {
                scrollpos = $(window).scrollTop();
                $('#overlay').fadeIn();
                $('body').addClass('fixed').css({'top': -scrollpos});
                state = true;
              } else {
                $('body').removeClass('fixed').css({'top': 0});
                $('#overlay').fadeOut();
                window.scrollTo( 0 , scrollpos );
                state = false;
              }
            });
        }

        //URLのハッシュ値を取得
        var urlHash = location.hash;
        var headerHeight;
        if (w < x) { //SP
          headerHeight = 51;
        } else { //PC
          headerHeight = 146;
        }
        //ハッシュ値があればページ内スクロール
        if(urlHash) {
          // /スクロールに応じて要素をフェードイン
          $(urlHash).removeClass('fadein');
          $(window).on('load', function() {
            //スクロールを0に戻す
            //$('body,html').stop().scrollTop(0);
            setTimeout(function () {
              //ロード時の処理を待ち、時間差でスクロール実行
              scrollToAnker(urlHash) ;
            }, 50);
          });
        };

        //通常のクリック時
        $('a[href^="#"]').click(function() {
          //ページ内リンク先を取得
          var href= $(this).attr("href");
          //リンク先が#か空だったらhtmlに
          var hash = href == "#" || href == "" ? 'html' : href;
          //スクロール実行
          scrollToAnker(hash);
          //リンク無効化
          return false;
        });

        // 関数：スムーススクロール
        // 指定したアンカー(#ID)へアニメーションでスクロール
        function scrollToAnker(hash) {
          var target = $(hash);
          var position = target.offset().top;
          $('body,html').stop().animate({scrollTop:position - headerHeight}, 500);
        }



    });

    })(jQuery);