/*
 * jquerytest
 * https://github.com/ufo/test1
 *
 * Copyright (c) 2014 ufoqhmdt@gmail.com
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.jquerytest = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.jquerytest = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.jquerytest.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.jquerytest.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].jquerytest = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
