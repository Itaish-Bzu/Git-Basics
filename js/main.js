'use strict'
var size = 100

function onBallClick() {
  size += getRandomInt(20,60)
  console.log(size );
    if (size >= 400) {
    size = 100
  }
  const elBall = document.querySelector('.ball')
  elBall.style.height = size + 'px'
  elBall.style.width = size + 'px'
  elBall.innerText = size

}
