let screen = document.querySelector(".screen");
let power_btn = document.querySelector(".button.power");
let player = document.querySelector(".player");

//Plyer movement constants
const playerVerticalDelta = 36;
const playerDown = 0;
const playerLeft = 33;
const playerRight = 66;
const playerUp = 100;

console.table(playerUp, playerRight, playerDown, playerLeft);

//power the game on
function powerOn() {
  screen.classList.add("on");
  power_btn.classList.add("active");
  player.classList.add("on");
}

//change player direction
function faceUp() {
  player.style.backgroundPosition = `0% ${playerUp}%`;
}

function faceRight() {
  player.style.backgroundPosition = `0% ${playerRight}%`;
}

function faceDown() {
  player.style.backgroundPosition = `0% ${playerDown}%`;
}

function faceLeft() {
  player.style.backgroundPosition = `0% ${playerLeft}%`;
}

//Set player animation class

powerOn();
