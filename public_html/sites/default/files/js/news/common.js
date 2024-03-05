(function($, Drupal) {

  // Wrapped news search category function with the drupal.behaviors
  // Wrapped on line 5-6, 18-19.
  Drupal.behaviors.newsCommonJS = {
    attach: function(context, settings) {
      $('.news-search-category input', context).on('change', function (){
        const idx = $('.news-search-category input').index(this);
        if(idx === 0) {
          const checked = $(this).prop('checked');
          $('.news-search-category input').prop('checked', false);
          $(this).prop('checked', checked);
        }
        else {
          $('.news-search-category input').eq(0).prop('checked', false);
        }
      });
    }
  };

  // Custom js since line 23 - 42, please sync it carefully.
  // Get value from select list then pass it to news year filter.
  Drupal.behaviors.newsYearSelectOption = {
    attach: function (context) {

      // Point to a virtual year element.
      let newsYearElement = $('.search-year ul.select-list li a', context);

      // Force click on year filter.
      newsYearElement.on('click', function () {

        // Get value from the select element.
        let newsYearElementOption = $(this).data("option");

        // Find element on the year option.
        let newsYearOption = $('[data-drupal-selector="edit-year"] input[name="year"][value="'+newsYearElementOption+'"]');

        // Click it.
        newsYearOption.click();
      });
    }
  };

  Drupal.behaviors.selectLists = {
    attach: function (context) {

      // Move select function from
      // docroot/themes/custom/sbg/src/js/common/module.js:585
      $('.select').each(function(i){
        var select = $(this);

        $('> div > button', select).attr('aria-expanded', 'false');
        $('> div > button', select).attr('aria-controls', 'select_' + i);
        $('.select-list', select).attr('id', 'select_' + i);

        $('> div > div', select).show();
        $('> div > div', select).height(Math.min($('.select-list', select).outerHeight(), 230));
        $('> div > div', select).hide();

        var openSelect = function() {
          select.addClass('on');
          $('> div > div', select).slideDown();
          $('.simplebar-content-wrapper', select).scrollTop(0);

          if($('.click-mask', select).length > 0) {
            $('.click-mask', select).show();
          }
          else {
            select.prepend($('<div class="click-mask">'));
            $('.click-mask', select).on('click', function(){
              closeSelect();
            });
          }
        };

        var closeSelect = function() {
          select.removeClass('on');
          $('> div > div', select).slideUp();
          $('.click-mask', select).hide();
        };

        new SimpleBar($('> div > div', select)[0], {
          autoHide: false,
        });

        $('> div > button', select).on('click', function(){
          if(select.hasClass('on')) {
            closeSelect();
            $(this).attr('aria-expanded', 'true');
          }
          else {
            openSelect();
            $(this).attr('aria-expanded', 'false');
          }
        });

        $('.select-list a', select).on('click', function(){
          if($(this).hasClass('link') == false) {
            var val = $(this).text();
            $('> div > button', select).html('<span>' + val + '</span>');
            closeSelect();
            return false;
          }
        });
      });
    }
  };

  // Wrapped resizeNewsSearch function with the drupal.behaviors
  // Wrapped on line 98-111.
  Drupal.behaviors.resizeNewsSearch = {
    attach: function (context) {
      $(window).on('resize.newsSearchCategory', function(){
        $('.news-search-category').each(function(){
          var node = $(this);

          $('li', node).matchHeight();
          $('li', node).each(function(){
              $('input + div', this).outerHeight($(this).height());
          });
        });
      }).trigger('resize.newsSearchCategory');
    }
  };
}(jQuery, Drupal));
