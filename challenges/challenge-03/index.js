function findSafestPath(dream) {
  const rows = dream.length
  const cols = dream[0].length
  const dangers = new Array(cols).fill(0)

  dangers[0] = dream[0][0]

  for (let col = 1; col < cols; col++) {
    dangers[col] = dangers[col - 1] + dream[0][col]
  }

  for (let row = 1; row < rows; row++) {
    dangers[0] += dream[row][0]
    for (let col = 1; col < cols; col++) {
      dangers[col] = Math.min(dangers[col], dangers[col - 1]) + dream[row][col]
    }
  }

  return dangers[cols - 1]
}

const result = findSafestPath([
  [1, 2, 3],
  [3, 2, 1],
  [4, 4, 4],
])
console.log({ result }) // 10
