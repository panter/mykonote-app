// setup CORS
$.ajaxSetup({
  xhrFields: {
    withCredentials: true
  },
  crossDomain: true
});

// make all urls absolute
$.ajaxPrefilter(function(options) {
  options.url = 'http://192.168.1.7:3000' + options.url;
});
