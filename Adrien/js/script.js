let screen = document.querySelector(".screen");
let power_btn = document.querySelector(".button.power");
let player = document.querySelector(".player");
let up_btn = document.querySelector(".button.up");
let right_btn = document.querySelector(".button.right");
let down_btn = document.querySelector(".button.down");
let left_btn = document.querySelector(".button.left");

let gameRunning = false;

//Plyer movement constants
const playerDown = 0;
const playerLeft = (1 / 3) * 100;
const playerRight = (2 / 3) * 100;
const playerUp = 100;

//Default background position
let backgroundX = -105;
let backgroundY = -235;

//Player move boolean
let playerMove = false;

//power the game on
function powerToggle() {
  screen.classList.toggle("on");
  power_btn.classList.toggle("active");
  player.classList.toggle("on");

  gameRunning = !gameRunning;
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

//Movement Intervals
setInterval(() => {
  switch (playerMove) {
    case "up":
      backgroundY = backgroundY + 1;
      break;
    case "down":
      backgroundY = backgroundY - 1;
      break;
    case "left":
      backgroundX = backgroundX + 1;
      break;
    case "right":
      backgroundX = backgroundX - 1;
      break;

    default:
      break;
  }

  if (playerMove !== false) {
    screen.style.backgroundPosition = `${backgroundX}px ${backgroundY}px`;
  }
}, 1);

//Events

//Power
power_btn.addEventListener("click", () => {
  powerToggle();
});

//Move player
//up
up_btn.addEventListener("mousedown", () => {
  playerMove = "up";
  player.classList.add("goUp");
});

//down
down_btn.addEventListener("mousedown", () => {
  playerMove = "down";
  player.classList.add("goDown");
});

//left
left_btn.addEventListener("mousedown", () => {
  playerMove = "left";
  player.classList.add("goLeft");
});

//right
right_btn.addEventListener("mousedown", () => {
  playerMove = "right";
  player.classList.add("goRight");
});

document.addEventListener("mouseup", () => {
  let finishPosition = playerMove;

  console.log(getComputedStyle(player).backgroundPositionY);
  playerMove = false;
  player.classList.remove("goUp");
  player.classList.remove("goDown");
  player.classList.remove("goLeft");
  player.classList.remove("goRight");

  switch (finishPosition) {
    case "up":
      faceUp();
      break;
    case "down":
      faceDown();
      break;
    case "left":
      faceLeft();
      break;
    case "right":
      faceRight();
      break;

    default:
      break;
  }

  console.log(getComputedStyle(player).backgroundPositionY);
});
