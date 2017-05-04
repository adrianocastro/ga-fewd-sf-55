var currentYear = 2017;
var name = prompt('What is your name?');
var yob = prompt('What year where you born in?')

// Declare alertMessage to define it later
var alertMessage;

// Insert salutation into salutation placeholder
$('#salutation').text('Hello ' + name);

var age = currentYear - yob;

if (age >= 25) {
  alertMessage = 'Happy rental';
} else if (age < 25 && age >= 21) {
  alertMessage = 'Pay Up';
} else {
  alertMessage = 'Take the bus';
}

// TODO: Insert message into message placeholder
$('#message').text(alertMessage);
