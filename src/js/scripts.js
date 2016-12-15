(function ($, window, document, undefined) {

  'use strict';

$('.toggle').click(function() {
  $('.button_container').toggleClass('active');
  $('#overlay').toggleClass('open');
});

})(jQuery, window, document);
