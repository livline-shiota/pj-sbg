/**
* @file
* File contains JS for Theme.
*/

(function ($, Drupal, debounce, drupalSettings) {
  'use strict';

  /* External link open on new tab */
  Drupal.behaviors.menuIconChange = {
    attach: function (context, settings) {
        $(".main-container a").filter(function () {
            var url = jQuery(this).attr("href");
            var extensionFlag = 0;
            var flag = 0;
            if (url) {
                var filename = url.substring(url.lastIndexOf('/') + 1);
                var extension = filename.split(".")[1];
                if (typeof extension !== "undefined") {
                    extensionFlag = 1;
                }
            }
            return ((this.hostname && this.hostname !== location.hostname) || extensionFlag);
        }).attr("target","_blank");

        var url = $(location).attr('href');
        var keyword = $('#acquiaSearchParent input[id^="edit-keyword"]').val();
        if (keyword == undefined || keyword == null || typeof keyword == 'undefined') {
            keyword = '';
        }
        var current_page_url = $(location).attr('pathname');
        if (current_page_url.indexOf('/search') != -1 && $("#views-exposed-form-acquia-search-page").length > 0) {
          $('#block-exposedformacquia-searchpage-1 input[id^="edit-keyword"]').val(keyword);
        }
        if ($('.search-result-word').length > 0 && url.indexOf('/search') != -1) {
          if (url.indexOf('/en') == -1) {
            $(".search-result-word").html("<span>“" + keyword + "”</span>の検索結果");
          }
          else if(keyword != 0){
            $(".search-result-word").html("<span> Search Results for “" + keyword + "”</span>");
          }
        }
        if (keyword == '') {
          if (url.indexOf('/en') == -1) {
            $(".search-result-word").html("検索結果");
          }
        }
    }
  };

   Drupal.behaviors.pageFilter = {
    attach: function (context, settings) {
      if ($('.download-all-files-ir').length > 0) {
        var select_file = [];
        var download_uri_ir = jQuery(".download-all-files-ir").attr("href").toString();
        $(".checkbox_file_select_ir").change(function () {
          var checked = $(this).val();
          var url = $(this).attr("url");
          if ($(this).is(':checked')) {
            select_file.push(url);
          }
          else {
            var x = select_file.indexOf(url);
            select_file.splice(x,1);
          }
          if (download_uri_ir.indexOf("?selected_files=") > 0) {
            download_uri_ir = download_uri_ir.split('?')[0];
          }
          if (select_file.length > 0) {
            $('.ir-info').find('.btn-important').removeClass('disable');
            $('.ir-info').find('.btn-important > a').attr('tabindex', '')
          }
          else {
            $('.ir-info').find('.btn-important').addClass("disable");
            $('.ir-info').find('.btn-important > a').attr('tabindex', '-1')
          }
          $(".download-all-files-ir").attr('href', download_uri_ir + '?selected_files=' + select_file);
        });
      }
    }
  };

  Drupal.behaviors.sbgModal = {
    attach: function (context, settings) {
      $('.showModal').each(function () {
        $(this).on('click', function () {
          var id = $(this).attr('href');
          var modal = $(id);

          // Move modal dialog to the end of wrapper
          modal.appendTo('#wrapper');
        })
      });
    }
  };

  // User Accessibility
  Drupal.behaviors.userAccessibility = {
    attach: function (context, settings) {

      // Check browser support.
      if (typeof(Storage) !== "undefined") {

        // Get font scale from local storage.
        let fontScale = localStorage.getItem('fontScale');

        // Default font scale.
        let defaultFontScale = 'medium';

        if (fontScale !== null) {

          // Add class into html.
          $('html').addClass('font-scale-' + fontScale);
          // Remove class from footer scale option..
          $('.footer-scale a').removeClass('on');
          // Add new class into footer scale option.
          $('.footer-scale a[href=' + fontScale + ']').addClass('on');

        } else {

          // Set default font scale.
          localStorage.setItem('fontScale', defaultFontScale);
          // Add class into html.
          $('html').addClass('font-scale-' + defaultFontScale);
          // Add new class into footer scale option.
          $('.footer-scale a[href=' + defaultFontScale + ']').addClass('on');

        }

        // Set font scale to local storage when user click on footer scale.
        $('.footer-scale a').on('click', function (e) {
          e.preventDefault();
          let scale = $(this).attr('href');
          // Set fontScale value into local storage.
          localStorage.setItem('fontScale', scale);
        });

      } else {

        // No web storage Support.
        console.log('This browser does not support local web storage.');

      }

    }
  };

    // Override login form style
    Drupal.behaviors.sbgLoginForm = {
      attach: function (context, settings) {

        $(once('sbgLoginFormInputText','form.user-login-form')).each(function () {
          $(this).find('input[type="text"]').wrap(function() {
            return "<div class='contact-text-field'></div>";
          });
          $(this).find('input[type="password"]').wrap(function() {
            return "<div class='contact-text-field'></div>";
          });
          $(this).find('.description').addClass('pt10 pt10-sp');
        });

        $(once('sbgPasswordFormInputText','form.user-pass')).each(function () {
          $(this).find('input[type="text"]').wrap(function() {
            return "<div class='contact-text-field'></div>";
          });
          $(this).find('p').addClass('pt10 pt10-sp');
        });

        $(once('sbgLoginFormPuseudoSubmit','form.user-login-form input[type="submit"]')).each(function () {

          $(this).hide();

          var submitButton = $(this);
          var value = $(this).attr('value');
          var base_path = settings.path.baseUrl;

          // Replace Submit Button.
          var replace = $('<div class="btn btn-important margin-center"><a href=""><div><span>' + value + '</span><div class="link-arrow link-arrow-small"><img src="' + base_path + 'sites/default/files/assets/img/common/link_arrow_wh.svg" alt="→"></div></div></a></div>');

          replace.insertAfter($(this)).children('a').click(function() {
            submitButton.click();
            return false;
          });

        });

        $(once('sbgPasswordFormPuseudoSubmit','form.user-pass input[type="submit"]')).each(function () {

          $(this).hide();

          var submitButton = $(this);
          var value = $(this).attr('value');
          var base_path = settings.path.baseUrl;

          // Replace Submit Button.
          var replace = $('<div class="btn btn-important margin-center"><a href=""><div><span>' + value + '</span><div class="link-arrow link-arrow-small"><img src="' + base_path + 'sites/default/files/assets/img/common/link_arrow_wh.svg" alt="→"></div></div></a></div>');

          replace.insertAfter($(this)).children('a').click(function() {
            submitButton.click();
            return false;
          });

        });

        // TFA form modifications
        $(once('sbgTfaFormInputText', 'form.tfa-entry-form')).each(function() {
          $(this).find('input[type="text"]').wrap(function() {
            return "<div class='contact-text-field'></div>";
          });
          $(this).find('.description, fieldset, fieldset .fieldset-wrapper ul').addClass('pt10 pt10-sp');
        });

        $(once('sbgTfaFormPuseudoSubmit', 'form.tfa-entry-form input[type="submit"]')).each(function() {

          $(this).hide();

          var submitButton = $(this);
          var value = $(this).attr('value');
          var base_path = settings.path.baseUrl;

          // Replace Submit Button.
          var replace = $('<div class="btn btn-important margin-center"><a href=""><div><span>' + value + '</span><div class="link-arrow link-arrow-small"><img src="' + base_path + 'sites/default/files/assets/img/common/link_arrow_wh.svg" alt="→"></div></div></a></div>');

          replace.insertAfter($(this)).children('a').click(function() {
            submitButton.click();
            return false;
          });

        });
        // TFA form modifications

    }
  };

  // Handle update link title of language switcher
  Drupal.behaviors.sbgLanguageSwitch = {
    attach:function (context) {
      if (!once('off-canvas', 'html').length) {
        return;
      }
      const updateLanguageLinkTitle = function () {
        if($(window).width() <= 768) {
          $('#header .header-option .header-lang > ul > .ja > a').text('JP');
          $('#header .header-option .header-lang > ul > .en > a').text('EN');
        }
        else {
          $('#header .header-option .header-lang > ul > .ja > a').text('JAPANESE');
          $('#header .header-option .header-lang > ul > .en > a').text('ENGLISH');
        }
      }
      updateLanguageLinkTitle()
      $(window).on('resize', updateLanguageLinkTitle);
    },

  };

})(jQuery, Drupal, Drupal.debounce, drupalSettings);

