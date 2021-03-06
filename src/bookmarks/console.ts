function readFile(entry, successCallback, errorCallback) {
  entry.file(function (file) {
    let reader = new FileReader();

    reader.onload = function () {
      successCallback(reader.result);
    };

    reader.onerror = function () {
      errorCallback(reader.error);
    };

    reader.readAsText(file);
  }, errorCallback);
}
