$(document).ready(function () {
  var ggs = document.querySelectorAll('.gg');
  var alterClass = function () {
    var ww = document.body.clientWidth;
    if (ww < 800) {
      $('.gg').removeClass('layer');
    } else if (ww >= 801) {
      $('.gg').addClass('layer');
    };

  };

  $(window).resize(function () {
    alterClass();
  });

  //Fire it when the page first loads:
  alterClass();
});
