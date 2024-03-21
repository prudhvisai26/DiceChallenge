const text = document.querySelector("h1");
const body = document.querySelector(".container");
const randomValue1 = Math.floor(Math.random() * 6) + 1;
const randomValue2 = Math.floor(Math.random() * 6) + 1;
const dice = document.querySelector(".dice");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");

body.addEventListener("load", play());

function play() {
  var randomImage1 = "images/" + "dice" + randomValue1 + ".png";
  var randomImage2 = "images/" + "dice" + randomValue2 + ".png";

  img1.setAttribute("src", randomImage1);
  img2.setAttribute("src", randomImage2);

  if (randomValue1 > randomValue2) {
    text.innerHTML = "Player 1 Wins!!";
  } else if (randomValue2 > randomValue1) {
    text.innerHTML = "Player 2 Wins!!";
  } else {
    text.innerHTML = "Game ends in Draw";
  }
}
