(function ($) {

$(function(){

var w = $(window).width();
var x = 720;

  // 目次開閉（SP）
  if (w < x) {
    $('.indexList > li > a').click(function(e){
      e.preventDefault(); //リンクを無効に
      $(this).toggleClass('open').next('.indexList > li > ul').slideToggle();
      $('.indexList > li > a').not($(this)).removeClass('open').next('.indexList > li > ul').slideUp();
    });
  }

  // PCでスクロールすると上部にメニュー固定
  var gloNav = $("#localNavSection");
  $(window).on("load scroll", function() {
    // PCでスクロールすると上部にメニュー固定
    headHeight = $('#sbg-appshell-v1-header').innerHeight();
    if (w >= x) {
      if($(this).scrollTop() > 900 && gloNav.hasClass('fixed') == false) {
        //headerの高さ分上に設定
        gloNav.css({"top": '-207px'});
        //クラスfixedを付与
        gloNav.addClass('fixed');
        //位置を0に設定し、アニメーションのスピードを指定
        gloNav.animate({"top": headHeight},400);
      }
      //現在の位置が100px以下かつ、クラスfixedが付与されている時にfixedを外す
      else if($(this).scrollTop() < 450 && gloNav.hasClass('fixed') == true ){
        gloNav.removeClass('fixed');
      }
    }
    /*
    // SPはフッターの上でメニュー固定する
    scrollHeight = $(document).height();
    scrollPosition = $(window).height() + $(window).scrollTop();
    footHeight = $('#sbg-appshell-v1-footer').innerHeight();
    if (w < x) {
      if ( scrollHeight - scrollPosition  <= footHeight + 10 ) {
        $('#localNavSection').css({
          'position':'absolute',
          'bottom': footHeight + 10
        });
        $('#localNavSection').addClass('absolute');
      } else {
        $('#localNavSection').css({
          'position':'fixed',
          'bottom': '0'
        });
        $('#localNavSection').removeClass('absolute');
      }
    }
    */
  });

});
})(jQuery);
