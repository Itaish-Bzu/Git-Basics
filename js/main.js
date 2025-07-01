'use strict'
var gBallsSize = 100


const gBalls = document.querySelectorAll('.balls')

function onBallClick(elBall, maxDiameter, ) {
  gBallsSize += getRandomInt(20, 60)
  const color = getRandomColor()

  if (gBallsSize > maxDiameter) {
    gBallsSize = 100
  }
  elBall.style.height = gBallsSize + 'px'
  elBall.style.width = gBallsSize + 'px'
  elBall.innerText = gBallsSize
  elBall.style.backgroundColor = color
}

function onChangeBallsColor() {
  for (var i = 0; i < 2; i++) {
    gBalls[i].style.backgroundColor = getRandomColor()
  }
}

