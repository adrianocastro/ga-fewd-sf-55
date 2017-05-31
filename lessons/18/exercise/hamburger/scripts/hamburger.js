$('document').ready(function(){
  console.log('hello');
  // Listen for click on menu toggler button
  $('#menu-toggler').click(function() {
    // Find menu and show it
    $('#main-menu').slideToggle();
  });
});