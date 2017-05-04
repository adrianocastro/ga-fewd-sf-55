$('#grayButton').click(toggleDark);
$('#whiteButton').click(toggleDefault);

function toggleDark() {
  $('body').addClass('dark-theme');
}

function toggleDefault() {
  $('body').removeClass('dark-theme');
}
