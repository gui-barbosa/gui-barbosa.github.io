$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1200)
    .next()
    .fadeIn(1200)
    .end()
    .appendTo('#slideshow');
}, 3000);