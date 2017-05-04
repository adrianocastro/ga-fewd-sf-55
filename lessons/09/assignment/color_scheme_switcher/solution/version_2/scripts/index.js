$('#grayButton').click(switchGray);
$('#whiteButton').click(switchWhite);

function switchGray() {
  $('body').css('background-color', 'gray');
  $('body').css('color', 'white');
}

function switchWhite() {
  $('body').css('background-color', 'white');
  $('body').css('color', 'black');
}
