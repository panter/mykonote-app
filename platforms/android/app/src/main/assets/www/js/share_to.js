function ShareTo() {
}

ShareTo.prototype.listen = function() {
  window.plugins.intent.setNewIntentHandler(function (intent) {
    this.handleIntent(intent);
  }.bind(this));

  window.plugins.intent.getCordovaIntent(function (intent) {
    this.handleIntent(intent);
  }.bind(this));
};

ShareTo.prototype.handleIntent = function(intent) {
  if (intent.action !== 'android.intent.action.SEND') {
    return;
  }

  if (intent.type === 'text/plain') {
    var title = intent.extras['android.intent.extra.SUBJECT'] || '';
    var content = intent.extras['android.intent.extra.TEXT'] || '';

    EventHive.publish('note.create', { title: title, content: content });
  }
  else if (intent.type.startsWith('image/')) {
    EventHive.publish('spinner.toggle', { show: true });
    intent.clipItems.forEach(function(item) {
      new SaneFileReader(item.uri).readAsBase64(function (data) {
        // FIXME: 600 is not the actual resulting pixels, the plugin calculates
        // some weird factor stuff
        window.imageResizer.resizeImage(
          function(data) {
            var image = '<img src="data:' + item.type + ';base64,' + data.imageData + '" />';

            EventHive.publish('note.create', { title: '', content: image });
            EventHive.publish('spinner.toggle', { show: false });
            NoticeFlash.show(
              'The image was scaled down to ' +
              data.width + ' × ' + data.height + ' px'
            );
          }, function (error) {
            EventHive.publish('spinner.toggle', { show: false });
            AlertFlash.show(error);
          }, data, 600, 600, {
            resizeType: ImageResizer.RESIZE_TYPE_MAX_PIXEL,
            imageDataType: ImageResizer.IMAGE_DATA_TYPE_BASE64,
            format: (item.type === 'image/png' ? ImageResizer.FORMAT_PNG : ImageResizer.FORMAT_JPG)
          }
        );
      });
    });
  }
};