// News detail page specific override.
jQuery(document).ready(function () {
    if (jQuery('.download-all-files').length > 0) {
        var tmp = [];
        var download_uri = jQuery(".download-all-files").attr("href").toString();
        var duplicate = [];
        jQuery(this).find(".file").each(function () {
            filename = jQuery(this).eq(0).text();
            if (duplicate.indexOf(filename) < 1 && !jQuery(this).children('.checkbox_file_select').length) {
                   jQuery(this).eq(0).prepend('<input type="checkbox" class="checkbox_file_select" disable url=' + filename + '/>');
                duplicate.push(filename);
            }
        });

        jQuery(".checkbox_file_select").change(function () {
          var checked = jQuery(this).val();
          var url = jQuery(this).attr("url");
          if (jQuery(this).is(':checked')) {
            tmp.push(url);
          }
        else {
            var x = tmp.indexOf(url);
            tmp.splice(x,1);
          }
          if (download_uri.indexOf("?selected_files=") > 0) {
              download_uri = download_uri.split('?')[0];
          }
          jQuery(".download-all-files").attr('href', download_uri + '?selected_files=' + tmp);
        });
    }

    jQuery('input[data-drupal-selector="edit-submit-acquia-search"]').click(function () {
        var uri = window.location.toString();
        if (uri.indexOf("?") > 0) {
            var clean_uri = uri.substring(0, uri.indexOf("?"));
            window.history.replaceState({}, document.title, clean_uri);
        }
    });
    if (jQuery('.news-pager')[0]) {
      var fullPath = window.location.pathname.split("/");
      var strippedPath = fullPath.slice(0, fullPath.length - 1).join("/");

      var strippedPathSplit = strippedPath.split("/");
      var contentCategory = strippedPathSplit.slice(strippedPathSplit.length - 1).toString();
      var contentType = strippedPathSplit.slice(strippedPathSplit.length - 2, strippedPathSplit.length - 1).toString();

      if (contentCategory === "ir" || contentCategory === "sustainability") {
        var buildStrippedPath = strippedPathSplit.slice(0, strippedPathSplit.length - 2);
        buildStrippedPath.push(contentCategory, contentType);
        var newStrippedPath = buildStrippedPath.join("/");
        jQuery('.news-listing-link').attr('href', newStrippedPath);
      }
      else {
        jQuery('.news-listing-link').attr('href', strippedPath);
      }

    }
    // Acuia search input box.
    if (jQuery("#acquiaSearchParent").length > 0) {
      var acquiaSearchMain = document.getElementById("acquiaSearchParent").querySelector(".js-form-item-keyword");
      var clearabletag = document.createElement("i");
      clearabletag.setAttribute('class', 'searchremove');
      var clearabletagtext = document.createTextNode("×");
      clearabletag.appendChild(clearabletagtext);
      acquiaSearchMain.appendChild(clearabletag);
      jQuery('.searchremove').not(':last').remove();
      jQuery("#acquiaSearchParent").each(function () {
        var $inp = jQuery(this).find("input:text"),
            $cle = jQuery(this).find(".searchremove");
        if ($inp.val() != "") {
          $cle.show();
        }
        else {
          $cle.hide();
        }
        $inp.on("input", function () {
          $cle.toggle(!!this.value);
        });
        $cle.on("touchstart click", function (e) {
          e.preventDefault();
          $inp.val("").trigger("input");
        });
      });
    }
});
