/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2016. MIT licensed.
 */
(function ($, window, document, undefined) {

  'use strict';

$('.toggle').click(function() {
  $('.button_container').toggleClass('active');
  $('#overlay').toggleClass('open');
});

})(jQuery, window, document);