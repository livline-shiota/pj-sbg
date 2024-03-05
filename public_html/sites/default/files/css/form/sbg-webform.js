(function($) {

  Drupal.behaviors.sbg_webform = {
    attach: function(context, settings) {

      // Submit Button
      // Add puseudo button and submit real button.
      $('form.webform-submission-form input[type="submit"]').once('puseudo_submit').each(function() {
        if ($(this).parent().hasClass('form-managed-file')) {
          // .form-managed-file = ウェブフォームのファイルアップロードボタン、アップロード削除ボタンには適用しない。
          return;
        }

        $(this).hide();

        var submitButton = $(this);
        var value = $(this).attr('value');
        var base_path = settings.path.baseUrl;

        // Replace Submit Button.
        var replace = $('<div class="btn btn-important margin-center"><a href=""><div><span>' + value + '</span><div class="link-arrow link-arrow-small"><img src="' + base_path + 'sites/default/files/assets/img/common/link_arrow_wh.svg" alt="→"></div></div></a></div>');

        if ($(this).hasClass('webform-button--previous')) {
          // Replace Edit Back Button.
          replace = $('<div class="btn"><a href=""><div><div class="link-arrow-l link-arrow-small"><img src="' + base_path + 'sites/default/files/assets/img/common/link_arrow_l_bk.svg" alt="→"></div><span>' + value + '</span></div></a></div>');
        }

        replace.insertAfter($(this)).children('a').click(function() {
          submitButton.click();
          return false;
        });
      });

      // Move Form Actions to Form Element Container.
      $('form.webform-submission-form #edit-actions').once('webform_actions').each(function() {
        if ($(this).closest('form').find('.webform-submission-data').length) {
          var moveToElement = $(this).prev('#edit-preview').find('.contents-inner-860');
          $(this).appendTo(moveToElement);
        }
        else {
          var moveToElement = $(this).prev('#edit-webform-body').find('.contents-inner-860').children('.footer-margin');
          $(this).insertBefore(moveToElement);
        }
      });

      // Hide message area in form start screen.
      if ($('body').hasClass('path-webform') && ! $('body').find('.webform-submission-data').length) {
        $('.status-messages').hide();
      }

      // English Separate in Preview Page
      $('#edit-preview .contact-confirm-table th').once('preview_label').each(function() {
        var text = $(this).text();
        $(this).html(text.replace(' / ', '<br />'));
      });

      // Select
      $('.select ul.select-list li a').click(function() {
        var selected_label = $(this).text();
        var real_select = $(this).closest('.select').children('select');
        var selected_val = '';
        real_select.children('option').each(function() {
          if ($(this).text() == selected_label) {
            selected_val = $(this).attr('value');
          }
        });
        real_select.val(selected_val).trigger('change');
      });
    }
  }

})(jQuery);