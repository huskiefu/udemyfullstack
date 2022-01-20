let buttons = document.querySelectorAll(".drum");

// defining each sound
let crash = new Audio('sounds/crash.mp3');
let kickBass = new Audio('sounds/kick-bass.mp3');
let snare = new Audio('sounds/snare.mp3');
let tom1 = new Audio('sounds/tom-1.mp3');
let tom2 = new Audio('sounds/tom-2.mp3');
let tom3 = new Audio('sounds/tom-3.mp3');
let tom4 = new Audio('sounds/tom-4.mp3');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    playSound(this.textContent);
    pressKey(this.textContent)
  });
}

document.addEventListener("keydown", (e) => {
  playSound(e.key);
  pressKey(e.key);
});


function playSound(input) {
  switch (input) {
    case "w":
      crash.play();
      break;
    case "a":
      kickBass.play();
      break;
    case "s":
      snare.play();
      break;
    case "d":
      tom1.play();
      break;
    case "j":
      tom2.play();
      break;
    case "k":
      tom3.play();
      break;
    case "l":
      tom4.play();
      break;
    default:
      console.log(input);
  }
}

function pressKey(input){
  let pressedKey = document.querySelector("." + input);
  pressedKey.classList.add("pressed");
  setTimeout(function() {
    pressedKey.classList.remove("pressed");
  }, 100);
}
