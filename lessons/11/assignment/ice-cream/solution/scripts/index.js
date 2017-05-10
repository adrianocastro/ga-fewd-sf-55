var setFlavor = function () {
  // What flavor was clicked?
  var pickedFlavor = event.target;
  // What is the text for that flavor?
  // Turn pickedFlavor into jQuery object before calling .text()
  var flavorText = $(pickedFlavor).text();

  // Update order details with picked flavor
  $('#picked-flavor').text(flavorText);
}

$('#flavor li').click(setFlavor);

// Pass the click handler function as an argument directly
// instead of defining it before and passing it by name
$('#scoops li').click(function () {
  // What num scoops was clicked?
  // JS saves the event.target in `this`
  var pickedNumScoops = this;
  // What is the text for that numScoop?
  // Turn pickedNumScoops into jQuery object before calling .text()
  var scoopsText = $(pickedNumScoops).text();

  // Update order details with picked numScoops
  $('#picked-num-scoops').text(scoopsText);
});