$(document).ready(
  function () {

// NOTE: Variabile freccia sinistra
var prev = $('.fa-angle-left');
console.log(prev);

// NOTE: Varianile freccia destra
var next = $('.fa-angle-right');
console.log(next);

$(prev).click(
  function() {
    prevImage();
  }
);


$(next).click(
  function() {
    nextImage();
  }
);


$(document).keydown(
  function () {
    if (event.which == 37) {
      prevImage();
    } else if (event.which == 39) {
      nextImage();
    }
  }
);
});


// NOTE: FUNZIONI------------------------------------


function prevImage() {

  var imgActive = $('.images img.active');
  imgActive.removeClass('active');

  if (imgActive.hasClass('first')) {
    $('.images img.last').addClass('active');
  } else {
    imgActive.prev().addClass('active');
  }

  var circleActive = $('.nav i.active');
  circleActive.removeClass('active');

  if (circleActive.hasClass('first')) {
    $('.nav i.last').addClass('active');
  } else {
    circleActive.prev().addClass('active');
  }
}


function nextImage() {

  var imgActive = $('.images img.active');
  imgActive.removeClass('active');

  if (imgActive.hasClass('last')) {
    $('.images img.first').addClass('active');
  } else {
    imgActive.next().addClass('active');
  }

  var circleActive = $('.nav i.active');
  circleActive.removeClass('active');

  if (circleActive.hasClass('last')) {
    $('.nav i.first').addClass('active');
  } else {
    circleActive.next().addClass('active');
  }
}
