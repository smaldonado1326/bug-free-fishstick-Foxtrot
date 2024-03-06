$(document).ready(function(){
  // Toggle navbar visibility on scroll
  var lastScrollTop = 0;
  $(window).scroll(function(event){
    var st = $(this).scrollTop();
    if (st > lastScrollTop){
       
        $('.navbar').slideUp();
    } else {
    
       $('.navbar').slideDown();
    }
    lastScrollTop = st;
  });

  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
  });

  $('.navbar-toggler').on('click', function() {
    $('.navbar-collapse').collapse('toggle');
  });
});
