let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomNumber2 = Math.floor(Math.random() * 6 + 1);

let dice1 = document.querySelector('.img1');
dice1.setAttribute("src", `images/dice${randomNumber1}.png`);

let dice2 = document.querySelector('.img2');
dice2.setAttribute("src", `images/dice${randomNumber2}.png`);

let header = document.querySelector(".header-text");

if (randomNumber1 > randomNumber2){
  header.textContent = "Player 1 wins!";
}
else if (randomNumber2 > randomNumber1){
  header.textContent = "Player 2 wins!";
} else {
  header.textContent = "It's a draw!";
}
