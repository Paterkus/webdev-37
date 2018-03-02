$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    center: true,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    navText: false,
    responsive: {
      0:{
        items: 1,
        nav: true
      },
      600:{
        items: 2,
        nav: true
      },
      800:{
        items: 3,
        nav: true
      }
    }
  });
});