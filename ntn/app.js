'use script';

const btnOn = document.querySelector('.btnOn');
const gameBoy = document.querySelector('.gameBoy');

btnOn.addEventListener('click', () => {
  gameBoy.classList.toggle('gameOn');
});

const goUp = document.querySelector('.goUp');
const goDown = document.querySelector('.goDown');
const goRight = document.querySelector('.goRight');
const goLeft = document.querySelector('.goLeft');

const secondScreen = document.querySelector('.secondScreen');
const cross = document.querySelector('.cross');
const sacha = document.querySelector('.sacha');

window.addEventListener('click', (e) => {
  //   console.log(e.target);
  //   console.log(sacha.getBoundingClientRect());
  console.log(sacha.getBoundingClientRect());
});

const intervalDown = setInterval(moveDown, 100);
const intervalUp = setInterval(moveUp, 100);
const intervalRight = setInterval(moveRight, 100);
const intervalLeft = setInterval(moveLeft, 100);

function moveDown() {
  //   sacha.style.transform = 'translateY(5px)';
  sacha.getBoundingClientRect().top += '5px';
}
function moveUp() {
  sacha.style.transform = 'translateY(-5px)';
}
function moveRight() {
  sacha.style.transform = 'translateY(5px)';
}
function moveLeft() {
  sacha.style.transform = 'translateY(-5px)';
}

let sachaX = sacha.getBoundingClientRect().x;
let sachaY = sacha.getBoundingClientRect().y;

// GO DOWN
goDown.addEventListener('mousedown', () => {
  secondScreen.classList.add('Down');
  moveDown();
  // sachaX += '10px';
  // sacha.style.positio
  // setInterval(() => {
  //   sacha.style.transform = 'translateY(10px)';
  // }, 100);
});

goDown.addEventListener('mouseup', () => {
  secondScreen.classList.remove('Down');
  clearInterval(intervalDown);
});

// GO UP
goUp.addEventListener('mousedown', () => {
  secondScreen.classList.add('moveUp');
  moveUp();
  // setInterval(() => {
  //   sacha.style.transform = 'translateY(-10px)';
  // }, 100);
});

goUp.addEventListener('mouseup', () => {
  secondScreen.classList.remove('moveUp');
  //   sacha.getBoundingClientRect().top -= '5px';
  clearInterval(moveUp);
});

// GO RIGHT
goRight.addEventListener('mousedown', () => {
  secondScreen.classList.add('moveRight');
  moveRight();
  //   setInterval(() => {
  //     sacha.style.transform = 'translateX(10px)';
  //   }, 100);
});
goRight.addEventListener('mouseup', () => {
  secondScreen.classList.remove('moveRight');
  //   sacha.getBoundingClientRect().left += '5px';
  clearInterval(moveRight);
});

// GO LEFT
goLeft.addEventListener('mousedown', () => {
  secondScreen.classList.add('moveLeft');
  moveLeft();
  // setInterval(() => {
  //   sacha.style.transform = 'translateX(-10px)';
  // }, 100);
});
goLeft.addEventListener('mouseup', () => {
  secondScreen.classList.remove('moveLeft');
  //   sacha.getBoundingClientRect().top -= '5px';
  clearInterval(moveLeft);
});

//   window.addEventListener('mousemove', () =>{
//     console.log(sacha.getBoundingClientRect().x);
//     console.log(sacha.getBoundingClientRect().y);
//   })

// while(secondScreen.contains('.Down')){
//     moveDown();
// }
