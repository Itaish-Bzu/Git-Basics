'use strict'
var size = 100

function onBallClick() {
  size += getRandomInt(20, 60)
  const color = getRandomColor()
  if (size > 400) {
    size = 100
  }
  const elBall = document.querySelector('.ball')
  elBall.style.height = size + 'px'
  elBall.style.width = size + 'px'
  elBall.innerText = size
  elBall.style.backgroundColor = color
}
