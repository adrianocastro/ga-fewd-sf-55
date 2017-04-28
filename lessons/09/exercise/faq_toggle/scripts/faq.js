function showAnswer1() {
  $('#answer1').slideToggle();
}

function showAnswer2() {
  $('#answer2').slideToggle();
}

function showAnswer3() {
  $('#answer3').slideToggle();
}

// $('#answer1').hide();
// $('#answer2').hide();
// $('#answer3').hide();

// Leverage classes to hide all answers
$('.answer').hide();

$('#question1').click(showAnswer1);
$('#question2').click(showAnswer2);
$('#question3').click(showAnswer3);
