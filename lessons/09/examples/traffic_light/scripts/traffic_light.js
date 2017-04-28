function toggleStop() {
  clearLights();
  $('#stopLight').css('background-color', 'red');
}

$('#stopButton').click(toggleStop);

function toggleSlow() {
  clearLights();
  $('#slowLight').css('background-color', 'yellow');
}

$('#slowButton').click(toggleSlow);

function toggleGo() {
  clearLights();  
  $('#goLight').css('background-color', 'green');
}

$('#goButton').click(toggleGo);

$('#offButton').click(clearLights);

function clearLights() {
  $('#stopLight').css('background-color', 'black');
  $('#slowLight').css('background-color', 'black');
  $('#goLight').css('background-color', 'black');
}

$('#onButton').click(allOn);

function allOn () {
  $('#slowLight').css('background-color', 'yellow');
  $('#goLight').css('background-color', 'green');
  $('#stopLight').css('background-color', 'red')
}