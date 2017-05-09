// Define a function makeCone.
// It should accept two parameters, flavor and numberScoops.

// The function should take the parameters and log the following to the console:
// 
// "Coming right up!"
// "Flavor: chocolate"
// "Scoops: 3"

// Hint: You'll want to use string concatenation (+) to combine the variables
// with the human-readable text when logging the message to the console.

// Now, call that function, passing in "chocolate" and 3 as the arguments.

console.log('Get ready for some ice-cream!');

// makeCone function definition
var makeCone = function (flavor, numberScoops) {
  console.log('Coming right up!');
  console.log('Flavor: ' + flavor);
  console.log('Scoops: ' + numberScoops);
}

// makeCone function call
// passing arguments 'chocolate' and 3
// that correspond to the `flavor` and `numberScoops`
makeCone('chocolate', 3);

makeCone('vanilla', 1);
