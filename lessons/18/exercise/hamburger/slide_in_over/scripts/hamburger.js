$('document').ready(function(){
  // Listen for click on menu toggler button
  $('#menu-toggler').click(function() {
    // Find menu and show it
    $('#main-menu').toggleClass('open');
  });
});