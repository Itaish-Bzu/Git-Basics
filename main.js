'use strict'
var size = 100

function onBallClick() {
  size += 50
  const elBall = document.querySelector('.ball')
  elBall.style.height = size + 'px'
  elBall.style.width = size + 'px'
  elBall.innerText = size
  if (size >= 400) {
    size = 50
  }
}
