export function getXYPosition(i) {
  const x = i % 8;
  const y = Math.abs(Math.floor(i / 8) - 7);

  return { x, y }
}

export function isDarkSquare(i) {
  const { x, y } = getXYPosition(i);

  return (x + y) % 2 === 1;
}