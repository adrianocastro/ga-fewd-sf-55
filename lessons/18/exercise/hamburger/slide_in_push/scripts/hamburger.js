$('document').ready(function(){
  // Listen for click on menu toggler button
  $('#menu-toggler').click(function() {
    // Open menu
    $('body').toggleClass('menu-open');
    $('#menu-toggler').toggleClass('active');
  });
});