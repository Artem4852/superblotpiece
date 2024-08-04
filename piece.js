const width = 120;
const height = 120;

const size = 10
const space = 5;

const gridSize = Math.floor(width/(size+space))

setDocDimensions(width, height);

function rect(w, h) {
  return [
    [
      [-w/2, h/2],
      [w/2, h/2],
      [w/2, -h/2],
      [-w/2, -h/2],
      [-w/2, h/2]
    ]
  ]
}

function getToCenter(square) {
  const factor = 1
  return [
    [
      [square[0][0]*factor, square[0][1]*factor],
      [0, 0]
    ],
    [
      [square[1][0]*factor, square[1][1]*factor],
      [0, 0]
    ],
    [
      [square[2][0]*factor, square[2][1]*factor],
      [0, 0]
    ],
    [
      [square[3][0]*factor, square[3][1]*factor],
      [0, 0]
    ]
  ]
}

const finalLines = [];

bt.join(finalLines);

for (let x = 0; x < gridSize; x++) {
  for (let y = 0; y < gridSize; y++) {
    if ((x != 0 && x != gridSize-1 && 0<y<gridSize) &&
       (y != 0 && y != gridSize-1 && 0<x<gridSize)) continue
    const square = rect(10, 10);
    bt.translate(square, [(x+1.5-space)*(size+space), (y+1.5-space)*(size+space)]);
    bt.rotate(square, [bt.randInRange(-2*(gridSize-y), 2*(gridSize-y))])

    const toCenter = getToCenter(square[0]);
    
    bt.join(finalLines, square);
    bt.join(finalLines, toCenter)
  }
}

const finalLinesBounds = bt.bounds(finalLines);

bt.translate(
  finalLines,
  [ width / 2, height / 2],
  finalLinesBounds.cc
);

drawLines(finalLines);
