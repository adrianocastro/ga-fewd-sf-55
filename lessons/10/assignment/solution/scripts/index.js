var currentYear = 2017;
var name = prompt('What is your name?');
var yob = prompt('What year where you born in?')

// Insert salutation into salutation placeholder
$('#salutation').text('Hello ' + name);

var age = currentYear - yob;

var printMessage = function (rentalMessage, ageCategory) {
  $('#message').text(rentalMessage);
  console.log('Rental assessment successful: ' + ageCategory);
}

if (age >= 25) {
  printMessage('Happy rental', 'over age');
} else if (age < 25 && age >= 21) {
  printMessage('Pay Up', 'younglin');
} else {
  printMessage('Take the bus', 'baby');
}

