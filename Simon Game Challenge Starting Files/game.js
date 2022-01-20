gamePattern = [];
userClickedPattern = [];

let blue = new Audio("sounds/blue.mp3");
let green = new Audio("sounds/green.mp3");
let red = new Audio("sounds/red.mp3");
let yellow = new Audio("sounds/yellow.mp3");
let wrong = new Audio("sounds/wrong.mp3");
let counter = 0;
let level = 0;
let buttonColours = ["red", "blue", "green", "yellow"];

$(document).keydown(function() {
  if (counter === 0) {
    nextSequence();
    counter++;
  }
});


$(".btn").click(function() {
  userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length -1);
});

// function declarations
function nextSequence() {
  level++;
  userClickedPattern = [];
  $("#level-title").text("Level " + level);
  randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  animatePress(randomChosenColour);
  playSound(randomChosenColour);

}

function playSound(input) {
  switch (input) {
    case "blue":
      blue.play();
      break;
    case "green":
      green.play();
      break;
    case "red":
      red.play();
      break;
    case "yellow":
      yellow.play();
      break;
    case "wrong":
      wrong.play();
      break;
    default:
      console.log(input);
  }
}

function animatePress(currentColour) {
  let pressedColour = $("#" + currentColour)
  pressedColour.addClass("pressed");
  setTimeout(function() {
    pressedColour.removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] !== gamePattern[currentLevel]) {
    gameOver();
    return false;
  }
  if (userClickedPattern.length === gamePattern.length){
    setTimeout(nextSequence, 1000);
    return true;
  }
  return true;
}

function gameOver() {
  playSound(wrong);
  let body = $("body");
  body.addClass("game-over");
  setTimeout(function() {
    body.removeClass("game-over");
  }, 200);
  level = 0;
  $("h1").text("Game Over, Press Any Key to Restart");
  counter = 0;
  gamePattern = [];
  userClickedPattern = [];
}
