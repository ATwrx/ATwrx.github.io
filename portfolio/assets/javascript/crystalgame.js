var wins = 0;
var losses = 0;
var randomNumber = 0;
var scoreCounter = 0;

// Assign random number to guess field & init the game
function getRandomNumbers() {
  scoreCounter = 0;
  $("#current-score").html(scoreCounter);
  randomNumber = Math.floor(Math.random() * 100 + 20);
  $("#random-number").html(randomNumber);
  $("#c1").attr("value", getCrystalNumbers());
  $("#c2").attr("value", getCrystalNumbers());
  $("#c3").attr("value", getCrystalNumbers());
  $("#c4").attr("value", getCrystalNumbers());
}

// Returns a random number between 1 & 12
function getCrystalNumbers() {
  var crystalVal = Math.floor(Math.random() * 12 + 1);
  return crystalVal;
}

// Tests the score after each click
function updateScore() {
  if (scoreCounter < randomNumber) {
    return;
  } else if (scoreCounter > randomNumber) {
    losses++;
    $("#losses").text(losses);
    getRandomNumbers();
  } else {
    wins++;
    $("#wins").text(wins);
    getRandomNumbers();
  }
}

// The click event listeners
$(".start").click(function(){
  $(".instructions").hide();
  getRandomNumbers();
});

$(".crystal").click(function() {
  var num = $(this).val();
  scoreCounter += parseInt(num);
  $("#current-score").html(scoreCounter);
  updateScore();
});
