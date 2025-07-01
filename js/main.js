'use strict'
var gBallSize = 100

function onBallClick(elBall,maxDiameter) {
  gBallSize  += getRandomInt(20, 60)
  const color = getRandomColor()
  if (gBallSize  > maxDiameter) {
    gBallSize  = 100
  }
  elBall.style.height = gBallSize  + 'px'
  elBall.style.width = gBallSize  + 'px'
  elBall.innerText = gBallSize 
  elBall.style.backgroundColor = color
}
