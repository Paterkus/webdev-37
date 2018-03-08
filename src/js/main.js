$(function() {
  $(document).scroll(function() {
    if($(this).scrollTop() > 50) {
      $('.page-header').css('background-color', 'rgba(188, 46, 58, 1)')
    } else {
      $('.page-header').css('background-color', 'rgba(188, 46, 58, 0)')
    }
  });
});