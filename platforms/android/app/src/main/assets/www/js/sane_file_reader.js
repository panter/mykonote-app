function SaneFileReader(fileName) {
  this.fileName = fileName;
}

// credits to https://www.neontribe.co.uk/cordova-file-plugin-examples/
// and http://www.html5rocks.com/en/tutorials/file/filesystem/
SaneFileReader.prototype.readAsBase64 = function(done) {
  window.resolveLocalFileSystemURL(this.fileName, function (fileEntry) {
    fileEntry.file(function (file) {
      var reader = new FileReader();

      reader.onloadend = function (e) {
        var result = window.btoa(this.result);
        done(result);
      };

      // readAsDataUrl returns corrupt data for large images so we use
      // readAsBinaryString in conjunction with window.btoa instead.
      reader.readAsBinaryString(file);
    }, this.errorHandler.bind(null, this));
  }.bind(this), this.errorHandler.bind(null, this));
}

SaneFileReader.prototype.errorHandler = function(e) {
  var msg = '';

  switch (e.code) {
    case FileError.QUOTA_EXCEEDED_ERR:
      msg = 'Storage quota exceeded';
    break;
    case FileError.NOT_FOUND_ERR:
      msg = 'File not found';
    break;
    case FileError.SECURITY_ERR:
      msg = 'Security error';
    break;
    case FileError.INVALID_MODIFICATION_ERR:
      msg = 'Invalid modification';
    break;
    case FileError.INVALID_STATE_ERR:
      msg = 'Invalid state';
    break;
    default:
      msg = 'Unknown error';
    break;
  };

  AlertFlash.show(msg + ' when trying to read file ' + this.fileName);
}
