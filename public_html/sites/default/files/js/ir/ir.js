(function ($, Drupal) {
  'use strict';

  /* External link open on new tab */
  Drupal.behaviors.autoUpdateUrl = {
    attach: function (context, settings) {
      $(context).once('autoUpdate').each(function() {
        autoupdate();
      });
    }
  };

  function autoupdate() {
    jQuery.ajax(
    {
      type: "GET",
      url: "/sbg_stock_price/update",
      cache: false,
      success: function (data) {
        var res = [];
        var res1 = [];
        if(data[0] != null){
          res = data[0].split(".");
        };
        if(data[1]!= null){
          res1 = data[1].split(".");
        };
        var num = '----';
        var num1 = '----';
        if(Number(res[0]).toLocaleString("en") && typeof res[1]  !== "undefined"){
          num = Number(res[0]).toLocaleString("en")+'.'+res[1];
        }
        if(Number(res1[0]).toLocaleString("en") && typeof res1[1]  !== "undefined"){
          num1 = res1[0]+'.'+res1[1];
        }
        jQuery('.ir-mv-stock-price-js').fadeIn("slow").html(num);
        jQuery('.ir-mv-stock-change-js').fadeIn("slow").html(num1);
        jQuery('.ir-mv-stock-datetime-js').fadeIn("slow").html(data[2]);
      }
    });
  }

})(jQuery, Drupal);
