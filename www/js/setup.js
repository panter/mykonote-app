// make all urls absolute
$.ajaxPrefilter(function(options) {
  options.url = 'https://app.mykonote.com' + options.url;
});
