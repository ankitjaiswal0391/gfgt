function initialize() {
  var html = document.getElementById('html');
  var css = document.getElementById('css');
  var js = document.getElementById('javascript');
  // Load the C++ library or binding

  var code = document.getElementById('code').contentWindow.document;
  document.body.onkeyup = function () {
    code.open(); //for opening the code
    code.writeln(
      html.value +
        '<style>' +
        css.value +
        '</style>' +
        '<script>' +
        js.value +
        '</script'
    );
    code.close();
  };
  document.body.onkeyup;
}

initialize();
