$(function() {
  $('ul.nav a').bind('click',function(event){
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - 70
    }, 1500,'easeInOutExpo');
    event.preventDefault();
  });
});
